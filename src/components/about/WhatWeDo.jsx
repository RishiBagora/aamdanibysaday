// components/about/WhatWeDo.jsx

import { motion } from "framer-motion";

const items = [
  {
    title: "Skill Training",
    description: "Providing skill training in handicrafts and tailoring.",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    title: "Mentorship & Support",
    description: "Offering mentorship and peer support.",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
  {
    title: "Market Access",
    description: "Connecting women directly with customers and marketplaces.",
    bg: "bg-[#eef3ee]",
    text: "text-[#6c8c74]",
  },
  {
    title: "Income Generation",
    description: "Supporting income generation opportunities.",
    bg: "bg-[#f1eef8]",
    text: "text-[#7c68b2]",
  },
  {
    title: "Handmade & Sustainable",
    description: "Promoting handmade and sustainable products.",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    title: "Empowerment Sessions",
    description: "Conducting confidence-building and financial literacy sessions.",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-[#f5f7f8] overflow-hidden border-b border-[#d7e3e7]/40">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Our Activities
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[40px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            What We Do
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
            Aamdani creates livelihood opportunities by training, mentoring, and supporting women to build stable careers.
          </p>
        </motion.div>

        {/* CONTENT SPLIT */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-14 items-center mt-10">
          
          {/* LEFT GRAPHIC CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-[#d7e3e7] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="overflow-hidden rounded-[20px] mb-6">
              <img
                src="/images/about-image-2.png"
                alt="Women Crafting"
                className="w-full h-[220px] object-cover"
              />
            </div>
            
            <p className="text-[15px] font-medium leading-7 text-[#4a4a4a] border-l-2 border-[#5A97A9] pl-4 italic">
              Through this model, women are able to build sustainable livelihoods and strengthen their financial independence.
            </p>
          </motion.div>

          {/* RIGHT CARDS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-[#d7e3e7] rounded-[24px] p-5 flex gap-4 items-start"
              >
                {/* ICON / BULLET */}
                <div
                  className={`w-8 h-8 rounded-full ${item.bg} ${item.text} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-[#3f3f3f]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-6 text-[#7b8790]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;