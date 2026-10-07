import { Resend } from 'resend';
import { OrderFormData } from '../types';
import { sanitizeText } from './validation';

/**
 * Generates formatted HTML email body for new orders
 */
export function buildOrderEmailHtml(order: OrderFormData, orderTime: string): string {
  const safeName = sanitizeText(order.fullName);
  const safePhone = sanitizeText(order.mobileNumber);
  const safeAddress = sanitizeText(order.address);
  const safeMessage = order.message ? sanitizeText(order.message) : 'None provided';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Mango Protection Bag Order</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9f6; margin: 0; padding: 24px; color: #1c2d24; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e1e7e2; overflow: hidden; box-shadow: 0 4px 12px rgba(20, 56, 38, 0.05); }
    .header { background: #143826; color: #ffffff; padding: 28px 32px; }
    .header h1 { margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.02em; }
    .header p { margin: 0; font-size: 14px; color: #a4cbb4; }
    .content { padding: 32px; }
    .section-title { font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #143826; border-bottom: 2px solid #e2eae5; padding-bottom: 6px; margin: 24px 0 16px 0; }
    .section-title:first-of-type { margin-top: 0; }
    .data-row { display: flex; margin-bottom: 12px; font-size: 15px; }
    .data-label { width: 140px; font-weight: 600; color: #4b5e53; flex-shrink: 0; }
    .data-value { font-weight: 500; color: #1c2d24; word-break: break-word; }
    .highlight-box { background: #f0f7f2; border: 1px solid #c2e2cc; border-radius: 8px; padding: 16px; margin: 18px 0; }
    .footer { background: #f8faf8; padding: 20px 32px; font-size: 13px; color: #728379; text-align: center; border-top: 1px solid #e7eee9; }
    .badge { display: inline-block; background: #f2b705; color: #143826; font-weight: 700; font-size: 12px; padding: 4px 10px; border-radius: 999px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">QUALITY FRUITS</span>
      <h1 style="margin-top: 10px;">New Mango Protection Bag Order</h1>
      <p>Received on ${orderTime}</p>
    </div>
    <div class="content">
      <div class="section-title">Order Information</div>
      <div class="highlight-box">
        <div class="data-row">
          <div class="data-label">Product:</div>
          <div class="data-value"><strong>Mango Protection Bags</strong></div>
        </div>
        <div class="data-row" style="margin-bottom: 0;">
          <div class="data-label">Quantity:</div>
          <div class="data-value" style="font-size: 18px; color: #143826;"><strong>${order.quantity} units / bags</strong></div>
        </div>
      </div>

      <div class="section-title">Customer Information</div>
      <div class="data-row">
        <div class="data-label">Customer Name:</div>
        <div class="data-value">${safeName}</div>
      </div>
      <div class="data-row">
        <div class="data-label">Mobile / WhatsApp:</div>
        <div class="data-value"><a href="tel:${safePhone}" style="color: #143826; text-decoration: underline;">${safePhone}</a></div>
      </div>
      <div class="data-row">
        <div class="data-label">Delivery Address:</div>
        <div class="data-value">${safeAddress}</div>
      </div>
      ${order.message ? `
      <div class="data-row">
        <div class="data-label">Customer Note:</div>
        <div class="data-value" style="background: #fafafa; padding: 8px 12px; border-radius: 6px; font-style: italic;">${safeMessage}</div>
      </div>
      ` : ''}

      <div class="section-title">Recommended Next Steps</div>
      <p style="font-size: 14px; color: #4b5e53; line-height: 1.5; margin: 0;">
        1. Call or WhatsApp the customer at <strong>${safePhone}</strong> to confirm bag specifications & shipment timeline.<br>
        2. Verify stock availability and nearest logistics hub dispatch.<br>
        3. Confirm payment terms (Cash On Delivery / Bank Transfer / UPI).
      </p>
    </div>
    <div class="footer">
      This notification was generated automatically by the Quality Fruits Online Order Portal.
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Plain text version for fallback clients
 */
export function buildOrderEmailText(order: OrderFormData, orderTime: string): string {
  return `
NEW MANGO PROTECTION BAG ORDER
====================================

ORDER INFORMATION
-----------------
Product: Mango Protection Bags
Quantity: ${order.quantity} units
Received: ${orderTime}

CUSTOMER INFORMATION
--------------------
Name: ${order.fullName}
Mobile/Phone: ${order.mobileNumber}
Delivery Address: ${order.address}
Additional Message: ${order.message || 'None provided'}

====================================
Quality Fruits Automated Notification
`;
}

/**
 * Dispatches the order email using Resend, or logs simulated receipt
 */
export async function sendOrderNotificationEmail(order: OrderFormData): Promise<{
  success: boolean;
  mode: 'live' | 'preview_simulation';
  id?: string;
  error?: string;
}> {
  const apiKey = process.env.RESEND_API_KEY;
  const receiverEmail = process.env.ORDER_RECEIVER_EMAIL;
  const orderTime = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  });

  // If Resend API key or Receiver email is not provided, provide a graceful development simulation
  if (!apiKey || apiKey === 'your_resend_api_key' || apiKey === 'MY_RESEND_API_KEY' || !receiverEmail) {
    console.log('\n[SIMULATED ORDER EMAIL DISPATCH]');
    console.log(`[Target Receiver]: ${receiverEmail || '(Set ORDER_RECEIVER_EMAIL in .env.local)'}`);
    console.log(`[Order Summary]: ${order.quantity} Mango Bags for ${order.fullName} (${order.mobileNumber})`);
    console.log(`[Address]: ${order.address}`);
    console.log(`[Notice]: Configure RESEND_API_KEY and ORDER_RECEIVER_EMAIL in .env.local to send live emails via Resend.\n`);

    return {
      success: true,
      mode: 'preview_simulation',
      id: `sim_${Date.now()}`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Quality Fruits Orders <onboarding@resend.dev>',
      to: [receiverEmail],
      subject: `New Mango Bag Order: ${order.quantity} units - ${order.fullName}`,
      html: buildOrderEmailHtml(order, orderTime),
      text: buildOrderEmailText(order, orderTime),
    });

    if (error) {
      console.error('[Resend Email Error]:', error);
      return {
        success: false,
        mode: 'live',
        error: error.message,
      };
    }

    return {
      success: true,
      mode: 'live',
      id: data?.id,
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error sending email';
    console.error('[Email Dispatch Exception]:', message);
    return {
      success: false,
      mode: 'live',
      error: message,
    };
  }
}
