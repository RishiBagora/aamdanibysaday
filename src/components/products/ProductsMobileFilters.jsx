import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

const categories = [
  "Crochet",
  "Home Decor",
  "Accessories",
  "Handmade Gifts",
  "Textiles",
  "Food Products",
];

const ProductsMobileFilters = ({
  isOpen,
  setIsOpen,

  selectedCategory,
  setSelectedCategory,

  selectedPrice,
  setSelectedPrice,

  inStockOnly,
  setInStockOnly,

  newOnly,
  setNewOnly,
}) => {
  const { settings } = useSettings();
  const currencySymbol = settings.currency_symbol || "₹";

  return (
    <AnimatePresence>

      {isOpen && (
        <>

          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          />

          {/* DRAWER */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
            className="
              fixed
              bottom-0
              left-0
              right-0
              z-[60]
              lg:hidden
              bg-white
              rounded-t-[28px]
              max-h-[85vh]
              overflow-y-auto
              shadow-2xl
            "
          >
            {/* HEADER */}
            <div className="sticky top-0 bg-white border-b border-[#edf1f2] px-5 py-4 flex items-center justify-between">

              <h3 className="text-lg font-semibold text-[#3f3f3f]">
                Filters
              </h3>

              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full border border-[#edf1f2] flex items-center justify-center"
              >
                <X size={18} />
              </button>

            </div>

            <div className="p-5">

              {/* CATEGORY */}
              <div>

                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#5A97A9]">
                  Categories
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      selectedCategory === ""
                        ? "bg-[#5A97A9] text-white border-[#5A97A9]"
                        : "border-[#e7ecee]"
                    }`}
                  >
                    All
                  </button>

                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        selectedCategory === category
                          ? "bg-[#5A97A9] text-white border-[#5A97A9]"
                          : "border-[#e7ecee]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}

                </div>

              </div>

              {/* PRICE */}
              <div className="mt-8">

                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#FF7A1A]">
                  Price Range
                </h4>

                <div className="mt-4 flex flex-wrap gap-2">

                  {[
                    "",
                    "0-500",
                    "500-1000",
                    "1000+",
                  ].map((price) => (
                    <button
                      key={price}
                      onClick={() =>
                        setSelectedPrice(price)
                      }
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        selectedPrice === price
                          ? "bg-[#FF7A1A] text-white border-[#FF7A1A]"
                          : "border-[#e7ecee]"
                      }`}
                    >
                      {price === ""
                        ? "All"
                        : price.includes("+")
                        ? `${currencySymbol}${price.replace("+", "")}+`
                        : price.split("-").map((p) => `${currencySymbol}${p}`).join(" - ")}
                    </button>
                  ))}

                </div>

              </div>

              {/* OTHER */}
              <div className="mt-8">

                <h4 className="text-sm font-semibold uppercase tracking-wide text-[#6c8c74]">
                  Availability
                </h4>

                <div className="mt-4 space-y-4">

                  <label className="flex items-center gap-3">

                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) =>
                        setInStockOnly(
                          e.target.checked
                        )
                      }
                    />

                    <span className="text-sm text-[#3f3f3f]">
                      In Stock Only
                    </span>

                  </label>

                  <label className="flex items-center gap-3">

                    <input
                      type="checkbox"
                      checked={newOnly}
                      onChange={(e) =>
                        setNewOnly(
                          e.target.checked
                        )
                      }
                    />

                    <span className="text-sm text-[#3f3f3f]">
                      New Arrivals
                    </span>

                  </label>

                </div>

              </div>

              {/* BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="
                  w-full
                  mt-8
                  h-[52px]
                  rounded-full
                  bg-[#3f3f3f]
                  text-white
                  font-medium
                "
              >
                Apply Filters
              </button>

            </div>

          </motion.div>

        </>
      )}

    </AnimatePresence>
  );
};

export default ProductsMobileFilters;