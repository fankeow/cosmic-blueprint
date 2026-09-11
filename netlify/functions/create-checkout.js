// ---------------------------------------------------------------------------
// Cosmic Blueprint — create a Stripe Checkout session for the $47 upsell.
//
// Runs on Netlify's servers. The buyer's computed chart is stored server-side
// (Netlify Blobs) under a random token, and the token rides through Stripe so
// the paid Blueprint can be rebuilt and delivered at /blueprint.html?token=...
//
// Requires env vars: STRIPE_SECRET_KEY, and optionally SITE_URL.
// ---------------------------------------------------------------------------

const Stripe = require("stripe");
const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

const PRICE_CENTS = 4700; // $47 one-off

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return json(204, {});
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return json(500, { error: "Checkout is not configured yet. (STRIPE_SECRET_KEY is missing.)" });

  let input;
  try { input = JSON.parse(event.body || "{}"); } catch (e) { return json(400, { error: "Bad request." }); }

  const chart = input.chart;
  const email = String(input.email || "").trim().toLowerCase();
  const name = String(input.name || "").trim();
  const bornLine = String(input.bornLine || "").trim();
  if (!chart || !chart.type) return json(400, { error: "We could not read your chart. Please regenerate it and try again." });

  const stripe = Stripe(secret);
  const token = crypto.randomBytes(16).toString("hex");
  const host = event.headers["x-forwarded-host"] || event.headers.host || "";
  const site = (process.env.SITE_URL || (host ? "https://" + host : "")).replace(/\/$/, "");

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email || undefined,
      line_items: [{
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: PRICE_CENTS,
          product_data: {
            name: "Your Cosmic Blueprint",
            description: "Your personalised Human Design deep-dive report, created from your exact chart.",
          },
        },
      }],
      success_url: site + "/blueprint.html?token=" + token,
      cancel_url: site + "/chart.html?checkout=cancelled",
      metadata: { token, email },
    });

    const store = getStore("blueprints");
    await store.setJSON(token, {
      paid: false,
      email,
      name,
      bornLine,
      chart,
      session_id: session.id,
      created: Date.now(),
    });

    return json(200, { url: session.url });
  } catch (err) {
    return json(502, { error: "We could not start checkout just now. Please try again in a moment." });
  }
};
