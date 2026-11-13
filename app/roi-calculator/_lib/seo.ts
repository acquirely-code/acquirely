import type { Metadata } from "next";
import { BASE_PATH, CONTACT_EMAIL, LAST_UPDATED, OG_IMAGE_URL, PAGE_URL, REVIEWER, SITE_URL } from "./site";

/**
 * FAQ copy. Rendered as the visible FAQ list AND as FAQPage JSON-LD, so the two
 * can never drift apart. `**text**` marks the bolded key phrase in the visible
 * answer (stripped for JSON-LD).
 *
 * Each answer restates the question in its first words and stays around 40-60
 * words: the length and shape Google and AI answer engines lift as a snippet.
 * Written in second person, no em-dashes. Numbers match the calculator's
 * example values, so they can be checked on the page.
 */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is an ROI calculator for business owners?",
    a: "An **ROI calculator for business owners** shows whether your marketing actually makes money. You enter your Meta and Google Ads spend, sales salaries, office cost, price and how many times customers pay. It then shows your profit, ROI, cost per customer and how many customers you need to break even.",
  },
  {
    q: "How do I calculate ROI for my business?",
    a: "To calculate **ROI for your business**, subtract your total cost from your revenue, divide the result by total cost and multiply by 100. For example, ₹7.5 lakh revenue on ₹3.15 lakh of ads, salaries and office cost gives ₹4.35 lakh profit and a 138% ROI.",
  },
  {
    q: "What is a good ROI for a business?",
    a: "A **good ROI for a business** is any number comfortably above 0%, because 0% means you only got your money back. How much higher depends on your margins and risk. Aim for enough ROI that one bad month, with fewer customers or costlier leads, still doesn't push you into a loss.",
  },
  {
    q: "What is the difference between ROI and ROAS?",
    a: "The main difference between **ROI and ROAS** is what they count as cost. ROAS divides revenue by ad spend only. ROI subtracts every cost, including salaries and office, and divides profit by that total. The same month can show a 4.7x ROAS and only a 138% ROI.",
  },
  {
    q: "Should I include salaries and office rent in ROI?",
    a: "Yes, you should include **salaries and office rent in ROI** when your team turns leads into sales. Leads don't close themselves. Leaving out the sales team and office makes ads look far more profitable than they are. In our example, ROI drops from 369% to 138% once they are counted.",
  },
  {
    q: "How do recurring payments change ROI?",
    a: "**Recurring payments** raise ROI because you pay once to win a customer, then collect from them many times. In our example, a one-time ₹5,000 sale gives a −60% ROI. The same customers paying 6 times give 138%, and paying 12 times gives 376%.",
  },
  {
    q: "How do I calculate ROI on Meta and Google Ads?",
    a: "To calculate **ROI on Meta and Google Ads**, add your monthly spend on both, then add sales salaries and office cost. Count the customers those leads produced and multiply by price and number of payments. Subtract total cost from that revenue and divide by total cost.",
  },
  {
    q: "What is cost per customer?",
    a: "**Cost per customer** is your total monthly cost divided by the new customers you won. It includes ads, salaries and office cost, so it is always higher than cost per lead. In our example, a ₹320 lead turns into a ₹12,600 customer once everything is counted.",
  },
  {
    q: "Can I use this ROI calculator for real estate, coaching or B2B services?",
    a: "Yes, you can use this **ROI calculator** for real estate, coaching, education, clinics, agencies, B2B services and any business that gets leads from ads and closes them with a sales team. Enter a price and number of payments that match how your customers actually pay you.",
  },
];

/** Drops the `**` bold markers used in FAQ copy. */
export const plainText = (s: string) => s.replace(/\*\*/g, "");

const OG_TITLE = "Free ROI Calculator for Business Owners - Acquirely";
// Keyword first, brand last, under ~60 characters.
const TITLE = OG_TITLE;
// ~155 characters, second person, keyword in the first words.
const DESCRIPTION =
  "Free ROI calculator for business owners. Add your Meta and Google Ads spend, sales salaries and office cost to see your real profit, ROI and cost per customer.";

export const pageMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  authors: [{ name: REVIEWER.name, url: REVIEWER.linkedin }],
  openGraph: {
    type: "website",
    siteName: "Acquirely",
    locale: "en_IN",
    title: OG_TITLE,
    description:
      "Is your marketing really making money? Add ad spend, sales salaries and office cost to see your real profit and ROI in 1 minute. Free, no signup.",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1280,
        height: 720,
        alt: "ROI Calculator for Business Owners: profit, ROI and cost per customer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: "See your real profit and ROI after ads, sales salaries and office cost. Free, no signup.",
    images: [OG_IMAGE_URL],
  },
};

const ORG_ID = `${SITE_URL}/#organization`;
const REVIEWER_ID = `${PAGE_URL}#reviewer`;

/** One connected graph: who publishes the page, who checked it, where it sits, and what the tool does. */
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
      primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE_URL, width: 1280, height: 720 },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}#app` },
      reviewedBy: { "@id": REVIEWER_ID },
      publisher: { "@id": ORG_ID },
      about: [
        { "@type": "Thing", name: "Return on investment" },
        { "@type": "Thing", name: "Customer acquisition cost" },
        { "@type": "Thing", name: "Lead generation" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Acquirely", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "ROI Calculator for Business Owners", item: PAGE_URL },
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${PAGE_URL}#app`,
      name: OG_TITLE,
      url: PAGE_URL,
      description:
        "Free ROI calculator for business owners. Calculates profit, ROI, cost per lead, cost per customer and break-even customers from Meta and Google Ads spend, sales salaries, office cost, price and recurring payments.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      inLanguage: "en-IN",
      dateModified: LAST_UPDATED,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      featureList: [
        "Meta Ads and Google Ads spend",
        "Sales team salaries",
        "In-house office cost",
        "One-time or recurring payments",
        "Profit, ROI and cost per customer",
        "Customers needed to break even",
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
