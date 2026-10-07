import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, CheckCircle, ShieldCheck, Phone, AlertCircle, ShoppingBag } from 'lucide-react';
import { OrderFormData, OrderResponse } from '../types';
import { validateOrderForm } from '../lib/validation';
import { BUSINESS_CONFIG } from '../config/businessInfo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    mobileNumber: '',
    address: '',
    quantity: 100,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<OrderResponse | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleQuantityAdjust = (delta: number) => {
    setFormData((prev) => {
      const nextQty = Math.max(10, (prev.quantity || 0) + delta);
      return { ...prev, quantity: nextQty };
    });
    if (errors.quantity) {
      setErrors((prev) => ({ ...prev, quantity: undefined }));
    }
  };

  const handleQuantityPreset = (amount: number) => {
    setFormData((prev) => ({ ...prev, quantity: amount }));
    if (errors.quantity) {
      setErrors((prev) => ({ ...prev, quantity: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const validation = validateOrderForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: OrderResponse = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit order request.');
      }

      setSubmittedOrder(data);
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error
          ? err.message
          : 'Unable to submit your order right now. Please call or WhatsApp us directly.';
      setServerError(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmittedOrder(null);
    setServerError(null);
    setFormData({
      fullName: '',
      mobileNumber: '',
      address: '',
      quantity: 100,
      message: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 md:p-6"
    >
      <div
        className="relative w-full h-full sm:h-auto sm:max-w-2xl bg-[#FAF9F5] sm:rounded-3xl shadow-2xl border-0 sm:border border-[#E7E5DC] overflow-hidden flex flex-col max-h-[100vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#143826] text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] text-[#F29C11] flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 id="order-modal-title" className="text-xl font-bold font-display text-white">
                Place Your Order
              </h2>
              <p className="text-xs text-[#A4CBB4]">
                Direct supply from {BUSINESS_CONFIG.companyName}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close Order Form"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* SUCCESS STATE */}
          {submittedOrder ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#EAF5EF] border border-[#2D6A4F]/30 text-[#2D6A4F] flex items-center justify-center mx-auto shadow-sm animate-in zoom-in-75 duration-300">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#143826] font-display">
                  Order Request Sent!
                </h3>
                <p className="text-sm sm:text-base text-[#52665B] mt-2 max-w-md mx-auto">
                  Thank you. We have received your order request and will contact you shortly to confirm delivery and dispatch schedule.
                </p>
              </div>

              {/* Confirmation Checklist */}
              <div className="bg-white rounded-2xl p-6 border border-[#E7E5DC] text-left max-w-md mx-auto space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-[#143826]">Order received</span>
                    <p className="text-xs text-[#6B7D73]">Logged under Order ID: {submittedOrder.orderId}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-[#143826]">Customer details submitted</span>
                    <p className="text-xs text-[#6B7D73]">{formData.fullName} • {formData.mobileNumber}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-[#143826]">We will contact you soon</span>
                    <p className="text-xs text-[#6B7D73]">An orchard logistics executive will reach out via call/WhatsApp.</p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#143826] hover:bg-[#1E4D35] text-white font-semibold rounded-xl text-sm transition-all shadow-md cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* ORDER FORM */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {serverError && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold">{serverError}</p>
                    <p className="mt-1 text-xs">
                      You can also call us directly at{' '}
                      <a href={`tel:${BUSINESS_CONFIG.contact.phone}`} className="underline font-bold">
                        {BUSINESS_CONFIG.contact.phoneFormatted}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* 1. Full Name */}
              <div>
                <label htmlFor="order-fullName" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="order-fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleTextChange}
                  placeholder="e.g. Vikram Sharma"
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                    errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>}
              </div>

              {/* 2. Mobile Number */}
              <div>
                <label htmlFor="order-mobileNumber" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                  Mobile Number (WhatsApp Preferred) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="order-mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleTextChange}
                  placeholder="e.g. 7017685484"
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                    errors.mobileNumber ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                  }`}
                />
                {errors.mobileNumber && <p className="mt-1 text-xs text-red-600">{errors.mobileNumber}</p>}
              </div>

              {/* 3. Address */}
              <div>
                <label htmlFor="order-address" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                  Delivery Address & Orchard Location <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="order-address"
                  name="address"
                  rows={2}
                  value={formData.address}
                  onChange={handleTextChange}
                  placeholder="Village / Farm Name, Post, Tehsil, District, State, Postal PIN"
                  className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                    errors.address ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                  }`}
                />
                {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
              </div>

              {/* 4. Quantity with + and - controls */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="order-quantity" className="block text-xs font-bold text-[#143826] uppercase tracking-wider">
                    Quantity (Bags) <span className="text-red-500">*</span>
                  </label>
                  <span className="text-xs text-[#52665B]">Minimum 10 units</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleQuantityAdjust(-50)}
                    className="w-12 h-12 rounded-xl bg-white border border-[#DCD9CE] hover:bg-[#F2EFE6] text-[#143826] flex items-center justify-center font-bold text-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143826]"
                    aria-label="Decrease quantity by 50"
                  >
                    <Minus className="w-5 h-5" />
                  </button>

                  <input
                    type="number"
                    id="order-quantity"
                    name="quantity"
                    min={1}
                    value={formData.quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setFormData((prev) => ({ ...prev, quantity: isNaN(val) ? 0 : val }));
                    }}
                    className="w-full text-center py-3 px-4 rounded-xl border border-[#DCD9CE] bg-white font-bold text-lg text-[#143826] tabular-nums focus:outline-none focus:ring-2 focus:ring-[#143826]"
                  />

                  <button
                    type="button"
                    onClick={() => handleQuantityAdjust(50)}
                    className="w-12 h-12 rounded-xl bg-white border border-[#DCD9CE] hover:bg-[#F2EFE6] text-[#143826] flex items-center justify-center font-bold text-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#143826]"
                    aria-label="Increase quantity by 50"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {/* Quick Presets */}
                <div className="flex items-center gap-2 mt-2.5">
                  <span className="text-xs text-[#6C7E74]">Quick Select:</span>
                  {[100, 250, 500, 1000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleQuantityPreset(preset)}
                      className={`text-xs px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                        formData.quantity === preset
                          ? 'bg-[#143826] text-white border-[#143826]'
                          : 'bg-white text-[#4B5E53] border-[#E0DED3] hover:bg-[#F2EFE6]'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                {errors.quantity && <p className="mt-1 text-xs text-red-600">{errors.quantity}</p>}
              </div>

              {/* 5. Additional Message (Optional) */}
              <div>
                <label htmlFor="order-message" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                  Additional Message / Variety Name <span className="text-xs font-normal text-[#6C7E74]">(Optional)</span>
                </label>
                <textarea
                  id="order-message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleTextChange}
                  placeholder="e.g. Require bags for Kesar mango trees, expected bagging date in 2 weeks..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DCD9CE] bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826]"
                />
              </div>

              {/* Clean Summary Section */}
              <div className="bg-white rounded-2xl p-5 border border-[#E7E5DC]">
                <h4 className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider mb-3">
                  Order Summary
                </h4>
                <div className="flex items-center justify-between text-sm py-1 border-b border-[#F2EFE6]">
                  <span className="text-[#52665B]">Product:</span>
                  <span className="font-bold text-[#143826]">Mango Protection Bags</span>
                </div>
                <div className="flex items-center justify-between text-sm pt-2">
                  <span className="text-[#52665B]">Total Quantity:</span>
                  <span className="font-bold text-lg text-[#143826] tabular-nums">
                    {formData.quantity || 0} units
                  </span>
                </div>
              </div>

              {/* Send Order Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-[#143826] hover:bg-[#1E4D35] text-white font-bold text-base transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing your order...</span>
                ) : (
                  <>
                    <span>Send Order</span>
                    <span className="text-xs text-[#F29C11] font-normal">
                      (No upfront online payment required)
                    </span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[#728379]">
                Our representative will call you to confirm bag specifications and shipping rate before dispatch.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
