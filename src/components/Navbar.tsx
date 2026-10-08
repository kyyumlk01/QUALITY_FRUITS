import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

interface NavbarProps {
  onOpenOrderModal: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrderModal,
  activeSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Why Protect', id: 'features' },
    { label: 'How It Works', id: 'showcase' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E6DD]/80 py-2.5 sm:py-3.5'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Left Side: Logo + Brand Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2 sm:gap-3 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143826] rounded-md shrink-0 min-w-0"
            aria-label="Quality Fruits Home"
          >
            <div className="relative w-[34px] h-[34px] sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-black shrink-0 shadow-sm border border-[#143826]/20 transition-transform group-hover:scale-105">
              <img
                src="/images/quality-fruits-logo.png"
                alt="Quality Fruits"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <span className="text-[18px] sm:text-2xl font-bold tracking-tight text-[#143826] font-display whitespace-nowrap transition-colors truncate">
              {BUSINESS_CONFIG.companyName}
            </span>
          </button>

          {/* Center (Desktop only): Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#44564C]" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors hover:text-[#143826] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143826] rounded-sm ${
                    isActive ? 'text-[#143826] font-semibold' : 'text-[#4B5E53]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F29C11] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Order Action & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            {/* Order Button: Compact on mobile, standard on desktop */}
            <button
              onClick={onOpenOrderModal}
              className="relative inline-flex items-center justify-center gap-1.5 md:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-5 md:py-2.5 text-xs md:text-sm font-semibold tracking-wide text-white bg-[#143826] hover:bg-[#1E4D35] active:scale-[0.98] transition-all duration-200 rounded-lg shadow-sm border border-[#143826] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#143826] shrink-0"
              aria-label="Order Mango Protection Bags"
            >
              <ShoppingBag className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F29C11] shrink-0" />
              <span className="md:hidden">Order</span>
              <span className="hidden md:inline">Order Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[#143826] hover:bg-[#EAE8DD]/60 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143826] shrink-0"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-[#E7E5DC] shadow-lg px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-[#EAE8DD] text-[#143826] font-semibold'
                    : 'text-[#4B5E53] hover:bg-[#F2EFE6] hover:text-[#143826]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-[#E8E6DD]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#143826] rounded-lg shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-[#F29C11]" />
                <span>Place Your Order</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
