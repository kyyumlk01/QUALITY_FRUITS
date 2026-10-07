import React from 'react';
import { ShieldCheck, Sparkles, Feather, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '../assets/images/hero_mango_bag_1790960654326.jpg';

interface HeroProps {
  onOpenOrderModal: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onLearnMore }) => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#F5F3EC]/80 via-[#FAF9F5] to-[#FAF9F5]"
    >
      {/* Subtle organic ambient gradients */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-br from-[#40916C]/10 via-[#F29C11]/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Clean unboxed category label with typographic mark */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#2D6A4F] uppercase mb-4">
              <span>Agricultural Innovation</span>
              <span aria-hidden="true" className="text-[#F29C11]">/</span>
              <span>Crop Defense</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#143826] font-display leading-[1.12] text-balance">
              Protect Every Mango. <br />
              <span className="text-[#2D6A4F]">Grow Better.</span> Harvest Better.
            </h1>

            {/* Supporting Subhead */}
            <p className="mt-5 text-lg sm:text-xl text-[#4B5E53] leading-relaxed max-w-xl">
              Smart protection for healthier, cleaner and better-quality mangoes. Engineered for orchard resilience against pests, sunburn, and blemishes.
            </p>

            {/* Key Value Points (Clean unboxed inline layout) */}
            <div className="mt-6 flex flex-wrap gap-y-2 gap-x-6 text-sm text-[#384A41] font-medium">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                Breathable micro-weave
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                Pest & sunburn defense
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F]" />
                Easy fruit tie
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-[#143826] hover:bg-[#1E4D35] active:scale-[0.98] transition-all duration-200 rounded-xl shadow-md hover:shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#143826]"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 text-[#F29C11]" />
              </button>

              <button
                onClick={onLearnMore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#143826] bg-[#FFFFFF] hover:bg-[#F3EFE6] border border-[#DCD9CE] active:scale-[0.98] transition-all duration-200 rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#143826]"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Farmer Advisory Micro-note */}
            <p className="mt-5 text-xs text-[#6C7E74]">
              Ideal for Alphonso, Kesar, Dasheri, Chaunsa, Langra, and all commercial cultivars.
            </p>
          </div>

          {/* Right Column: Premium Product Presentation */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-xl mx-auto rounded-3xl overflow-hidden bg-white/60 p-2 sm:p-3 shadow-xl border border-[#E7E5DC]">
              {/* Product Hero Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#EAE8DE]">
                <img
                  src={heroImage}
                  alt="Mango Protection Bag applied on a fresh growing mango in orchard"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Gentle gradient vignette overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#143826]/40 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Floating Highlight 1: Fruit Protection (Top Left) */}
              <div className="absolute top-6 left-5 sm:-left-3 bg-white/95 backdrop-blur-md border border-[#E7E5DC] text-[#143826] px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2.5 animate-subtle-float">
                <div className="p-1.5 rounded-lg bg-[#EAF5EF] text-[#2D6A4F]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Fruit Protection</div>
                  <div className="text-[11px] text-[#5C7064] leading-tight">Blocks fruit flies & birds</div>
                </div>
              </div>

              {/* Floating Highlight 2: Better Quality (Bottom Left) */}
              <div className="absolute bottom-6 left-5 sm:-left-4 bg-white/95 backdrop-blur-md border border-[#E7E5DC] text-[#143826] px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2.5 animate-subtle-float-slow">
                <div className="p-1.5 rounded-lg bg-[#FFF8E7] text-[#D97706]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Better Quality</div>
                  <div className="text-[11px] text-[#5C7064] leading-tight">Clean, blemish-free skin</div>
                </div>
              </div>

              {/* Floating Highlight 3: Easy to Use (Top Right) */}
              <div className="absolute top-8 right-5 sm:-right-3 bg-white/95 backdrop-blur-md border border-[#E7E5DC] text-[#143826] px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2.5 animate-subtle-float">
                <div className="p-1.5 rounded-lg bg-[#EAF5EF] text-[#2D6A4F]">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">Easy to Use</div>
                  <div className="text-[11px] text-[#5C7064] leading-tight">Ergonomic soft-fastener</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
