// lib/blog-posts.ts
// Central place to add/edit blog posts. Swap this for a Supabase query later
// without touching the page components below.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // e.g. "2026-09-01"
  author: string;
  coverImage: string; // path under /public or a full URL
  content: string[]; // one paragraph per array item
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-we-scaled-modish-7x",
    title: "How We Scaled Modish 7x in Ad Spend While Tripling ROAS",
    excerpt:
      "A breakdown of the A3 Flywheel system we used to take Modish from below-breakeven to a 3.41 ROAS in 90 days.",
    date: "2026-09-01",
    author: "Acquirely Team",
    coverImage: "/gallery/blog-placeholder.jpg",
    content: [
      "When Modish came to us, their ad spend was capped by an unpredictable ROAS...",
      "We rebuilt their funnel around the A3 Flywheel, focusing first on creative testing velocity...",
      "Within 90 days, daily spend went from ₹2K to ₹15K while ROAS climbed from 1.43 to 3.41.",
    ],
  },
  {
    slug: "meta-ads-vs-google-ads-for-ecommerce",
    title: "Meta Ads vs Google Ads: Where Ecommerce Brands Should Start",
    excerpt:
      "Both channels work — but the right starting point depends on your average order value and catalog size.",
    date: "2026-08-20",
    author: "Acquirely Team",
    coverImage: "/gallery/blog-placeholder.jpg",
    content: [
      "The 'which platform first' question comes up in almost every discovery call we run...",
      "Meta tends to win for discovery and impulse-driven categories...",
      "Google Ads (especially Shopping) tends to win when there's existing search intent...",
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
