// ---------------------------------------------------------------------------
// Cosmic Blueprint — return a buyer's chart for the delivery page.
//
// Payment-gated: only returns the chart once Stripe confirms the session is
// paid. The blueprint.html page renders the Blueprint client-side from this.
//
// Requires env vars: STRIPE_SECRET_KEY.
// ---------------------------------------------------------------------------

const Stripe = require("stripe");
const { getStore } = require("@netlify/blobs");

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  const token = (event.queryStringParameters || {}).token || "";
  if (!/^[a-f0-9]{16,64}$/.test(token)) return json(400, { ok: false, reason: "missing" });

  const store = getStore("blueprints");
  let rec = null;
  try { rec = await store.get(token, { type: "json" }); } catch (e) { rec = null; }
  if (!rec) return json(404, { ok: false, reason: "notfound" });

  let paid = rec.paid === true;

  // Fallback: if the webhook hasn't landed yet, confirm straight from Stripe.
  if (!paid && rec.session_id && process.env.STRIPE_SECRET_KEY) {
    try {
      const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
      const s = await stripe.checkout.sessions.retrieve(rec.session_id);
      if (s && s.payment_status === "paid") {
        paid = true;
        rec.paid = true;
        await store.setJSON(token, rec);
      }
    } catch (e) { /* leave unpaid */ }
  }

  if (!paid) return json(200, { ok: false, reason: "unpaid" });

  return json(200, {
    ok: true,
    chart: rec.chart,
    meta: { name: rec.name || "", bornLine: rec.bornLine || "", businessMode: "chapter" },
  });
};
