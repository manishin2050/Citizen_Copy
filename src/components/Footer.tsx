import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'PRODUCTS',
      links: ['Men\'s Watches', 'Women\'s Watches', 'Eco-Drive', 'Promaster', 'Satellite Wave', 'Chronograph']
    },
    {
      title: 'SUPPORT',
      links: ['Customer Service', 'Warranty', 'Repair Services', 'User Manuals', 'Size Guide', 'FAQ']
    },
    {
      title: 'COMPANY',
      links: ['About Citizen', 'Heritage', 'Careers', 'Press', 'Sustainability', 'Investor Relations']
    },
    {
      title: 'CONNECT',
      links: ['Store Locator', 'Authorized Dealers', 'Contact Us', 'Newsletter', 'Watch Care', 'Community']
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Youtube className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gray-100 text-black ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop" 
                alt="Citizen" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-2xl font-bold">CITIZEN</span>
            </div>
            <p className="text-gray-900 mb-6 leading-relaxed">
              Since 1918, Citizen has been dedicated to making timepieces that are accessible to all. 
              Our commitment to precision, innovation, and sustainability drives everything we do.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-900">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-900">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-900">support@citizen.co.in</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-700 hover:text-black transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-0 text-sm">
                © 2024 Citizen Watch Co., Ltd. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-black transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">Cookies</a>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-300 p-2 rounded-full hover:bg-white shadow-lg hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;