import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
        
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
        <footer className="bg-white dark:bg-gray-900 py-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/hitesh0303" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://www.instagram.com/hitesh33_" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="mailto:hiteshsonawane33@gmail.com">
              <Mail className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Hitesh Sonawane. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;