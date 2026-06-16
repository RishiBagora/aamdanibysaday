// // components/home/WhatWeDo.jsx

// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const WhatWeDo = () => {
//   return (
//     <section className="py-20 md:py-32 bg-white overflow-hidden">
//       <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

//         <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

//           {/* IMAGE SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div className="overflow-hidden rounded-[32px]">
//               <img
//                 src="/images/whatwedo.png"
//                 alt="Women empowerment"
//                 className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
//               />
//             </div>
//           </motion.div>

//           {/* CONTENT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             viewport={{ once: true }}
//             className="max-w-xl"
//           >
//             <span className="text-sm font-medium tracking-wide text-[#A2674B] uppercase">
//               What We Do
//             </span>

//             <h2 className="mt-5 text-[38px] sm:text-[52px] leading-[1.1] font-semibold tracking-tight text-[#1E1E1E]">
//               Helping Women Build
//               Sustainable Livelihoods
//             </h2>

//             <p className="mt-8 text-[17px] leading-8 text-gray-600">
//               Aamdani supports women running homemade businesses by helping
//               them showcase their products, share their stories, and connect
//               with people who value handmade work and community growth.
//             </p>

//             {/* MINIMAL POINTS */}
//             <div className="mt-10 space-y-6">

//               <div className="border-l border-[#A2674B] pl-5">
//                 <h3 className="text-lg font-medium text-[#1E1E1E]">
//                   Handmade Product Support
//                 </h3>

//                 <p className="mt-2 text-gray-500 leading-7">
//                   Providing visibility and opportunities for local women-led
//                   businesses.
//                 </p>
//               </div>

//               <div className="border-l border-[#A2674B] pl-5">
//                 <h3 className="text-lg font-medium text-[#1E1E1E]">
//                   Community & Growth
//                 </h3>

//                 <p className="mt-2 text-gray-500 leading-7">
//                   Encouraging sustainable income and long-term independence
//                   through meaningful work.
//                 </p>
//               </div>

//             </div>

//             <Link
//               to="/about"
//               className="inline-flex items-center gap-2 mt-10 text-[#A2674B] font-medium hover:gap-3 transition-all duration-300"
//             >
//               Learn More
//               <ArrowRight size={18} />
//             </Link>
//           </motion.div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhatWeDo;




// components/home/WhatWeDo.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[28px] border border-[#d7e3e7]">
              <img
                src="/images/whatwedo.png"
                alt="Women empowerment"
                className="w-full h-[340px] sm:h-[430px] object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>

          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >

            {/* LABEL */}
            <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
              What We Do
            </span>

            {/* HEADING */}
            <h2 className="mt-5 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
              Helping Women Build
              Sustainable Livelihoods
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
              Aamdani supports women running homemade businesses by helping
              them showcase products, share their stories, and connect with
              people who value handmade work and community growth.
            </p>

            {/* POINTS */}
            <div className="mt-7 space-y-5">

              <div className="flex gap-4">

                <div className="w-2 h-2 rounded-full bg-[#5A97A9] mt-[10px] shrink-0" />

                <div>
                  <h3 className="text-[17px] font-semibold text-[#4a4a4a]">
                    Handmade Product Support
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#7b8790]">
                    Helping local women showcase products to a wider audience.
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-2 h-2 rounded-full bg-[#FF7A1A] mt-[10px] shrink-0" />

                <div>
                  <h3 className="text-[17px] font-semibold text-[#4a4a4a]">
                    Community & Growth
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#7b8790]">
                    Encouraging independence and sustainable livelihoods.
                  </p>
                </div>

              </div>

            </div>

            {/* BUTTON */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-[#5A97A9] text-sm font-medium hover:gap-3 transition-all duration-300"
            >
              Learn More

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M8 7H17V16"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>

            </Link>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;