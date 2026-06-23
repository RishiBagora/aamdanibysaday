// components/about/GetInvolved.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const waysToSupport = [
  { text: "Purchasing handmade products", color: "bg-[#e8f1f4] text-[#5A97A9]" },
  { text: "Collaborating for corporate or bulk orders", color: "bg-[#fff1e7] text-[#FF7A1A]" },
  { text: "Volunteering with us", color: "bg-[#eef3ee] text-[#6c8c74]" },
  { text: "Supporting livelihood initiatives", color: "bg-[#f1eef8] text-[#7c68b2]" },
  { text: "Partnering for social impact projects", color: "bg-[#e8f1f4] text-[#5A97A9]" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const GetInvolved = () => {
  return (
    <section className="py-16 bg-[#f5f7f8] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[32px] border border-[#d7e3e7] bg-white p-8 sm:p-10 lg:p-12 shadow-sm"
        >

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
              Get Involved
            </span>

            <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.12] font-semibold tracking-tight text-[#3f3f3f]">
              You can support Aamdani by:
            </h2>

            {/* Support list */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {waysToSupport.map((way, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-[#d7e3e7]/20 ${way.color}`}
                >
                  {way.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Together statement */}
            <p className="mt-6 text-base font-medium leading-7 text-[#6b7280]">
              Together, we can help create more opportunities for women to earn and grow independently.
            </p>

          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/products"
              className="px-6 py-3.5 rounded-full bg-[#5A97A9] text-white text-sm font-semibold hover:bg-[#4d8797] transition-all duration-300 shadow-md"
            >
              Explore Products
            </Link>

            <Link
              to="/support"
              className="px-6 py-3.5 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-semibold hover:bg-[#ffe7d3] transition-all duration-300 shadow-sm"
            >
              Support Initiative
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default GetInvolved;