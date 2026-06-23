// components/common/StatsGrid.jsx

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats } from "../../data/stats";

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

const StatsGrid = ({ animate = false, limit, showDescription = false, statsData }) => {
  const data = statsData || stats;
  const items = limit ? data.slice(0, limit) : data;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Card layout (used on Impact page)
  if (showDescription) {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-5 mt-10"
      >
        {items.map((item, index) => (
          <motion.div
            key={item.key || index}
            variants={itemVariants}
            className="bg-white border border-[#d7e3e7] rounded-[28px] p-7"
          >
            <h3
              className={`text-[42px] font-semibold tracking-tight ${item.color || item.text}`}
            >
              {animate ? (
                <Counter value={item.value} suffix={item.suffix} />
              ) : (
                `${item.value}${item.suffix}`
              )}
            </h3>

            <h4 className="mt-3 text-xl font-medium text-[#3f3f3f]">
              {item.title}
            </h4>

            <p className="mt-3 text-[15px] leading-7 text-[#6b7280]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Flat Grid layout (used on Home/About pages)
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid ${
        items.length === 3
          ? "grid-cols-1 sm:grid-cols-3"
          : items.length === 6
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 lg:grid-cols-4"
      } gap-4 sm:gap-5 mt-10`}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.key || index}
          variants={itemVariants}
          whileHover={animate ? { y: -5 } : undefined}
          transition={{ duration: 0.25 }}
          className={`${item.bg} rounded-[26px] p-6 text-center`}
        >
          <h3
            className={`text-[34px] sm:text-[42px] font-semibold tracking-tight ${item.text || item.color}`}
          >
            {animate ? (
              <Counter value={item.value} suffix={item.suffix} />
            ) : (
              `${item.value}${item.suffix}`
            )}
          </h3>

          <p className="mt-2 text-sm text-[#5f6971] leading-6">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsGrid;
