// src/components/Banner.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface BannerProps {
  className?: string;
}

const Banner: React.FC<BannerProps> = ({ className = '' }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  const texts = [
    "Content Writer",
    "Web Designer",
    "UI/UX Specialist",
    "Digital Creator"
  ];

  // Typing animation logic
  useEffect(() => {
    if (!isTyping) return;

    const currentText = texts[currentTextIndex];
    let i = 0;

    const typeInterval = setInterval(() => {
      if (i <= currentText.length) {
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            setIsTyping(true);
          }, 1500);
        }, 1000);
      }
    }, 120);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex, isTyping]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(255, 69, 137, 0.5)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section 
      className={`relative overflow-hidden bg-black ${className}`}
      style={{
        height: '100vh',
        backgroundImage: `
          linear-gradient(to right, #0f0c10 0%, #0a080d 50%, #0f0c10 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 69, 137, 0.05) 10px,
            rgba(255, 69, 137, 0.05) 20px
          )
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Animated subtle pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [-50, 50], y: [-30, 30] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 25%, rgba(255, 69, 137, 0.1) 25%, rgba(255, 69, 137, 0.1) 50%, transparent 50%, transparent 75%, rgba(255, 69, 137, 0.1) 75%, rgba(255, 69, 137, 0.1)),
              linear-gradient(45deg, transparent 25%, rgba(255, 69, 137, 0.1) 25%, rgba(255, 69, 137, 0.1) 50%, transparent 50%, transparent 75%, rgba(255, 69, 137, 0.1) 75%, rgba(255, 69, 137, 0.1))
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
          
          {/* Left Side - Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-gray-400 uppercase tracking-wider"
            >
              Hello
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight"
            >
              I'm Jane Cooper a
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-pink-500 relative"
            >
              <span>
                {texts[currentTextIndex].substring(0, isTyping ? texts[currentTextIndex].length : texts[currentTextIndex].length)}
              </span>
              <span className={`inline-block ml-1 transition-opacity duration-300 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
                |
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth. It serves as
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="px-6 py-3 bg-pink-500 text-white rounded-full font-medium flex items-center space-x-2 hover:bg-pink-600 transition-colors duration-300"
              >
                <span>View Portfolio</span>
                <FaArrowRight />
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Image (2/3 height) */}
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <img
                src="/assets/smartman.png"
                alt="Jane Cooper"
                className="w-full max-w-lg h-[66.66vh] object-cover rounded-xl shadow-2xl"
              />

              {/* Floating decorative shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-500/10 rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;