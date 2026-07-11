const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID =
  process.env.AIRTABLE_CONTACT_BASE_ID ||
  process.env.AIRTABLE_JOIN_BASE_ID ||
  process.env.AIRTABLE_BASE_ID;
const AIRTABLE_CONTACT_TABLE = process.env.AIRTABLE_CONTACT_TABLE || 'Contact Messages';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TEAM_NOTIFICATION_EMAIL = process.env.TEAM_NOTIFICATION_EMAIL || 'connect.ylh@gmail.com';

export const runtime = 'nodejs';

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

async function notifyTeamContact({ fullName, email, subject, message }) {
  if (!RESEND_API_KEY || !TEAM_NOTIFICATION_EMAIL) return;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'YLH Website <onboarding@resend.dev>',
      to: TEAM_NOTIFICATION_EMAIL,
      subject: `New Contact Message: ${subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data?.message || 'Failed to send team notification email.');
  }
}

export async function POST(request) {
  try {
    if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
      return Response.json(
        { error: 'Airtable is not configured on the server.' },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    const fullName = sanitize(formData.get('fullName'));
    const email = sanitize(formData.get('email'));
    const subject = sanitize(formData.get('subject'));
    const message = sanitize(formData.get('message'));

    if (!fullName || !email || !subject || !message) {
      return Response.json(
        { error: 'Please fill all required fields.' },
        { status: 400 }
      );
    }

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_CONTACT_TABLE)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Full Name': fullName,
            Email: email,
            Subject: subject,
            Message: message,
            'Submitted At': new Date().toISOString(),
          },
        }),
      }
    );

    const airtableData = await airtableRes.json();
    if (!airtableRes.ok) {
      return Response.json(
        { error: airtableData?.error?.message || 'Failed to save message.' },
        { status: 500 }
      );
    }

    await notifyTeamContact({ fullName, email, subject, message });

    return Response.json({ success: true, id: airtableData.id });
  } catch (err) {
    return Response.json(
      { error: err.message || 'Internal server error.' },
      { status: 500 }
    );
  }
}
