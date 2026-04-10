"use client";

import { useState } from "react";
import { BarChart3, Lightbulb, Play, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import growth from "@/app/assests/growth.png";
import chart from "@/app/assests/charts.png";
import ruppe from "@/app/assests/ruppe.png";
import group from "@/app/assests/group.png";
import metaadsmanager from "@/app/assests/metadsmanager.png";
import { StaticImageData } from "next/image";

const benefitCards = [
  {
    title: "Data Compounds",
    description:
      "Every test adds to your brand's intelligence library. Month 6 campaigns are 10x smarter than Month 1 because they're built on real performance data.",
    value: "10x",
    label: "Smarter by Month 6",
    icon: BarChart3,
    iconText: null,
    image: growth,
  },
  {
    title: "Revenue Compounds",
    description:
      "Every test adds to your brand's intelligence library. Month 6 campaigns are 10x smarter than Month 1 because they're built on real performance data.",
    value: "3-5x",
    label: "Revenue Growth in 6 Months",
    icon: TrendingUp,
    iconText: null,
    image: chart,
  },
  {
    title: "CAC Compounds Down",
    description:
      "Every test adds to your brand's intelligence library. Month 6 campaigns are 10x smarter than Month 1 because they're built on real performance data.",
    value: "-40%",
    label: "Average CAC Reduction",
    icon: null,
    iconText: "Rs",
    image: ruppe,
  },
];

const metricsTop = [
  {
    label: "Revenue",
    change: "+3x",
    value: "Rs.15L",
    suffix: "/month",
    previous: "Rs.5L",
    current: "Rs.15L",
    progress: "75%",
  },
  {
    label: "ROAS",
    change: "+75%",
    value: "4.39x",
    suffix: "",
    previous: "2.5x",
    current: "4.39x",
    progress: "88%",
  },
];

const metricsBottom = [
  {
    label: "Cost Per Click",
    value: "Rs.4.2",
    note: "-58% from Rs.10.1",
  },
  {
    label: "Conv. Rate",
    value: "4.8%",
    note: "+3.1x from 1.5%",
  },
];

// Data for the newly added case studies
const additionalCaseStudies = [
  {
    title: "Children’s Clothing Brand - Modish",
    problem: "Launched campaigns with a ROAS of 1.43, struggling to reach breakeven while scaling daily ad spend.",
    strategy: (
      <ul className="space-y-2 ml-1">
        <li><strong>A1:</strong> Rapid creative testing across offers, visuals, and audience segments.</li>
        <li><strong>A2:</strong> Stabilised ROAS at breakeven (2.34) then scaled daily budget from ₹2K to ₹15K.</li>
        <li><strong>A3:</strong> Ongoing optimisation based on day‑parting and creative fatigue monitoring.</li>
      </ul>
    ),
    testimonial: "They didn’t just run ads—they built a testing and scaling engine for us. Our ROAS improved to breakeven and we could finally scale with confidence.",
    author: "Founder, Modish",
  },
  {
    title: "Footwear Brand - No Strain",
    problem: "Meta Ads account stuck at 1.57 ROAS for two years, relying mostly on catalogue ads. Scaling attempts failed despite strong product demand.",
    strategy: (
      <ul className="space-y-2 ml-1">
        <li><strong>A1:</strong> Replaced catalogue‑only approach with angle‑based creative testing (comfort, durability, lifestyle).</li>
        <li><strong>A2:</strong> Identified winning combinations and scaled budgets while maintaining ROAS.</li>
        <li><strong>A3:</strong> Continuous budget reallocation to high‑performing creatives and time slots.</li>
      </ul>
    ),
    testimonial: "Our Meta Ads were stuck for years. Their structured testing approach finally helped us break the plateau and scale.",
    author: "Founder, No Strain",
  },
];

function BenefitCard({
  title,
  description,
  value,
  label,
  image,
  iconText,
}: {
  title: string;
  description: string;
  value: string;
  label: string;
  icon: typeof BarChart3 | typeof TrendingUp | null;
  iconText: string | null;
  image: StaticImageData;
}) {
  return (
    <div className="rounded-[6px] border border-black/10 bg-white px-6 py-10 text-center sm:px-10 sm:py-[52px]">
      <div className="mx-auto grid h-[72px] w-[75px] place-items-center rounded-[5px] bg-[#5652E9]">
        {image ? (
          <Image src={image} alt={title} className="h-10 w-10" />
        ) : (
          <span className="text-3xl font-extrabold leading-none text-[#FFCD29] sm:text-5xl">
            {iconText}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-[20px] font-semibold leading-7 text-black">{title}</h3>
      <p className="mx-auto mt-2 max-w-[305px] text-[16px] font-semibold leading-[22px] text-[#7B8BA0]">
        {description}
      </p>
      <div className="mx-auto mt-7 w-full max-w-[275px] border-t border-black/10 pt-5">
        <div className="text-[30px] font-extrabold leading-9 text-[#252525]">{value}</div>
        <p className="mt-1 text-[14px] leading-5 text-[#707984]">{label}</p>
      </div>
    </div>
  );
}

function StatCard({
  label,
  change,
  value,
  suffix,
  previous,
  current,
  progress,
}: {
  label: string;
  change: string;
  value: string;
  suffix: string;
  previous: string;
  current: string;
  progress: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[12px] uppercase tracking-[0.3px] text-[#737373]">{label}</span>
        <span className="text-[12px] font-semibold text-[#22C55E]">{change}</span>
      </div>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-[30px] font-bold leading-9 tracking-[-0.5px] text-black">{value}</span>
        {suffix ? <span className="mb-1 text-[12px] text-[#737373]">{suffix}</span> : null}
      </div>
      <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[12px]">
        <span className="text-[#525252] line-through">{previous}</span>
        <span className="text-[#22C68D]">to</span>
        <span className="font-semibold text-[#22C68D]">{current}</span>
      </div>
      <div className="mt-3 h-[6px] rounded-full bg-[#E6E6E6]">
        <div className="h-[6px] rounded-full bg-[#22C68D]" style={{ width: progress }} />
      </div>
    </div>
  );
}

function MiniMetric({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl bg-white p-4">
      <div className="text-[12px] uppercase tracking-[0.3px] text-[#737373]">{label}</div>
      <div className="mt-2 text-[20px] font-bold leading-7 tracking-[-0.5px] text-black">{value}</div>
      <div className="mt-1 text-[12px] font-semibold text-[#4ADE80]">{note}</div>
    </div>
  );
}

function AlertTriangleLike() {
  return (
    <div className="relative h-[22px] w-[23px]">
      <div className="absolute inset-[2px] rounded-[4px] border border-[#F87171]" />
      <div className="absolute left-1/2 top-[5px] h-[7px] w-0 -translate-x-1/2 border border-[#F87171]" />
      <div className="absolute bottom-[4px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#F87171]" />
    </div>
  );
}

export default function FlywheelProofSection() {
  const [isMobileVideoPlaying, setIsMobileVideoPlaying] = useState(false);
  const [showMoreCaseStudies, setShowMoreCaseStudies] = useState(false);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-2 md:py-16 sm:px-6 lg:px-20 lg:py-[8px]">
        {/* Top Header Section */}
        <div className="mx-auto max-w-[757px] text-center">
          <h2 className="text-[31px] font-Montserrat leading-[1.08] text-black sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
            Why the Flywheel Wins Every Time
          </h2>
          <p className="mt-5 text-[16px] leading-7 text-[#7B8BA0] sm:text-[18px]">
            Each phase amplifies the next. The longer it spins, the harder it is to stop.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {benefitCards.map((card) => (
            <BenefitCard key={card.title} {...card} />
          ))}
        </div>

        {/* Real Results Header */}
        <div className="md:mt-[90px] mt-8 text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-[18px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="md:text-[11px] text-[10px] font-semibold uppercase tracking-[0.8px] text-[#5332E2] sm:text-[12px]">
              Real client. Real numbers. Real proof.
            </span>
          </div>
          <h2 className="mx-auto font-Montserrat mt-8 max-w-[873px] text-[31px] leading-[1.08] text-black sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
            Real Results from the A3 Flywheel Model
          </h2>
        </div>

        {/* Main Case Study */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,534px)_minmax(0,621px)] lg:items-start lg:justify-center">
          <div>
            <h3 className="text-[26px] font-opensans leading-7 text-black">Case Study 1: Gaming Brand</h3>

            <div className="mt-11 space-y-[18px]">
              <div className="rounded-2xl border border-[#F87171] bg-white p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="grid h-11 w-[46px] place-items-center rounded-md bg-[#FFEDED] shrink-0">
                    <AlertTriangleLike />
                  </div>
                  <div className="flex-1 w-full">
                    <h4 className="text-[18px] font-semibold leading-7 text-black">Problem:</h4>
                    <p className="mt-1 text-[14px] font-semibold leading-6 text-[#7B8BA0] sm:text-[16px] sm:leading-[22px]">
                      Revenue stuck at Rs.5L per month with ROAS 2.5
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#FFCD29] bg-white p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                  <div className="grid h-[45px] w-[46px] place-items-center rounded-md bg-[#FFFBEE] shrink-0">
                    <Lightbulb className="h-6 w-6 fill-[#FFCD29] text-[#FFCD29]" />
                  </div>
                  <div className="flex-1 w-full">
                    <h4 className="text-[18px] font-semibold leading-7 text-black">Strategy Implemented:</h4>
                    <p className="mt-1 text-[14px] font-semibold leading-6 text-[#7B8BA0] sm:text-[16px] sm:leading-[22px]">
                      A3 Flywheel Model + Structured Creative
                      <br />
                      Testing Engine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-Only Meta Ads Manager Video Trigger */}
            <div className="relative mt-12 mb-4 block lg:hidden">
              {!isMobileVideoPlaying ? (
                <div 
                  className="relative cursor-pointer group" 
                  onClick={() => setIsMobileVideoPlaying(true)}
                >
                  <Image src={metaadsmanager} alt="Meta Ads Manager" className="h-[190px] w-full rounded-lg object-cover" />
                  <div className="absolute left-1/2 top-1/2 grid h-[63px] w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
                    <Play className="ml-1 h-8 w-8 fill-black text-black" />
                  </div>
                </div>
              ) : (
                <video
                  src="/video.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="h-[190px] w-full rounded-lg object-cover"
                />
              )}
            </div>

            <h3 className="mt-4 lg:mt-12 text-[26px] font-bold leading-7 text-black">Results After 90 Days</h3>

            <div className="mt-8 rounded-[21px] border border-[#C9F6E1] bg-[#DEFBED] p-5 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {metricsTop.map((metric) => (
                  <StatCard key={metric.label} {...metric} />
                ))}
                {metricsBottom.map((metric) => (
                  <MiniMetric key={metric.label} {...metric} />
                ))}
              </div>
            </div>

            <div className="mt-9 rounded-[14px] bg-[#496690] px-5 sm:px-6 py-6 sm:py-7">
              <p className="max-w-[481px] text-[16px] sm:text-[18px] font-light leading-[24px] sm:leading-[25px] text-white">
                "Finally an agency that thinks in systems, not campaigns. We stopped guessing and started scaling."
              </p>
              <p className="mt-4 text-[20px] sm:text-[22px] font-semibold leading-8 sm:leading-10 text-white">Founder, Gaming Brand</p>
              <div className="mt-1 flex items-center gap-1 text-[#FFA227]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>*</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-0 lg:min-h-[920px] flex flex-col">
            {/* Desktop-Only Meta Ads Manager Video */}
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative hidden lg:block lg:order-last lg:mt-0 mt-8 md:h-[306px] h-[150px] w-full rounded-lg object-cover"
            />
            
            <div className="mt-4 lg:mt-0 grid gap-4 lg:contents">
              <Image src={group} alt="Shopify Dashboard" className="md:h-[561px] h-[300px] w-full lg:absolute lg:right-0 lg:top-[393px] lg:w-[511px] rounded-lg object-cover" />
            </div>
          </div>
        </div>

        {/* --- EXPLORE CASE STUDIES TOGGLE --- */}
        <div className="mt-16 sm:mt-20 border-t border-black/10 pt-10 text-center">
          <button
            onClick={() => setShowMoreCaseStudies(!showMoreCaseStudies)}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-[#5652E9] px-6 sm:px-8 py-4 text-[15px] sm:text-[16px] font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            {showMoreCaseStudies ? "Hide Case Studies" : "Explore More Case Studies"}
            {showMoreCaseStudies ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        {/* --- EXPANDABLE ADDITIONAL CASE STUDIES --- */}
        {showMoreCaseStudies && (
          <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-12 lg:gap-10 lg:grid-cols-2 animate-in fade-in slide-in-from-bottom-8 duration-500">
            {additionalCaseStudies.map((study, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-[22px] sm:text-[26px] font-opensans leading-7 text-black mb-6 sm:mb-11 text-center sm:text-left">
                  {study.title}
                </h3>

                <div className="space-y-[16px] sm:space-y-[18px] flex-grow">
                  {/* Problem Box */}
                  <div className="rounded-2xl border border-[#F87171] bg-white p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                      <div className="grid h-11 w-[46px] place-items-center rounded-md bg-[#FFEDED] shrink-0">
                        <AlertTriangleLike />
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="text-[16px] sm:text-[18px] font-semibold leading-7 text-black">Problem:</h4>
                        <p className="mt-1 text-[14px] sm:text-[15px] font-medium leading-[22px] text-[#7B8BA0] sm:text-[16px]">
                          {study.problem}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Strategy Box */}
                  <div className="rounded-2xl border border-[#FFCD29] bg-white p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                      <div className="grid h-[45px] w-[46px] place-items-center rounded-md bg-[#FFFBEE] shrink-0">
                        <Lightbulb className="h-6 w-6 fill-[#FFCD29] text-[#FFCD29]" />
                      </div>
                      <div className="flex-1 w-full overflow-hidden">
                        <h4 className="text-[16px] sm:text-[18px] font-semibold leading-7 text-black mb-2">Strategy Implemented:</h4>
                        <div className="text-[14px]  font-medium leading-[22px] text-[#7B8BA0] sm:text-[16px]">
                          {study.strategy}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Box */}
                <div className="mt-6 sm:mt-9 rounded-[14px] bg-[#496690] px-5 sm:px-6 py-6 sm:py-7">
                  <p className="text-[16px] sm:text-[18px] font-light leading-[24px] sm:leading-[25px] text-white">
                    "{study.testimonial}"
                  </p>
                  <p className="mt-4 text-[18px] sm:text-[22px] font-semibold leading-8 sm:leading-10 text-white">{study.author}</p>
                  <div className="mt-1 text-[28px] flex items-center gap-1 text-[#FFA227]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span className="text-[28px] sm:text-[20px]" key={i}>*</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}