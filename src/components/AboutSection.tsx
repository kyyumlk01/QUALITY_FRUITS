import React from 'react';
import { Target, Leaf, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import aboutImage from '../assets/images/mango_growth_cycle_1790960688790.jpg';

interface AboutSectionProps {
  onOpenOrderModal: () => void;
  onNavigateToContact: () => void;
}

/**
 * ============================================================================
 * ABOUT SECTION (PLACEHOLDER CONTENT - EASILY CUSTOMIZABLE)
 * ============================================================================
 * NOTE: The copy and stories in this component represent placeholder content
 * structured according to the brief. You can replace the text blocks below
 * with your official company history, leadership message, and facility details.
 */
export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenOrderModal,
  onNavigateToContact,
}) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#EAE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase mb-3">
            <span>Our Foundation & Ethos</span>
            <span aria-hidden="true" className="text-[#F29C11]">·</span>
            <span>Agricultural Stewardship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143826] font-display text-balance">
            About {BUSINESS_CONFIG.companyName}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52665B] leading-relaxed">
            We are focused on creating practical solutions that help mango growers protect their produce and improve the overall growing experience.
          </p>
        </div>

        {/* 1. About the Brand & 2. Our Purpose (Hero Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-[#E7E5DC] shadow-sm">
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                01. About The Brand
              </span>
              <h3 className="text-2xl font-bold text-[#143826] font-display mt-2 mb-4">
                Rooted in Mango Farming Realities
              </h3>
              <p className="text-sm text-[#52665B] leading-relaxed">
                Founded with a mission to bridge agricultural science and orchard practicality,{' '}
                <strong>{BUSINESS_CONFIG.companyName}</strong> works closely with farmers to address the delicate challenges of mango development. From seasonal infestations to sunburn scuffing, our goal is to preserve each fruit's natural perfection.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E7E5DC] shadow-sm">
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                02. Our Purpose
              </span>
              <h3 className="text-2xl font-bold text-[#143826] font-display mt-2 mb-4">
                Empowering Growers with Cleaner Harvests
              </h3>
              <p className="text-sm text-[#52665B] leading-relaxed">
                Our purpose is straightforward: reduce harvest waste and enhance fruit grade without overburdening farmers with expensive machinery or complex chemicals. Simple, reliable physical barriers offer sustainable orchard longevity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden p-2.5 bg-white border border-[#E7E5DC] shadow-md">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#E2DFD2]">
                <img
                  src={aboutImage}
                  alt="Quality Fruits orchard development and canopy care"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-[#FAF9F5] rounded-xl mt-3 flex items-center justify-between text-xs text-[#52665B]">
                <span className="font-semibold text-[#143826]">Agricultural Care Initiative</span>
                <span>Sustainable Protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Why We Exist & 4. Our Approach & 5. Product Philosophy (3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Why We Exist */}
          <div className="bg-white rounded-2xl p-7 border border-[#E7E5DC] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F0F7F2] text-[#2D6A4F] flex items-center justify-center mb-5">
                <Target className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                03. Why We Exist
              </span>
              <h4 className="text-xl font-bold text-[#143826] font-display mt-2 mb-3">
                Protecting Every Mango
              </h4>
              <p className="text-sm text-[#52665B] leading-relaxed">
                Every mango lost to insect stings or friction represents months of labor gone unrewarded. We exist to provide growers with dependable protection at an accessible cost.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F2EFE6] text-xs text-[#728379]">
              Field-tested utility
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-white rounded-2xl p-7 border border-[#E7E5DC] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center mb-5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                04. Our Approach
              </span>
              <h4 className="text-xl font-bold text-[#143826] font-display mt-2 mb-3">
                Listening to the Orchard
              </h4>
              <p className="text-sm text-[#52665B] leading-relaxed">
                We don't design in isolated labs. We test bag porosity, moisture retention, and tie ergonomics directly in operational groves across diverse seasonal climates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F2EFE6] text-xs text-[#728379]">
              Direct grower collaboration
            </div>
          </div>

          {/* Product Philosophy */}
          <div className="bg-white rounded-2xl p-7 border border-[#E7E5DC] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F0F7F2] text-[#2D6A4F] flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
                05. Product Philosophy
              </span>
              <h4 className="text-xl font-bold text-[#143826] font-display mt-2 mb-3">
                Simplicity Over Complexity
              </h4>
              <p className="text-sm text-[#52665B] leading-relaxed">
                A farming tool is only as good as its ease of adoption. Our bags slip on smoothly, tie firmly in seconds, and peel off cleanly at harvest.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F2EFE6] text-xs text-[#728379]">
              Zero unnecessary frills
            </div>
          </div>
        </div>

        {/* 6. Call To Action Banner */}
        <div className="relative rounded-3xl bg-[#143826] text-white p-8 sm:p-12 overflow-hidden shadow-lg">
          <div
            className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-[#F29C11]/15 rounded-full blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#F29C11] uppercase">
              Partner With Us
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display mt-2 mb-4 leading-tight">
              Ready to Upgrade Your Mango Harvest Quality?
            </h3>
            <p className="text-sm sm:text-base text-[#D0E2D7] leading-relaxed mb-6">
              Connect with our team to inquire about pack quantities, trial batches, or specific cultivar dimensions.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F29C11] hover:bg-[#E58E00] text-[#143826] font-bold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Place an Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 cursor-pointer"
              >
                <span>Speak to our Team</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
