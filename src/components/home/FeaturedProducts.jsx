import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import ProductCard from "../products/ProductCard";
import { getProducts } from "../../services/api";

const FeaturedProducts = () => {
  const [
    featuredProducts,
    setFeaturedProducts,
  ] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadProducts =
      async () => {
        setLoading(true);

        const products =
          await getProducts();

        const featured =
          products
            .filter(
              (product) =>
                product.featuredHome &&
                String(
                  product.status
                ).toLowerCase() ===
                  "active"
            )
            .slice(0, 3);

        setFeaturedProducts(
          featured
        );

        setLoading(false);
      };

    loadProducts();
  }, []);

  if (
    loading ||
    !featuredProducts.length
  ) {
    return null;
  }

  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="max-w-2xl"
          >

            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Featured Products
            </span>

            <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Featured Handmade Products
            </h2>

            <div className="mt-5 text-[15px] leading-7 text-[#6b7280] max-w-xl space-y-3">
              <p>
                Explore handcrafted products made with care, creativity, and purpose by women building their own livelihoods through Aamdani.
              </p>
              <p>
                Each product reflects skill, dedication, and a journey toward financial independence.
              </p>
            </div>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
          >

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              Shop All Products

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M8 7H17V16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

            </Link>

          </motion.div>

        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 mt-8">

          <div className="px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium">
            Handmade
          </div>

          <div className="px-4 py-2 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium">
            Women-Led
          </div>

          <div className="px-4 py-2 rounded-full bg-[#eef3ee] text-[#6c8c74] text-sm font-medium">
            Sustainable
          </div>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          {featuredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;