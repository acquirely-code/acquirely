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
} from "lucide-react";
import Collabration from "@/app/assests/officecollab.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";
import flywheelImage from "@/app/assests/flywheelmodel.png";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Montserrat, Open_Sans } from "next/font/google";
import { ReactNode } from "react";

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

const founders = [
  {
    name: "Mausam Arora",
    role: "Founder, Acquirely",
    tag: "Growth & Strategy Head",
    image: mausamImage,
    body: "Mausam spent 12 years inside education - building curricula, publishing 300+ books, and reaching 2,000+ schools. That journey taught him one thing: great products don't grow themselves. He built Acquirely to turn scattered ad spend into acquisition systems that compound.",
    bullets: [
      "Founder-level understanding of what happens before and after the click",
      "Managed Rs.30Cr+ in annual ad spend",
      "Specialises in funnel strategy, GTM thinking, and scaling systems",
    ],
  },
  {
    name: "Kunal Mondal",
    role: "Founder, Acquirely",
    tag: "Performance Marketing Lead",
    image: kunalImage,
    body: "Kunal has managed over Rs.30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
    bullets: [
      "Hands-on Meta and Growth strategist",
      "Full-funnel acquisition systems using Google & Meta",
      "ROAS-focused scaling without wasted spend",
    ],
  },
];

function FounderCard({
  name,
  role,
  tag,
  body,
  image,
  bullets,
}: {
  name: string;
  role: string;
  tag: string;
  body: string;
  image: any;
  bullets: string[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_8px_32px_rgba(15,23,42,0.1)]">
      <div className="relative h-[280px] sm:h-[380px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
          <h3 className="text-xl sm:text-2xl font-normal">{name}</h3>
          <p className="mt-1 font-['Open_Sans'] text-xs sm:text-sm text-white">{role}</p>
        </div>
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-md border border-white/30 bg-white/20 text-xs sm:text-sm text-white backdrop-blur-sm">
          in
        </div>
      </div>
      <div className="p-5 sm:p-8">
        <div className="text-xs sm:text-sm font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">{tag}</div>
        <p className="mt-3 sm:mt-4 font-['Open_Sans'] text-sm leading-6 text-[#525252] sm:text-base sm:leading-[1.62]">{body}</p>
        <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
          {bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3">
              <CheckBullet color="#4F46E5" />
              <span className="font-['Open_Sans'] text-sm text-[#404040]">{bullet}</span>
            </div>
          ))}
        </div>
      </div>
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

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

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
    icon: <Target className="h-6 w-6 sm:h-7 sm:w-7" />,
    text: 'We don’t "try things" we test with purpose',
  },
  {
    icon: <BarChart className="h-6 w-6 sm:h-7 sm:w-7" />,
    text: "We don’t scale randomly we scale with data",
  },
  {
    icon: <GitBranch className="h-6 w-6 sm:h-7 sm:w-7" />,
    text: "We don’t just win we build predictably",
  },
  {
    icon: <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7" />,
    text: "We don’t chase trends we build systems",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827]">
      {/* HERO */}
      <section className="bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] pb-16 pt-6 sm:pb-24 sm:pt-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-20">
          
          {/* IMPORTED NAVBAR */}
          <Navbar />

          <div className="mx-auto mt-16 sm:mt-24 max-w-[1200px] text-center">
            <h1 className="text-3xl font-Montserrat font-bold leading-[1.2] tracking-[-1px] text-white sm:text-5xl md:text-7xl md:leading-[1.1] md:tracking-[-2px]">
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent block sm:inline">
                We Build Growth Systems
              </span>
              <br className="hidden sm:inline" />
              <span className="mt-2 block sm:mt-0">Not Just Ad Campaigns</span>
            </h1>

            <p className="mx-auto font-opensans mt-6 sm:mt-8 max-w-[700px] text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-white/70">
              We’re a performance marketing agency built for brands that want
              predictable, scalable growth—not random spikes.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-0 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-[#0052FF]">
              About Acquirely
            </p>

            <h2 className="mt-3 sm:mt-5 text-2xl sm:text-4xl lg:text-5xl font-Montserrat font-extrabold leading-snug lg:leading-tight text-[#1A1A1A]">
              Best Performance Marketing Company
            </h2>

            <div className="mt-5 sm:mt-8 space-y-4 sm:space-y-6 font-opensans text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[#64748B]">
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
            <Image src={Collabration} alt="Collabration" className="w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* FLYWHEEL MODEL */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="text-center">
            <h2 className="bg-gradient-to-r font-Montserrat from-[#818CF8] to-[#F97316] bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent">
              A3 Flywheel Model
            </h2>

            <p className="mt-3 sm:mt-5 font-opensans text-base sm:text-lg lg:text-xl text-[#6B7280]">
              A Growth Model For Modern Performance Marketing Services
            </p>
          </div>

          <div className="mt-12 sm:mt-20 rounded-2xl sm:rounded-[32px] border border-[#E2E8F0] bg-[#F9FAFB] p-5 sm:p-10 lg:p-16">
            <div className="rounded-xl sm:rounded-2xl border border-[#E2E8F0] bg-white p-3 sm:p-5 shadow-sm lg:p-10">
              <Image
                src={flywheelImage}
                alt="Flywheel Model"
                className="w-full rounded-xl"
              />
            </div>

            <div className="mx-auto mt-8 sm:mt-12 max-w-[600px] text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                A System That Gets Stronger as It Scales
              </h3>

              <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[#6B7280]">
                Instead of isolated campaigns, we use a continuous cycle that
                compounds your results over time.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {["TEST", "SCALE", "REFINE", "REPEAT"].map((item, index, arr) => (
                  <div key={item} className="flex items-center">
                    <span className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold shadow-sm">
                      {item}
                    </span>
                    {index < arr.length - 1 && (
                      <ArrowRight className="ml-1.5 sm:ml-2 inline-block h-3 w-3 sm:h-4 sm:w-4 text-[#6B7280]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modelCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#6366F1]/10 text-base sm:text-lg font-bold text-[#6366F1]">
                  {card.badge}
                </div>

                <h3 className="mt-4 sm:mt-6 font-Montserrat text-xl sm:text-2xl font-bold text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-3 sm:mt-5 font-opensans text-sm sm:text-base leading-6 sm:leading-7 text-[#6B7280]">
                  {card.description}
                </p>

                <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <Zap className="h-3.5 w-3.5 text-[#6366F1]" />
                      <span className="text-xs sm:text-sm text-[#111827]">{point}</span>
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
        <div className="mx-auto grid max-w-[1280px] gap-10 md:gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-0">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-Montserrat font-bold text-white">
              Why This Model Works
            </h2>

            <p className="mt-4 sm:mt-8 text-base sm:text-lg lg:text-xl font-opensans leading-7 sm:leading-9 text-[#E0E7FF]">
              Most performance marketing agencies restart from scratch every
              month. We don’t.
            </p>

            <div className="mt-8 sm:mt-12">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-white/80">
                Our Model:
              </p>

              <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
                {[
                  "Learns from every test",
                  "Improves with every cycle",
                  "Builds long-term performance stability",
                ].map((item) => (
                  <div key={item} className="flex font-opensans items-center gap-3 sm:gap-4">
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-[#4F46E5] shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-10 lg:p-12 backdrop-blur-md">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What This Means For You
            </h3>

            <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-7">
              {[
                "Smarter campaigns over time",
                "More consistent revenue growth",
                "Lower customer acquisition costs",
                "Stronger scalable performance",
              ].map((item) => (
                <div key={item} className="flex font-opensans items-center gap-3 sm:gap-4">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-[#4F46E5] shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg text-[#EEF2FF]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4F46E5] py-12 text-center">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-Montserrat font-bold text-white leading-snug">
            If You’re Serious About Scaling, We Should Talk
          </h2>

          <button className="mt-6 sm:mt-10 font-Montserrat inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-lg font-bold text-[#0052FF] shadow-2xl transition hover:scale-[1.02]">
            Book a Growth Call
          </button>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[32px] border border-[#E2E8F0] bg-[#F8FAFC] p-6 sm:p-10 lg:p-16">
            <div className="relative z-10">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-[#4F46E5]">
                What Makes Us Different
              </p>

              <h2 className="mt-3 sm:mt-5 text-2xl sm:text-3xl lg:text-4xl font-Montserrat font-bold text-[#0F172A]">
                We Think In Systems, Not Campaigns
              </h2>

              <div className="mt-8 sm:mt-14 grid font-opensans gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
                {differentiators.map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-sm"
                  >
                    <div className="text-[#4F46E5]">{item.icon}</div>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base font-semibold leading-6 sm:leading-7 text-[#0F172A]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 sm:mt-10 text-center text-base sm:text-lg font-bold italic text-[#111827]">
                That’s what makes us a different kind of performance marketing company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-0">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[1.5px] text-[#4F46E5]">
              Who We Work With
            </p>

            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              Built for Brands That Want to Scale
            </h2>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-2xl border font-Montserrat font-bold border-[#E2E8F0] bg-white p-6 sm:p-10 text-center shadow-sm"
              >
                <Icon className="mx-auto h-8 w-8 sm:h-10 sm:w-10 text-[#4F46E5]" />

                <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-[#111827]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS MANAGEMENT */}
      <section className="bg-[#F9FAFB] py-12 sm:py-16">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[132px]">
          <div className="flex justify-center">
            <SmallLabel>MEET THE FOUNDERS</SmallLabel>
          </div>
          <h2 className="mt-6 sm:mt-8 text-center text-2xl sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[60px] font-bold text-[#171717]">
            The Minds Behind Acquirely
          </h2>
          <p className="mt-2 sm:mt-3 text-center text-sm sm:text-base lg:text-lg text-[#737373]">
            Built by Operators - Not Just Agency Owners
          </p>

          <div className="mt-8 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="border-t border-[#E2E8F0] bg-white px-4 py-16 sm:px-6 md:px-20 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center text-center">
          
          <h2 className="text-2xl sm:text-3xl font-Montserrat font-bold uppercase tracking-wide text-[#0F172A] md:text-4xl">
            Our Commitment
          </h2>

          <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap md:gap-10 lg:gap-14">
            {[
              "No unnecessary lock-ins",
              "Transparent reporting",
              "Performance-focused approach",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#4F46E5] sm:h-6 sm:w-6 md:h-7 md:w-7 shrink-0" />
                <span className="text-sm sm:text-base font-Montserrat font-semibold text-[#0F172A] md:text-lg lg:text-xl">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 sm:mt-12 font-opensans text-sm sm:text-base italic leading-relaxed text-[#64748B] md:text-lg">
            We don&apos;t promise overnight success. We focus on building something that lasts.
          </p>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F172A] py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <h2 className="text-2xl sm:text-4xl font-Montserrat font-bold text-white leading-snug">
            Ready to Scale Without Guesswork?
          </h2>

          <button className="mt-6 sm:mt-10 rounded-xl bg-[#4F46E5] px-6 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-lg font-bold text-white transition hover:scale-[1.02] shadow-lg">
            Book Your Growth Call
          </button>
        </div>
      </section>

      {/* IMPORTED FOOTER */}
      <Footer />
    </main>
  );
}