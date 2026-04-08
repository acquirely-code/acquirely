import { motion } from "framer-motion";
import { Globe, Users, Award, Briefcase } from "lucide-react";
import { BadgeCheck } from "lucide-react";

/* ================= DATA ================= */
const services = [
  {
    role: "ACM India Student Member",
    org: "Association for Computing Machinery (ACM)",
    period: "",
    icon: Users,
  },
  {
    role: "Innovation Ambassador",
    org: "Ministry of Education’s Innovation Cell, Government of India",
    period: "2025 – Present",
    icon: Award,
  },
  {
    role: "Research Ambassador",
    org: "Scifiniti, Abu Dhabi, UAE",
    period: "2025 – Present",
    icon: Globe,
  },
  {
    role: "Organizing Committee Member",
    org: "TIACOMP 2024, Bali, Indonesia",
    period: "2024",
    icon: Briefcase,
  },
  {
    role: "ACM Student Chapter Representative",
    org: "PIET ACM Student Chapter",
    period: "2022 – 2023",
    icon: Users,
  },
];

/* 🔥 HIGHLIGHTS BAR */
const highlights = [
  { label: "Innovation Ambassador", icon: Award },
  { label: "Research Ambassador", icon: Globe },
  { label: "ACM Member", icon: Users },
  { label: "Global Contributor", icon: Briefcase },
];

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* ================= COMPONENT ================= */
const ProfessionalServicesSection = () => {
  return (
    <section
      id="services"
      className="py-28 lg:pl-28 bg-gradient-to-b from-white via-indigo-50/30 to-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 mb-5 rounded-full" />

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl">
            Contributions to the global research, academic, and innovation ecosystem.
          </p>
        </motion.div>

        {/* 🔥 MAIN HIGHLIGHT BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 p-6 rounded-3xl 
                     bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 
                     text-white shadow-xl"
        >
          <div className="flex flex-wrap justify-center gap-8">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 text-sm md:text-base font-semibold">
                <h.icon className="w-5 h-5" />
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SERVICES GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="group p-6 rounded-2xl 
                         bg-white/80 backdrop-blur-xl 
                         border border-gray-200 
                         shadow-md hover:shadow-xl 
                         transition-all duration-300"
            >
              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center 
                                bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg">
                  <s.icon className="w-5 h-5 text-white" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {s.role}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 mt-1">
                    {s.org}
                  </p>

                  {s.period && (
                    <p className="text-xs text-indigo-600 font-semibold mt-2">
                      {s.period}
                    </p>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProfessionalServicesSection;