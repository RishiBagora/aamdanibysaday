// components/about/OurStory.jsx

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Started With Purpose",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "Women First",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    title: "Community Driven",
    color: "bg-[#eef3ee] text-[#6c8c74]",
  },
];

const OurStory = () => {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Our Story
          </span>

          <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            A Small Initiative
            <br />
            Creating Meaningful Change
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-[#6b7280]">
            Aamdani was created with a simple belief that talented women
            should have opportunities to earn, grow, and become financially
            independent through their skills and creativity.
          </p>

          <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
            Many women create beautiful handmade products but struggle to
            reach customers and markets. Aamdani helps bridge that gap by
            providing visibility, storytelling, and community support.
          </p>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10"
        >

          <div className="overflow-hidden rounded-[28px] border border-[#d7e3e7]">
            <img
              src="/images/our-story.jpg"
              alt="Our Story"
              className="w-full h-[260px] sm:h-[420px] object-cover"
            />
          </div>

        </motion.div>

        {/* HIGHLIGHTS */}
        <div className="flex flex-wrap gap-3 mt-8">

          {highlights.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${item.color}`}
            >
              {item.title}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurStory;