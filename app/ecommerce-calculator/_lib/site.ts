/** Constants for the ecommerce calculator route. Keep this file free of React and browser APIs. */
import { SITE_URL } from "@/lib/site";

export { SITE_URL };
/** Route path. Static assets live under public/ at the same path. */
export const BASE_PATH = "/ecommerce-calculator";
/** Canonical, clean page URL. Shared links add ?orders=…; those must never be canonical. */
export const PAGE_URL = `${SITE_URL}${BASE_PATH}`;

export const CONTACT_EMAIL = "team@acquirely.in";
/** "Get a Profitability Audit" target. Swap for a dedicated booking form if one exists. */
export const AUDIT_HREF = `mailto:${CONTACT_EMAIL}?subject=Profitability%20audit`;

export const SITE_NAME = "Acquirely Ecommerce Profit Calculator";
export const OG_IMAGE_URL = `${PAGE_URL}/assets/og-ecommerce-calculator.png`;

/**
 * Bump whenever the guide copy or calculator model changes. Drives the visible
 * "Last updated" line, the year in the <title>, the sitemap lastmod and
 * dateModified in JSON-LD, so freshness signals always match a real edit.
 */
export const LAST_UPDATED = "2026-10-30";
export const CONTENT_YEAR = LAST_UPDATED.slice(0, 4);
