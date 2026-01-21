// src/components/EducationExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface EducationExperienceSectionProps {
  className?: string;
}

const EducationExperienceSection: React.FC<EducationExperienceSectionProps> = ({ className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }

  // Card variants with alternating directions
  const cardVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: i % 2 === 0 ? -150 : 150,
      y: 30,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  // Hover effect for cards
  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(255, 69, 137, 0.4)",
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
        {/* 🔥 TOP SECTION — STANDALONE HERO HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-16 pb-8 border-b border-gray-800"
        >
          <span className="inline-block text-pink-500 text-xs uppercase font-bold tracking-wider mb-2">
            EDUCATION & EXPERIENCE
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Empowering Creativity <br /> through
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          transition={{ delay: 0.3 }}
          className="flex items-center mb-8"
        >
          <h3 className="text-white text-xl font-bold">Education</h3>
          <span className="ml-4 h-0.5 w-12 bg-gray-600"></span>
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Trainer Marketing",
              period: "2005-2009",
              desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.",
              highlight: true,
            },
            {
              title: "Assistant Director",
              period: "2010-2014",
              desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.",
              highlight: false,
            },
            {
              title: "Design Assistant",
              period: "2008-2012",
              desc: "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
              highlight: false,
            },
            {
              title: "Design Assistant",
              period: "2008-2012",
              desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal.",
              highlight: false,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              whileTap="tap"
              variants={cardHoverVariants}
              className={`group relative p-6 rounded-xl border ${
                item.highlight
                  ? "border-pink-500/30 bg-gray-900"
                  : "border-gray-800 bg-gray-900"
              } hover:border-pink-500/40 transition-all duration-300 cursor-pointer`}
            >
              <div className="mb-3">
                <h4 className="text-white font-semibold text-base">{item.title}</h4>
                <span className="text-pink-500 text-sm font-medium">{item.period}</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              {item.highlight && (
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br from-pink-500 to-purple-500 transition-opacity duration-300 pointer-events-none"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationExperienceSection;