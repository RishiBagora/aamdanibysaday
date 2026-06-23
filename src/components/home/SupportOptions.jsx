// components/home/SupportOptions.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const supportItems = [
  {
    title: "Purchasing handmade products",
    description:
      "Support local women-led businesses through your purchases of handmade goods.",
    link: "/products",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
    hover: "group-hover:bg-[#5A97A9]",
  },
  {
    title: "Supporting livelihood opportunities",
    description:
      "Help fund vocational training sessions, raw materials, and livelihood tools.",
    link: "/support",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
    hover: "group-hover:bg-[#FF7A1A]",
  },
  {
    title: "Collaborating for bulk or corporate orders",
    description:
      "Partner with us for corporate gifting, college collaborations, events, or custom co-branded items.",
    link: "/contact",
    color: "bg-[#eef3ee] text-[#6c8c74]",
    hover: "group-hover:bg-[#6c8c74]",
  },
  {
    title: "Volunteering or partnering with us",
    description:
      "Contribute your time, skills, design mentorship, or organizational partnerships.",
    link: "/support",
    color: "bg-[#f1eef8] text-[#7c68b2]",
    hover: "group-hover:bg-[#7c68b2]",
  },
];

const SupportOptions = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc] border-t border-[#d7e3e7]/40">
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
          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Get Involved
          </span>

          {/* HEADING */}
          <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            How You Can Support
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            You can become part of this journey by supporting livelihood opportunities, volunteering, or buying handmade products. Every contribution helps create meaningful and lasting impact.
          </p>
        </motion.div>

        {/* LIST */}
        <div className="mt-10 border-t border-[#d7e3e7]">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
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
                <div className="max-w-2xl">
                  <div
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mb-3 ${item.color}`}
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