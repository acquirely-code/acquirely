"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Send, CheckCircle2, Star } from "lucide-react";
import logo from "@/app/assests/logo.png";

export default function ApplyNowPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#101828] px-4 text-center">
        <div className="max-w-md">
          <CheckCircle2 className="mx-auto h-16 w-16 text-[#34D399]" />
          <h2 className="mt-6 font-montserrat text-3xl font-bold text-white">Application Received!</h2>
          <p className="mt-4 font-open-sans text-[#A3A3A3]">
            Our growth experts are reviewing your details. We'll get back to you within 24 hours.
          </p>
          <Link href="/" className="mt-8 inline-block text-[#818CF8] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      {/* Header/Hero Style Section */}
      <section className="relative isolate overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] pb-20 pt-7 text-white">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <Link href="/">
            <Image src={logo} alt="Brand Logo" width={100} height={24} className="h-6 w-auto" />
          </Link>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 border border-[#4338CA] bg-[#312E81] px-3 py-2 text-[12px] font-semibold uppercase tracking-[1.2px] text-[#A5B4FC]">
                <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                Direct Application Portal
              </div>
              
              <h1 className="mt-6 text-[40px] font-extrabold leading-[1.1] text-white lg:text-[48px]">
                Ready to Scale to
                <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_25%,#F97316_80%)] bg-clip-text text-transparent">
                  Rs.50L+ Monthly?
                </span>
              </h1>
              
              <p className="mt-6 max-w-[500px] font-['Open_Sans'] text-[18px] leading-[28px] text-white/80">
                Fill out the form to see if your brand qualifies for our A3 Flywheel scaling system.
              </p>

              <div className="mt-10 space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0.5 text-[#FFA227]">
                       {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                    <span className="text-sm font-semibold">4.9/5 Rating from 80+ Brands</span>
                 </div>
                 
                 {/* WhatsApp Quick Link */}
                 <a 
                  href="https://wa.me/919588368052" 
                  className="mt-4 flex w-fit items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10"
                >
                  <MessageCircle className="text-[#25D366]" />
                  <div>
                    <p className="text-sm font-bold text-white">Instant Query?</p>
                    <p className="text-xs text-[#94A3B8]">Chat with us on WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: The Application Form */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-[#818CF8] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">Business Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-[#818CF8] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">Brand Website / URL</label>
                  <input 
                    required
                    type="url" 
                    placeholder="https://"
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-[#818CF8] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">Current Monthly Ad Spend</label>
                  <select className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:bg-[#1A1560]">
                    <option className="bg-[#0F0C29]">Below Rs. 1L</option>
                    <option className="bg-[#0F0C29]">Rs. 1L - Rs. 3L</option>
                    <option className="bg-[#0F0C29]">Rs. 3L - Rs. 10L</option>
                    <option className="bg-[#0F0C29]">Above Rs. 10L</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A5B4FC]">Biggest Growth Bottleneck?</label>
                  <textarea 
                    rows={2}
                    className="w-full border-b border-white/20 bg-transparent py-2 text-white outline-none focus:border-[#818CF8] transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-6 flex h-[56px] w-full items-center justify-center gap-2 bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] font-bold text-white transition hover:brightness-110"
                >
                  Submit Application
                  <ArrowRight size={18} />
                </button>

                <p className="text-center text-[11px] text-[#94A3B8]">
                  By clicking submit, you agree to our terms. Data is secured.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Similar to your QualificationStats section */}
      <section className="bg-[#F6F6F6] py-10">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-[#707984]">
            Trusted by founders scaling on Meta
          </p>
        </div>
      </section>
      
    
    </main>
  );
}