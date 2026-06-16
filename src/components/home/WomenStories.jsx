// components/home/WomenStories.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stories = [
  {
    id: 1,
    name: "Sunita",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    id: 2,
    name: "Meera",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    id: 3,
    name: "Kavita",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#eef3ee] text-[#6c8c74]",
  },
  {
    id: 4,
    name: "Pooja",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#f1eef8] text-[#7c68b2]",
  },
  {
    id: 5,
    name: "Anjali",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    id: 6,
    name: "Ritika",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
];

const WomenStories = () => {
  return (
    <section className="py-14 md:py-16 bg-[#f5f7f8] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >

            {/* LABEL */}
            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              Women Behind The Work
            </span>

            {/* HEADING */}
            <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Stories Of Strength,
              <br />
              Passion & Independence
            </h2>

          </motion.div>

          {/* RIGHT TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[15px] leading-7 text-[#6b7280] max-w-lg"
          >
            Every product represents the dedication and creativity of women
            building sustainable livelihoods through handmade work.
          </motion.p>

        </div>

        {/* SMALL TAGS */}
        <div className="flex flex-wrap gap-3 mt-8">

          <div className="px-4 py-2 rounded-full bg-[#e8f1f4] text-[#5A97A9] text-sm font-medium">
            Women-Led
          </div>

          <div className="px-4 py-2 rounded-full bg-[#fff1e7] text-[#FF7A1A] text-sm font-medium">
            Handmade
          </div>

          <div className="px-4 py-2 rounded-full bg-[#eef3ee] text-[#6c8c74] text-sm font-medium">
            Local Communities
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mt-10">

          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >

              <Link to="/impact">

                <div className="relative overflow-hidden rounded-[24px] border border-[#d7e3e7] bg-white">

                  {/* IMAGE */}
                  <div className="overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* NAME */}
                  <div className="p-3">

                    <div
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${story.color}`}
                    >
                      {story.name}
                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WomenStories;