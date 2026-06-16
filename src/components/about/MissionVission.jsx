// components/about/MissionVision.jsx

import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-14 md:py-16 bg-[#f5f7f8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
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
        <div className="grid md:grid-cols-2 gap-5 mt-10">

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#e8f1f4] rounded-[30px] p-7 sm:p-8"
          >

          
            <h3 className="mt-6 text-2xl font-semibold text-[#5A97A9]">
              Our Mission
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#5f6971]">
              To support women-led homemade businesses by providing
              visibility, opportunities, and community support that
              enables them to earn independently and grow sustainably.
            </p>

          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#fff1e7] rounded-[30px] p-7 sm:p-8"
          >

          

            <h3 className="mt-6 text-2xl font-semibold text-[#FF7A1A]">
              Our Vision
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#5f6971]">
              To create a future where talented women have equal
              opportunities to transform their skills into sustainable
              livelihoods and stronger communities.
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;