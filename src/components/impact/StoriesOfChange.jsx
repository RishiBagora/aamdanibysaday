// components/impact/StoriesOfChange.jsx

import { motion } from "framer-motion";

const stories = [
  {
    name: "Sunita Devi",
    title: "Turning Creativity Into Opportunity",
    image: "/images/story-1.jpg",
    description:
      "What started as a small crochet hobby gradually became a meaningful source of income. Through visibility and community support, her handmade products now reach a wider audience.",
  },
  {
    name: "Meera Kumari",
    title: "Preserving Traditional Skills",
    image: "/images/story-2.jpg",
    description:
      "By transforming traditional craft skills into products people value, Meera has been able to contribute financially while continuing work she genuinely enjoys.",
  },
];

const StoriesOfChange = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Stories Of Change
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Behind Every Product
            Is A Story
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            Every journey is unique, but they all share a common thread:
            resilience, creativity, and determination.
          </p>

        </div>

        {/* STORIES */}
        <div className="mt-12 space-y-16">

          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[30px] border border-[#d7e3e7]">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-[280px] sm:h-[420px] object-cover"
                />
              </div>

              {/* CONTENT */}
              <div>

                <p className="text-sm text-[#5A97A9] font-medium">
                  {story.name}
                </p>

                <h3 className="mt-3 text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-[#3f3f3f]">
                  {story.title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-[#6b7280]">
                  {story.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default StoriesOfChange;