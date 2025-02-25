'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'UX/UI Design',
    description: 'We create intuitive and engaging user experiences that keep your visitors coming back.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Our developers build fast, responsive, and feature-rich websites using the latest technologies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across devices.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategies to increase your online visibility and drive meaningful engagement with your audience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-5 p-6 rounded-lg bg-gray-800 hover:bg-gray-800/80 transition-all duration-300 border border-gray-700 hover:border-violet-500/40"
    >
      <div className="text-violet-500 flex-shrink-0">
        {service.icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-gray-900 py-20">
      <div ref={sectionRef} className="section-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              We Create <span className="gradient-text">Digital Experiences</span> That Matter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 mb-6"
            >
              With over 10 years of experience in digital design and development, we've helped hundreds of businesses transform their online presence and achieve their goals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 mb-8"
            >
              Our team of experts combines creativity with technical excellence to deliver solutions that not only look great but also perform exceptionally well.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="bg-gray-800 px-4 py-3 rounded-lg">
                <div className="text-3xl font-bold text-violet-500">250+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gray-800 px-4 py-3 rounded-lg">
                <div className="text-3xl font-bold text-violet-500">50+</div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
              <div className="bg-gray-800 px-4 py-3 rounded-lg">
                <div className="text-3xl font-bold text-violet-500">99%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;