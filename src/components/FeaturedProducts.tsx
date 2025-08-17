import React from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Titanium Chronograph Pro',
      price: '$2,899',
      originalPrice: '$3,299',
      image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      isNew: true,
      discount: '12% OFF',
      features: ['Titanium Case', 'Sapphire Crystal', 'Water Resistant 300m']
    },
    {
      id: 2,
      name: 'Professional Diver GMT',
      price: '$2,199',
      originalPrice: '$2,599',
      image: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.8,
      isNew: false,
      discount: '15% OFF',
      features: ['GMT Function', 'Ceramic Bezel', 'Automatic Movement']
    },
    {
      id: 3,
      name: 'Aviation Master Pilot',
      price: '$3,499',
      originalPrice: '$3,999',
      image: 'https://images.pexels.com/photos/1697216/pexels-photo-1697216.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.9,
      isNew: true,
      discount: '13% OFF',
      features: ['Pilot Complications', 'Anti-Magnetic', 'Leather Strap']
    },
    {
      id: 4,
      name: 'Classic Dress Elite',
      price: '$1,799',
      originalPrice: '$2,199',
      image: 'https://images.pexels.com/photos/1697215/pexels-photo-1697215.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.7,
      isNew: false,
      discount: '18% OFF',
      features: ['Ultra-Thin', 'Gold Plated', 'Swiss Movement']
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Collection
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Handpicked timepieces that represent the pinnacle of horological craftsmanship and masculine design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-black rounded-2xl overflow-hidden hover:bg-gray-800 transition-all duration-500 border border-gray-800">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.discount}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">({product.rating})</span>
                </div>

                <div className="mb-4">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded mr-2 mb-2">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300">
            View All Timepieces
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;