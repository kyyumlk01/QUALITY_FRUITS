import React, { useState } from 'react';
import { Sprout, Sun, Shield, Award, ArrowRight } from 'lucide-react';
import growthImg from '../assets/images/mango_growth_cycle_1790960688790.jpg';
import harvestImg from '../assets/images/mango_orchard_harvest_1790960676969.jpg';
import { JOURNEY_STAGES } from '../config/businessInfo';

const stageIcons = [Sprout, Sun, Shield, Award];

export const ProductJourney: React.FC = () => {
  const [activeStage, setActiveStage] = useState(2); // Default to Protected stage

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F5] border-t border-[#EAE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase mb-3">
            <span>Orchard Life Cycle</span>
            <span aria-hidden="true" className="text-[#F29C11]">·</span>
            <span>Step-By-Step Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143826] font-display text-balance">
            From Growing to Harvest
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52665B] leading-relaxed">
            Follow the journey of a premium mango through each developmental phase. Timely bagging transforms potential orchard loss into first-grade market yield.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Flow */}
        <div className="relative mb-14">
          {/* Connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#E2DFD4] -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {JOURNEY_STAGES.map((stage, idx) => {
              const IconComp = stageIcons[idx] || Sprout;
              const isSelected = activeStage === idx;

              return (
                <div
                  key={stage.stage}
                  onClick={() => setActiveStage(idx)}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#2D6A4F] shadow-lg -translate-y-1'
                      : 'bg-white/80 border-[#E7E5DC] hover:border-[#2D6A4F]/40 hover:bg-white'
                  }`}
                >
                  <div>
                    {/* Stage Visual Image: Controlled 4:3 Aspect Ratio */}
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#EAE8DD] border border-[#E7E5DC]">
                      <img
                        src={stage.image}
                        alt={stage.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-[#143826]/90 text-[#F29C11] backdrop-blur-xs">
                        {stage.stage}
                      </div>
                    </div>

                    {/* Top indicator & icon */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#143826] font-display">
                        {stage.title}
                      </h3>

                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                          isSelected
                            ? 'bg-[#143826] text-[#F29C11]'
                            : 'bg-[#F0F7F2] text-[#2D6A4F] group-hover:bg-[#143826] group-hover:text-[#F29C11]'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-[#8B6B17] mb-2">
                      {stage.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#52665B] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F2EFE6] flex items-center justify-between text-xs text-[#6B7D73]">
                    <span>Orchard Stage {idx + 1}</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#F29C11]' : 'bg-[#E7E5DC]'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Comparison Card: Growth vs Pristine Harvest */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E5DC] shadow-sm">
          {/* Card 1: Tree Growth Canopy */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E2DFD2] border border-[#EAE8DD]">
              <img
                src={growthImg}
                alt="Flourishing sunlit mango tree orchard canopy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-[#143826] border border-[#E7E5DC]">
                Phase 1 & 2: Orchard Growth
              </div>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#143826]">
                Natural Canopy Development
              </h4>
              <p className="text-xs text-[#52665B] mt-1">
                Healthy branches support young fruits as they initiate seasonal growth, preparing for bagging intervention.
              </p>
            </div>
          </div>

          {/* Card 2: Pristine Harvest Output */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E2DFD2] border border-[#EAE8DD]">
              <img
                src={harvestImg}
                alt="Wooden crate filled with spotless golden harvest mangoes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-[#143826] text-[#F29C11] px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
                Phase 3 & 4: Protected Yield
              </div>
            </div>
            <div>
              <h4 className="text-base font-bold text-[#143826]">
                Spotless, High-Grade Harvest
              </h4>
              <p className="text-xs text-[#52665B] mt-1">
                Fruits harvested from protected sleeves retain natural bloom, uniform color, and zero insect puncture marks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
