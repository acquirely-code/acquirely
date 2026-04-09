import Link from "next/link";
import { Check, BarChart2, FileText, Lightbulb, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assests/logo.png";
import success from "@/app/assests/SuccessIcon.png";


export const metadata = {
  title: "Done For You - Thank You",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100">
      
      {/* SECTION 1: HERO / CONFIRMATION */}
      <section className="relative bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] px-5 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32 lg:pt-12">
        <div className="mx-auto max-w-[1440px]">
          {/* Logo Placeholder */}
          <div className="mb-16 md:mb-24 flex justify-center md:justify-start">
          <Image src={logo} alt="Acquirely Logo" />
          </div>

          <div className="mx-auto flex max-w-[823px] flex-col items-center text-center">
            {/* Success Icon */}
            <Image src={success} alt="Success Icon" className="mb-6 h-16 w-16" />
            {/* Heading */}
            <h1 className="mb-6 text-[36px] font-Montserrat leading-tight tracking-[-1.4px] sm:text-[48px] lg:text-[56px] lg:leading-[56px]">
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text font-Montserrat text-transparent">
                Your Growth Diagnosis Call Is Confirmed.
              </span>
            </h1>

            {/* Subtext */}
            <p className="mx-auto max-w-[766px] text-[18px] leading-[28px] text-white sm:text-[20px]">
              We've received your request. Please check your email for the calendar
              invite. Our team will reach out within 24 hours to confirm your
              scheduled call.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT HAPPENS NEXT */}
      <section className="bg-[#FAFAFA] px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-[768px]">
          <h2 className="mb-10 text-center  font-Montserrat text-[32px]  leading-9 text-[#171717] sm:text-[40px]">
            What Happens Next
          </h2>

          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-sm sm:p-10">
              <h3 className="mb-4 font-Montserrat text-[20px]  leading-[28px] text-[#171717]">
                1. Brand & Performance Review
              </h3>
              <p className="text-[16px] leading-[28px] text-[#525252] sm:text-[18px]">
                We analyze your current Meta Ads account, creative approach, growth
                stage, and founder profile(s) before the call. This ensures our time
                together is crisp and solution-oriented.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-sm sm:p-10">
              <h3 className="mb-4 font-Montserrat text-[20px] font-semibold leading-[28px] text-[#171717]">
                2. Strategy Meeting (30–45 minutes)
              </h3>
              <p className="text-[16px] leading-[28px] text-[#525252] sm:text-[18px]">
                Our strategists walk you through an initial assessment of your
                scaling blockers. Together, we'll determine if the A3 Flywheel Model
                is the right fit and outline a clear next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHILE YOU WAIT */}
      <section className="bg-white px-5 py-4 sm:px-6 md:py-4 lg:px-8">
        <div className="mx-auto max-w-[1024px]">
          <h2 className="mb-10 text-center font-Montserrat text-[32px] font-bold leading-9 text-[#171717] sm:text-[40px]">
            While You Wait
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Link Card 1 */}
            <Link
              href="#"
              className="flex flex-col items-start rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#DBFCE7]">
                <BarChart2 className="h-5 w-5 text-[#00A63E]" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-Montserrat text-[18px] font-semibold leading-[28px] text-[#171717]">
                  Client results
                </h3>
                <ArrowRight className="h-4 w-4 text-[#A3A3A3]" />
              </div>
            </Link>

            {/* Link Card 2 */}
            <Link
              href="#"
              className="flex flex-col items-start rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#DBEAFE]">
                <FileText className="h-5 w-5 text-[#155DFC]" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-Montserrat text-[18px] font-semibold leading-[28px] text-[#171717]">
                  A3 Flywheel methodology
                </h3>
                <ArrowRight className="h-4 w-4 text-[#A3A3A3]" />
              </div>
            </Link>

            {/* Link Card 3 */}
            <Link
              href="#"
              className="flex flex-col items-start rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#F3E8FF]">
                <Lightbulb className="h-5 w-5 text-[#9810FA]" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="font-Montserrat text-[18px] font-semibold leading-[28px] text-[#171717]">
                  Daily insights
                </h3>
                <ArrowRight className="h-4 w-4 text-[#A3A3A3]" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRUST STATEMENT */}
      <section className="bg-[#FAFAFA] px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-[856px] text-center">
          <p className="text-[22px] leading-[32px] text-[#525252] sm:text-[26px] md:text-[30px] md:leading-[36px]">
            "No pressure. No vague promises.<br className="hidden sm:block" /> Just an
            honest, data-driven assessment of what it will take to get you to
            predictable growth."
          </p>
        </div>
      </section>

      {/* SECTION 5: CONTACT & FINAL REASSURANCE */}
      <section className="border-t border-[#E5E5E5]/20 bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto flex max-w-[672px] flex-col items-center text-center">
          {/* Contact Support */}
          <div className="mb-16 flex flex-col items-center gap-4">
            <h3 className="font-Montserrat text-[24px]  leading-[28px] text-white sm:text-[30px]">
              Have a Question Before We Talk?
            </h3>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[16px] font-opensans leading-[28px] text-white sm:text-[18px]">
                Reply to the confirmation email or reach out directly:
              </p>
              <a
                href="mailto:team@acquirely.com"
                className="flex items-center gap-2 text-[16px] leading-[28px] text-white transition-opacity hover:opacity-80 sm:text-[18px]"
              >
                <Mail className="h-5 w-5" />
                team@acquirely.com
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-16 h-px w-16 bg-[#D4D4D4]"></div>

          {/* Final Reassurance */}
          <div className="mb-10 px-5">
            <p className="text-[18px] font-opensans leading-[28px] text-white sm:text-[20px]">
              We look forward to helping you build a growth system that actually
              scales you past ₹10L of monthly ad spend to ₹50L+ — profitably.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/"
            className="inline-flex h-[60px] w-full max-w-[283px] items-center justify-center gap-2 rounded-lg bg-[#171717] px-8 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-colors hover:bg-black"
          >
            <span className="font-Montserrat text-[16px] font-medium leading-[28px] text-white sm:text-[18px]">
              Explore Case Studies
            </span>
            <ArrowRight className="h-5 w-5 text-white" />
          </Link>
        </div>
      </section>
    </div>
  );
}