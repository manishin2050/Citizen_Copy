import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ambassadors = [
  {
    name: "James Rodriguez",
    profession: "Formula 1 Driver",
    watch: "CHRONOS Professional GMT",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Precision on the track, precision on my wrist."
  },
  {
    name: "Marcus Chen",
    profession: "Aviation Pilot",
    watch: "CHRONOS Aviation Master",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "When every second counts, I trust CHRONOS."
  },
  {
    name: "David Thompson",
    profession: "Deep Sea Explorer",
    watch: "CHRONOS Professional Diver",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Built to withstand the deepest challenges."
  },
  {
    name: "Alexander Stone",
    profession: "Mountaineer",
    watch: "CHRONOS Titanium Sport",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Conquering peaks with Swiss precision."
  },
  {
    name: "Robert Hayes",
    profession: "Business Executive",
    watch: "CHRONOS Classic Elite",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    quote: "Elegance that commands respect."
  }
];

function CelebrityLook() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Worn by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by professionals who demand excellence in every aspect of their lives.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <Swiper
            grabCursor={true}
            loop={true}
            centeredSlides={false}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ 
              el: '.swiper-pagination', 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-gray-600',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-white'
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {ambassadors.map((ambassador, index) => (
              <SwiperSlide key={index} className="pb-16">
                <div className="bg-black rounded-2xl overflow-hidden border border-gray-800 group hover:border-gray-600 transition-all duration-500">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={ambassador.image}
                      alt={ambassador.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{ambassador.name}</h3>
                    <p className="text-gray-400 mb-4">{ambassador.profession}</p>
                    
                    <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                      "{ambassador.quote}"
                    </blockquote>
                    
                    <div className="border-t border-gray-800 pt-4">
                      <p className="text-sm text-gray-500 mb-1">Wearing</p>
                      <p className="text-white font-semibold">{ambassador.watch}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Navigation Buttons */}
            <div className="swiper-button-prev !left-0 !top-1/2 -translate-y-1/2 !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !rounded-full !border !border-white/20 hover:!bg-white/20 !transition-all !duration-300 after:!text-white after:!text-lg after:!font-bold">
              <ArrowLeft className="w-5 h-5 text-white" />
            </div>
            <div className="swiper-button-next !right-0 !top-1/2 -translate-y-1/2 !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !rounded-full !border !border-white/20 hover:!bg-white/20 !transition-all !duration-300 after:!text-white after:!text-lg after:!font-bold">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>

            {/* Pagination Dots */}
            <div className="swiper-pagination !bottom-0 !static !mt-8 flex justify-center space-x-2" />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CelebrityLook;