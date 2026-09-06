import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import acquirelyLogo from "@/app/assests/logo.png";

export const metadata = {
  title: "You're Booked | Acquirely",
  description: "Thank you for booking your call with Acquirely. Here's what happens next.",
  robots: {
    index: false,
    follow: false,
  },
};

const nextSteps = [
  {
    title: "You'll get the details",
    description: "Calendar invite with the Zoom link, plus a WhatsApp reminder before we speak.",
  },
  {
    title: "On the call — a real diagnosis",
    description:
      "We show you why the right decision-makers aren't seeing you, and map the first campaign to get principals and directors booking meetings with you. A working session, not a pitch.",
  },
];

export default function EdTechThankYouPage() {
  return (
    <main className="min-h-screen bg-white font-opensans text-[#172554]">
      <div className="h-1.5 bg-[#fbbf24]" />

      <section className="relative overflow-hidden bg-[radial-gradient(520px_300px_at_85%_15%,rgba(96,165,250,0.24),transparent_65%),linear-gradient(145deg,#fff_0%,#f5f9ff_58%,#eff6ff_100%)]">
        <div className="mx-auto flex w-[min(720px,92vw)] flex-col items-center py-10 sm:py-14">
          <Image
            src={acquirelyLogo}
            alt="Acquirely"
            className="mb-10 h-auto w-[140px] brightness-0 saturate-100 [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(27%)_saturate(1725%)_hue-rotate(181deg)_brightness(88%)_contrast(96%)] sm:w-[156px]"
            priority
          />

          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#fbbf24] text-[#172554] shadow-[0_16px_40px_-14px_rgba(251,191,36,0.85)]">
            <Check className="h-10 w-10 stroke-[3]" />
          </div>

          <span className="mb-4 inline-flex items-center rounded-full border border-[#d5e6ff] bg-[#eef5ff] px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#2563eb]">
            School Vendors Thank You
          </span>

          <h1 className="max-w-[11ch] text-center text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-[#172554]">
            You&apos;re booked.
          </h1>

          <p className="mt-4 max-w-[44ch] text-center text-[clamp(1rem,2vw,1.12rem)] leading-7 text-[#64748b]">
            Your call is confirmed. A calendar invite and a{" "}
            <span className="font-bold text-[#172554]">WhatsApp confirmation</span>{" "}
            are on their way. Check your inbox and spam, just in case.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto flex w-[min(720px,92vw)] flex-col gap-6">
          <div className="rounded-[28px] border border-[#dbe7f5] bg-white p-6 shadow-[0_14px_32px_-24px_rgba(37,99,235,0.24)] sm:p-8">
            <div className="mb-5 inline-flex items-center rounded-full border border-[#d5e6ff] bg-[#eef5ff] px-4 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#2563eb]">
              What Happens Next
            </div>

            <div className="flex flex-col gap-5">
              {nextSteps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-[#e7eef9] bg-[#fbfdff] p-4 sm:p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eff6ff] text-sm font-extrabold text-[#2563eb]">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold leading-6 tracking-[-0.02em] text-[#172554]">{step.title}</h2>
                    <p className="mt-1 text-[0.97rem] leading-7 text-[#64748b]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#cfe1ff] bg-[linear-gradient(180deg,#f8fbff,#f3f8ff)] p-7 text-center shadow-[0_14px_32px_-24px_rgba(37,99,235,0.24)] sm:p-8">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#172554]">
              We&apos;re looking forward to meeting you.
            </h2>
            <p className="mx-auto mt-3 max-w-[54ch] text-[1rem] leading-7 text-[#52647e]">
              And to understanding how we can help you become more visible and reach the decision-makers you&apos;re after.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#dbe7f5] bg-white p-6 text-center shadow-[0_14px_32px_-24px_rgba(37,99,235,0.24)] sm:p-8">
            <p className="text-[1rem] leading-7 text-[#64748b]">
              You&apos;ll speak directly with <span className="font-bold text-[#172554]">Mausam Arora, co-founder</span> — 11+ years inside education, 2,000+ schools reached. No juniors, no hand-off.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#94a3b8]">
              Need to reschedule? Just use the link in your calendar invite.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dbe7f5] bg-[#172554] py-8 text-center text-sm text-[#cfd8e9]">
        <div className="mx-auto flex w-[min(720px,92vw)] flex-col items-center gap-4">
          <Image src={acquirelyLogo} alt="Acquirely" className="h-auto w-[118px] brightness-0 invert" />
          <p className="max-w-[48ch] leading-6">
            Need anything before the call? Write to{" "}
            <Link href="mailto:team@acquirely.in" className="font-semibold text-white transition-opacity hover:opacity-80">team@acquirely.in</Link>.
          </p>
        </div>
      </footer>
    </main>
  );
}
