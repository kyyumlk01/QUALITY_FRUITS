export interface OrderFormData {
  fullName: string;
  mobileNumber: string;
  address: string;
  quantity: number;
  message?: string;
}

export interface OrderResponse {
  success: boolean;
  message: string;
  orderId?: string;
  mode?: 'live' | 'preview_simulation';
  error?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  error?: string;
}

export interface BusinessConfig {
  companyName: string;
  tagline: string;
  subtagline: string;
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    address: string;
    city: string;
    state: string;
    country: string;
    workingHours: string;
    whatsappNumber: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    whatsapp: string;
  };
  product: {
    name: string;
    category: string;
    defaultPackSize: number;
    priceGuide: string;
  };
}
