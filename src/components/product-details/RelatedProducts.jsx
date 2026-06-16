import {
  useEffect,
  useState,
} from "react";

import ProductCard from "../products/ProductCard";

import { getProducts } from "../../services/api";

const RelatedProducts = ({
  product,
}) => {
  const [
    relatedProducts,
    setRelatedProducts,
  ] = useState([]);

  useEffect(() => {
    const loadRelatedProducts =
      async () => {
        const products =
          await getProducts();

        const related =
          products
            .filter(
              (item) =>
                item.id !==
                  product.id &&
                item.category ===
                  product.category &&
                String(
                  item.status
                ).toLowerCase() ===
                  "active"
            )
            .slice(0, 4);

        setRelatedProducts(
          related
        );
      };

    loadRelatedProducts();
  }, [product]);

  if (
    !relatedProducts.length
  )
    return null;

  return (
    <section className="py-16 border-t border-[#edf1f2]">

      {/* HEADER */}
      <div className="max-w-2xl">

        <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
          Related Products
        </span>

        <h2 className="mt-5 text-[32px] sm:text-[42px] leading-tight font-semibold text-[#3f3f3f]">
          You May Also Like
        </h2>

        <p className="mt-4 text-[16px] leading-8 text-[#6b7280]">
          Explore more handmade
          products created by
          women artisans and
          local communities.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10">

        {relatedProducts.map(
          (item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          )
        )}

      </div>

    </section>
  );
};

export default RelatedProducts;