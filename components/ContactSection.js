'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formState, setFormState] = useState({
    status: 'idle', // idle, submitting, success, error
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ status: 'submitting', message: '' });
    
    // Simulate form submission
    setTimeout(() => {
      // Check if all fields are filled
      if (!formData.name || !formData.email || !formData.message) {
        setFormState({
          status: 'error',
          message: 'Please fill out all fields.',
        });
        return;
      }
      
      // Check if email is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFormState({
          status: 'error',
          message: 'Please enter a valid email address.',
        });
        return;
      }
      
      // Success state
      setFormState({
        status: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#8B5CF6', boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.3)' },
    blur: { scale: 1, borderColor: '', boxShadow: 'none' },
  };
  
  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div ref={sectionRef} className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left column content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind or want to learn more about our services? Reach out to us and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              {/* Contact information items */}
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-full text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-400">hello@modernlanding.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-full text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gray-700 p-3 rounded-full text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-400">123 Web Design St, Digital City, 10001</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <div className="space-y-6">
                {/* Form fields */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <motion.input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="John Doe"
                    whileFocus="focus"
                    whileTap="focus"
                    variants={inputVariants}
                    disabled={formState.status === 'submitting'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <motion.input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="john@example.com"
                    whileFocus="focus"
                    whileTap="focus"
                    variants={inputVariants}
                    disabled={formState.status === 'submitting'}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell us about your project..."
                    whileFocus="focus"
                    whileTap="focus"
                    variants={inputVariants}
                    disabled={formState.status === 'submitting'}
                  ></motion.textarea>
                </div>
                
                {formState.message && (
                  <div className={`text-sm ${formState.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {formState.message}
                  </div>
                )}
                
                <motion.button
                  type="submit"
                  className={`btn-primary w-full ${formState.status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                  whileHover={formState.status !== 'submitting' ? { scale: 1.02 } : {}}
                  whileTap={formState.status !== 'submitting' ? { scale: 0.98 } : {}}
                  disabled={formState.status === 'submitting'}
                >
                  {formState.status === 'submitting' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;