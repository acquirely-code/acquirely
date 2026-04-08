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
    question: "What makes AgencyPro different from hiring a full-time marketing team?",
    answer:
      "A full-time marketing hire costs $60K-$120K/year in salary alone - before benefits, tools, management overhead, and ramp-up time. With AgencyPro, you get a full team of specialists (strategists, creatives, media buyers, analysts) for a fraction of that cost, with zero hiring risk. We're also fully accountable to results. If performance dips, we fix it - no HR conversations needed. You stay focused on product and operations while we own the growth engine.",
  },
  {
    question: "How quickly will I see results after onboarding?",
    answer:
      "Most brands start seeing clearer data, stronger creative learnings, and measurable efficiency improvements within the first 30 days. Revenue compounding usually becomes more visible across the first 60 to 90 days.",
  },
  {
    question: "Do you work with brands at all revenue stages, or only established DTC companies?",
    answer:
      "We work best with brands that already have traction and are serious about scaling. If you're still validating your product, we'll usually tell you honestly if it's too early.",
  },
  {
    question: "What channels do you manage, and can I choose which ones?",
    answer:
      "Yes. We primarily focus on Meta, but depending on fit we also support Google, YouTube, funnel optimization, and related growth systems.",
  },
  {
    question: "How does your pricing work? Are there long-term contracts?",
    answer:
      "Our pricing is structured around the package you choose plus ad-spend alignment where applicable. There are no heavy lock-ins, and the model is designed to stay performance-oriented.",
  },
  {
    question: "Who owns the ad accounts, creative assets, and data?",
    answer:
      "You do. We build and operate inside your ecosystem so your accounts, data, and learnings stay with your brand.",
  },
  {
    question: "How much of my time will this require each week?",
    answer:
      "Usually very little once setup is complete. Expect strategic reviews, approvals, and occasional alignment calls, but not daily management overhead.",
  },
  {
    question: "What happens if I'm not happy with the results?",
    answer:
      "That's exactly why the section is built around accountability. If performance misses agreed benchmarks, we work with you to course-correct and honor the guarantee structure we've outlined.",
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

        <div className="mx-auto mt-10 flex max-w-[940px] flex-col gap-6 rounded-2xl bg-[#496690] px-5 py-7 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[430px]">
            <h3 className="text-[28px] font-bold leading-tight sm:text-[34px]">Still have questions?</h3>
            <p className="mt-2 text-[14px] leading-6 text-white/80">
              Our team of DTC specialists is happy to walk you through anything. No sales pressure - just honest answers.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              target="_blank" href="https://forms.acquirely.in/acquirely/form/AcquirelyLeads/formperma/2doC7L65w0M6PnuFIVX6g4BgwS3fzMDJYLwncK3fEeo"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-[13px] font-medium text-[#4F46E5] transition hover:bg-slate-100"
            >
              Chat with Us
            </Link>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-black px-5 text-[13px] font-medium text-white transition hover:bg-neutral-800"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
