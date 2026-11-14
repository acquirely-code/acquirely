import type { Metadata } from "next";
import SiteHeader from "@/components/site-chrome/SiteHeader";
import SiteFooter from "@/components/site-chrome/SiteFooter";
import { ecomBody, ecomDisplay } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import markup, { faqs } from "./markup";
import "./about.css";

const title = "About Acquirely | Meta & Google Ads Agency in India 2026";
const description =
  "Meet the founders of Acquirely, a New Delhi full-funnel growth team, and see how our A3 Flywheel helps you scale Meta and Google Ads profitably.";
const socialTitle = "About Acquirely: The Science Behind Scale";
const socialDescription =
  "Founded in 2025 by operators who have managed ₹30Cr+ in ad spend. Meet the team and the A3 Flywheel behind 20+ scaled D2C and lead-gen brands.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about-us" },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  openGraph: {
    type: "website",
    siteName: "Acquirely",
    locale: "en_IN",
    url: "/about-us",
    title: socialTitle,
    description: socialDescription,
    // Setting openGraph here drops the inherited app/opengraph-image, so reference it explicitly.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Acquirely: full-funnel growth agency for D2C and lead-gen brands" }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: ["/twitter-image"],
  },
};

const stripTags = (html: string) => html.replace(/<[^>]+>/g, "");
const ORG = `${SITE_URL}/#organization`;
const PAGE = `${SITE_URL}/about-us`;

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG,
      name: "Acquirely",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/ecommerce/img/01-acquirely-the-science-behind-scale.png`,
      slogan: "The Science Behind Scale",
      description:
        "Acquirely is a full-funnel growth team in New Delhi that scales D2C ecommerce and lead-generation brands with Meta Ads and Google Ads, using a weekly system called the A3 Flywheel.",
      foundingDate: "2025",
      email: "team@acquirely.in",
      telephone: "+91-7060250253",
      address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressRegion: "Delhi", addressCountry: "IN" },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
      ],
      knowsAbout: ["Performance marketing", "Meta Ads", "Google Ads", "D2C ecommerce growth", "Lead generation", "Creative testing", "Conversion rate optimization"],
      founder: [{ "@id": `${PAGE}#mausam-arora` }, { "@id": `${PAGE}#kunal-mondal` }],
      contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "team@acquirely.in", telephone: "+91-7060250253", areaServed: ["IN", "CA", "US"] },
      sameAs: [
        "https://www.linkedin.com/company/acquirelydm/",
        "https://www.instagram.com/acquirely.in",
        "https://www.facebook.com/61578312825291/",
        "https://www.youtube.com/@acquirelymedia",
      ],
    },
    {
      "@type": "Person",
      "@id": `${PAGE}#mausam-arora`,
      name: "Mausam Arora",
      jobTitle: "Co-founder, Funnels & GTM",
      worksFor: { "@id": ORG },
      image: `${SITE_URL}/ecommerce/img/mausam-arora.jpg`,
      knowsAbout: ["Funnel strategy", "Go-to-market strategy", "Education marketing"],
      sameAs: ["https://www.linkedin.com/in/mausamarora/"],
    },
    {
      "@type": "Person",
      "@id": `${PAGE}#kunal-mondal`,
      name: "Kunal Mondal",
      jobTitle: "Co-founder, Meta Strategy",
      worksFor: { "@id": ORG },
      image: `${SITE_URL}/ecommerce/img/kunal-mondal.jpg`,
      knowsAbout: ["Meta Ads", "Google Ads", "Full-funnel acquisition", "ROAS scaling"],
      sameAs: ["https://www.linkedin.com/in/kunal-meta-ads/"],
    },
    {
      "@type": "AboutPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "About Acquirely | Meta & Google Ads Agency in India",
      inLanguage: "en-IN",
      about: { "@id": ORG },
      mainEntity: { "@id": ORG },
      dateModified: "2026-11-14",
      breadcrumb: { "@id": `${PAGE}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About Us", item: PAGE },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={`ab ${ecomDisplay.variable} ${ecomBody.variable}`} dangerouslySetInnerHTML={{ __html: markup }} />
      <SiteFooter />
    </>
  );
}
