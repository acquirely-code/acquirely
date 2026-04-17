import Link from "next/link";
import kunalmandal from "@/app/assests/kunalmondal.png";
import mausamarora from "@/app/assests/mausamarora.png";
import Image, { StaticImageData } from "next/image";
import {Clock3, Instagram, ShieldCheck, TrendingUp } from "lucide-react";

const trustCards = [
  {
    title: "90-Day Guarantee",
    description: "We give your campaigns 75–90 days tostabilise and show real performance improvement.  No rushed decisions only data-backed evaluation.",
    icon: ShieldCheck,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#22C55E]",
  },
  {
    title: "If Results Don't Improve",
    description: "If there’s no consistent ROAS growthafter the period—despite proper spendand support—we take responsibility..",
    icon: Clock3,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#3B82F6]",
  },
  {
    title: "No Lock-In Contract",
    description: "No long-term commitments. If it’s not working, you’re freeto walk away no obligations.",
    icon: Instagram,
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#A855F7]",
  },
  {
    title: "Simple Rule",
    description: "We either work one extra monthfor free to improve results OR part ways with full campaignlearnings transferred.",
    icon: TrendingUp,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#F59E0B]",
  },
];
const founders = [
  {
    name: "Mausam Arora",
    role: "Founder, Acquirely",
    title: "GROWTH & STRATEGY HEAD, UMG",
    mainimage: mausamarora,
    Linkedin: "https://in.linkedin.com/in/mausamarora",
    description:
      "Mausam spent 12 years inside education — building curricula, publishing 300+ books, and reaching 2,000+ schools. That journey taught him one thing: great products don't grow themselves. He built Acquirely to turn scattered ad spend into acquisition systems that compound.",
    bullets: [
      "Founder-level understanding of what happens before and after the click",
      "Managed ₹30Cr+ in annual ad spend",
      "Specialises in funnel strategy, GTM thinking, and scaling systems"
    ],
  },
  {
    name: "Kunal Mondal",
    role: "Founder, Acquirely",
    title: "PERFORMANCE MARKETING SPECIALIST",
    mainimage: kunalmandal,
    Linkedin: "https://in.linkedin.com/in/kunal-meta-ads",
    description:
      "Kunal has managed over ₹30Cr in ad spend across 30+ brands in E-Commerce, EdTech, and Real Estate. He builds acquisition systems that drive predictable revenue, not just traffic. His hands-on approach ensures the A3 Flywheel runs without friction.",
    bullets: [
      "Hands-on Meta Ads strategist",
      "Full-funnel acquisition systems using Google & Meta",
      "ROAS-focused scaling without wasted spend"
    ],
  },
];


function TrustCard({
  title,
  description,
  icon: Icon,
  iconBg,
  iconColor,
}: {
  title: string;
  description: string;
  icon: typeof ShieldCheck;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="rounded-xl bg-[#FAFAFA] px-4 py-5 text-center">
      <div className={`mx-auto grid h-10 w-10 place-items-center rounded-lg ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <h3 className="mt-4 text-[18px] font-semibold leading-6 text-[#171717]">{title}</h3>
      <p className="mt-2 text-[12px] leading-[18px] text-[#737373]">{description}</p>
    </div>
  );
}

function FounderCard({
  name,
  role,
  title,
  description,
  mainimage,
  bullets,
  Linkedin,
}: {
  name: string;
  role: string;
  title: string;
  description: string;
  mainimage: StaticImageData;
  bullets: string[];
  Linkedin:string;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-[300px] w-full md:h-[380px]">
        <Image
          src={mainimage}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Name, Role, and LinkedIn Icon Overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
          <div>
            <h3 className="text-[22px] font-medium text-white md:text-[26px]">{name}</h3>
            <p className="mt-1 text-[13px] text-gray-300 md:text-[14px]">{role}</p>
          </div>
          <Link 
         
            href={Linkedin} 
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md transition-colors hover:bg-white/30"
            aria-label={`${name}'s LinkedIn`}
          >
            <svg className="h-[18px] w-[18px] text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#5332E2]">
          {title}
        </p>
        <p className="mt-4 text-[14px] leading-relaxed text-[#4B5563]">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg 
                className="mt-[3px] h-4 w-4 shrink-0 text-[#5332E2]" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-[13px] leading-[1.4] text-[#6B7280]">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section className="bg-white">
       <div className="text-center pt-8">
                <div className="inline-flex h-[34px] items-center gap-2  rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-4">
                  <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
                    Zero risk commitment
                  </span>
                </div>
      
                <h2 className="mt-7 text-[32px] font-Montserrat  leading-[1.05] text-[#171717] sm:text-[38px] lg:text-[44px]">
                  <span className="block">Built on Accountability</span>
                  <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#F59E0B_45%,#F87171_100%)] bg-clip-text text-transparent">
                    Not Empty Promises
                  </span>
                </h2>
                <p className="mx-auto  font-opensans mt-5 max-w-[620px] text-[14px] leading-6 text-[#94A3B8]">
                  We don't offer unrealistic guarantees. But we do take full responsibility for results.
                </p>
              </div>
      
              <div className="mx-auto mt-12 grid max-w-[1120px] gap-4 md:grid-cols-2 lg:grid-cols-4">
                {trustCards.map((card) => (
                  <TrustCard key={card.title} {...card} />
                ))}
              </div>
      
      <div className="mx-auto max-w-[1440px] px-5 py-16 pt-8 sm:px-6 lg:px-4 lg:py-4">
        <div className="text-center md:pt-16">
          <div className="inline-flex h-[26px] items-center gap-2  rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-bold uppercase tracking-[1.2px] text-[#5332E2]">
              Meet the founders
            </span>
          </div>

          <h2 className="mt-7 font-Montserrat text-[34px] font-semibold leading-[1.05] text-[#262626] sm:text-[40px] lg:text-[48px]">
            The Minds Behind Acquirely
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-7 text-[#8A8A8A]">
            Two seasoned strategists with decades of combined experience building brands that dominate their markets.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1100px] gap-8 lg:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}