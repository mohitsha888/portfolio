import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Terminal, Github, Linkedin, CurlyBraces, Codepen, Code, Code2Icon, LineChart, Joystick, Gamepad, Gamepad2 } from 'lucide-react';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6 fill-current"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com/mohitsha888", label: "GitHub" },
    { icon: XIcon, href: "https://x.com/themohitz", label: "X (formerly Twitter)" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohit-sharma-265b00206/", label: "LinkedIn" }
  ];

  const handleNavigation = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Dynamic background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-10 animate-gradient bg-[length:200%_200%]"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[Code2, Sparkles, Terminal].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Icon className="text-white/20 w-8 h-8" />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Mohit Sharma
          </h1>
          
          <p className="text-gray-300 text-xl mb-12">
            Crafting digital experiences with code and creativity
          </p>

          {/* Interactive cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {['Projects', 'Skills', 'Contact'].map((title, index) => (
              <motion.button
                key={title}
                onClick={() => handleNavigation(title)}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <div className="h-1 w-12 mx-auto bg-gradient-to-r from-purple-400 to-pink-600 rounded-full transform origin-left transition-all group-hover:w-24" />
              </motion.button>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient border using pseudo-element */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 -z-10" />
                <div className="absolute inset-[1px] rounded-full" />
                <div className="relative">
                  {typeof Icon === 'function' ? (
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  ) : (
                    <Icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;