// ---------------------------------------------------------------------------
// Cosmic Blueprint — Stripe webhook.
//
// On a completed checkout it hands the buyer's permanent Blueprint link to Kit
// (custom field + tag + delivery sequence) so Kit emails it to them. The buyer
// also lands on the Blueprint instantly via success_url, so this email is the
// keep-forever backup.
//
// Requires env vars: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, KIT_API_KEY,
// and SITE_URL (your live site origin).
// ---------------------------------------------------------------------------

const Stripe = require("stripe");

const KIT_BASE = "https://api.kit.com/v4";
const DELIVERY_TAG_ID = 23298268;       // "Cosmic Blueprint Purchased"
const DELIVERY_SEQUENCE_ID = 2890391;   // "Cosmic Blueprint Delivery"

async function kit(path, method, apiKey, payload) {
  try {
    const res = await fetch(KIT_BASE + path, {
      method,
      headers: { "Content-Type": "application/json", Accept: "application/json", "X-Kit-Api-Key": apiKey },
      body: payload ? JSON.stringify(payload) : undefined,
    });
    return res.ok;
  } catch (e) { return false; }
}

exports.handler = async (event) => {
  const secret = process.env.STRIPE_SECRET_KEY;
  const whsec = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !whsec) return { statusCode: 500, body: "Webhook not configured." };

  const stripe = Stripe(secret);
  const raw = event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body;

  let evt;
  try {
    evt = stripe.webhooks.constructEvent(raw, event.headers["stripe-signature"], whsec);
  } catch (e) {
    return { statusCode: 400, body: "Invalid signature." };
  }

  if (evt.type === "checkout.session.completed") {
    const s = evt.data.object;
    const email = (s.customer_details && s.customer_details.email) || (s.metadata && s.metadata.em) || "";
    const site = (process.env.SITE_URL || "").replace(/\/$/, "");
    const url = site + "/blueprint.html?session_id=" + s.id;
    const apiKey = process.env.KIT_API_KEY;

    if (apiKey && email) {
      await kit("/subscribers", "POST", apiKey, {
        email_address: email, state: "active", fields: { blueprint_url: url },
      });
      await kit("/tags/" + DELIVERY_TAG_ID + "/subscribers", "POST", apiKey, { email_address: email });
      await kit("/sequences/" + DELIVERY_SEQUENCE_ID + "/subscribers", "POST", apiKey, { email_address: email });
    }
  }

  return { statusCode: 200, body: "ok" };
};
