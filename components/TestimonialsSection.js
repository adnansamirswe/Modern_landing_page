'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'CEO, TechStart',
    content: 'Working with this team was a game-changer for our business. The website they built not only looks stunning but also performs exceptionally well. Our conversion rate has increased by 45% since launch!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Marketing Director, Innovate',
    content: 'I was blown away by the attention to detail and the creative approach. The animations and transitions they implemented make our site stand out from the competition. Highly recommended!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Founder, DesignHub',
    content: 'The responsive design works flawlessly across all devices. We\'ve received numerous compliments on how professional and modern our new website looks. The team was a pleasure to work with.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'CTO, FutureVision',
    content: 'Not only is the website visually impressive, but the performance metrics are outstanding. The loading speed and optimized code have significantly improved our SEO rankings.',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };
  
  return (
    <section id="testimonials" className="bg-gray-800 py-20">
      <div ref={sectionRef} className="section-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients and see how we've helped them achieve their digital goals.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto px-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, type: "tween" }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-violet-500">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <div className="text-violet-400 mb-4">
                    <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {[...Array(5)].map((_, i) => (
                        <path
                          key={i}
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          transform={`translate(${i * 24}, 0)`}
                          fill="#8B5CF6"
                        />
                      ))}
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl text-gray-200 italic mb-6">"{testimonials[currentIndex].content}"</p>
                  <div>
                    <h4 className="text-xl font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2">
            <button 
              onClick={prevTestimonial} 
              className="bg-gray-800 hover:bg-violet-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2">
            <button 
              onClick={nextTestimonial} 
              className="bg-gray-800 hover:bg-violet-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-violet-500 w-6' : 'bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
