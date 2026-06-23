// components/about/WhyNeeded.jsx

import { motion } from "framer-motion";

const WhyNeeded = () => {
  return (
    <section className="py-16 bg-[#fcfcfc] overflow-hidden border-t border-[#d7e3e7]/40">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Core Need
            </span>

            <h2 className="mt-5 text-[30px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Why Aamdani
              <br />
              Is Needed
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
              Empowering women from underserved communities requires addressing systemic economic obstacles and creating pathways for self-reliance.
            </p>
          </motion.div>

          {/* RIGHT CONTENT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Paragraph 1 Card */}
            <div className="bg-white border border-[#d7e3e7] rounded-[24px] p-6 shadow-sm">
              <p className="text-[15px] leading-7 text-[#6b7280]">
                Despite possessing valuable skills, many women continue to face barriers such as limited market access, financial dependence, lack of livelihood opportunities, and restricted social mobility.
              </p>
            </div>

            {/* Paragraph 2 Card */}
            <div className="bg-white border border-[#d7e3e7] rounded-[24px] p-6 shadow-sm">
              <p className="text-[15px] leading-7 text-[#6b7280]">
                Many women engaged in tailoring, embroidery, handicrafts, and home-based work struggle to transform their skills into sustainable income due to limited exposure and economic opportunities.
              </p>
            </div>

            {/* Paragraph 3 Card */}
            <div className="bg-[#eef3ee] border border-[#d2dfd5] rounded-[24px] p-6">
              <p className="text-[15px] font-medium leading-7 text-[#6c8c74]">
                Aamdani works to bridge this gap by connecting women with training, mentorship, and direct livelihood opportunities.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyNeeded;