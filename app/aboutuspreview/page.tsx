"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  Layers3,
  LineChart,
  Shield,
  GitBranch,
  TrendingUp,
  Target,
  Users,
  CheckCircle2,
  Zap,
  BarChart,
  ShoppingBag,
  UserCircle,
  Store,
  UserCheck,
  Layers,
  Eye,
} from "lucide-react";

import Collabration from "@/app/assests/officecollab.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";
import flywheelImage from "@/app/assests/flywheelmodel.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Montserrat, Open_Sans } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

function SmallLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded border border-[#CFD5FD] bg-[#EDEFFF] px-3 py-1.5 sm:px-4 sm:py-2">
      <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
      <span className="font-['Inter'] text-[11px] sm:text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
        {children}
      </span>
    </div>
  );
}

function CheckBullet({ color = "#10B981" }: { color?: string }) {
  return (
    <span className="mt-0.5 inline-flex shrink-0 items-center justify-center" style={{ color }}>
      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.2} />
    </span>
  );
}

const modelCards = [
  {
    badge: "A1",
    title: "Identify Winners",
    description: "We test multiple creatives, angles, and messages to understand what actually drives conversions. Every campaign is designed to generate insights not just clicks.",
    points: ["Faster learning", "Clear winning patterns", "Stronger scaling foundation"],
  },
  {
    badge: "A2",
    title: "Scale What Performs",
    description: "Winning campaigns are scaled using real performance signals not guesswork. Budgets increase only when data supports it, ensuring stability while growing.",
    points: ["Better ROAS", "Controlled growth", "Reduced scaling risk"],
  },
  {
    badge: "A3",
    title: "Improve Continuously",
    description: "We use insights from live campaigns to refine creatives and strategy. Each cycle improves the next making your marketing stronger over time.",
    points: ["Lower acquisition cost", "Better creatives", "Long-term consistency"],
  },
];

const differentiators = [
  {
    icon: <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "We take ownership",
    text: "No hiding behind vanity metrics. If ROAS isn't moving, we say so and fix it — we don't reframe the data to look good.",
    bg: "bg-[#EEEDFE]",
    color: "text-[#7C6FF7]",
  },
  {
    icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "We test with purpose",
    text: "Every creative, every audience, every budget move is tied to a hypothesis. We don't \"try things\" — we run structured experiments.",
    bg: "bg-[#FAEEDA]",
    color: "text-[#E8834A]",
  },
  {
    icon: <Layers className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "We build systems, not campaigns",
    text: "Our A3 flywheel means every test makes the next one smarter. Your results compound over time instead of resetting every month.",
    bg: "bg-[#E1F5EE]",
    color: "text-[#1D9E75]",
  },
  {
    icon: <Eye className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "We're radically transparent",
    text: "You'll always know where your money is going and why. Weekly reports, live dashboards, no black-box surprises at month end.",
    bg: "bg-[#E6F1FB]",
    color: "text-[#185FA5]",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827]">
      {/* HERO SECTION (Merged Dark Theme with HTML Messaging) */}
   <section className="relative overflow-hidden bg-white pb-16 pt-6 sm:pb-24 sm:pt-10">
        {/* Background Blur Effects (Lowered opacity for light mode) */}
        <div className="absolute right-[-5%] top-[-10%] z-0 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[60px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] z-0 h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[50px]"></div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-20">
          
          <Navbar />

          <div className="mx-auto mt-16 max-w-[1000px] text-center sm:mt-24">
            <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-[#EEEDFE] px-4 py-2 text-xs font-bold text-[#534AB7]">
              <Store className="h-4 w-4" />
              <span>About Acquirely</span>
            </div>

            <h1 className="font-Montserrat text-3xl font-bold leading-[1.2] tracking-[-1px] text-[#0F172A] sm:text-5xl md:text-[64px] md:leading-[1.1] md:tracking-[-2px]">
              We Started This Because<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}We Couldn&apos;t Find It.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] font-opensans text-sm leading-6 text-[#64748B] sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              We looked for a performance marketing agency we&apos;d trust with our own money. We couldn&apos;t find one. So we built Acquirely — the agency we wished existed.
            </p>

            {/* Metrics Row from HTML Design */}
            <div className="mx-auto mt-12 grid max-w-[800px] grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-6 text-center shadow-sm transition hover:border-[#E2E8F0] hover:shadow-md">
                <div className="font-Montserrat text-3xl font-extrabold text-[#0F172A] md:text-4xl">
                  <span className="text-[#6366F1]">₹30</span>Cr+
                </div>
                <div className="mt-2 font-opensans text-sm text-[#64748B]">Ad spend managed across brands</div>
              </div>
              
              <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-6 text-center shadow-sm transition hover:border-[#E2E8F0] hover:shadow-md">
                <div className="font-Montserrat text-3xl font-extrabold text-[#0F172A] md:text-4xl">
                  <span className="text-[#6366F1]">50</span>+
                </div>
                <div className="mt-2 font-opensans text-sm text-[#64748B]">D2C brands scaled</div>
              </div>
              
              <div className="rounded-2xl border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-6 text-center shadow-sm transition hover:border-[#E2E8F0] hover:shadow-md sm:col-span-1">
                <div className="font-Montserrat text-3xl font-extrabold text-[#0F172A] md:text-4xl">
                  <span className="text-[#6366F1]">4.68</span>x
                </div>
                <div className="mt-2 font-opensans text-sm text-[#64748B]">Peak ROAS delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / COLLABORATION */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-4 sm:px-6 md:gap-16 lg:grid-cols-2 lg:px-0">
          <div className="order-2 lg:order-1">
            <SmallLabel>Who We Are</SmallLabel>

            <h2 className="mt-4 font-Montserrat text-2xl font-extrabold leading-snug text-[#1A1A1A] sm:mt-6 sm:text-4xl lg:text-5xl lg:leading-tight">
              Best Performance Marketing Company
            </h2>

            <div className="mt-5 space-y-4 font-opensans text-sm leading-6 text-[#64748B] sm:mt-8 sm:space-y-6 sm:text-base sm:leading-8 md:text-lg">
              <p>
                Since 2025, we have been helping premium brands achieve
                profitable and scalable growth through structured performance
                marketing services.
              </p>

              <p>
                Our approach blends strategy, creative testing, data, and smart
                scaling to deliver results that last.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Image src={Collabration} alt="Collabration" className="w-full rounded-2xl object-cover shadow-lg" />
          </div>
        </div>
      </section>

      {/* ORIGIN STORY (From HTML) */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SmallLabel>Why we exist</SmallLabel>
              <h2 className="mt-4 font-Montserrat text-2xl font-extrabold leading-tight text-[#0F172A] sm:mt-5 sm:text-4xl md:text-[40px]">
                We&apos;ve Been on the <span className="text-[#4F46E5]">Client Side.</span> We Know How It Feels.
              </h2>
              <div className="mt-6 space-y-4 font-opensans text-sm leading-[1.75] text-[#64748B] sm:mt-8 sm:space-y-5 sm:text-base md:text-[17px]">
                <p>
                  When we were scaling Propel&apos;s Immersion conference and running marketing for UMG, we did what any founder does — we went looking for a performance marketing agency to trust with our budget.
                </p>
                <p>
                  What we found was frustrating. Agencies that couldn&apos;t explain their own strategies. Account managers who weren&apos;t confident in their own recommendations. Promises of results with zero accountability when they didn&apos;t come.
                </p>
                <p>
                  Nobody was willing to take real ownership. So we stopped looking and started building — an agency run by people who&apos;ve sat in the client&apos;s chair and know exactly what it feels like when the money&apos;s on the line.
                </p>
              </div>
            </div>
            
            <div className="rounded-[24px] bg-[#0F172A] p-8 shadow-2xl sm:p-12">
              <span className="mb-4 block font-serif text-[60px] leading-[0.6] text-[#818CF8]">
                &quot;
              </span>
              <div className="font-Montserrat text-xl font-bold leading-relaxed text-white sm:text-2xl">
                We couldn&apos;t find an agency we&apos;d trust with our own money. So we built one.
              </div>
              <div className="mt-8 font-opensans text-sm text-white/50">
                <strong className="font-semibold text-white/90">Mausam Arora</strong> — Founder, Acquirely
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT (From HTML) */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="text-center sm:text-left">
            <SmallLabel>What makes us different</SmallLabel>
            <h2 className="mt-4 font-Montserrat text-2xl font-bold text-[#0F172A] sm:mt-5 sm:text-3xl lg:text-4xl">
              We Think Like Founders, Not Account Managers
            </h2>
            <p className="mt-4 font-opensans text-sm text-[#64748B] sm:text-base md:text-lg">
              Every decision we make is one we&apos;d make if it were our own money at stake.
            </p>
          </div>

          <div className="mt-10 grid font-opensans gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition hover:border-[#CBD5E1] hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-Montserrat text-base font-bold text-[#0F172A] sm:text-[17px]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#64748B] sm:text-[15px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLYWHEEL MODEL */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24 lg:py-12">
        <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-0">
          <div className="text-center">
            <h2 className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text font-Montserrat text-3xl font-extrabold text-transparent sm:text-4xl lg:text-5xl">
              A3 Flywheel Model
            </h2>
            <p className="mt-3 font-opensans text-base text-[#6B7280] sm:mt-5 sm:text-lg lg:text-xl">
              A Growth Model For Modern Performance Marketing Services
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:mt-20 sm:rounded-[32px] sm:p-10 lg:p-6">
            <div className="rounded-xl border border-[#E2E8F0] bg-[#F9FAFB] p-3 shadow-sm sm:rounded-2xl sm:p-5 lg:p-10">
              <Image
                src={flywheelImage}
                alt="Flywheel Model"
                className="w-full rounded-xl"
              />
            </div>

            <div className="mx-auto mt-8 max-w-[600px] text-center sm:mt-12">
              <h3 className="text-xl font-bold text-[#111827] sm:text-2xl">
                A System That Gets Stronger as It Scales
              </h3>
              <p className="mt-3 font-opensans text-sm leading-6 text-[#6B7280] sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
                Instead of isolated campaigns, we use a continuous cycle that
                compounds your results over time.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
                {["TEST", "SCALE", "REFINE", "REPEAT"].map((item, index, arr) => (
                  <div key={item} className="flex items-center">
                    <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-bold shadow-sm sm:px-6 sm:py-3 sm:text-sm">
                      {item}
                    </span>
                    {index < arr.length - 1 && (
                      <ArrowRight className="ml-1.5 inline-block h-3 w-3 text-[#6B7280] sm:ml-2 sm:h-4 sm:w-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {modelCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366F1]/10 text-base font-bold text-[#6366F1] sm:h-12 sm:w-12 sm:text-lg">
                  {card.badge}
                </div>
                <h3 className="mt-4 font-Montserrat text-xl font-bold text-[#111827] sm:mt-6 sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 font-opensans text-sm leading-6 text-[#6B7280] sm:mt-5 sm:text-base sm:leading-7">
                  {card.description}
                </p>
                <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <Zap className="h-3.5 w-3.5 text-[#6366F1]" />
                      <span className="font-opensans text-xs text-[#111827] sm:text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MODEL WORKS */}
      <section className="bg-[#0F172A] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 sm:px-6 md:gap-16 lg:grid-cols-2 lg:px-0">
          <div>
            <h2 className="font-Montserrat text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why This Model Works
            </h2>
            <p className="mt-4 font-opensans text-base leading-7 text-[#E0E7FF] sm:mt-8 sm:text-lg sm:leading-9 lg:text-xl">
              Most performance marketing agencies restart from scratch every month. We don’t.
            </p>
            <div className="mt-8 sm:mt-12">
              <p className="text-xs font-bold uppercase tracking-[1.5px] text-white/80 sm:text-sm">
                Our Model:
              </p>
              <div className="mt-4 space-y-4 font-opensans sm:mt-6 sm:space-y-5">
                {[
                  "Learns from every test",
                  "Improves with every cycle",
                  "Builds long-term performance stability",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 sm:gap-4">
                    <Zap className="h-4 w-4 shrink-0 text-[#818CF8] sm:h-5 sm:w-5" />
                    <span className="text-sm text-white sm:text-base md:text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:rounded-[32px] sm:p-10 lg:p-12">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              What This Means For You
            </h3>
            <div className="mt-6 space-y-4 font-opensans sm:mt-10 sm:space-y-7">
              {[
                "Smarter campaigns over time",
                "More consistent revenue growth",
                "Lower customer acquisition costs",
                "Stronger scalable performance",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#10B981] sm:h-5 sm:w-5" />
                  <span className="text-sm text-[#EEF2FF] sm:text-base md:text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="text-center">
            <SmallLabel>Who We Work With</SmallLabel>
            <h2 className="mt-4 font-Montserrat text-2xl font-bold text-[#0F172A] sm:mt-5 sm:text-4xl lg:text-5xl">
              Built for Brands That Want to Scale
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShoppingBag,
                text: "D2C brands ready to grow beyond initial traction",
              },
              {
                icon: UserCircle,
                text: "Founders tired of inconsistent lead results",
              },
              {
                icon: Users,
                text: "Teams looking for scalable performance marketing growth",
              },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-center shadow-sm sm:p-10"
              >
                <Icon className="mx-auto h-8 w-8 text-[#4F46E5] sm:h-10 sm:w-10" />
                <p className="mt-4 font-Montserrat text-sm font-bold leading-6 text-[#111827] sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDERS (HTML layout integrated with Next Images) */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="text-center sm:text-left">
            <SmallLabel>Meet the founders</SmallLabel>
            <h2 className="mt-4 font-Montserrat text-2xl font-bold text-[#0F172A] sm:mt-5 sm:text-3xl lg:text-4xl">
              Built by Operators. Not Just Agency Owners.
            </h2>
            <p className="mt-4 font-opensans text-sm text-[#64748B] sm:text-base md:text-lg">
              We&apos;ve been on the client side. We know what it&apos;s like when your budget is on the line.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2">
            {/* Founder 1 */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-[260px] w-full overflow-hidden bg-[#0E0C2B] sm:h-[380px]">
                <Image src={mausamImage} alt="Mausam Arora" fill className="object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent px-5 py-4 pt-16">
                  <div className="font-Montserrat text-lg font-bold text-white sm:text-xl">Mausam Arora</div>
                  <div className="mt-1 font-opensans text-xs text-white/70 sm:text-sm">Founder, Acquirely</div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4F46E5] sm:text-xs">
                  Growth & Strategy
                </div>
                <p className="mb-5 font-opensans text-sm leading-[1.7] text-[#64748B] sm:text-[15px]">
                  Mausam spent 12 years in education — building curricula, publishing 300+ books, reaching 2,000+ schools. When he couldn&apos;t find an agency to trust with his own brands&apos; marketing, he co-founded Acquirely to build what was missing: an agency with genuine accountability.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2.5 font-opensans text-sm text-[#64748B]">
                    <CheckCircle2 className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                    <span>Founder-level understanding of the full customer journey</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-opensans text-sm text-[#64748B]">
                    <CheckCircle2 className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                    <span>GTM strategy, funnel thinking, and scaling systems</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-opensans text-sm text-[#64748B]">
                    <CheckCircle2 className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                    <span>Has run marketing for his own D2C and EdTech brands</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-[260px] w-full overflow-hidden bg-[#0E0C2B] sm:h-[380px]">
                <Image src={kunalImage} alt="Kunal Mondal" fill className="object-cover object-top" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent px-5 py-4 pt-16">
                  <div className="font-Montserrat text-lg font-bold text-white sm:text-xl">Kunal Mondal</div>
                  <div className="mt-1 font-opensans text-xs text-white/70 sm:text-sm">Co-Founder, Acquirely</div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#4F46E5] sm:text-xs">
                  Performance Marketing Lead
                </div>
                <p className="mb-5 font-opensans text-sm leading-[1.7] text-[#64748B] sm:text-[15px]">
                  Kunal has managed over ₹30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue — not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-2.5 font-opensans text-sm text-[#64748B]">
                    <CheckCircle2 className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                    <span>Hands-on Meta and Google strategist</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-opensans text-sm text-[#64748B]">
                    <CheckCircle2 className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                    <span>Full-funnel acquisition systems across 30+ brands</span>
                  </div>
                  <div className="flex items-start gap-2.5 font-opensans text-sm text-[#64748B]">
                    <CheckCircle2 className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#10B981]" />
                    <span>ROAS-focused scaling without wasted spend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-white px-4 py-16 sm:px-6 md:px-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          <h2 className="font-Montserrat text-2xl font-bold uppercase tracking-wide text-[#0F172A] sm:text-3xl md:text-4xl">
            Our Commitment
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap md:gap-10 lg:gap-14">
            {[
              "No unnecessary lock-ins",
              "Transparent reporting",
              "Performance-focused approach",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#4F46E5] sm:h-6 sm:w-6 md:h-7 md:w-7" />
                <span className="font-Montserrat text-sm font-semibold text-[#0F172A] sm:text-base md:text-lg lg:text-xl">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-opensans text-sm italic leading-relaxed text-[#64748B] sm:mt-12 sm:text-base md:text-lg">
            We don&apos;t promise overnight success. We focus on building something that lasts.
          </p>
        </div>
      </section>

      {/* FINAL CTA (From HTML Design) */}
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto max-w-[1280px] rounded-[24px] bg-[#0F172A] px-6 py-12 text-center shadow-2xl sm:p-16 md:p-20">
          <div className="mb-4 font-opensans text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 sm:text-xs">
            Work with us
          </div>
          <h2 className="mx-auto mb-4 max-w-[700px] font-Montserrat text-2xl font-extrabold leading-[1.3] text-white sm:text-3xl md:text-4xl">
            If You Want an Agency That Treats Your Budget Like Its Own — Let&apos;s Talk.
          </h2>
          <p className="mx-auto mb-10 max-w-[500px] font-opensans text-sm leading-[1.65] text-[#94A3B8] sm:text-base md:text-lg">
            No pitches. No fluff. We&apos;ll audit your current setup and tell you honestly what&apos;s working and what isn&apos;t.
          </p>
          <div>
            <button className="mb-4 inline-flex items-center gap-2 rounded-xl bg-[#6366F1] px-8 py-4 font-Montserrat text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#4F46E5] sm:px-10 sm:py-5 sm:text-[15px]">
              Book a Free Growth Call <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
          <div className="font-opensans text-[12px] text-white/30 sm:text-sm">
            30 minutes. No obligation. Usually replied to within 24 hours.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}