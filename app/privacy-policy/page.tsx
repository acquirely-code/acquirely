"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Mail, Calendar, FileText } from "lucide-react";

export default function PrivacyAndTermsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      {/* Premium Background Layers (Matching Homepage) */}
      <div className="fixed right-[-5%] top-[-10%] z-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[60px] md:h-[600px] md:w-[600px]" />
      <div className="fixed bottom-[-10%] left-[-5%] z-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[50px] md:h-[600px] md:w-[600px]" />

      <div className="relative z-10 mx-auto flex min-h-screen flex-col max-w-[1440px] px-4 sm:px-5 md:px-10 lg:px-[80px]">
        
        {/* Navbar Integration */}
        <div className="pt-8 md:pt-[46px]">
          <Navbar />
        </div>

        {/* Page Content Wrapper */}
        <div className="flex-grow py-12 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            
            {/* Header Section */}
            <div className="mb-12 text-center md:mb-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF6FF]">
                <Shield className="h-8 w-8 text-[#2563EB]" />
              </div>
              <h1 className="font-Montserrat text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-6xl">
                Privacy Policy &{" "}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#F97316] bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl font-opensans text-base leading-relaxed text-[#475569] sm:text-lg md:text-xl">
                Everything you need to know about how Acquirely handles your data, protects your privacy, and the terms governing our marketing services.
              </p>
            </div>

            {/* Main Content Card */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-12 lg:p-14">
              
              {/* ---------------- PRIVACY POLICY SECTION ---------------- */}
              <div className="space-y-10">
                <div className="border-b border-[#E2E8F0] pb-5">
                  <h2 className="flex items-center gap-3 font-Montserrat text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                    <Shield className="h-7 w-7 text-[#6366F1]" />
                    Privacy Policy
                  </h2>
                </div>

                {/* Introduction */}
                <section>
                  <p className="font-opensans text-base leading-relaxed text-[#475569] sm:text-lg">
                    Welcome to <span className="font-bold text-[#2563EB]">Acquirely</span>. As a performance marketing agency specializing in ad management and high-converting funnels, we take the privacy of our clients and their customers seriously. This policy outlines how we collect, use, and safeguard the data entrusted to us.
                  </p>
                </section>

                {/* Information Collection */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#3B82F6]"></div>
                    Information We Collect
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <ul className="space-y-4 font-opensans text-base leading-relaxed text-[#475569]">
                      <li>
                        <strong className="text-[#0F172A]">Client Information:</strong> When you partner with us, we collect business details, billing information, and contact details necessary to provide our marketing services.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Marketing & Campaign Data:</strong> We request access to your ad accounts (Meta, Google, etc.), analytics platforms, and funnel builders. We process data generated from these platforms, including pixel data, conversion metrics, and lead information generated via our funnels.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* How We Use Information */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#10B981]"></div>
                    How We Use Your Information
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      We use the collected information strictly to execute performance marketing campaigns, optimize your sales funnels, report on ROAS and campaign metrics, and communicate directly with you regarding strategy and billing. We do not sell your data or your customers' data to third parties.
                    </p>
                  </div>
                </section>

                {/* Third Party Services */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#F59E0B]"></div>
                    Third-Party Platforms
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      To deliver our services, we interact with third-party platforms such as Meta Ads, Google Ads, Shopify, WordPress, and various CRM/funnel software. The data processed through these networks is subject to their respective privacy policies.
                    </p>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#EF4444]"></div>
                    Data Security & Access
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      We implement strict internal access controls to ensure your ad accounts, business managers, and customer data are only accessible to the Acquirely team members directly working on your account. We employ industry-standard security measures to protect your digital assets.
                    </p>
                  </div>
                </section>
              </div>

              {/* ---------------- TERMS OF SERVICE SECTION ---------------- */}
              <div className="mt-16 space-y-10 pt-10 sm:mt-20">
                <div className="border-b border-[#E2E8F0] pb-5">
                  <h2 className="flex items-center gap-3 font-Montserrat text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
                    <FileText className="h-7 w-7 text-[#8B5CF6]" />
                    Terms of Service
                  </h2>
                </div>

                {/* Services Rendered */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#8B5CF6]"></div>
                    Services Provided
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      Acquirely provides performance marketing services, including but not limited to: media buying, ad creative strategy, campaign management, funnel creation, and conversion rate optimization (CRO). Specific deliverables are outlined in your individual client agreement.
                    </p>
                  </div>
                </section>

                {/* Client Responsibilities */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#F97316]"></div>
                    Client Responsibilities & Ad Spend
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <ul className="space-y-4 font-opensans text-base leading-relaxed text-[#475569]">
                      <li>
                        <strong className="text-[#0F172A]">Ad Spend:</strong> The client is solely responsible for funding their ad accounts. Acquirely's management fees do not include ad spend paid to networks like Meta or Google.
                      </li>
                      <li>
                        <strong className="text-[#0F172A]">Assets & Compliance:</strong> The client must provide necessary access, branding assets, and approvals in a timely manner. Clients are responsible for ensuring their products, services, and offers comply with the advertising policies of the platforms we use.
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Liability */}
                <section>
                  <h3 className="mb-5 flex items-center gap-3 font-Montserrat text-xl font-bold text-[#0F172A] sm:text-2xl">
                    <div className="h-8 w-2 rounded-full bg-[#EC4899]"></div>
                    Limitation of Liability
                  </h3>
                  <div className="rounded-xl bg-[#F8FAFC] p-6 sm:p-8">
                    <p className="font-opensans text-base leading-relaxed text-[#475569]">
                      While we utilize proven frameworks (like our A3 Flywheel) to scale brands profitably, marketing is subject to market variables. Unless expressly stated in a specific performance guarantee contract, Acquirely does not guarantee specific revenue outcomes. Furthermore, Acquirely is not liable for account suspensions or bans initiated by third-party ad networks (e.g., Meta, Google).
                    </p>
                  </div>
                </section>
              </div>

              {/* ---------------- CONTACT SECTION ---------------- */}
              <section className="mt-16 pt-10 sm:mt-20">
                <h2 className="mb-6 flex items-center gap-3 font-Montserrat text-2xl font-bold text-[#0F172A] sm:text-3xl">
                  <div className="h-8 w-2 rounded-full bg-[#14B8A6]"></div>
                  Contact Us
                </h2>
                <div className="rounded-xl bg-[linear-gradient(102.78deg,rgba(99,102,241,0.05)_0%,rgba(79,70,229,0.05)_100%)] p-6 border border-[#E2E8F0] sm:p-8">
                  <p className="mb-5 font-opensans text-base leading-relaxed text-[#475569]">
                    If you have any questions about this Privacy Policy, our Terms of Service, or your ongoing campaigns, please don't hesitate to reach out to our team:
                  </p>
                  <div className="flex items-center gap-3 font-Montserrat font-semibold text-[#2563EB]">
                    <Mail className="h-6 w-6" />
                    <a
                      href="mailto:hello@acquirely.in"
                      className="transition-colors duration-200 hover:text-[#1D4ED8] underline decoration-2 underline-offset-4"
                    >
                      hello@acquirely.in
                    </a>
                  </div>
                </div>
              </section>

              {/* Footer Date Stamp */}
              <div className="mt-12 border-t border-[#E2E8F0] pt-8">
                <div className="flex items-center justify-center gap-2 font-opensans text-sm font-medium text-[#64748B]">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: April 2026</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer Integration */}
    
      </div>
          <Footer />
    </main>
  );
}