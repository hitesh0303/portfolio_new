import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background sphere */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Hitesh Sonawane
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Motivated undergraduate engineering student with a solid foundation in Information Technology. 
          Strong analytical skills, teamwork, and communication abilities. Experienced in applying 
          engineering principles through hands-on projects and internships. Ready to contribute to 
          innovative engineering projects.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;