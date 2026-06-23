// components/about/AboutHero.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";



const AboutHero = () => {
  const { settings } = useSettings();

  return (
    <section className="bg-[#fcfcfc] py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >

          {/* BADGE */}
          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            {settings.about_page_title || "About Aamdani"}
          </span>

          {/* HEADING */}
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#3f3f3f] leading-[1.15]">
            Empowering Women Through
            <br className="hidden sm:block" />
            Skills, Creativity & Sustainable
            <br className="hidden sm:block" />
            Livelihoods
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[15px] sm:text-base leading-7 text-[#6b7280] max-w-2xl mx-auto">
            {settings.about_page_description || `Aamdani supports women-led homemade businesses by helping
            them showcase products, reach more customers, and create
            sustainable income opportunities through meaningful work.`}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <Link
              to="/products"
              className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-medium hover:bg-[#4d8797] transition-all duration-300"
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

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 md:mt-12"
        >

          <div className="overflow-hidden rounded-[28px] border border-[#d7e3e7]">

            <img
              src="/images/about-hero.jpg"
              alt="Women Empowerment"
              className="w-full h-[260px] sm:h-[380px] lg:h-[500px] object-cover"
            />

          </div>

        </motion.div>

        

      </div>
    </section>
  );
};

export default AboutHero;