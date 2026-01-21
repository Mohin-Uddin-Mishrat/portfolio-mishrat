// src/components/StatsSection.tsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaPencilRuler, FaNetworkWired, FaLightbulb, FaEnvelope, FaStar, FaUsers } from 'react-icons/fa';

interface StatsSectionProps {
  className?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Directional variants for staggered entry
  const directionalVariants = {
    hidden: (direction: 'left' | 'right' | 'top' | 'bottom') => ({
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'top' ? -50 : direction === 'bottom' ? 50 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 0 15px rgba(255, 69, 137, 0.6)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden bg-black py-16 md:py-24 ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Services Row (Same as before) */}
        <motion.div
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { icon: <FaPencilRuler />, title: "Web Design", projects: "120 Projects" },
            { icon: <FaNetworkWired />, title: "UI/UX Design", projects: "241 Projects" },
            { icon: <FaLightbulb />, title: "Web Research", projects: "240 Projects" },
            { icon: <FaEnvelope />, title: "Marketing", projects: "331 Projects" },
          ].map((item, index) => {
            const directions = ['left', 'right', 'top', 'bottom'] as const;
            const direction = directions[index % directions.length];

            return (
              <motion.div
                key={index}
                custom={direction}
                variants={directionalVariants}
                whileHover="hover"
                whileTap="tap"
                animate={cardHoverVariants}
                className="group relative p-6 rounded-lg border border-gray-800 bg-black hover:border-pink-500/30 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center space-y-3"
              >
                <div className="text-pink-500 text-3xl group-hover:text-pink-400 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-white font-medium text-base">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.projects}</p>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-gradient-to-br from-pink-500 to-purple-500 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Stats Layout — Big Card + 4 Stat Cards in Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          {/* BIG CARD — LEFT SIDE */}
          <motion.div
            custom="left"
            variants={directionalVariants}
            whileHover="hover"
            whileTap="tap"
            animate={cardHoverVariants}
            className="group relative col-span-1 lg:col-span-2 p-8 rounded-xl bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="flex items-start space-x-4">
              <span className="text-6xl md:text-8xl font-extrabold text-pink-500">25</span>
              <div>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight">
                  Years Of Experience
                </h3>
              </div>
            </div>
            <p className="text-gray-300 text-xs mt-4 max-w-xs">
              Business consulting consultants provide expert advice and guide the businesses to help them their performance efficiency
            </p>
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-pink-500 to-purple-500 transition-opacity duration-300"></div>
          </motion.div>

          {/* SMALL STAT CARDS — RIGHT SIDE (2x2 GRID) */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-2 gap-6">
            {[
              { number: "20k+", label: "Our Project Complete", icon: <FaStar /> },
              { number: "10k+", label: "Our Natural Products", icon: <FaUsers /> },
              { number: "200+", label: "Clients Reviews", icon: <FaStar /> },
              { number: "1,000+", label: "Our Satisfied Clients", icon: <FaUsers /> },
            ].map((stat, index) => {
              const directions = ['top', 'right', 'bottom', 'left'] as const;
              const direction = directions[index % directions.length];

              return (
                <motion.div
                  key={index}
                  custom={direction}
                  variants={directionalVariants}
                  whileHover="hover"
                  whileTap="tap"
                  animate={cardHoverVariants}
                  className="group relative p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-pink-500/30 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2"
                >
                  <div className="text-pink-500 text-xl mb-2">{stat.icon}</div>
                  <span className="text-3xl md:text-4xl font-bold text-white">{stat.number}</span>
                  <p className="text-gray-400 text-xs">{stat.label}</p>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-pink-500 to-purple-500 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;