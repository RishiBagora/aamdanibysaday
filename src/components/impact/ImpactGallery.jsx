// components/impact/ImpactGallery.jsx

import { motion } from "framer-motion";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

const ImpactGallery = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}

        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-[#e8f1f4] px-4 py-2 text-xs font-medium tracking-wide text-[#5A97A9] uppercase">
            Impact Gallery
          </span>

          <h2 className="mt-5 text-[30px] sm:text-[42px] leading-[1.1] font-semibold tracking-tight text-[#3f3f3f]">
            A Glimpse Into
            The Journey
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#6b7280]">
            Moments from workshops, product creation,
            community engagement, and everyday progress.
          </p>

        </div>

        {/* GALLERY */}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* LARGE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-7 overflow-hidden rounded-[28px] border border-[#d7e3e7]"
          >
            <img
              src={images[0]}
              alt=""
              className="w-full h-[300px] md:h-[520px] object-cover"
            />
          </motion.div>

          {/* RIGHT STACK */}
          <div className="md:col-span-5 grid gap-4">

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-[28px] border border-[#d7e3e7]"
            >
              <img
                src={images[1]}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-[28px] border border-[#d7e3e7]"
            >
              <img
                src={images[2]}
                alt=""
                className="w-full h-[250px] object-cover"
              />
            </motion.div>

          </div>

          {/* WIDE */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-12 overflow-hidden rounded-[28px] border border-[#d7e3e7]"
          >
            <img
              src={images[3]}
              alt=""
              className="w-full h-[280px] md:h-[420px] object-cover"
            />
          </motion.div>

          {/* BOTTOM */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-6 overflow-hidden rounded-[28px] border border-[#d7e3e7]"
          >
            <img
              src={images[4]}
              alt=""
              className="w-full h-[260px] md:h-[340px] object-cover"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-6 overflow-hidden rounded-[28px] border border-[#d7e3e7]"
          >
            <img
              src={images[5]}
              alt=""
              className="w-full h-[260px] md:h-[340px] object-cover"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ImpactGallery;