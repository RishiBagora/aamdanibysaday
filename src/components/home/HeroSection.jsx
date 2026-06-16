// components/home/HeroSection.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "/images/hero1.png",
  },
  {
    id: 2,
    image:
      "/images/hero2.png",
  },
  {
    id: 3,
    image:
      "/images/hero3.png",
  },
];

const HeroSection = () => {
  const { settings } = useSettings();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Dynamic Text Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl md:max-w-2xl bg-white/85 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-[32px] border border-white/20 shadow-xl pointer-events-auto mt-16 lg:mt-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#3f3f3f] leading-[1.15]">
              {settings.hero_heading || "Empowering Women Through Handmade Businesses"}
            </h1>
            <p className="mt-4 text-xs sm:text-base text-[#6b7280] leading-7">
              {settings.hero_subheading || "Supporting local women entrepreneurs through digital commerce."}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products" className="px-5 py-3 rounded-full bg-[#5A97A9] text-white text-xs sm:text-sm font-medium hover:bg-[#4c8798] transition-all duration-300">
                Shop Collection
              </Link>
              <Link to="/about" className="px-5 py-3 rounded-full bg-white text-[#3f3f3f] border border-[#d7e3e7] text-xs sm:text-sm font-medium hover:bg-gray-50 transition-all duration-300">
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div className="relative w-full">

              {/* MOBILE BANNER */}
              <div className="block lg:hidden w-full aspect-[16/9] overflow-hidden">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* DESKTOP BANNER */}
              <div className="hidden lg:block w-full h-[78vh] min-h-[620px] max-h-[760px] overflow-hidden">
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-fit"
                />

                <div className="absolute inset-0 bg-black/15" />
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

      {/* PAGINATION */}
      <style>
        {`
          .swiper-pagination {
            bottom: 14px !important;
          }

          @media (min-width: 1024px) {
            .swiper-pagination {
              bottom: 34px !important;
            }
          }

          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(255,255,255,0.6);
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