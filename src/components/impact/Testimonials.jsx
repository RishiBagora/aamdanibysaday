// components/impact/Testimonials.jsx

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Through Aamdani, I was able to showcase my work to more people and gain confidence in my skills.",
    name: "Sunita Devi",
    role: "Crochet Artisan",
  },
  {
    quote:
      "The support and visibility helped me connect with customers who truly value handmade products.",
    name: "Meera Kumari",
    role: "Handicraft Creator",
  },
  {
    quote:
      "Aamdani encouraged me to continue my work and create opportunities for my family through my craft.",
    name: "Kavita Sharma",
    role: "Traditional Artisan",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#f1eef8] px-4 py-2 text-xs font-medium tracking-wide text-[#7c68b2] uppercase">
            Voices Of Impact
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Stories Shared
            By The Women
          </h2>

        </div>

        {/* QUOTES */}
        <div className="mt-10 space-y-6">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-[#f5f7f8] border border-[#d7e3e7] rounded-[28px] p-7 sm:p-8"
            >

              <p className="text-[18px] sm:text-[22px] leading-[1.7] text-[#3f3f3f]">
                "{item.quote}"
              </p>

              <div className="mt-6">

                <h4 className="font-semibold text-[#3f3f3f]">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm text-[#6b7280]">
                  {item.role}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;