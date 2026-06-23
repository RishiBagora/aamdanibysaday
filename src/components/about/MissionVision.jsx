// components/about/MissionVision.jsx

import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-14 md:py-16 bg-[#f5f7f8] border-b border-[#d7e3e7]/40">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
            Mission & Vision
          </span>

          <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Building Opportunities
            <br />
            For A Better Future
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#e8f1f4] rounded-[30px] p-7 sm:p-9 shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center font-bold text-lg text-[#5A97A9] shadow-sm">
              🎯
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#5A97A9]">
              Our Mission
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#5f6971]">
              To empower financially vulnerable women by transforming their skills into sustainable livelihood opportunities through training, mentorship, and market access.
            </p>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#fff1e7] rounded-[30px] p-7 sm:p-9 shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center font-bold text-lg text-[#FF7A1A] shadow-sm">
              👁️
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[#FF7A1A]">
              Our Vision
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#5f6971]">
              A future where every woman has the opportunity to earn independently, grow confidently, and live with dignity.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;