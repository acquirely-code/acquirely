import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Star from "@/app/assests/starnew.png";
import Image from "next/image";
import flywheelImage from "@/app/assests/flywheelmodel.png";
import Video1 from "@/app/assests/video1.png"
import video2 from "@/app/assests/video2.png"
import video3 from "@/app/assests/video3.png"

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  LayoutDashboard,
  Play,
  Search,
  Activity,
  Layers,
  Fuel,
  Zap,
  ArrowUpWideNarrow ,
} from "lucide-react";
const services = [
  { title: "Meta Ads Management", icon: <LayoutDashboard className="h-6 w-6" /> },
  { title: "Google Ads Management", icon: <Search className="h-6 w-6" /> },
  { title: "Ad Creatives Strategy & Testing", icon: <Zap className="h-6 w-6" /> },
  { title: "Funnel Optimisation", icon: <ArrowUpWideNarrow  className="h-6 w-6" /> },
  { title: "Conversion Improvements", icon: <Activity className="h-6 w-6" /> },
  { title: "Scaling Frameworks", icon: <Layers className="h-6 w-6" /> },
];

const studies = [
  "Retroverse- ROAS 2.5 to 4.39",
  "Modish- ROAS 1.43 to 2.34",
  "No Strain ROAS ___ to",
  "Ayurveda ____ to_",
];

const testimonials = [
  { image: Video1, role: "Founder, Retroverse" },
  { image: video2, role: "Marketing Head, Modish" },
  { image: video3 , role: "CEO, No Strain" },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)]">
        <div className="mx-auto max-w-[1440px] px-4 pb-16 pt-6 md:px-8 md:pb-24 md:pt-10 lg:px-20 lg:pb-32">
          
          <Navbar />

          {/* HERO CONTENT */}
          <div className="mx-auto mt-16 max-w-[980px] text-center md:mt-28">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Scale Profitably With
              <br className="hidden sm:block" />
              {" "}A Proven
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}
                Performance
              </span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}Marketing Agency
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] px-4 text-base leading-relaxed text-white/80 sm:text-lg md:mt-8 md:text-xl">
              Grow from ₹10L to ₹1Cr+ monthly with data-driven Meta Ads
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-8 py-4 text-base font-bold text-white shadow-[0_10px_15px_-3px_rgba(99,102,241,0.25)] transition hover:scale-[1.02] md:mt-10 md:px-10 md:py-5 md:text-lg">
              Book a Growth Call Here!
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CASE STUDIES MARQUEE */}
      <section className="border-y border-[#E2E8F0] bg-white py-6 md:py-8">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap px-5 md:gap-16 md:px-10">
          <span className="text-[10px] font-bold uppercase tracking-[1.4px] text-[#64748B] md:text-xs">
                Real Case Studies:
              </span>
          {[...studies, ...studies, ...studies].map((item, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4">
              <span className="text-sm font-opensans font-bold text-[#0F172A] md:text-lg">
                {item}
              </span>
              <Image src={Star} alt="Star" className="h-4 ml-6 w-4" />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#F8FAFC] py-6 md:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-sm">
              What We Actually Do
            </p>
            <h2 className="mt-3 text-3xl font-Montserrat font-bold leading-tight text-[#0F172A] md:mt-4 md:text-4xl">
              Our Performance Marketing Services
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366F1]/10 text-[#0F172A]">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0F172A] md:mt-6 md:text-xl">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLYWHEEL SECTION */}
      <section className="bg-[#F8FAFC]/40 py-6 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-sm">
              How We Help You Grow
            </p>
            <h2 className="mx-auto font-Montserrat mt-3 max-w-[850px] text-3xl font-bold leading-tight text-[#0F172A] md:mt-5 md:text-4xl lg:text-5xl">
              We Build A Compounding Model for Modern
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}
                Performance Marketing Services
              </span>
            </h2>
          </div>

          <div className="mt-12 rounded-[24px] border border-white bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)] md:mt-20 md:rounded-[32px] md:p-8 lg:p-14">
           <Image src={flywheelImage} alt="Flywheel Model" className="md:w-full " />
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-[#F8FAFC] px-4 py-6 md:px-5 md:py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-10 rounded-[24px] bg-[linear-gradient(90deg,#07112E_0%,#111D52_100%)] px-6 py-10 text-center shadow-[0_20px_40px_rgba(15,23,42,0.15)] md:rounded-[32px] md:px-10 md:py-14 lg:flex-row lg:text-left">
          <div>
            <h2 className="text-2xl font-Montserrat font-bold text-white md:text-4xl lg:text-5xl">
              What You Will Get
            </h2>

            <div className="mt-6 flex flex-col items-center gap-4 md:mt-8 lg:items-start lg:gap-5">
              {["Predictable ROAS", "Scalable creatives", "Data-backed growth"].map((item) => (
                <div key={item} className="flex font-opensans  items-center gap-3 md:gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6366F1] md:h-7 md:w-7">
                    <Check className="h-3 w-3 text-white md:h-4 md:w-4" />
                  </div>
                  <span className="text-base text-white/90 md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full rounded-full  font-Montserrat bg-white px-8 py-4 text-sm font-bold text-[#0F172A] shadow-xl transition hover:scale-[1.02] sm:w-auto md:px-10 md:py-5 md:text-lg">
            Book a Funnel Review Meeting!
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 md:py-16">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[1.5px] text-[#6366F1] md:text-sm">
              Client&apos;s Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-Montserrat font-bold text-[#0F172A] md:mt-4 md:text-4xl">
              Our Clients Speak Volume!
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((item) => (
              <div key={item.role} className="group relative overflow-hidden rounded-2xl">
                <Image src={item.image} alt={item.role} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[linear-gradient(90deg,#07112E_0%,#111D52_100%)] px-5 py-16 text-center md:py-28">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-3xl font-bold font-Montserrat leading-tight text-white md:text-4xl lg:text-5xl">
            Ready to Grow Without Guesswork?
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base leading-relaxed text-white/70 md:mt-6 md:text-lg md:leading-8">
            Partner with a performance marketing agency that focuses on real business outcomes.
          </p>
          <button className="mt-8 font-Montserrat rounded-full bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_130%)] px-8 py-4 text-base font-bold text-white shadow-[0_10px_5px_-3px_rgba(99,102,241,0.25)] transition hover:scale-[1.02] md:mt-10 md:px-10 md:py-5 md:text-lg">
            Book Your Free Call!
          </button>
        </div>
      </section>

      <Footer />
      
    </main>
  );
}