"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// Icons
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Quote,
  Activity,
  Target,
} from "lucide-react";

// --- EXTENDED DATA STRUCTURE ---
// Added layout and styling properties to control the separate sections

const caseStudies = [
  {
    title: "Kashti Finserv (Loan Lead Gen)",
    afterLabel: "AFTER (90 DAYS)",
    icon: <Activity className="h-6 w-6" />,
    sectionBg: "bg-[#F8FAFC]", // Light Slate
    blur1: "bg-blue-400/10",
    blur2: "bg-emerald-400/10",
    reverseLayout: false,
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
    icon: <Target className="h-6 w-6" />,
    sectionBg: "bg-white", // Clean White
    blur1: "bg-orange-400/10",
    blur2: "bg-purple-400/10",
    reverseLayout: true, // Flips the layout for visual interest
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
    icon: <TrendingUp className="h-6 w-6" />,
    sectionBg: "bg-[#EEF2FF]", // Very Light Indigo
    blur1: "bg-indigo-500/10",
    blur2: "bg-blue-500/10",
    reverseLayout: false,
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

export default function CaseStudiesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-12 pt-8 md:pb-16 md:pt-[96px]">
        {/* Premium Background Layers */}
        <div className="absolute right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
        <div className="absolute bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
          <Navbar />

          <div className="mt-10 flex flex-col items-center text-center lg:mt-20">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-xs">
              REAL RESULTS. REAL REVENUE.
            </p>
            <h1 className="font-Montserrat max-w-[800px] text-3xl font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
              Systems that scale.
              <span className="block mt-2 bg-gradient-to-r from-[#6366F1] to-[#F97316] bg-clip-text text-transparent">
                Data that proves it.
              </span>
            </h1>

            <p className="mt-5 max-w-[600px] font-opensans text-base leading-relaxed text-[#475569] sm:text-lg md:mt-8 md:text-xl">
              Take a look inside the ad accounts and funnels we’ve transformed. We don't hide behind vanity metrics — we measure success in pipeline and profit.
            </p>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH CASE STUDY SECTIONS */}
      {caseStudies.map((study, index) => (
        <section
          key={index}
          className={`relative overflow-hidden py-16 md:py-24 ${study.sectionBg} border-t border-[#E2E8F0]/50`}
        >
          {/* Subtle Ambient Background Blurs for each section */}
          <div className={`absolute -top-[10%] -right-[5%] z-0 h-[250px] w-[250px] rounded-full blur-[60px] opacity-60 md:h-[500px] md:w-[500px] ${study.blur1}`} />
          <div className={`absolute -bottom-[10%] -left-[5%] z-0 h-[250px] w-[250px] rounded-full blur-[60px] opacity-60 md:h-[500px] md:w-[500px] ${study.blur2}`} />

          <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
            
            <div className={`grid gap-10 lg:grid-cols-12 lg:gap-16 items-center ${study.reverseLayout ? 'lg:grid-flow-col-dense' : ''}`}>
              
              {/* Left/Right Column: Context & Data */}
              <div className={`flex flex-col lg:col-span-7 ${study.reverseLayout ? 'lg:col-start-6' : ''}`}>
                <div className="mb-6 flex items-center gap-4 md:mb-8">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-[#F1F5F9] text-[#6366F1] shadow-sm">
                    {study.icon}
                  </div>
                  <h2 className="font-Montserrat text-2xl font-black text-[#0F172A] sm:text-3xl md:text-4xl">
                    {study.title}
                  </h2>
                </div>

                {/* Data Table Card */}
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xl shadow-slate-200/20 md:p-8">
                  {/* Table Headers */}
                  <div className="mb-4 flex items-center justify-between border-b border-[#F1F5F9] pb-3 px-2">
                    <span className="font-Montserrat text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] w-[40%]">
                      Metric
                    </span>
                    <span className="font-Montserrat text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] w-[25%] text-center">
                      Before
                    </span>
                    <span className="font-Montserrat text-[10px] font-bold uppercase tracking-wider text-[#6366F1] w-[35%] text-right">
                      {study.afterLabel}
                    </span>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-3">
                    {study.rows.map((row, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-4 py-3 md:py-4 transition-colors hover:bg-slate-100/80">
                        <span className="font-opensans text-xs font-semibold text-[#0F172A] w-[40%] md:text-sm">
                          {row[0]}
                        </span>
                        <span className="font-opensans text-xs font-medium text-[#64748B] w-[25%] text-center md:text-sm">
                          {row[1]}
                        </span>
                        <span className={`font-Montserrat text-xs font-bold w-[35%] text-right md:text-sm ${row[3]}`}>
                          {row[2]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left/Right Column: Testimonial Quote */}
              <div className={`lg:col-span-5 ${study.reverseLayout ? 'lg:col-start-1' : ''}`}>
                <div className="relative flex h-full min-h-[300px] flex-col justify-center overflow-hidden rounded-[24px] bg-[#0B0C1E] p-8 text-white shadow-2xl md:p-10">
                  {/* Decorative background element for the dark card */}
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#6366F1] opacity-20 blur-[40px]"></div>
                  
                  <Quote className="relative z-10 mb-6 h-10 w-10 text-[#818CF8]" />
                  <p className="font-opensans relative z-10 mb-8 text-base font-medium leading-relaxed italic text-[#F8FAFC] md:text-lg">
                    {study.quote}
                  </p>
                  
                  <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                    <div>
                      <p className="font-Montserrat text-xs font-bold tracking-widest text-[#818CF8] uppercase">
                        {study.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION (Matching Home Page) */}
      <section className="bg-white px-4 py-16 sm:px-5 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[20px] bg-[#0B0C1E] px-5 py-8 sm:px-6 md:flex-row md:gap-8 md:rounded-[24px] md:px-12 md:py-14">
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
                <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#818CF8] px-5 py-4 font-Montserrat text-sm font-bold text-white transition hover:bg-[#6366F1] shadow-[0_10px_15px_-3px_rgba(99,102,241,0.25)] hover:scale-[1.02] sm:px-6 md:w-auto md:px-8 md:text-base">
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