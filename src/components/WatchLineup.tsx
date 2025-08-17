import React from 'react';
import { ArrowRight } from 'lucide-react';

const WatchLineup = () => {
  const watchCollections = [
    {
      name: 'PROFESSIONAL',
      tagline: 'Built for Performance',
      description: 'Precision instruments for the demanding professional',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $2,499'
    },
    {
      name: 'SPORT',
      tagline: 'Engineered for Action',
      description: 'Rugged timepieces for active lifestyles',
      image: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $1,899'
    },
    {
      name: 'CLASSIC',
      tagline: 'Timeless Elegance',
      description: 'Sophisticated designs for every occasion',
      image: 'https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $1,299'
    },
    {
      name: 'AVIATION',
      tagline: 'Sky-High Precision',
      description: 'Pilot watches with advanced complications',
      image: 'https://images.pexels.com/photos/1697216/pexels-photo-1697216.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $3,299'
    },
    {
      name: 'DIVING',
      tagline: 'Ocean Depths',
      description: 'Professional dive watches built to last',
      image: 'https://images.pexels.com/photos/1697217/pexels-photo-1697217.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $1,799'
    },
    {
      name: 'LIMITED',
      tagline: 'Exclusive Edition',
      description: 'Rare timepieces for collectors',
      image: 'https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'From $4,999'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Master
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              pieces
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each collection represents decades of horological expertise, designed for men who appreciate precision and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watchCollections.map((collection, index) => (
            <div
              key={index}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-400 tracking-wider">
                    {collection.tagline}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {collection.price}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {collection.name}
                </h3>
                
                <p className="text-gray-400 mb-6">
                  {collection.description}
                </p>
                
                <button className="flex items-center text-white font-medium group-hover:text-gray-300 transition-colors">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WatchLineup;