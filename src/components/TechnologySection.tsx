import React from 'react';
import { Zap, Shield, Gauge, Compass } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Solar Power',
      description: 'Advanced photovoltaic cells power your watch indefinitely with any light source.',
      features: ['Perpetual Energy', 'Eco-Friendly', '20+ Year Lifespan']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Titanium Grade 5',
      description: 'Aerospace-grade titanium that\'s 40% lighter and 5x stronger than steel.',
      features: ['Ultra-Light', 'Corrosion Resistant', 'Hypoallergenic']
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: 'Atomic Precision',
      description: 'Radio-controlled timekeeping accurate to 1 second in 100,000 years.',
      features: ['Atomic Accuracy', 'Auto-Sync', 'Global Coverage']
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: 'GPS Navigation',
      description: 'Satellite connectivity for precise location and time zone adjustment.',
      features: ['Global Positioning', 'Auto Time Zone', 'Navigation Aid']
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Technology
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge innovations that push the boundaries of what a timepiece can achieve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div key={index} className="group text-center">
              <div className="bg-gray-900 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500 border border-gray-800">
                {tech.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 md:p-16 border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Engineered for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                  Excellence
                </span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Every component is meticulously crafted using the finest materials and most advanced manufacturing techniques. 
                From Swiss movements to sapphire crystals, we spare no expense in creating timepieces that last generations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">300m</div>
                  <div className="text-gray-400">Water Resistance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">±15s</div>
                  <div className="text-gray-400">Monthly Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">10</div>
                  <div className="text-gray-400">Year Warranty</div>
                </div>
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Discover Technology
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                <img
                  src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Watch Technology"
                  className="w-4/5 h-4/5 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;