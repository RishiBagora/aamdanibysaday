// components/about/FaqSection.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Aamdani?",
    answer:
      "Aamdani is an initiative that supports women-led homemade businesses by helping them showcase products, reach customers, and create sustainable income opportunities.",
  },
  {
    question: "How do women become part of the initiative?",
    answer:
      "Women can connect with the Aamdani team and apply to showcase their handmade products through the platform.",
  },
  {
    question: "How does purchasing a product help?",
    answer:
      "Every purchase directly supports women entrepreneurs by helping them earn income from their skills and creativity.",
  },
  {
    question: "Can I volunteer or collaborate?",
    answer:
      "Yes. Individuals, organizations, and businesses can collaborate, volunteer, or support the initiative in different ways.",
  },
  {
    question: "How can I contact the team?",
    answer:
      "You can reach out through the contact page, WhatsApp, email, or social media channels.",
  },
];

const FaqSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-[#eef3ee] px-4 py-2 text-xs font-medium tracking-wide text-[#6c8c74] uppercase">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[40px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Common Questions
          </h2>

        </div>

        {/* FAQS */}

        <div className="mt-10 border-t border-[#d7e3e7]">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="border-b border-[#d7e3e7]"
              >
                <button
                  onClick={() =>
                    setActive(isOpen ? -1 : index)
                  }
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="text-[17px] font-medium text-[#3f3f3f]">
                    {faq.question}
                  </span>

                  <span
                    className={`text-[#5A97A9] text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="pb-6 text-[15px] leading-7 text-[#6b7280] max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FaqSection;