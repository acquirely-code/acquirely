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
  authorBio?: string; // one or two sentences, shown in the author box under the role
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

// Author bios (same facts as the About page).
const MAUSAM_BIO =
  "Mausam spent 12 years building education businesses, from 300+ books to distribution across 2,000+ schools. At Acquirely he leads funnel strategy and go-to-market, turning ad spend into acquisition systems that compound.";
const KUNAL_BIO =
  "₹30Cr+ managed across 30+ brands in ecommerce and leadgen. A hands-on Meta strategist who runs full-funnel systems across Meta and Google.";

const BOOKING_URL = "https://booknow.acquirely.in/D2CFRC";

const STRUCTURE_POST = "/blog/best-meta-ad-structure-after-andromeda-update";
const ANDROMEDA_POST = "/blog/meta-andromeda-update-explained";
const TARGETING_POST = "/blog/broad-targeting-vs-interest-targeting-meta";
const NOT_SPENDING_POST = "/blog/meta-ads-not-spending";
const ABO_CBO_POST = "/blog/abo-vs-cbo-meta-ads";

export const blogPosts: BlogPost[] = [
  {
    slug: "abo-vs-cbo-meta-ads",
    title: "ABO vs CBO on Meta Ads: What's the Difference?",
    metaTitle: "ABO vs CBO on Meta Ads: What's the Difference? (2026)",
    metaDescription:
      "ABO or CBO on Meta Ads? See how each budget option works, the pros and cons, when to use which, and how we test and scale inside one CBO campaign.",
    excerpt:
      "ABO or CBO on Meta Ads? How each budget option works, the newer budget sharing option in between, when to use which, and why we run one CBO campaign across 20+ accounts.",
    date: "2026-11-28",
    author: "Kunal Mandal",
    authorRole: "Co-founder, Acquirely",
    authorBio: KUNAL_BIO,
    authorUrl: "https://www.linkedin.com/in/kunal-meta-ads/",
    authorImage: "/ecommerce/img/kunal-mandal.jpg",
    coverImage: "/blog/abo-vs-cbo-meta-ads.webp",
    image: {
      src: "/blog/abo-vs-cbo-meta-ads.webp",
      alt: "ABO vs CBO on Meta Ads comparison",
      title: "ABO vs CBO on Meta Ads: What's the Difference?",
      description:
        "How ad set budgets (ABO) and campaign budgets (CBO) differ on Meta Ads, and when to use each.",
      width: 1200,
      height: 628,
    },
    content: [
      "Read this before you set the budget on your next Meta campaign, because ABO and CBO decide who controls your money: you or Meta.",
      {
        type: "callout",
        text: "**The main difference between ABO and CBO on Meta Ads is where the budget sits.** With **ABO (ad set budget)**, you set a budget on each ad set and control exactly how much each one spends. With **CBO (campaign budget)**, you set one budget for the whole campaign, and Meta moves spend to the ad sets it predicts will perform best.",
      },
      'In this guide, you will see a clear comparison of both, the newer "budget sharing" option in between, and when to use each. You will also see the setup we run across the 20+ ad accounts we manage at Acquirely, and why we chose CBO.',
      "You will learn:",
      {
        type: "ul",
        items: [
          "What ABO and CBO mean in today's Ads Manager",
          "The pros and cons of each, side by side",
          "When ABO still makes sense, and when CBO is the better choice",
          "How to test new creatives fairly inside a CBO campaign",
        ],
      },
      `Want our full account setup? Read the guide to the [best Meta Ad structure after the Andromeda update](${STRUCTURE_POST}).`,
      { type: "toc" },

      { type: "h2", text: "What is ABO on Meta Ads?" },
      "**ABO** stands for **ad set budget optimisation**. You set a separate daily or lifetime budget on every ad set in the campaign, and each ad set spends its own budget, no matter how the others perform. You get full control over how much each audience or creative test receives.",
      "Example: three ad sets at ₹2,000 a day each. Each one spends about ₹2,000, even if one is clearly beating the other two.",

      { type: "h2", text: "What is CBO on Meta Ads?" },
      "**CBO** stands for **campaign budget optimisation**. Meta now calls it **Advantage+ campaign budget**. You set one budget at the campaign level, and Meta distributes it across your ad sets in real time, sending more to the ad sets it expects to deliver the best results.",
      "Example: one ₹6,000 campaign budget across the same three ad sets. Meta might spend ₹4,000 on the strongest, ₹1,500 on the next and ₹500 on the weakest.",
      "You can still guide CBO with **ad set spending limits**, a minimum or maximum per ad set. Meta now treats these as daily averages rather than strict daily figures.",

      { type: "h2", text: "What is ad set budget sharing?" },
      "**Ad set budget sharing** is a middle option for ABO campaigns. You still set a budget per ad set, but Meta can move **up to 20%** of one ad set's daily budget to another ad set in the same campaign when it predicts better results. Your total campaign spend stays the same.",
      "Think of it as ABO with a little CBO-style flexibility added. It needs at least two ad sets in the campaign.",

      { type: "h2", text: "ABO vs CBO: side-by-side comparison" },
      {
        type: "table",
        head: ["", "🔢 ABO (ad set budget)", "🤖 CBO (campaign budget)"],
        rows: [
          ["Where the budget is set", "On each ad set", "Once, on the campaign"],
          ["Who decides the split", "You", "Meta's AI"],
          ["Control over each ad set", "High", "Lower, guided by spend limits"],
          ["Spend on weak ad sets", "Continues until you change it", "Reduced automatically"],
          ["Spend on new, untested ad sets", "Guaranteed", "Often very low without a minimum spend"],
          ["Management effort", "High: many budgets to adjust", "Low: one budget to manage"],
          ["Scaling", "Raise each ad set's budget", "Raise one campaign budget"],
          ["Best for", "Strict tests, very different audiences or offers", "Testing and scaling with similar broad ad sets"],
          ["Fit after Andromeda", "Good for controlled tests", "Strong for consolidated, broad structures"],
        ],
      },
      { type: "h3", text: "ABO pros and cons" },
      "**Pros**",
      {
        type: "ul",
        items: [
          "Every ad set gets exactly the spend you set",
          "Clean, fair comparisons between tests",
          "Useful when audiences or offers are very different",
        ],
      },
      "**Cons**",
      {
        type: "ul",
        items: [
          "Budget keeps flowing to weak ad sets until you step in",
          "More manual work as the account grows",
          "Scaling means editing many budgets one by one",
        ],
      },
      { type: "h3", text: "CBO pros and cons" },
      "**Pros**",
      {
        type: "ul",
        items: [
          "Meta moves budget to the best performers automatically",
          "One budget to manage and scale",
          "Works well with broad targeting and a consolidated structure",
        ],
      },
      "**Cons**",
      {
        type: "ul",
        items: [
          "New ad sets can get almost no spend next to proven ones",
          "Less control over how each ad set is funded",
          "Meta can put most of the budget behind a few ads, which creates risk when they fatigue",
        ],
      },

      { type: "h2", text: "When should you use ABO vs CBO?" },
      {
        type: "table",
        head: ["Your situation", "Use"],
        rows: [
          ["Several broad ad sets with similar audiences", "✅ CBO"],
          ["Weekly creative testing plus scaling winners in one place", "✅ CBO with minimum spend on new ad sets"],
          ["Steady conversion data and you want less manual work", "✅ CBO"],
          ["Very different audiences, offers or locations that need fixed budgets", "🔢 ABO"],
          ["A strict A/B test where each side must get equal spend", "🔢 ABO"],
          ["You want ABO control but some flexibility", "🔀 ABO with budget sharing"],
        ],
      },
      "**Rule of thumb:** use ABO when you need control over each ad set. Use CBO when your ad sets are similar and you want Meta to find the winners.",

      { type: "h2", text: "How we use CBO for both testing and scaling" },
      "At Acquirely, we run one **Prospecting CBO campaign** that handles both creative testing and scaling, plus a separate Retention campaign for past buyers.",
      "We used to run separate testing and scaling campaigns. We merged them for two reasons:",
      {
        type: "ol",
        items: [
          "**Less audience overlap.** Both campaigns were chasing the same broad audience, often with the same winning ads, so they competed in the same auctions.",
          "**CBO was already scaling the winners.** In our accounts, about **90% of the Prospecting budget** was already going to the strongest creatives. Duplicating them into a scale campaign was usually unnecessary.",
        ],
      },
      { type: "h3", text: "Fixing CBO's biggest weakness: new ad sets not getting spend" },
      "CBO's main downside is that it favours ad sets with history. A brand-new batch of creatives can sit in the campaign and get almost nothing.",
      "We solve this with the **Minimum Spend Rule**:",
      {
        type: "ul",
        items: [
          "Launch each weekly creative batch in its **own new ad set**",
          "Set a minimum spend of about **1× your target Cost Per Result** on it",
          "Keep it for **7 days**, then remove it",
          "Apply it **only once** per ad set",
        ],
      },
      `This gives you ABO-style fairness for new tests, while CBO still scales the winners. The full method is in our post on [why new Meta ads aren't spending](${NOT_SPENDING_POST}).`,

      { type: "h2", text: "5 common ABO and CBO mistakes" },
      {
        type: "ol",
        items: [
          "**Mixing very different ad sets in one CBO.** If one ad set targets past buyers and another targets cold audiences, CBO will pour budget into the easy one. Keep retargeting and retention in their own campaign.",
          "**Adding new ads to a proven ad set.** Meta usually keeps backing the existing winner, so new ads get ignored. Launch new creatives in a new ad set.",
          "**Judging new CBO ad sets too early.** A new ad set with two days of tiny spend has not been tested. Give it a fair minimum spend for 7 days first.",
          "**Making big, sudden budget jumps.** Large changes can push campaigns back into the learning phase. Increase budgets in steady steps and watch results.",
          "**Running too many ABO ad sets on the same audience.** They end up bidding against each other. If the audiences are the same, consolidate into one CBO.",
        ],
      },

      { type: "h2", text: "How to switch from ABO to CBO" },
      "Follow these steps to move over without a sudden dip in results:",
      {
        type: "ol",
        items: [
          "**List your ABO ad sets and results.** Note which ones bring in most of your conversions.",
          "**Create a new CBO campaign.** Set the campaign budget roughly equal to the total of the ABO ad sets you are replacing.",
          "**Rebuild your best ad sets inside it.** Use broad audiences and your strongest creatives, with past buyers excluded.",
          "**Add a minimum spend to any brand-new test ad sets.** About 1× your target Cost Per Result, for 7 days.",
          "**Wind down the ABO campaign gradually.** Lower its budgets step by step as the CBO campaign takes over, instead of pausing everything at once.",
        ],
      },
      `Not sure about the targeting side? Read [broad targeting vs interest targeting on Meta](${TARGETING_POST}).`,

      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Is CBO better than ABO on Meta Ads?",
            a: "CBO is better than ABO for most Meta Ads accounts that run similar, broad ad sets and want to scale. Meta automatically moves budget to the strongest ad sets, which saves time and money. ABO is better when you need strict, equal budgets, such as for controlled tests or very different audiences.",
          },
          {
            q: "What does CBO stand for in Meta Ads?",
            a: "CBO stands for campaign budget optimisation in Meta Ads. Meta now calls it Advantage+ campaign budget. It means you set one budget at the campaign level, and Meta distributes that budget across your ad sets in real time, based on which ones it predicts will perform best.",
          },
          {
            q: "Is ABO better for testing new creatives?",
            a: "ABO is easier for testing because every ad set gets the spend you set. But you can test fairly inside CBO too. Launch each new creative batch in its own ad set with a temporary minimum spend of about 1× your target Cost Per Result for 7 days, then remove it.",
          },
          {
            q: "What is ad set budget sharing on Meta?",
            a: "Ad set budget sharing is a Meta option for ad set budget campaigns. It lets Meta move up to 20% of one ad set's daily budget to another ad set in the same campaign when it predicts better results. Total campaign spend stays the same. It sits between strict ABO and full CBO.",
          },
          {
            q: "Can you switch from ABO to CBO on an existing campaign?",
            a: "You can change the budget type on an existing campaign, but it is usually safer to build a new CBO campaign. That way, you keep your ABO results running while the new campaign learns. Then lower the ABO budgets step by step as the CBO campaign takes over, instead of switching everything overnight.",
          },
        ],
      },

      { type: "h2", text: "Not sure which setup fits your account?" },
      "The right budget setup depends on your structure, creative pipeline and conversion volume.",
      `[Book a Growth Diagnosis Call with Acquirely](${BOOKING_URL}). We will review your campaigns against the A3 Flywheel and show you exactly where your budget is leaking.`,
    ],
  },
  {
    slug: "meta-ads-not-spending",
    title: "Why Your New Meta Ads Aren't Spending (And How to Fix It)",
    metaTitle: "Why Your New Meta Ads Aren't Spending (And How to Fix It)",
    metaDescription:
      "New Meta ads not spending? Learn why Meta keeps backing old ad sets, and use our 7-day Minimum Spend Rule to give every new creative a fair test.",
    excerpt:
      "New Meta ads not spending? Why Meta keeps backing older ad sets, a 6-point checklist to rule out simpler problems, and the 7-day Minimum Spend Rule we use across 20+ accounts.",
    date: "2026-11-23",
    author: "Kunal Mandal",
    authorRole: "Co-founder, Acquirely",
    authorBio: KUNAL_BIO,
    authorUrl: "https://www.linkedin.com/in/kunal-meta-ads/",
    authorImage: "/ecommerce/img/kunal-mandal.jpg",
    coverImage: "/blog/meta-ads-not-spending.webp",
    image: {
      src: "/blog/meta-ads-not-spending.webp",
      alt: "Why new Meta ads aren't spending and how the Minimum Spend Rule fixes it",
      title: "Why Your New Meta Ads Aren't Spending (And How to Fix It)",
      description:
        "Why Meta keeps spending on older ad sets instead of your new creatives, and how a 7-day minimum spend gives every new Pack a fair test.",
      width: 1200,
      height: 628,
    },
    content: [
      "If you have ever launched a fresh batch of creatives and watched Meta spend almost nothing on them, keep reading, because the problem is rarely the creatives themselves.",
      {
        type: "callout",
        text: "**Quick answer: New Meta ads often aren't spending** because Meta keeps pushing budget to older ad sets that already have a proven performance history. Your new ads never get enough delivery to prove themselves. The fix is a temporary **minimum spend** on each new ad set, roughly 1× your target Cost Per Result for 7 days.",
      },
      "In this guide, you will find out exactly why this happens and how to diagnose it in a few minutes. You will also get the Minimum Spend Rule we use across the 20+ ad accounts we manage at Acquirely.",
      "You will learn:",
      {
        type: "ul",
        items: [
          "The real reasons new ads get little or no spend",
          "A quick checklist to rule out simpler problems first",
          "The Minimum Spend Rule, step by step, with a worked example",
          "What to do after the 7-day test, and the mistakes to avoid",
        ],
      },
      `Want to see where this rule fits in a full account setup? Read our guide to the [best Meta Ad structure after the Andromeda update](${STRUCTURE_POST}).`,
      { type: "toc" },

      { type: "h2", text: "Why aren't my new Meta ads spending?" },
      "Your new Meta ads usually aren't spending because **Meta favours what it already trusts**. In a campaign budget (CBO) setup, older ad sets have weeks of conversion data, so Meta keeps sending them most of the budget. New ads start with zero history, so they get very little delivery and never collect enough data to compete.",
      "Here are the most common causes, from most to least likely.",
      { type: "h3", text: "1. Older ad sets have the performance history" },
      "This is the big one. With Advantage+ campaign budget, Meta moves spend to the ad sets it predicts will perform best. An ad set that has been converting for months looks far safer than one that launched this morning.",
      "The result: your new Pack of creatives sits in the campaign, technically live, while the old ad sets take almost all the spend.",
      { type: "h3", text: "2. You added new ads into an existing ad set" },
      "When you drop new creatives into an ad set that already has a winner, Meta usually keeps backing the winner. The new ads get a tiny share of impressions.",
      "Worse, adding new ads can also change how Meta distributes budget inside that ad set, and cut spend on the ads that were already working. That is why we launch every new creative batch in its own new ad set.",
      { type: "h3", text: "3. Your new ads are too similar to old ones" },
      "After the Andromeda update, many practitioners report that Meta treats very similar ads as the same idea. If your new ads are the old winner with a different background colour, Meta has little reason to give them separate delivery.",
      { type: "h3", text: "4. Your budget is too small for your Cost Per Result" },
      "If your target Cost Per Purchase is ₹1,000 and the whole campaign spends ₹2,000 a day, there is simply not enough budget for new ad sets to get a fair share alongside proven ones.",
      { type: "h3", text: "5. Something technical is blocking delivery" },
      "Sometimes it is not about budget at all. The ads may still be in review, rejected, scheduled for later, or limited by a setting you forgot about.",

      { type: "h2", text: "Check these 6 things before you change anything" },
      "Rule out the simple problems first. It takes five minutes and saves you from fixing the wrong thing.",
      {
        type: "ul",
        items: [
          '**Ad status:** are all new ads approved and "Active", not "In review" or "Rejected"?',
          "**Schedule:** is the ad set scheduled to start now, not at a later date?",
          "**Spend limits:** is there an old maximum spend limit on the ad set capping it?",
          "**Account issues:** any billing problems or account spending limits reached?",
          "**Budget vs Cost Per Result:** is the campaign budget big enough to fund new tests alongside proven ad sets?",
          "**Creative difference:** are the new ads genuinely new concepts, or small tweaks of old ones?",
        ],
      },
      "If everything checks out and the new ad set is still getting little or no spend, the cause is almost certainly budget allocation. Meta is backing your proven ad sets. That is exactly what the Minimum Spend Rule fixes.",

      { type: "h2", text: "The fix: the Minimum Spend Rule" },
      "The **Minimum Spend Rule** means you give every new creative ad set a temporary **minimum daily spend of about 1× your target Cost Per Result**, for **7 days**. After 7 days, you remove it and let Meta decide. Each new batch gets a fair test, without forcing budget into ads that don't perform.",
      "We built this rule after testing it across our client accounts. It solves a real business problem too: brands invest serious time and money in new creatives, and that investment is wasted if the ads never get spend.",
      { type: "h3", text: "How to set it up in 6 steps" },
      {
        type: "ol",
        items: [
          "**Launch each new creative batch in its own new ad set.** We call each weekly batch a Pack. Use the same broad audience as your other prospecting ad sets.",
          "**Open the ad set's budget settings.** In a campaign using Advantage+ campaign budget, turn on ad set spending limits.",
          "**Set the minimum daily spend to about 1× your target Cost Per Result.** Leave the maximum empty.",
          '**Note the start date.** Add it to the ad set name, for example "Pack 12 | Min spend until 21 Nov".',
          "**Leave it alone for 7 days.** Don't judge it after day 2.",
          "**Remove the minimum spend on day 7.** From here, the ad set has to earn its budget.",
        ],
      },
      { type: "h3", text: "Worked example" },
      {
        type: "table",
        head: ["Setting", "Value"],
        rows: [
          ["Target Cost Per Purchase", "₹1,000"],
          ["Minimum daily spend on the new ad set", "About ₹1,000"],
          ["Duration", "7 days"],
          ["Minimum test spend for the Pack", "About ₹7,000"],
          ["After day 7", "Minimum removed, Meta allocates naturally"],
        ],
      },
      "Two practical notes:",
      {
        type: "ul",
        items: [
          "**Keep room in your campaign budget.** If several new ad sets have minimums at once, make sure their total still leaves plenty of budget for your proven ad sets.",
          "**Treat the limit as an average.** Meta has moved ad set spending limits towards a daily average rather than a strict daily figure, so expect some daily variation.",
        ],
      },
      { type: "h3", text: "Why 7 days?" },
      "Seven days gives a new Pack enough delivery to collect data and build early engagement across every day of the week. It also gives Meta enough signals to judge how the new creatives really perform.",
      "If the Pack is strong, Meta often starts spending **more** than the minimum on it, even before day 7.",

      { type: "h2", text: "What happens after the 7-day test?" },
      "Once you remove the minimum spend, Meta makes the call on its own. There are only two outcomes:",
      {
        type: "table",
        head: ["Outcome", "What you see", "What to do"],
        rows: [
          ["✅ The Pack is competitive", "Meta keeps spending on it, often more than the old minimum", "Leave it running. Iterate on the winning ads in your next Pack."],
          ["❌ The Pack is not competitive", "Spend drops off, or stops almost completely", "Let it go. Learn from what didn't work and test new concepts next week."],
        ],
      },
      "Either way, you now have a real answer, based on real spend, instead of a guess based on almost no data.",
      { type: "h3", text: "The one rule you must not break" },
      "**Apply the minimum spend to an ad set only once.**",
      "After its 7-day test, never put a minimum spend back on that same ad set. If Meta stopped spending on it, that is the answer. Forcing budget back into it just means paying for ads Meta has already decided are less competitive.",
      "A new idea deserves a new ad set and a fresh test. An old ad set has to earn its spend.",

      { type: "h2", text: "5 mistakes that keep new ads from spending" },
      {
        type: "ol",
        items: [
          "**Adding new ads to old ad sets.** It protects nobody: the new ads get ignored and the old winner can lose spend. Use a new ad set for every batch.",
          "**Judging too early.** Pausing a new ad set after two days of low spend means you never gave it a real test.",
          "**Leaving the minimum on forever.** A permanent minimum forces budget into ads that may not deserve it. Remove it on day 7.",
          "**Setting minimums your budget can't support.** Five new ad sets at ₹1,000 minimum each will squeeze a ₹6,000 a day campaign. Launch fewer Packs or raise the budget.",
          "**Testing tweaks instead of ideas.** A new background colour is not a new ad. Give Meta genuinely different concepts so they have a reason to get delivery.",
        ],
      },
      `New to how Meta delivers ads now? Read [Meta Andromeda update explained](${ANDROMEDA_POST}) for the background.`,

      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Why is Meta not spending on my new ad set?",
            a: "Meta is not spending on your new ad set because it prefers ad sets with a proven performance history. In a campaign budget setup, older ad sets with steady conversions look safer, so they take most of the spend. A temporary minimum spend on the new ad set gives it enough delivery to prove itself.",
          },
          {
            q: "How much minimum spend should I set for new Meta ads?",
            a: "Set the minimum spend for new Meta ads at roughly 1× your target Cost Per Result per day, at the ad set level. If your target Cost Per Purchase is ₹1,000, set about ₹1,000 per day. Keep it for 7 days, then remove it and let Meta allocate budget on performance.",
          },
          {
            q: "Should I add new creatives to an existing ad set?",
            a: "No, you should usually not add new creatives to an existing ad set that already has a winner. Meta tends to keep backing the proven ad, so new creatives get little delivery, and the change can also disrupt the winner. Launch each new batch of creatives in its own new ad set instead.",
          },
          {
            q: "How long should I wait before judging new Meta ads?",
            a: "Wait at least 7 days before judging new Meta ads, and make sure they actually received meaningful spend in that time. Judging after one or two days, or after almost no spend, tells you very little. Seven days covers every day of the week and gives Meta enough signals.",
          },
          {
            q: "Can I use ad set minimum spend without CBO?",
            a: "Ad set spending limits are a feature of Advantage+ campaign budget, also called CBO. Without it, each ad set has its own budget, so you control spend directly by setting that ad set's daily budget. The same idea still applies: give each new test enough budget for a fair 7-day test.",
          },
        ],
      },

      { type: "h2", text: "Still struggling to get new ads to spend?" },
      "If you have tried everything and your best new creatives still sit unused, the problem is usually your account structure.",
      `[Book a Growth Diagnosis Call with Acquirely](${BOOKING_URL}). We will check your campaign structure, budgets and creative testing setup against the A3 Flywheel.`,
    ],
  },
  {
    slug: "broad-targeting-vs-interest-targeting-meta",
    title: "Broad Targeting vs Interest Targeting on Meta: Which Is Best for You in 2026?",
    metaTitle: "Broad vs Interest Targeting on Meta: Which Is Best in 2026?",
    metaDescription:
      "Broad or interest targeting on Meta? Compare both side by side, see what changed in 2026, and learn which one fits your brand, from 20+ ad accounts.",
    excerpt:
      "Broad or interest targeting on Meta? A side-by-side comparison, what changed in 2025 and 2026, and how to move to broad without breaking results.",
    date: "2026-11-20",
    author: "Kunal Mandal",
    authorRole: "Co-founder, Acquirely",
    authorBio: KUNAL_BIO,
    authorUrl: "https://www.linkedin.com/in/kunal-meta-ads/",
    authorImage: "/ecommerce/img/kunal-mandal.jpg",
    coverImage: "/blog/broad-targeting-vs-interest-targeting-meta.webp",
    image: {
      src: "/blog/broad-targeting-vs-interest-targeting-meta.webp",
      alt: "Broad targeting vs interest targeting on Meta Ads comparison",
      title: "Broad Targeting vs Interest Targeting on Meta: Which Is Best in 2026?",
      description:
        "Broad targeting vs interest targeting on Meta Ads: who picks the audience, what changed in 2026, and which one fits your brand.",
      width: 1200,
      height: 628,
    },
    content: [
      "Read this before you build your next ad set, because choosing the wrong targeting in 2026 can quietly cap your results no matter how good your ads are.",
      {
        type: "callout",
        text: "**Quick answer:** The main difference between **broad targeting** and **interest targeting** on Meta is who chooses the audience. With broad targeting, you set only the basics, like location and age, and Meta's AI finds buyers through your creative. With interest targeting, you pick interests yourself, which Meta now mostly treats as suggestions, not strict filters.",
      },
      "In this guide, you will see a side-by-side comparison of both approaches. You will also see what changed in 2025 and 2026, and what we found after testing across 20+ ad accounts at Acquirely.",
      "You will learn:",
      {
        type: "ul",
        items: [
          "What broad and interest targeting actually mean in Ads Manager today",
          "Why broad targeting usually wins after the Andromeda update",
          "The few situations where interest targeting still makes sense",
          "How to move your account from interests to broad without breaking results",
        ],
      },
      `Short on time? Jump to the [comparison table](#comparison), or read our guide to the [best Meta Ad structure after the Andromeda update](${STRUCTURE_POST}).`,
      { type: "toc" },

      { type: "h2", text: "What is broad targeting on Meta?" },
      "**Broad targeting** on Meta means running ads with only basic settings, such as location, language and age, and no interests or behaviours added. Meta's AI then decides who sees each ad, using signals from your creative, your pixel data and how people respond. You give it the widest pool to search.",
      "In Ads Manager today, broad targeting usually means **Advantage+ audience** with few or no suggestions added.",

      { type: "h2", text: "What is interest targeting on Meta?" },
      '**Interest targeting** on Meta, called **detailed targeting** in Ads Manager, means choosing interests, behaviours or demographics you think your buyers have, such as "yoga" or "online shoppers". You are telling Meta who to look for, instead of letting it work that out from your ads.',
      "Before 2025, these interests worked as strict filters. That has changed.",

      { type: "h2", text: "What changed in 2025 and 2026" },
      "Meta has steadily reduced how much interest targeting controls delivery:",
      {
        type: "ul",
        items: [
          '**Interests are now "suggestions" by default.** Meta describes detailed targeting as audience suggestions: it shows ads to people matching them, and to other people when that is likely to improve performance.',
          "**Many interests were merged or removed.** Meta began consolidating narrow interests into broader categories in mid-2025, and removed more interest categories in January 2026.",
          "**Interest exclusions are gone.** You can no longer exclude people based on interests, behaviours or detailed demographics.",
          `**Andromeda changed delivery.** Meta's ad retrieval engine now reads what your creative shows and says, and matches it to people far earlier in the process. (New to it? Read the [Meta Andromeda update explained](${ANDROMEDA_POST}).)`,
        ],
      },
      "What still works as a hard control: **location, language, minimum age and Custom Audience exclusions**, such as excluding your past buyers.",
      "In short, the interest box is still there, but in most setups it is now a hint, not a rule.",

      { type: "h2", id: "comparison", text: "Broad targeting vs interest targeting: side-by-side comparison" },
      {
        type: "table",
        head: ["", "🌐 Broad targeting", "🎯 Interest targeting"],
        rows: [
          ["Who picks the audience", "Meta's AI, guided by your creative", "You, through chosen interests"],
          ["Audience size", "Very large", "Smaller, but Meta may expand it"],
          ["How Meta treats your inputs", "Basic hard controls only", "Mostly as suggestions in 2026"],
          ["Works best with", "Strong, varied creative and good conversion data", "New accounts with little data, very niche offers"],
          ["Setup effort", "Low: one broad ad set", "High: many ad sets, many interest stacks"],
          ["Risk of audience overlap", "Low", "High when ad sets share similar interests"],
          ["Main growth lever", "New creative concepts", "Finding new interests"],
          ["Fit with Andromeda", "Strong", "Weaker"],
        ],
      },

      { type: "h2", text: "Why broad targeting usually wins in 2026" },

      { type: "h3", text: "1. Your creative is now the targeting" },
      'After the Andromeda update, Meta reads what is inside your ad and works out who it suits. A video about busy mums meal-prepping already tells Meta who to show it to. Adding a "cooking" interest on top mostly narrows where it is allowed to look.',

      { type: "h3", text: "2. Interest targeting stopped delivering for us" },
      "Across the 20+ accounts we manage, interest-based campaigns that had been steady for months became significantly less effective after the update. Broad setups with strong creative testing performed better and more consistently.",

      { type: "h3", text: "3. Fewer ad sets means less internal competition" },
      "Interest targeting usually means splitting your budget across many ad sets. When those audiences overlap, your own ad sets end up bidding against each other for the same people. One broad structure removes that problem.",

      { type: "h3", text: "4. Meta is already expanding beyond your interests" },
      "Since your interests are mostly treated as suggestions, Meta will show ads outside them anyway when it predicts better results. You keep the extra work of building interest stacks, but lose most of the control.",

      { type: "h2", text: "When interest targeting still makes sense" },
      "Broad is the right default for most brands, but not every brand. Interest targeting can still help you in a few cases:",
      {
        type: "ul",
        items: [
          "**Brand-new ad accounts or pixels** with almost no conversion data. A few relevant interests can give Meta a starting point while it learns.",
          "**Very small budgets.** When you can only afford limited delivery, a hint about where to start can reduce wasted early spend.",
          "**Very niche B2B or professional offers**, where the right buyers are a tiny share of the population and your creative alone may not signal it clearly.",
          "**Controlled tests**, where you deliberately want to compare a specific audience against broad.",
        ],
      },
      "Even then, treat interests as a starting hint. Plan to test broad once you have steady conversion data.",

      { type: "h2", text: "Which one is best for you? A quick decision guide" },
      {
        type: "table",
        head: ["Your situation", "What to use"],
        rows: [
          ["Steady conversions every week, regular new creatives", "✅ Broad targeting"],
          ["D2C or e-commerce brand scaling past a plateau", "✅ Broad targeting"],
          ["Running several overlapping interest ad sets today", "✅ Move to broad, consolidate"],
          ["New pixel with very few conversions", "🟡 Start with a few interests as suggestions, then test broad"],
          ["Very niche B2B offer, small budget", "🟡 Interests as suggestions, with creative that clearly names the buyer"],
          ["Few creatives, rarely refreshed", "⚠️ Fix creative first: neither option will save weak ads"],
        ],
      },
      "The last row matters most. Broad targeting only works when you feed it strong, varied creative. If your ads are weak, Meta will simply show them to a wider, less interested audience.",

      { type: "h2", text: "How to switch from interest targeting to broad targeting in 6 steps" },
      "Don't switch everything off in one day. Follow these steps to move over without a sudden drop in results.",
      {
        type: "ol",
        items: [
          "**Audit your current ad sets.** List every interest-based ad set, its spend share and its results. Note which ones carry most of your conversions.",
          "**Build one broad Prospecting campaign.** Use a CBO campaign with location, language and age only, and Advantage+ audience with few or no suggestions.",
          "**Exclude past buyers.** Add your customer list or purchaser Custom Audience as an exclusion, so prospecting budget goes only to net-new customers.",
          "**Launch fresh, distinct creatives.** Put a new batch of genuinely different concepts into the broad ad set. Don't just move old ads across.",
          "**Give it a fair test.** Set a temporary minimum spend on the new ad set, about 1× your target Cost Per Result for 7 days, so it gets enough delivery to prove itself.",
          "**Wind down interest ad sets gradually.** As the broad campaign takes over, lower budgets on the old interest ad sets step by step instead of pausing them all at once.",
        ],
      },
      `Want the full structure, including retention and scaling? Read our guide to the [best Meta Ad structure after the Andromeda update](${STRUCTURE_POST}). New to the update itself? Start with [Meta Andromeda update explained](${ANDROMEDA_POST}).`,

      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "Is broad targeting better than interest targeting on Meta?",
            a: "For most brands in 2026, broad targeting is better than interest targeting on Meta. Meta's AI now finds buyers mainly through your creative, and treats interests mostly as suggestions anyway. Across the 20+ accounts we manage, broad setups with strong, varied creative have outperformed interest-based ones after the Andromeda update.",
          },
          {
            q: "Does interest targeting still work on Meta in 2026?",
            a: "Interest targeting still exists on Meta in 2026, but it works far less reliably. Many interests were merged or removed, interest exclusions are gone, and Meta mostly treats your selections as suggestions. It can still help brand-new accounts or very niche offers get a starting point before switching to broad.",
          },
          {
            q: "What is Advantage+ audience?",
            a: "Advantage+ audience is Meta's AI targeting setting that finds people likely to convert, using your interests, Custom Audiences or lookalikes only as optional suggestions. Location, language, minimum age and Custom Audience exclusions stay as hard limits. In practice, Advantage+ audience with few suggestions is how most advertisers run broad targeting today.",
          },
          {
            q: "Can you still exclude audiences with broad targeting?",
            a: "Yes, you can still exclude Custom Audiences with broad targeting, such as past purchasers or existing leads. What Meta removed is the option to exclude people by interests, behaviours or detailed demographics. Excluding past buyers from prospecting is one of the most useful settings you can keep in a broad campaign.",
          },
          {
            q: "How long should you test broad targeting before deciding?",
            a: "Test broad targeting for at least 7 days with enough budget to exit early learning, and judge it on several weeks of results. Make sure it has fresh, distinct creatives and a fair share of spend. Comparing a brand-new broad ad set against a mature interest ad set after two days is not a fair test.",
          },
        ],
      },

      { type: "h2", text: "Need help moving to broad targeting?" },
      "If your interest-based campaigns have slowed down and you are not sure how to restructure, start with a review.",
      `[Book a Growth Diagnosis Call with Acquirely](${BOOKING_URL}). We will check your targeting, structure and creative pipeline against the A3 Flywheel, the system we built after the Andromeda update.`,
    ],
  },
  {
    slug: "meta-andromeda-update-explained",
    title: "Meta Andromeda Update Explained: What Changed for Advertisers (With Examples)",
    metaTitle: "Meta Andromeda Update Explained: What Changed 2026",
    metaDescription:
      "Meta's Andromeda update changed how Facebook and Instagram ads get delivered. Learn what it is, what changed for advertisers, and real examples.",
    excerpt:
      "What the Meta Andromeda update is, why interest targeting stopped working, and four real examples of what changed inside Meta ad accounts.",
    date: "2026-11-17",
    author: "Kunal Mandal",
    authorRole: "Co-founder, Acquirely",
    authorBio: KUNAL_BIO,
    authorUrl: "https://www.linkedin.com/in/kunal-meta-ads/",
    authorImage: "/ecommerce/img/kunal-mandal.jpg",
    coverImage: "/blog/meta-andromeda-update-explained.webp",
    image: {
      src: "/blog/meta-andromeda-update-explained.webp",
      alt: "Meta Andromeda update explained: how ad retrieval works",
      title: "Meta Andromeda Update Explained: What Changed for Advertisers",
      description:
        "Meta Andromeda update explained: what the new ad retrieval engine changed inside Ads Manager for advertisers.",
      width: 1200,
      height: 630,
    },
    content: [
      "If your Meta Ads started behaving unpredictably in 2025, keep reading, because the cause is almost certainly Andromeda, and the fix is not what most advertisers try first.",
      {
        type: "callout",
        text: "**Quick answer:** The **Meta Andromeda update** is a new AI ad retrieval engine that decides which ads are even considered for each person before the auction starts. Meta announced it in December 2024 and rolled it out through 2025. The big change for you: creative now does the targeting, so distinct ad concepts matter more than audience settings.",
      },
      "In this guide, you will learn what Andromeda actually is, in plain language, and what it changed inside your ad account. You will also see real examples from the 20+ accounts we manage at Acquirely.",
      "By the end, you will know:",
      {
        type: "ul",
        items: [
          "What Andromeda does, and where it sits in Meta's ad system",
          "Why your old interest-based setup stopped working",
          'What Meta means by "creative diversification"',
          "The exact changes to make in your account now",
        ],
      },
      `Already know the theory? Skip to the [examples](#examples), or go straight to our guide on the [best Meta Ad structure after the Andromeda update](${STRUCTURE_POST}).`,
      { type: "toc" },

      { type: "h2", text: "What is the Meta Andromeda update?" },
      "The **Meta Andromeda update** is Meta's next-generation **ad retrieval engine**. It is the first step in ad delivery: from all the ads that could be shown to someone, it picks the small set worth sending to the auction. Meta built it to power Advantage+ automation across Facebook and Instagram.",
      "Think of it as the gatekeeper. If your ad does not get through retrieval, it never reaches the auction, whatever your bid or budget.",

      { type: "h3", text: "How Meta's ad delivery works now" },
      "Every time someone opens Facebook or Instagram, Meta runs three steps in a fraction of a second:",
      {
        type: "ol",
        items: [
          "**Retrieval (Andromeda):** narrows tens of millions of eligible ads down to a few thousand candidates for that person.",
          "**Ranking:** scores those candidates in more detail to predict which ones the person is most likely to act on.",
          "**Auction:** combines those predictions with bids to decide which ad is actually shown.",
        ],
      },
      "Before Andromeda, retrieval could only use simple models, so it relied heavily on the targeting signals you set. Andromeda uses far more complex AI models at this first step. That means it can judge what is inside your ad, and who it suits, much earlier.",

      { type: "h3", text: "What Meta has officially said" },
      {
        type: "table",
        head: ["Date", "What Meta announced", "Key numbers"],
        rows: [
          ["Dec 2024", "Andromeda introduced as the retrieval engine behind Advantage+, built on NVIDIA Grace Hopper and Meta's own MTIA chips", "+6% retrieval recall, +8% ads quality on selected segments, 10,000x more complex retrieval models"],
          ["2025", 'Gradual rollout to advertisers, plus guidance on "creative diversification"', "No single launch date for advertisers"],
          ["Oct 2026", "Next generation of Andromeda", "Over 1 billion ads scored per second, about 100x the 2024 throughput, 2.4% more conversions on Facebook since 2025"],
        ],
      },
      "Sources: [Meta Engineering, Dec 2024](https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/) and [Meta Engineering, Oct 2026](https://engineering.fb.com/2026/10/28/ml-applications/meta-andromeda-next-gen-ads-retrieval-gpu-co-design/).",
      "One important detail: there is no Andromeda switch in Ads Manager. You cannot turn it on or off. It runs underneath every campaign.",

      { type: "h2", text: "What changed for advertisers after Andromeda?" },
      "The main change after the Andromeda update is that **creative now does the targeting**. Meta reads what your ad shows and says, then finds the people it suits. Narrow interest stacks and many near-identical ad variations lost their edge, while distinct creative concepts and broad audiences gained it.",
      "Here is how the old playbook compares with what works now:",
      {
        type: "table",
        head: ["", "❌ Before Andromeda", "✅ After Andromeda"],
        rows: [
          ["Who finds the customer", "You, through interests and lookalikes", "Meta, through your creative"],
          ["Audience setup", "Narrow, stacked interest audiences", "Broad audiences with few constraints"],
          ["Creative variety", "4 to 5 ads, small tweaks (colour, headline)", "Many genuinely different concepts"],
          ["Campaign structure", "Many ad sets split by audience", "Fewer, consolidated campaigns"],
          ["Main growth lever", "Finding a new interest", "Shipping new creative concepts"],
          ["Creative refresh", "When an ad looked tired", "A weekly, structured routine"],
        ],
      },

      { type: "h3", text: "1. Interest targeting lost its edge" },
      "Across the 20+ accounts we manage, interest-based campaigns that had been steady for months became significantly less effective after the update.",
      "The reason is simple. Andromeda is better at finding buyers from your creative than you are at guessing them from interests. Tight audiences now mostly limit how far it can search.",

      { type: "h3", text: '2. "Creative diversification" became Meta\'s main advice' },
      "Meta's own guidance is clear: small tweaks like a new background colour or a changed text overlay are **not** creative diversification.",
      "Real diversification means changing the idea itself, for example:",
      {
        type: "ul",
        items: [
          "A founder story vs a product demo vs a customer testimonial",
          "A problem-led hook vs an offer-led hook",
          "Static image vs short video vs carousel",
          "Different customer types, use cases or pain points",
        ],
      },

      { type: "h3", text: "3. Similar ads now compete with each other" },
      "Many practitioners report that Andromeda treats very similar ads as one idea. So 20 versions of the same concept may get no more reach than one. Meta has not confirmed exactly how this works, but it matches what we see: distinct concepts get delivery, near-duplicates fight over it.",

      { type: "h3", text: "4. Fragmented account structures started hurting" },
      "When you split the same broad audience across several campaigns, they can end up competing for the same people. Under Andromeda, consolidated structures with more creative inside them usually perform better.",

      { type: "h2", id: "examples", text: "Andromeda examples: what it looks like in a real ad account" },
      "Theory is useful, but you probably want to know what this looks like day to day. Here are four patterns we see again and again across client accounts.",

      { type: "h3", text: "Example 1: The interest stack that stopped working" },
      "**Before:** A D2C brand runs five ad sets, each with a different interest stack, and the same three ads in every ad set. Results are steady for months.",
      "**After Andromeda:** Performance slides across all five ad sets at once. Changing or adding interests does not bring it back.",
      "**What fixed it:** Moving to one broad Prospecting campaign, excluding past buyers, and putting the effort into new creative concepts instead of new audiences.",

      { type: "h3", text: "Example 2: Ten ads that were really one ad" },
      "This one is an illustration of a common mistake.",
      "A brand launches 10 new ads. The same product photo appears on 10 different background colours with slightly different headlines.",
      "To you, that is 10 ads. To Andromeda, it is basically one idea, so most of them barely get delivery.",
      "Now compare a batch of five genuinely different ads:",
      {
        type: "table",
        head: ["Ad", "Concept", "Format"],
        rows: [
          ["1", "Founder explains why the product exists", "Video"],
          ["2", "Customer unboxing and first reaction", "UGC video"],
          ["3", "Before vs after comparison", "Static"],
          ["4", '"3 mistakes people make" problem hook', "Carousel"],
          ["5", "Limited-time offer", "Static"],
        ],
      },
      "Five distinct concepts give Meta five different ways to reach five different kinds of buyer.",

      { type: "h3", text: "Example 3: New creatives that never got spend" },
      'One of the most common post-Andromeda complaints we hear: "We launched new creatives and Meta spent nothing on them."',
      "What happens is that Meta keeps pushing budget to older ad sets with a proven history. New creatives get almost no delivery, so they never collect enough data to prove themselves.",
      `Our fix is a **Minimum Spend Rule**. Each new batch of creatives goes into its own ad set with a minimum spend of about 1× the target Cost Per Result for 7 days. After that, it has to earn its budget. (Step by step: [why your new Meta ads aren't spending](${NOT_SPENDING_POST}).)`,

      { type: "h3", text: "Example 4: The winning ad you should not pause" },
      "In many accounts, Meta puts around 70% of a campaign's budget behind just three or four creatives. After four or five months, one of them may still take the same spend while its ROAS slips from 4.5 to 3.5.",
      "Pausing it overnight feels logical. In practice, it can drop ROAS even further, to around 2, because the account suddenly loses a major source of conversions.",
      "The safer move is to cut its share of spend gradually, using spend limits, so other ad sets can take over.",

      { type: "h2", text: "How to adapt your Meta Ads to Andromeda: 6 steps" },
      "Follow these steps to bring your account in line with how Meta delivers ads now.",
      {
        type: "ol",
        items: [
          `**Go broad.** Replace stacked interest audiences with broad targeting in your prospecting campaigns. Let the creative find the buyer. (Not sure yet? Compare [broad targeting vs interest targeting](${TARGETING_POST}).)`,
          "**Exclude past buyers from prospecting.** Keep acquisition budget for net-new customers, and reach existing customers through a separate Retention campaign.",
          "**Consolidate your structure.** Fewer campaigns chasing the same audience means less internal competition. We now run just two: a Prospecting CBO and a Retention campaign.",
          "**Ship distinct concepts every week.** Treat creative like a production line. New angles, new hooks, new formats, not just new colours.",
          "**Give new creatives a fair test.** Use a temporary minimum spend so new ads get enough delivery to prove themselves, then let Meta decide.",
          "**Clean up your tracking.** Andromeda can only learn from the signals you send. Check that your Pixel and Conversions API are passing purchase or lead events correctly.",
        ],
      },
      `Want the full setup, with budgets and rules? Read our step-by-step guide to the [best Meta Ad structure after the Andromeda update](${STRUCTURE_POST}).`,

      { type: "h3", text: "Andromeda myths to ignore" },
      {
        type: "table",
        head: ["Myth", "Reality"],
        rows: [
          ['"Targeting doesn\'t matter at all now"', "Exclusions, location and campaign objective still matter. Narrow interest guessing is what lost value."],
          ['"More ads always means better results"', "More **different** ads helps. More copies of one idea mostly compete with each other."],
          ['"You can switch Andromeda off"', "There is no setting for it. It runs underneath every campaign."],
          ['"Andromeda ruined Meta Ads"', "It changed what works. Accounts that adapted their structure and creative system can perform better than before."],
        ],
      },

      { type: "h2", text: "FAQ" },
      {
        type: "faq",
        items: [
          {
            q: "When did the Meta Andromeda update roll out?",
            a: "The Meta Andromeda update was first described by Meta's engineering team in December 2024 and rolled out to advertisers gradually through 2025. Meta never gave one launch date in Ads Manager. In October 2026, Meta announced a next-generation version that scores over one billion ads per second.",
          },
          {
            q: "Is interest targeting dead after Andromeda?",
            a: "Interest targeting is not gone, but it has lost most of its edge after Andromeda. Meta now finds buyers mainly through your creative, so narrow interest stacks tend to limit delivery. Across the 20+ accounts we manage, broad audiences with strong creative testing have outperformed interest-based setups.",
          },
          {
            q: "How many creatives do you need for Andromeda?",
            a: "There is no fixed number of creatives you need for Andromeda. What matters is how different they are. A handful of genuinely distinct concepts, such as a demo, a testimonial and an offer, usually beats dozens of near-identical variations. Add new concepts every week to keep learning going.",
          },
          {
            q: "Does Andromeda affect lead generation campaigns?",
            a: "Yes, Andromeda affects lead generation campaigns as well as e-commerce. It works at the retrieval step for all ads on Facebook and Instagram. The same rules apply: broad audiences, distinct creative concepts and clean conversion signals, ideally optimising for qualified leads rather than raw form fills.",
          },
          {
            q: "Can you turn off Meta Andromeda?",
            a: "No, you cannot turn off Meta Andromeda. It is part of Meta's core ad delivery system, not a campaign setting, so it runs underneath every campaign in every account. The only thing you control is how well your structure, creative and tracking work with it.",
          },
        ],
      },

      { type: "h2", text: "Need help adapting to Andromeda?" },
      "If your results dropped after the update and nothing you tried brought them back, the problem is usually structure and creative, not budget.",
      `[Book a Growth Diagnosis Call with Acquirely](https://booknow.acquirely.in/D2CFRC). We will review your account against the A3 Flywheel, the system we built after Andromeda changed the rules.`,
    ],
  },
  {
    slug: "best-meta-ad-structure-after-andromeda-update",
    title: "Best Meta Ad Structure After the Andromeda Update: The A3 Flywheel (2026)",
    metaTitle: "Best Meta Ad Structure After Andromeda Update",
    metaDescription:
      "Interest targeting stopped working after Andromeda. See the Meta Ads structure we now run across 20+ accounts, from creative Packs to day-of-week budgets.",
    excerpt:
      "The two-campaign Meta Ads structure we run across 20+ accounts after Andromeda: weekly creative Packs, a minimum spend rule and day-of-week budgets.",
    date: "2026-11-14",
    author: "Kunal Mandal",
    authorRole: "Co-founder, Acquirely",
    authorBio: KUNAL_BIO,
    authorUrl: "https://www.linkedin.com/in/kunal-meta-ads/",
    authorImage: "/ecommerce/img/kunal-mandal.jpg",
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
      `After Meta's Andromeda update, **interest-based targeting lost most of its edge**. Audience structures that delivered steady results before the update became much less effective across the majority of accounts we managed. Broad targeting paired with strong creative testing now performs better. (See the full [broad targeting vs interest targeting](${TARGETING_POST}) comparison.)`,
      "Before the update, interest stacks gave you consistent, predictable results. After it, the same setups started slipping, account after account. (New to Andromeda? Start with the [Meta Andromeda update explained](/blog/meta-andromeda-update-explained), with real account examples.)",
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
      `The Prospecting campaign is where you test and discover new winning creatives. It is also where those winners scale. (Why a campaign budget and not ad set budgets? See [ABO vs CBO on Meta Ads](${ABO_CBO_POST}).)`,
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
      `For the full walkthrough, including a diagnostic checklist and a worked example, read [why your new Meta ads aren't spending (and how to fix it)](${NOT_SPENDING_POST}).`,
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
      `**Want this structure built into your account?** [Talk to the Acquirely team](https://booknow.acquirely.in/D2CFRC) and we'll review your current setup against the A3 Flywheel.`,
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
    authorBio: MAUSAM_BIO,
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
      { type: "toc" },

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
