// lib/blog-posts.ts
// Central place to add/edit blog posts. Swap this for a Supabase query later
// without touching the page components below.

// Text in blocks supports **bold** and [link text](/path) inline.
export type BlogBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "p"; text: string }
  | { type: "callout"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }; // also emitted as FAQPage schema

export interface BlogPost {
  slug: string;
  title: string; // the on-page H1 and card title
  metaTitle?: string; // used as-is for <title> and og:title; defaults to "{title} | Acquirely"
  metaDescription?: string; // defaults to excerpt
  excerpt: string;
  date: string; // e.g. "2026-09-01"
  author: string;
  authorRole?: string;
  authorUrl?: string;
  authorImage?: string;
  archived?: boolean; // listed under "Archive" on /blog; the post URL stays live
  coverImage: string; // path under /public or a full URL
  // shown in the article body; title/description also become the post's og:image metadata
  image?: {
    src: string;
    alt: string;
    title: string;
    description: string;
    width: number;
    height: number;
  };
  content: (string | BlogBlock)[]; // a plain string is one paragraph
}

const BOOKING_URL =
  "https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg";

export const blogPosts: BlogPost[] = [
  {
    slug: "meta-ai-ad-tools-conversational-ads",
    title: "From Static to Conversational: How Meta's New AI Tools Are Rewriting the Playbook",
    metaTitle: "Meta AI Ad Tools 2026: From Static to Conversational Ads",
    metaDescription:
      "Meta's new AI tools turn static ads into conversations. See what's live, what's still testing, and how D2C brands should adapt their Meta Ads playbook.",
    excerpt:
      "Meta's AI ad tools now write, target and sell inside a conversation. Here's what's live, what's still testing, and a 5-step plan for D2C brands.",
    date: "2026-10-27",
    author: "Mausam Arora",
    authorRole: "Co-founder, Acquirely",
    authorUrl: "https://www.linkedin.com/in/mausamarora/",
    authorImage: "/ecommerce/img/mausam-arora-portrait.jpg",
    coverImage: "/blog/meta-ai-ad-tools-conversational-ads.jpg",
    image: {
      src: "/blog/meta-ai-ad-tools-conversational-ads.jpg",
      alt: "Meta AI ad tools turning a static ad into a WhatsApp conversation",
      title: "Meta AI Ad Tools 2026: From Static to Conversational Ads",
      description:
        "A static shoe ad on Facebook becomes a chat where Meta's AI answers colour, size and price questions and recommends products.",
      width: 1200,
      height: 630,
    },
    content: [
      "You should read this because the Meta Ads playbook most brands still run (upload a static creative, pick interests, send traffic to a product page) is being replaced by AI that writes, targets and sells inside a conversation.",
      {
        type: "callout",
        text: "**Quick answer:** **Meta AI ad tools** are shifting advertising from static ads to conversations. You can now brief an AI business assistant inside Ads Manager, Advantage+ creative turns product images into video, and Meta Business Agent answers questions and closes sales in WhatsApp, Messenger and Instagram DMs. Your edge now comes from inputs: offers, creative concepts, catalog quality and first-party data.",
      },
      "In this guide, you will see what Meta announced at Advertising Week New York on October 6, 2026, which tools are live and which are still testing, and a practical playbook for [D2C and ecommerce brands](/ecommerce).",
      "Short on time? Scan the [status table](#status-table) below, then jump to the [5-step action plan](#action-plan).",

      { type: "h2", text: 'What does "static to conversational" actually mean?' },
      "For a decade, a Meta ad was a one-way broadcast: a fixed image or video, a headline and a button. The conversation, if it happened at all, started later on your website or with a sales rep.",
      "Conversational advertising flips that. The ad becomes the opening line of a dialogue. A shopper taps, asks a question, gets a product recommendation and, increasingly, checks out without leaving the chat.",
      "The same shift is happening on your side of the screen. Instead of clicking through dozens of Ads Manager settings, you describe what you want in plain language and an AI assistant builds or adjusts the campaign.",
      "Meta is betting heavily on this. In its latest investor filing, Meta says more than 2 million businesses use its Business Agent every week, with over 30 million conversations a week.",

      { type: "h2", id: "status-table", text: "Meta's new AI ad tools at a glance (October 2026)" },
      "Not everything Meta announced is in your account yet. Here is what each tool does and where it stands, based on Meta's own status wording.",
      {
        type: "table",
        head: ["Tool", "What it does for you", "Status"],
        rows: [
          ["Meta AI business assistant", "Plans, diagnoses and optimises campaigns in Ads Manager; now remembers your goals, seasonality and past tests", "Live for all advertisers; memory upgrade rolling out"],
          ["Agentic actions and scheduled tasks", "Creates campaigns, edits targeting, changes budgets and sends recurring reports from chat prompts", "Testing"],
          ["Advantage+ creative video", "Turns your static images into video ads", "Generally available"],
          ["Ads Creative Studio", "Shows which creative works and why; generates and edits video concepts", "Rolling out"],
          ["Catalog product video", "Converts catalog product images into product videos at scale", "Beta, eligible advertisers"],
          ["Meta Business Agent", "AI sales and support agent in WhatsApp, Messenger and Instagram DMs", "Available globally"],
          ["Customer Lifecycle Strategy", "Recommends excluding existing customers from acquisition campaigns", "Available to all advertisers"],
          ["AI audience discovery", "Lets you describe your ideal customer in plain language", "Due by end of 2026"],
          ["In-chat checkout", "Purchase inside Business Agent and Meta AI (Shopify, PayPal, Stripe, Adyen)", "Testing"],
        ],
      },
      "Meta has not published a country-by-country rollout, so check your own Ads Manager before planning around any feature.",

      { type: "h2", text: "1. The Meta AI business assistant moves from advisor to operator" },
      "Meta rolled out its AI business assistant to all advertisers in April 2026. In October, it got three upgrades that change how you will work in Ads Manager.",
      {
        type: "ul",
        items: [
          "**Memory:** it picks up where your last conversation ended, including last quarter's tests, your seasonality and your stated goals.",
          "**Creative insights:** learnings from Ads Creative Studio now feed straight into campaign recommendations.",
          "**Agentic actions (testing):** you will be able to plan a campaign, generate images and copy, update targeting or change a budget by typing a prompt, with previews and approvals before anything goes live.",
        ],
      },
      "Meta claims advertisers who adopt the assistant's recommendations see 5% more conversions at the same cost per conversion. Treat that as a platform claim, not a forecast. Meta published no methodology, so run a holdout test in your own account first.",

      { type: "h2", text: "2. Advantage+ creative: your static images become video" },
      "Meta says more than 60% of the time people spend on Facebook and Instagram is spent watching video. That explains why generating video from static images in Advantage+ creative is now generally available.",
      "Ads Creative Studio goes further. You can generate new video concepts and edit hooks, audio, clip length, captions and end scenes. Catalog advertisers in the beta can turn product photos into product videos at scale.",
      "Our take: this cuts the cost of creative testing sharply, but it creates a sameness problem. If every brand uses the same generator, differentiation has to come from the brief, the offer and the raw assets you feed in. Real UGC, founder clips and customer proof still win.",

      { type: "h2", text: "3. Meta Business Agent: the ad no longer ends at the click" },
      "Meta Business Agent went global in June 2026 inside WhatsApp Business, and it is expanding to Instagram DMs. It learns from your catalog, website, FAQs and past chats, then replies in the customer's own language.",
      "What it can handle for you:",
      {
        type: "ul",
        items: [
          "Answer questions on price, shipping, sizes and returns",
          "Recommend products from your catalog",
          "Book appointments and qualify leads",
          "Hand the chat to a human when needed",
        ],
      },
      "Click-to-message ads send shoppers straight into this agent. Meta is also testing direct checkout inside Business Agent on Messenger with Shopify, so discovery, consultation and purchase can happen in one thread. Larger businesses will pay based on usage, through WhatsApp Business Premium tiers and token-based pricing.",

      { type: "h2", text: "4. Targeting becomes a conversation too" },
      "By the end of 2026, AI audience discovery will let you describe your ideal customer in plain language and get matching audiences in seconds. Customer Lifecycle Strategy, already live, recommends keeping existing buyers out of your acquisition budget.",
      "Two quieter changes matter more. Since December 16, 2025, Meta has used people's conversations with Meta AI to personalise the ads they see. And from October 28, 2026, Meta turns product browsing on by default for existing ads unless you opt out.",
      "The takeaway: interest targeting matters less every quarter. Your creative is now your targeting.",

      { type: "h2", text: "5. The engine underneath: Andromeda and GEM" },
      "Two systems power all of this. **Andromeda** is Meta's ad retrieval engine, which picks a shortlist of relevant ads from millions of candidates in milliseconds. **GEM** (Generative Ads Recommendation Model), announced in November 2025, is Meta's foundation model for ad ranking.",
      "Meta reported GEM lifted conversions by 5% on Instagram and 3% on Facebook Feed. The direction is clear: Meta's stated goal is ads generated end-to-end from a product image or URL plus a budget.",

      { type: "h2", text: "Old Meta Ads playbook vs the new conversational playbook" },
      "The main difference between the old Meta Ads playbook and the new one is where your effort goes. The old playbook rewarded manual control over targeting and bids. The new one rewards better inputs: more creative concepts, cleaner data and a sales conversation that starts the moment someone taps.",
      {
        type: "table",
        head: ["Area", "Old playbook (static)", "New playbook (conversational)"],
        rows: [
          ["Targeting", "Stacked interests and lookalikes", "Broad audiences; creative and AI signals do the targeting"],
          ["Creative", "A few polished static ads", "Many distinct concepts, auto-adapted into video and formats"],
          ["After the click", "Landing page, then hope", "AI agent answers, recommends and closes in chat"],
          ["Campaign setup", "Dozens of manual settings", "Plain-language prompts with approvals"],
          ["Reporting", "Manual dashboards", "Scheduled AI summaries and alerts"],
          ["Your advantage", "Media buying skill", "Offer, creative strategy, data quality and judgement"],
        ],
      },

      { type: "h2", text: "What this means for D2C and ecommerce brands in India" },
      "India is where conversational commerce makes the most sense. Your buyers already ask questions on WhatsApp before they pay, especially for cash on delivery, sizing and returns. Meta even tested its AI customer support with merchants in India early on.",
      "For Indian D2C brands, the practical opportunities are clear:",
      {
        type: "ul",
        items: [
          "**Click-to-WhatsApp ads with an AI agent** can answer pre-purchase questions at 2 AM, when your team is offline.",
          "**Static-to-video** lets lean teams test Reels-style creative without a production budget.",
          "**Customer Lifecycle Strategy** stops you paying acquisition prices to reach existing customers.",
        ],
      },
      "The risk is handing everything to automation. Meta's AI optimises for what it can measure inside Meta, which is not always your contribution margin.",

      { type: "h2", id: "action-plan", text: "Your 5-step action plan for the conversational era" },
      {
        type: "ol",
        items: [
          "**Fix your inputs first.** Clean your product catalog, check your Conversions API setup and improve event match quality. AI amplifies whatever data you give it, good or bad.",
          "**Switch on the live features and test them properly.** Try Advantage+ creative video and Customer Lifecycle Strategy, but measure each against a control or holdout.",
          "**Build a creative system, not single ads.** Andromeda rewards variety, so test distinct concepts (problem, proof, offer, founder story), not five versions of one image.",
          "**Launch an AI agent with guardrails.** Train Meta Business Agent on your FAQs, return policy and COD rules. Set clear human handoff triggers for complaints and high-value orders.",
          "**Decide what AI cannot touch.** Keep budget approvals, brand claims and pricing decisions with a human, and set tight permissions for any third-party AI tool connected through Meta's ads MCP server.",
        ],
      },

      { type: "h2", text: "Where AI still needs a human" },
      "Meta's AI can execute faster than any media buyer. It cannot decide your positioning, invent a better offer or tell you the truth about incrementality, because Meta still grades its own homework.",
      "The winning setup for 2026 is AI for execution and humans for strategy, creative direction and independent measurement. As we covered in our [Meta Ads vs Google Ads guide](/blog/meta-ads-vs-google-ads-for-ecommerce), channel choice still depends on your order value and catalog, not on which platform has the shinier AI.",

      { type: "h2", text: "Frequently asked questions" },
      {
        type: "faq",
        items: [
          {
            q: "What are Meta's new AI ad tools?",
            a: "Meta's new AI ad tools are features that automate ad creation, targeting and selling. They include the Meta AI business assistant in Ads Manager, Advantage+ creative video generation, Ads Creative Studio, AI audience discovery and Meta Business Agent for WhatsApp, Messenger and Instagram conversations.",
          },
          {
            q: "What is Meta Business Agent?",
            a: "Meta Business Agent is an AI agent that chats with your customers on WhatsApp, Messenger and Instagram DMs. It learns from your catalog, website and FAQs to answer questions, recommend products, qualify leads and book appointments, and it hands complex chats to a human.",
          },
          {
            q: "Can Meta's AI business assistant change my ad budget on its own?",
            a: "Not yet. Budget and targeting changes through conversational prompts are still in testing. Meta says previews, approvals and controls will let you decide what the assistant can change, so nothing goes live without your sign-off.",
          },
          {
            q: "Is Advantage+ creative video generation available in India?",
            a: "Meta lists static-to-video in Advantage+ creative as generally available but has not published a country rollout. Open Ads Manager, create an Advantage+ creative ad and check the video generation option in your account.",
          },
          {
            q: "Are click-to-WhatsApp ads worth it for D2C brands?",
            a: "Yes, for most Indian D2C brands with considered purchases, COD orders or frequent pre-sale questions. Pair them with Meta Business Agent or a trained team so replies are instant, and track orders, not just conversations started.",
          },
          {
            q: "Will AI replace performance marketing agencies?",
            a: "AI will replace manual campaign setup and routine optimisation. It will not replace offer strategy, creative direction, funnel fixes or independent measurement. Agencies that only push buttons in Ads Manager will struggle; those that drive strategy will matter more.",
          },
          {
            q: "Does Meta use AI chat conversations for ad targeting?",
            a: "Yes. Since December 16, 2025, Meta uses people's conversations with Meta AI to personalise the ads and content they see across Facebook, Instagram, Messenger and WhatsApp.",
          },
          {
            q: "What is Meta Andromeda?",
            a: "Meta Andromeda is the ad retrieval engine that selects a shortlist of relevant ads for each person from millions of candidates. It rewards advertisers who run many genuinely different creatives, because more variety gives the system more ways to match the right person.",
          },
        ],
      },

      { type: "h2", text: "Conclusion: start with inputs, not settings" },
      "Meta's AI ad tools are moving the work from the buttons to the brief. Static ads and manual targeting are giving way to AI-built campaigns, auto-generated video and agents that sell inside the chat.",
      "Brands that win this shift will feed the machine better: sharper offers, more creative concepts, cleaner data and a conversation strategy that converts. See how that approach played out in [how we scaled Modish 7x in ad spend](/blog/how-we-scaled-modish-7x).",
      `Want to know which of these tools your account should switch on first? [Book a free growth call with Acquirely](${BOOKING_URL}) and we will audit your Meta funnel.`,
    ],
  },
  {
    slug: "how-we-scaled-modish-7x",
    title: "How We Scaled Modish 7x in Ad Spend While Tripling ROAS",
    excerpt:
      "A breakdown of the A3 Flywheel system we used to take Modish from below-breakeven to a 3.41 ROAS in 90 days.",
    date: "2026-09-01",
    author: "Acquirely Team",
    archived: true,
    coverImage: "/blog/modish-plan-backups.png",
    image: {
      src: "/blog/modish-plan-backups.png",
      alt: "Generated plan backups dialog showing the files backup and four database backups completed",
      title: "Modish store backups completed before scaling ad spend",
      description:
        "Full files backup and four database backups of the Modish store, all completed 5/5, taken before we scaled their Meta Ads spend 7x.",
      width: 943,
      height: 949,
    },
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
    archived: true,
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
