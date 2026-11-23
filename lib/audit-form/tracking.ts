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

// Meta Lead for /funnel-review-thank-you, where the D2CFRC booking page lands. Fired from code because the Meta
// Event setup tool's Lead rule only matches /lead-gen-thank-you, so the two never double up.
export function trackMetaLead() {
  if (typeof window === "undefined") return;
  ensureFbq(META_PIXEL_ID);
  window.fbq?.("track", "Lead");
}

// Button texts the Meta Event setup tool already turns into AddToCart (pixel config "estRules"), as Meta stores them:
// lowercase, punctuation and the word "a" dropped ("Book a Call" → "book call"). Keep in step with Events Manager.
export const CODELESS_ADD_TO_CART = new Set([
  "book your free audit",
  "apply for done for you",
  "get the growth engine",
  "start with lead engine",
  "yes i'm ready apply now",
  "book lead quality audit",
  "book call",
]);
export const ctaKey = (text: string) =>
  text.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9' ]+/g, " ").split(/\s+/).filter((w) => w && w !== "a").join(" ");

// Meta AddToCart when a CTA opens an inbuilt form, unless the setup tool already fires one for that button's text.
export function trackCtaAddToCart(cta: Element) {
  if (typeof window === "undefined") return;
  if (CODELESS_ADD_TO_CART.has(ctaKey(cta.textContent || ""))) return;
  ensureFbq(META_PIXEL_ID);
  window.fbq?.("track", "AddToCart");
}

// Meta: InitiateCheckout for qualified only, with the same event ID as the server's Conversions API event
// (lib/audit-form/meta-capi.ts) so Meta de-duplicates the pair. Lead is NOT sent at submit: it fires once the call is
// booked, from a Meta Event setup tool rule on /lead-gen-thank-you, or from trackMetaLead on /funnel-review-thank-you.
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
