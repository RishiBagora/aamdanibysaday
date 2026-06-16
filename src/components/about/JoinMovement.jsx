// components/about/JoinMovement.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const JoinMovement = () => {
  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-[#d7e3e7] bg-white p-8 sm:p-10 lg:p-12"
        >

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Join The Movement
            </span>

            <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.12] font-semibold tracking-tight text-[#3f3f3f]">
              Every Purchase,
              Every Partnership,
              Every Contribution Matters
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#6b7280] max-w-2xl">
              Whether you choose to support handmade products,
              collaborate with us, or help spread awareness,
              your contribution helps create meaningful opportunities
              for women and their communities.
            </p>

          </div>

         

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to="/products"
              className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4d8797] transition-all duration-300"
            >
              Explore Products
            </Link>

            <Link
              to="/support"
              className="px-6 py-3.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium hover:bg-[#ffe7d3] transition-all duration-300"
            >
              Get Involved
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default JoinMovement;