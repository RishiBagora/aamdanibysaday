// // components/home/ImpactHighlights.jsx

// import { motion, useInView, animate } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// const stats = [
//   {
//     value: 120,
//     suffix: "+",
//     label: "Women Supported",
//   },
//   {
//     value: 350,
//     suffix: "+",
//     label: "Products Created",
//   },
//   {
//     value: 15,
//     suffix: "+",
//     label: "Local Communities",
//   },
//   {
//     value: 500,
//     suffix: "+",
//     label: "Happy Supporters",
//   },
// ];

// const Counter = ({ value, suffix }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(0, value, {
//         duration: 2,
//         ease: "easeOut",
//         onUpdate(latest) {
//           setCount(Math.floor(latest));
//         },
//       });

//       return () => controls.stop();
//     }
//   }, [isInView, value]);

//   return (
//     <span ref={ref}>
//       {count}
//       {suffix}
//     </span>
//   );
// };

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   },
// };

// const ImpactHighlights = () => {
//   return (
//     <section className="py-16 md:py-20 bg-[#faf8f5] overflow-hidden">
//       <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

//         {/* HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center max-w-2xl mx-auto"
//         >
//           <span className="text-sm font-medium text-[#A2674B]">
//             Our Impact
//           </span>

//           <h2 className="mt-3 text-[32px] sm:text-[42px] leading-tight font-semibold tracking-tight text-[#1E1E1E]">
//             Small Steps Creating
//             <br />
//             Meaningful Change
//           </h2>
//         </motion.div>

//         {/* STATS */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 mt-14"
//         >
//           {stats.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -4 }}
//               transition={{ duration: 0.25 }}
//               className="text-center"
//             >
//               <h3 className="text-[38px] sm:text-[46px] font-semibold tracking-tight text-[#1E1E1E]">
//                 <Counter value={item.value} suffix={item.suffix} />
//               </h3>

//               <p className="mt-2 text-sm text-gray-500">
//                 {item.label}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default ImpactHighlights;




// components/home/ImpactHighlights.jsx

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 120,
    suffix: "+",
    label: "Women Supported",
    bg: "bg-[#e8f1f4]",
    text: "text-[#5A97A9]",
  },
  {
    value: 350,
    suffix: "+",
    label: "Products Created",
    bg: "bg-[#fff1e7]",
    text: "text-[#FF7A1A]",
  },
  {
    value: 15,
    suffix: "+",
    label: "Local Communities",
    bg: "bg-[#eef3ee]",
    text: "text-[#6c8c74]",
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Supporters",
    bg: "bg-[#f1eef8]",
    text: "text-[#7c68b2]",
  },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setCount(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const ImpactHighlights = () => {
  return (
    <section className="py-14 md:py-16 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >

          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Our Impact
          </span>

          <h2 className="mt-4 text-[28px] sm:text-[38px] leading-[1.15] font-semibold tracking-tight text-[#3f3f3f]">
            Small Efforts Creating
            <br />
            Meaningful Change
          </h2>

        </motion.div>

        {/* STATS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10"
        >

          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className={`${item.bg} rounded-[26px] p-6 sm:p-7`}
            >

              <h3
                className={`text-[34px] sm:text-[42px] font-semibold tracking-tight ${item.text}`}
              >
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              <p className="mt-2 text-sm text-[#5f6971] leading-6">
                {item.label}
              </p>

            </motion.div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};

export default ImpactHighlights;