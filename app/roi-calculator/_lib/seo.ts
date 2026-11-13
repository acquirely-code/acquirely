import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const PAGE_URL = `${SITE_URL}/roi-calculator`;

export const FAQ = [
  {
    q: "What is an ROI calculator for business owners?",
    a: "An ROI calculator for business owners estimates profit after ad spend, sales salaries and office costs. Enter leads, customers, price and payment frequency to see ROI, cost per customer and your break-even customer count.",
  },
  {
    q: "How do I calculate ROI for my business?",
    a: "Subtract total costs from revenue, divide profit by total costs, then multiply by 100. This calculator includes Meta and Google Ads, sales salaries and office costs.",
  },
  {
    q: "Can I use this ROI calculator for recurring payments?",
    a: "Yes. Enter the number of times a typical customer pays. The estimate includes those payments in total revenue and shows first-payment revenue separately.",
  },
  {
    q: "What is the difference between ROI and ROAS?",
    a: "ROAS divides revenue by ad spend. ROI compares profit with all included costs, such as advertising, sales salaries and office expenses.",
  },
];

export const pageMetadata: Metadata = {
  title: "Free ROI Calculator for Business Owners | Acquirely",
  description:
    "Calculate business ROI after Meta and Google Ads, sales salaries and office costs. See profit, cost per customer and break-even customers. Free, no signup.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Acquirely",
    locale: "en_IN",
    title: "ROI Calculator for Business Owners",
    description: "See your estimated profit and ROI after ads, salaries and office costs.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary",
    title: "ROI Calculator for Business Owners",
    description: "See your estimated profit and ROI after ads, salaries and office costs.",
  },
};

export const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "ROI Calculator for Business Owners",
  url: PAGE_URL,
  description: "Estimate business ROI, profit, cost per customer and break-even customers from monthly lead-generation costs.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  inLanguage: "en-IN",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  featureList: [
    "Meta and Google Ads spend",
    "Sales salaries and office costs",
    "Recurring customer payments",
    "Profit, ROI and break-even customers",
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};
