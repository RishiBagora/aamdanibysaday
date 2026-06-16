import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

const ProductsHero = ({ totalProducts = 0 }) => {
  const { settings } = useSettings();

  return (
    <section className="bg-[#fcfcfc] border-b border-[#e7ecee]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          {/* BADGE */}
          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Handmade Collection
          </span>

          {/* HEADING */}
          <h1 className="mt-5 text-[34px] sm:text-[48px] lg:text-[58px] leading-[1.05] font-semibold tracking-tight text-[#3f3f3f]">
            {settings.products_page_title || "Handmade Products"}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[15px] sm:text-base leading-7 text-[#6b7280] max-w-2xl">
            {settings.products_page_description || `Discover handcrafted products created by talented women artisans.
            Every purchase supports livelihoods, creativity, and sustainable
            opportunities within local communities.`}
          </p>

          {/* STATS */}
          <div className="flex flex-wrap gap-3 mt-7">

            <div className="px-4 py-2 rounded-full bg-[#eef3ee] text-[#6c8c74] text-sm font-medium">
              {totalProducts}+ Products
            </div>

            <div className="px-4 py-2 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium">
              Women-Led Businesses
            </div>

            <div className="px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium">
              Handmade & Ethical
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProductsHero;