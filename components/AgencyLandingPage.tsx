import A3FlywheelSection from "@/components/A3FlywheelSection";
import CostBreakdownSection from "@/components/CostBreakdownSection";
import FaqSection from "@/components/FaqSection";
import FlywheelProofSection from "@/components/FlywheelProofSection";
import FoundersSection from "@/components/FoundersSection";
import GrowthSystemProblemSection from "@/components/GrowthSystemProblemSection";
import PricingSection from "@/components/PricingSection";

import CtaBreakPastSection from "./CtaBreakPastSection";
import Hero from "@/components/Hero"
import ScalingFrameworkSection from "./ScalingFrameworkSection";





export default function AgencyLandingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] text-slate-950">
      <Hero/>
      <GrowthSystemProblemSection />
      <A3FlywheelSection />
      <FlywheelProofSection />
      <PricingSection />
      {/* <CostBreakdownSection /> */}
      <FoundersSection />
      <FaqSection />
      <ScalingFrameworkSection />
      <CtaBreakPastSection/>
    </main>
  );
}
