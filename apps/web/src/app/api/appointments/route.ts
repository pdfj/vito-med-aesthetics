import sql from '@/app/api/utils/sql';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = (body.fullName ?? '').trim();
    const email = (body.email ?? '').trim();
    const phone = (body.phone ?? '').trim();
    const service = (body.service ?? '').trim() || null;
    const preferredDate = (body.preferredDate ?? '').trim() || null;
    const preferredTime = (body.preferredTime ?? '').trim() || null;
    const message = (body.message ?? '').trim() || null;

    if (!fullName || !email || !phone) {
      return Response.json(
        { error: 'Please provide your name, email and phone number.' },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const rows = await sql`
      INSERT INTO appointment_requests
        (full_name, email, phone, service, preferred_date, preferred_time, message)
      VALUES
        (${fullName}, ${email}, ${phone}, ${service}, ${preferredDate}, ${preferredTime}, ${message})
      RETURNING id, created_at
    `;

    return Response.json({ success: true, id: rows[0].id }, { status: 201 });
  } catch (error) {
    console.error('Failed to create appointment request', error);
    return Response.json(
      { error: 'Something went wrong. Please try again or WhatsApp us directly.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = await sql`
      SELECT id, full_name, email, phone, service, preferred_date, preferred_time, message, status, created_at
      FROM appointment_requests
      ORDER BY created_at DESC
      LIMIT 100
    `;
    return Response.json({ appointments: rows });
  } catch (error) {
    console.error('Failed to list appointment requests', error);
    return Response.json({ error: 'Failed to load appointments.' }, { status: 500 });
  }
}
