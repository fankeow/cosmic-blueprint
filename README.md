# DannyBunny — Human Design chart funnel

A two-page funnel plus one serverless function.

- `index.html` — the cosmic landing page. Visitor enters name, birth date, exact
  birth time and birthplace (with city autocomplete), plus their email.
- `chart.html` — the results page. Reads the birth details, calculates the chart
  live with the open-source engine in `/assets`, and shows type, strategy,
  authority, profile, definition, the full bodygraph, a plain-words reading and
  the Blueprint upsell.
- `netlify/functions/subscribe.js` — captures the email into Kit. Your Kit API
  key lives **only** on Netlify's servers, never in the page.

The flow: landing form saves the email to Kit, stashes the birth details in the
browser (sessionStorage), and sends the visitor to `chart.html`, which draws the
chart and quietly updates their Kit record with the computed Human Design type.

---

## Deploy on Netlify (about 5 minutes)

You need a free Netlify account and your Kit (ConvertKit) API key.

### 1. Get your Kit API key
1. Log in to Kit.
2. Go to **Settings → Developer** (or Account → Advanced).
3. Under **API v4 keys**, create a key. Copy it.
   It looks like `kit_xxxxxxxxxxxxxxxxxxxxxxxx`.

### 2. Put this folder on Netlify

**Option A — drag and drop (fastest)**
1. Go to https://app.netlify.com/drop
2. Drag this whole `site-deploy` folder onto the page.
3. Netlify gives you a live URL straight away.

**Option B — connect a Git repo**
1. Push this folder to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build command: leave blank. Publish directory: `.` (the repo root, where
   `netlify.toml` sits). Deploy.

### 3. Add your two keys as environment variables
This is the important step — without these the chart and the email capture will not run.
1. In Netlify: **Site configuration → Environment variables → Add a variable**.
2. Add `KIT_API_KEY` — your Kit key from step 1.
3. Add `BODYGRAPH_API_KEY` — your BodyGraph API key (BodyGraph account, Settings → Developer/API).
4. Save, then **Deploys → Trigger deploy → Deploy site** so the functions pick them up.

Both keys live only on Netlify's servers. They are never in the page, the repo, or anything a visitor can see.

That's it. Visit your site, generate a chart, and check the subscriber lands in
Kit tagged **Human Design Chart** and in the **Human Design Chart Nurture**
sequence.

---

## What's wired into your Kit account

The function uses these objects (already created in your account):

| Thing | Name | ID |
|---|---|---|
| Tag | Human Design Chart | `23273842` |
| Sequence | Human Design Chart Nurture | `2889380` |
| Custom field | Human Design Type | key `human_design_type` |

It also fills these existing fields when known: `full_name`, `birth_place`,
`type`, `strategy`, `inner_authority`, `profile`.

If you ever recreate any of these, update the IDs at the top of
`netlify/functions/subscribe.js`.

---

## Custom domain

Point a subdomain (say `chart.dannybunny.co`) at the Netlify site under
**Domain management**. The pages use relative links, so nothing else changes.

---

## Notes and what's still a placeholder

- **The chart maths** comes from BodyGraph (the `hd-data` function), so type,
  strategy, authority, profile, definition, incarnation cross, centres,
  channels, gates and the bodygraph are all authoritative. If BodyGraph is ever
  unreachable, the page quietly falls back to the bundled open-source engine so
  a visitor always gets a chart. Each generated chart is one BodyGraph request;
  the city-to-timezone lookup is handled in the page and costs nothing.
- **The Blueprint "Unlock" button** is the real upsell placement but not yet
  connected to checkout. Wire it to your Stripe / payment link when ready
  (in `chart.html`, the button id is `buy`).
- **The nurture sequence** (Human Design Chart Nurture) is created but empty —
  add your emails in Kit whenever you like; new subscribers already flow into it.
- The hero video on the landing page is served from your CloudFront URL, so it
  plays on the live site even though it can't load inside a local preview.

---

## Test it locally (optional)

The email capture needs Netlify's function runtime, so use the Netlify CLI:

```
npm install -g netlify-cli
cd site-deploy
netlify dev
```

Then open the local URL it prints. Without the CLI you can still open
`index.html` over a simple web server to see the pages, but `/api/subscribe`
will 404 and the visitor will just continue to their chart (the capture is
best-effort by design, so a hiccup never blocks someone seeing their chart).
