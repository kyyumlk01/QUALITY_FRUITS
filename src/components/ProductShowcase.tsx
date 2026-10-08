import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import showcaseImage from '../assets/images/mango_bag_showcase_1790960667083.jpg';
import { SHOWCASE_STEPS } from '../config/businessInfo';

interface ProductShowcaseProps {
  onOpenOrderModal: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenOrderModal }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="showcase" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#EAE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase mb-3">
            <span>Streamlined Orchard Workflow</span>
            <span aria-hidden="true" className="text-[#F29C11]">·</span>
            <span>Three Simple Actions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143826] font-display text-balance">
            Simple Protection. Better Results.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52665B] leading-relaxed">
            Implementing fruit protection doesn't complicate your harvest cycle. Our ergonomic bags are tailored for swift manual application by orchard staff in three effortless steps.
          </p>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Large Product Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#F5F3EC] p-2.5 sm:p-3.5 border border-[#E7E5DC] shadow-lg">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E2DFD2]">
                <img
                  src={showcaseImage}
                  alt="Mango Protection Bag being placed and secured around a growing green mango on a branch"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Subtle gradient scrim */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#143826]/50 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Step indicator overlay at bottom of image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-[#E7E5DC] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#143826] text-[#F29C11] font-bold text-sm flex items-center justify-center font-display">
                      {SHOWCASE_STEPS[activeStep].step}
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#143826]">
                        {SHOWCASE_STEPS[activeStep].title}
                      </div>
                      <div className="text-[11px] text-[#52665B]">
                        {SHOWCASE_STEPS[activeStep].tip}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#2D6A4F] hidden sm:inline">
                    Step {activeStep + 1} of 3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Numbered Steps */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="space-y-4">
              {SHOWCASE_STEPS.map((step, index) => {
                const isSelected = activeStep === index;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#FAF9F5] border-[#2D6A4F]/60 shadow-md translate-x-1'
                        : 'bg-[#FFFFFF] border-[#EAE8DD] hover:border-[#D0CDC2] hover:bg-[#FAF9F5]/50'
                    }`}
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      {/* Step visual demonstration thumbnail */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#E7E5DC] bg-[#EAE8DD] shadow-xs">
                        <img
                          src={step.image}
                          alt={step.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          loading="lazy"
                        />
                        <span
                          className={`absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[10px] font-bold font-display shadow-xs ${
                            isSelected
                              ? 'bg-[#143826] text-[#F29C11]'
                              : 'bg-black/75 text-white'
                          }`}
                        >
                          {step.step}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`text-base sm:text-lg font-bold font-display transition-colors ${
                              isSelected ? 'text-[#143826]' : 'text-[#2D3E35]'
                            }`}
                          >
                            {step.step} — {step.label}
                          </h3>

                          {isSelected && (
                            <span className="text-xs font-semibold text-[#2D6A4F] flex items-center gap-1 shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Active Step</span>
                            </span>
                          )}
                        </div>

                        <p className="mt-1.5 text-xs sm:text-sm text-[#52665B] leading-relaxed">
                          {step.description}
                        </p>

                        {isSelected && (
                          <div className="mt-2.5 pt-2.5 border-t border-[#EAE8DD] text-xs text-[#2D6A4F] font-medium">
                            Practical Tip: {step.tip}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-[#143826] hover:bg-[#1E4D35] active:scale-[0.98] transition-all duration-200 rounded-xl shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#143826]"
              >
                <span>Order Bags for Your Orchard</span>
                <ArrowRight className="w-4 h-4 text-[#F29C11]" />
              </button>

              <span className="text-xs text-[#6C7E74]">
                Direct farm supply • Packs tailored to orchard size
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
