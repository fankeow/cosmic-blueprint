// ---------------------------------------------------------------------------
// Cosmic Blueprint — create a Stripe Checkout session for the $47 upsell.
//
// The buyer's computed chart is compressed and tucked into the Checkout
// session's metadata, so the paid Blueprint can be rebuilt and delivered at
// /blueprint.html?session_id=... with no external storage.
//
// Requires env vars: STRIPE_SECRET_KEY, and optionally SITE_URL.
// ---------------------------------------------------------------------------

const Stripe = require("stripe");
const zlib = require("zlib");

const PRICE_CENTS = 4700; // $47 one-off
const CHUNK = 480;        // Stripe metadata values cap at 500 chars

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

  // Compress the chart and split it into metadata-sized chunks.
  let parts;
  try {
    const packed = zlib.gzipSync(Buffer.from(JSON.stringify(chart), "utf8")).toString("base64");
    parts = [];
    for (let i = 0; i < packed.length; i += CHUNK) parts.push(packed.slice(i, i + CHUNK));
  } catch (e) { return json(400, { error: "We could not prepare your chart. Please regenerate it and try again." }); }
  if (parts.length > 45) return json(400, { error: "Your chart is unusually large. Please contact us and we will sort it out." });

  const metadata = { cn: String(parts.length), nm: name.slice(0, 480), bl: bornLine.slice(0, 480), em: email.slice(0, 480) };
  parts.forEach((p, i) => { metadata["c" + i] = p; });

  const stripe = Stripe(secret);
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
      success_url: site + "/blueprint.html?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: site + "/chart.html?checkout=cancelled",
      metadata,
    });
    return json(200, { url: session.url });
  } catch (err) {
    return json(502, { error: "We could not start checkout just now. Please try again in a moment." });
  }
};
