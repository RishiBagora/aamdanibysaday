import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const MeetTheMaker = ({ product }) => {
  return (
    <section className="py-16 border-t border-[#edf1f2]">

      <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="overflow-hidden rounded-[28px] border border-[#e7ecee] bg-white">

            <img
              src={product.makerImage}
              alt={product.makerName}
              className="w-full aspect-[4/5] object-cover"
            />

          </div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          {/* LABEL */}
          <span className="inline-flex items-center rounded-full bg-[#fff1e7] px-4 py-2 text-xs font-medium tracking-wide text-[#FF7A1A] uppercase">
            Meet The Maker
          </span>

          {/* NAME */}
          <h2 className="mt-5 text-[32px] sm:text-[42px] leading-tight font-semibold text-[#3f3f3f]">
            {product.makerName}
          </h2>

          {/* LOCATION */}
          <div className="flex items-center gap-2 mt-3 text-[#6b7280]">

            <MapPin size={16} />

            <span>
              {product.makerLocation}
            </span>

          </div>

          {/* STORY */}
          <p className="mt-6 text-[16px] leading-8 text-[#6b7280] max-w-3xl">
            {product.makerStory}
          </p>

          {/* HIGHLIGHT */}
          <div className="mt-8 p-6 rounded-[24px] bg-[#f8fafb] border border-[#edf1f2]">

            <p className="text-sm leading-7 text-[#6b7280]">
              Every purchase directly supports women-led
              businesses and helps create sustainable income
              opportunities within local communities.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default MeetTheMaker;
