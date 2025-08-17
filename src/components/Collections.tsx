import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Collections = () => {
  const [playVideo, setPlayVideo] = useState([false, false, false]);
  const collections = [
    {
      name: 'Better Starts Now',
      description: 'Is the philosophy that no matter who you are and what you do,it is always possible to make something better and nowis the time to start doing it.',
      image:'https://www.citizenwatches.co.in/public/FrontEnd/assets/home/bg_phyilosophy_01.jpg',
      featured: true
    },
    {
      name: '',
      description: '',
      image:'',
      featured: false
    },
    {
      name: '',
      description: '',
      image:'',
      featured: false
    }
  ];

  const handlePlay = (idx: number) => {
    setPlayVideo((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };

  return (
    <section className="py-16 md:px-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h2> */}
          <p className="text-2xl font-bold  text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of timepieces, each designed for different lifestyles and occasions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                collection.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div
                className={
                  // Use 16:9 aspect ratio for YouTube cards, else default height
                  (index === 1 || index === 2)
                    ? "relative w-full aspect-video flex items-center justify-center"
                    : "relative h-96 lg:h-full flex items-center justify-center"
                }
              >
                {index === 1 ? (
                  playVideo[index] ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/jUVkXGERSJk?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    ></iframe>
                  ) : (
                    <div
                      className="w-full h-full bg-black flex items-center justify-center cursor-pointer"
                      onClick={() => handlePlay(index)}
                    >
                      <img
                        src="https://img.youtube.com/vi/jUVkXGERSJk/hqdefault.jpg"
                        alt="YouTube thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <button
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label="Play Video"
                      >
                        <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 84 84">
                          <circle cx="42" cy="42" r="42" fill="black" fillOpacity="0.5"/>
                          <polygon points="34,26 62,42 34,58" fill="white"/>
                        </svg>
                      </button>
                    </div>
                  )
                ) : index === 2 ? (
                  playVideo[index] ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/oY_5urOJOGk?autoplay=1"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full object-cover"
                    ></iframe>
                  ) : (
                    <div
                      className="w-full h-full bg-black flex items-center justify-center cursor-pointer"
                      onClick={() => handlePlay(index)}
                    >
                      <img
                        src="https://img.youtube.com/vi/oY_5urOJOGk/hqdefault.jpg"
                        alt="YouTube thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <button
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label="Play Video"
                      >
                        <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 84 84">
                          <circle cx="42" cy="42" r="42" fill="black" fillOpacity="0.5"/>
                          <polygon points="34,26 62,42 34,58" fill="white"/>
                        </svg>
                      </button>
                    </div>
                  )
                ) : (
                  <>
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  </>
                )}
              </div>
              
              {/* Content for first card only */}
              {index === 0 && (
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className={`font-bold mb-3 ${collection.featured ? 'text-4xl' : 'text-2xl'}`}>
                    {collection.name}
                  </h3>
                  <p className={`mb-6 ${collection.featured ? 'text-lg' : 'text-base'}`}>
                    {collection.description}
                  </p>
                  <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors group">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;