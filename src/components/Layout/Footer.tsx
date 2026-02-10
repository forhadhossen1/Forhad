import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin,  Phone, Mail, Instagram} from 'lucide-react';

const Footer = () => {
  return (
<footer className="bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      {/* Title + About + Social */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold mb-4 dark:text-white">Digital Marketing Specialist</h3>
        <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
          Helping businesses grow through strategic digital marketing solutions. 
          Let's transform your online presence together.
        </p>
        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/forhadhossen-marketer/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801306181767"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Phone className="w-6 h-6" />
          </a>

          {/* Email */}
          <a
            href="mailto:forhadhossen.marketer@gmail.com"
            className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 dark:text-white">Quick Links</h4>
        <nav className="space-y-2">
          <Link to="/services" className="block text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
            Services
          </Link>
          <Link to="/portfolio" className="block text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link to="/about" className="block text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link to="/blog" className="block text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
            Blog
          </Link>
        </nav>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-lg font-semibold mb-4 dark:text-white">Contact</h4>
        <div className="space-y-2">
          {/* Instagram */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
            <Instagram className="w-4 h-4" />
            <a
              href="https://www.instagram.com/forhadhossen_1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              @forhadhossen_1
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Phone className="w-4 h-4" />
            <span>+8801306181767</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>&copy; 2025 Digital Marketer Forhad Portfolio. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;