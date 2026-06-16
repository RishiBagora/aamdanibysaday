// components/support/PartnerWithUs.jsx

import { motion } from "framer-motion";

const partners = [
  {
    title: "Businesses",
    description:
      "Support women-led enterprises through collaborations, sponsorships, gifting initiatives, and market opportunities.",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "NGOs & Foundations",
    description:
      "Work together on community programs, outreach initiatives, and women empowerment projects.",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    title: "Educational Institutions",
    description:
      "Create awareness, workshops, internships, and engagement opportunities for students and communities.",
    color: "bg-[#eef3ee] text-[#6c8c74]",
  },
  {
    title: "Community Organizations",
    description:
      "Help connect women with resources, training, and opportunities within local communities.",
    color: "bg-[#f1eef8] text-[#7c68b2]",
  },
];

const PartnerWithUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
            Partner With Us
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Meaningful Partnerships
            <br />
            Create Greater Impact
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            We welcome collaborations with organizations, institutions,
            businesses, and community groups that share our vision of
            supporting women-led livelihoods.
          </p>

        </div>

        {/* PARTNERS GRID */}
        <div className="grid md:grid-cols-2 gap-5 mt-10">

          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="bg-[#f8f9fa] border border-[#d7e3e7] rounded-[28px] p-7"
            >
              <div
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${item.color}`}
              >
                Partnership
              </div>

              <h3 className="mt-5 text-[24px] font-semibold text-[#3f3f3f]">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#6b7280]">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PartnerWithUs;