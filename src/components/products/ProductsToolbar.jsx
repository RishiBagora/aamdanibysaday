import { Search, SlidersHorizontal } from "lucide-react";

const ProductsToolbar = ({
  totalProducts,

  searchTerm,
  setSearchTerm,

  sortBy,
  setSortBy,

  setShowMobileFilters,
}) => {
  return (
    <div className="rounded-[24px] border border-[#e7ecee] bg-white p-4 sm:p-5">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* MOBILE FILTER BUTTON */}
          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e7ecee] text-sm font-medium text-[#3f3f3f]"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <p className="text-sm text-[#6b7280]">
            Showing{" "}
            <span className="font-semibold text-[#3f3f3f]">
              {totalProducts}
            </span>{" "}
            products
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* SEARCH */}
          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]"
            />

            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="
                w-full sm:w-[260px]
                h-[46px]
                rounded-full
                border border-[#e7ecee]
                bg-white
                pl-11 pr-4
                text-sm
                outline-none
                focus:border-[#5A97A9]
                transition-all
              "
            />

          </div>

          {/* SORT */}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="
              h-[46px]
              px-4
              rounded-full
              border border-[#e7ecee]
              bg-white
              text-sm
              text-[#3f3f3f]
              outline-none
              focus:border-[#5A97A9]
              cursor-pointer
            "
          >
            <option value="default">
              Sort By
            </option>

            <option value="newest">
              Newest First
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="name-asc">
              Name: A to Z
            </option>

            <option value="name-desc">
              Name: Z to A
            </option>

          </select>

        </div>

      </div>

    </div>
  );
};

export default ProductsToolbar;