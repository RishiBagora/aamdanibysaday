import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

const categories = [
  "Crochet",
  "Home Decor",
  "Accessories",
  "Handmade Gifts",
  "Textiles",
  "Food Products",
];

const ProductsSidebar = ({
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
    <motion.aside
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="hidden lg:block w-[280px]"
    >
      <div className="sticky top-24 rounded-[24px] border border-[#e7ecee] bg-white p-6">

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-[#3f3f3f]">
          Filters
        </h3>

        {/* CATEGORY */}
        <div className="mt-8">

          <h4 className="text-sm font-medium text-[#5A97A9] uppercase tracking-wide">
            Categories
          </h4>

          <div className="mt-4 space-y-3">

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === ""}
                onChange={() => setSelectedCategory("")}
              />

              <span className="text-sm text-[#3f3f3f]">
                All Products
              </span>
            </label>

            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() =>
                    setSelectedCategory(category)
                  }
                />

                <span className="text-sm text-[#3f3f3f]">
                  {category}
                </span>
              </label>
            ))}

          </div>

        </div>

        {/* PRICE */}
        <div className="mt-8 pt-8 border-t border-[#edf1f2]">

          <h4 className="text-sm font-medium text-[#FF7A1A] uppercase tracking-wide">
            Price Range
          </h4>

          <div className="mt-4 space-y-3">

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === ""}
                onChange={() => setSelectedPrice("")}
              />

              <span className="text-sm text-[#3f3f3f]">
                All Prices
              </span>
            </label>

             <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === "0-500"}
                onChange={() =>
                  setSelectedPrice("0-500")
                }
              />

              <span className="text-sm text-[#3f3f3f]">
                {currencySymbol}0 - {currencySymbol}500
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === "500-1000"}
                onChange={() =>
                  setSelectedPrice("500-1000")
                }
              />

              <span className="text-sm text-[#3f3f3f]">
                {currencySymbol}500 - {currencySymbol}1000
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={selectedPrice === "1000+"}
                onChange={() =>
                  setSelectedPrice("1000+")
                }
              />

              <span className="text-sm text-[#3f3f3f]">
                {currencySymbol}1000+
              </span>
            </label>

          </div>

        </div>

        {/* OTHER FILTERS */}
        <div className="mt-8 pt-8 border-t border-[#edf1f2]">

          <h4 className="text-sm font-medium text-[#6c8c74] uppercase tracking-wide">
            Availability
          </h4>

          <div className="mt-4 space-y-4">

            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) =>
                  setInStockOnly(e.target.checked)
                }
              />

              <span className="text-sm text-[#3f3f3f]">
                In Stock Only
              </span>

            </label>

            <label className="flex items-center gap-3 cursor-pointer">

              <input
                type="checkbox"
                checked={newOnly}
                onChange={(e) =>
                  setNewOnly(e.target.checked)
                }
              />

              <span className="text-sm text-[#3f3f3f]">
                New Arrivals
              </span>

            </label>

          </div>

        </div>

      </div>
    </motion.aside>
  );
};

export default ProductsSidebar;