import { OrderFormData, ContactFormData } from '../types';

export interface ValidationResult<T> {
  isValid: boolean;
  errors: Partial<Record<keyof T, string>>;
}

/**
 * Validates Order Form Submission
 */
export function validateOrderForm(data: Partial<OrderFormData>): ValidationResult<OrderFormData> {
  const errors: Partial<Record<keyof OrderFormData, string>> = {};

  // Full Name
  if (!data.fullName || data.fullName.trim().length === 0) {
    errors.fullName = 'Please enter your full name.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters long.';
  }

  // Mobile Number
  // Allows formats: +91 7017685484, 7017685484, +1 555-123-4567, 8-15 digits
  const cleanPhone = (data.mobileNumber || '').replace(/[\s\-\(\)\+]/g, '');
  if (!data.mobileNumber || data.mobileNumber.trim().length === 0) {
    errors.mobileNumber = 'Please provide your mobile or WhatsApp contact number.';
  } else if (cleanPhone.length < 8 || cleanPhone.length > 15 || !/^\d+$/.test(cleanPhone)) {
    errors.mobileNumber = 'Please enter a valid phone number (minimum 8-10 digits).';
  }

  // Delivery Address
  if (!data.address || data.address.trim().length === 0) {
    errors.address = 'Please specify your delivery address or nearest orchard location.';
  } else if (data.address.trim().length < 6) {
    errors.address = 'Please provide a more complete address (village/city, district, pin/postal code).';
  }

  // Quantity
  if (data.quantity === undefined || data.quantity === null || isNaN(Number(data.quantity))) {
    errors.quantity = 'Please enter the required number of bags.';
  } else if (Number(data.quantity) < 1) {
    errors.quantity = 'Quantity must be at least 1 bag.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates Contact Form Submission
 */
export function validateContactForm(data: Partial<ContactFormData>): ValidationResult<ContactFormData> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  const cleanPhone = (data.phone || '').replace(/[\s\-\(\)\+]/g, '');
  if (!data.phone || cleanPhone.length < 8) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please provide a message with at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Basic HTML/Text sanitization helper
 */
export function sanitizeText(input: string = ''): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}
