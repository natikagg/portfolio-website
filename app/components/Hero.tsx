'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen fixed inset-0 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Side */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6 text-white tracking-tight font-futura"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Natik Aggarwal
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 text-gray-300 mb-10 leading-relaxed font-raleway"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Building exceptional digital experiences with modern technologies.
            </motion.p>

          </motion.div>

          {/* Image Side */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse"></div>
              <img
                src="https://www.map-this.com/team/natik.png"
                alt="Natik Aggarwal"
                className="rounded-full w-full h-full object-cover relative z-10 glass-effect p-2"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full filter blur-xl animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;