import type { MetadataRoute } from "next";

const baseUrl =
  process.env.SITE_URL?.startsWith("http")
    ? process.env.SITE_URL
    : "https://acquirely.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacypolicy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
