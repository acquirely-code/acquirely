import { X, Check } from "lucide-react";
import Image from "next/image";
import Problem from "@/app/assests/problem.png";
import current from "@/app/assests/current.png";

const problemCards = [
  {
    title: "Test creatives randomly",
  },
  {
    title: "Pause campaigns too early",
  },
  {
    title: "Increase budgets emotionally",
  },
  {
    title: "Depend on only 1-2 winning creatives",
  },
];

function ProblemCard({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 rounded-md border border-[#E1E6EF] border-l-[4px] border-l-[#E03941] bg-white px-5 py-4 shadow-sm sm:px-[24px] sm:py-[20px]">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded bg-[#FBDEDE]">
        <X className="h-4 w-4 text-[#F87171]" strokeWidth={2.5} />
      </div>
      <h3 className="text-[15px] font-bold leading-7 text-black sm:text-[16px]">
        {title}
      </h3>
    </div>
  );
}

export default function GrowthSystemProblemSection() {
  return (
    <section className="bg-[#F8FAFC] py-12 px-4 md:py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1080px]">
        
        {/* Header Section */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-[14px]">
            {/* Fallback to text if the image doesn't load cleanly, but keeping your Image import */}
            <Image src={Problem} alt="Warning Icon" className="h-4 w-4" />
            <span className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5332E2]">
              The real problem
            </span>
          </div>

          <h2 className="mt-8 font-['Montserrat'] text-[32px] font-extrabold leading-[1.2] tracking-tight sm:text-[40px] md:text-[48px]">
            <span className="block text-black">
              You Don't Have an Ads Problem.
            </span>
            <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
              You Have a Growth System Problem.
            </span>
          </h2>

          <p className="mx-auto mt-6 font-['Open_Sans'] max-w-[660px] text-[16px] leading-relaxed text-[#7B8BA0] sm:text-[18px]">
            Most brands approach advertising without a structured scaling framework.
            <br className="hidden sm:block" />
            Here's what actually Happens
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {problemCards.map((card) => (
            <ProblemCard key={card.title} title={card.title} />
          ))}
        </div>

        {/* Result Alert Box */}
        <div className="mt-8 rounded-md border border-[#FCA5A5] bg-[#FEF2F2] py-8 px-6 text-center shadow-sm">
          <h3 className="font-['Montserrat'] text-[18px] font-bold text-black sm:text-[20px]">
            The result?
          </h3>
          <p className="mt-2 font-['Open_Sans'] text-[14px] font-medium text-[#EF4444] sm:text-[15px]">
            Your brand stays stuck between ₹3L–₹20L monthly revenue, without predictable growth.
          </p>
        </div>

        {/* Meta Changed The Game Box */}
        <div className="mt-8 rounded-md border border-[#C7D2FE] bg-[#EEF2FF] p-6 lg:p-10 shadow-sm">
          <div className="flex flex-col items-start gap-6 sm:flex-row">
            {/* Icon Box */}
            <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-[#4F46E5]">
              <Image src={current} alt="Lightning Icon" className="h-8 w-8 object-contain" />
            </div>
            
            {/* Content */}
            <div className="flex-1 font-['Open_Sans']">
              <h3 className="font-['Montserrat'] text-[18px] font-bold leading-7 text-black sm:text-[20px]">
                Then Meta Changed the Game
              </h3>
              
              <p className="mt-3 text-[15px] leading-relaxed text-[#6B7280]">
                With updates like <strong className="font-semibold text-[#4B5563]">Andromeda</strong>, 
                Meta's AI now prioritises creative signals over targeting signals.
              </p>
              
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-3 text-[15px] text-[#6B7280]">
                  <Check className="h-5 w-5 text-[#4F46E5] shrink-0" strokeWidth={2.5} /> 
                  <span>Interest stacking is weaker.</span>
                </li>
                <li className="flex items-center gap-3 text-[15px] text-[#6B7280]">
                  <Check className="h-5 w-5 text-[#4F46E5] shrink-0" strokeWidth={2.5} /> 
                  <span>Budget scaling often breaks performance.</span>
                </li>
              </ul>
              
              <p className="mt-5 text-[15px] leading-relaxed text-[#6B7280]">
                Yet most brands kept tweaking audiences while ignoring the real shift: creative-driven performance marketing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}