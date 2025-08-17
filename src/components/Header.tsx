import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      name: 'Collections',
      dropdown: ["Sport Watches", "Dress Watches", 'Chronographs', 'Dive Watches', 'GMT Watches'],
    },
    {
      name: 'Technology',
      dropdown: ['Solar Power', 'Atomic Timekeeping', 'GPS Sync', 'Titanium', 'Sapphire Crystal'],
    },
    {
      name: 'Heritage',
      dropdown: ['Our Story', 'Craftsmanship', 'Innovation', 'Awards'],
    },
    { name: 'Support' },
    { name: 'Store Locator' },
  ];

  return (
    <header className="bg-black/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 relative">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-start md:pl-20">
            {menuItems.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-gray-300 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-gray-800/50">
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 shadow-xl rounded-lg py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="hidden lg:flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold text-white text-2xl tracking-wider">
                CHRONOS
              </span>
            </div>
          </div>

          {/* Right Nav */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 md:pr-20 justify-end">
            {menuItems.slice(3).map((item, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-gray-300 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-gray-800/50">
                  <span>{item.name}</span>
                </button>
              </div>
            ))}
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>
          </nav>

          {/* Mobile Logo */}
          <div className="lg:hidden">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-white text-xl tracking-wider">CHRONOS</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <nav className="space-y-4">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  <a href="#" className="block text-white font-medium py-2">
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block text-sm text-gray-400 hover:text-white py-1"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
                <Search className="w-5 h-5" />
                <User className="w-5 h-5" />
                <ShoppingBag className="w-5 h-5" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;