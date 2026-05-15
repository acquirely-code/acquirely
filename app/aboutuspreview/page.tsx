import Image from "next/image";
import {
  ArrowRight,
  Check,
  Layers3,
  LineChart,
  Shield,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import logo from "@/app/assests/logo.png"
import Collabration from "@/app/assests/officecollab.png";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";


import flywheelImage from "@/app/assests/flywheelmodel.png";
import { Montserrat, Open_Sans } from "next/font/google";
import { ReactNode } from "react";


function SmallLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded border border-[#CFD5FD] bg-[#EDEFFF] px-4 py-2">
      <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
      <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
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
    body:
      "Mausam spent 12 years inside education - building curricula, publishing 300+ books, and reaching 2,000+ schools. That journey taught him one thing: great products don't grow themselves. He built Acquirely to turn scattered ad spend into acquisition systems that compound.",
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
    body:
      "Kunal has managed over Rs.30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
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
      <div className="relative h-[300px] sm:h-[380px]">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-normal">{name}</h3>
          <p className="mt-1 font-['Open_Sans'] text-sm text-white">{role}</p>
        </div>
        <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/20 text-white backdrop-blur-sm">
          in
        </div>
      </div>
      <div className="p-5 sm:p-8">
        <div className="text-sm font-semibold uppercase tracking-[1.4px] text-[#4F46E5]">{tag}</div>
        <p className="mt-4 font-['Open_Sans'] text-sm leading-6 text-[#525252] sm:text-base sm:leading-[1.62]">{body}</p>
        <div className="mt-6 space-y-4">
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
      <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} />
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
    description:
      "We test multiple creatives, angles, andmessages to understand what actuallydrives conversions. Every campaign isdesigned to generate insights not justclicks.",
    points: [
      "Faster learning",
      "Clear winning patterns",
      "Stronger scaling foundation",
    ],
  },
  {
    badge: "A2",
    title: "Scale What Performs",
    description:
      "Winning campaigns are scaled using realperformance signals not guesswork.Budgets increase only when data supportsit, ensuring stability while growing.",
    points: [
      "Better ROAS",
      "Controlled growth",
      "Reduced scaling risk",
    ],
  },
  {
    badge: "A3",
    title: "Improve Continuously",
    description:
      "We use insights from live campaigns to refine creatives and strategy. Each cycleimproves the next making your marketing stronger over time.",
    points: [
      "Lower acquisition cost",
      "Better creatives",
      "Long-term consistency",
    ],
  },
];

const differentiators = [
  {
    icon: <TrendingUp className="h-7 w-7" />,
    text: "We don’t \"try things\" we test with purpose",
  },
  {
    icon: <LineChart className="h-7 w-7" />,
    text: "We don’t scale randomly we scale with data",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    text: "We don’t just win we build predictably",
  },
  {
    icon: <Layers3 className="h-7 w-7" />,
    text: "We don’t chase trends we build systems",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111827]">
      {/* HERO */}
      <section className="bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] pb-24 pt-10">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-md">
          <Image src={logo} alt="Acquirely Logo" className="h-8 w-20" />

            <div className="hidden items-center gap-10 lg:flex">
              <a className="text-lg text-white/80">Done For You</a>
              <a className="text-lg text-white/80">Case Studies</a>
              <a className="text-lg text-white/80">About Us</a>
            </div>

            <button className="rounded-lg bg-[#0052FF] px-5 py-3 text-sm font-bold text-white">
              Book a Meeting
            </button>
          </nav>

          <div className="mx-auto mt-24 max-w-[1200px] text-center">
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-2px] text-white md:text-7xl">
             
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}
               We Build Growth Systems
              </span>
              <br />
              Not Just Ad Campaigns
            </h1>

            <p className="mx-auto mt-8 max-w-[700px] text-lg leading-8 text-white/70">
             We’re a performance marketing agency built for brands that want
predictable, scalable growth—not random spikes.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-5 lg:grid-cols-2 lg:px-0">
          <div>
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#0052FF]">
              About Acquirely
            </p>

            <h2 className="mt-5 text-5xl font-extrabold leading-tight text-[#1A1A1A]">
              Best Performance Marketing Company
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-[#64748B]">
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

        <div>
            <Image src={Collabration} alt="Collabration" className="w-full rounded-xl" />
        </div>
        </div>
      </section>

      {/* FLYWHEEL MODEL */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
          <div className="text-center">
            <h2 className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-5xl font-extrabold text-transparent">
              A3 Flywheel Model
            </h2>

            <p className="mt-5 text-xl text-[#6B7280]">
              A Growth Model For Modern Performance Marketing Services
            </p>
          </div>

          <div className="mt-20 rounded-[32px] border border-[#E2E8F0] bg-[#F9FAFB] p-10 lg:p-16">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm lg:p-10">
              <Image
                src={flywheelImage}
                alt="Flywheel Model"
                className="w-full rounded-xl"
              />
            </div>

            <div className="mx-auto mt-12 max-w-[600px] text-center">
              <h3 className="text-2xl font-bold text-[#111827]">
                A System That Gets Stronger as It Scales
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#6B7280]">
                Instead of isolated campaigns, we use a continuous cycle that
                compounds your results over time.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {['TEST', 'SCALE', 'REFINE', 'REPEAT'].map((item, index, arr) => (
                  <div key={item} className="flex items-center">
                    <span
                      className="rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-bold"
                    >
                      {item}
                    </span>
                    {index < arr.length - 1 && (
                      <ArrowRight className="ml-2 inline-block h-4 w-4 text-[#6B7280]" />
                    )}
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {modelCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366F1]/10 text-lg font-bold text-[#6366F1]">
                  {card.badge}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#111827]">
                  {card.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-[#6B7280]">
                  {card.description}
                </p>

                <div className="mt-8 space-y-4">
                  {card.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-[#6366F1]" />
                      <span className="text-sm text-[#111827]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MODEL WORKS */}
      <section className="bg-[#0F172A] py-28">
        <div className="mx-auto grid max-w-[1280px] gap-16 px-5 lg:grid-cols-2 lg:px-0">
          <div>
            <h2 className="text-5xl font-bold text-white">
              Why This Model Works
            </h2>

            <p className="mt-8 text-xl leading-9 text-[#E0E7FF]">
              Most performance marketing agencies restart from scratch every
              month. We don’t.
            </p>

            <div className="mt-12">
              <p className="text-sm font-bold uppercase tracking-[1.5px] text-white">
                Our Model:
              </p>

              <div className="mt-6 space-y-5">
                {[
                  'Learns from every test',
                  'Improves with every cycle',
                  'Builds long-term performance stability',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <Check className="h-5 w-5 text-[#4F46E5]" />
                    <span className="text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-12 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-white">
              What This Means For You
            </h3>

            <div className="mt-10 space-y-7">
              {[
                'Smarter campaigns over time',
                'More consistent revenue growth',
                'Lower customer acquisition costs',
                'Stronger scalable performance',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <Check className="h-6 w-6 text-[#4F46E5]" />
                  <span className="text-lg text-[#EEF2FF]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4F46E5] py-12 text-center">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="text-4xl font-bold text-white">
            If You’re Serious About Scaling, We Should Talk
          </h2>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-bold text-[#0052FF] shadow-2xl transition hover:scale-[1.02]">
            Book a Growth Call
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
          <div className="relative overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-[#F8FAFC] p-12 lg:p-16">
            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#4F46E5]">
                What Makes Us Different
              </p>

              <h2 className="mt-5 text-5xl font-bold text-[#0F172A]">
                We Think In Systems, Not Campaigns
              </h2>

              <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {differentiators.map((item) => (
                  <div
                    key={item.text}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm"
                  >
                    <div className="text-[#4F46E5]">{item.icon}</div>

                    <p className="mt-5 text-base font-semibold leading-7 text-[#0F172A]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-center text-lg font-bold italic text-[#111827]">
                That’s what makes us a different kind of performance marketing
                company.
              </p>
            </div>
          </div>
        </div>
      </section>



            <section className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 sm:py-12 lg:px-[132px] lg:py-16">
          <div className="flex justify-center">
            <SmallLabel>MEET THE FOUNDERS</SmallLabel>
          </div>
          <h2 className="mt-8 text-center text-[28px] font-bold text-[#171717] sm:mt-10 sm:text-[34px] sm:leading-[1.2] lg:text-[40px] lg:leading-[60px]">
            The Minds Behind Acquirely
          </h2>
          <p className="mt-3 text-center text-[15px] text-[#737373] sm:text-base lg:text-lg">Built by Operators - Not Just Agency Owners</p>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {founders.map((founder) => (
              <FounderCard key={founder.name} {...founder} />
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#4F46E5]">
              Who We Work With
            </p>

            <h2 className="mt-4 text-5xl font-bold text-[#0F172A]">
              Built for Brands That Want to Scale
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              'D2C brands ready to grow beyond initial traction',
              'Founders tired of inconsistent lead results',
              'Teams looking for scalable performance marketing growth',
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-10 text-center"
              >
                <Users className="mx-auto h-10 w-10 text-[#4F46E5]" />

                <p className="mt-6 text-lg leading-8 text-[#111827]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0F172A] py-28 text-center">
        <div className="mx-auto max-w-[900px] px-5">
          <h2 className="text-5xl font-bold text-white">
            Ready to Scale Without Guesswork?
          </h2>

          <button className="mt-10 rounded-xl bg-[#4F46E5] px-10 py-5 text-lg font-bold text-white transition hover:scale-[1.02]">
            Book Your Growth Call
          </button>
        </div>
      </section>
    </main>
  );
}
