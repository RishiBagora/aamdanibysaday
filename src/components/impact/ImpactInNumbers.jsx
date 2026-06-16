// components/impact/ImpactInNumbers.jsx

import { motion } from "framer-motion";

const stats = [
  {
    value: "120+",
    title: "Women Supported",
    description:
      "Women connected with opportunities through Aamdani.",
    color: "text-[#5A97A9]",
  },
  {
    value: "350+",
    title: "Products Listed",
    description:
      "Handmade products showcased through the platform.",
    color: "text-[#FF7A1A]",
  },
  {
    value: "15+",
    title: "Communities",
    description:
      "Communities reached through local partnerships.",
    color: "text-[#6c8c74]",
  },
  {
    value: "500+",
    title: "Supporters",
    description:
      "People supporting women-led businesses and initiatives.",
    color: "text-[#7c68b2]",
  },
];

const ImpactInNumbers = () => {
  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
            Impact In Numbers
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Measuring Progress
            Through Real Outcomes
          </h2>

        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-10">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-white border border-[#d7e3e7] rounded-[28px] p-7"
            >

              <h3
                className={`text-[42px] font-semibold tracking-tight ${item.color}`}
              >
                {item.value}
              </h3>

              <h4 className="mt-3 text-xl font-medium text-[#3f3f3f]">
                {item.title}
              </h4>

              <p className="mt-3 text-[15px] leading-7 text-[#6b7280]">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactInNumbers;