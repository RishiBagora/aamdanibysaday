// components/impact/ImpactHero.jsx

import { motion } from "framer-motion";

import { useSettings } from "../../context/SettingsContext";

const stats = [
  {
    value: "120+",
    label: "Women Supported",
    color: "text-[#5A97A9]",
  },
  {
    value: "350+",
    label: "Products Listed",
    color: "text-[#FF7A1A]",
  },
  {
    value: "15+",
    label: "Communities",
    color: "text-[#6c8c74]",
  },
  {
    value: "500+",
    label: "Supporters",
    color: "text-[#7c68b2]",
  },
];

const ImpactHero = () => {
  const { settings } = useSettings();

  return (
    <section className="py-12 md:py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[12px] tracking-[0.25em] uppercase text-[#5A97A9] font-medium">
            {settings.impact_page_title || "Our Impact"}
          </p>

          <h1 className="mt-5 text-[34px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-[#3f3f3f]">
            Real Stories.
            <br />
            Real Progress.
          </h1>

          <p className="mt-6 text-[15px] sm:text-base leading-7 text-[#6b7280] max-w-2xl mx-auto">
            {settings.impact_page_description || `A look at the women, products, and communities supported
            through Aamdani. Every number represents effort,
            opportunity, and meaningful change.`}
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10"
        >
          <div className="overflow-hidden rounded-[32px] border border-[#d7e3e7]">

            <img
              src="/images/impact-hero.jpg"
              alt="Impact"
              className="w-full h-[280px] sm:h-[420px] lg:h-[580px] object-cover"
            />

          </div>
        </motion.div>

        {/* STATS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 border-y border-[#d7e3e7]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={index}
                className="py-8 text-center border-r border-[#d7e3e7] last:border-r-0"
              >
                <h3
                  className={`text-[34px] sm:text-[42px] font-semibold tracking-tight ${item.color}`}
                >
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-[#6b7280]">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ImpactHero;