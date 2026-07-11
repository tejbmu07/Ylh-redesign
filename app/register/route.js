import crypto from 'crypto';

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE = 'Trivia Registrations';
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

async function createRazorpayOrder() {
  const auth = Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');
  const res = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: 15000, // ₹150 in paise
      currency: 'INR',
      receipt: `ylh_trivia_${Date.now()}`,
    }),
  });
  return res.json();
}

function verifyRazorpaySignature(orderId, paymentId, signature) {
  const body = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac('sha256', RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');
  return expectedSignature === signature;
}

async function saveToAirtable(data) {
  const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fields: {
        'Name': data.name,
        'Email': data.email,
        'Phone': data.phone,
        'College': data.college,
        'Year of Study': data.year,
        'City': data.city,
        'Payment ID': data.paymentId,
        'Registered At': new Date().toISOString(),
      }
    }),
  });
  return res.json();
}

async function sendConfirmationEmail(data) {
  // Email to registrant
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Young Legal House <onboarding@resend.dev>',
      to: data.email,
      subject: "You're registered for YLH Legal Trivia Challenge!",
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #1a1a1a; color: #ffffff;">
          <h1 style="font-size: 28px; margin-bottom: 8px;">Young Legal House</h1>
          <p style="color: #aaa; margin-bottom: 32px;">Registration Confirmation</p>
          
          <h2 style="font-size: 22px; margin-bottom: 16px;">You're In, ${data.name}! 🎉</h2>
          
          <p style="line-height: 1.8; color: #ddd; margin-bottom: 24px;">
            Your registration for the <strong>YLH Legal Trivia Challenge</strong> has been confirmed.
            We're excited to have you compete!
          </p>

          <div style="background: #2a2a2a; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="margin-bottom: 16px; font-size: 16px; color: #aaa; text-transform: uppercase; letter-spacing: 0.08em;">Registration Details</h3>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 8px 0;"><strong>College:</strong> ${data.college}</p>
            <p style="margin: 8px 0;"><strong>Payment ID:</strong> ${data.paymentId}</p>
            <p style="margin: 8px 0;"><strong>Amount Paid:</strong> ₹150</p>
            <p style="margin: 8px 0;"><strong>Event Date:</strong> 15th June 2026</p>
          </div>

          <p style="line-height: 1.8; color: #ddd; margin-bottom: 24px;">
            Further details about the event format, timing, and venue will be shared closer to the date.
            Stay tuned on our social media channels.
          </p>

          <div style="border-top: 1px solid #333; padding-top: 24px; color: #888; font-size: 14px;">
            <p>Young Legal House | connect.ylh@gmail.com</p>
            <p>Follow us: 
              <a href="https://www.instagram.com/younglegalhouse/" style="color: #aaa;">Instagram</a> | 
              <a href="https://www.linkedin.com/company/young-legal-house/" style="color: #aaa;">LinkedIn</a>
            </p>
          </div>
        </div>
      `,
    }),
  });

  // Notification email to YLH team
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'YLH Registrations <onboarding@resend.dev>',
      to: 'connect.ylh@gmail.com',
      subject: `New Registration: ${data.name} — YLH Trivia`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2>New Event Registration</h2>
          <p>A new participant has registered for the YLH Legal Trivia Challenge.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">Name</td><td style="padding: 10px;"><strong>${data.name}</strong></td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">Email</td><td style="padding: 10px;">${data.email}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">Phone</td><td style="padding: 10px;">${data.phone}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">College</td><td style="padding: 10px;">${data.college}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">Year</td><td style="padding: 10px;">${data.year}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">City</td><td style="padding: 10px;">${data.city}</td></tr>
            <tr style="border-bottom: 1px solid #eee;"><td style="padding: 10px; color: #666;">Payment ID</td><td style="padding: 10px;">${data.paymentId}</td></tr>
            <tr><td style="padding: 10px; color: #666;">Amount</td><td style="padding: 10px;">₹150</td></tr>
          </table>
        </div>
      `,
    }),
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.step === 'create_order') {
      const order = await createRazorpayOrder();
      if (order.id) {
        return Response.json({ orderId: order.id });
      } else {
        return Response.json({ error: 'Failed to create order' }, { status: 500 });
      }
    }

    if (body.step === 'verify_and_save') {
      const isValid = verifyRazorpaySignature(body.orderId, body.paymentId, body.signature);
      if (!isValid) {
        return Response.json({ error: 'Payment verification failed' }, { status: 400 });
      }

      await saveToAirtable(body);
      await sendConfirmationEmail(body);

      return Response.json({ success: true });
    }

    return Response.json({ error: 'Invalid step' }, { status: 400 });

  } catch (err) {
    console.error('Registration error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
