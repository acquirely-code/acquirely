import { AlertTriangle, X } from "lucide-react";
import Image from "next/image";
import Problem from "@/app/assests/problem.png";
import current from "@/app/assests/current.png";

const problemCards = [
  {
    title: "Test creatives randomly",
    description:
      "Creatives are tested without a clear system, leading to inconsistent and unreliable results.",
  },
  {
    title: "Increase budgets emotionally",
    description:
      "Budgets are increased or reduced based on guesswork instead of actual performance data.",
  },
  {
    title: "Pause campaigns too early",
    description:
      "Campaigns are paused too early, before the algorithm has enough data to optimise.",
  },
  {
    title: "Depend on only 1-2 winning creatives",
    description:
      "Relying on just a few winning creatives leads to unstable performance and growth plateaus.",
  },
];

function ProblemCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-[3px] border border-[#E1E6EF] bg-white shadow-[inset_5px_0_0_0_#E03941]">
      <div className="flex items-start gap-4 px-4 py-5 sm:px-[18px] sm:py-[24px]">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[6px] bg-[#FBDEDE]">
          <X className="h-5 w-5 text-[#F87171]" strokeWidth={2.3} />
        </div>
        <div className="max-w-[392px]">
          <h3 className="text-[16px] font-semibold leading-7 text-black">{title}</h3>
          <p className="mt-1 text-[14px] leading-6 text-[#7B8BA0] sm:text-[15px] sm:leading-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GrowthSystemProblemSection() {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="mx-auto max-w-[1440px] px-5 py-4 md:py-16 sm:px-6 lg:px-[202px] lg:py-[78px]">
        <div className="mx-auto max-w-[779px] text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-[14px]">
           <Image src={Problem} alt="Problem Icon" className="h-5 w-5" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
              The real problem
            </span>
          </div>

          <h2 className="mt-8 font-Montserrat text-[31px]  leading-[1.08] tracking-[-0.02em] sm:text-[36px] lg:mt-11 lg:text-[40px] lg:leading-[44px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text text-transparent">
              You Don't Have an Ads Problem.
            </span>
            <span className="block text-black">You Have a Growth System Problem.</span>
          </h2>

          <p className="mx-auto font-opensans  mt-5 max-w-[662px] text-[16px] leading-7 text-[#7B8BA0] sm:text-[18px]">
            Most brands approach advertising without a structured scaling framework. Here’s what actually Happens
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-7">
          {problemCards.map((card) => (
            <ProblemCard key={card.title} title={card.title} description={card.description} />
          ))}
        </div>

        <div className="mt-10 rounded-[4px] border-2 border-[#CFD5FD] bg-[#E5EBFF] px-4 py-6 lg:px-10 lg:py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
           <Image src={current} alt="Current Icon" className="h-12 w-12" />
            <div className="max-w-[846px]">
              <h3 className="text-[16px] font-semibold leading-7 text-black">
                Then Meta Changed the Game
              </h3>
              <p className="mt-1 text-[14px] leading-6 text-[#666666] sm:text-[15px] sm:leading-5">
                With updates like Andromeda, Meta's AI now prioritises creative signals
                over targeting signals. Interest stacking is weaker. Budget scaling often
                breaks performance. Yet most brands kept tweaking audiences while ignoring
                the real shift: creative-driven performance marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
