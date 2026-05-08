"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import dashboardImage from "@/app/assests/landinghero.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";

type CaseStudy = {
  name: string;
  niche: string;
  metrics: Array<{ label: string; value: string }>;
  result: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const heroHighlights = [
  "Meta lead gen specialists",
  "Built for lead quality",
  "Multi-location scaling",
];

const optimizeFor = [
  "Cost per lead",
  "CTR",
  "CPC",
  "Form volume",
];

const actuallyMatters = [
  "Cost per qualified lead",
  "Sales conversion rate",
  "Lead-to-appointment ratio",
  "Revenue per campaign",
];

const sameMistakes = [
  "Broad lead forms",
  "One-size-fits-all creatives",
  "No sales feedback loop",
  "Static budget allocation",
];

const flywheelSteps = [
  {
    phase: "A1",
    title: "Testing to Scale",
    body: "Launch structured tests: multiple creatives, offers, and regional angles. Winners move straight into a dedicated scale campaign.",
    goal: "Goal: Find lead magnets that convert. Isolate. Pour budget.",
  },
  {
    phase: "A2",
    title: "Lock and Scale Aggressively",
    body: "After roughly 90 days, we lock cost per qualified lead and scale into new geographies without breaking quality.",
    goal: "Goal: Predictable volume. Aggressive growth.",
  },
  {
    phase: "A3",
    title: "Micro Analysis and Redistribution",
    body: "Analyze by day, hour, source, and region. Reallocate budget toward the segments that actually produce sales-ready leads.",
    goal: "Goal: Squeeze every rupee from your lead budget.",
  },
];

const caseStudies: CaseStudy[] = [
  {
    name: "Kashti (Loan Aggregator)",
    niche: "Pan-India Lead Gen",
    metrics: [
      { label: "Ad Spend", value: "Rs. 30L" },
      { label: "CPQL", value: "Rs. 1,250" },
      { label: "Regions", value: "12" },
      { label: "Scale Time", value: "90 days" },
    ],
    result: "RESULT: 4x growth in disbursed loan volume with stable CPQL.",
  },
  {
    name: "International Schooling",
    niche: "Global Ed-Tech",
    metrics: [
      { label: "Ad Spend", value: "Rs. 18L" },
      { label: "CPQL", value: "Rs. 940" },
      { label: "Intent Score", value: "High" },
      { label: "Regions", value: "3 hubs" },
    ],
    result: "RESULT: Transitioned from generic targeting to intent-based creative signals.",
  },
  {
    name: "Right Source Aviation",
    niche: "High-Ticket Training",
    metrics: [
      { label: "Lead Quality", value: "+38%" },
      { label: "CPL", value: "-12%" },
      { label: "Show Rate", value: "+31%" },
      { label: "Scale Time", value: "8 weeks" },
    ],
    result: "RESULT: Scaled from single-city to 4 regional hubs with consistent quality.",
  },
];

const fitItems = [
  "You spend Rs. 3L+ monthly on Meta lead generation",
  "Sales teams complain about junk or low-intent leads",
  "You need regional or multi-city scale",
  "You sell loans, education, or high-ticket services",
  "You want predictable, quality-controlled growth",
];

const notFitItems = [
  "You want cheap leads at any cost",
  "You have no sales process after the lead form",
  "You are a small local business with no scale plan",
  "You expect results without testing or feedback loops",
];

const team = [
  {
    name: "Mausam Arora",
    role: "Founder, Acquirely",
    image: mausamImage,
  },
  {
    name: "Kunal Mandal",
    role: "Lead Gen and Media Ops",
    image: kunalImage,
  },
];

const faqs: FaqItem[] = [
  {
    question: "How is this different from a normal lead gen agency?",
    answer:
      "Most agencies optimize for lead volume. We optimize for sales intent. Our team studies lead quality signals, sales outcomes, and regional performance every day so the media plan improves with business feedback, not just ad metrics.",
  },
  {
    question: "Will you work with our in-house sales team?",
    answer:
      "Yes. That is a core part of the system. We use sales feedback, call outcomes, and conversion patterns to improve campaign quality and reduce waste.",
  },
  {
    question: "Do you only work with Meta ads?",
    answer:
      "Meta is the primary acquisition engine in this offer, but we shape the full lead journey so the media, creative, and qualification layers work together.",
  },
  {
    question: "How fast can we start?",
    answer:
      "Once onboarding inputs are ready, we can move quickly. We build the initial testing framework first and then ramp toward stable qualified-lead economics.",
  },
];

function GradientButton({
  children,
  href = "#contact",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-8 py-4 text-center text-sm font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.18)] transition-transform duration-200 hover:-translate-y-0.5 sm:text-base ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionTitle({
  title,
  subtitle,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2
        className={`text-3xl font-extrabold leading-tight sm:text-4xl ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-7 ${dark ? "text-blue-100/85" : "text-slate-600"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50/80 px-6 py-5">
        <h3 className="text-lg font-bold text-slate-900">{study.name}</h3>
        <p className="mt-1 text-xs text-slate-600">{study.niche}</p>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="space-y-0">
          {study.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex items-center justify-between py-3 text-sm ${
                index !== study.metrics.length - 1 ? "border-b border-slate-200" : ""
              }`}
            >
              <span className="text-slate-600">{metric.label}</span>
              <span className="font-bold text-slate-900">{metric.value}</span>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-xs font-bold uppercase leading-5 tracking-[0.04em] text-emerald-600">
          {study.result}
        </div>
      </div>
    </article>
  );
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-sm font-bold text-slate-900 sm:text-base">{faq.question}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg font-medium text-slate-500">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-7 text-slate-600">{faq.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

function FounderCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{name}</h3>
      <p className="mt-1 text-sm text-slate-600">{role}</p>
    </div>
  );
}

export default function DoneForYouLandingPage() {
  return (
    <main className="bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 lg:px-8">
          <Link href="/done-for-you" className="text-2xl  font-bold tracking-[-0.04em] text-slate-900">
            ACQUIRELY
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
            <a href="#system" className="transition-colors hover:text-slate-900">
              System
            </a>
            <a href="#results" className="transition-colors hover:text-slate-900">
              Results
            </a>
            <a href="#pricing" className="transition-colors hover:text-slate-900">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-slate-900">
              FAQ
            </a>
          </nav>
          <GradientButton className="px-5 py-3 text-sm" href="#contact">
            Apply Now
          </GradientButton>
        </div>
      </header>

      <section className="px-5 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,502px)] lg:gap-16">
          <div className="max-w-2xl">
            <h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] text-slate-900 sm:text-5xl sm:leading-[1.12]">
              Running Facebook for Leads! But Your Sales Team Calls Them Junk.
            </h1>
            <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-slate-600">
              The gap between "qualified lead" and "ROI disappears" is where your ROI disappears..
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
             We fix the leak.
Our A3 Flywheel for Lead Gen optimizes for cost per qualified
lead — not cost per lead. Built for online and multi-location
brands (loans, education, high-ticket services).
Same ad spend. Better lead quality. Predictable scale.
            </p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-800 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-blue-600 text-[10px] text-blue-600">
                    +
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <GradientButton className="w-full max-w-[400px]" href="#contact">
                👉 Get Leads Your Sales Team Will Love
              </GradientButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[602px]">
              <div className="relative overflow-hidden rounded-xl bg-slate-50">
                <Image
                  src={dashboardImage}
                  alt="Lead generation dashboard preview"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Every Unqualified Lead Is a Tax on Your Growth."
            subtitle="Most agencies chase cheap lead volume. We focus on what happens after the form fill and before revenue."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">What Most Agencies Optimize For</h3>
              <ul className="mt-6 space-y-4 text-base text-slate-600">
                {optimizeFor.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">What Actually Matters</h3>
              <ul className="mt-6 space-y-4 text-base text-slate-600">
                {actuallyMatters.map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className={`mt-2 h-2 w-2 rounded-full ${index === 0 ? "bg-blue-600" : "bg-slate-300"}`} />
                    <span className={index === 0 ? "font-semibold text-slate-800" : ""}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium leading-7 text-slate-800">
            Cost per qualified lead compounds profit. Everything else is just a vanity metric if the
            sales team cannot close the lead.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(420px,502px)]">
          <div>
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Meta&apos;s Algorithm Made Lead Gen Harder. We Made It Smarter.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              With updates like Andromeda, Meta&apos;s AI now prioritizes creative signals over
              interest targeting. Lead forms still work, but scaling without structure now kills
              lead quality.
            </p>
            <div className="mt-8">
              <p className="text-base font-bold text-slate-900">Most brands kept doing the same:</p>
              <div className="mt-4 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
                {sameMistakes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold text-[#51A2FF]">The game changed. We leaned in.</h3>
            <p className="mt-4 text-base leading-8 text-white">
              After analyzing Rs. 30Cr+ in lead gen ad spend across loans, education, aviation, and
              real estate, we built the A3 Flywheel: a lead intelligence engine for the new Meta era.
            </p>
          </div>
        </div>
      </section>

      <section id="system" className="bg-[#F7F9FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="The System That Scales Lead Volume Without Crashing Quality."
            subtitle="A closed-loop acquisition system built to test, lock economics, and redistribute budget with discipline."
          />

          <div className="mt-14 flex justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-4 border-dashed border-slate-200 bg-white shadow-inner">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-slate-200/70">
                <div className="max-w-[120px] text-center text-base font-bold leading-6 text-slate-900">
                  A3 Lead Flywheel
                </div>
              </div>
              {["A1", "A2", "A3"].map((item, index) => {
                const positions = [
                  "top-[-10px] left-1/2 -translate-x-1/2",
                  "bottom-[-10px] left-[-10px]",
                  "bottom-[-10px] right-[-10px]",
                ];
                return (
                  <div
                    key={item}
                    className={`absolute ${positions[index]} flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-sm font-bold text-white shadow-lg`}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {flywheelSteps.map((step) => (
              <div key={step.phase} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-3xl font-extrabold text-slate-900">{step.phase}</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{step.body}</p>
                <p className="mt-5 text-xs font-bold uppercase leading-5 tracking-[0.03em] text-slate-900">
                  {step.goal}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium leading-7 text-slate-600">
            This is not monthly campaign management. It is an operating system for qualified lead
            economics.
          </p>
        </div>
      </section>

      <section id="results" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="From Junk Leads to Predictable Pipelines." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.name} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#F7F9FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Simple, Performance-Aligned Pricing. No Surprises." />
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-[minmax(180px,1fr)_minmax(0,1.6fr)] bg-slate-900 text-white">
              <div className="px-6 py-5 text-sm font-bold">What You Pay For</div>
              <div className="px-6 py-5 text-sm font-bold">How We Price It</div>
            </div>
            {[
              ["Core lead gen management", "Flat monthly retainer based on market complexity"],
              ["Qualified lead focus", "Optimized toward CPQL and downstream sales feedback"],
              ["Creative and ops layer", "Included inside the engagement, not bolted on later"],
            ].map(([left, right], index) => (
              <div
                key={left}
                className={`grid grid-cols-1 border-t border-slate-200 md:grid-cols-[minmax(180px,1fr)_minmax(0,1.6fr)] ${
                  index === 1 ? "bg-blue-50/40" : "bg-white"
                }`}
              >
                <div className="px-6 py-5 text-base font-bold text-slate-900">{left}</div>
                <div className="px-6 py-5 text-base text-slate-600">{right}</div>
              </div>
            ))}
            <div className="flex flex-col gap-5 border-t border-slate-200 px-6 py-8 md:flex-row md:items-center md:justify-between">
              <p className="text-sm font-medium text-slate-600">
                If you already spend on lead gen, this plugs into your current budget and improves what
                it returns.
              </p>
              <GradientButton href="#contact" className="w-full md:w-auto">
                See if You Qualify for Done-For-You Lead Gen
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl bg-slate-900 px-8 py-14 text-center shadow-xl sm:px-16">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            If We Don&apos;t Improve Your Lead Economics, We Work Free.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-100">
            We are not interested in inflating lead counts that your sales team hates. We are here to
            improve lead quality, conversion efficiency, and qualified-lead stability. If we fail to
            improve the system, we absorb the downside.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="This Is for Multi-Location and Online Lead Gen Brands. Not for Local Businesses." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">THIS IS FOR YOU</h3>
              <ul className="mt-8 space-y-4">
                {fitItems.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-slate-600">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">NOT FOR YOU</h3>
              <ul className="mt-8 space-y-4">
                {notFitItems.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-slate-600">
                    <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Not Just Agency Owners. Lead Gen Operators." />
          <div className="mt-12 flex flex-col items-center justify-center gap-12 md:flex-row">
            {team.map((member) => (
              <FounderCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F7F9FC] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle title="Frequently Asked Questions" />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <div id="contact" className="mt-10 flex justify-center">
            <GradientButton className="w-full max-w-[360px]">
              Book A Strategy Call to Fix Lead Quality
            </GradientButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-900 px-5 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-3xl  text-white">ACQUIRELY</div>
            <p className="mt-2 text-sm text-blue-100/60">Built for high-intent, scalable lead growth.</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-blue-100/70">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              in
            </a>
            <a href="mailto:hello@acquirely.in" className="hover:text-white">
              Mail
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
