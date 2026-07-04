"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"
import WhatWeActuallyDo from "@/components/whtaweactuallydo";
import HowWeHelpYou from "@/components/Howwehelpyou";
import Whatyouactuallyget from "@/components/Whatyouactuualyget";

// Icons
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

// Assets (Make sure your paths are correct)
import Star from "@/app/assests/starnew.png";

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

interface PhaseDetailCard {
  label: string;
  title: string;
  desc: string;
}

interface CaseStudy {
  logo: StaticImageData;
  alt: string;
  roas: string;
}

// --- DATA SCULPTING ---

const caseStudiesData: CaseStudy[] = [
  { logo: retroverse, alt: "Retroverse", roas: "ROAS 2.43 to 4.68" },
  { logo: modish, alt: "Modish", roas: "ROAS 2.31 to 3.53" },
  { logo: Nostrain, alt: "No Strain", roas: "ROAS 1.36 to 2.65" },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-white text-[#0F172A]">
      
      {/* --- RIGHT STICKY SOCIAL MEDIA BAR --- */}
      <div className="fixed right-0 top-1/2 z-[9999] flex -translate-y-1/2 flex-col gap-[2px]">
        {/* Facebook */}
        <Link 
          href="https://www.facebook.com/profile.php?id=61578312825291#" 
          className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#1877F2] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
        >
          <Facebook className="h-5 w-5" />
          <span className="max-md:hidden">Facebook</span>
        </Link>
        {/* Instagram */}
        <Link 
          href="https://www.instagram.com/acquirely.in" 
          className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#E4405F] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
        >
          <Instagram className="h-5 w-5" />
          <span className="max-md:hidden">Instagram</span>
        </Link>

        {/* LinkedIn */}
        <Link 
          href="https://www.linkedin.com/company/acquirelydm/" 
          className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#0A66C2] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
        >
          <Linkedin className="h-5 w-5" />
          <span className="max-md:hidden">LinkedIn</span>
        </Link>

        {/* YouTube */}
        <Link 
          href="https://www.youtube.com/@acquirelymedia" 
          className="group relative -right-[110px] flex h-[50px] w-[160px] items-center justify-between rounded-l-md bg-[#FF0000] px-[15px] font-sans text-base font-bold text-white transition-all duration-300 ease-in-out hover:right-0 max-md:right-0 max-md:w-[50px] max-md:justify-center max-md:px-0"
        >
          <Youtube className="h-5 w-5" />
          <span className="max-md:hidden">YouTube</span>
        </Link>
      </div>
      {/* --- END RIGHT STICKY SOCIAL MEDIA BAR --- */}

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pb-16 pt-8 md:pb-[160px] md:pt-[46px]">
        {/* Premium Background Layers */}
        <div className="absolute right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
        <div className="absolute bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
          <Navbar />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:mt-20 lg:gap-12">
            {/* Left Content Column */}
            <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
              <h1 className="font-Montserrat text-[27px] font-extrabold leading-[1.2] tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">
                Scale Profitably With A
                <span className="mt-2 block bg-gradient-to-r from-[#6366F1] to-[#F97316] bg-clip-text text-transparent sm:ml-4 sm:inline sm:mt-0">
                  Proven Performance Marketing <span className="text-[#0F172A]">Agency</span>
                </span>
              </h1>

              <p className="font-opensans mt-5 max-w-[700px] text-[#475569] sm:text-lg md:mt-8 md:text-xl">
               We build a predictable customer acquisition engine, not just Ad campaigns.
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
          <Link  href="/case-studies" className="ml-auto text-sm font-medium text-[#0F172A] transition hover:text-[#0052FF]">
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap md:gap-16">
              {[...caseStudiesData, ...caseStudiesData, ...caseStudiesData].map((study, i) => (
                <div key={i} className="flex shrink-0 items-center gap-3 sm:gap-4">
                  <div className="relative h-6 w-auto max-w-[90px] sm:h-5 sm:max-w-[110px]">
                    <Image src={study.logo} alt={`${study.alt} logo`} className="h-5 w-auto " />
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
              </Link>
        </div>
      </section>

      < WhatWeActuallyDo />
      < HowWeHelpYou />
      < Whatyouactuallyget />
      <Footer />
    </main>
  );
}