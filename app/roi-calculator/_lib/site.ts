/** Constants for /roi-calculator. Assets live in public/roi-calculator/assets. No React or browser APIs here. */
import { SITE_URL } from "@/lib/site";

export { SITE_URL };
export const BASE_PATH = "/roi-calculator";
/** Canonical, clean page URL. Shared links add ?metaSpend=…; those must never be canonical. */
export const PAGE_URL = `${SITE_URL}${BASE_PATH}`;

export const CONTACT_EMAIL = "team@acquirely.in";


/** E-E-A-T: who checked the maths. Facts as published on acquirely.in ("Who you'll work with"). */
export const REVIEWER = {
  name: "Kunal Mandal",
  role: "Co-founder, Meta strategy at Acquirely",
  bio: "₹30Cr+ in ad spend managed across 30+ brands in ecommerce, EdTech and real estate, running full-funnel systems across Meta and Google.",
  linkedin: "https://www.linkedin.com/in/kunal-meta-ads/",
};
export const ABOUT_URL = `${SITE_URL}/about-us`;

export const SITE_NAME = "Acquirely ROI Calculator for Business Owners";
export const OG_IMAGE_URL = `${SITE_URL}${BASE_PATH}/assets/og-roi-calculator.png`;

/**
 * Bump whenever the guide copy or calculator model changes. Drives the visible
 * "Last updated" line, the year in the <title>, the sitemap lastmod and
 * dateModified in JSON-LD, so freshness signals always match a real edit.
 */
export const LAST_UPDATED = "2026-11-13";
export const CONTENT_YEAR = LAST_UPDATED.slice(0, 4);
