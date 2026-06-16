// components/support/SupportFAQ.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I support Aamdani?",
    answer:
      "You can support Aamdani by purchasing products, volunteering your skills, partnering with us, or helping spread awareness about the initiative.",
  },
  {
    question: "Do I need prior experience to volunteer?",
    answer:
      "Not necessarily. We welcome people from different backgrounds who are willing to contribute their time, skills, and ideas.",
  },
  {
    question: "Can businesses collaborate with Aamdani?",
    answer:
      "Yes. Businesses can partner with us through sponsorships, gifting programs, awareness campaigns, and community initiatives.",
  },
  {
    question: "How does purchasing products create impact?",
    answer:
      "Every purchase helps women entrepreneurs earn income from their skills while encouraging sustainable local businesses.",
  },
  {
    question: "How can I get in touch for partnerships?",
    answer:
      "You can contact us through our contact page, WhatsApp, email, or social media channels.",
  },
];

const SupportFAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Common Questions
          </h2>

        </div>

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
                      <p className="pb-6 text-[15px] leading-7 text-[#6b7280]">
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

export default SupportFAQ;