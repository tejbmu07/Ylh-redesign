const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_JOIN_BASE_ID || process.env.AIRTABLE_BASE_ID;
const AIRTABLE_JOIN_TABLE = process.env.AIRTABLE_JOIN_TABLE || 'Join Applications';
const AIRTABLE_CV_FIELD = process.env.AIRTABLE_CV_FIELD || 'CV';
export const runtime = 'nodejs';

function sanitize(value) {
  return typeof value === 'string' ? value.trim() : '';
}

async function createAirtableRecord(fields) {
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_JOIN_TABLE)}`,
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

async function uploadCvAttachment(recordId, file) {
  const bytes = await file.arrayBuffer();
  const base64 = Buffer.from(bytes).toString('base64');

  const res = await fetch(
    `https://content.airtable.com/v0/${AIRTABLE_BASE_ID}/${recordId}/${encodeURIComponent(AIRTABLE_CV_FIELD)}/uploadAttachment`,
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
    throw new Error(data?.error?.message || 'Failed to upload CV attachment to Airtable.');
  }
  return data;
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
    const phone = sanitize(formData.get('phone'));
    const linkedinUrl = sanitize(formData.get('linkedinUrl'));
    const position = sanitize(formData.get('position'));
    const cvFile = formData.get('cvFile');

    if (!fullName || !email || !phone || !linkedinUrl || !position) {
      return Response.json({ error: 'Please fill all required fields.' }, { status: 400 });
    }

    if (!cvFile || typeof cvFile === 'string' || cvFile.size === 0) {
      return Response.json({ error: 'Please upload your CV.' }, { status: 400 });
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      return Response.json({ error: 'CV file must be up to 5MB.' }, { status: 400 });
    }

    const record = await createAirtableRecord({
      'Full Name': fullName,
      Email: email,
      Phone: phone,
      'LinkedIn URL': linkedinUrl,
      'Position Applying For': position,
      'Submitted At': new Date().toISOString(),
    });

    await uploadCvAttachment(record.id, cvFile);

    return Response.json({ success: true, id: record.id });
  } catch (err) {
    console.error('Join form submission error:', err);
    return Response.json(
      { error: err.message || 'Failed to submit application.' },
      { status: 500 }
    );
  }
}
