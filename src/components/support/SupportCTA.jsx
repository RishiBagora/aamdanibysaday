// components/support/SupportCTA.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SupportCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#d7e3e7] pt-12"
        >

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Get Involved
            </span>

            <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
              Let's Create More
              <br />
              Opportunities Together
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#6b7280] max-w-2xl">
              Whether through purchases, volunteering, partnerships,
              or awareness, your support helps women-led businesses
              grow with confidence and independence.
            </p>

          </div>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to="/products"
              className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4c8798] transition-all duration-300"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium hover:bg-[#ffe6d0] transition-all duration-300"
            >
              Contact Us
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default SupportCTA;