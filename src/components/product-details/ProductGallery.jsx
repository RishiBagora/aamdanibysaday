import { useState } from "react";
import { motion } from "framer-motion";

const ProductGallery = ({ images = [] }) => {
  const [activeImage, setActiveImage] = useState(
    images?.[0] || ""
  );

  if (!images?.length) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-4">

      {/* THUMBNAILS */}
      <div className="order-2 lg:order-1 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">

        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(image)}
            className={`
              shrink-0
              w-20 h-20
              rounded-2xl
              overflow-hidden
              border-2
              transition-all duration-300
              ${
                activeImage === image
                  ? "border-[#5A97A9]"
                  : "border-[#e7ecee]"
              }
            `}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}

      </div>

      {/* MAIN IMAGE */}
      <div className="order-1 lg:order-2 flex-1">

        <motion.div
          key={activeImage}
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            overflow-hidden
            rounded-[28px]
            border border-[#e7ecee]
            bg-white
          "
        >
          <img
            src={activeImage}
            alt="Product"
            className="
              w-full
              aspect-square
              object-cover
            "
          />
        </motion.div>

      </div>

    </div>
  );
};

export default ProductGallery;