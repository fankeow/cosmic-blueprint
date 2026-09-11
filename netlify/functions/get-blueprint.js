// ---------------------------------------------------------------------------
// Cosmic Blueprint — return a buyer's chart for the delivery page.
//
// Payment-gated: only returns the chart once Stripe confirms the session is
// paid. The chart is read straight back out of the Checkout session metadata.
//
// Requires env vars: STRIPE_SECRET_KEY.
// ---------------------------------------------------------------------------

const Stripe = require("stripe");
const zlib = require("zlib");

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    body: JSON.stringify(body),
  };
}

exports.handler = async (event) => {
  const sid = (event.queryStringParameters || {}).session_id || "";
  if (!/^cs_[A-Za-z0-9_]+$/.test(sid)) return json(400, { ok: false, reason: "missing" });

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) return json(500, { ok: false, reason: "config" });

  const stripe = Stripe(secret);
  let s;
  try { s = await stripe.checkout.sessions.retrieve(sid); }
  catch (e) { return json(404, { ok: false, reason: "notfound" }); }
  if (!s) return json(404, { ok: false, reason: "notfound" });
  // "paid" for a normal purchase; "no_payment_required" when a 100% off coupon makes it free.
  if (s.payment_status !== "paid" && s.payment_status !== "no_payment_required") return json(200, { ok: false, reason: "unpaid" });

  const m = s.metadata || {};
  const n = parseInt(m.cn || "0", 10);
  let packed = "";
  for (let i = 0; i < n; i++) packed += (m["c" + i] || "");

  let chart;
  try { chart = JSON.parse(zlib.gunzipSync(Buffer.from(packed, "base64")).toString("utf8")); }
  catch (e) { return json(500, { ok: false, reason: "corrupt" }); }

  return json(200, {
    ok: true,
    chart,
    meta: { name: m.nm || "", bornLine: m.bl || "", businessMode: "chapter" },
  });
};
