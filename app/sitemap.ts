import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPosts } from "@/lib/blog-posts";

// Only indexable, canonical URLs. Thank-you pages, /applynow, /done-for-you and /lead-gen-linkedin-ads (canonical to /lead-gen) are left out.
// lastModified is omitted for static pages: stamping every URL with the build time teaches Google to ignore lastmod.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/ecommerce`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/lead-gen`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/edtech`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/publishers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/ecommerce-calculator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/case-studies`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/about-us`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms-and-condition`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
