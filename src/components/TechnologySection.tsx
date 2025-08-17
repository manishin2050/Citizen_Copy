import React from 'react';
import { Zap, Satellite, Clock, Shield } from 'lucide-react';
//  ? import logo from public name banner.jpg
import banner from '/banner.jpeg'

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Eco-Drive Technology',
      description: 'Powered by light, any light. Never needs a battery replacement.',
      features: ['Solar powered', 'Eco-friendly', 'Long-lasting']
    },
    {
      icon: <Satellite className="w-12 h-12" />,
      title: 'Satellite Wave GPS',
      description: 'Receives time signals from GPS satellites for perfect accuracy.',
      features: ['Global positioning', 'Atomic accuracy', 'Auto time zone']
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Atomic Timekeeping',
      description: 'The most accurate timekeeping technology available.',
      features: ['Radio controlled', 'Self-adjusting', 'Precise timing']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Super Titanium',
      description: 'Lighter than steel, harder than steel, and hypoallergenic.',
      features: ['Lightweight', 'Scratch resistant', 'Hypoallergenic']
    }
  ];

  return (
    <section className="py-16 md:px-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over a century, Citizen has been at the forefront of watchmaking innovation, 
            creating technologies that enhance your daily life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-20 md:gap-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
              <p className="text-gray-600 mb-6">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16  bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Trusted by icons, made for you</h3>
              <p className="text-gray-300 mb-6">
                From red carpets to real life, Citizen watches define timeless sophistication.
Now it's your turn to wear what the celebrities trust every day.

              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                LEARN MORE
              </button>
            </div>
            {/* <div className="relative">
              <img
                src={banner}
                alt="Citizen Technology"
                className="rounded-lg shadow-2xl"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;