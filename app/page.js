'use client';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
