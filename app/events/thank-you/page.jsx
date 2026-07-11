import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function EventThankYouPage({ searchParams }) {
  const participantName = searchParams?.name || 'Participant';

  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ maxWidth: '760px' }}>
        <div className="glass-card" style={{ textAlign: 'center', padding: '42px 26px' }}>
          <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#6ddf9f', marginBottom: '14px', display: 'block' }}></i>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
            Registration Successful
          </h1>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: '18px' }}>
            Thank you, <strong>{participantName}</strong>. Your registration for Lex Noctis has been received.
            Event details will be shared soon on your email and WhatsApp.
          </p>
          <p style={{ color: 'var(--muted-text)', marginBottom: '22px' }}>
            For support, contact: <strong>connect.ylh@gmail.com</strong>
          </p>
          <Link href="/events" className="glass-pill" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Back to Events Page
          </Link>
        </div>
      </main>
    </>
  );
}
