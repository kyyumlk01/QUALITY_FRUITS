import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductJourney } from './components/ProductJourney';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'showcase', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C2D24] selection:bg-[#F29C11]/30 selection:text-[#143826]">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onLearnMore={() => scrollToSection('features')}
        />

        {/* Interactive Feature Cards: Why Protect Your Mangoes? */}
        <FeatureCards />

        {/* Product Showcase: Simple Protection. Better Results. */}
        <ProductShowcase onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        {/* Visual Storytelling: From Growing to Harvest */}
        <ProductJourney />

        {/* Trust & Value Highlights (No fake stats) */}
        <TrustHighlights />

        {/* About Section */}
        <AboutSection
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          onNavigateToContact={() => scrollToSection('contact')}
        />

        {/* Contact Us Section with validated Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
      />

      {/* Bottom Sticky Bar for Mobile */}
      <MobileStickyBar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Order Now Modal with Full Validation and Success Experience */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
