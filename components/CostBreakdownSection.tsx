"use client";
import React from "react";
import {
  BarChart3,
  Brush,
  Clock3,
  Copy,
  DollarSign,
  Gauge,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UserRoundPlus,
} from "lucide-react";

const costRows = [
  { title: "Media Buyer", subtitle: "Paid ads", icon: Megaphone, iconBg: "bg-[#EFF6FF]", iconColor: "text-[#3B82F6]" },
  { title: "Designer", subtitle: "Creative", icon: Brush, iconBg: "bg-[#FAF5FF]", iconColor: "text-[#A855F7]" },
  { title: "Copywriter", subtitle: "Ad copy", icon: Copy, iconBg: "bg-[#FFFBEB]", iconColor: "text-[#F59E0B]" },
  { title: "Analytics", subtitle: "Data", icon: BarChart3, iconBg: "bg-[#ECFDF5]", iconColor: "text-[#10B981]" },
  { title: "CRO", subtitle: "Conversion", icon: Gauge, iconBg: "bg-[#FFF1F2]", iconColor: "text-[#F43F5E]" },
  { title: "Tools", subtitle: "Software", icon: Sparkles, iconBg: "bg-[#ECFEFF]", iconColor: "text-[#06B6D4]" },
  { title: "Hiring & HR", subtitle: "Benefits", icon: UserRoundPlus, iconBg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]", agencyValue: "₹0" },
];

const valueCards = [
  { title: "₹1.5L+", subtitle: "Average monthly savings", icon: DollarSign, iconBg: "bg-[#D1FAE5]", iconColor: "text-[#059669]" },
  { title: "Day 1", subtitle: "Ready to launch instantly", icon: Clock3, iconBg: "bg-[#E0E7FF]", iconColor: "text-[#4F46E5]" },
  { title: "Zero Risk", subtitle: "No long-term contracts", icon: ShieldCheck, iconBg: "bg-[#FEF3C7]", iconColor: "text-[#D97706]" },
];

function ValueCard({ title, subtitle, icon: Icon, iconBg, iconColor }: any) {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#E5E5E5] bg-white px-4 py-4 shadow-sm md:px-6 md:py-5">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div>
        <p className="font-montserrat text-[16px] font-medium leading-tight text-[#171717] md:text-[18px] md:leading-7">{title}</p>
        <p className="font-open-sans text-[11px] leading-4 text-[#737373] md:text-[12px]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function CostBreakdownSection() {
  return (
    <section className="bg-white py-4 md:py-[40px]">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center px-4">
        {/* Badge */}
        <div className="flex h-[34px] items-center gap-2 rounded border border-[#CFD5FD] bg-[#EDEFFF] px-4">
          <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
          <span className="font-inter text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] md:text-[12px]">
            Cost Breakdown
          </span>
        </div>

        {/* Header */}
        <h2 className="mt-2 text-center font-montserrat text-[26px] leading-[1.2] tracking-[-0.5px] text-[#171717] md:text-[40px]">
          Why Pay More for Less?
        </h2>
        <p className="mt-4 max-w-[645px] text-center font-inter text-[15px] leading-relaxed text-[#737373] md:mt-6 md:text-[18px]">
          See exactly what you'd spend building an in-house team vs. partnering with us.
        </p>

        {/* Comparison Table */}
        <div className="mt-10 w-full md:mt-16">
          <div className="relative pt-6">
            <div className="overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-xl">
              <div className="w-full">
                
                {/* Table Header */}
                <div className="grid grid-cols-2 text-center">
                  <div className="flex flex-col items-start justify-center border-b border-r border-[#E5E5E5] bg-[#F9FAFB] px-2 py-4 md:px-6 md:py-5">
                    <span className="font-montserrat text-[9px] font-bold tracking-[0.5px] text-[#A3A3A3] md:text-[12px] md:tracking-[1.2px]">ROLE</span>
                  </div>

                  <div className="relative flex flex-col items-center justify-center border-b border-[#6366F1] bg-[#496690] px-2 py-4 md:px-6 md:py-5">
                    <div className="absolute top-2 md:top-4 left-1/2 z-[10] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-[#34D399] px-1.5 py-0.5 text-[6px] font-bold uppercase text-[#064E3B] shadow-md md:px-3 md:py-1 md:text-[8px]">
                      Best Value
                    </div>
                    <p className="font-montserrat text-[11px] font-bold md:mt-2 text-white md:text-[14px]">Our Agency</p>
                    <p className="hidden font-open-sans text-[10px] text-[#C7D2FE] md:block">Full-service team</p>
                  </div>
                </div>

                {/* Table Rows */}
                {costRows.map((row) => (
                  <div key={row.title} className="grid grid-cols-2 border-b border-[#F5F5F5] last:border-b-0">
                    <div className="flex items-center gap-1.5 border-r border-[#F5F5F5] px-2 py-3 md:gap-3 md:px-6 md:py-4">
                      <div className={`hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:flex md:h-8 md:w-8 ${row.iconBg}`}>
                        <row.icon className={`h-3.5 w-3.5 ${row.iconColor}`} />
                      </div>
                      <div className="overflow-hidden">
                        <p className="truncate font-open-sans text-[10px] font-bold text-[#262626] md:text-[14px] md:font-medium">{row.title}</p>
                        <p className="truncate font-open-sans text-[9px] text-[#A3A3A3] md:text-[12px]">{row.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center border-l border-[#E0E7FF] bg-[#EEF2FF] px-1 py-3 md:px-6 md:py-4">
                      <span className="font-open-sans text-[10px] font-bold text-[#4338CA] md:text-[14px]">
                        {row.agencyValue ?? "Included"}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Total Footer */}
                <div className="grid grid-cols-2">
                  <div className="flex flex-col justify-center border-r border-[#404040] bg-[#171717] px-2 py-4 md:px-6 md:py-6">
                    <p className="font-open-sans text-[11px] font-bold text-white md:text-[16px]">Total</p>
                    <p className="hidden font-open-sans text-[10px] text-[#A3A3A3] md:block">Monthly estimate</p>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-[#496690] px-1 py-4 text-center md:px-6 md:py-6">
                    <p className="font-montserrat text-[12px] font-bold text-white md:text-[24px]">₹35K–65K</p>
                    <div className="mt-1 scale-90 rounded bg-[#34D399] px-1 py-0.5 text-[8px] font-bold uppercase text-[#064E3B] md:scale-100 md:px-3 md:py-1 md:text-[11px]">
                      -82%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 md:flex md:flex-row">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}