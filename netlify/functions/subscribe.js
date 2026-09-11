// ---------------------------------------------------------------------------
// DannyBunny — Human Design chart opt-in capture (Kit / ConvertKit v4)
//
// This runs on Netlify's servers, NOT in the browser. Your Kit API key lives
// only in the KIT_API_KEY environment variable (Netlify > Site settings >
// Environment variables). It is never sent to the page and never exposed to
// visitors. The browser only ever POSTs to /api/subscribe.
// ---------------------------------------------------------------------------

const KIT_BASE = "https://api.kit.com/v4";

// The Kit objects for this funnel (already created in Dan's account).
const TAG_ID = 23273842;        // "Human Design Chart"
const SEQUENCE_ID = 2889380;    // "Human Design Chart Nurture"

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

async function kit(path, method, apiKey, payload) {
  const res = await fetch(KIT_BASE + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Kit-Api-Key": apiKey,
    },
    body: payload ? JSON.stringify(payload) : undefined,
  });
  let data = null;
  try { data = await res.json(); } catch (e) { /* some 2xx return no body */ }
  return { ok: res.ok, status: res.status, data };
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }
  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.KIT_API_KEY;
  if (!apiKey) {
    return json(500, { error: "The email service is not configured yet. (KIT_API_KEY is missing.)" });
  }

  let input;
  try {
    input = JSON.parse(event.body || "{}");
  } catch (e) {
    return json(400, { error: "Bad request." });
  }

  const email = String(input.email || "").trim().toLowerCase();
  const firstName = String(input.first_name || "").trim();
  const fullName = String(input.full_name || "").trim();
  const birthPlace = String(input.birth_place || "").trim();
  const hdType = String(input.human_design_type || "").trim();
  const strategy = String(input.strategy || "").trim();
  const authority = String(input.authority || "").trim();
  const profile = String(input.profile || "").trim();

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return json(400, { error: "Please enter a valid email address." });
  }

  // Build the custom-field payload from whatever we were given. On the first
  // call (from the landing form) we usually have name + place; the results
  // page calls again with the computed type/strategy/authority/profile.
  const fields = {};
  if (fullName) fields.full_name = fullName;
  if (birthPlace) fields.birth_place = birthPlace;
  if (hdType) { fields.human_design_type = hdType; fields.type = hdType; }
  if (strategy) fields.strategy = strategy;
  if (authority) fields.inner_authority = authority;
  if (profile) fields.profile = profile;

  try {
    // 1) Upsert the subscriber (create-or-update by email). Kit v4 returns the
    //    existing subscriber if the email is already on the list.
    const upsertBody = { email_address: email, state: "active" };
    if (firstName) upsertBody.first_name = firstName;
    if (Object.keys(fields).length) upsertBody.fields = fields;

    const sub = await kit("/subscribers", "POST", apiKey, upsertBody);
    if (!sub.ok) {
      return json(502, { error: "We could not save your details just now. Please try again in a moment." });
    }

    // 2) Tag + add to the nurture sequence. Best-effort: a failure here should
    //    not block the visitor from seeing their chart, so we don't hard-fail.
    await Promise.allSettled([
      kit(`/tags/${TAG_ID}/subscribers`, "POST", apiKey, { email_address: email }),
      kit(`/sequences/${SEQUENCE_ID}/subscribers`, "POST", apiKey, { email_address: email }),
    ]);

    return json(200, { ok: true });
  } catch (err) {
    return json(500, { error: "Something went wrong on our side. Please try again." });
  }
};
