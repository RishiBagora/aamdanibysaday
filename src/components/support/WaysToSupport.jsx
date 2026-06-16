// components/support/WaysToSupport.jsx

import { motion } from "framer-motion";

const options = [
  {
    title: "Support Through Purchases",
    description:
      "Every purchase directly supports women-led businesses and helps create sustainable income opportunities.",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    title: "Volunteer Your Skills",
    description:
      "Contribute your expertise in areas such as events, marketing, design, photography, or community outreach.",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
  {
    title: "Partner With Aamdani",
    description:
      "Collaborate with us to create meaningful opportunities and expand support for local women entrepreneurs.",
    bg: "bg-[#eef3ee]",
    text: "text-[#6c8c74]",
  },
];

const WaysToSupport = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Ways To Support
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Choose The Way
            That Works For You
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            There is no single way to contribute. Every action, big or small,
            helps strengthen opportunities for women-led businesses.
          </p>

        </div>

        {/* SUPPORT BLOCKS */}
        <div className="grid lg:grid-cols-3 gap-5 mt-10">

          {options.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`${item.bg} rounded-[28px] p-7`}
            >

              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full bg-white text-xs font-medium ${item.text}`}
              >
                Option {index + 1}
              </div>

              <h3
                className={`mt-5 text-[24px] leading-tight font-semibold ${item.text}`}
              >
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#5f6971]">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WaysToSupport;