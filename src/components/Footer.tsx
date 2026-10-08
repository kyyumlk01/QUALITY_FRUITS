import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOrderModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#143826] text-white pt-16 pb-12 border-t border-[#0D261A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-black shrink-0 border border-white/15 shadow-md">
                <img
                  src="/images/quality-fruits-logo.png"
                  alt="Quality Fruits"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-bold font-display text-white tracking-tight">
                {BUSINESS_CONFIG.companyName}
              </h3>
            </div>

            <p className="text-[#A4CBB4] text-sm max-w-sm leading-relaxed">
              Smart protection for better mangoes. Dedicated to preserving harvest quality and agricultural yield through practical, high-grade fruit protection bags.
            </p>

            {/* Social Icons (Placeholder links clearly commented) */}
            <div className="pt-2 flex items-center gap-3">
              {/* Instagram link: Replace in src/config/businessInfo.ts */}
              <a
                href={BUSINESS_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F29C11] hover:text-[#143826] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Facebook link: Replace in src/config/businessInfo.ts */}
              <a
                href={BUSINESS_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#F29C11] hover:text-[#143826] text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* WhatsApp direct chat link */}
              <a
                href={BUSINESS_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] hover:text-white text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F29C11]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#D0E2D7]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('features')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Protect
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('showcase')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenOrderModal}
                  className="hover:text-[#F29C11] font-semibold transition-colors cursor-pointer"
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F29C11]">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D0E2D7]">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F29C11] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="hover:underline">
                  {BUSINESS_CONFIG.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F29C11] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="hover:underline">
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F29C11] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_CONFIG.contact.address}, {BUSINESS_CONFIG.contact.city}, {BUSINESS_CONFIG.contact.state}, {BUSINESS_CONFIG.contact.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8BA996]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.companyName}. All rights reserved. Agricultural produce protection systems.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
