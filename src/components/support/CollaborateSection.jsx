// components/support/CollaborateSection.jsx

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const collaborationAvenues = [
  {
    title: "Corporate Gifting",
    description: "Ethical and custom-made handmade hampers and gifts for employees, clients, and partners.",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "Bulk Product Orders",
    description: "High-quality artisan-made goods for large-scale purchases with wholesale structures.",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    title: "Events & Exhibitions",
    description: "Avenue collaborations to set up artisan booths, pop-ups, and live experience tables.",
    color: "bg-[#eef3ee] text-[#6c8c74]",
  },
  {
    title: "CSR Partnerships",
    description: "Align your corporate social responsibility program with long-term skill training and empowerment.",
    color: "bg-[#f1eef8] text-[#7c68b2]",
  },
  {
    title: "Women Empowerment Initiatives",
    description: "Co-create capacity building workshops, digital literacy, and leadership mentoring programs.",
    color: "bg-[#e8f1f4] text-[#5A97A9]",
  },
  {
    title: "Community Impact Collaborations",
    description: "Join forces with grassroots networks to reach, train, and support more women in need.",
    color: "bg-[#fff1e7] text-[#FF7A1A]",
  },
  {
    title: "Volunteer Opportunities",
    description: "Share your professional skills in design, marketing, photography, strategy, or training.",
    color: "bg-[#eef3ee] text-[#6c8c74]",
  },
];

const CollaborateSection = () => {
  const whatsappUrl = `https://wa.me/919643424286?text=${encodeURIComponent(
    "Hello Aamdani, I am interested in collaborating with you for partnerships/bulk orders."
  )}`;

  return (
    <section id="collaborate" className="py-16 bg-[#f5f7f8] border-t border-[#d7e3e7]/50">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-semibold tracking-wide text-[#FF7A1A] uppercase">
            Partnership
          </span>
          <h2 className="mt-5 text-[32px] sm:text-[42px] leading-[1.15] font-bold tracking-tight text-[#3f3f3f]">
            Collaborate With Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6b7280] leading-7">
            Partner with Aamdani to support women-led livelihoods and build sustainable social impact. We welcome collaborations across multiple avenues:
          </p>
        </div>

        {/* AVENUES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collaborationAvenues.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-[#d7e3e7] rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="text-[#5A97A9] shrink-0" size={20} />
                  <h3 className="text-lg font-semibold text-[#3f3f3f]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#6b7280] leading-6">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLOSING / CTA BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 p-8 sm:p-10 rounded-[32px] bg-white border border-[#d7e3e7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl">
            <p className="text-base sm:text-lg font-medium text-[#4a4a4a] leading-7">
              Together, we can create meaningful livelihood opportunities and lasting social impact.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full md:w-auto px-7 py-4 rounded-full bg-[#5A97A9] text-white text-sm font-semibold hover:bg-[#4c8798] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Partner With Us</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CollaborateSection;
