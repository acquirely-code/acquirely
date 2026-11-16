import type { Metadata } from "next";
import { BASE_PATH, CONTACT_EMAIL, LAST_UPDATED, OG_IMAGE_URL, PAGE_URL, REVIEWER, SITE_URL } from "./site";

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
    q: "What is an ecommerce calculator?",
    a: "An **ecommerce calculator** is a free tool that turns your orders, prices, costs and ad spend into the numbers that decide if your store makes money: net profit, profit margin, ROAS and break-even CPA. You use it before you raise ad budgets, change a price or switch couriers, so you see the outcome first.",
  },
  {
    q: "How do I calculate ecommerce profit?",
    a: "To calculate **ecommerce profit**, start with revenue from delivered orders only. Subtract product cost, ad spend, forward shipping, RTO shipping, fulfilment, COD fees, payment gateway fees, other per-order costs and fixed costs. What remains is your net profit. Divide it by delivered revenue to get your net profit margin.",
  },
  {
    q: "What is a good profit margin for ecommerce?",
    a: "A **good ecommerce profit margin** is one that survives a bad month. There is no single number, because category, price, ad costs and COD share all change it. Test it: raise your CPA by 20% in the calculator. If net margin stays well above 5%, you have room to scale.",
  },
  {
    q: "What is the difference between gross margin and net margin?",
    a: "The main difference between **gross margin and net margin** is which costs you subtract. Gross margin only removes product cost. Net margin removes every cost, including ads, shipping, RTO, fees and fixed costs. A ₹1,499 product with ₹400 product cost has a 73% gross margin but can keep only 30% as net margin.",
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
    q: "Can I use this ecommerce calculator for dropshipping?",
    a: "Yes, this **ecommerce calculator works for dropshipping**. Enter your supplier price as product cost, and use the \"All dispatched orders\" setting if your supplier bills every shipped unit, even when it comes back as RTO. Everything else, from ad cost to COD fees, works the same as for a D2C brand.",
  },
  {
    q: "Can I use this calculator for Shopify, Amazon, Flipkart or Meesho?",
    a: "Yes, you can use this **ecommerce calculator for Shopify, Amazon, Flipkart, Meesho** or your own store. It doesn't connect to anything. Enter your averages from your seller dashboard, add marketplace commission and fees as other cost per order, and use your cost per purchase from Meta Ads or Google Ads.",
  },
];

/** Drops the `**` bold markers used in FAQ copy. */
export const plainText = (s: string) => s.replace(/\*\*/g, "");

const OG_TITLE = "Ecommerce Calculator: Profit, ROAS & Break-Even";
const TITLE = "Ecommerce Calculator - Profit, ROAS & Break-Even CPA";
const DESCRIPTION =
  "Free ecommerce calculator for Shopify, D2C and dropshipping stores. Find your real profit, margin, ROAS and break-even CPA after shipping, COD and RTO.";

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
      "Find your real ecommerce profit, margin, ROAS, RTO cost and break-even CPA for COD and prepaid orders. Free, no signup.",
    url: PAGE_URL,
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Ecommerce calculator: profit, ROAS and break-even CPA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: "Find your real ecommerce profit, margin, ROAS, RTO cost and break-even CPA. Free, no signup.",
    images: [OG_IMAGE_URL],
  },
};

const ORG_ID = `${SITE_URL}/#organization`;
const REVIEWER_ID = `${PAGE_URL}#reviewer`;

/** One connected graph: who publishes and reviewed the page, where it sits, and what the tool does. */
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
      address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
    },
    {
      "@type": "Person",
      "@id": REVIEWER_ID,
      name: REVIEWER.name,
      jobTitle: REVIEWER.role,
      description: REVIEWER.bio,
      sameAs: [REVIEWER.linkedin],
      worksFor: { "@id": ORG_ID },
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
      reviewedBy: { "@id": REVIEWER_ID },
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acquirely", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Ecommerce Calculator", item: PAGE_URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${PAGE_URL}#app`,
      name: "Ecommerce Calculator",
      alternateName: ["Ecommerce Profit Calculator", "Dropshipping Profit Calculator"],
      url: PAGE_URL,
      description:
        "Free ecommerce calculator for net profit, net margin, ROAS, RTO costs, break-even CPA and break-even ROAS on COD and prepaid orders. Works for Shopify, D2C and dropshipping stores.",
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
        "Net profit, net margin and ROI",
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
