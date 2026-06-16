// components/about/WomenWeSupport.jsx

import { motion } from "framer-motion";

const categories = [
  {
    title: "Crochet & Handmade Crafts",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "Home Decor",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    title: "Embroidery & Textiles",
    color: "bg-[#eef3ee] text-[#6c8c74]",
  },
  {
    title: "Gift & Lifestyle Products",
    color: "bg-[#f1eef8] text-[#7c68b2]",
  },
  {
    title: "Traditional Handicrafts",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "Homemade Food Products",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
];

const WomenWeSupport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >

          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
            Women We Support
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[40px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Diverse Skills,
            <br />
            Shared Opportunities
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            Aamdani works with women from different backgrounds who
            transform their skills, creativity, and experience into
            meaningful products and sustainable livelihoods.
          </p>

        </motion.div>

        {/* CATEGORIES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-[#f5f7f8] border border-[#d7e3e7] rounded-[24px] p-6"
            >

              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${item.color}`}
              >
                Category
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#3f3f3f]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#6b7280]">
                Supporting women involved in this category through
                visibility, community support, and market access.
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WomenWeSupport;