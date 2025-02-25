'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute top-0 left-0 right-0 bottom-0 animated-gradient opacity-30"></div>
      {Array(20).fill().map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-500"
          style={{
            width: Math.random() * 6 + 2, 
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Calculate the 3D rotation effect
  const calculateRotation = () => {
    if (!isMounted) return { rotateY: '0deg', rotateX: '0deg' };
    
    const rotateY = `${(mousePosition.x - windowSize.width / 2) / 50}deg`;
    const rotateX = `${-(mousePosition.y - windowSize.height / 2) / 50}deg`;
    
    return { rotateY, rotateX };
  };
  
  const { rotateY, rotateX } = calculateRotation();
  
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <ParticleBackground />
      
      <div className="section-padding z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Create <span className="gradient-text">Beautiful</span> Experiences
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Build stunning websites with modern animations 
              and responsive designs that captivate your audience.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              perspective: '1000px',
            }}
          >
            {isMounted && (
              <motion.div
                className="w-full h-[400px] bg-gradient-to-tr from-violet-900/30 to-indigo-600/30 rounded-lg backdrop-blur-sm border border-violet-500/20 shadow-2xl overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotateY}) rotateX(${rotateX})`,
                }}
              >
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 bg-gray-800/50 px-3 py-1 rounded-md text-xs text-gray-300 flex-grow text-center overflow-hidden">
                      modernlanding.com
                    </div>
                  </div>
                  
                  <div className="flex-grow overflow-hidden font-mono text-sm">
                    <div className="space-y-3">
                      <div>
                        <span className="text-pink-400">import</span> 
                        <span className="text-white"> &#123; </span>
                        <span className="text-blue-300">motion</span>
                        <span className="text-white"> &#125; </span>
                        <span className="text-pink-400">from</span> 
                        <span className="text-green-300">'framer-motion'</span>
                        <span className="text-white">;</span>
                      </div>
                      
                      <div>
                        <span className="text-pink-400">const</span> 
                        <span className="text-yellow-300"> Card </span>
                        <span className="text-white">= () </span>
                        <span className="text-pink-400">=</span> 
                        <span className="text-white"> &#123;</span>
                      </div>
                      
                      <div className="pl-4">
                        <span className="text-pink-400">return</span> 
                        <span className="text-white"> (</span>
                      </div>
                      
                      <div className="pl-8">
                        <span className="text-blue-300">&lt;motion.div</span>
                      </div>
                      
                      <div className="pl-12">
                        <span className="text-purple-300">whileHover</span>
                        <span className="text-white">&#123; &#123; </span>
                        <span className="text-yellow-300">scale</span>
                        <span className="text-white">: </span>
                        <span className="text-orange-300">1.05 </span>
                        <span className="text-white">&#125; &#125;</span>
                      </div>
                      
                      <div className="pl-12">
                        <span className="text-purple-300">transition</span>
                        <span className="text-white">&#123; &#123; </span>
                        <span className="text-yellow-300">type</span>
                        <span className="text-white">: </span>
                        <span className="text-green-300">"spring"</span>
                        <span className="text-white"> &#125; &#125;</span>
                      </div>
                      
                      <div className="pl-8">
                        <span className="text-blue-300">&gt;</span>
                      </div>
                      
                      <div className="pl-12">
                        <span className="text-teal-300">// Your amazing content</span>
                      </div>
                      
                      <div className="pl-8">
                        <span className="text-blue-300">&lt;/motion.div&gt;</span>
                      </div>
                      
                      <div className="pl-4">
                        <span className="text-white">);</span>
                      </div>
                      
                      <div>
                        <span className="text-white">&#125;;</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded p-4">
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-300">
                          <span className="text-violet-400 font-semibold">Framer Motion</span> animations make your site come alive
                        </div>
                        <motion.div 
                          className="bg-violet-600 text-white text-xs px-3 py-1 rounded-full cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Try it now
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </div>
    </section>
  );
};

export default HeroSection;
