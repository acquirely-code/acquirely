# /lead-gen audit application form

The **Test form** button in the `/lead-gen` hero opens an inbuilt copy of the Zoho "Lead Gen Lead Quality Audit Application" (`components/audit-form/`, rules in `lib/audit-form/rules.ts`, route `app/api/lead/audit`).

The server sorts each lead with the same rules as Zoho:

| Bucket | Rule | Visitor sees | Lead value |
| --- | --- | --- | --- |
| Rejected | Any of: budget "Not right now", revenue "Under ₹10L", ad spend "Not running ads yet" | "Thank you for sharing your details. Our team will review them and get in touch if there's a suitable opportunity." | ₹0 |
| Qualified | All of: budget "Yes, that works", revenue not "Under ₹10L", ad spend "₹1L – ₹5L" or "₹5L+" | "Thanks! Looks like we could be a great fit…", then sent to the [LGARC Zoho Bookings page](https://booknow.acquirely.in/LGARC/#/LGARC) after 1.5 seconds | ₹1000 |
| Nurture | Anything else, e.g. "Need to think about it" | "Thank you for sharing your details. Our team will get back to you shortly." | ₹200 |

## Storage (Google Sheet via Apps Script, same as the Agastya conclave form)

Every submission is saved with its bucket. In production it goes to the first tab of the [Lead Gen Audit sheet](https://docs.google.com/spreadsheets/d/1BJw4b2yDzxVuvplnlb7maK_9f9hjovCOp2sjmxqf9fg/edit) through a small Apps Script attached to the sheet. No Google Cloud project or service account is needed. Locally, without the webhook, rows go to `.data/audit-leads.csv`, which opens in Excel.

To connect the sheet:

1. Open the sheet, then **Extensions → Apps Script**.
2. Replace the code with `scripts/audit-sheet-webhook.gs` and save.
3. **Deploy → New deployment → Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone**, then deploy and approve the permissions.
4. Copy the web app URL (ending in `/exec`) into Vercel as `AUDIT_SHEET_WEBHOOK_URL` (Production and Preview), and redeploy. For local testing, put it in `.env.local`. Never commit it: the repo is public and anyone with the URL can add rows.

The script writes the header row itself on the first submission. If you change the script later, use **Deploy → Manage deployments → Edit → New version**, which keeps the same URL. Only the website's server calls the URL; the browser never sees it. On Vercel the form answers "isn't available right now" until the URL is set.

## Tracking

Fired only after the server has saved the lead, never on button click.

- **Meta Pixel (browser):** `Lead` with `{value, currency: "INR"}` and eventID `lead_<id>`; for qualified also `QualifiedLead` (custom) with value 1000 and eventID `ql_<id>`.
- **Meta Conversions API (server):** the same events with the same `event_id`, so Meta de-duplicates each pair. Includes SHA-256 hashed email, phone (with country code), first/last name and lead ID, plus IP, user agent, `_fbp` and `_fbc` (or one built from `fbclid`). Needs `NEXT_PUBLIC_META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN`. A CAPI failure is logged and never fails the lead.
- **GA4:** `generate_lead` with value, currency and `lead_bucket`; for qualified also `qualify_lead`. Mark `generate_lead` / `qualify_lead` as key events in GA4. Needs `NEXT_PUBLIC_GA4_MEASUREMENT_ID`.

If GTM also loads the Pixel or GA4 and fires its own Lead/generate_lead for this form, you will double count.

To check: set `META_CAPI_TEST_EVENT_CODE`, submit once per bucket, and confirm in Events Manager > Test events that each event shows as **Browser and Server, deduplicated**. Then remove the test code.

Once this replaces the Zoho form, remove the Phase 1 redirect pages.

## Environment variables

There is deliberately no `.env.example`: hosts like Cloudflare read it and demand a value for every key. All are optional except the webhook.

| Variable | Purpose | If blank |
| --- | --- | --- |
| `AUDIT_SHEET_WEBHOOK_URL` | Apps Script web app URL (ending `/exec`). Secret: keep it out of git. | Rows go to a local CSV; on a host the form answers "unavailable" |
| `AUDIT_LOCAL_FILE` | Local CSV path, ignored when the webhook is set | `.data/audit-leads.csv` |
| `NEXT_PUBLIC_AUDIT_BOOKING_URL` | Where qualified leads are sent | `https://booknow.acquirely.in/LGARC/#/LGARC` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel and CAPI | Meta tracking skipped |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` | GA4 | GA4 skipped |
| `META_CAPI_ACCESS_TOKEN` | Events Manager > Pixel > Settings > Conversions API > Generate access token | CAPI skipped |
| `META_CAPI_TEST_EVENT_CODE` | Events Manager > Test events, only while testing. `none` counts as blank | No test code sent |
| `META_GRAPH_API_VERSION` | Graph API version for CAPI | `v23.0` |

`NEXT_PUBLIC_*` values are baked in at build time, so redeploy after changing them.
