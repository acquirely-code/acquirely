import { Package, RefreshCw, Maximize, BarChart3 } from "lucide-react";

const levers = [
  {
    title: "Strong Product-Market Fit",
    description: "A product people genuinely want, with clear demand and repeat purchase potential.",
    icon: Package,
    iconBg: "bg-[#DBFCE7]",
    iconColor: "text-[#00A63E]",
  },
  {
    title: "Continuous Creative Testing",
    description: "Testing multiple ad creatives consistently to find what truly converts and scales.",
    icon: RefreshCw,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#155DFC]",
  },
  {
    title: "Structured Scaling Framework",
    description: "A proven system like the A3 Flywheel that allows predictable and sustainable growth.",
    icon: Maximize,
    iconBg: "bg-[#F3E8FF]",
    iconColor: "text-[#9810FA]",
  },
  {
    title: "Data-Driven Decisions",
    description: "Scaling based on real performance data, not guesswork or assumptions.",
    icon: BarChart3,
    iconBg: "bg-[#FEF3C6]",
    iconColor: "text-[#E17100]",
  },
];

export default function ScalingFrameworkSection() {
  return (
    <section className="bg-white py-16 sm:py-24 px-5">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          {/* Label Badge */}
          <div className="inline-flex h-[34px] items-center gap-2 rounded bg-[#EDEFFF] border border-[#CFD5FD] px-[18px]">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[12px] font-semibold tracking-[1.2px] uppercase text-[#5332E2]">
              Scaling Framework
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-[32px] sm:text-[40px] font-Montserrat leading-[1.1] text-black ">
            What Does It Take to Scale From <br className="hidden sm:block" />
            <span className="text-[#C39A8E]">₹3L to ₹50L?</span>
          </h2>

          {/* Subheading */}
          <p className="mt-4 max-w-[540px] text-[16px] sm:text-[18px] leading-[28px] text-[#7B8BA0] font-opensans">
            Four critical levers separate stagnant brands from scalable ones.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levers.map((lever, index) => {
            const Icon = lever.icon;
            return (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-[#E5E5E5] bg-white p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg"
              >
                {/* Icon Container */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-md ${lever.iconBg} mb-6`}
                >
                  <Icon className={`h-6 w-6 ${lever.iconColor}`} strokeWidth={2} />
                </div>

                {/* Card Text */}
                <h3 className="mb-3 text-[20px] font-semibold leading-[28px] text-black font-montserrat">
                  {lever.title}
                </h3>
                <p className="text-[14px] font-opensans leading-[19px] text-[#7B8BA0] ">
                  {lever.description}
                </p>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}