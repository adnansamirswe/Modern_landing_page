'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: 29,
    period: 'monthly',
    description: 'Perfect for small businesses and startups.',
    features: [
      'Responsive Design',
      '3 Page Website',
      'Basic SEO',
      'Contact Form',
      'Mobile Friendly',
    ],
    cta: 'Get Started',
    recommended: false,
  },
  {
    name: 'Professional',
    price: 79,
    period: 'monthly',
    description: 'Ideal for growing businesses and e-commerce.',
    features: [
      'Everything in Basic',
      'Up to 10 Pages',
      'Advanced SEO',
      'E-commerce Integration',
      'Custom Animations',
      'Content Management System',
      'Premium Support',
    ],
    cta: 'Get Started',
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    period: 'monthly',
    description: 'For large businesses and complex projects.',
    features: [
      'Everything in Professional',
      'Unlimited Pages',
      'Advanced Integrations',
      'Custom Features',
      'Performance Optimization',
      'Monthly Reports',
      '24/7 Priority Support',
      'Dedicated Account Manager',
    ],
    cta: 'Contact Us',
    recommended: false,
  },
];

const PricingCard = ({ plan, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative rounded-xl overflow-hidden ${
        plan.recommended 
          ? 'bg-gradient-to-b from-violet-900/50 to-gray-800 border-violet-500' 
          : 'bg-gray-800/80 border-gray-700'
      } border shadow-lg flex flex-col`}
    >
      {plan.recommended && (
        <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          RECOMMENDED
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-1">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-400 mb-1">/{plan.period}</span>
        </div>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <svg className="h-5 w-5 text-violet-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0">
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: plan.recommended ? '0 0 20px rgba(139, 92, 246, 0.5)' : 'none',
          }}
          className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${
            plan.recommended 
              ? 'bg-violet-600 hover:bg-violet-700 text-white' 
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          {plan.cta}
        </motion.button>
      </div>
      
      {plan.recommended && (
        <motion.div
          className="absolute inset-0 z-0 rounded-xl"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(139, 92, 246, 0)',
              '0 0 0 10px rgba(139, 92, 246, 0.1)',
              '0 0 0 0 rgba(139, 92, 246, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      )}
    </motion.div>
  );
};

const PricingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="pricing" className="bg-gray-900 py-20">
      <div ref={sectionRef} className="section-padding">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that works best for your business needs. All plans come with our award-winning customer support.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Contact Us for Custom Pricing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
