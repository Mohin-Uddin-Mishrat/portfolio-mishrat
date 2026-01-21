import React from 'react';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ className = '' }) => {
  // Card variants (slide in from left)
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  // Decorative shape variants
  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  // Image variants (zoom + rotate slightly)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <section className={`relative overflow-hidden bg-black py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-pink-500 text-xs uppercase font-bold tracking-wider mb-2">
            Latest Service
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Inspiring The World One Project
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Cards */}
          <div className="space-y-6">
            {[{
              number: "01.",
              title: "A Portfolio of Creativity",
              desc: "Business consulting consultants provide expert advice and guide the a businesses to help them their performance efficiency",
            },
            {
              number: "02.",
              title: "My Portfolio of Innovation",
              desc: "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
            },
            {
              number: "03.",
              title: "A Showcase of My Projects",
              desc: "In this portfolio, you'll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design]",
            }].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // This ensures animation runs once when in view
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-pink-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-pink-500 font-bold text-lg">{item.number}</span>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-pink-500 to-purple-500 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Image + Decorative Shapes */}
          <div className="relative flex justify-center">
            {/* Main Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
              className="relative z-10"
            >
              <img
                src="/public/assets/smartman.png"
                alt="Professional Man"
                className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-pink-500/20 shadow-2xl"
              />
            </motion.div>

            {/* Decorative Shapes */}
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.5 }}
              className="absolute top-1/4 left-1/4 w-12 h-12 bg-pink-500 rounded-full"
            />
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.7 }}
              className="absolute top-1/2 right-1/4 w-16 h-8 bg-pink-500 rounded-b-full"
            />
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.6 }}
              className="absolute bottom-1/4 left-1/3 w-16 h-16 border-2 border-pink-500 rounded-full"
            />
            <motion.div
              variants={shapeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.8 }}
              className="absolute top-1/3 right-1/3 w-8 h-8 border-2 border-pink-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
