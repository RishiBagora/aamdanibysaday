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