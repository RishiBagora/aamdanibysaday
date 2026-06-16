import { motion } from "framer-motion";

const ProductDescription = ({ product }) => {
  return (
    <section className="py-16 border-t border-[#edf1f2]">

      <div className="grid lg:grid-cols-[1.5fr_420px] gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Product Details
          </span>

          <h2 className="mt-5 text-[32px] sm:text-[42px] leading-tight font-semibold text-[#3f3f3f]">
            About This Product
          </h2>

          <p className="mt-6 text-[16px] leading-8 text-[#6b7280]">
            {product.fullDescription}
          </p>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-[28px]
            border border-[#e7ecee]
            bg-white
            p-6 sm:p-8
            h-fit
          "
        >

          <h3 className="text-xl font-semibold text-[#3f3f3f]">
            Specifications
          </h3>

          <div className="mt-6 space-y-5">

            <div className="flex items-start justify-between gap-4 border-b border-[#edf1f2] pb-4">
              <span className="text-[#6b7280]">
                Category
              </span>

              <span className="font-medium text-[#3f3f3f] text-right">
                {product.category}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-[#edf1f2] pb-4">
              <span className="text-[#6b7280]">
                Material
              </span>

              <span className="font-medium text-[#3f3f3f] text-right">
                {product.material}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4 border-b border-[#edf1f2] pb-4">
              <span className="text-[#6b7280]">
                Dimensions
              </span>

              <span className="font-medium text-[#3f3f3f] text-right">
                {product.dimensions}
              </span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-[#6b7280]">
                Weight
              </span>

              <span className="font-medium text-[#3f3f3f] text-right">
                {product.weight}
              </span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ProductDescription;