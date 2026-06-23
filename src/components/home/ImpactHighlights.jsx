// components/home/ImpactHighlights.jsx

import { motion } from "framer-motion";
import StatsGrid from "../common/StatsGrid";

const homeStats = [
  {
    key: "sessions",
    value: 100,
    suffix: "+",
    label: "Vocational training sessions conducted",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    key: "products",
    value: 250000,
    suffix: "+",
    label: "Handmade products created",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
  {
    key: "growth",
    value: 40,
    suffix: "%",
    label: "Average participant income growth",
    bg: "bg-[#eef3ee]",
    text: "text-[#6c8c74]",
  },
  {
    key: "corporate",
    value: 60,
    suffix: "+",
    label: "Corporate engagement opportunities",
    bg: "bg-[#f1eef8]",
    text: "text-[#7c68b2]",
  },
  {
    key: "college",
    value: 100,
    suffix: "+",
    label: "College collaborations",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    key: "workshops",
    value: 30,
    suffix: "+",
    label: "Confidence & well-being workshops",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
];

const ImpactHighlights = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc] overflow-hidden border-t border-b border-[#d7e3e7]/40">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
            Impact Metrics
          </span>

          <h2 className="mt-4 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Creating Sustainable Livelihood Impact
          </h2>
        </motion.div>

        {/* STATS */}
        <StatsGrid statsData={homeStats} animate={true} />

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-2xl mx-auto px-4 py-4 rounded-[20px] bg-white border border-[#d7e3e7] shadow-sm"
        >
          <p className="text-[15px] font-medium leading-7 text-[#4a4a4a]">
            Beyond products, Aamdani focuses on creating long-term economic participation, confidence, and independence for women.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ImpactHighlights;