// Browser conversion events for the inbuilt audit / Funnel Review Call forms. Call only after the server has saved the lead.
import { META_PIXEL_ID } from "@/lib/meta-pixel";

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

// The root layout always defines fbq (to switch off autoConfig) but leaves init to GTM, which doesn't run the pixel
// tag on every page. So init here once regardless: Meta ignores a repeat init of the same pixel ID.
let fbqInitialised = false;
function ensureFbq(id: string) {
  if (window.fbq) {
    if (!fbqInitialised) window.fbq("init", id);
    fbqInitialised = true;
    return;
  }
  fbqInitialised = true;
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

// Meta: InitiateCheckout for qualified only, with the same event ID as the server's Conversions API event
// (lib/audit-form/meta-capi.ts) so Meta de-duplicates the pair. Lead is NOT sent from code: a Meta Event setup
// tool rule fires it on /lead-gen-thank-you, where Zoho Bookings lands after a call is booked.
// GA4: generate_lead for every bucket, plus qualify_lead for qualified only.
export function trackAuditLead(leadId: string, bucket: "qualified" | "nurture" | "rejected", value: number, qualifiedValue: number, formId = "lead_gen_audit") {
  if (typeof window === "undefined") return;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

  if (bucket === "qualified") {
    ensureFbq(META_PIXEL_ID);
    window.fbq?.("track", "InitiateCheckout", { value: qualifiedValue, currency: "INR", lead_bucket: bucket }, { eventID: `ic_${leadId}` });
  }
  if (ga4Id) {
    ensureGtag(ga4Id);
    window.gtag?.("event", "generate_lead", { send_to: ga4Id, value, currency: "INR", lead_bucket: bucket, form_id: formId });
    if (bucket === "qualified") {
      window.gtag?.("event", "qualify_lead", { send_to: ga4Id, value: qualifiedValue, currency: "INR", form_id: formId });
    }
  }
}
