// components/home/WhyHandmade.jsx

import { motion } from "framer-motion";

const WhyHandmade = () => {
  return (
    <section className="py-14 md:py-16 bg-[#f5f7f8] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            {/* BADGE */}
            <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] mb-5 uppercase">
              Our Philosophy
            </span>

            {/* HEADING */}
            <h2 className="text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Why Handmade Matters
            </h2>

            {/* CONTENT */}
            <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#6b7280]">
              <p className="text-[#4a4a4a] text-lg font-medium leading-8">
                In a world of mass-produced products, handmade work represents time, skill, identity, and human connection.
              </p>
              
              <p>
                Every Aamdani product supports ethical production while helping women transform traditional skills into sustainable livelihood opportunities.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE GRAPHIC / IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[28px] border border-[#d7e3e7]">
              <img
                src="/images/about-image-2.png"
                alt="Handmade work details"
                className="w-full h-[280px] sm:h-[340px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhyHandmade;
