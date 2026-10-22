import type { MetadataRoute } from "next";

const baseUrl =
  process.env.SITE_URL?.startsWith("http")
    ? process.env.SITE_URL
    : "https://acquirely.in";

// AI answer engines (ChatGPT, Claude, Perplexity, Gemini, Apple, etc.) are listed
// explicitly so they can crawl and cite every landing page.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "meta-externalagent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
