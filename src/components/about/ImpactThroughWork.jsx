// components/about/ImpactThroughWork.jsx

import { motion } from "framer-motion";

const points = [
  "Every product carries a story of effort.",
  "Every purchase creates an opportunity.",
  "Every opportunity builds independence.",
];

const ImpactThroughWork = () => {
  return (
    <section className="py-16 bg-[#f5f7f8] overflow-hidden">
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
            Real Impact
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[40px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Impact Through
            Meaningful Work
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280] max-w-xl">
            Behind every handmade product is dedication, skill,
            and a journey toward financial independence.
          </p>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >

          <div className="overflow-hidden rounded-[30px] border border-[#d7e3e7]">
            <img
              src="/images/impact-work.jpg"
              alt=""
              className="w-full h-[260px] sm:h-[450px] object-cover"
            />
          </div>

        </motion.div>

        {/* POINTS */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">

          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] border border-[#d7e3e7] p-6"
            >
              <p className="text-[16px] leading-7 text-[#4a4a4a]">
                {point}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactThroughWork;