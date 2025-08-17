import React from 'react';
import { ArrowRight } from 'lucide-react';

const WatchLineup = () => {
  const watchCollections = [
    {
      name: 'SATELLITE WAVE GPS',
      tagline: 'The precise time. Anywhere in the world.',
      image:'https://www.citizenwatches.co.in/storage/Series/July2024/CollImage18072024114515.jpg',
      background: 'from-green-900 to-green-700'
    },
    {
      name: 'Series 8',
      tagline: 'Expect the infinite',
      image:'https://www.citizenwatches.co.in/storage/Series/February2025/CollImage17022025103604.jpg',
      background: 'from-blue-900 to-blue-700'
    },
    {
      name: 'Zenshin',
      tagline: 'SUPER TITANIUM',
      image:'https://www.citizenwatches.co.in/storage/Series/July2025/CollImage05072025005104.jpg',
      background: 'from-gray-900 to-gray-700'
    },
    {
      name: 'PROMASTER',
      tagline: 'Go Further',
      subtitle: 'Dive Watch Radio-Controlled',
      image:'https://www.citizenwatches.co.in/storage/Series/February2025/CollImage21022025021844.jpg',
      background: 'from-blue-600 to-blue-800'
    },
    {
      name: 'CITIZEN L',
      tagline: 'LIGHT YOUR SPIRIT',
      image:'https://www.citizenwatches.co.in/storage/Series/February2025/CollImage17022025103506.jpg',
      background: 'from-pink-600 to-orange-500'
    },
    {
      name: 'Eco-Drive',
      tagline: 'Make your move',
      image:'https://www.citizenwatches.co.in/storage/Series/July2025/CollImage05072025005140.jpg',
      background: 'from-yellow-600 to-orange-600'
    },
    {
      name: 'Mechanical',
      tagline: 'TSUYOSA',
      image:'https://www.citizenwatches.co.in/storage/Series/February2025/CollImage17022025103549.jpg',
      background: 'from-blue-800 to-purple-800'
    },
    {
      name: 'QUARTZ',
      tagline: "IT'S TIME FOR THE NEXT",
      subtitle: 'HYPERION',
      image:'https://www.citizenwatches.co.in/storage/Series/July2024/CollImage19072024102521.jpg',
      background: 'from-teal-600 to-green-600'
    }
  ];

  return (
    <section className="py-16 md:px-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-4xl font-bold   p-2 rounded-lg text-black/70  mb-4" style={{
            fontFamily: 'Uncut Sans, sans-serif',
          }} ><span className='text-gray-900 p-1  px-3  bg-white rounded-lg md:text-6xl  shadow-lg'>WATCH</span> Lineup</h2>
          <div className="w-16 h-1 bg-gray-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
  {watchCollections.map((collection, index) => (
    <div
      key={index}
      className="relative bg-white hover:bg-gray-200 p-2 overflow-hidden rounded-lg shadow-sm hover:shadow-lg group cursor-pointer 
                 transform transition duration-500 ease-in-out 
                  "
      
    >
      {/* Overlay content */}
      <div style={{
        backgroundImage: `url('${collection.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} className="relative h-48 w-full rounded-lg"></div>
      <div className="z-10 p-6 ">
          <h3 className="text-xl font-bold mb-2 transition-colors">
            {collection.name}
          </h3>
        <div className="flex items-center justify-between">
          <div className="text-xm">CITIZEN</div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Optional: Hover overlay */}
      {/* <div className="absolute inset-0 bg-gray-300 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WatchLineup;