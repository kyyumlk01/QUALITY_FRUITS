import React, { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenOrderModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenOrderModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after passing the initial hero fold
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 animate-in slide-in-from-bottom duration-300">
      <div className="bg-[#143826]/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-xl border border-white/15 flex items-center justify-between gap-3">
        <div className="truncate">
          <div className="text-xs font-bold text-white truncate">Mango Protection Bags</div>
          <div className="text-[11px] text-[#A4CBB4]">Shield your fruit harvest</div>
        </div>

        <button
          onClick={onOpenOrderModal}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-[#F29C11] text-[#143826] font-bold text-xs rounded-xl shadow-sm hover:bg-[#E58E00] active:scale-95 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
};
