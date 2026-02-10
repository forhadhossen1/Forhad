import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 px-4 py-2 transition-all duration-300 
    ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'} 
    shadow-md rounded-t-xl backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <Link
  to="/"
  className="flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white hover:text-accent-500 transition-colors"
>
  <img
    src="https://i.ibb.co.com/qLBxwpbt/website-icon.png"
    alt="Logo"
    className="w-8 h-8 object-contain dark:invert dark:brightness-0"
  />
  <span>Forhad</span>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-accent-500 border-b-2 border-accent-500'
                    : 'text-gray-600 dark:text-gray-300 hover:text-accent-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-card glass-card-light dark:glass-card-dark hover:scale-110 transition-all duration-300"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-accent-500" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-accent-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.href)
                      ? 'text-accent-500 glass-card glass-card-light dark:glass-card-dark'
                      : 'text-gray-600 dark:text-gray-300 hover:text-accent-500 hover:glass-card hover:glass-card-light dark:hover:glass-card-dark'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;