import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import { getProducts } from "../services/api";

import Breadcrumb from "../components/common/Breadcrumb";
import ProductGallery from "../components/product-details/ProductGallery";
import ProductInfo from "../components/product-details/ProductInfo";
import ProductDescription from "../components/product-details/ProductDescription";
import MeetTheMaker from "../components/product-details/MeetTheMaker";
import MakingProcess from "../components/product-details/MakingProcess";
import RelatedProducts from "../components/product-details/RelatedProducts";

const ProductDetails = () => {
  const { slug } = useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);

      const products =
        await getProducts();

      const foundProduct =
        products.find(
          (item) =>
            item.slug === slug &&
            String(
              item.status
            ).toLowerCase() ===
              "active"
        );

      setProduct(
        foundProduct || null
      );

      setLoading(false);
    };

    loadProduct();
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center">
        <p className="text-[#6b7280]">
          Loading product...
        </p>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">

          <h1 className="text-3xl font-semibold text-[#3f3f3f]">
            Product Not Found
          </h1>

          <p className="mt-4 text-[#6b7280]">
            The product you're
            looking for doesn't
            exist.
          </p>

        </div>
      </section>
    );
  }

  return (
    <main className="bg-[#fcfcfc]">

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Products",
              href: "/products",
            },
            {
              label:
                product.category,
            },
            {
              label:
                product.name,
            },
          ]}
        />

      </div>

      {/* HERO */}
      <section className="py-10 md:py-14">

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">

            <ProductGallery
              images={
                product.images
              }
            />

            <ProductInfo
              product={product}
            />

          </div>

        </div>

      </section>

      {/* DESCRIPTION */}
      <section>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <ProductDescription
            product={product}
          />

        </div>

      </section>

      {/* MAKER */}
      <section>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <MeetTheMaker
            product={product}
          />

        </div>

      </section>

      {/* PROCESS */}
      <section>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <MakingProcess
            product={product}
          />

        </div>

      </section>

      {/* RELATED */}
      <section>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <RelatedProducts
            product={product}
          />

        </div>

      </section>

    </main>
  );
};

export default ProductDetails;