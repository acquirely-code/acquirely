"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Check, CheckCircle2, Quote, ShieldCheck, XCircle } from "lucide-react";

import flywheelImage from "@/app/assests/flywheelmodel.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";

const WistiaPlayer = dynamic(() => import("@/components/WistiaPlayer"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full animate-pulse rounded-lg bg-white/10"
      style={{ paddingTop: "56.25%" }}
    />
  ),
});
import logo from "@/app/assests/logo.png";

const hiddenCostLeft = [
  "Cost per lead (CPL)",
  "Lead volume",
  "Form fills",
  "Daily spend",
];

const hiddenCostRight = [
  "Cost per qualified lead (CPQL)",
  "Lead-to-close rate",
  "Sales-accepted leads",
  "Predictable pipeline",
];

const marketShiftItems = [
  "Minor creative tweaks",
  "Changing audience interests blindly",
  "Increasing budgets without a system",
  "Switching Campaigns on & off",
];

const flywheelCards = [
  {
    badge: "A1",
    badgeClass: "from-[#686CF2] to-[#7A84F6]",
    title: "A1 - Testing to Scale",
    body: "Launch structured tests: multiple creatives, offers, regional angles. Winners flow immediately to a dedicated scale campaign.",
    goalColor: "text-[#2563EB]",
    goal: "Find lead magnets that convert. Isolate. Pour budget.",
  },
  {
    badge: "A2",
    badgeClass: "from-[#FA781C] to-[#FA8D36]",
    title: "A2 - Lock & Scale Aggressively",
    body: "After ~90 days, we lock cost per qualified lead. No more fluctuations. Then drastically scale ad spend across regions.",
    goalColor: "text-[#7C3AED]",
    goal: "Predictable volume. Aggressive growth.",
  },
  {
    badge: "A3",
    badgeClass: "from-[#2ECF95] to-[#14BC84]",
    title: "A3 - Micro Analysis & Redistribution",
    body: "Analyze by day of week, hour, region. Redistribute budget to high-performing segments daily.",
    goalColor: "text-[#10B981]",
    goal: "Squeeze every rupee from your lead budget.",
  },
];

const caseStudies = [
  {
    title: "Kashti Finserv (Loan Lead Gen)",
    afterLabel: "AFTER (90 DAYS)",
    rows: [
      ["Monthly lead volume", "1,200", "2,880 (+140%)", "text-[#10B981]"],
      ["Cost per lead", "Rs.420", "Rs.285 (-32%)", "text-[#10B981]"],
      ["Qualified lead rate", "28%", "41% (stable)", "text-[#10B981]"],
      ["Ad spend", "Rs.8L", "Rs.22L (scaled)", "text-[#2563EB]"],
    ],
    quote:
      "\"Acquirely didn't just run ads. They built a system that lets us predict how many qualified leads we'll get at what cost. That's rare.\"",
    author: "- Founder, Kashti Finserv",
  },
  {
    title: "International Schooling (9 Regions, SGD 3K/day)",
    afterLabel: "AFTER (6 MONTHS)",
    rows: [
      ["Active regions", "4", "9", "text-[#10B981]"],
      ["Cost per lead (avg)", "$18", "$13 (-28%)", "text-[#10B981]"],
      ["Daily ad spend", "SGD 1K", "SGD 3K (scaled)", "text-[#2563EB]"],
      ["Inquiry-to-enrollment", "Baseline", "+22%", "text-[#10B981]"],
    ],
    quote:
      "\"We were spending SGD 90K/month with no predictability. Now we know exactly what each region delivers.\"",
    author: "- CMO, International Schooling",
  },
  {
    title: "Right Source Aviation (Pilot Training - Rs.60-80L Course)",
    afterLabel: "AFTER (4 MONTHS)",
    rows: [
      ["Qualified leads/month", "18", "30 (+67%)", "text-[#10B981]"],
      ["Cost per qualified lead", "Rs.28,000", "Rs.16,500 (-41%)", "text-[#10B981]"],
      ["Enrollment inquiries", "6", "18 (3x)", "text-[#10B981]"],
      ["Ad spend", "Rs.3L", "Rs.12L (scaled)", "text-[#2563EB]"],
    ],
    quote:
      "\"Selling a Rs.70L course via Facebook? Everyone said it's impossible. Acquirely built a system that actually works.\"",
    author: "- Director, Right Source Aviation",
  },
];

const standardFeatures = [
  "Full A3 Flywheel management",
  "Weekly creative testing",
  "Regional optimization (multi-geo)",
  "Lead quality tracking & CRM integration",
  "Daily budget redistribution (A3 micro-analysis)",
  "Transparent reporting & monthly strategy calls",
];

const enterpriseFeatures = [
  "Everything in Standard plus:",
  "Priority regional scaling support",
  "Deep CRM funnel integration",
  "Custom lead intelligence dashboards",
  "Bi-weekly strategic growth calls",
];

const compareRows = [
  ["Facebook Ad Expert", "Rs.50K - Rs.100K"],
  ["Video Editor", "Rs.40K - Rs.60K"],
  ["Graphic Artist", "Rs.40K - Rs.60K"],
  ["Content Creator", "Rs.50K - Rs.80K"],
  ["Strategy Expert", "Rs.60K - Rs.120K"],
  ["Total", "Rs.2.4L - Rs.4.2L / month"],
];

const fitItems = [
  "Pan-India or multi-city operations",
  "Online lead gen (service available nationally)",
  "High-ticket LTV > Rs.50,000",
  "Spending Rs.3L+ monthly on Facebook Ads",
  "Loans, education, real estate, training, B2B, healthcare chains",
  "You have a sales team that needs qualified leads",
];

const notFitItems = [
  "Single-location business (one clinic, one office)",
  "Local service with catchment area < 50km",
  "Low-ticket leads (<Rs.10K LTV)",
  "Spending <Rs.3L and not willing to scale",
  "No CRM or sales follow-up process",
  "You just want \"cheap leads\"",
];

const founders = [
  {
    name: "Mausam Arora",
    role: "Founder, Acquirely",
    tag: "Growth & Strategy Head",
    image: mausamImage,
    body:
      "Mausam spent 12 years inside education - building curricula, publishing 300+ books, and reaching 2,000+ schools. That journey taught him one thing: great products don't grow themselves. He built Acquirely to turn scattered ad spend into acquisition systems that compound.",
    bullets: [
      "Founder-level understanding of what happens before and after the click",
      "Managed Rs.30Cr+ in annual ad spend",
      "Specialises in funnel strategy, GTM thinking, and scaling systems",
    ],
  },
  {
    name: "Kunal Mondal",
    role: "Co-Founder, Acquirely",
    tag: "Performance Marketing Lead",
    image: kunalImage,
    body:
      "Kunal has managed over Rs.30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
    bullets: [
      "Hands-on Meta and Growth strategist",
      "Full-funnel acquisition systems using Google & Meta",
      "ROAS-focused scaling without wasted spend",
    ],
  },
];

const faqItems = [
  {
    question: "How long before I see stable cost per qualified lead?",
    answer:
      "Typically 3-6 weeks to identify winning creatives/offers. A2 lock at ~90 days for full predictability.",
  },
  {
    question: "Do you handle lead nurturing or CRM integration?",
    answer: "",
  },
  {
    question: "What regions can you handle?",
    answer: "",
  },
  {
    question: "What if my product LTV is low (<Rs.50K)?",
    answer: "",
  },
  {
    question: "Do you guarantee a specific cost per lead?",
    answer: "",
  },
  {
    question: "How do we start?",
    answer: "",
  },
  {
    question: "What if we're already working with an agency?",
    answer: "",
  },
];

function CheckBullet({ color = "#10B981" }: { color?: string }) {
  return (
    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center" style={{ color }}>
      <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

function DotBullet({ color = "#EF4444" }: { color?: string }) {
  return (
    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center" style={{ color }}>
      <XCircle className="h-5 w-5" strokeWidth={2.2} />
    </span>
  );
}

function SmallLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded border border-[#CFD5FD] bg-[#EDEFFF] px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
      <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
        {children}
      </span>
    </div>
  );
}

function CaseStudyCard({
  title,
  afterLabel,
  rows,
  quote,
  author,
}: {
  title: string;
  afterLabel: string;
  rows: string[][];
  quote: string;
  author: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <div className="border-b border-[#E2E8F0] bg-[rgba(248,250,252,0.3)] px-6 py-6 sm:px-8">
        <h3 className="text-xl font-bold text-[#1F2937] sm:text-2xl">{title}</h3>
      </div>
      <div className="grid gap-8 px-6 py-6 sm:px-8 md:grid-cols-[minmax(0,559px)_minmax(280px,1fr)] md:items-start">
        <div className="overflow-hidden rounded-2xl border border-[#E2E8F0]">
          <div className="grid grid-cols-[1.5fr_1fr_1.2fr] bg-white text-left">
            <div className="border-b border-[#E2E8F0] px-4 py-4 text-xs font-bold uppercase tracking-[0.6px] text-[#64748B] sm:px-6">
              Metric
            </div>
            <div className="border-b border-[#E2E8F0] px-4 py-4 text-xs font-bold uppercase tracking-[0.6px] text-[#64748B] sm:px-6">
              Before
            </div>
            <div className="border-b border-[#E2E8F0] px-4 py-4 text-xs font-bold uppercase tracking-[0.6px] text-[#2563EB] sm:px-6">
              {afterLabel}
            </div>
          </div>
          {rows.map(([metric, before, after, color], index) => (
            <div
              key={metric}
              className={`grid grid-cols-[1.5fr_1fr_1.2fr] ${
                index !== rows.length - 1 ? "border-b border-[#E2E8F0]" : ""
              }`}
            >
              <div className="px-4 py-4 font-['Open_Sans'] text-sm text-black sm:px-6 sm:text-base">{metric}</div>
              <div className="px-4 py-4 font-['Open_Sans'] text-sm text-black sm:px-6 sm:text-base">{before}</div>
              <div className={`px-4 py-4 text-sm font-bold sm:px-6 sm:text-base ${color}`}>{after}</div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border-l-4 border-[#2563EB] bg-[rgba(37,99,235,0.05)] px-6 py-8">
          <Quote className="mb-5 h-9 w-9 text-[#BEDBFF]" strokeWidth={2.5} />
          <p className="font-['Open_Sans'] text-base italic leading-[1.62] text-[#1F2937] sm:text-lg">{quote}</p>
          <p className="mt-5 text-base font-bold text-[#1F2937] sm:text-lg">{author}</p>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  priceBadge,
  bestFor,
  features,
  cta,
  featured = false,
}: {
  title: string;
  price: string;
  priceBadge: string;
  bestFor: string;
  features: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-sm ${
        featured
          ? "border-2 border-[#007BFF] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)]"
          : "border border-[#E2E8F0]"
      }`}
    >
      {featured ? (
        <div className="absolute right-0 top-0 rounded-bl-xl rounded-tr-[24px] bg-[#007BFF] px-6 py-1.5 text-sm font-bold text-white">
          SCALABLE
        </div>
      ) : null}

      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#0F172B]">{title}</h3>
            <p className="mt-1 text-base font-bold text-[#007BFF]">{price}</p>
          </div>
          <div
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.6px] ${
              featured ? "bg-[#EEF2FF] text-[#6366F1]" : "bg-[#EFF6FF] text-[#007BFF]"
            }`}
          >
            {priceBadge}
          </div>
        </div>

        <p className="mt-8 font-['Open_Sans'] text-base text-[#1E293B]">{bestFor}</p>

        <div className="mt-10">
          <div className="text-sm font-bold uppercase tracking-[1.4px] text-[#90A1B9]">What&apos;s Included:</div>
          <div className="mt-4 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckBullet />
                <span className="font-['Open_Sans'] text-base text-[#1E293B]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`mt-10 inline-flex h-14 w-full items-center justify-center rounded-xl text-base font-bold ${
          featured
            ? "bg-gradient-to-r from-[#007BFF] to-[#6366F1] text-white shadow-[0_10px_15px_-3px_#BEDBFF,0_4px_6px_-4px_#BEDBFF]"
            : "border-2 border-[#007BFF] text-[#007BFF]"
        }`}
      >
        {cta}
      </button>
    </div>
  );
}

function FounderCard({
  name,
  role,
  tag,
  body,
  image,
  bullets,
}: {
  name: string;
  role: string;
  tag: string;
  body: string;
  image: any;
  bullets: string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_32px_rgba(15,23,42,0.1)]">
      <div className="relative h-[300px] sm:h-[380px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-normal">{name}</h3>
          <p className="mt-1 font-['Open_Sans'] text-sm text-white">{role}</p>
        </div>
        <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/20 text-white backdrop-blur-sm">
          in
        </div>
      </div>
      <div className="p-8">
        <div className="text-sm font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">{tag}</div>
        <p className="mt-4 font-['Open_Sans'] text-base leading-[1.62] text-[#525252]">{body}</p>
        <div className="mt-6 space-y-4">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <CheckBullet color="#4F46E5" />
              <span className="font-['Open_Sans'] text-sm text-[#404040]">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white">
      {faqItems.map((item, index) => {
        const open = index === openIndex;

        return (
          <div key={item.question} className={index !== faqItems.length - 1 ? "border-b border-[#E5E7EB]" : ""}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
            >
              <span className="text-base font-normal leading-[22px] text-[#262626]">{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  open ? "bg-[#EFF6FF] text-[#2563EB]" : "bg-[#F5F5F5] text-[#737373]"
                }`}
              >
                {open ? "-" : "+"}
              </span>
            </button>
            {open && item.answer ? (
              <div className="px-6 pb-6 sm:px-8">
                <p className="font-['Open_Sans'] text-sm leading-[23px] text-[#525252]">{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default function DoneForYouLandingPage() {
  return (
    <main className="bg-white text-[#1F2937]">
      <section className="bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)]">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 sm:px-8 lg:px-20 lg:pb-16">
        <div className="text-xl font-extrabold text-white sm:text-2xl">
            <Image src={logo} alt="Acquirely Logo" className="h-10 w-auto" />
          </div>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <h1 >
                <span className="max-w-[623px] text-4xl font-extrabold leading-[1.15] tracking-[-0.5px] text-transparent sm:text-5xl sm:leading-[1.18] lg:text-[48px] lg:leading-[60px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text" >

                Running Facebook Ads for Leads! 
                </span>
                <span className="max-w-[623px] pl-2 text-4xl font-extrabold leading-[1.15] tracking-[-0.5px] text-white sm:text-5xl sm:leading-[1.18] lg:text-[48px] lg:leading-[60px]">
  But Your Sales Team Calls Them Junk
                </span>
              </h1>
            
              <h2 className="mt-8 font-['Open_Sans'] text-2xl font-semibold text-white">We Fix It.</h2>
              <p className="mt-2 max-w-[430px] font-['Open_Sans'] text-lg leading-[29px] text-white">
                Same ad spend. Better lead quality. Higher ROI. Powered by our A3 Flywheel for Lead Gen.
              </p>
              <button
                type="button"
                className="mt-8 inline-flex rounded-xl bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-8 py-4 text-center text-lg font-bold text-white shadow-[0_20px_25px_-5px_rgba(43,127,255,0.25),0_8px_10px_-6px_rgba(43,127,255,0.25)]"
              >
                👉 Get Leads Your Sales Team Will Love
              </button>
              <div className="mt-8 flex flex-col gap-3 font-['Open_Sans'] text-sm text-[#99A1AF] sm:flex-row sm:flex-wrap sm:gap-6">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#2B7FFF]" strokeWidth={2.5} />
                  <span>Rs.30Cr+ Ad Spend Managed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#2B7FFF]" strokeWidth={2.5} />
                  <span>9+ Regions Active</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#2B7FFF]" strokeWidth={2.5} />
                  <span>75-Day Risk Reversal</span>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[611px]">
              <div className="overflow-hidden rounded-lg bg-white/10 shadow-2xl">
                <WistiaPlayer mediaId="nm2ou94x6d" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-[120px] lg:py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6">
            <SmallLabel>THE HIDDEN COST</SmallLabel>
            <div className="text-center">
              <h2 className="text-4xl font-extrabold leading-tight text-transparent sm:text-[40px] sm:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
                Every Unqualified Lead Is a Tax on Your Growth.
              </h2>
              <p className="mx-auto mt-4 max-w-[768px] font-['Open_Sans'] text-lg leading-7 text-[#1E293B] sm:text-[20px]">
                You celebrate 500 leads this month. Your sales team closes 10. The rest? Wasted time, wasted
                follow-up, wasted budget.
              </p>
            </div>

            <div className="grid w-full gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#FFE2E2] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-[#E7000B]" strokeWidth={2.2} />
                  <h3 className="text-lg font-bold text-[#E7000B]">What Most Agencies Optimize For</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {hiddenCostLeft.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-3">
                      <span className="font-['Open_Sans'] text-base text-[#1E293B]">{item}</span>
                      <span className="text-[#FF6467]">-</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCFCE7] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#10B981]" strokeWidth={2.2} />
                  <h3 className="text-lg font-bold text-[#10B981]">What Actually Matters</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {hiddenCostRight.map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-xl bg-[rgba(240,253,244,0.5)] px-3 py-3">
                      <span className="font-['Open_Sans'] text-base text-[#1E293B]">{item}</span>
                      <span className="text-[#10B981]">o</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-[900px] text-center">
              <p className="font-['Open_Sans'] text-lg leading-7 text-[#1E293B]">
                When you optimize for the wrong metric, scaling just multiplies waste.
              </p>
              <p className="mt-4 text-xl font-bold leading-7 text-[#1E293B]">
                You stay stuck at Rs.3L-Rs.10L monthly ad spend - because going bigger means more junk leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-[272px] lg:py-16">
          <div className="mx-auto max-w-[896px] px-6 text-center">
            <SmallLabel>MARKET SHIFT</SmallLabel>
            <h2 className="mt-12 text-4xl font-extrabold leading-tight text-transparent sm:text-[40px] sm:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
              Meta&apos;s Algorithm Made Lead Gen Harder.
              <br />
             <span className="text-black"> We Made It Smarter.</span>
            </h2>
            <p className="mx-auto mt-10 max-w-[892px] font-['Open_Sans'] text-lg leading-[29px] text-[rgba(31,41,55,0.8)]">
              With updates like Andromeda, Meta&apos;s AI now prioritizes creative signals over interest targeting.
              Lead forms still work - but scaling without structure now kills lead quality.
            </p>

            <div className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 text-left">
              <h3 className="text-lg font-semibold text-[#1F2937]">Most brands kept doing the same:</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {marketShiftItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <DotBullet />
                    <span className="font-['Open_Sans'] text-lg text-[rgba(31,41,55,0.8)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[#1F2937] bg-[#161B28] px-8 py-8">
              <h3 className="text-xl font-semibold text-white">The game changed. We leaned in.</h3>
              <p className="mt-4 font-['Open_Sans'] text-base leading-[26px] text-[#94A3B8]">
                After analyzing Rs.30Cr+ in lead gen ad spend (across loans, education, aviation, real estate), we
                built the <span className="text-[#5332E2]
                ">A3 Flywheel</span> - a lead intelligence engine for the new Meta era.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <SmallLabel>THE A3 FRAMEWORK</SmallLabel>
            <h2 className="mx-auto mt-10 max-w-[792px] text-4xl font-extrabold leading-tight text-transparent sm:text-[40px] sm:leading-[49px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text">
              The System That Scales Lead Volume <span className="text-black"> Without Crashing Quality</span>.
            </h2>

            <div className="mx-auto mt-10 max-w-[834px]">
              <Image src={flywheelImage} alt="A3 flywheel model" className="h-auto w-full object-contain" />
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {flywheelCards.map((card) => (
                <div
                  key={card.badge}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-8 text-left shadow-[0_4px_4px_rgba(0,0,0,0.25),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.badgeClass}`}>
                    <span className="text-[26px] font-extrabold text-white">{card.badge}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-7 text-[#1F2937]">{card.title}</h3>
                  <p className="mt-4 font-['Open_Sans'] text-base leading-6 text-[#64748B]">{card.body}</p>
                  <div className="mt-6 border-t border-[#E2E8F0] pt-4">
                    <div className={`text-sm font-bold uppercase tracking-[1.4px] ${card.goalColor}`}>Goal</div>
                    <p className="mt-2 font-['Open_Sans'] text-base leading-6 text-[#1F2937]">{card.goal}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-[672px] rounded-xl px-6 py-4">
              <p className="font-['Open_Sans'] text-lg italic leading-7 text-[#1E293B]">
                This runs every week. Not occasionally. Religiously. A1 feeds A2. A2 enables A3.
                <br className="hidden sm:block" />
                Insights from A3 make A1 smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="flex justify-center">
              <SmallLabel>CLIENT RESULTS</SmallLabel>
            </div>
            <h2 className="mt-10 text-center text-4xl font-extrabold leading-tight text-[#1F2937] sm:text-[40px] sm:leading-[40px]">
              <span>From </span>
              <span className="bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_45%)] bg-clip-text text-transparent">
                &quot;Junk Leads&quot;
              </span>
              <span> to </span>
              <span className="bg-[linear-gradient(90deg,#C084FC_0%,#F97316_100%)] bg-clip-text text-transparent">
                Predictable Pipelines.
              </span>
            </h2>
            <div className="mt-10 space-y-8">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.title} {...study} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-[120px] lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="flex justify-center">
              <SmallLabel>pricing</SmallLabel>
            </div>
            <h2 className="mt-10 text-center text-4xl font-extrabold leading-tight text-transparent sm:text-[40px] sm:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
              Simple, Performance-Aligned Pricing. No Surprises.
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <PricingCard
                title="Standard"
                price="Rs.75,000 + GST"
                priceBadge="Fixed Fee"
                bestFor="Best For: Ad spend Rs.3L - Rs.10L/month"
                features={standardFeatures}
                cta="Get Started"
              />
              <PricingCard
                title="Enterprise"
                price="10% of ad spend + GST"
                priceBadge="Performance"
                bestFor="Best For: Ad spend above Rs.10L/month"
                features={enterpriseFeatures}
                cta="Schedule a Scale Audit"
                featured
              />
            </div>

            <div className="mt-10 border-t border-[#E2E8F0] pt-10">
              <h3 className="text-center text-2xl font-bold text-[#1E293B]">Compare to In-House:</h3>
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
                <div className="grid grid-cols-[1.3fr_1fr] bg-[#F8FAFC]">
                  <div className="px-6 py-4 text-xs font-bold uppercase tracking-[0.6px] text-black">Role</div>
                  <div className="px-6 py-4 text-xs font-bold uppercase tracking-[0.6px] text-black">Monthly Cost (Min)</div>
                </div>
                {compareRows.map(([role, value], index) => (
                  <div
                    key={role}
                    className={`grid grid-cols-[1.3fr_1fr] ${
                      index !== compareRows.length - 1 ? "border-t border-[#E2E8F0]" : "bg-[#F8FAFC]"
                    }`}
                  >
                    <div className={`px-6 py-4 font-['Open_Sans'] text-base ${index === compareRows.length - 1 ? "font-bold text-[#007BFF]" : "text-black"}`}>
                      {role}
                    </div>
                    <div className={`px-6 py-4 font-['Open_Sans'] text-base ${index === compareRows.length - 1 ? "font-bold text-[#007BFF]" : "text-black"}`}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center font-['Open_Sans'] text-base italic text-[#1E293B]">
                Plus: No proven system, no testing framework, no A3 Flywheel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-[144px] lg:py-16">
          <div className="rounded-[24px] bg-[#0F172B] px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
            <div className="max-w-[768px]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007BFF] text-white">
                  <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-[36px] sm:leading-[40px]">
                  If We Don&apos;t Improve Your Lead Economics... We Work Free.
                </h2>
              </div>

              <p className="mt-8 font-['Open_Sans'] text-lg leading-7 text-[#CAD5E2]">
                We don&apos;t believe in unrealistic guarantees-only accountability.
              </p>

              <div className="mt-8">
                <div className="text-xl font-bold text-[#007BFF]">OUR COMMITMENTS</div>
                <p className="mt-4 font-['Open_Sans'] text-base text-[#CAD5E2]">
                  After a 75-90 day stabilisation period, if there&apos;s no clear improvement in:
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckBullet color="#007BFF" />
                    <span className="font-['Open_Sans'] text-base text-white">Cost per qualified lead</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckBullet color="#007BFF" />
                    <span className="font-['Open_Sans'] text-base text-white">Lead volume at consistent CPQL</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-[rgba(0,255,170,0.5)] bg-[rgba(16,185,129,0.05)] px-6 py-5 font-['Open_Sans'] text-sm leading-5 text-white">
                  Work the next month at zero management fee to fix performance
                </div>
                <div className="rounded-xl border border-[rgba(0,255,170,0.5)] bg-[rgba(16,185,129,0.05)] px-6 py-5 font-['Open_Sans'] text-sm leading-5 text-white">
                  End the engagement with a clean, no-lock-in exit and full learning handover
                </div>
              </div>

              <p className="mt-8 text-lg font-bold text-[#007BFF]">
                If we&apos;re not creating value, we don&apos;t earn the retainer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-[167px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>NOT FOR EVERYONE</SmallLabel>
          </div>
          <h2 className="mx-auto mt-10 max-w-[1106px] text-center text-4xl font-extrabold leading-tight text-transparent sm:text-[40px] sm:leading-[49px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text">
            This Is for Multi-Location &amp; Online Lead Gen Brands.
            <br />
            <span className="text-black">

            Not for Local Businesses.
            </span>
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(16,185,129,0.2)] bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#10B981] px-9 py-6 text-base font-semibold text-white">THIS IS FOR YOU</div>
              <div className="space-y-6 px-8 py-6">
                {fitItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3">
                      <CheckBullet />
                      <span className="font-['Open_Sans'] text-base text-[#1F2937]">{item}</span>
                    </div>
                    {index !== fitItems.length - 1 ? <div className="mt-5 border-t border-[#E2E8F0]" /> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#EF4444] px-9 py-6 text-base font-semibold text-white">NOT FOR YOU</div>
              <div className="space-y-6 px-8 py-6">
                {notFitItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3">
                      <DotBullet />
                      <span className="font-['Open_Sans'] text-base text-[#64748B]">{item}</span>
                    </div>
                    {index !== notFitItems.length - 1 ? <div className="mt-5 border-t border-[#E2E8F0]" /> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-[132px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>MEET THE FOUNDERS</SmallLabel>
          </div>
          <h2 className="mt-10 text-center text-4xl font-bold text-[#171717] sm:text-[40px] sm:leading-[60px]">
            The Minds Behind Acquirely
          </h2>
          <p className="mt-3 text-center text-lg text-[#737373]">Built by Operators - Not Just Agency Owners</p>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20 lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>GOT QUESTIONS?</SmallLabel>
          </div>
          <h2 className="mt-10 text-center text-4xl font-bold text-[#171717] sm:text-[40px] sm:leading-[48px]">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-10 max-w-[768px]">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A]">
        <div className="mx-auto max-w-[1940px] px-5 py-16 sm:px-8 lg:px-[170px] lg:py-20">
          <div className=" px-5 py-10 sm:px-8 sm:py-12">
            <div className="mx-auto max-w-[1225px] px-5 py-10 text-center sm:px-8">
            <h2 className="mx-auto max-w-[1225px] text-[34px] font-bold leading-tight text-white sm:text-[48px] sm:leading-[59px]">
              <span>Ready to Turn </span>
              <span className="bg-[linear-gradient(90deg,#A78BFA_0%,#F97316_100%)] bg-clip-text text-transparent">
                &quot;Junk Leads&quot;
              </span>
              <span> Into a Predictable Pipeline?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[610px] font-['Open_Sans'] text-base leading-7 text-[#DBEAFE] sm:text-[20px] sm:leading-9">
              If you&apos;re a pan-India, multi-location, or online lead gen brand spending ₹3L+ monthly
              on Facebook Ads...
              <br className="hidden sm:block" />
              Stop optimizing for volume. Start optimizing for qualified leads.
            </p>
            <button
              type="button"
              className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-xl bg-white px-6 py-4 text-center text-base font-bold text-[#0F172A] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:px-10 sm:text-[20px]"
            >
              👉 Book Your Lead Gen Growth Audit
            </button>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-[#BEDBFF] sm:flex-row sm:gap-8">
              <span>No lock-in</span>
              <span>75-day risk reversal</span>
              <span>Full transparency</span>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
