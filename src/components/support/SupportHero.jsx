// components/support/SupportHero.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useSettings } from "../../context/SettingsContext";

const SupportHero = () => {
  const { settings } = useSettings();

  return (
    <section className="py-16 md:py-20 bg-[#fcfcfc]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Connect
          </span>

          <h1 className="mt-6 text-[34px] sm:text-[48px] lg:text-[56px] leading-[1.08] font-semibold tracking-tight text-[#3f3f3f]">
            Connect With Aamdani
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[15px] sm:text-base leading-7 text-[#6b7280]">
            We welcome collaborations, partnerships, product enquiries, and support opportunities. Whether you wish to purchase products, place bulk orders, collaborate for impact initiatives, or support women-led livelihoods, we would love to connect with you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/products"
              className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4c8798] transition-all duration-300 shadow-md"
            >
              Shop Products
            </Link>

            <a
              href="#collaborate"
              className="px-6 py-3.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium hover:bg-[#ffe6d0] transition-all duration-300 shadow-md"
            >
              Collaborate
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default SupportHero;