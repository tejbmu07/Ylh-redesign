// NOT CURRENTLY ROUTED — reference/draft only. Live route is app/events/page.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { UPCOMING_EVENTS, PAST_EVENTS, EVENT_STATS } from '@/lib/site-data';

const EVENT_FILTERS = ['All Events', 'Upcoming Events', 'Past Events', 'Competitions', 'Webinars', 'Workshops', 'Talks'];

export default function EventsClient() {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main>
      <section className="ylh-page-hero ylh-container">
        <p className="ylh-hero-label">Events That Inspire, Discussions That Drive Change</p>
        <h1 className="ylh-page-title">YLH Events</h1>
        <p className="ylh-page-sub">
          YLH events bring India&apos;s legal minds together to learn, compete, and grow.
        </p>
        <div className="ylh-hero-actions" style={{ marginTop: 24 }}>
          <Link href="#upcoming" className="ylh-btn ylh-btn-primary">Explore Events &rarr;</Link>
          <Link href="#past" className="ylh-btn ylh-btn-outline">View Past Events &rarr;</Link>
        </div>
        <div className="ylh-page-hero-bg">
          <img src="/design-assets/hero-courthouse.jpg" alt="" />
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-stats-bar" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {EVENT_STATS.map(({ icon, value, label }) => (
            <div key={label} className="ylh-stat">
              <i className={`fas ${icon}`} />
              <div className="ylh-stat-value">{value}</div>
              <div className="ylh-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-filters">
          {EVENT_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`ylh-filter-pill${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
          <div className="ylh-search">
            <i className="fas fa-search" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="ylh-container" id="upcoming" style={{ paddingBottom: 48 }}>
        <div className="ylh-col-header">
          <div>
            <p className="ylh-section-label">Upcoming Events</p>
            <h2 className="ylh-section-title">What&apos;s Coming Up</h2>
          </div>
          <Link href="/events">View all events &rarr;</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {UPCOMING_EVENTS.filter((e) =>
            !searchQuery || e.title.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((event) => (
            <Link key={event.id} href="/events/register" className="ylh-card" style={{ textDecoration: 'none', color: 'inherit', padding: 0, overflow: 'hidden' }}>
              <img src={event.image} alt="" style={{ width: '100%', height: 140, objectFit: 'cover', filter: 'grayscale(80%)' }} />
              <div style={{ padding: 20 }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                  <div className="ylh-event-date">
                    <div className="day">{event.date.split(' ')[0]}</div>
                    <div className="month">{event.date.split(' ')[1]}</div>
                  </div>
                  <div>
                    <div className="ylh-event-tag">{event.category}</div>
                    <div className="ylh-event-title">{event.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--ylh-gray-500)', lineHeight: 1.6, marginBottom: 12 }}>{event.desc}</p>
                <div style={{ fontSize: '0.78rem', color: 'var(--ylh-gray-500)' }}>{event.location}</div>
                <div style={{ marginTop: 12, fontSize: '0.82rem' }}>View Details &rarr;</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ylh-container" id="past" style={{ paddingBottom: 48 }}>
        <div className="ylh-col-header">
          <div>
            <p className="ylh-section-label">Past Events</p>
            <h2 className="ylh-section-title">From Our Legacy</h2>
          </div>
          <Link href="/events">View past events &rarr;</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {PAST_EVENTS.map((event) => (
            <div key={event.title} className="ylh-card" style={{ padding: 0, overflow: 'hidden' }}>
              <img src={event.image} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', filter: 'grayscale(80%)' }} />
              <div style={{ padding: 16 }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 4 }}>{event.title}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--ylh-gray-500)' }}>{event.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ylh-container">
        <div className="ylh-newsletter-bar">
          <div>
            <h3><i className="fas fa-envelope" style={{ marginRight: 8 }} />Stay Updated</h3>
            <p>Never miss an event. Subscribe to get notified about upcoming competitions and workshops.</p>
          </div>
          <form className="ylh-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="ylh-btn ylh-btn-primary ylh-btn-sm">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
