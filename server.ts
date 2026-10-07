import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { validateOrderForm, validateContactForm } from './src/lib/validation.ts';
import { sendOrderNotificationEmail } from './src/lib/email.ts';

// Load environment variables (.env and .env.local if present)
dotenv.config();
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      service: 'Quality Fruits Order API',
      resendConfigured: Boolean(process.env.RESEND_API_KEY && process.env.ORDER_RECEIVER_EMAIL),
    });
  });

  // Order Submission API
  app.post('/api/order', async (req: Request, res: Response) => {
    try {
      const { fullName, mobileNumber, address, quantity, message } = req.body;

      const validation = validateOrderForm({
        fullName,
        mobileNumber,
        address,
        quantity: Number(quantity),
        message,
      });

      if (!validation.isValid) {
        return res.status(400).json({
          success: false,
          message: 'Please correct the highlighted errors in your order form.',
          errors: validation.errors,
        });
      }

      const orderData = {
        fullName: fullName.trim(),
        mobileNumber: mobileNumber.trim(),
        address: address.trim(),
        quantity: Number(quantity),
        message: message ? message.trim() : undefined,
      };

      const emailResult = await sendOrderNotificationEmail(orderData);

      if (!emailResult.success) {
        // Return friendly message without leaking internal trace
        return res.status(500).json({
          success: false,
          message: 'Unable to deliver order notification at this moment. Please try again or reach out to us directly via WhatsApp/Phone.',
          error: emailResult.error,
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Order received successfully! Our representative will get in touch with you shortly.',
        mode: emailResult.mode,
        orderId: emailResult.id || `ORD-${Date.now().toString().slice(-6)}`,
      });
    } catch (error: unknown) {
      console.error('[API Order Error]:', error);
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred while processing your order request.',
      });
    }
  });

  // Contact Form Submission API
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const { name, email, phone, message } = req.body;
      const validation = validateContactForm({ name, email, phone, message });

      if (!validation.isValid) {
        return res.status(400).json({
          success: false,
          message: 'Please review the contact form fields.',
          errors: validation.errors,
        });
      }

      console.log(`\n[NEW INQUIRY RECEIVED]: From ${name} (${email}, ${phone}): "${message}"\n`);

      return res.status(200).json({
        success: true,
        message: 'Thank you for reaching out! We have received your inquiry and will reply promptly.',
      });
    } catch (error: unknown) {
      console.error('[API Contact Error]:', error);
      return res.status(500).json({
        success: false,
        message: 'An unexpected error occurred while submitting your message.',
      });
    }
  });

  // Vite middleware in dev or static files in production
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🥭 Quality Fruits Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
