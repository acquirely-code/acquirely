// Browser conversion events for the /lead-gen audit application. Call only after the server has saved the lead.

type Tracker = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Tracker;
    fbq?: Tracker & { callMethod?: Tracker; queue?: unknown[]; loaded?: boolean; version?: string; push?: Tracker };
    _fbq?: unknown;
  }
}

function loadScript(src: string) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

// The site's tags come through GTM, which may not have defined these. The scripts queue events until they load.
function ensureGtag(id: string) {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: false });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function ensureFbq(id: string) {
  if (window.fbq) return;
  const fbq: NonNullable<Window["fbq"]> = (...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  window._fbq = window._fbq || fbq;
  fbq("init", id);
  loadScript("https://connect.facebook.net/en_US/fbevents.js");
}

// Meta: Lead for every bucket (valued by bucket), plus QualifiedLead for qualified only. The event IDs match the
// server's Conversions API events (lib/audit-form/meta-capi.ts), so Meta de-duplicates each pair.
// GA4: generate_lead for every bucket, plus qualify_lead for qualified only.
export function trackAuditLead(leadId: string, bucket: "qualified" | "nurture" | "rejected", value: number, qualifiedValue: number) {
  if (typeof window === "undefined") return;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (pixelId) {
    ensureFbq(pixelId);
    window.fbq?.("track", "Lead", { value, currency: "INR", lead_bucket: bucket }, { eventID: `lead_${leadId}` });
    if (bucket === "qualified") {
      window.fbq?.("trackCustom", "QualifiedLead", { value: qualifiedValue, currency: "INR" }, { eventID: `ql_${leadId}` });
    }
  }
  if (ga4Id) {
    ensureGtag(ga4Id);
    window.gtag?.("event", "generate_lead", { send_to: ga4Id, value, currency: "INR", lead_bucket: bucket, form_id: "lead_gen_audit" });
    if (bucket === "qualified") {
      window.gtag?.("event", "qualify_lead", { send_to: ga4Id, value: qualifiedValue, currency: "INR", form_id: "lead_gen_audit" });
    }
  }
}
