import type { Metadata } from "next";
import { BASE_PATH, CONTACT_EMAIL, CONTENT_YEAR, LAST_UPDATED, OG_IMAGE_URL, PAGE_URL, SITE_URL } from "./site";

/**
 * FAQ copy. Rendered as the visible FAQ list AND as FAQPage JSON-LD, so the two
 * can never drift apart. `**text**` marks the bolded key phrase in the visible
 * answer (stripped for JSON-LD).
 *
 * Each answer restates the question in its first words and stays around 40-60
 * words: the length and shape Google and AI answer engines lift as a snippet.
 */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is an ecommerce profit calculator?",
    a: "A **ecommerce profit calculator** is a tool that turns your orders, prices, costs, ad spend and delivery rates into net profit, margin, ROAS and break-even numbers. You use it before raising ad budgets, changing a product's price or switching couriers, so you see the real outcome first.",
  },
  {
    q: "How do I calculate ecommerce profit?",
    a: "To calculate **ecommerce profit**, start with revenue from delivered orders only. Subtract product cost, ad spend, forward shipping, RTO shipping, fulfilment, COD fees, payment gateway fees, other per-order costs and fixed costs. What remains is your net profit. Divide it by delivered revenue to get your net margin.",
  },
  {
    q: "What is a good profit margin for ecommerce?",
    a: "A **good ecommerce profit margin** is one that survives a bad week. There is no universal number, because category, price point, ad costs and COD share all change it. You want enough net margin to absorb a jump in CPA or a drop in delivery rate without slipping into a loss.",
  },
  {
    q: "What is the difference between markup and margin?",
    a: "The main difference between **markup and margin** is the base. Markup is profit divided by cost, while margin is profit divided by selling price. A product bought at ₹400 and sold at ₹1,000 has a 150% markup but a 60% gross margin. Margin is the number to plan ad budgets with.",
  },
  {
    q: "What is RTO in ecommerce?",
    a: "**RTO (return to origin)** in ecommerce is an order that was shipped but never delivered, usually a COD parcel the customer refused or could not be reached for. The courier sends it back to you. You pay ad cost, forward shipping and return shipping on it, and collect no revenue.",
  },
  {
    q: "How does RTO affect ecommerce profitability?",
    a: "**RTO hurts ecommerce profitability** twice. Every returned COD order has already cost you ad spend, forward shipping and packing, then adds a return shipping fee and brings in no revenue. So a lower COD delivery rate cuts your revenue and raises your costs at the same time.",
  },
  {
    q: "What is the difference between COD and prepaid orders?",
    a: "The main difference between **COD and prepaid orders** is when the money arrives. Prepaid customers pay at checkout, so delivery rates are high and the main cost is a gateway fee. COD customers pay the courier on delivery, which lifts conversion but brings more RTO and a flat COD fee.",
  },
  {
    q: "How do I calculate break-even CPA?",
    a: "Your **break-even CPA** is the most you can pay in ads per generated order before net profit hits zero. Work out what each generated order earns before ads, after delivery rate, product cost, shipping, RTO, fulfilment and fees. Then subtract your fixed costs per order.",
  },
  {
    q: "What is break-even ROAS?",
    a: "**Break-even ROAS** is the return on ad spend at which net profit is exactly zero. It equals delivered revenue divided by break-even ad spend. If your actual ROAS, measured on delivered revenue rather than platform-reported revenue, is above it, the campaign is profitable under your assumptions.",
  },
  {
    q: "Why is my ROAS good but my store is losing money?",
    a: "**Your ROAS can look good while you lose money** because ad platforms count every purchase, including COD orders that later go RTO or get cancelled. Your bank account only sees delivered orders. Recalculate ROAS on delivered revenue and compare it with a break-even ROAS that includes shipping, RTO and fees.",
  },
  {
    q: "Should shipping costs be included in ecommerce profit?",
    a: "Yes, **shipping costs belong in ecommerce profit**. Forward shipping is paid on every dispatched order and return shipping on every failed delivery. Leaving them out is one of the most common reasons a product looks profitable in the ads dashboard but loses money in the bank account.",
  },
  {
    q: "Can I use this calculator for Shopify or Meta Ads?",
    a: "Yes, you can use this **ecommerce calculator with Shopify, Meta Ads** and any other platform. It doesn't connect to anything, so enter your averages from Shopify or your order system, and your cost per purchase from Meta Ads, Google Ads or any other ad channel.",
  },
];

/** Drops the `**` bold markers used in FAQ copy. */
export const plainText = (s: string) => s.replace(/\*\*/g, "");

const OG_TITLE = "Ecommerce Profit & ROI Calculator";
// Year signals freshness in the SERP. It follows LAST_UPDATED, so it only
// changes when the page genuinely changes.
const TITLE = `Ecommerce Profit Calculator (${CONTENT_YEAR}) – ROAS & Break-Even CPA`;
const DESCRIPTION =
  "Free ecommerce profit calculator for COD and prepaid stores. See your real profit, margin, ROAS, RTO cost and break-even CPA before you scale ads. No signup.";

export const pageMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  openGraph: {
    type: "website",
    siteName: "Acquirely",
    locale: "en_IN",
    title: OG_TITLE,
    description:
      "Estimate your ecommerce profit, margin, ROAS, RTO costs and break-even CPA for COD and prepaid orders. Free, no signup.",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Ecommerce Profit & ROI Calculator: profit, ROAS and break-even CPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: "Estimate your ecommerce profit, margin, ROAS, RTO costs and break-even CPA. Free, no signup.",
    images: [OG_IMAGE_URL],
  },
};

const ORG_ID = `${SITE_URL}/#organization`;

/** One connected graph: who publishes the page, where it sits, and what the tool does. */
export const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Acquirely",
      url: `${SITE_URL}/`,
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}${BASE_PATH}/assets/acquirely-logo.png`,
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      dateModified: LAST_UPDATED,
      isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: "Acquirely", publisher: { "@id": ORG_ID } },
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE_URL, width: 1200, height: 630 },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#app` },
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acquirely", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Ecommerce Profit Calculator", item: PAGE_URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${PAGE_URL}#app`,
      name: OG_TITLE,
      url: PAGE_URL,
      description:
        "Estimate ecommerce profit, net margin, ROAS, RTO costs, break-even CPA and break-even ROAS for COD and prepaid eCommerce orders.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      inLanguage: "en-IN",
      dateModified: LAST_UPDATED,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      featureList: [
        "COD and prepaid order mix",
        "RTO and failed-delivery costs",
        "Net profit and margin",
        "ROAS and break-even ROAS",
        "Break-even CPA and CPA headroom",
        "Shareable calculation links",
      ],
      publisher: { "@id": ORG_ID },
    },
  ],
};

/**
 * Google currently limits FAQ rich results to authoritative government/health
 * sites, so this is descriptive markup only. It still gives AI answer engines a
 * clean question/answer map of the page.
 */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: plainText(a) },
  })),
};
