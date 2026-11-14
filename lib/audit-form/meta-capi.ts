import { createHash } from "node:crypto";
import { LEAD_VALUE_INR, type AuditFields, type AuditOutcome } from "./rules";

// Server-side copies of the browser Pixel events, sent through Meta's Conversions API. Both use the same event_id
// ("lead_<id>", "ql_<id>"), so Meta keeps one of each pair. Skipped unless the Pixel ID and CAPI token are set.

const CAPI_TIMEOUT_MS = 4000;

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

export const auditEventIds = (leadId: string) => ({ lead: `lead_${leadId}`, qualified: `ql_${leadId}` });

export function metaCapiConfigured() {
  return !!(process.env.NEXT_PUBLIC_META_PIXEL_ID && process.env.META_CAPI_ACCESS_TOKEN);
}

function cookie(header: string | null, name: string) {
  const match = header?.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1] as string) : undefined;
}

// _fbc normally comes from the Pixel's cookie. If the visitor landed from an ad but the cookie isn't set yet,
// Meta's documented format can be built from the fbclid in the landing URL.
function clickId(cookieHeader: string | null, landingPageUrl: string) {
  const fromCookie = cookie(cookieHeader, "_fbc");
  if (fromCookie) return fromCookie;
  try {
    const fbclid = new URL(landingPageUrl).searchParams.get("fbclid");
    return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
  } catch {
    return undefined;
  }
}

type Context = { leadId: string; outcome: AuditOutcome; lead: AuditFields; landingPageUrl: string; ip: string; userAgent: string; cookieHeader: string | null };

export function buildAuditCapiEvents({ leadId, outcome, lead, landingPageUrl, ip, userAgent, cookieHeader }: Context) {
  const [first = "", ...rest] = lead.name.toLowerCase().split(/\s+/);
  const last = rest.join(" ");
  const user_data: Record<string, unknown> = {
    // Meta's normalisation: email trimmed + lowercase; phone digits only with country code, no "+" or leading 0.
    em: [sha256(lead.email.trim().toLowerCase())],
    ph: [sha256(`${lead.countryCode}${lead.phone}`.replace(/\D/g, ""))],
    fn: first ? [sha256(first)] : undefined,
    ln: last ? [sha256(last)] : undefined,
    external_id: [sha256(leadId)],
    client_ip_address: ip !== "unknown" ? ip : undefined,
    client_user_agent: userAgent || undefined,
    fbp: cookie(cookieHeader, "_fbp"),
    fbc: clickId(cookieHeader, landingPageUrl),
  };
  const ids = auditEventIds(leadId);
  const base = { event_time: Math.floor(Date.now() / 1000), action_source: "website", event_source_url: landingPageUrl || undefined, user_data };
  const events: Record<string, unknown>[] = [
    { ...base, event_name: "Lead", event_id: ids.lead, custom_data: { value: LEAD_VALUE_INR[outcome], currency: "INR", lead_bucket: outcome } },
  ];
  if (outcome === "qualified") {
    events.push({ ...base, event_name: "QualifiedLead", event_id: ids.qualified, custom_data: { value: LEAD_VALUE_INR.qualified, currency: "INR" } });
  }
  return events;
}

// Never throws: a tracking failure must not fail a lead that is already saved.
export async function sendAuditCapiEvents(context: Context) {
  if (!metaCapiConfigured()) return;
  const version = process.env.META_GRAPH_API_VERSION || "v23.0";
  const url = `https://graph.facebook.com/${version}/${encodeURIComponent(process.env.NEXT_PUBLIC_META_PIXEL_ID as string)}/events`;
  const body: Record<string, unknown> = { data: buildAuditCapiEvents(context), access_token: process.env.META_CAPI_ACCESS_TOKEN };
  // "none" counts as unset, for hosts that won't save an empty variable.
  const testCode = process.env.META_CAPI_TEST_EVENT_CODE?.trim();
  if (testCode && testCode.toLowerCase() !== "none") body.test_event_code = testCode;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(CAPI_TIMEOUT_MS),
      cache: "no-store",
    });
    if (!response.ok) console.error(`[audit-form] Meta CAPI responded with ${response.status}: ${(await response.text()).slice(0, 300)}`);
  } catch (error) {
    console.error("[audit-form] Meta CAPI failed:", error instanceof Error ? error.message : "unknown error");
  }
}
