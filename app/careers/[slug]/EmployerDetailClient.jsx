'use client';
import Link from 'next/link';
import { EMPLOYERS } from '@/lib/site-data';

export default function EmployerDetailClient({ employer }) {
  if (!employer) {
    return (
      <main className="ylh-container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h1>Employer not found</h1>
        <Link href="/careers" className="ylh-btn ylh-btn-outline" style={{ marginTop: 24, display: 'inline-flex' }}>
          Back to Careers
        </Link>
      </main>
    );
  }

  const practiceAreas = ['Corporate & M&A', 'Banking & Finance', 'Dispute Resolution', 'Taxation', 'Real Estate', 'Employment Law'];
  const team = [
    { name: 'Sanjay Kapur', title: 'Managing Partner', area: 'Corporate & M&A' },
    { name: 'Anu Tayi', title: 'Partner', area: 'Banking & Finance' },
    { name: 'Rahul Desai', title: 'Partner', area: 'Dispute Resolution' },
  ];

  return (
    <main>
      <section className="ylh-container" style={{ padding: '32px 0 24px' }}>
        <div className="ylh-breadcrumb">
          <Link href="/careers">Careers</Link> &gt; {employer.type} &gt; {employer.name}
        </div>
      </section>

      <section className="ylh-container" style={{ paddingBottom: 48 }}>
        <div className="ylh-card" style={{ display: 'grid', gridTemplateColumns: '100px 1fr auto', gap: 24, alignItems: 'center', marginBottom: 32 }}>
          <div className="ylh-employer-logo" style={{ width: 100, height: 100 }}>{employer.name.split(' ').slice(0, 2).join(' ')}</div>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: 8 }}>{employer.name}</h1>
            <div style={{ marginBottom: 12 }}>
              <span className="ylh-tier-tag">{employer.tier}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--muted-text)' }}>{employer.type} &middot; {employer.location}</span>
            </div>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.7, fontSize: '0.9rem' }}>{employer.desc}</p>
          </div>
          <a href={employer.website} target="_blank" rel="noopener noreferrer" className="ylh-btn ylh-btn-primary ylh-btn-sm">
            Visit Official Website <i className="fas fa-external-link-alt" style={{ marginLeft: 6 }} />
          </a>
        </div>

        <div className="ylh-tabs">
          {['Overview', 'Practice Areas', 'Team', 'Locations', 'Awards & Recognitions', 'Careers'].map((tab, i) => (
            <button key={tab} type="button" className={i === 0 ? 'active' : ''}>{tab}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32 }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 16 }}>About {employer.name}</h2>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: 32 }}>
              {employer.name} is one of India&apos;s leading full-service law firms, providing comprehensive legal services across corporate, banking, dispute resolution, and regulatory matters. With offices across major cities, the firm serves domestic and international clients across diverse sectors.
            </p>

            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 16 }}>Practice Areas</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {practiceAreas.map((area) => (
                <span key={area} className="ylh-filter-pill" style={{ cursor: 'default' }}>{area}</span>
              ))}
            </div>

            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 16 }}>Key Team Members</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {team.map((member) => (
                <div key={member.name} className="ylh-card" style={{ padding: 16, textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--panel-bg)', margin: '0 auto 12px' }} />
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{member.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>{member.title}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', marginTop: 4 }}>{member.area}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="ylh-card" style={{ height: 'fit-content' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 16 }}>Quick Info</h4>
            {[
              ['Founded', employer.founded],
              ['Headquarters', employer.location],
              ['Firm Type', 'Full-Service Law Firm'],
              ['Website', employer.website],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted-text)', marginBottom: 2 }}>{label}</div>
                <div style={{ fontSize: '0.85rem' }}>
                  {label === 'Website' ? (
                    <a href={value} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{value.replace('https://', '')}</a>
                  ) : value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
