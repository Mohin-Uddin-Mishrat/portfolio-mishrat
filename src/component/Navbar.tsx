import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaBars } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Services', 'Project', 'Blog', 'Contact'];
  
  const socialIcons = [
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaFacebook />, href: '#', label: 'Facebook' },
  ];

  return (
    <nav 
      className={`relative bg-black/80 backdrop-blur-sm border-b border-white/10 ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 0%), 
                          radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 0%)`,
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <span className="text-white font-bold text-xl">Reeni</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-white hover:text-pink-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side - Social Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  aria-label={social.label}
                  className="text-white hover:text-pink-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full bg-pink-500 text-white"
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-4 pb-3 space-y-3"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a 
                    key={item} 
                    href="#" 
                    className="text-white hover:text-pink-400 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4 pt-3">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    aria-label={social.label}
                    className="text-white hover:text-pink-400 transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;