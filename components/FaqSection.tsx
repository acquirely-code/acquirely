"use client";

import Link from "next/link";
import { ChevronDown, Clock3, Instagram, ShieldCheck, TrendingUp } from "lucide-react";
import { useState } from "react";



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



export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 md:py-8 sm:px-6 lg:px-20 lg:py-18">
       

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
