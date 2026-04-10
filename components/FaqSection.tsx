"use client";

import Link from "next/link";
import { ChevronDown, Clock3, Instagram, ShieldCheck, TrendingUp } from "lucide-react";
import { useState } from "react";

const trustCards = [
  {
    title: "90-Day Guarantee",
    description: "If we don't improve your ROAS by 30%+ in 90 days, we work for free until we do.",
    icon: ShieldCheck,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#22C55E]",
  },
  {
    title: "No Lock-in Contract",
    description: "Cancel anytime with 30 days notice. No hidden fees or penalties.",
    icon: Clock3,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#3B82F6]",
  },
  {
    title: "Performance-Based",
    description: "Our fees are tied to your ad spend - we only grow when you grow.",
    icon: Instagram,
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#A855F7]",
  },
  {
    title: "ROI Transparency",
    description: "Real-time dashboard access. Know exactly where every rupee is going.",
    icon: TrendingUp,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#F59E0B]",
  },
];

const faqItems = [
  {
    question: "How quickly can results be seen?",
    answer:
      "Initial winners typically appear within 3–6 weeks, followed by structured scaling.",
  },
  {
    question: "How soon do campaigns launch?",
    answer:
      "Campaigns usually go live within 5–7 days after onboarding.",
  },
  {
    question: "What if ROAS targets aren’t met?",
    answer:
      "We continuously optimise strategy, creatives, and scaling systems rather than just adjusting ads.",
  },
  {
    question: "Are creatives included?",
    answer:
      "We guide the creative strategy and testing framework. Execution can be structured separately.",
  },
  {
    question: "Do you offer SEO or organic social media?",
    answer:
      "No. Our focus is purely paid performance marketing and Meta Ads scaling systems.",
  },
  {
    question: "Do you run international campaigns?",
    answer:
      "Yes — including US, UAE, and UK markets.",
  },
];

function TrustCard({
  title,
  description,
  icon: Icon,
  iconBg,
  iconColor,
}: {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="rounded-xl bg-[#FAFAFA] px-4 py-5 text-center">
      <div className={`mx-auto grid h-10 w-10 place-items-center rounded-lg ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <h3 className="mt-4 text-[18px] font-semibold leading-6 text-[#171717]">{title}</h3>
      <p className="mt-2 text-[12px] leading-[18px] text-[#737373]">{description}</p>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:py-8 sm:px-6 lg:px-20 lg:py-18">
        <div className="text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-4">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
              Zero risk commitment
            </span>
          </div>

          <h2 className="mt-7 text-[32px] font-Montserrat  leading-[1.05] text-[#171717] sm:text-[38px] lg:text-[44px]">
            <span className="block">Built on Accountability</span>
            <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#F59E0B_45%,#F87171_100%)] bg-clip-text text-transparent">
              Not Empty Promises
            </span>
          </h2>
          <p className="mx-auto  font-opensans mt-5 max-w-[620px] text-[14px] leading-6 text-[#94A3B8]">
            We're so confident in the A3 Flywheel that we back every Elite enrollment
            with an ironclad 90-day results guarantee. Here's exactly what that means.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1120px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((card) => (
            <TrustCard key={card.title} {...card} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex h-[30px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-4">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
              Got questions?
            </span>
          </div>

          <h2 className="mt-5 text-[32px] font-Montserrat  leading-[1.08] text-[#171717] sm:text-[38px] lg:text-[42px]">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[14px] leading-6 text-[#8A8A8A]">
            Everything DTC founders ask before partnering with us. Can't find your answer?{" "}
            <Link href="#" className="text-[#6366F1]">
              Talk to us directly.
            </Link>
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[940px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-b border-[#E5E7EB] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-5"
                >
                  <span className="max-w-[760px] text-[14px] leading-6 text-[#262626] sm:text-[15px]">
                    {item.question}
                  </span>
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                      isOpen ? "bg-[#EEF2FF] text-[#6366F1]" : "bg-[#F5F5F5] text-[#A3A3A3]"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`} />
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-4 pb-5 pt-0 sm:px-5">
                    <p className="max-w-[820px] text-[13px] leading-6 text-[#737373]">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
