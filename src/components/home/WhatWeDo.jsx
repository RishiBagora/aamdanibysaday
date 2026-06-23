// components/home/WhatWeDo.jsx

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Community Outreach",
    description:
      "Identifying and engaging women from underserved communities and creating awareness around livelihood opportunities.",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    number: "02",
    title: "Skill Development",
    description:
      "Training women in tailoring, embroidery, handicrafts, and other livelihood-based skills.",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
  {
    number: "03",
    title: "Mentorship & Support",
    description:
      "Providing continuous guidance, confidence-building, and community support.",
    bg: "bg-[#eef3ee]",
    text: "text-[#6c8c74]",
  },
  {
    number: "04",
    title: "Market Access",
    description:
      "Connecting women directly with customers, exhibitions, and livelihood opportunities.",
    bg: "bg-[#f1eef8]",
    text: "text-[#7c68b2]",
  },
  {
    number: "05",
    title: "Sustainable Income",
    description:
      "Helping women build long-term financial independence and economic stability.",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhatWeDo = () => {
  return (
    <section className="py-14 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            How It Works
          </span>

          <h2 className="mt-4 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            How Aamdani Creates Impact
          </h2>
        </motion.div>

        {/* 5-STEP GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="bg-[#f5f7f8] border border-[#d7e3e7] rounded-[24px] p-6 flex flex-col justify-between"
            >
              <div>
                {/* NUMBER CIRCLE */}
                <div
                  className={`w-11 h-11 rounded-full ${step.bg} ${step.text} flex items-center justify-center font-bold text-sm mb-5`}
                >
                  {step.number}
                </div>

                {/* TITLE */}
                <h3 className="text-[17px] font-semibold text-[#3f3f3f] tracking-tight">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm leading-6 text-[#6b7280]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;