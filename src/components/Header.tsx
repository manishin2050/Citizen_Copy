
import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Remove logo from menuItems for desktop centering
  const menuItems = [
    {
      name: 'Products',
      dropdown: ["Men's Watches", "Women's Watches", 'Eco-Drive', 'Promaster', 'Satellite Wave'],
    },
    {
      name: 'About CITIZEN',
      dropdown: ['Eco-Drive', 'Promaster', 'Satellite Wave', 'Chronograph', 'Dress Watches'],
    },
    {
      name: 'Technology',
      dropdown: ['Eco-Drive Technology', 'Satellite Wave GPS', 'Atomic Timekeeping'],
    },
    { name: 'News' },

    { name: 'Support' },
    { name: 'Store Location' },
    { name: 'Online Store' },
  ];

  return (
    <header className="bg-gray-100 text-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">




        <div className="flex items-center justify-between py-4 relative">
          {/* Left Nav (First half menu items) */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-start md:pl-20">
            {menuItems.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-black hover:text-black rounded-lg font-medium transition-colors bg-gray-100 hover:bg-white pb-2  p-2 border-b-2 border-transparent group-hover:border-black">
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-200 shadow-lg rounded-md py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-900 transition-colors"
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
            <span
              className="font-bold text-black bg-gray-100 flex items-center justify-center"
              style={{
                height: '48px',
                width: '114px',
                fontSize: '2rem',
                letterSpacing: '2px',
              }}
            >
              CITIZEN
            </span>
          </div>

          {/* Right Nav (Remaining menu items) */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 md:pr-20 justify-end">
            {menuItems.slice(3).map((item, idx) => (
              <div key={idx} className="relative group">
                <button className="flex items-center space-x-1 text-black hover:text-gray-900 font-medium transition-colors bg-gray-100 hover:bg-white p-2 rounded-lg pb-2 border-b-2 border-transparent group-hover:border-black">
                  <span>{item.name}</span>
                </button>
              </div>
            ))}

          </nav>
          {/* Right side icons & Hamburger */}
          <div className="flex items-center space-x-4 lg:absolute lg:right-4">

            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="space-y-4">
              {menuItems.map((item, idx) => (
                <div key={idx}>
                  <a href="#" className="block text-gray-900 font-medium">
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block text-sm text-gray-600 hover:text-gray-900 "
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </nav>
              
          </div>
        )} 
      </div>
    </header>
  );
};

export default Header;


