// components/impact/CommunitiesSupported.jsx

import { motion } from "framer-motion";

const communities = [
  "Nathdwara",
  "Rajsamand",
  "Udaipur",
  "Chittorgarh",
  "Bhilwara",
  "Ajmer",
  "Dungarpur",
  "Pali",
];

const CommunitiesSupported = () => {
  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Communities Supported
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Growing Through
            Local Communities
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            Aamdani works with women across different communities,
            helping create opportunities closer to home.
          </p>

        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1fr_.8fr] gap-10 items-center mt-10">

          {/* LEFT */}
          <div className="flex flex-wrap gap-3">

            {communities.map((community, index) => (
              <motion.div
                key={community}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                className={`
                  px-5 py-3 rounded-full text-sm font-medium
                  ${
                    index % 4 === 0
                      ? "bg-[#e8f1f4] text-[#5A97A9]"
                      : index % 4 === 1
                      ? "bg-[#fff1e7] text-[#FF7A1A]"
                      : index % 4 === 2
                      ? "bg-[#eef3ee] text-[#6c8c74]"
                      : "bg-[#f1eef8] text-[#7c68b2]"
                  }
                `}
              >
                {community}
              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-[30px] border border-[#d7e3e7] p-8">

            <h3 className="text-[24px] font-semibold text-[#3f3f3f]">
              Local Impact
            </h3>

            <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
              By supporting women within their own communities,
              Aamdani helps create opportunities that are sustainable,
              accessible, and deeply connected to local culture
              and craftsmanship.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CommunitiesSupported;