import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, CheckCheck } from 'lucide-react';
import { TRUST_HIGHLIGHTS } from '../config/businessInfo';

const highlightIcons = [
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  CheckCheck,
];

export const TrustHighlights: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#EAE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase mb-3">
            <span>Built for Orchard Realities</span>
            <span aria-hidden="true" className="text-[#F29C11]">·</span>
            <span>Farmer First</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143826] font-display text-balance">
            Practical Design. Trusted In The Field.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52665B] leading-relaxed">
            Every feature of our protection bags stems from real feedback in mango-growing regions. Simplicity and durability take precedence over complex gadgets.
          </p>
        </div>

        {/* 4 Large Visual Highlight Blocks (Stat-style without fake percentages) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_HIGHLIGHTS.map((item, idx) => {
            const IconComp = highlightIcons[idx] || Sparkles;

            return (
              <div
                key={item.title}
                className="relative bg-[#FAF9F5] rounded-2xl p-6 border border-[#E7E5DC] transition-all duration-300 hover:border-[#2D6A4F]/50 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Highlight Visual Image: Demonstrating the value */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-[#EAE8DD] border border-[#E7E5DC]">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#143826] border border-[#E7E5DC] shadow-xs">
                      {item.badge}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF5EF] text-[#2D6A4F] flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-[#143826] font-display">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#52665B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-[#EAE8DD] flex items-center gap-2 text-xs text-[#728379]">
                  <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
                  <span>Field Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
