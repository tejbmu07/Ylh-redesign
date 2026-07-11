'use client';
import { useState } from 'react';
import Link from 'next/link';
import { EMPLOYERS } from '@/lib/site-data';

const TYPES = ['Law Firms', 'Legal Consultancies', 'MNCs', 'Corporate Companies'];
const TIERS = ['Tier I', 'Tier II', 'Tier III'];

export default function CareersClient() {
  const [activeType, setActiveType] = useState('Law Firms');
  const [activeTier, setActiveTier] = useState('Tier I');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = EMPLOYERS.filter((e) => {
    const matchTier = e.tier === activeTier;
    const matchSearch = !searchQuery || e.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchTier && matchSearch;
  });

  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <h1 className="ylh-page-title">Explore Top Legal Employers across India</h1>
        <p className="ylh-page-sub">
          Discover opportunities at leading law firms, legal consultancies, MNCs, and corporate companies.
        </p>
        <div className="ylh-page-hero-bg">
          <img src="/design-assets/lady-justice.jpg" alt="" />
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-filters">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              className={`ylh-filter-pill${activeType === t ? ' active' : ''}`}
              onClick={() => setActiveType(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="ylh-filters" style={{ borderBottom: 'none', paddingTop: 0 }}>
          {TIERS.map((t) => (
            <button
              key={t}
              type="button"
              className={`ylh-filter-pill${activeTier === t ? ' active' : ''}`}
              onClick={() => setActiveTier(t)}
            >
              {t}
            </button>
          ))}
          <div className="ylh-search">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="ylh-container" style={{ paddingBottom: 48 }}>
        {filtered.map((employer) => (
          <Link key={employer.slug} href={`/careers/${employer.slug}`} className="ylh-employer-card">
            <div className="ylh-employer-logo">{employer.name.split(' ').slice(0, 2).join(' ')}</div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 6 }}>{employer.name}</h3>
              <div style={{ marginBottom: 8 }}>
                <span className="ylh-tier-tag">{employer.tier}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>{employer.type} &middot; {employer.location}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted-text)', lineHeight: 1.6 }}>{employer.desc}</p>
            </div>
            <span className="ylh-btn ylh-btn-outline ylh-btn-sm">View Details &rarr;</span>
          </Link>
        ))}

        <div className="ylh-pagination">
          <button type="button">&lsaquo;</button>
          {[1, 2, 3].map((n) => (
            <span key={n} className={n === 1 ? 'active' : ''}>{n}</span>
          ))}
          <span>...</span>
          <span>10</span>
          <button type="button">&rsaquo;</button>
        </div>
      </section>
    </main>
  );
}
