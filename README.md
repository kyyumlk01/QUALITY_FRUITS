# Quality Fruits – Mango Protection Bags

A modern, product-focused website for **Mango Protection Bags** by **Quality Fruits**. Built with responsive layout, interactive features, farm-friendly design, order form validation, and server-side email notifications via **Resend**.

---

## 📁 Project Structure

```text
├── .env.example               # Template for environment variables (Resend API key, receiver email)
├── .env.local                 # Local environment secrets (ignored by git)
├── index.html                 # Main HTML entry with SEO, OpenGraph, JSON-LD schema & Google Fonts
├── metadata.json              # Applet identity and capabilities
├── package.json               # Dependencies and runner scripts
├── server.ts                  # Full-stack Express server with Vite middlewares & API routes
│
├── app/                       # Next.js App Router compatible files
│   └── api/
│       └── order/
│           └── route.ts       # Next.js App Router POST /api/order endpoint
│
├── src/
│   ├── main.tsx               # React DOM entry point
│   ├── App.tsx                # Master landing page layout & section manager
│   ├── index.css              # Tailwind CSS v4 setup, typography & animation rules
│   │
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for orders, forms, and business config
│   │
│   ├── config/
│   │   └── businessInfo.ts    # ⭐ CENTRAL FILE TO EDIT ALL BUSINESS & CONTACT INFO ⭐
│   │
│   ├── lib/
│   │   ├── validation.ts      # Field validation and input sanitization
│   │   └── email.ts           # Resend email templates & server-side dispatch logic
│   │
│   ├── assets/
│   │   └── images/            # High-resolution generated product & orchard assets
│   │
│   └── components/
│       ├── Navbar.tsx         # Sticky 3-zone navbar with frosted glass scroll effect
│       ├── Hero.tsx           # Product hero with floating callouts and primary CTA
│       ├── FeatureCards.tsx   # "Why Protect Your Mangoes?" interactive feature grid
│       ├── ProductShowcase.tsx# "Simple Protection. Better Results." 3-step guide
│       ├── ProductJourney.tsx # "From Growing to Harvest" interactive lifecycle timeline
│       ├── TrustHighlights.tsx# Farmer-friendly highlights (no fake statistics)
│       ├── AboutSection.tsx   # About Us, purpose, ethos, and product philosophy
│       ├── ContactSection.tsx # Contact info cards & validated message form
│       ├── OrderModal.tsx     # Order modal (+/- counter, validation, summary & success)
│       ├── MobileStickyBar.tsx# Sticky bottom quick-order bar for mobile screens
│       └── Footer.tsx         # Brand footer with navigation, contact & social links
```

---

## 📧 How to Set Up Resend for Order Emails

The system sends customer order details directly to the business owner's email whenever someone places an order.

### Step 1: Create a Resend Account
1. Visit [https://resend.com](https://resend.com).
2. Sign up for a free account (Resend provides 3,000 free emails per month).

### Step 2: Get Your API Key
1. In your Resend Dashboard, navigate to **API Keys** on the left menu.
2. Click **Create API Key**.
3. Name your key (e.g., `Quality Fruits Website`).
4. Set permission to **Full access** or **Sending access**.
5. Copy the generated key (it looks like `re_123456789...`).

### Step 3: Configure Environment Variables
Create a file named `.env.local` in the project root:

```bash
# .env.local
RESEND_API_KEY="re_your_actual_resend_api_key_here"
ORDER_RECEIVER_EMAIL="your_real_email@example.com"
```

> **Note**: `.env.local` is already listed in `.gitignore` so your secrets will never be exposed publicly.

### Step 4: Changing the Receiver Email
To change which email address receives incoming orders, simply update the `ORDER_RECEIVER_EMAIL` variable in `.env.local`:
```bash
ORDER_RECEIVER_EMAIL="orders@yourmangoorchard.com"
```

---

## 💻 Local Testing & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### 3. Testing the Order System Locally
1. Click **Order Now** anywhere on the website.
2. Fill in:
   - Full Name
   - Mobile Number (minimum 8-10 digits)
   - Delivery Address
   - Quantity (+ / - controls or quick presets)
   - Optional Message
3. Click **Send Order**.
4. **When `RESEND_API_KEY` is set**: A real email will arrive in your `ORDER_RECEIVER_EMAIL` inbox.
5. **When testing without API keys**: The server logs the simulated order to the console and provides an order ID without crashing, allowing full UI/UX verification!

---

## 🚀 How to Deploy to Vercel

### Option A: Direct Git Deployment (Recommended)
1. Push this repository to GitHub or GitLab.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your repository.
4. In the **Environment Variables** section, add:
   - `RESEND_API_KEY`: Your Resend API key
   - `ORDER_RECEIVER_EMAIL`: The recipient business email
5. Click **Deploy**.

The project contains both:
- `server.ts` for Express/Node hosting (Railway, Cloud Run, Render, VPS)
- `app/api/order/route.ts` for native Next.js / Vercel Serverless hosting.

---

## ✏️ Files to Edit Later When Providing Real Business Details

When you are ready to replace placeholder content with your real company information, edit the following files:

| Details to Change | Target File | What to Update |
| :--- | :--- | :--- |
| **Phone, Email, Address, WhatsApp** | `src/config/businessInfo.ts` | Update `contact.phone`, `contact.email`, `contact.address`, and `contact.whatsappNumber` |
| **Social Media Links** | `src/config/businessInfo.ts` | Update `socialLinks.instagram`, `socialLinks.facebook`, and `socialLinks.whatsapp` |
| **Company Name & Tagline** | `src/config/businessInfo.ts` | Update `companyName`, `tagline`, and `subtagline` |
| **About Us Story & History** | `src/components/AboutSection.tsx` | Replace placeholder text for Brand, Purpose, Why We Exist, and Approach |
| **Product Specifications / Pack sizes**| `src/config/businessInfo.ts` | Update `product.defaultPackSize` or add custom sizing options |
| **Notification Email Design** | `src/lib/email.ts` | Customize the HTML/Text layout of emails delivered to your inbox |
