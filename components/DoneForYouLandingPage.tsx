"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Check, CheckCircle2, Quote,  XCircle } from "lucide-react";
import flywheelImage from "@/app/assests/flywheelmodel.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";
import { Target, BarChart3, ClipboardEdit, IndianRupee } from "lucide-react";
import { ShieldCheck, TrendingUp, UserCheck, Zap } from "lucide-react";
import { Pointer } from 'lucide-react';

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
  { 
    label: "Cost per lead (CPL)", 
    icon: <Target className="h-4 w-4 text-[#FF6467]" /> 
  },
  { 
    label: "Lead volume", 
    icon: <BarChart3 className="h-4 w-4 text-[#FF6467]" /> 
  },
  { 
    label: "Form fills", 
    icon: <ClipboardEdit className="h-4 w-4 text-[#FF6467]" /> 
  },
  { 
    label: "Daily spend", 
    icon: <IndianRupee className="h-4 w-4 text-[#FF6467]" /> 
  },
];
const inHouseRoles = [
  { role: "A Standard Meta Ads Specialist ", cost: "₹80K" },
  { role: "A Conventional Creative Strategist", cost: "₹60K" },
  { role: "A Junior Video Editor ", cost: "₹40K" },
  { role: "A Basic Graphic Designer", cost: "₹40K" },
];

const additionalFeatures = [
  "A proven scaling\nframework",
  "A structured creative\ntesting system",
  "Performance optimisation\nworkflows",
];

const hiddenCostRight = [
  { 
    label: "Cost per qualified lead (CPQL)", 
    icon: <ShieldCheck className="h-4 w-4 text-[#10B981]" /> 
  },
  { 
    label: "Lead-to-close rate", 
    icon: <TrendingUp className="h-4 w-4 text-[#10B981]" /> 
  },
  { 
    label: "Sales-accepted leads", 
    icon: <UserCheck className="h-4 w-4 text-[#10B981]" /> 
  },
  { 
    label: "Predictable pipeline", 
    icon: <Zap className="h-4 w-4 text-[#10B981]" /> 
  },
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
    title: " A1 — Testing → Scale",
    body: "Launch structured tests: multiple creatives, offers, regional angles. Winners flow immediately to a dedicated scale campaign.",
    goalColor: "text-[#2563EB]",
    goal: "Find lead magnets that convert. Isolate. Pour budget.",
  },
  {
    badge: "A2",
    badgeClass: "from-[#FA781C] to-[#FA8D36]",
    title: "A2 — Lock & Scale Aggressively",
    body: "After ~90 days, we lock cost per qualified lead. No more fluctuations. Then drastically scale ad spend across regions.",
    goalColor: "text-[#7C3AED]",
    goal: "Predictable volume. Aggressive growth.",
  },
  {
    badge: "A3",
    badgeClass: "from-[#2ECF95] to-[#14BC84]",
    title: "A3 — Micro Analysis & Redistribution",
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
    role: "Founder, Acquirely",
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
    question: "How quickly can results be seen?",
    answer:
      "You'll see early signals — CTR, CPM, add-to-cart rates — within the first 2 weeks. Meaningful ROAS data takes 4–6 weeks as the algorithm learns and we iterate on creatives. Anyone promising results in week one is lying.",
  },
  {
    question: "How soon do campaigns launch?",
    answer:
      "7 days from onboarding. We use that time to audit your store, set up tracking, build the first creative set, and structure campaigns properly. Fast launches without this groundwork just burn budget.",
  },
  {
    question: "What if ROAS targets aren't met?",
    answer:
      "Missing ROAS is a signal, not a dead end. We run a full diagnostic — creative fatigue, audience overlap, funnel drop-offs, offer-market fit — and fix the actual problem. You get clear reasoning and faster iteration, not vague 'we're optimising' updates.",
  },
  {
    question: "What kind of ecommerce brands do you work with?",
    answer:
      "DTC brands with a proven product and a functional Shopify store. Ideally you've got some organic traction or prior ad spend — it gives us data to work with. We're not the right fit for brands still validating their offer.",
  },
  {
    question: "Are creatives included?",
    answer:
      "Yes — static creatives with multiple hook and angle variations are included. For video, we handle the editing and testing framework but you'll need to provide the raw footage. Influencer content is a separate engagement. Either way, every creative decision is driven by data, not gut feel.",
  },
  {
    question: "Do you offer SEO or organic social media?",
    answer:
      "No. We're a paid media agency — that's intentional. Doing one thing exceptionally beats doing five things averagely. If you need SEO or organic, we'll point you to people who actually specialise in it.",
  },
  {
    question: "Do you run international campaigns?",
    answer:
      "Yes. We run campaigns across the US, UK, UAE, Australia, and beyond. Platform mechanics are the same globally — creative angle, offer positioning, and audience behaviour is what we adapt per market.",
  },
  {
    question: "What does working with you actually look like?",
    answer:
      "Weekly performance reports, bi-weekly strategy calls, and a shared dashboard so you're never in the dark. You'll always know what's running, why, and what's next — no account manager runaround.",
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
      <div className="border-b border-[#E2E8F0] bg-[rgba(248,250,252,0.3)] px-4 py-5 sm:px-8 sm:py-6">
        <h3 className="text-lg font-bold text-[#1F2937] sm:text-2xl">{title}</h3>
      </div>
      <div className="grid gap-6 px-4 py-5 sm:gap-8 sm:px-8 sm:py-6 md:grid-cols-[minmax(0,559px)_minmax(280px,1fr)] md:items-start">
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

        <div className="rounded-2xl border-l-4 border-[#2563EB] bg-[rgba(37,99,235,0.05)] px-5 py-6 sm:px-6 sm:py-8">
          <Quote className="mb-5 h-9 w-9 text-[#BEDBFF]" strokeWidth={2.5} />
          <p className="font-['Open_Sans'] text-sm italic leading-6 text-[#1F2937] sm:text-lg sm:leading-[1.62]">{quote}</p>
          <p className="mt-4 text-sm font-bold text-[#1F2937] sm:mt-5 sm:text-lg">{author}</p>
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
      className={`relative flex h-full flex-col justify-between rounded-3xl bg-white p-5 shadow-sm sm:p-8 ${
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
            <h3 className="text-xl font-bold text-[#0F172B] sm:text-2xl">{title}</h3>
            <p className="mt-1 text-sm font-bold text-[#007BFF] sm:text-base">{price}</p>
          </div>
          <div
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.6px] ${
              featured ? "bg-[#EEF2FF] text-[#6366F1]" : "bg-[#EFF6FF] text-[#007BFF]"
            }`}
          >
            {priceBadge}
          </div>
        </div>

        <p className="mt-6 font-['Open_Sans'] text-sm text-[#1E293B] sm:mt-8 sm:text-base">{bestFor}</p>

        <div className="mt-10">
          <div className="text-sm font-bold uppercase tracking-[1.4px] text-[#90A1B9]">What&apos;s Included:</div>
          <div className="mt-4 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckBullet />
                <span className="font-['Open_Sans'] text-sm text-[#1E293B] sm:text-base">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-xl text-sm font-bold sm:mt-10 sm:h-14 sm:text-base ${
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
      <div className="p-5 sm:p-8">
        <div className="text-sm font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">{tag}</div>
        <p className="mt-4 font-['Open_Sans'] text-sm leading-6 text-[#525252] sm:text-base sm:leading-[1.62]">{body}</p>
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
              className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:gap-6 sm:px-8 sm:py-6"
            >
              <span className="text-sm font-normal leading-5 text-[#262626] sm:text-base sm:leading-[22px]">{item.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  open ? "bg-[#EFF6FF] text-[#2563EB]" : "bg-[#F5F5F5] text-[#737373]"
                }`}
              >
                {open ? "-" : "+"}
              </span>
            </button>
            {open && item.answer ? (
              <div className="px-4 pb-5 sm:px-8 sm:pb-6">
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
  <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-7 sm:px-8 sm:pb-12 lg:px-20 lg:pb-16">
    <Image src={logo} alt="Acquirely Logo" className="h-8 w-auto" />

    {/* The Container: Define areas for mobile and reset for desktop */}
    <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
      
      {/* 1. MAIN HEADING: Order 1 on Mobile */}
      <div className="order-1 lg:col-start-1">
        <h1>
          <span className="max-w-[623px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.5px] text-transparent sm:text-[40px] sm:leading-[1.15] lg:text-[48px] lg:leading-[60px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
            Running Facebook Ads for Leads! 
          </span>
          <span className="max-w-[623px] pl-1.5 text-[30px] font-extrabold leading-[1.12] tracking-[-0.5px] text-white sm:pl-2 sm:text-[40px] sm:leading-[1.15] lg:text-[48px] lg:leading-[60px]">
            But Your Sales Team Calls Them Junk
          </span>
        </h1>
      </div>

      {/* 2. THE VIDEO: Order 2 on Mobile, but Column 2 on Desktop */}
      <div className="order-2 mt-8 lg:mt-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
        <div className="mx-auto w-full max-w-[611px] overflow-hidden rounded-lg bg-white/10 shadow-2xl">
          <WistiaPlayer mediaId="nm2ou94x6d" />
        </div>
      </div>

      {/* 3. SUBTEXT & CTA: Order 3 on Mobile, but back to Column 1 on Desktop */}
      <div className="order-3 lg:col-start-1 lg:row-start-2">
        <h2 className="mt-6 font-['Open_Sans'] text-xl font-semibold text-white sm:mt-0 sm:text-2xl">We Fix It.</h2>
        <p className="mt-2 max-w-[430px] font-['Open_Sans'] text-[15px] leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-[29px]">
          Same ad spend. Better lead quality. Higher ROI. Powered by our A3 Flywheel for Lead Gen.
        </p>
        
        <Link href="https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0">
          <button
            type="button"
            className="mt-7 inline-flex rounded-xl bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_20px_25px_-5px_rgba(43,127,255,0.25),0_8px_10px_-6px_rgba(43,127,255,0.25)] sm:mt-8 sm:px-8 sm:py-4 sm:text-base lg:text-lg"
          >
        <span className="rotate-90 "><Pointer/></span><span className="pl-2">Get Leads Your Sales Team Will Love</span>
          </button>
        </Link>
        
        <div className="mt-7 flex flex-col gap-2.5 font-['Open_Sans'] text-xs text-[#99A1AF] sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-6 sm:text-sm">
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
      
    </div>
  </div>
</section>
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px]  py-10 sm:px-8 sm:py-12 lg:px-[120px] lg:py-16">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 sm:px-6 sm:gap-10">
            <SmallLabel>THE HIDDEN COST</SmallLabel>
            <div className="text-center">
              <h2 className="text-[28px] font-extrabold leading-[1.15] text-transparent sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
                Every Unqualified Lead Is a Tax on Your Growth.
              </h2>
              <p className="mx-auto mt-4 max-w-[768px] font-['Open_Sans'] text-[15px] leading-6 text-[#1E293B] sm:text-[18px] sm:leading-7 lg:text-[20px]">
                You celebrate 500 leads this month. Your sales team closes 10. The rest? Wasted time, wasted
                follow-up, wasted budget.
              </p>
            </div>

            <div className="grid w-full gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#FFE2E2] bg-white p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-[#E7000B]" strokeWidth={2.2} />
                  <h3 className="text-base font-bold text-[#E7000B] sm:text-lg">What Most Agencies Optimize For</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {hiddenCostLeft.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-3">
                      <span className="font-['Open_Sans'] text-sm text-[#1E293B] sm:text-base">{item.label}</span>
                      <span className="text-[#FF6467]">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#DCFCE7] bg-white p-5 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#10B981]" strokeWidth={2.2} />
                  <h3 className="text-base font-bold text-[#10B981] sm:text-lg">What Actually Matters</h3>
                </div>
                <div className="mt-6 space-y-4">
                  {hiddenCostRight.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-xl bg-[rgba(240,253,244,0.5)] px-3 py-3">
                      <span className="font-['Open_Sans'] text-sm text-[#1E293B] sm:text-base">{item.label}</span>
                      <span className="text-[#10B981]">{item.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-[900px] text-center">
              <p className="font-['Open_Sans'] text-[15px] leading-6 text-[#1E293B] sm:text-base sm:leading-7 lg:text-lg">
                When you optimize for the wrong metric, scaling just multiplies waste.
              </p>
              <p className="mt-4 text-lg font-bold leading-7 text-[#1E293B] sm:text-xl">
                You stay stuck at Rs.3L-Rs.10L monthly ad spend - because going bigger means more junk leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[272px] lg:py-16">
          <div className="mx-auto max-w-[896px] px-4 text-center sm:px-6">
            <SmallLabel>MARKET SHIFT</SmallLabel>
            <h2 className="mt-10 text-[28px] font-extrabold leading-[1.15] text-transparent sm:mt-12 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[40px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text">
              Meta&apos;s Algorithm Made Lead Gen Harder.
              <br />
             <span className="text-black"> We Made It Smarter.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-[892px] font-['Open_Sans'] text-[15px] leading-6 text-[rgba(31,41,55,0.8)] sm:mt-10 sm:text-base sm:leading-7 lg:text-lg lg:leading-[29px]">
              With updates like Andromeda, Meta&apos;s AI now prioritizes creative signals over interest targeting.
              Lead forms still work - but scaling without structure now kills lead quality.
            </p>

            <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-left sm:mt-10 sm:p-8">
              <h3 className="text-base font-semibold text-[#1F2937] sm:text-lg">Most brands kept doing the same:</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {marketShiftItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <DotBullet />
                    <span className="font-['Open_Sans'] text-[15px] text-[rgba(31,41,55,0.8)] sm:text-base lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-[#1F2937] bg-[#161B28] px-5 py-6 sm:px-8 sm:py-8">
              <h3 className="text-lg font-semibold text-white sm:text-xl">The game changed. We leaned in.</h3>
              <p className="mt-4 font-['Open_Sans'] text-sm leading-6 text-[#94A3B8] sm:text-base sm:leading-[26px]">
                After analyzing Rs.30Cr+ in lead gen ad spend (across loans, education, aviation, real estate), we
                built the <span className="text-[#5332E2]
                ">A3 Flywheel</span> - a lead intelligence engine for the new Meta era.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1440px]  py-10 sm:px-4 sm:py-12 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6">
            <SmallLabel>THE A3 FRAMEWORK</SmallLabel>
            <h2 className="mx-auto mt-8 max-w-[792px] text-[28px] font-extrabold leading-[1.15] text-transparent sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[49px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text">
              The System That Scales Lead Volume <span className="text-black"> Without Crashing Quality</span>.
            </h2>

            <div className="mx-auto mt-10 max-w-[834px]">
              <Image src={flywheelImage} alt="A3 flywheel model" className="h-auto w-full object-contain" />
            </div>

            <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-3">
              {flywheelCards.map((card) => (
                <div
                  key={card.badge}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-5 text-left shadow-[0_4px_4px_rgba(0,0,0,0.25),0_2px_4px_-2px_rgba(0,0,0,0.1)] sm:p-8"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.badgeClass}`}>
                    <span className="text-[26px] font-extrabold text-white">{card.badge}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-7 text-[#1F2937] sm:text-xl">{card.title}</h3>
                  <p className="mt-4 font-['Open_Sans'] text-sm leading-6 text-[#64748B] sm:text-base">{card.body}</p>
                  <div className="mt-6 border-t border-[#E2E8F0] pt-4">
                    <div className={`text-sm font-bold uppercase tracking-[1.4px] ${card.goalColor}`}>Goal</div>
                    <p className="mt-2 font-['Open_Sans'] text-sm leading-6 text-[#1F2937] sm:text-base">{card.goal}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-[672px] rounded-xl px-6 py-4">
              <p className="font-['Open_Sans'] text-sm italic leading-6 text-[#1E293B] sm:text-base sm:leading-7 lg:text-lg">
                This runs every week. Not occasionally. Religiously. A1 feeds A2. A2 enables A3.
                <br className="hidden sm:block" />
                Insights from A3 make A1 smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px]  py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
            <div className="flex justify-center">
              <SmallLabel>CLIENT RESULTS</SmallLabel>
            </div>
            <h2 className="mt-8 text-center text-[28px] font-extrabold leading-[1.15] text-[#1F2937] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[40px]">
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

     <section className="bg-white px-4 py-8 font-sans md:py-16 lg:py-4">
      <div className="mx-auto max-w-[866px]">
        
        {/* Header Section */}
        <div className="mb-8 text-center md:mb-12">
          <div className="inline-flex h-[30px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3 md:h-[34px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] md:text-[12px]">
              Pricing
            </span>
          </div>

          <h2 className="mt-4 font-Montserrat text-[28px] font-bold leading-tight tracking-tight md:mt-6 md:text-[36px] lg:text-[40px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_100%)] bg-clip-text text-transparent">
              Transparent, Performance-
            </span>
            <br className="block sm:hidden" />
            <span className="text-black">Aligned Pricing</span>
          </h2>

          <p className="mx-auto mt-3 max-w-[663px] font-opensans text-[15px] leading-[24px] text-[#7B8BA0] md:mt-4 md:text-[18px] md:leading-[28px]">
            It includes Structured Meta Campaign Management, Generating regular creative variations, editing UGC & influencer videos and regular monitoring & optimization.
          </p>
        </div>

        {/* Top Price Cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-2 md:mb-12 md:gap-6">
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#F4F7FF] px-4 py-8 text-center md:px-6 md:py-10">
            <p className="mb-1 text-[14px] text-[#7B8BA0] md:mb-2 md:text-[18px]">For ₹3L–₹10L ad spend</p>
            <p className="mb-1 text-[32px] font-bold leading-tight text-black md:mb-2 md:text-[45px] md:leading-[45px]">₹50,000</p>
            <p className="text-[16px] text-[#7B8BA0] md:text-[24px]">+ GST</p>
          </div>
          
          <div className="flex flex-col items-center justify-center rounded-[8px] bg-[#F0FFF5] px-4 py-8 text-center md:px-6 md:py-10">
            <p className="mb-1 text-[14px] text-[#7B8BA0] md:mb-2 md:text-[18px]">For ₹5L+ ad spend</p>
            <p className="mb-1 text-[32px] font-bold leading-tight text-black md:mb-2 md:text-[45px] md:leading-[45px]">10%</p>
            <p className="text-[16px] text-[#7B8BA0] md:text-[24px]">of total ad spend</p>
          </div>
        </div>

        {/* Compare to Hiring In-House */}
        <div className="rounded-[23px] border border-[#E5E5E5] bg-white p-5 shadow-[0_0_4px_rgba(0,0,0,0.05)] md:p-8 lg:p-12">
          <h3 className="mb-6 text-[16px] font-semibold text-black md:mb-8 md:text-[28px] lg:text-[32px]">
            Compare That to Hiring In-House
          </h3>
          
          <div className="space-y-2 md:space-y-3">
            {/* Table Header */}
            <div className="flex justify-between px-2 pb-2 text-[11px] font-medium uppercase tracking-[1.5px] text-[#ACACC3] md:px-4 md:text-[14px] md:tracking-[2px]">
              <span>Role</span>
              <span>Monthly Cost</span>
            </div>
            
            {/* Table Rows */}
            {inHouseRoles.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between rounded-[6px] bg-[#FAFAFA] px-3 py-3 md:px-5 md:py-4"
              >
                <span className="text-[14px] text-black md:text-[18px] lg:text-[20px]">{item.role}</span>
                <span className="font-Montserrat text-[14px] font-medium text-black md:text-[18px] lg:text-[20px]">{item.cost}</span>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="mt-6 flex flex-row items-center justify-between rounded-[6px] bg-[#FFF4F4] px-4 py-5 md:mt-8 md:px-6 md:py-8">
            <span className="text-[18px] font-bold text-[#B91C1C] md:text-[24px] lg:text-[28px]">
              Total In-House Cost
            </span>
            <div className="text-right">
              <span className="mb-1 block text-[20px] font-bold leading-[1] text-[#B91C1C] md:text-[36px] lg:text-[40px]">
                ₹2.2L+
              </span>
              <span className="block text-[14px] text-[#B91C1C] md:text-[16px] lg:text-[18px]">
                per month
              </span>
            </div>
          </div>
        </div>

        {/* What It Doesn't Include */}
        <div className="mt-12 text-center md:mt-16">
          <h4 className="mb-8 text-[18px] font-bold text-black md:mb-10 md:text-[22px] lg:text-[24px]">
            And that still doesn't include:
          </h4>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3 flex h-[40px] w-[40px] items-center justify-center rounded-[6px] bg-[#FBDEDE] md:mb-5 md:h-[45px] md:w-[46px]">
                  <p className="text-[20px] font-bold text-[#F87171]">X</p>
                 
                </div>
                <p className="whitespace-pre-line text-[15px] leading-[22px] text-black md:text-[18px] md:leading-[28px] lg:text-[20px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Real Risk Box */}
        <div className="mt-12 rounded-r-[8px] border-l-[4px] border-[#2D4CFF] bg-[#F4F7FF] px-5 py-5 md:mt-16 md:px-8 md:py-7">
          <h5 className="mb-1 text-[16px] font-bold text-black md:text-[18px] lg:text-[20px]">
            The real risk?
          </h5>
          <p className="text-[14px] text-black md:text-[15px] lg:text-[16px]">
            Continuing with an agency that spends budget but never learns from the data.
          </p>
        </div>

      </div>
    </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[144px] lg:py-16">
          <div className="rounded-[24px] bg-[#0F172B] px-5 py-7 sm:px-10 sm:py-8 lg:px-16 lg:py-12">
            <div className="max-w-[768px]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#007BFF] text-white">
                  <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h2 className="text-[26px] font-bold leading-[1.15] text-white sm:text-[32px] sm:leading-[1.2] lg:text-[36px] lg:leading-[40px]">
                  If We Don&apos;t Improve Your Lead Economics... We Work Free.
                </h2>
              </div>

              <p className="mt-6 font-['Open_Sans'] text-[15px] leading-6 text-[#CAD5E2] sm:mt-8 sm:text-base sm:leading-7 lg:text-lg">
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
       
                <div className="rounded-xl flex border border-[rgba(0,255,170,0.5)] bg-[rgba(16,185,129,0.05)] px-6 py-5 font-['Open_Sans'] text-sm leading-5 text-white">
                            <CheckCircle2 className="h-10 w-10 flex text-[#10B981]" strokeWidth={2.2} />
                  <div className="flex px-4">Work the next month at zero management fee to fix performance</div>
                </div>
                <div className="rounded-xl flex border border-[rgba(0,255,170,0.5)] bg-[rgba(16,185,129,0.05)] px-6 py-5 font-['Open_Sans'] text-sm leading-5 text-white">
                  <CheckCircle2 className="h-10 w-10 flex text-[#10B981]" strokeWidth={2.2} />
                 <div className="flex px-4">
                   End the engagement with a clean, no-lock-in exit and full learning handover
                 </div>
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
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[167px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>NOT FOR EVERYONE</SmallLabel>
          </div>
          <h2 className="mx-auto mt-8 max-w-[1106px] text-center text-[28px] font-extrabold leading-[1.15] text-transparent sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[49px] bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text">
            This Is for Multi-Location &amp; Online Lead Gen Brands.
            <br />
            <span className="text-black">

            Not for Local Businesses.
            </span>
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(16,185,129,0.2)] bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#10B981] px-6 py-5 text-sm font-semibold text-white sm:px-9 sm:py-6 sm:text-base">THIS IS FOR YOU</div>
              <div className="space-y-5 px-5 py-5 sm:space-y-6 sm:px-8 sm:py-6">
                {fitItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3">
                      <CheckBullet />
                      <span className="font-['Open_Sans'] text-sm text-[#1F2937] sm:text-base">{item}</span>
                    </div>
                    {index !== fitItems.length - 1 ? <div className="mt-5 border-t border-[#E2E8F0]" /> : null}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-white shadow-sm">
              <div className="rounded-t-2xl bg-[#EF4444] px-6 py-5 text-sm font-semibold text-white sm:px-9 sm:py-6 sm:text-base">NOT FOR YOU</div>
              <div className="space-y-5 px-5 py-5 sm:space-y-6 sm:px-8 sm:py-6">
                {notFitItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3">
                      <DotBullet />
                      <span className="font-['Open_Sans'] text-sm text-[#64748B] sm:text-base">{item}</span>
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
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[132px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>MEET THE FOUNDERS</SmallLabel>
          </div>
          <h2 className="mt-8 text-center text-[28px] font-bold text-[#171717] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[60px]">
            The Minds Behind Acquirely
          </h2>
          <p className="mt-3 text-center text-[15px] text-[#737373] sm:text-base lg:text-lg">Built by Operators - Not Just Agency Owners</p>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-20 lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>GOT QUESTIONS?</SmallLabel>
          </div>
          <h2 className="mt-8 text-center text-[28px] font-bold text-[#171717] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[48px]">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-10 max-w-[768px]">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A]">
        <div className="mx-auto max-w-[1640px]  py-4 sm:px-2 sm:py-16 lg:px-[170px] lg:py-4">
          <div className="px-2 py-8 sm:px-2 sm:py-12">
            <div className="mx-auto max-w-[1425px] px-2 py-6 text-center sm:px-8 sm:py-10">
            <h2 className="mx-auto max-w-[1425px] text-[22px] font-bold leading-[1.15] text-white sm:text-[38px] sm:leading-[1.15] lg:text-[48px] lg:leading-[59px]">
              <span>Ready to Turn </span>
              <span className="bg-[linear-gradient(90deg,#A78BFA_0%,#F97316_100%)] bg-clip-text text-transparent">
                &quot;Junk Leads&quot;
              </span>
              <span> Into a Predictable Pipeline?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[1010px] font-['Open_Sans'] text-[12px] leading-6 text-[#DBEAFE] sm:mt-6 sm:text-[18px] sm:leading-8 lg:text-[20px] lg:leading-9">
              If you&apos;re a pan-India, multi-location, or online lead gen brand spending Rs.3L+ monthly
              on Facebook Ads...
              <br className="hidden sm:block" />
              Stop optimizing for volume. Start optimizing for qualified leads.
            </p>
            <Link href="https://forms.acquirely.in/acquirely/form/LeadGenFunnelReviewCall/formperma/DEijNOw1e1C4Wd8r6luSZlNxj1zQVtObr106aUYe4-0">
            
            <button
              type="button"
              className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-4 py-3.5 text-center text-[12px] font-bold text-[#0F172A] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] sm:mt-8 sm:min-h-[56px] sm:px-8 sm:py-4 sm:text-base lg:px-10 lg:text-[20px]"
            >
             <span className="rotate-90 "><Pointer/></span> <span className="pl-2">Book Your Lead Gen Growth Audit</span>
            </button>
              </Link>
            <div className="mt-5 flex flex-col items-center justify-center gap-2 text-xs text-[#BEDBFF] sm:mt-6 sm:flex-row sm:gap-8 sm:text-sm">
              <span>No lock-in</span>
              <span>75-day risk reversal</span>
              <span>Full transparency</span>
            </div>
            <div className="md:mt-4 mt-2 border-t border-white/20 pt-8 flex flex-col gap-6"></div>
              <div className="flex text-center mt-4 items-center justify-center gap-6 order-1 md:order-2 md:text-[16px] text-[12px] text-white/90">
            This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
          
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
