import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';
import { ContactFormData } from '../types';
import { validateContactForm } from '../lib/validation';

/**
 * ============================================================================
 * CONTACT SECTION (EDITABLE BUSINESS DETAILS)
 * ============================================================================
 * NOTE: The contact details shown below (Phone, Email, Address, Business Hours)
 * are populated directly from `src/config/businessInfo.ts`.
 * To update them with your actual business information, edit that file!
 */
export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message.');
      }

      setSubmittedSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setApiError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-[#EAE8DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#2D6A4F] uppercase mb-3">
            <span>Direct Orchard Support</span>
            <span aria-hidden="true" className="text-[#F29C11]">·</span>
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#143826] font-display text-balance">
            Contact {BUSINESS_CONFIG.companyName}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#52665B] leading-relaxed">
            Have questions regarding bag sizes, large commercial grove requirements, or sample trials? Our support team is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#E7E5DC] flex items-start gap-4 transition-all hover:border-[#2D6A4F]/40">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] text-[#2D6A4F] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#6B7D73] uppercase tracking-wider">
                  Call & WhatsApp
                </span>
                {/* Note: Change phone number in src/config/businessInfo.ts */}
                <h4 className="text-base font-bold text-[#143826] mt-0.5">
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phone}`}
                    className="hover:underline hover:text-[#2D6A4F]"
                  >
                    {BUSINESS_CONFIG.contact.phoneFormatted}
                  </a>
                </h4>
                <p className="text-xs text-[#52665B] mt-1">
                  Direct phone helpline for farm inquiries and logistics.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#E7E5DC] flex items-start gap-4 transition-all hover:border-[#2D6A4F]/40">
              <div className="w-12 h-12 rounded-xl bg-[#FFF8E7] text-[#D97706] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#6B7D73] uppercase tracking-wider">
                  Email Desk
                </span>
                {/* Note: Change email in src/config/businessInfo.ts */}
                <h4 className="text-base font-bold text-[#143826] mt-0.5">
                  <a
                    href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                    className="hover:underline hover:text-[#2D6A4F]"
                  >
                    {BUSINESS_CONFIG.contact.email}
                  </a>
                </h4>
                <p className="text-xs text-[#52665B] mt-1">
                  Send purchase orders, quotes, and institutional queries.
                </p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#E7E5DC] flex items-start gap-4 transition-all hover:border-[#2D6A4F]/40">
              <div className="w-12 h-12 rounded-xl bg-[#EAF5EF] text-[#2D6A4F] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#6B7D73] uppercase tracking-wider">
                  Facility & Dispatch
                </span>
                {/* Note: Change address in src/config/businessInfo.ts */}
                <h4 className="text-base font-bold text-[#143826] mt-0.5">
                  {BUSINESS_CONFIG.contact.address}, {BUSINESS_CONFIG.contact.city}, {BUSINESS_CONFIG.contact.state}, {BUSINESS_CONFIG.contact.country}
                </h4>
                <p className="text-xs text-[#52665B] mt-1">
                  Centrally located for rapid logistics across agricultural belts.
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#FAF9F5] rounded-2xl p-6 border border-[#E7E5DC] flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F0F7F2] text-[#2D6A4F] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#6B7D73] uppercase tracking-wider">
                  Working Hours
                </span>
                {/* Note: Change hours in src/config/businessInfo.ts */}
                <h4 className="text-base font-bold text-[#143826] mt-0.5">
                  {BUSINESS_CONFIG.contact.workingHours}
                </h4>
                <p className="text-xs text-[#52665B] mt-1">
                  Sunday closed (Emergencies handled via WhatsApp).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F5] rounded-3xl p-8 sm:p-10 border border-[#E7E5DC] shadow-sm">
              <h3 className="text-2xl font-bold text-[#143826] font-display mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-[#52665B] mb-8">
                Fill in the details below and an agricultural specialist will respond within 24 hours.
              </p>

              {submittedSuccess ? (
                <div className="bg-[#EAF5EF] border border-[#2D6A4F]/40 rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#2D6A4F] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#143826]">Message Delivered</h4>
                  <p className="text-sm text-[#4B5E53] max-w-md mx-auto">
                    Thank you for reaching out. We have logged your message and will contact you via email or phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedSuccess(false)}
                    className="mt-4 px-5 py-2 text-xs font-semibold text-[#143826] bg-white border border-[#DCD9CE] rounded-lg hover:bg-[#F2EFE6] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {apiError && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <span>{apiError}</span>
                    </div>
                  )}

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Patel"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                        errors.name ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. grower@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                          errors.email ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 7017685484"
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                          errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#143826] uppercase tracking-wider mb-2">
                      Message / Orchard Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please mention your location, orchard variety, tree count, or any specific questions..."
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#1C2D24] focus:outline-none focus:ring-2 focus:ring-[#143826] transition-colors ${
                        errors.message ? 'border-red-400 focus:ring-red-400' : 'border-[#DCD9CE]'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#143826] hover:bg-[#1E4D35] text-white font-semibold text-sm transition-all shadow-md active:scale-[0.99] cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#F29C11]" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
