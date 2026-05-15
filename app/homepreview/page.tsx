import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  MousePointerClick,
  Play,
  Search,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import kunalImage from "@/app/assests/kunalmondal.png";
import mausamImage from "@/app/assests/mausamarora.png";


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


const services = [
  {
    title: "Meta Ads Management",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    title: "Google Ads Management",
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: "Ad Creatives Strategy & Testing",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Funnel Optimisation",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    title: "Conversion Improvements",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Scaling Frameworks",
    icon: <MousePointerClick className="h-6 w-6" />,
  },
];

const studies = [
  "Retroverse- ROAS 2.5 to 4.39",
  "Modish- ROAS 1.43 to 2.34",
  "No Strain ROAS ___ to",
  "Ayurveda ____ to_",
];

const testimonials = [
  {
    name: "Rahul S.",
    role: "Founder, Retroverse",
  },
  {
    name: "Ananya M.",
    role: "Marketing Head, Modish",
  },
  {
    name: "Vikram K.",
    role: "CEO, No Strain",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-[#0F172A]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)]">
        <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-10 lg:px-20 lg:pb-32">
          {/* NAVBAR */}
          <nav className="flex items-center justify-between rounded-[10px] border border-white/10 bg-white/5 px-6 py-5 shadow-[0_0_40px_rgba(99,102,241,0.15),0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <div className="text-2xl font-bold text-white">
              Acquirely
            </div>

            <div className="hidden items-center gap-10 lg:flex">
              <a className="text-[17px] text-white/90 transition hover:text-white">
                Done For You
              </a>
              <a className="text-[17px] text-white/90 transition hover:text-white">
                Case Studies
              </a>
              <a className="text-[17px] text-white/90 transition hover:text-white">
                About Us
              </a>
            </div>

            <button className="rounded-lg bg-[#0052FF] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_15px_-3px_rgba(0,82,255,0.2)] transition hover:scale-[1.02]">
              Book a Meeting
            </button>
          </nav>

          {/* HERO CONTENT */}
          <div className="mx-auto mt-28 max-w-[980px] text-center">
            <h1 className="text-5xl font-bold leading-[1.1] tracking-[-2px] text-white md:text-7xl">
              Scale Profitably With
              <br />
              A Proven
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}
                Performance
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                Marketing Agency
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-[700px] text-lg leading-8 text-white/80 md:text-xl">
              Grow from ₹10L to ₹1Cr+ monthly with data-driven Meta Ads
            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-10 py-5 text-lg font-bold text-white shadow-[0_10px_15px_-3px_rgba(99,102,241,0.25)] transition hover:scale-[1.02]">
              Book a Growth Call Here!
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CASE STUDIES MARQUEE */}
      <section className="border-y border-[#E2E8F0] bg-white py-8">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap px-10">
          {[...studies, ...studies].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[1.4px] text-[#64748B]">
                Real Case Studies:
              </span>

              <span className="text-lg font-bold text-[#0F172A]">
                {item}
              </span>

              <ChevronRight className="h-4 w-4 text-[#6366F1]" />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#F8FAFC] py-24">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-0">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#6366F1]">
              What We Actually Do
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0F172A]">
              Our Performance Marketing Services
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366F1]/10 text-[#0F172A]">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLYWHEEL SECTION */}
      <section className="bg-[#F8FAFC]/40 py-28">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#6366F1]">
              How We Help You Grow
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] text-4xl font-bold leading-tight text-[#0F172A] md:text-5xl">
              We Build A Compounding Model for Modern
              <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
                {" "}
                Performance Marketing Services
              </span>
            </h2>
          </div>

          <div className="mt-20 rounded-[32px] border border-white bg-white p-8 shadow-[0_20px_40px_rgba(15,23,42,0.08)] lg:p-14">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="rounded-[28px] bg-[#DCE6FF] p-8">
                <div className="inline-flex rounded-full bg-[#0F172A] px-4 py-2 text-xs font-bold text-white">
                  CAMPAIGN 1
                </div>

                <div className="mt-10 space-y-4">
                  <div className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">
                    Testing Campaigns
                  </div>
                  <div className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">
                    Creative Variations
                  </div>
                  <div className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">
                    Funnel Optimization
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#FFC85C] p-8">
                <div className="inline-flex rounded-full bg-[#0F172A] px-4 py-2 text-xs font-bold text-white">
                  CAMPAIGN 2
                </div>

                <div className="mt-16 flex items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm">
                  <div>
                    <div className="text-sm font-semibold text-[#64748B]">
                      Scale
                    </div>
                    <div className="mt-2 text-3xl font-bold text-[#0F172A]">
                      ₹1Cr+
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] bg-[#DCE6FF] p-8">
                <div className="inline-flex rounded-full bg-[#0F172A] px-4 py-2 text-xs font-bold text-white">
                  CAMPAIGN 3
                </div>

                <div className="mt-10 space-y-4">
                  <div className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">
                    Data Feedback Loop
                  </div>
                  <div className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">
                    Audience Segmentation
                  </div>
                  <div className="rounded-xl bg-white p-4 text-sm font-semibold shadow-sm">
                    Profit Optimization
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-[#F8FAFC] px-5 py-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-10 rounded-[32px] bg-[linear-gradient(90deg,#07112E_0%,#111D52_100%)] px-10 py-14 shadow-[0_20px_40px_rgba(15,23,42,0.15)] lg:flex-row">
          <div>
            <h2 className="text-5xl font-bold text-white">
              What You Will Get
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Predictable ROAS",
                "Scalable creatives",
                "Data-backed growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6366F1]">
                    <Check className="h-4 w-4 text-white" />
                  </div>

                  <span className="text-lg text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="rounded-full bg-white px-10 py-5 text-lg font-bold text-[#0F172A] shadow-xl transition hover:scale-[1.02]">
            Book a Funnel Review Meeting!
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1280px] px-5">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[1.5px] text-[#6366F1]">
              Client&apos;s Testimonials
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0F172A]">
              Our Clients Speak Volume!
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-video bg-gradient-to-br from-[#d6d6d6] to-[#8d8d8d]" />

                <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0F172A] shadow-2xl transition group-hover:scale-110">
                    <Play className="ml-1 h-6 w-6 fill-current" />
                  </button>
                </div>

                <div className="absolute bottom-5 left-5">
                  <h3 className="text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] py-28 text-center">
        <div className="mx-auto max-w-[900px] px-5">
          <h2 className="text-5xl font-bold leading-tight text-white">
            Ready to Grow Without Guesswork?
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-lg leading-8 text-white/70">
            Partner with a performance marketing agency that focuses on real business outcomes.
          </p>

          <button className="mt-10 rounded-full bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-10 py-5 text-lg font-bold text-white shadow-[0_10px_15px_-3px_rgba(99,102,241,0.25)] transition hover:scale-[1.02]">
            Book Your Free Call!
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#F8FAFC] px-5 py-20">
        <div className="mx-auto grid max-w-[1280px] gap-16 border-b border-[#E2E8F0] pb-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-[#0F172A]">
              Acquirely
            </h3>

            <p className="mt-5 text-base leading-7 text-[#64748B]">
              Building growth systems that compound. Performance marketing for modern brands.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#0F172A]">
              Quick Links
            </h4>

            <div className="mt-5 space-y-4 text-[#64748B]">
              <p>Done For You</p>
              <p>About Us</p>
              <p>Case Studies</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#0F172A]">
              Legal
            </h4>

            <div className="mt-5 space-y-4 text-[#64748B]">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#0F172A]">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-[#64748B]">
              <p>+91 98765 43210</p>
              <p>www.acquirely.in</p>
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1280px] flex-col items-center justify-between gap-4 text-sm text-[#94A3B8] md:flex-row">
          <p>© 2025 Acquirely. All rights reserved.</p>
          <p>Built For Growth.</p>
        </div>
      </footer>
    </main>
  );
}