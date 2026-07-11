export const runtime = 'nodejs';

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || 'Trivia Registrations';
const AIRTABLE_PAYMENT_FIELD = process.env.AIRTABLE_PAYMENT_FIELD || 'Payment Screenshot';

const GOOGLE_FORM_ACTION =
  process.env.GOOGLE_FORM_ACTION_URL ||
  'https://docs.google.com/forms/d/e/1FAIpQLSfNDeoGfg-bUP0c4O3zkecXuaREQRQBoxeMYg30o5WyWqWJfQ/formResponse';

const GOOGLE_FIELDS = {
  fullName: process.env.GFORM_FULL_NAME || 'entry.1818635489',
  age: process.env.GFORM_AGE || 'entry.1931552775',
  personalEmail: process.env.GFORM_PERSONAL_EMAIL || 'entry.618420725',
  institution: process.env.GFORM_INSTITUTION || 'entry.1143022854',
  yearOfStudy: process.env.GFORM_YEAR_OF_STUDY || 'entry.483884660',
  institutionEmail: process.env.GFORM_INSTITUTIONAL_EMAIL || 'entry.1047815556',
  phone: process.env.GFORM_PHONE || 'entry.1369133423',
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'connect.ylh@gmail.com';

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function createAirtableRecord(fields) {
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || 'Failed to create Airtable record.');
  }
  return data;
}

async function uploadAttachment(recordId, file) {
  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString('base64');

  const res = await fetch(
    `https://content.airtable.com/v0/${AIRTABLE_BASE_ID}/${recordId}/${encodeURIComponent(AIRTABLE_PAYMENT_FIELD)}/uploadAttachment`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type || 'application/octet-stream',
        file: base64,
      }),
    }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.error?.message || 'Failed to upload payment screenshot.');
  }
  return data;
}

async function submitToGoogleForm(payload) {
  const body = new URLSearchParams({
    [GOOGLE_FIELDS.fullName]: payload.fullName,
    [GOOGLE_FIELDS.age]: payload.age,
    [GOOGLE_FIELDS.personalEmail]: payload.personalEmail,
    [GOOGLE_FIELDS.institution]: payload.institution,
    [GOOGLE_FIELDS.yearOfStudy]: payload.yearOfStudy,
    [GOOGLE_FIELDS.institutionEmail]: payload.institutionEmail || '',
    [GOOGLE_FIELDS.phone]: payload.phone,
  });

  const res = await fetch(GOOGLE_FORM_ACTION, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
    redirect: 'manual',
  });

  if (![200, 302].includes(res.status)) {
    throw new Error('Google Form backup submission failed.');
  }
}

async function sendConfirmationEmail(payload) {
  if (!RESEND_API_KEY) return;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;line-height:1.6">
      <h2 style="margin-bottom:8px">Registration Successful - Lex Noctis</h2>
      <p>Hi ${payload.fullName},</p>
      <p>Your registration for <strong>Lex Noctis - Legal Trivia</strong> has been successfully received.</p>
      <p>Event date: <strong>15 June 2026</strong><br/>Registration deadline: <strong>13 June 2026</strong></p>
      <p>Our team will share event details with you soon.</p>
      <p>Regards,<br/>Young Legal House</p>
    </div>
  `;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Young Legal House <${RESEND_FROM_EMAIL}>`,
      to: payload.personalEmail,
      subject: 'Registration Successful - Lex Noctis (Young Legal House)',
      html,
      reply_to: 'connect.ylh@gmail.com',
    }),
  });
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const payload = {
      fullName: sanitize(formData.get('fullName')),
      age: sanitize(formData.get('age')),
      personalEmail: sanitize(formData.get('personalEmail')),
      institution: sanitize(formData.get('institution')),
      yearOfStudy: sanitize(formData.get('yearOfStudy')),
      institutionEmail: sanitize(formData.get('institutionEmail')),
      phone: sanitize(formData.get('phone')),
    };
    const paymentScreenshot = formData.get('paymentScreenshot');

    if (!payload.fullName || !payload.age || !payload.personalEmail || !payload.institution || !payload.yearOfStudy || !payload.phone) {
      return Response.json({ error: 'Please fill all required fields.' }, { status: 400 });
    }
    if (!isEmail(payload.personalEmail)) {
      return Response.json({ error: 'Please enter a valid personal email.' }, { status: 400 });
    }
    if (payload.institutionEmail && !isEmail(payload.institutionEmail)) {
      return Response.json({ error: 'Please enter a valid institutional email.' }, { status: 400 });
    }
    if (!paymentScreenshot || typeof paymentScreenshot === 'string' || paymentScreenshot.size === 0) {
      return Response.json({ error: 'Payment screenshot is required.' }, { status: 400 });
    }
    if (paymentScreenshot.size > 8 * 1024 * 1024) {
      return Response.json({ error: 'Screenshot must be up to 8MB.' }, { status: 400 });
    }

    let airtableOk = false;
    let googleOk = false;
    let airtableErr = null;
    let googleErr = null;

    if (AIRTABLE_TOKEN && AIRTABLE_BASE_ID) {
      try {
        const record = await createAirtableRecord({
          'Full Name': payload.fullName,
          Age: payload.age,
          'Personal Email ID': payload.personalEmail,
          'Institution Email ID': payload.institutionEmail || '',
          'Name of Institution': payload.institution,
          'Year of Study': payload.yearOfStudy,
          Phone: payload.phone,
        });
        await uploadAttachment(record.id, paymentScreenshot);
        airtableOk = true;
      } catch (err) {
        airtableErr = err.message;
      }
    }

    try {
      await submitToGoogleForm(payload);
      googleOk = true;
    } catch (err) {
      googleErr = err.message;
    }

    if (!airtableOk && !googleOk) {
      return Response.json(
        { error: 'Registration could not be saved. Please try again.', details: { airtableErr, googleErr } },
        { status: 500 }
      );
    }

    try {
      await sendConfirmationEmail(payload);
    } catch (err) {
      console.error('Confirmation email failed:', err);
    }

    return Response.json({ success: true, airtableOk, googleOk });
  } catch (err) {
    console.error('Registration error:', err);
    return Response.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}
