"use client";
import flywheelmodel from "@/app/assests/flywheelmodel.png";
import Image from "next/image";
import { useState } from "react";

// Custom long arrow SVG to better match the design
const LongArrowRight = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12H38M38 12L30 4M38 12L30 20" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const flywheelPhases = [
  {
    code: "A1",
    title: "Testing + Scale",
    description:
      "We launch testing campaigns and test creatives, angles, messaging formats & audiences then scale winners fast.",
    goal: "Identify what works, isolate it, and scale aggressively.",
    accent: "from-[#686CF2] to-[#7A84F6]",
  },
  {
    code: "A2",
    title: "Lock & Scale Aggressively",
    description:
      "After ~90 days, we find your baseline, stabilize ROAS, and scale confidently.",
    goal: "Move from unstable performance to predictable scaling",
    accent: "from-[#FA781C] to-[#FA8D36]",
  },
  {
    code: "A3",
    title: "Micro Analysis & Budget Redistribution",
    description:
      "Now we go deeper into data find best days, cut weak ones and shift budget smartly. Built on earlier phases. This level of optimisation is only possible after A1 and A2 build the foundation.",
    goal: "Extract maximum ROAS efficiency from real performance data.",
    accent: "from-[#2ECF95] to-[#14BC84]",
  },
];

function FlywheelDiagramPlaceholder() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div
        className="rounded-[14px] border border-[#E2E8F0] bg-white p-3 cursor-pointer shadow-sm md:p-5"
        onClick={() => setIsZoomed(true)}
      >
        <Image
          className="h-auto w-full rounded-lg md:h-full"
          src={flywheelmodel}
          alt="Flywheel Model"
        />
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl rounded-xl bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={flywheelmodel}
              alt="Flywheel Model Zoomed"
              className="h-auto w-full rounded-lg"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-lg hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default function A3FlywheelSection() {
  return (
    <section className="bg-white font-sans">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:py-16 sm:px-6 lg:px-[100px] lg:py-[84px]">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-[14px]">
            <span className="text-sm">🚀</span>
            <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
              INTRODUCING A3 FLYWHEEL MODEL
            </span>
          </div>

          <h2 className="mt-8 font-['Montserrat'] text-[32px] font-extrabold leading-[1.1] text-[#000000] sm:text-[40px]">
            <span className="block">The Growth System Built for the</span>
            <span className="block mt-1 bg-gradient-to-r from-[#9333EA] to-[#F97316] bg-clip-text text-transparent">
              New Meta Ads Era
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[662px] font-['Open_Sans'] text-[16px] leading-relaxed text-[#7B8BA0] sm:text-[18px]">
            After analysing ₹30Cr+ in Meta ad spend, we developed a structured
            paid acquisition framework designed for sustainable scaling.
          </p>
        </div>

        {/* MAIN FLYWHEEL LAYOUT */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[480px_minmax(0,1fr)] lg:items-start lg:gap-16">
          
          {/* Left Column: Steps */}
          <div className="space-y-10 lg:pt-4">
            <h3 className="font-['Montserrat'] text-[24px] font-bold text-[#000000] md:text-[26px]">
              How the <span className="bg-gradient-to-r from-[#FA781C] to-[#FA8D36] bg-clip-text text-transparent">A3 Flywheel Model</span> Works
            </h3>
            
            <div className="space-y-10 pt-2">
              {flywheelPhases.map((phase) => (
                <div key={phase.code} className="flex items-start gap-4 sm:gap-[18px]">
                  {/* Icon Block */}
                  <div
                    className={`grid h-[53px] w-[53px] shrink-0 place-items-center rounded-[10px] bg-gradient-to-br shadow-sm ${phase.accent}`}
                  >
                    <span className="font-['Montserrat'] text-[24px] font-extrabold text-white">
                      {phase.code}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="pt-0.5">
                    <h4 className="font-['Montserrat'] text-[16px] font-bold leading-tight text-[#000000]">
                      {phase.title}
                    </h4>
                    
                    <p className="mt-2 font-['Open_Sans'] text-[15px] leading-[22px] text-[#7B8BA0]">
                      {phase.description}
                    </p>

                    <p className="mt-3 font-['Open_Sans'] text-[15px] leading-[22px] text-[#7B8BA0]">
                      <span className="font-bold text-[#000000]">Goal: </span>
                      {phase.goal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:pt-[60px]">
            <FlywheelDiagramPlaceholder />
          </div>
        </div>

        {/* CONTINUOUS GROWTH FLYWHEEL SECTION */}
        <div className="mt-14 flex flex-col items-center pt-4">
          <h2 className=" text-[32px] flex text-center font-bold font-Montserrat text-[#000000] md:text-[40px]">
            A Continuous Growth Flywheel
          </h2>
          <p className="mt-4 font-['Open_Sans'] text-[18px] text-[#7B8BA0]">
            This system runs every single week.
          </p>

          <div className="mt-12 grid w-full max-w-[1050px] grid-cols-1 gap-6 md:grid-cols-3">
            {/* Box 1: A1 -> A2 */}
            <div className="flex flex-col items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-6">
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#686CF2] to-[#7A84F6] font-['Montserrat'] text-[24px] font-extrabold text-white">
                  A1
                </div>
                <LongArrowRight />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#FA781C] to-[#FA8D36] font-['Montserrat'] text-[24px] font-extrabold text-white">
                  A2
                </div>
              </div>
              <p className="mt-8 font-['Montserrat'] text-[16px] font-bold text-[#000000]">
                A1 feeds A2
              </p>
            </div>

            {/* Box 2: A2 -> A3 (Highlighted Border) */}
            <div className="flex flex-col items-center justify-center rounded-[8px] border-[3px] border-[#0EA5E9] bg-[#F9FAFB] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative">
              <div className="flex items-center gap-6">
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#FA781C] to-[#FA8D36] font-['Montserrat'] text-[24px] font-extrabold text-white">
                  A2
                </div>
                <LongArrowRight />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#2ECF95] to-[#14BC84] font-['Montserrat'] text-[24px] font-extrabold text-white">
                  A3
                </div>
              </div>
              <p className="mt-8 font-['Montserrat'] text-[16px] font-bold text-[#000000]">
                A2 strengthens A3
              </p>
            </div>

            {/* Box 3: A3 -> A1 */}
            <div className="flex flex-col items-center justify-center rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-6">
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#2ECF95] to-[#14BC84] font-['Montserrat'] text-[24px] font-extrabold text-white">
                  A3
                </div>
                <LongArrowRight />
                <div className="flex h-[53px] w-[53px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#686CF2] to-[#7A84F6] font-['Montserrat'] text-[24px] font-extrabold text-white">
                  A1
                </div>
              </div>
              <p className="mt-8 font-['Montserrat'] text-[16px] font-bold text-[#000000]">
                A3 insights improve A1 testing
              </p>
            </div>
          </div>

          <p className="mt-10 font-['Montserrat'] text-[20px] font-bold text-[#000000]">
            That's the Flywheel Effect.
          </p>
        </div>

      </div>
    </section>
  );
}