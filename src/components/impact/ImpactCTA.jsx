// components/impact/ImpactCTA.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ImpactCTA = () => {
  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#d7e3e7] pt-12"
        >

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">

            {/* LEFT */}
            <div>

              <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
                Support The Next Story
              </span>

              <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
                Every Purchase Helps Create
                <br />
                Another Success Story
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#6b7280]">
                Behind every handmade product is a woman building
                confidence, independence, and opportunity through
                her work.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-4">

              <Link
                to="/products"
                className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4c8798] transition-all duration-300"
              >
                Explore Products
              </Link>

              <Link
                to="/support"
                className="px-6 py-3.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium hover:bg-[#ffe6d0] transition-all duration-300"
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

export default ImpactCTA;