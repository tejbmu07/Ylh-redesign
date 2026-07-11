import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';

export default function EventRegisterPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ maxWidth: '860px', paddingTop: '24px' }}>
        <section className="glass-card" style={{ textAlign: 'center', padding: '54px 32px' }}>
          <p style={{
            color: 'var(--grey-text)',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            Lex Noctis
          </p>
          <h1 className="form-title">Registration Closed</h1>
          <p style={{ color: 'var(--grey-text)', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 28px' }}>
            Registrations for Lex Noctis closed on 13 June 2026, and the event has now concluded. You can still view the event archive, brochure, poster, and recap materials.
          </p>
          <Link href="/events" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
            View Past Event
          </Link>
        </section>
      </main>
    </>
  );
}
