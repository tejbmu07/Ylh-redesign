'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { VIEW } from '@/lib/motion';
import { INSTAGRAM_INSIGHTS, MOCK_BLOGS, UPCOMING_EVENTS, HOME_FEATURES } from '@/lib/site-data.js';

// Temporary thumbnail mapping for blogs (until Sanity migration)
const BLOG_THUMBNAILS = {
  'fundamental-rights-india': '/design-assets/law-books.jpg',
  'data-privacy-laws': '/design-assets/emblem-scales.jpg',
  'corporate-governance': '/design-assets/hero-courthouse.jpg',
  'criminal-law-reform': '/design-assets/lady-justice.jpg',
};

const INSIGHT_IMAGES = [
  '/design-assets/home-insight-01.jpg',
  '/design-assets/home-insight-02.jpg',
  '/design-assets/home-insight-03.jpg',
  '/design-assets/home-insight-04.jpg',
];

export default function HomeClient() {
  return (
    <>
      <AnimatedNetworkBackground />

      <PageWrapper className="ylh-container">

        {/* ── HERO ── */}
        <AnimatedSection variant="fadeUp" className="ylh-hero">
          <div className="ylh-hero-grid">
            <div>
              <p className="ylh-hero-label">India&apos;s Elite Law Network</p>
              <WordReveal
                text="Young Legal House"
                as="h1"
                className="ylh-hero-title"
              />
              <p className="ylh-hero-sub">
                Bridging legal education, competitions, research, and opportunity.
              </p>
              <div className="ylh-hero-actions">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/join" className="ylh-btn ylh-btn-primary">
                    Join the Community
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/blogs" className="ylh-btn ylh-btn-outline">
                    Explore Insights
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="ylh-hero-image">
              <Image
                src="/design-assets/home-hero.jpg"
                alt="Young Legal House"
                fill
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ── PULL-QUOTE BANNER ── */}
        <AnimatedSection variant="fadeUp" className="ylh-quote">
          <div className="ylh-quote-mark">"</div>
          <p className="ylh-quote-text">
            Where law students evolve into legal professionals.
          </p>
          <p className="ylh-quote-author">— YLH</p>
        </AnimatedSection>

        {/* ── THREE COLUMN SECTION ── */}
        <AnimatedSection variant="fadeUp" className="ylh-three-col">
          {/* Latest Legal Insights */}
          <div>
            <div className="ylh-col-header">
              <h3>Latest Legal Insights</h3>
            </div>
            <StaggerGrid className="ylh-insight-grid">
              {INSTAGRAM_INSIGHTS.map((insight, index) => (
                <Link key={index} href="/blogs" className="ylh-insight-card">
                  <Image
                    src={INSIGHT_IMAGES[index] || insight.image}
                    alt={insight.title}
                    fill
                  />
                  <span>{insight.title}</span>
                </Link>
              ))}
            </StaggerGrid>
          </div>

          {/* Recent Blogs */}
          <div>
            <div className="ylh-col-header">
              <h3>Recent Blogs</h3>
              <Link href="/blogs">View all blogs →</Link>
            </div>
            <StaggerGrid>
              {MOCK_BLOGS.slice(0, 4).map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="ylh-list-item">
                  <Image
                    src={BLOG_THUMBNAILS[blog.slug] || '/design-assets/law-books.jpg'}
                    alt={blog.title}
                    width={56}
                    height={56}
                    className="ylh-list-thumb"
                  />
                  <div>
                    <div className="ylh-list-meta">{blog.category} · {blog.readTime}</div>
                    <div className="ylh-list-title">{blog.title}</div>
                  </div>
                </Link>
              ))}
            </StaggerGrid>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="ylh-col-header">
              <h3>Upcoming Events</h3>
              <Link href="/events">See All Events →</Link>
            </div>
            <StaggerGrid>
              {UPCOMING_EVENTS.map((event) => (
                <Link key={event.id} href="/events" className="ylh-event-card">
                  <div className="ylh-event-date">
                    <div className="day">{event.date.split(' ')[0]}</div>
                    <div className="month">{event.date.split(' ')[1]}</div>
                  </div>
                  <div>
                    <div className="ylh-event-tag">{event.category}</div>
                    <div className="ylh-event-title">{event.title}</div>
                    <div className="ylh-event-loc">{event.location}</div>
                  </div>
                </Link>
              ))}
            </StaggerGrid>
          </div>
        </AnimatedSection>

        {/* ── ABOUT YLH TEASER ── */}
        <AnimatedSection variant="fadeUp" className="ylh-about-split">
          <div>
            <h2>About Young Legal House</h2>
            <p>
              Young Legal House is a pioneering initiative dedicated to empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development.
            </p>
            <p>
              Serving as a unified platform for aspiring legal professionals, we bridge the gap between academic pursuits and career advancement through access to internships, training programmes, competitions, events, mentorship, and diverse professional opportunities.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/about" className="ylh-btn ylh-btn-outline">
                Know More About Us →
              </Link>
            </motion.div>
          </div>
          <StaggerGrid className="ylh-feature-grid">
            {HOME_FEATURES.map((feature) => (
              <div key={feature.title} className="ylh-feature-box">
                <i className={`fas ${feature.icon}`}></i>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
