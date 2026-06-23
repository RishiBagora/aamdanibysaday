// components/home/QuickAbout.jsx

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const QuickAbout = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative animate-fade-in"
          >
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-[26px] border border-[#d7e3e7]">
              <img
                src="/images/about-image-1.png"
                alt="Women working"
                className="w-full h-[340px] sm:h-[420px] object-cover"
              />
            </div>

            {/* FLOATING IMAGE */}
            <div className="absolute -bottom-5 right-4 sm:right-6 overflow-hidden rounded-[20px] border-[6px] border-[#fcfcfc] shadow-md">
              <img
                src="/images/about-image-2.png"
                alt="Handmade products"
                className="w-[120px] sm:w-[170px] h-[150px] sm:h-[210px] object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            {/* LABEL */}
            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] mb-5 uppercase">
              About Aamdani
            </span>

            {/* HEADING */}
            <h2 className="text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              More Than Handmade Products
            </h2>

            {/* DESCRIPTION PARAGRAPHS */}
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#6b7280]">
              <p>
                Aamdani is a women’s livelihood and empowerment initiative by Saday Sadev focused on creating sustainable income opportunities for women from underserved communities.
              </p>
              <p>
                Many women from underserved communities either lack access to skill development opportunities or are unable to transform their existing abilities into sustainable income opportunities.
              </p>
              <p>
                Through training, mentorship, and livelihood support, Aamdani helps women develop practical skills, create handmade products, and generate independent sources of income.
              </p>
              <p className="font-medium text-[#4a4a4a] border-l-2 border-[#5A97A9] pl-4 italic bg-[#e8f1f4]/20 py-2 pr-2 rounded-r-md">
                Every product purchased directly contributes toward creating meaningful economic opportunities for women striving for independent futures.
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#5A97A9] text-sm font-semibold hover:gap-3 transition-all duration-300"
              >
                Know More About Us

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 7H17V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default QuickAbout;