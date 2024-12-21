'use client'

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl sm:text-7xl font-bold mb-8 text-white tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Natik Aggarwal
        </motion.h1>
        <motion.h2 
          className="text-xl sm:text-3xl text-blue-200 mb-10 font-medium tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Developer
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Building exceptional digital experiences with modern technologies.
        </motion.p>
        <motion.div
          className="space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full bg-transparent text-white border border-white/10 hover:bg-white/5 transition-all duration-300 font-medium text-lg"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
} 