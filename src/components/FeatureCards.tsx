import React from 'react';
import { ShieldAlert, Sparkles, Sliders, CheckCircle } from 'lucide-react';
import { PRODUCT_FEATURES } from '../config/businessInfo';

const featureIcons = [
  ShieldAlert,  // 01 Fruit Protection
  Sparkles,     // 02 Better Appearance
  Sliders,      // 03 Easy Application
  CheckCircle,  // 04 Practical & Efficient
];

export const FeatureCards: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#EAE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase mb-3">
            <span>Essential Orchard Care</span>
            <span aria-hidden="true" className="text-[#F29C11]">·</span>
            <span>Preventive Shielding</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143826] font-display text-balance">
            Why Protect Your Mangoes?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52665B] leading-relaxed">
            From marble stage to full ripening, mangoes face threats from pests, weather, and mechanical bruising. A dedicated protection bag creates an unbreachable safeguard.
          </p>
        </div>

        {/* 4 Interactive Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_FEATURES.map((feature, idx) => {
            const IconComponent = featureIcons[idx] || ShieldAlert;
            return (
              <div
                key={feature.index}
                className="group relative bg-[#FFFFFF] rounded-2xl p-6 border border-[#E7E5DC] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#2D6A4F]/40 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Demonstration Image: Controlled 4:3 Aspect Ratio */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#EAE8DD] border border-[#E7E5DC]">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#143826] border border-[#E7E5DC] shadow-xs">
                      {feature.index}. {feature.tag}
                    </div>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#143826] font-display group-hover:text-[#2D6A4F] transition-colors">
                      {feature.title}
                    </h3>

                    <div className="w-8 h-8 rounded-lg bg-[#F0F7F2] text-[#2D6A4F] group-hover:bg-[#143826] group-hover:text-[#F29C11] transition-colors duration-300 flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Simple, Human-Friendly Description */}
                  <p className="text-sm text-[#52665B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Bottom Accent Indicator */}
                <div className="mt-6 pt-3.5 border-t border-[#F2EFE6] flex items-center justify-between text-xs text-[#6B7D73]">
                  <span>Field Proven</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E7E5DC] group-hover:bg-[#F29C11] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
