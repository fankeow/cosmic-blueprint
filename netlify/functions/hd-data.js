// ---------------------------------------------------------------------------
// DannyBunny — Human Design chart calculation via BodyGraph API
//
// Runs on Netlify's servers, NOT in the browser. The BodyGraph API key lives
// only in the BODYGRAPH_API_KEY environment variable. The page posts birth
// details here; this function calls BodyGraph and returns the chart JSON.
// ---------------------------------------------------------------------------

const BODYGRAPH_BASE = "https://api.bodygraphchart.com";
const HD_DATA_PATH = "/v221006/hd-data";

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

  const apiKey = process.env.BODYGRAPH_API_KEY;
  if (!apiKey) {
    return json(500, { error: "The chart service is not configured yet. (BODYGRAPH_API_KEY is missing.)" });
  }

  let input;
  try { input = JSON.parse(event.body || "{}"); }
  catch (e) { return json(400, { error: "Bad request." }); }

  // Expected: date "YYYY-MM-DD HH:MM" (24h) and an IANA timezone e.g. "Europe/London".
  const date = String(input.date || "").trim();
  const timezone = String(input.timezone || "").trim();

  if (!/^\d{4}-\d{1,2}-\d{1,2}\s+\d{1,2}:\d{2}$/.test(date)) {
    return json(400, { error: "Birth date/time is missing or malformed." });
  }
  if (!timezone) {
    return json(400, { error: "Birth timezone is missing." });
  }

  const url = new URL(BODYGRAPH_BASE + HD_DATA_PATH);
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("date", date);
  url.searchParams.set("timezone", timezone);

  try {
    const res = await fetch(url.toString(), { method: "GET", headers: { Accept: "application/json" } });
    const text = await res.text();
    let data = null;
    try { data = JSON.parse(text); } catch (e) { /* non-JSON error body */ }

    if (!res.ok) {
      const msg = (data && (data.message || data.error)) || "The chart service could not build this chart.";
      return json(res.status === 401 || res.status === 403 ? 502 : 502, { error: msg });
    }
    // Pass the BodyGraph chart straight back to the page (the key is not in it).
    return json(200, { ok: true, chart: data });
  } catch (err) {
    return json(502, { error: "We could not reach the chart service just now. Please try again." });
  }
};
