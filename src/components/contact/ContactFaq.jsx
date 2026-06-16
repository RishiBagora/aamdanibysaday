// components/contact/ContactFaq.jsx

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We usually respond to inquiries within 24–48 business hours. Response times may vary during holidays or special events.",
  },
  {
    question: "Can I volunteer through this form?",
    answer:
      "Yes. Simply mention your interest in volunteering within the message field and our team will get in touch with you.",
  },
  {
    question: "Can organizations or businesses partner with Aamdani?",
    answer:
      "Absolutely. We welcome collaborations with businesses, NGOs, educational institutions, and community organizations that share our mission.",
  },
];

const ContactFaq = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-[#f5f7f8]">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            Before You Reach Out
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#6b7280] max-w-xl mx-auto">
            Here are answers to some of the most common questions we receive.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mt-10 border-t border-[#d7e3e7]">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="border-b border-[#d7e3e7]"
              >
                <button
                  onClick={() => setActive(isOpen ? -1 : index)}
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

export default ContactFaq;