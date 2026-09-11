# Cosmic Blueprint funnel — setup checklist

The funnel: landing (`index.html`) captures email to Kit and birth details, the
free chart (`chart.html`) draws the chart and shows the $47 upsell, checkout runs
on Stripe, and the paid Blueprint is delivered at `blueprint.html?token=...` (a
permanent private link) with the link also emailed via Kit.

## Flow, end to end
1. `chart.html` "Unlock my Blueprint" → `POST /api/create-checkout` with the
   buyer's computed chart. The function stores the chart in Netlify Blobs under a
   random token and opens a Stripe Checkout session ($47).
2. Buyer pays on Stripe → returns to `/blueprint.html?token=...`.
3. `blueprint.html` → `GET /api/blueprint?token=...` verifies the session is paid
   (via Stripe), returns the chart, and the page renders the full Blueprint.
4. Stripe fires `checkout.session.completed` → `/api/stripe-webhook` marks it
   paid and hands Kit the permanent link (custom field `blueprint_url` + tag
   "Cosmic Blueprint Purchased" + sequence "Cosmic Blueprint Delivery").
5. The Kit sequence emails the buyer their link.

## What you need to do

### 1. Stripe
- Add your **STRIPE_SECRET_KEY** to Netlify (test key first, then live).
- Create a webhook endpoint in Stripe pointing at
  `https://<your-site>/api/stripe-webhook`, event `checkout.session.completed`.
  Copy its signing secret into Netlify as **STRIPE_WEBHOOK_SECRET**.
  (If you enable the Stripe connector in our chat, I can create this webhook for you.)

### 2. Netlify environment variables
Site configuration → Environment variables. You should have `KIT_API_KEY` and
`BODYGRAPH_API_KEY` already. Add:
- `STRIPE_SECRET_KEY` — your Stripe secret key.
- `STRIPE_WEBHOOK_SECRET` — from the webhook above.
- `SITE_URL` — your live origin, e.g. `https://chart.dannybunny.co` (used to build
  the emailed Blueprint link). No trailing slash.

### 3. Kit delivery email
The sequence "Cosmic Blueprint Delivery" has one draft email ready. Open it in Kit,
check the **Open my Cosmic Blueprint** link shows your live URL when previewed
(it uses the `blueprint_url` field), send yourself a test, then **publish** it.

### 4. Videos
Drop the three report videos into `assets/media/` as `hero.mp4`,
`interlude.mp4` and `closing.mp4`. The Blueprint page already points at those
paths. Your voice note is already in place as `assets/media/dan-voice.mp3`.

### 5. Deploy
Redeploy the site (drag-and-drop the folder to Netlify, or trigger a deploy if
it's on Git). The functions pick up the new env vars on deploy.

## Kit objects (already created)
- Custom field: **Blueprint URL** (key `blueprint_url`, id 1362944)
- Tag: **Cosmic Blueprint Purchased** (id 23298268)
- Sequence: **Cosmic Blueprint Delivery** (id 2890391), one draft email

## Notes
- No pre-created Stripe product is needed; the $47 price is set inline at checkout.
- The buyer gets instant on-screen access via the success redirect; the email is
  the keep-forever backup, so it does not need to be instant.
- Blueprint links are permanent as long as the Netlify Blob store keeps the record.
