// components/about/BeyondFinancialImpact.jsx

import { motion } from "framer-motion";

const impactGains = [
  {
    title: "Financial independence",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    title: "Confidence and self-worth",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
  {
    title: "Sustainable livelihood opportunities",
    bg: "bg-[#eef3ee]",
    text: "text-[#6c8c74]",
  },
  {
    title: "Improved decision-making ability",
    bg: "bg-[#f1eef8]",
    text: "text-[#7c68b2]",
  },
  {
    title: "Greater social & economic participation",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BeyondFinancialImpact = () => {
  return (
    <section className="py-16 bg-[#fcfcfc] overflow-hidden border-b border-[#d7e3e7]/40">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

          {/* LEFT: BEYOND FINANCIAL INDEPENDENCE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Holistic Growth
            </span>

            <h2 className="mt-5 text-[28px] sm:text-[36px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Beyond Financial Independence
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#6b7280]">
              <p className="text-lg font-medium leading-8 text-[#4a4a4a]">
                Aamdani’s impact goes beyond income generation.
              </p>

              <p>
                Through participation in livelihood activities, women often experience increased confidence, improved communication skills, stronger decision-making ability, social engagement, and greater self-belief.
              </p>

              <p className="border-l-2 border-[#FF7A1A] pl-4 italic bg-[#fff1e7]/25 py-2.5 pr-2 rounded-r-md">
                The initiative focuses on building not just livelihoods, but also dignity, confidence, leadership, and long-term empowerment.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: OUR IMPACT GAINS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
              Core Gains
            </span>

            <h2 className="mt-5 text-[28px] sm:text-[36px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Our Impact
            </h2>

            <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
              Through Aamdani, women gain valuable capabilities that reshape their futures:
            </p>

            {/* GAINS LIST */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 space-y-3"
            >
              {impactGains.map((gain, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-[#d7e3e7] rounded-[18px] p-4 flex items-center gap-3 shadow-sm hover:scale-[1.01] transition-transform duration-200"
                >
                  <div
                    className={`w-6 h-6 rounded-full ${gain.bg} ${gain.text} flex items-center justify-center font-bold text-xs shrink-0`}
                  >
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-[#4a4a4a]">
                    {gain.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CALLOUT */}
            <div className="mt-6 bg-[#eef3ee] border border-[#d2dfd5] rounded-[20px] p-5 text-center">
              <p className="text-sm font-medium leading-6 text-[#6c8c74]">
                Every opportunity created contributes toward meaningful and lasting change.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default BeyondFinancialImpact;