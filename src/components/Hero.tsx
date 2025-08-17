
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  "https://www.citizenwatches.co.in/images/DESK13032025113920.jpg",
  "https://www.citizenwatches.co.in/images/DESK05072025005329.jpg",
  "https://www.citizenwatches.co.in/images/DESK13032025114132.jpg",
  "https://www.citizenwatches.co.in/images/DESK05072025004857.jpg",
  "https://www.citizenwatches.co.in/images/DESK13032025113810.jpg",
  "https://www.citizenwatches.co.in/images/DESK13032025113732.jpg",
];

function hero() {
  return (
    <div className="w-full">
      <div className="relative overflow-x-hidden">
        <Swiper
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 'auto',
            },
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide-custom flex justify-center items-center transition-all duration-300"
            >
              <img
                src={src}
                alt={`slide ${index}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev text-white md:bg-black/30 text-3xl absolute left-0 md:p-10 md:left-[10vw] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="swiper-button-next text-white md:bg-black/30 text-3xl absolute right-0 md:p-10 md:right-[10vw] top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <ArrowRight />
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6 !static text-white" />
        </Swiper>
      </div>

      {/* ✅ Custom Styling */}
      <style>{`
        @media (min-width: 1024px) {
  .swiper-slide-custom {
    width: 70vw !important;
    height: 70vh;
    opacity: 0.3;
    transition: all 0.5s ease;
  }

  .swiper-slide-custom.swiper-slide-active {
    width: 70vw !important;
    opacity: 1;
  }

  .swiper-wrapper {
    justify-content: flex-start !important;
    padding-left: 0 !important;
  }
}
      `}</style>
    </div>
  );
}

export default hero;
