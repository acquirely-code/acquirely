"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"
import WhatWeActuallyDo from "@/components/whtaweactuallydo";
import HowWeHelpYou from "@/components/Howwehelpyou";
import Whatyouactuallyget from "@/components/Whatyouactuualyget";

// Icons
import {
  ArrowRight,
  LayoutDashboard,
  Search,
  Activity,
  Zap,
  TrendingUp,
  MousePointerClick,
  Filter,
  CheckCircle2,
  RefreshCcw,
  FlaskConical,
  Trophy,
  X,
} from "lucide-react";

// Assests (Make sure your paths are correct)
import Star from "@/app/assests/starnew.png";
import Video1 from "@/app/assests/video1.png";
import video2 from "@/app/assests/video2.png";
import video3 from "@/app/assests/video3.png";
import Client1 from "@/app/assests/founder1.png";
import Client2 from "@/app/assests/founder2.png";
import Client3 from "@/app/assests/founder3.png";
import Client4 from "@/app/assests/founder4.png";
import Clinet5 from "@/app/assests/founder5.png";
import mainheroimage from "@/app/assests/mainheroimage.png";
import retroverse from "@/app/assests/retroverse.png";
import modish from "@/app/assests/modish.png";
import Nostrain from "@/app/assests/Nostrain.png";

// --- TYPES & INTERFACES ---

interface Service {
  id: number;
  title: string;
  desc: string;
  badge: string;
  category: string;
  icon: React.ReactNode;
  number: string;
}

interface ResultCard {
  id: number;
  title: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

interface A3Phase {
  id: number;
  phase: string;
  title: string;
  desc: string;
  badge: string;
  icon: React.ReactNode;
}

interface PhaseDetailCard {
  label: string;
  title: string;
  desc: string;
}

interface PhaseDetail {
  title: string;
  sub: string;
  cards: PhaseDetailCard[];
}

interface CaseStudy {
  logo: StaticImageData;
  alt: string;
  roas: string;
}

interface Testimonial {
  image: StaticImageData;
  role: string;
}

// --- DATA SCULPTING ---

const servicesData: Service[] = [
  {
    id: 1,
    title: "Meta Ads Management",
    desc: "We run structured A/B tests across audiences, creatives, and offers — letting data pick your winners, not gut feel.",
    badge: "↗ Avg. ROAS lift: 1.8-2.4x in 60 days",
    category: "Paid ads",
    icon: <LayoutDashboard className="h-6 w-6" />,
    number: "01",
  },
  {
    id: 2,
    title: "Google Ads Management",
    desc: "Search, Shopping, and Performance Max — tuned for purchase intent, not just clicks. Every Dollar tracked to revenue.",
    badge: "↗ Lower CPAs with intent-first targeting",
    category: "Paid ads",
    icon: <Search className="h-6 w-6" />,
    number: "02",
  },
  {
    id: 3,
    title: "Ad Creative Strategy & Testing",
    desc: "15+ creatives tested monthly. UGC, static, motion — we find the one that scales and build more of it.",
    badge: "↗ Proven creative reduces CPM by 30-40%",
    category: "Scale",
    icon: <Zap className="h-6 w-6" />,
    number: "03",
  },
  {
    id: 4,
    title: "Funnel Optimisation",
    desc: "Landing page, checkout, post-purchase — we audit and fix every drop-off point so your ad spend isn't leaking.",
    badge: "↗ Avg. 20-35% CVR improvement",
    category: "Funnel",
    icon: <Filter className="h-6 w-6" />,
    number: "04",
  },
  {
    id: 5,
    title: "Conversion Improvements",
    desc: "CRO, offer framing, social proof placement — the small shifts that turn a 2% converter into a 4% converter.",
    badge: "↗ More revenue, same ad budget",
    category: "Funnel",
    icon: <Activity className="h-6 w-6" />,
    number: "05",
  },
  {
    id: 6,
    title: "Scaling Frameworks",
    desc: "Our A3 model: test winners feed scale campaigns. No random budget hikes — a structured path from 10L to 1Cr Month.",
    badge: "↗ Modish: ROAS 2.31 → 3.53 in 90 days",
    category: "Scale",
    icon: <TrendingUp className="h-6 w-6" />,
    number: "06",
  },
];

const resultsCards: ResultCard[] = [
  {
    id: 1,
    title: "Predictable ROAS",
    desc: "You'll know what you're getting before we scale. No more guessing if this month will be profitable.",
    badge: "Retroverse: 2.43x → 4.68x",
    icon: <TrendingUp className="h-5 w-5 text-[#6366F1]" />,
  },
  {
    id: 2,
    title: "Creatives that scale",
    desc: "A constant pipeline of tested winners — UGC, static, motion — so you never run the same tired ad twice.",
    badge: "15+ tested per month",
    icon: <Zap className="h-5 w-5 text-[#F97316]" />,
  },
  {
    id: 3,
    title: "A funnel that converts",
    desc: "We audit every drop-off point — landing page, checkout, post-purchase — and fix the leaks before scaling spend.",
    badge: "Avg. 20-35% CVR lift",
    icon: <Filter className="h-5 w-5 text-[#10B981]" />,
  },
  {
    id: 4,
    title: "Full transparency",
    desc: "Weekly reports, live dashboards, no black-box reporting. You always know exactly where your money is going.",
    badge: 'Modish: "transparency is unmatched"',
    icon: <Search className="h-5 w-5 text-[#3B82F6]" />,
  },
  {
    id: 5,
    title: "A path to ₹1Cr/Month",
    desc: "Our A3 model gives you a structured, data-backed road from ₹10L to ₹1Cr monthly — not just ad spend, real revenue.",
    badge: "Modish: ROAS 2.31x → 3.53x",
    icon: <TrendingUp className="h-5 w-5 text-[#F43F5E]" />,
  },
  {
    id: 6,
    title: "A system that compounds",
    desc: "Every winner feeds the next test. Every test feeds the next scale. The longer you run it, the better it gets.",
    badge: "NoStrain: 1.36x → 2.65x",
    icon: <RefreshCcw className="h-5 w-5 text-[#14B8A6]" />,
  },
];

const a3Phases: A3Phase[] = [
  {
    id: 1,
    phase: "PHASE 1",
    title: "Test",
    desc: "Run 15+ creative variants across audiences. Let data pick — not opinions.",
    badge: "15+ creatives/month",
    icon: <FlaskConical className="h-5 w-5 text-[#818CF8]" />,
  },
  {
    id: 2,
    phase: "PHASE 2",
    title: "Winners",
    desc: "Proven creatives graduate to dedicated scale campaigns. Zero guesswork.",
    badge: "Top 20% move forward",
    icon: <Trophy className="h-5 w-5 text-[#F97316]" />,
  },
  {
    id: 3,
    phase: "PHASE 3",
    title: "Scale",
    desc: "Budget flows to what's working. Interests stacked, spend compounded.",
    badge: "ROAS 2x-4x in 90 days",
    icon: <TrendingUp className="h-5 w-5 text-[#10B981]" />,
  },
];

const phaseDetails: Record<number, PhaseDetail> = {
  1: {
    title: "Phase 1 — Test campaign structure",
    sub: "Campaign 1 is our structured testing ground. Multiple creative packs, one mission: find your winners.",
    cards: [
      { label: "Campaign structure", title: "Broad audience targeting", desc: "We start wide — no interest stacking. Let Meta find who converts first." },
      { label: "Creative packs", title: "3–4 packs, 3–5 ads each", desc: "Each pack tests a different angle — UGC, static, motion. 15+ ads minimum per month." },
      { label: "Budget logic", title: "$5k–$30k/day test budget", desc: "Enough data to reach statistical significance in 7–10 days per creative." },
      { label: "Decision rule", title: "CPA + ROAS threshold", desc: "Any creative hitting our ROAS floor and CPM target moves to Phase 2." },
    ],
  },
  2: {
    title: "Phase 2 — Winners campaign structure",
    sub: "Proven creatives get their own campaign with controlled budgets. No more competing with fresh tests.",
    cards: [
      { label: "Campaign structure", title: "Isolated winner campaigns", desc: "Each proven creative runs in its own ad set — no cannibalisation from testing." },
      { label: "Audience layer", title: "Interest stacking begins", desc: "Winners get interest-stacked audiences added progressively to expand reach." },
      { label: "Budget logic", title: "Budget follows performance", desc: "We increase spend 20–30% every 3 days if ROAS holds. No random hikes." },
      { label: "Creative refresh", title: "Iteration on winners", desc: "Top performers get 2–3 angle variations tested alongside to extend their life." },
    ],
  },
  3: {
    title: "Phase 3 — Scale campaign structure",
    sub: "Maximum budget on maximum proof. Broad + interest stacked + lookalikes — all feeding from the same winner pool.",
    cards: [
      { label: "Campaign structure", title: "Aggressive scaling mode", desc: "Scale campaigns run CBO with proven creatives only. No experiments here." },
      { label: "Audience layer", title: "Lookalike + broad + interest", desc: "Three audience types running simultaneously — we find the cheapest converts." },
      { label: "Budget logic", title: "$300+/day when ready", desc: "Scale triggers only when ROAS is predictable across 14+ days of data." },
      { label: "Loop back", title: "Phase 1 keeps running", desc: "Testing never stops. New creatives constantly refresh the winner pool below." },
    ],
  },
};

const caseStudiesData: CaseStudy[] = [
  { logo: retroverse, alt: "Retroverse", roas: "ROAS 2.43 to 4.68" },
  { logo: modish, alt: "Modish", roas: "ROAS 2.31 to 3.53" },
  { logo: Nostrain, alt: "No Strain", roas: "ROAS 1.36 to 2.65" },
];

const testimonials: Testimonial[] = [
  { image: Video1, role: "Founder, Retroverse" },
  { image: video2, role: "Marketing Head, Modish" },
  { image: video3, role: "CEO, No Strain" },
];

export default function HomePage() {
  // Use strictly typed states
  const [activeTab, setActiveTab] = useState<string>("All services");
  const [activeServiceCard, setActiveServiceCard] = useState<number>(1);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  const tabs: string[] = ["All services", "Paid ads", "Funnel", "Scale"];

  const filteredServices = servicesData.filter(
    (service) => activeTab === "All services" || service.category === activeTab
  );

  const handlePhaseToggle = (id: number) => {
    setActivePhase(activePhase === id ? null : id);
  };

  const activePhaseData = activePhase ? phaseDetails[activePhase] : null;

  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-16 pt-8 md:pb-[160px] md:pt-[46px]">
        {/* Premium Background Layers */}
        <div className="absolute right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
        <div className="absolute bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
          <Navbar />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:mt-20 lg:gap-12">
            {/* Left Content Column */}
            <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
              <h1 className="font-Montserrat text-[27px] font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                Scale Profitably With A
                <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#F97316] bg-clip-text text-transparent sm:ml-4 sm:inline sm:mt-0">
                  Proven Performance Marketing <span className="text-[#0F172A]">Agency</span>
                </span>
              </h1>

              <p className="mt-5 max-w-[600px] font-opensans text-base leading-relaxed text-[#475569] sm:text-lg md:mt-8 md:text-xl">
               Grow from ₹10L to ₹1Cr+ monthly with data-driven Meta Ads
              </p>

              <div className="mt-8 flex w-full flex-col items-center gap-5 sm:w-auto sm:flex-row md:mt-10 md:gap-4">
                 <Link href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg">
                <button className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-6 py-4 text-sm font-bold text-white shadow-[0_10px_15px_-3px_rgba(99,102,241,0.25)] transition hover:scale-[1.02] sm:w-auto md:px-10 md:py-5 md:text-lg">
                  Book a Growth Call Here!
                  <ArrowRight className="h-5 w-5" />
                </button>
                </Link>

                <div className="flex items-center -space-x-3 sm:ml-2">
                  <Image src={Client1} alt="User 1" className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12" />
                  <Image src={Client2} alt="User 2" className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12" />
                  <Image src={Client3} alt="User 3" className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12" />
                  <Image src={Client4} alt="User 4" className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12" />
                  <Image src={Clinet5} alt="User 5" className="h-10 w-10 rounded-full border-2 border-white object-cover md:h-12 md:w-12" />
                </div>
              </div>
            </div>

            {/* Right Dashboard/Image Column */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative w-full max-w-[500px] lg:max-w-none">
                <Image
                  src={mainheroimage}
                  alt="Performance Dashboard Preview"
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES MARQUEE */}
      <section className="border-y border-[#E2E8F0] bg-white py-4 md:py-7">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 md:px-8 lg:flex-row lg:gap-10 lg:px-20">
          <span className="shrink-0 text-xs font-extrabold uppercase tracking-[1.4px] text-[#64748B] sm:text-sm lg:text-xs">
            Real Case Studies:
          </span>
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap md:gap-16">
              {[...caseStudiesData, ...caseStudiesData, ...caseStudiesData].map((study, i) => (
                <div key={i} className="flex shrink-0 items-center gap-3 sm:gap-4">
                  <div className="relative h-6 w-auto max-w-[90px] sm:h-8 sm:max-w-[110px]">
                    <Image src={study.logo} alt={`${study.alt} logo`} className="h-full w-auto object-contain" />
                  </div>
                  <span className="font-Montserrat text-sm font-bold tracking-tight text-[#0F172A] sm:text-base md:text-lg">
                    {study.roas}
                  </span>
                  <div className="ml-3 flex h-3 w-3 shrink-0 items-center justify-center sm:ml-6 sm:h-4 sm:w-4">
                    <Image src={Star} alt="Star Divider" className="h-full w-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


     < WhatWeActuallyDo />
      < HowWeHelpYou />
      < Whatyouactuallyget />
      <Footer />
    </main>
  );
}