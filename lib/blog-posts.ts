// lib/blog-posts.ts
// Central place to add/edit blog posts. Swap this for a Supabase query later
// without touching the page components below.

// Text in blocks supports **bold** and [link text](/path) inline.
export type BlogBlock =
  | { type: "h2"; text: string; id?: string } // id defaults to a slug of the text
  | { type: "h3"; text: string }
  | { type: "toc" } // lists every h2 in the post, linked by id
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
    slug: "best-meta-ad-structure-after-andromeda-update",
    title: "Best Meta Ad Structure After the Andromeda Update: The A3 Flywheel (2026)",
    metaTitle: "Best Meta Ad Structure After Andromeda Update",
    metaDescription:
      "Interest targeting stopped working after Andromeda. See the Meta Ads structure we now run across 20+ accounts, from creative Packs to day-of-week budgets.",
    excerpt:
      "The two-campaign Meta Ads structure we run across 20+ accounts after Andromeda: weekly creative Packs, a minimum spend rule and day-of-week budgets.",
    date: "2026-11-14",
    author: "Kunal Mondal",
    authorRole: "Co-founder, Acquirely",
    authorUrl: "https://www.linkedin.com/in/kunal-meta-ads/",
    authorImage: "/ecommerce/img/kunal-mondal.jpg",
    coverImage: "/blog/best-meta-ad-structure-after-andromeda-update.webp",
    image: {
      src: "/blog/best-meta-ad-structure-after-andromeda-update.webp",
      alt: "Best Meta Ad structure after the Andromeda update: A3 Flywheel diagram",
      title: "Best Meta Ad Structure After the Andromeda Update",
      description:
        "A post-Andromeda playbook to test, scale and retarget smarter with the A3 Flywheel.",
      width: 1200,
      height: 630,
    },
    content: [
      "Read this before you restructure another Meta Ads account, because the interest-based setup that worked before Andromeda is now underperforming in most of the accounts we manage.",
      {
        type: "callout",
        text: "**Quick answer:** The **best Meta Ad structure after the Andromeda update** is a simple two-campaign setup. You run one **Prospecting CBO campaign** with broad targeting that tests new creatives every week and scales the winners, plus one **Retention campaign** for past buyers. Creative testing, not interest targeting, now drives results.",
      },
      "In this guide, you will see the exact framework we built after testing and analysing more than 20 Meta ad accounts. We call it the A3 Flywheel.",
      "Here is what you will get from it:",
      {
        type: "ul",
        items: [
          "A campaign structure that works with Meta's current algorithm instead of fighting it",
          "A simple rule that makes sure every new creative actually gets spend",
          "A weekly creative system that keeps fatigue away",
          "A day-of-week budget method that moves money to your strongest days",
          "A safe way to handle a winning ad when its ROAS starts to slide",
        ],
      },
      "Want the structure first? Jump straight to the [A1 section](#a1) below, or see how Acquirely can [set this up in your ad account](/ecommerce).",
      { type: "toc" },

      { type: "h2", text: "What changed after Meta's Andromeda update?" },
      "After Meta's Andromeda update, **interest-based targeting lost most of its edge**. Audience structures that delivered steady results before the update became much less effective across the majority of accounts we managed. Broad targeting paired with strong creative testing now performs better.",
      "Before the update, interest stacks gave you consistent, predictable results. After it, the same setups started slipping, account after account.",
      'So we stopped asking "which interests should we target?" and started asking a better question. How do you build a structure that lets Meta\'s algorithm find buyers, while you control the creative and the budget?',

      { type: "h2", text: "What is the A3 Flywheel?" },
      "The **A3 Flywheel** is a Meta Ads campaign framework built from patterns we saw across 20+ ad accounts after the Andromeda update. It replaces heavy interest targeting with three things: a clean campaign structure, a steady creative pipeline, and data-driven budget decisions.",
      "It has three parts:",
      {
        type: "table",
        head: ["Part", "What it covers", "What it solves"],
        rows: [
          ["A1: Foundation structure", "Prospecting CBO + Retention campaigns", "Wasted spend, audience overlap, unclear acquisition cost"],
          ["A2: Creative framework", "Three creative production systems", "Creative fatigue and guesswork"],
          ["A3: Micro analysis", "Day-of-week budget reallocation", "Spending the same on strong and weak days"],
        ],
      },
      "Let's go through each part one by one.",

      { type: "h2", id: "a1", text: "A1: The best Meta Ad structure for your campaigns" },
      "Your account needs only two foundation campaigns:",
      {
        type: "ol",
        items: [
          "**Prospecting CBO campaign** for testing new creatives and scaling winners",
          "**Retention campaign** for customers who have already bought from you",
        ],
      },
      "We used to run a third, separate Scale campaign. We removed it, and you will see exactly why further down.",

      { type: "h3", text: "Campaign 1: The Prospecting CBO campaign" },
      "The Prospecting campaign is where you test and discover new winning creatives. It is also where those winners scale.",
      "Every week, you launch a new batch of creatives. We call each weekly batch a **Pack**.",
      "Each new Pack goes into a brand-new ad set with a broad audience.",

      { type: "h3", text: "Why launch a new ad set every week if the audience is the same?" },
      "You launch a new ad set for every Pack **to protect the learning of your existing winners**. Adding new creatives to an ad set that already has strong performers can change how Meta distributes budget and cut spend on ads that are already working.",
      "A separate ad set lets you test fresh creatives on their own. Your current winners keep performing without disruption.",

      { type: "h3", text: "Exclude your existing customers" },
      "Exclude everyone who has ever bought from the brand. The Prospecting campaign has one job: **acquire net-new customers**.",
      "You do not want Meta spending your prospecting budget on people who already bought. The Retention campaign handles them.",
      "This split keeps Prospecting focused purely on acquisition. It also shows you the true cost of getting a new customer.",

      { type: "h3", text: "The problem: new Packs don't get enough spend" },
      "Here is the biggest challenge with this structure. When you launch a new Pack, Meta often keeps pushing most of the budget to older ad sets that already have a performance history.",
      "Your new Pack may get very little spend. Sometimes it gets almost none.",
      "That hurts the brand too. You invested time and money into those creatives. If they never get enough spend to produce real data, that investment is wasted.",

      { type: "h3", text: "The fix: the Minimum Spend Rule" },
      "The **Minimum Spend Rule** means you set an ad set-level minimum spend of roughly **1× your target Cost Per Result** on every new Pack, for **7 days**. For example, with a ₹1,000 target Cost Per Purchase, set about ₹1,000 per day of minimum spend for that new ad set.",
      "Follow these steps:",
      {
        type: "ol",
        items: [
          "Launch the new Pack in a new ad set.",
          "Set the minimum spend to about 1× your target Cost Per Result.",
          "Keep it in place for 7 days.",
          "Remove the minimum spend after day 7.",
          "Let Meta decide the allocation from there.",
        ],
      },

      { type: "h3", text: "Why 7 days?" },
      "Seven days gives every new Pack a fair chance to get delivery, collect data and build early engagement. During this window, Meta gets enough signals to judge how the new creatives perform.",
      "If the Pack performs well, Meta will often start spending more than the minimum on it.",
      "Once you remove the minimum, the outcome is simple:",
      {
        type: "ul",
        items: [
          "**Strong creatives** keep getting spend without any help.",
          "**Weak creatives** lose spend naturally as Meta stops favouring them.",
        ],
      },
      "So every Pack gets a fair test, and you never force budget into creatives Meta does not find competitive.",

      { type: "h3", text: "One important rule: apply minimum spend only once" },
      "You apply the minimum spend to an ad set **only once**. After its 7-day test window ends, never apply it to that same ad set again.",
      "From then on, the ad set has to earn its spend through performance.",

      { type: "h3", text: "Campaign 2: The Retention campaign" },
      "The Retention campaign targets only people who have already bought from the brand. Prospecting brings in new customers. Retention earns more revenue from the customers you already have.",
      "In this campaign, you typically run:",
      {
        type: "ul",
        items: [
          "Exclusive or custom offers for existing customers",
          "New arrival creatives",
          "Bundle offers",
          "Cross-sell and upsell offers",
          "Repeat purchase messaging",
        ],
      },
      "The goal is to bring past customers back and increase their lifetime value.",

      { type: "h3", text: "Why we removed the separate Scale campaign" },
      "The original A3 Flywheel had a third campaign. Winning creatives from Prospecting were moved into a dedicated **Scale campaign** to get more budget.",
      "In update 1.1, we merged testing and scaling into one Prospecting CBO campaign. Here is how the two setups compare:",
      {
        type: "table",
        head: ["", "❌ Old structure (3 campaigns)", "✅ New structure (2 campaigns)"],
        rows: [
          ["Campaigns", "Prospecting, Scale, Retention", "Prospecting CBO, Retention"],
          ["Where winners scale", "Duplicated into the Scale campaign", "Inside Prospecting, by Meta's CBO"],
          ["Audience overlap", "High: Prospecting and Scale chase the same broad users", "Low: one campaign for all new-customer spend"],
          ["Internal auction competition", "Yes", "No"],
          ["Account complexity", "Higher", "Lower"],
        ],
      },
      "We made the change for two reasons.",
      "**1. It reduces audience overlap.** Both campaigns were targeting largely the same broad audience, often with the same winning creatives. That makes them compete against each other for the same users in the auction.",
      "**2. Prospecting was already scaling the winners.** When we checked our accounts, about **90% of the Prospecting budget** was already going to the strongest creatives. Meta was finding the winners on its own. Duplicating them into a Scale campaign was usually unnecessary.",
      "The new flow is much simpler:",
      { type: "callout", text: "**Test new creatives → Identify winners → Let Meta scale them inside the same Prospecting CBO.**" },

      { type: "h2", text: "A2: The creative framework that prevents fatigue" },
      "Your structure only works if you keep feeding it fresh creatives. The A3 Flywheel uses three creative production systems to keep new opportunities coming.",

      { type: "h3", text: "1. Competitor-inspired creative research" },
      "Every week, review the ad libraries of at least five key competitors. Look at what they are actively running.",
      "Analyse their:",
      { type: "ul", items: ["Creative angles", "Offers", "Concepts", "Hooks", "Formats", "Messaging patterns"] },
      "Don't copy their ads. Spot the patterns that seem to be working in the market, then adapt them into creatives that fit your brand.",
      "This cuts guesswork, because you build from proven market signals.",

      { type: "h3", text: "2. Net-new creative concepts" },
      "The second system creates completely original concepts. These are not based on your winners or on competitor ads.",
      "You keep bringing in fresh ideas, new messaging, new visual directions and new customer angles.",
      "This matters because existing concepts eventually cap your growth. Net-new creatives are how you discover entirely new winning directions.",

      { type: "h3", text: "3. Winning creative iteration" },
      "The third system builds on creatives that are already performing well.",
      "Don't rush to replace a winner. First, work out why it works. Then make several variations around that same winning idea.",
      "You can iterate on:",
      { type: "ul", items: ["Hooks", "Opening scenes", "Headlines", "Offers", "Visuals", "Copy", "CTA", "Creative format"] },
      "This extends the life of winning concepts and helps you find even stronger versions of them.",
      "Together, the three systems create a continuous pipeline:",
      { type: "callout", text: "**Learn from the market → Create new concepts → Iterate on proven winners.**" },

      { type: "h2", text: "A3: Micro analysis and day-of-week budgeting" },
      "Meta does not perform the same way every day of the week. So why spend the same amount every day?",
      "When you look at a longer period of account data, clear day-of-week patterns often show up. For example:",
      {
        type: "table",
        head: ["Day type", "Example ROAS", "What to do"],
        rows: [
          ["🟢 Best performing days", "5+", "Receive the budget moved from weak days"],
          ["🟡 Neutral days", "Around 4", "Keep budget as is"],
          ["🔴 Weak performing days", "Around 2.5", "Cut budget by about 50%"],
        ],
      },
      "If some days consistently deliver better returns and others consistently lag, an equal daily budget is not the most efficient use of your spend.",

      { type: "h3", text: "How to reallocate your budget by day" },
      "Once you find statistically meaningful patterns, sort every day into one of three groups:",
      {
        type: "ul",
        items: [
          "**Best performing days:** consistently stronger ROAS and efficiency",
          "**Neutral days:** close to the account average",
          "**Weak performing days:** consistently lower ROAS than the rest of the week",
        ],
      },
      "Then reduce budget on weak days by roughly 50% and move it to your historically strongest days.",
      "The goal is not to cut your weekly budget. It is to spread the same budget more intelligently across the week.",

      { type: "h3", text: "Why do you need 90 days of data?" },
      "You need **at least 90 days of historical data** before calling any day consistently strong or weak. Daily Meta performance swings with competition, demand, seasonality, auction conditions and customer behaviour. Ninety days covers enough Mondays, Tuesdays and every other weekday to separate a real pattern from noise.",
      "The principle is simple. Spend less when efficiency is consistently weak, and spend more when the odds of strong returns are historically higher.",

      { type: "h2", text: "What to do when a winning creative's ROAS starts dropping" },
      "This is update 1.2 to the A3 Flywheel, and it protects you from a common mistake.",
      "Meta may give around 70% of a campaign's budget to just three or four creatives. Those creatives can perform for months. But after four or five months, one of them may keep getting the same spend, or more, while its ROAS slides from 4.5 to 3.5.",
      "Your instinct says pause it. Don't.",
      "Pausing it suddenly can make things worse. ROAS can drop from 3.5 to 2, because the account just lost a major source of conversions overnight.",

      { type: "h3", text: "Should you pause a winning creative when its ROAS declines?" },
      "No, you should not pause a major winning creative the moment its ROAS declines. **Reduce its share of spend gradually** instead, so other ad sets can absorb the budget. Switching it off abruptly removes a big source of conversions and can trigger a much sharper ROAS drop.",

      { type: "h3", text: "Scenario 1: The ad set has one creative" },
      {
        type: "ol",
        items: [
          "Check what share of the campaign budget the creative is using.",
          "If it uses 60%, set a maximum spend limit of about 50% on that ad set.",
          "Lower the limit step by step over time.",
          "Watch performance as budget moves to other ad sets.",
        ],
      },
      "You reduce your reliance on one creative without suddenly losing its conversions.",

      { type: "h3", text: "Scenario 2: The ad set has multiple creatives" },
      {
        type: "ol",
        items: [
          "Duplicate the individual creatives into a new ad set.",
          "Pause the original ad set.",
          "Apply the same gradual spend reduction to the new structure.",
          "Monitor delivery and performance closely as spend shifts.",
        ],
      },
      "Avoid abrupt changes that could disrupt results.",
      "**Core principle:** never switch off a major winner abruptly. Reduce dependence on it gradually and let other ad sets take on more spend.",

      { type: "h2", text: "The A3 Flywheel checklist" },
      "Use this as your quick reference:",
      {
        type: "ul",
        items: [
          "Two campaigns only: Prospecting CBO and Retention",
          "Broad audience in Prospecting, with all past buyers excluded",
          "One new ad set for every weekly creative Pack",
          "Minimum spend of about 1× target Cost Per Result for 7 days, applied once per ad set",
          "Weekly creative mix: competitor research, net-new concepts, winner iterations",
          "Day-of-week budget shifts only after 90+ days of data",
          "Declining winners scaled down gradually, never paused abruptly",
        ],
      },

      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Does interest targeting still work after the Andromeda update?",
            a: "Interest targeting works far less reliably after the Andromeda update. Across the 20+ accounts we analysed, interest-based campaigns became significantly less effective in the majority of them. Broad targeting combined with strong, frequent creative testing now delivers better and more consistent results for most brands.",
          },
          {
            q: "How much minimum spend should you set for a new creative Pack?",
            a: "Set the minimum spend for a new creative Pack at roughly 1× your target Cost Per Result, at the ad set level. If your target Cost Per Purchase is ₹1,000, set about ₹1,000 per day. Keep it for 7 days, then remove it and let Meta allocate budget naturally.",
          },
          {
            q: "Should you run a separate scaling campaign on Meta Ads?",
            a: "In most cases, you don't need a separate scaling campaign on Meta Ads. In our accounts, about 90% of the Prospecting budget already went to the top creatives. A separate Scale campaign mainly added audience overlap and internal auction competition, so we now scale winners inside one Prospecting CBO.",
          },
          {
            q: "How much data do you need before changing budgets by day of week?",
            a: "You need at least 90 days of historical data before changing budgets by day of week. Daily performance swings with competition, seasonality and auction conditions. Ninety days gives you enough of each weekday to confirm a recurring pattern instead of reacting to a temporary dip or spike.",
          },
          {
            q: "Why should you exclude existing customers from prospecting?",
            a: "You should exclude existing customers from prospecting so your budget goes only to net-new buyers. It stops Meta from spending acquisition money on people who already purchased, and it shows you your true customer acquisition cost. Past buyers are then reached through a dedicated Retention campaign instead.",
          },
        ],
      },

      { type: "h2", text: "Who this framework is for" },
      "The A3 Flywheel fits you if you run Meta Ads for an e-commerce or D2C brand and:",
      {
        type: "ul",
        items: [
          "Your interest-based campaigns have declined since the Andromeda update",
          "New creatives keep getting stuck with little or no spend",
          "You run several campaigns that seem to compete with each other",
          "You want predictable, repeatable acquisition instead of lucky months",
        ],
      },
      `**Want this structure built into your account?** [Talk to the Acquirely team](${BOOKING_URL}) and we'll review your current setup against the A3 Flywheel.`,
    ],
  },
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
      "Short on time? Scan the [status table](#status-table) below, then jump to the [5-step action plan](#action-plan).",

      { type: "h2", text: 'What are conversational ads, and what does "static to conversational" mean?' },
      "For a decade, a Meta ad was a one-way broadcast: a fixed image or video, a headline and a button. The conversation, if it happened at all, started later on your website or with a sales rep.",
      "Conversational advertising flips that. The ad becomes the opening line of a dialogue. A shopper taps, asks a question, gets a product recommendation and, increasingly, checks out without leaving the chat.",
      "The same shift is happening on your side of the screen. Instead of clicking through dozens of Ads Manager settings, you describe what you want in plain language and an AI assistant builds or adjusts the campaign.",
      "Meta is betting heavily on this. In its latest investor filing, Meta says more than 2 million businesses use its Business Agent every week, with over 30 million conversations a week.",

      { type: "h2", id: "status-table", text: "Meta AI ad tools at a glance: Meta Ads updates 2026" },
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

      { type: "h2", text: "2. Advantage+ creative video: your static images become video" },
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
      "India is where conversational commerce, and click-to-WhatsApp ads in particular, makes the most sense. Your buyers already ask questions on WhatsApp before they pay, especially for cash on delivery, sizing and returns. Meta even tested its AI customer support with merchants in India early on.",
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
      "The winning setup for 2026 is AI for execution and humans for strategy, creative direction and independent measurement. Channel choice still depends on your order value and catalog, not on which platform has the shinier AI.",

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
      "Brands that win this shift will feed the machine better: sharper offers, more creative concepts, cleaner data and a conversation strategy that converts. See how we [run Meta Ads for D2C and ecommerce brands](/ecommerce).",
      `Want to know which of these tools your account should switch on first? [Book a free growth call with Acquirely](${BOOKING_URL}) and we will audit your Meta funnel.`,
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
