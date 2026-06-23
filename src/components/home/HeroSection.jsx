// components/home/HeroSection.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSettings } from "../../context/SettingsContext";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/hero1.png",
  },
  {
    id: 2,
    image: "/images/hero2.png",
  },
  {
    id: 3,
    image: "/images/hero3.png",
  },
];

const HeroSection = () => {
  const { settings } = useSettings();

  return (
    <section className="relative overflow-hidden bg-white h-[65vh] sm:h-[75vh] lg:h-[82vh] min-h-[500px] max-h-[780px]">
      
      {/* SWIPER BACKGROUND */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* IMAGE DIM OVERLAY */}
              <div className="absolute inset-0 bg-black/45" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* STATIC CONTENT OVERLAY */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="max-w-[1180px] w-full mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-sm">
              Empowering Women Through Sustainable Livelihoods
            </h1>
            
            <p className="mt-6 text-sm sm:text-base lg:text-[18px] text-white/90 leading-7 sm:leading-8 max-w-2xl mx-auto drop-shadow-sm">
              Aamdani supports women transforming their skills into income, confidence, and long-term independence through handmade livelihood opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8 sm:mt-10">
              <Link
                to="/products"
                className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#5A97A9] text-white text-xs sm:text-sm font-semibold hover:bg-[#4d8797] transition-all duration-300 shadow-md"
              >
                Shop Products
              </Link>
              <Link
                to="/about"
                className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-semibold hover:bg-white/25 transition-all duration-300 shadow-md"
              >
                Know Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PAGINATION STYLE OVERRIDE */}
      <style>
        {`
          .swiper-pagination {
            bottom: 14px !important;
            z-index: 20 !important;
          }

          @media (min-width: 1024px) {
            .swiper-pagination {
              bottom: 24px !important;
            }
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255,255,255,0.4);
            opacity: 1;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            width: 24px;
            border-radius: 999px;
            background: white;
          }
        `}
      </style>

    </section>
  );
};

export default HeroSection;