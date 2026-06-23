// components/about/OurStory.jsx

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Grassroots Purpose",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "Women Livelihoods",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    title: "Community Dignity",
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
         

          <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Our Story
          </h2>

          <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#6b7280]">
            <p>
              Aamdani is a women’s livelihood and empowerment initiative by Saday Sadev, a youth-led grassroots NGO committed to creating sustainable social impact and community empowerment.
            </p>
            <p>
              Many women possess valuable skills and creativity, but due to financial limitations, lack of exposure, and limited market access, they often remain unable to earn independently.
            </p>
            <p>
              Aamdani was created to bridge this gap by helping women transform their abilities into sustainable sources of income through training, mentorship, and direct access to customers.
            </p>
            <p className="font-medium text-[#4a4a4a] border-l-2 border-[#5A97A9] pl-4 italic bg-[#e8f1f4]/25 py-2.5 pr-2 rounded-r-md">
              Our work focuses not only on income generation, but also on building confidence, dignity, independence, and long-term empowerment.
            </p>
          </div>
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
              src="/images/about-image-1.png"
              alt="Our Story - Women Artisan Training"
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