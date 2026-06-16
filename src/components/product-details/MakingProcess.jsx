import { motion } from "framer-motion";

const steps = [
  {
    title: "Material Selection",
    description:
      "Carefully chosen materials ensure quality, durability, and a beautiful handcrafted finish.",
  },
  {
    title: "Hand Crafting",
    description:
      "Every product is created by hand using traditional skills, patience, and attention to detail.",
  },
  {
    title: "Finishing & Quality Check",
    description:
      "Each piece is inspected before delivery to ensure it meets quality standards.",
  },
];

const MakingProcess = ({ product }) => {
  if (!product?.processImages?.length) return null;

  return (
    <section className="py-16 border-t border-[#edf1f2]">

      {/* HEADER */}
      <div className="max-w-3xl">

        <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
          Making Process
        </span>

        <h2 className="mt-5 text-[32px] sm:text-[42px] leading-tight font-semibold text-[#3f3f3f]">
          From Handmade Skills
          <br />
          To Finished Product
        </h2>

        <p className="mt-5 text-[16px] leading-8 text-[#6b7280]">
          {product.processDescription}
        </p>

      </div>

      {/* PROCESS GRID */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">

        {product.processImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="
              overflow-hidden
              rounded-[24px]
              border border-[#e7ecee]
              bg-white
            "
          >

            {/* IMAGE */}
            <img
              src={image}
              alt={steps[index]?.title}
              className="
                w-full
                aspect-[4/3]
                object-cover
              "
            />

            {/* CONTENT */}
            <div className="p-5">

              <div className="w-9 h-9 rounded-full bg-[#e8f1f4] text-[#5A97A9] flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#3f3f3f]">
                {steps[index]?.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                {steps[index]?.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default MakingProcess;