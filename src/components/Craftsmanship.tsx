import React from 'react';
import { Award, Clock, Gem, Wrench } from 'lucide-react';

const Craftsmanship = () => {
  const craftFeatures = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Master Craftsmen',
      description: 'Each timepiece is assembled by certified master watchmakers with decades of experience.',
      stat: '50+ Years',
      statLabel: 'Average Experience'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Precision Testing',
      description: 'Every watch undergoes 200+ quality checks and precision tests before leaving our facility.',
      stat: '200+',
      statLabel: 'Quality Checks'
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: 'Premium Materials',
      description: 'Only the finest materials: Swiss movements, sapphire crystals, and aerospace-grade titanium.',
      stat: '99.9%',
      statLabel: 'Material Purity'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Lifetime Service',
      description: 'Comprehensive warranty and lifetime service support for all our timepieces.',
      stat: 'Lifetime',
      statLabel: 'Service Guarantee'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Swiss
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Craftsmanship
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every detail matters. From the initial design to the final quality check, our commitment to excellence is unwavering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {craftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="bg-black p-4 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-300 flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-white">{feature.stat}</span>
                    <span className="text-gray-500 text-sm">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-3xl overflow-hidden border border-gray-700">
              <img
                src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Swiss Craftsmanship"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-2xl font-bold text-white mb-2">Handcrafted Excellence</h3>
                <p className="text-gray-300">Every component meticulously assembled by master artisans</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-white text-black p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold mb-1">1918</div>
              <div className="text-sm font-medium">Founded</div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white text-black p-6 rounded-2xl shadow-2xl">
              <div className="text-3xl font-bold mb-1">500K+</div>
              <div className="text-sm font-medium">Watches Crafted</div>
            </div>
          </div>
        </div>

        {/* Heritage Section */}
        <div className="bg-black rounded-3xl p-12 md:p-16 border border-gray-800">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              A Legacy of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Excellence
              </span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              For over a century, we've been pushing the boundaries of horological innovation, 
              creating timepieces that stand the test of time and define generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">105</div>
              <div className="text-gray-400">Years of Heritage</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">50+</div>
              <div className="text-gray-400">Countries Worldwide</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">200+</div>
              <div className="text-gray-400">Master Craftsmen</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">15</div>
              <div className="text-gray-400">International Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;