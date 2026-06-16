// components/about/HowItWorks.jsx

import { motion } from "framer-motion";

const items = [
  {
    title: "Women Create",
    description:
      "Local women transform skills, creativity, and experience into handmade products.",
  },
  {
    title: "We Showcase",
    description:
      "Aamdani helps bring their work to a wider audience through storytelling and visibility.",
  },
  {
    title: "People Support",
    description:
      "Customers directly support women-led businesses through meaningful purchases.",
  },
  {
    title: "Communities Grow",
    description:
      "Sustainable income creates confidence, independence, and long-term community impact.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14">

          {/* LEFT */}
          <div>

            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              How It Works
            </span>

            <h2 className="mt-5 text-[30px] sm:text-[40px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              A Simple Ecosystem
              <br />
              Built Around
              <br />
              Opportunity
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
              Aamdani connects women-led homemade businesses with people
              who value craftsmanship, community, and meaningful impact.
            </p>

          </div>

          {/* RIGHT */}
          <div className="border-t border-[#d7e3e7]">

            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="py-7 border-b border-[#d7e3e7]"
              >

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <h3 className="text-[22px] font-medium text-[#3f3f3f] min-w-[220px]">
                    {item.title}
                  </h3>

                  <p className="max-w-xl text-[15px] leading-7 text-[#6b7280]">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;