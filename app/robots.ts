import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Thank-you and apply pages stay crawlable on purpose: they carry noindex, which Google can only see if it may fetch them.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
