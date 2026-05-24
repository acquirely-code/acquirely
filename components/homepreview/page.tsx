"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"

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
      <section className="relative overflow-hidden bg-white pb-16 pt-8 md:pb-[160px] md:pt-[96px]">
        {/* Premium Background Layers */}
        <div className="absolute right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
        <div className="absolute bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
          <Navbar />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:mt-20 lg:gap-12">
            {/* Left Content Column */}
            <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
              <h1 className="font-Montserrat text-3xl font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
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

      {/* SECTION 1: WHAT WE ACTUALLY DO */}
      <section className="bg-white px-4 py-12 sm:px-5 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 max-w-[600px] md:mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-xs">
              WHAT WE ACTUALLY DO
            </p>
            <h2 className="font-Montserrat mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[56px]">
              Not just ads.
              <br />
              A system that
              <br />
              <span className="text-[#EA580C]">compounds.</span>
            </h2>
            <p className="font-opensans mt-4 text-sm leading-relaxed text-[#475569] sm:text-base md:mt-5 md:text-lg">
              Most agencies run campaigns. We build the full growth engine — from creative testing to funnel to scale.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="mb-8 flex flex-wrap gap-2 md:mb-10 md:gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-opensans rounded-full px-4 py-2 text-xs font-semibold transition-all md:px-5 md:text-sm ${
                  activeTab === tab
                    ? "bg-[#6366F1] text-white shadow-md"
                    : "border border-[#E2E8F0] bg-white text-[#475569] hover:border-[#CBD5E1] hover:bg-slate-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Selectable Services Grid */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filteredServices.map((service) => {
              const isActive = activeServiceCard === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveServiceCard(service.id)}
                  className={`relative cursor-pointer overflow-hidden rounded-[20px] p-5 transition-all duration-300 md:p-8 ${
                    isActive
                      ? "scale-[1.02] bg-[#0B0C1E] text-white shadow-2xl"
                      : "border border-[#F1F5F9] bg-white text-[#0F172A] hover:-translate-y-1 hover:border-[#E2E8F0] hover:shadow-lg"
                  }`}
                >
                  <span
                    className={`absolute right-4 top-4 font-Montserrat text-4xl font-black leading-none tracking-tighter md:text-[64px] ${
                      isActive ? "text-white/[0.04]" : "text-[#0F172A]/[0.03]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <div
                    className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl md:mb-6 md:h-12 md:w-12 ${
                      isActive ? "bg-white/10 text-white" : "bg-[#F8FAFC] text-[#6366F1]"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3 className={`font-Montserrat mb-2 text-lg font-bold md:mb-3 md:text-xl ${isActive ? "text-white" : "text-[#0F172A]"}`}>
                    {service.title}
                  </h3>

                  <p className={`font-opensans mb-6 text-xs leading-relaxed md:mb-8 md:text-sm ${isActive ? "text-white/70" : "text-[#64748B]"}`}>
                    {service.desc}
                  </p>

                  <div
                    className={`mt-auto inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold md:px-4 md:py-2 md:text-xs ${
                      isActive ? "bg-[#ffffff15] text-white" : "bg-[#F1F5F9] text-[#6366F1]"
                    }`}
                  >
                    {service.badge}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: HOW WE HELP YOU GROW */}
      <section className="bg-white px-4 py-12 sm:px-5 md:py-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-xs">
              HOW WE HELP YOU GROW
            </p>
            <h2 className="font-Montserrat mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[56px]">
              The A3 system that<br className="hidden md:block" /> <span className="text-[#EA580C]">compounds.</span>
            </h2>
            <p className="font-opensans mt-4 text-sm text-[#475569] md:text-base lg:text-lg">
              Test everything → keep what wins → scale relentlessly. Three phases, one flywheel.
            </p>
          </div>

          {/* Phase Cards */}
          <div className="mt-10 flex flex-col items-center gap-5 md:mt-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
            {a3Phases.map((phase, index) => {
              const isActive = activePhase === phase.id;
              return (
                <React.Fragment key={phase.id}>
                  <div
                    onClick={() => handlePhaseToggle(phase.id)}
                    className={`relative w-full cursor-pointer rounded-[24px] border p-5 transition-all duration-300 sm:p-6 md:p-8 lg:w-1/3 ${
                      isActive
                        ? "scale-[1.02] border-[#E2E8F0] bg-white shadow-xl ring-2 ring-[#6366F1]/20"
                        : "border-[#F1F5F9] bg-[#FAFAFA] hover:border-[#E2E8F0] hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <span className="absolute right-4 top-4 font-Montserrat text-4xl font-black leading-none tracking-tighter text-[#0F172A]/[0.03] sm:right-6 sm:top-6 sm:text-5xl md:text-[64px]">
                      {phase.id}
                    </span>

                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F1F5F9] bg-white shadow-sm sm:mb-5 md:mb-6 md:h-12 md:w-12">
                      {phase.icon}
                    </div>

                    <p className="font-Montserrat text-[11px] font-bold uppercase tracking-widest text-[#6366F1] md:text-xs">
                      {phase.phase}
                    </p>
                    <h3 className="font-Montserrat mb-2 mt-1 text-lg font-black text-[#0F172A] sm:text-xl md:mb-3 md:text-2xl">
                      {phase.title}
                    </h3>
                    <p className="font-opensans mb-5 text-xs leading-relaxed text-[#475569] sm:mb-6 md:mb-8 md:text-sm">
                      {phase.desc}
                    </p>
                    <div className="inline-flex flex-wrap rounded-full border border-[#FFEDD5] bg-[#FFF7ED] px-3 py-1.5 text-[10px] font-semibold text-[#EA580C] sm:text-[11px] md:px-4 md:py-2 md:text-xs">
                      {phase.badge}
                    </div>
                  </div>

                  {index < a3Phases.length - 1 && (
                    <div className="hidden shrink-0 items-center justify-center lg:flex">
                      <ArrowRight className="h-6 w-6 text-[#CBD5E1]" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Expandable Details Panel */}
          <div
            className={`mt-8 overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-[#FAFAFA] transition-all duration-500 ease-in-out ${
              activePhase ? "max-h-[1200px] opacity-100" : "max-h-0 border-transparent opacity-0"
            }`}
          >
            {activePhaseData && (
              <div className="p-5 sm:p-6 md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-Montserrat text-base font-black text-[#0F172A] sm:text-lg md:text-xl">
                      {activePhaseData.title}
                    </h4>
                    <p className="font-opensans mt-2 text-xs text-[#475569] sm:text-sm">
                      {activePhaseData.sub}
                    </p>
                  </div>
                  <button
                    onClick={() => setActivePhase(null)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] transition-colors hover:bg-white hover:text-[#0F172A]"
                    aria-label="Close detail panel"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {activePhaseData.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#E2E8F0] bg-white p-4 sm:p-5"
                    >
                      <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8] sm:text-[11px]">
                        {card.label}
                      </div>
                      <div className="mb-2 font-Montserrat text-xs font-bold text-[#0F172A] sm:text-sm">
                        {card.title}
                      </div>
                      <div className="font-opensans text-xs leading-relaxed text-[#475569] sm:text-sm">
                        {card.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT YOU ACTUALLY GET */}
      <section className="bg-white px-4 py-12 sm:px-5 md:py-4">
        <div className="mx-auto max-w-[1280px]">
          {/* Top Row: Heading + Metrics */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[500px]">
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-xs">
                WHAT YOU ACTUALLY GET
              </p>
              <h2 className="font-Montserrat mt-4 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[56px]">
                Results that
                <br />
                <span className="bg-gradient-to-r from-[#EA580C] to-[#F59E0B] bg-clip-text text-transparent">
                  speak for themselves.
                </span>
              </h2>
              <p className="font-opensans mt-4 text-sm leading-relaxed text-[#475569] md:mt-5 md:text-base lg:text-lg">
                Not vanity metrics. Not "brand awareness." Every outcome below is something we've delivered for real D2C brands — and can deliver for yours.
              </p>
            </div>

            {/* Metrics block */}
            <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 lg:w-[500px]">
              <div className="rounded-xl bg-[#FAFAFA] p-4 sm:p-5">
                <h4 className="font-Montserrat text-2xl font-black text-[#6366F1] sm:text-3xl">4.68x</h4>
                <p className="font-opensans mt-1 text-[10px] text-[#64748B] sm:text-[11px] md:text-xs">Peak ROAS delivered — Retroverse, 90 days</p>
              </div>
              <div className="rounded-xl bg-[#FAFAFA] p-4 sm:p-5">
                <h4 className="font-Montserrat text-2xl font-black text-[#6366F1] sm:text-3xl">50+</h4>
                <p className="font-opensans mt-1 text-[10px] text-[#64748B] sm:text-[11px] md:text-xs">D2C brands scaled across fashion, gaming & wellness</p>
              </div>
              <div className="rounded-xl bg-[#FAFAFA] p-4 sm:p-5">
                <h4 className="font-Montserrat text-2xl font-black text-[#6366F1] sm:text-3xl">35%</h4>
                <p className="font-opensans mt-1 text-[10px] text-[#64748B] sm:text-[11px] md:text-xs">Avg. CVR improvement after funnel audit</p>
              </div>
              <div className="rounded-xl bg-[#FAFAFA] p-4 sm:p-5">
                <h4 className="font-Montserrat text-2xl font-black text-[#6366F1] sm:text-3xl">90</h4>
                <p className="font-opensans mt-1 text-[10px] text-[#64748B] sm:text-[11px] md:text-xs">Days to meaningful ROAS shift — our benchmark</p>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 md:mt-16 lg:grid-cols-3 lg:gap-6">
            {resultsCards.map((card) => (
              <div key={card.id} className="flex flex-col rounded-[20px] border border-[#F1F5F9] bg-white p-5 shadow-sm transition hover:border-[#E2E8F0] hover:shadow-lg md:p-8">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 md:mb-5">
                  {card.icon}
                </div>
                <h3 className="font-Montserrat mb-2 text-lg font-bold text-[#0F172A] md:mb-3 md:text-xl">{card.title}</h3>
                <p className="font-opensans mb-6 text-xs leading-relaxed text-[#475569] md:mb-8 md:text-sm">{card.desc}</p>
                <div className="mt-auto inline-flex self-start rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[11px] font-semibold text-[#6366F1] md:text-xs">
                  {card.badge}
                </div>
              </div>
            ))}
          </div>

          {/* Dark CTA Banner */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[20px] bg-[#0B0C1E] px-5 py-8 sm:px-6 md:mt-16 md:flex-row md:gap-8 md:rounded-[24px] md:px-12 md:py-14">
            <div className="w-full max-w-[500px] text-left">
              <h3 className="font-Montserrat text-xl font-extrabold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
                Ready to see if this works for your brand?
              </h3>
              <p className="font-opensans mt-3 text-xs text-[#94A3B8] md:mt-4 md:text-sm lg:text-base">
                We'll audit your current funnel and ad account — no pitch, no fluff. Just an honest look at what's working and what isn't.
              </p>
              <div className="mt-5 space-y-2 md:mt-6 md:space-y-3">
                {["Free funnel & ad account audit", "30-minute strategy call, no obligation", "Custom ROAS projection for your brand"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 md:items-center md:gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981] md:mt-0 md:h-5 md:w-5" />
                    <span className="font-opensans text-[12px] text-white sm:text-[13px] md:text-sm lg:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-center md:w-auto md:items-end">
               <Link href="https://forms.acquirely.in/acquirely/form/FunnelReviewCallECom/formperma/muJYVHXbKDbQ7N3xEPr_lrjkOuBMe33JPNULGFJm9Kg">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#818CF8] px-5 py-4 font-Montserrat text-sm font-bold text-white transition hover:bg-[#6366F1] sm:px-6 md:w-auto md:px-8 md:text-base">
                Book a Funnel Review <ArrowRight className="h-4 w-4 shrink-0 md:h-5 md:w-5" />
              </button>
              </Link>
              <p className="font-opensans mt-3 text-center text-[10px] text-[#64748B] sm:text-[11px] md:text-right md:text-xs">
                Usually responded to within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}