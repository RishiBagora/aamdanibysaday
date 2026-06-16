// components/home/SupportOptions.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const supportItems = [
  {
    title: "Buy Products",
    description:
      "Support women-led homemade businesses through meaningful purchases.",
    link: "/products",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
    hover: "group-hover:bg-[#5A97A9]",
  },
  {
    title: "Volunteer",
    description:
      "Contribute your time, skills, or ideas to support local communities.",
    link: "/support",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
    hover: "group-hover:bg-[#FF7A1A]",
  },
  {
    title: "Partner With Us",
    description:
      "Collaborate with Aamdani to create sustainable opportunities for women.",
    link: "/support",
    color: "bg-[#eef3ee] text-[#6c8c74]",
    hover: "group-hover:bg-[#6c8c74]",
  },
];

const SupportOptions = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >

          {/* LABEL */}
          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Support Aamdani
          </span>

          {/* HEADING */}
          <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Simple Ways To
            <br />
            Support The Initiative
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            Every contribution helps women grow independently through handmade
            businesses, local skills, and sustainable opportunities.
          </p>

        </motion.div>

        {/* SMALL TAGS */}
        <div className="flex flex-wrap gap-3 mt-8">

          <div className="px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium">
            Support Women
          </div>

          <div className="px-4 py-2 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium">
            Volunteer
          </div>

          <div className="px-4 py-2 rounded-full bg-[#eef3ee] text-[#6c8c74] text-sm font-medium">
            Community Growth
          </div>

        </div>

        {/* LIST */}
        <div className="mt-10 border-t border-[#d7e3e7]">

          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group"
            >

              <Link
                to={item.link}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-7 border-b border-[#d7e3e7]"
              >

                {/* LEFT */}
                <div className="max-w-xl">

                  <div
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-4 ${item.color}`}
                  >
                    {item.title}
                  </div>

                  <p className="text-[15px] leading-7 text-[#6b7280]">
                    {item.description}
                  </p>

                </div>

                {/* RIGHT ICON */}
                <div
                  className={`w-11 h-11 rounded-full border border-[#d7e3e7] flex items-center justify-center shrink-0 transition-all duration-300 ${item.hover}`}
                >

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#4a4a4a] group-hover:text-white transition-all duration-300"
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

                </div>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SupportOptions;