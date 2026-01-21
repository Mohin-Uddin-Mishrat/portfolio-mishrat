// src/components/Banner.tsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["Content Writer", "Web Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    const text = texts[index];
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i <= text.length) {
        setCurrentText(text.slice(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
            setCurrentText('');
            setIsTyping(true);
          }, 1000);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index, isTyping]);

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const float = {
    animate: {
      y: [-5, 5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-black flex flex-col">

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-pink-500 opacity-10 animate-float-horizontal"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: '-50px',
              animationDuration: `${Math.random() * 20 + 15}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric Background Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="geometric" patternUnits="userSpaceOnUse" width="100" height="100">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="#ff0066" strokeWidth="0.5" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric)" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <h1 className="font-bold text-xl">Reeni</h1>
        </div>

        {!isMobile ? (
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-pink-400 transition">Home</a>
            <a href="#" className="hover:text-pink-400 transition">About</a>
            <a href="#" className="hover:text-pink-400 transition">Services</a>
            <a href="#" className="hover:text-pink-400 transition">Project</a>
            <a href="#" className="hover:text-pink-400 transition">Blog</a>
            <a href="#" className="hover:text-pink-400 transition">Contact</a>
          </div>
        ) : (
          <button className="text-2xl bg-pink-500 p-2 rounded-full">
            <FaBars />
          </button>
        )}

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
          <button className="bg-pink-500 p-2 rounded-full">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className={`container mx-auto px-6 py-16 flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-12 relative z-10`}>

        {/* Left Side: Text */}
        <motion.div
          className={`max-w-lg ${isMobile ? 'text-center' : 'text-left'}`}
          variants={isMobile ? {} : fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p className="text-pink-400 font-semibold mb-2">HELLO</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            I'm Jane Cooper a
            <br />
            <span className="text-pink-500 cursor-typing">{currentText}</span>
          </h1>
          <p className="text-gray-400 mb-8">
            I'm a freelance product designer & developer based in London. I'm very passionate about the work I do.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-3 rounded-full font-medium transition">
            Learn More →
          </button>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className={`relative ${isMobile ? 'w-full' : 'w-1/2'}`}
          variants={isMobile ? {} : fadeInRight}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <img
            src="https://via.placeholder.com/600x800?text=Web+Designer+Image"
            alt="Jane Cooper"
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          <div className="absolute -top-4 -right-4 bg-black px-4 py-2 rounded-lg text-xs font-bold">
            WEB DESIGNER
          </div>
        </motion.div>

      </div>

      {/* Floating Button (WhatsApp) */}
      <motion.div
        className="fixed bottom-6 right-6 bg-pink-500 p-4 rounded-full cursor-pointer z-20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IoLogoWhatsapp size={24} />
      </motion.div>

      {/* Sidebar: 44 Pre-Built Sites */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-6 rounded-l-lg text-xs font-bold rotate-90 origin-top-right whitespace-nowrap">
        44 PRE-BUILT SITES
      </div>

      {/* Green Badge */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 translate-x-16 bg-green-600 px-3 py-2 rounded-l-lg text-xs font-bold">
        W
      </div>

    </div>
  );
};

export default Banner;