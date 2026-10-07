import { Resend } from 'resend';

// Next.js App Router API Route for processing mango bag orders
// Uses Web Standard Request/Response supported natively by Next.js 13+ App Router
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, mobileNumber, address, quantity, message } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return Response.json(
        { success: false, message: 'Please enter a valid full name.' },
        { status: 400 }
      );
    }

    const cleanPhone = (mobileNumber || '').replace(/[\s\-\(\)\+]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      return Response.json(
        { success: false, message: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    if (!address || typeof address !== 'string' || address.trim().length < 6) {
      return Response.json(
        { success: false, message: 'Please enter a delivery address.' },
        { status: 400 }
      );
    }

    const parsedQty = Number(quantity);
    if (isNaN(parsedQty) || parsedQty < 1) {
      return Response.json(
        { success: false, message: 'Quantity must be at least 1 unit.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.ORDER_RECEIVER_EMAIL;
    const orderTime = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Kolkata',
    });

    // Development fallback if keys not yet configured
    if (!apiKey || apiKey === 'your_resend_api_key' || !receiverEmail) {
      console.log('[Next.js Order Dev Simulation]:', {
        fullName,
        mobileNumber,
        address,
        quantity: parsedQty,
        message,
        orderTime,
      });

      return Response.json({
        success: true,
        message: 'Order received successfully! Our representative will contact you shortly.',
        orderId: `ORD-${Date.now().toString().slice(-6)}`,
        mode: 'preview_simulation',
      });
    }

    const resend = new Resend(apiKey);
    const emailResponse = await resend.emails.send({
      from: 'Quality Fruits <onboarding@resend.dev>',
      to: [receiverEmail],
      subject: `New Order: ${parsedQty} Mango Protection Bags from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1c2d24;">
          <h2 style="color: #143826;">NEW MANGO PROTECTION BAG ORDER</h2>
          <hr style="border: 0; border-top: 1px solid #ddd;" />
          <h3 style="color: #40916c;">Order Details</h3>
          <p><strong>Product:</strong> Mango Protection Bags</p>
          <p><strong>Quantity:</strong> ${parsedQty} units</p>
          <p><strong>Order Time:</strong> ${orderTime}</p>
          <h3 style="color: #40916c;">Customer Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${mobileNumber}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Customer Note:</strong> ${message || 'None'}</p>
        </div>
      `,
    });

    if (emailResponse.error) {
      return Response.json(
        { success: false, message: 'Failed to send notification email.' },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: 'Order received successfully! Our representative will contact you shortly.',
      orderId: emailResponse.data?.id,
      mode: 'live',
    });
  } catch (error: unknown) {
    console.error('API Order Route Error:', error);
    return Response.json(
      { success: false, message: 'An unexpected server error occurred.' },
      { status: 500 }
    );
  }
}
