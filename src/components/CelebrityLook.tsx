
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Added Autoplay
import { ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  "https://imgs.search.brave.com/T1IeFccNV9Zc-RFGu8O7W7NrEftHxBhq6h3hUMWswWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXNxdWlyZS5jb20u/YXUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDcvMTgwMHgy/NDAwLVRlbXBsYXRl/LTIwMjQtMDctMDlU/MTM1OTMxLjMwNy03/Njh4MTAyNC5qcGc",
  "https://imgs.search.brave.com/_gUKH01aPWj1LBUggrT--QfY7jIvAFXoJGG2KiaPaSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sdXh1/cnl3YXRjaGJ1eWVy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8wMi9QSUFH/RVRfUG9sb19MYWRp/ZXNfR29sZF9SaWhh/bm5hLmpwZw",
  "https://imgs.search.brave.com/sbc1xL_tYArZfZ0owHIFoHWL0CiXKprxmAX3PDrER6o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/LmNyb3duYW5kY2Fs/aWJlci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDUv/Y2VsZWJyaXR5LXdh/dGNoZXMta2V2aW4t/aGFydC1oYXV0ZXRp/bWUuanBn",
  "https://imgs.search.brave.com/FMP-4spWMse7fgPDrtE2fprPlf74-jUWns2wlPUYZho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXNxdWlyZS5jb20u/YXUvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDcvMTgwMHgy/NDAwLVRlbXBsYXRl/LTIwMjQtMDctMDlU/MTIzMTE2LjI5NC03/Njh4MTAyNC5qcGc",
  "https://imgs.search.brave.com/o1qahnGsjg2ovZP_No1yqePNmw3al3stCFQy7TulZw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3do/b3doYXR3ZWFyL3Bv/c3RzLzMwMTUzOS9j/ZWxlYnJpdHktd2F0/Y2hlcy0zMDE1Mzkt/MTY1OTUzOTQwNTA5/MS1tYWluLmpwZw",
  "https://imgs.search.brave.com/CCg3GdAWuGHDNkyVOjczS44GoZOBrQltvXFIQrmrz-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGl0YW4uY28uaW4v/ZHcvaW1hZ2UvdjIv/QktERF9QUkQvb24v/ZGVtYW5kd2FyZS5z/dGF0aWMvLS9TaXRl/cy10aXRhbi1tYXN0/ZXItY2F0YWxvZy9k/ZWZhdWx0L2R3OTJl/ZDY4OWMvaW1hZ2Vz/L0hlbGlvcy9DYXRh/bG9nL1BMUEVXR0Ux/NjAxODAxXzIuanBn/P3N3PTM2MCZzaD0z/NjA",
  "https://imgs.search.brave.com/tzXcq3XAFOE1ZdLtAV8sFYabBjlq1vYlmZMPN5RFhok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hbXou/bHV4ZXdhdGNoZXMu/Y28udWsvYXBwL3Vw/bG9hZHMvMjAyMi8w/OC8xMjA1NTI0Ni9K/ZW5uaWZlci1Bbmlz/dG9uLWNoYXJtcy13/aXRoLWEtR29sZC1S/b2xleC13YXRjaC5q/cGc",
];

function CelebrityLook() {
  return (
    <div className="w-full px-4 md:px-16">
      <div className="relative">
        <Swiper
          grabCursor={true}
          loop={true}
          centeredSlides={false}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 1000, // Time between slides in ms
            disableOnInteraction: false, // Keep autoplay even after manual interaction
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation, Autoplay]} // Added Autoplay
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="w-full md:w-[350px] h-[300px] flex justify-center items-center"
            >
              <img
                src={src}
                alt={`slide ${index}`}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-prev md:p-10 text-white text-3xl absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <ArrowLeft />
          </div>
          <div className="swiper-button-next md:p-10 text-white text-3xl absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
            <ArrowRight />
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6 !static text-white" />
        </Swiper>
      </div>
    </div>
  );
}

export default CelebrityLook;
