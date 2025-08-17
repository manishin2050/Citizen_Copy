import React from 'react';
import { Star, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Eco-Drive Chronograph',
      price: '₹24,995',
      originalPrice: '₹29,995',
      image:'https://www.citizenwatches.co.in/public/images/a68a9e5e178aa268b9ca1c160d4d8cb1.jpg',
      rating: 4.8,
      isNew: true,
      discount: '17% OFF'
    },
    {
      id: 2,
      name: 'Promaster Diver',
      price: '₹18,995',
      originalPrice: '₹22,995',
      image:'https://www.citizenwatches.co.in/public/images/Homimg31122024071722.jpg',
      rating: 4.9,
      isNew: false,
      discount: '17% OFF'
    },
    {
      id: 3,
      name: 'Satellite Wave GPS',
      price: '₹45,995',
      originalPrice: '₹52,995',
      image:'https://www.citizenwatches.co.in/public/images/Homimg03112021071259.jpg',
      rating: 4.7,
      isNew: true,
      discount: '13% OFF'
    },
    {
      id: 4,
      name: 'Elegant Dress Watch',
      price: '₹12,995',
      originalPrice: '₹15,995',
      image:'https://www.citizenwatches.co.in/public/images/f67b655b038f0a7e2783336e2761e20a.jpg',
      rating: 4.6,
      isNew: false,
      discount: '19% OFF'
    }
  ];

  return (
    <section className="py-16 md:px-20 bg-gray-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular timepieces, crafted with precision and powered by innovative technology
          </p>
        </div>

        <div className="grid grid-cols-1 mx-4  sm:mx-0 md:px-16 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-200  text-gray-900 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-black text-center text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.discount}
                  </span>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold  mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-0">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold ">{product.price}</span>
                    <span className="text-xs text-gray-700 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <button className="w-full  border-2 rounded-full border-black text-black py-3  font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300">
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;