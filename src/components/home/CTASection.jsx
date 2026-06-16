// components/home/CTASection.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-[#d7e3e7] bg-white p-7 sm:p-10 lg:p-12"
        >

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-2xl">

              {/* LABEL */}
              <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
                Aamdani Initiative
              </span>

              {/* HEADING */}
              <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
                Supporting Women Through
                <br />
                Handmade Businesses &
                <br />
                Meaningful Opportunities
              </h2>

              {/* SMALL TAGS */}
              <div className="flex flex-wrap gap-3 mt-7">

                <div className="px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium">
                  Women Empowerment
                </div>

                <div className="px-4 py-2 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium">
                  Handmade Products
                </div>

                <div className="px-4 py-2 rounded-full bg-[#eef3ee] text-[#6c8c74] text-sm font-medium">
                  Sustainable Growth
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-4">

              {/* PRIMARY BUTTON */}
              <Link
                to="/products"
                className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4c8798] transition-all duration-300 text-center"
              >
                Explore Products
              </Link>

              {/* SECONDARY BUTTON */}
              <Link
                to="/support"
                className="px-6 py-3.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium hover:bg-[#ffe7d3] transition-all duration-300 text-center"
              >
                Support Initiative
              </Link>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;