'use client';
import { useState } from 'react';
import { BARE_ACT_CATEGORIES, BARE_ACTS } from '@/lib/site-data';

export default function BareActsClient() {
  const [selectedAct, setSelectedAct] = useState(BARE_ACTS[0]);
  const [activeTab, setActiveTab] = useState('Bare Act');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');

  const filtered = BARE_ACTS.filter((act) => {
    const matchSearch = !searchQuery || act.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = activeCategory === 'All Categories' || act.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <h1 className="ylh-page-title">Indian Bare Acts Library</h1>
        <p className="ylh-page-sub">
          Access the most comprehensive collection of Indian bare acts with detailed notes to deepen your legal understanding.
        </p>
        <div className="ylh-page-hero-bg">
          <img src="/design-assets/law-books.jpg" alt="" />
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-filters">
          <div className="ylh-search" style={{ marginLeft: 0, flex: 1 }}>
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search acts, keywords, sections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="ylh-filter-pill"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            style={{ appearance: 'none', paddingRight: 24 }}
          >
            <option value="All Categories">All Categories</option>
            {BARE_ACT_CATEGORIES.map((c) => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
          <button type="button" className="ylh-filter-pill" onClick={() => { setSearchQuery(''); setActiveCategory('All Categories'); }}>
            <i className="fas fa-rotate-right" style={{ marginRight: 6 }} />Reset Filters
          </button>
        </div>
      </section>

      <section className="ylh-container ylh-bare-layout" style={{ paddingBottom: 64 }}>
        <aside>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 16 }}>Categories</h4>
          <div className="ylh-category-list">
            {BARE_ACT_CATEGORIES.map(({ name, count, icon }) => (
              <a
                key={name}
                href="#"
                className={activeCategory === name ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); setActiveCategory(name); }}
              >
                <span><i className={`fas ${icon}`} style={{ marginRight: 8, width: 16 }} />{name}</span>
                <span style={{ color: 'var(--muted-text)' }}>{count}</span>
              </a>
            ))}
          </div>
          <div className="ylh-card" style={{ marginTop: 24, padding: 16 }}>
            <p style={{ fontSize: '0.82rem', marginBottom: 8 }}>Can&apos;t find an Act?</p>
            <a href="/contact" style={{ fontSize: '0.82rem', color: 'var(--grey-text)' }}>Request Now &rarr;</a>
          </div>
        </aside>

        <div>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted-text)', marginBottom: 16 }}>
            Showing 1-{filtered.length} of 142 Acts
          </p>
          {filtered.map((act) => (
            <div
              key={act.id}
              className={`ylh-act-item${selectedAct?.id === act.id ? ' active' : ''}`}
              onClick={() => setSelectedAct(act)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedAct(act)}
              role="button"
              tabIndex={0}
            >
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <i className="fas fa-file-lines" style={{ color: 'var(--muted-text)' }} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{act.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted-text)' }}>{act.year} &middot; {act.category}</div>
                </div>
              </div>
              <button type="button" className="ylh-btn ylh-btn-outline ylh-btn-sm">View</button>
            </div>
          ))}
          <div className="ylh-pagination">
            <span className="active">1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>15</span>
            <button type="button">&rsaquo;</button>
          </div>
        </div>

        {selectedAct && (
          <aside className="ylh-act-preview">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}>{selectedAct.title}</h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <button type="button" aria-label="Bookmark" style={{ background: 'none', border: 'none', color: 'var(--muted-text)', cursor: 'pointer' }}>
                  <i className="fas fa-bookmark" />
                </button>
                <button type="button" aria-label="Download" style={{ background: 'none', border: 'none', color: 'var(--muted-text)', cursor: 'pointer' }}>
                  <i className="fas fa-download" />
                </button>
              </div>
            </div>

            <div className="ylh-tabs">
              {['Bare Act', 'Notes', 'Amendments', 'Related Acts'].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>Preamble</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--grey-text)', lineHeight: 1.7, fontStyle: 'italic' }}>
                {selectedAct.preamble}
              </p>
              <button type="button" className="ylh-btn ylh-btn-outline ylh-btn-sm" style={{ marginTop: 12 }}>
                View Full Act &rarr;
              </button>
            </div>

            <div style={{ marginBottom: 20 }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>About this Act</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted-text)', lineHeight: 1.7 }}>{selectedAct.about}</p>
            </div>

            <div>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>Key Features</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {selectedAct.features.map((f) => (
                  <li key={f} style={{ fontSize: '0.82rem', color: 'var(--muted-text)', marginBottom: 6, paddingLeft: 16, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>&bull;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </section>
    </main>
  );
}
