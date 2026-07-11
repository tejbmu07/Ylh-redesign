'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { CORE_VALUES } from '@/lib/site-data.js';

export default function AboutPage() {
  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="ylh-container">

        {/* ── PAGE HERO ── */}
        <AnimatedSection variant="fadeUp" className="ylh-page-hero">
          <div className="ylh-page-hero-bg">
            <Image
              src="/design-assets/about-hero.jpg"
              alt="About Young Legal House"
              fill
              priority
            />
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="ylh-hero-label">About the Initiative</p>
            <WordReveal
              text="About Young Legal House"
              as="h1"
              className="ylh-page-title"
            />
            <p className="ylh-page-sub">
              Young Legal House is a pioneering initiative dedicated to empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development.
              Serving as a unified platform for aspiring legal professionals, we bridge the gap between academic pursuits and career advancement through access to internships, training programmes, competitions, events, mentorship, and diverse professional opportunities.
              Driven by a vision to cultivate an informed, connected, and progressive legal community, Young Legal House strives to nurture the next generation of legal minds by encouraging excellence, innovation, and meaningful engagement within the legal fraternity.
              Established in mid-2024, the initiative gained full operational momentum in December 2025 and has since continued to expand its presence and impact across the Indian legal landscape.
            </p>
          </div>
        </AnimatedSection>

        {/* ── FOUNDER'S VISION (single centered card) ── */}
        <AnimatedSection variant="fadeUp" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div
            className="ylh-card"
            style={{ textAlign: 'center' }}
            whileHover={{ y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
            transition={{ duration: 0.28 }}
          >
            <i className="fas fa-quote-left" style={{ fontSize: '1.5rem', color: 'var(--muted-text)', marginBottom: '16px' }}></i>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '16px' }}>The Founder&apos;s Vision</h3>
            <p style={{ fontStyle: 'italic', lineHeight: 1.7, color: 'var(--grey-text)', marginBottom: '16px' }}>
              &ldquo;We created Young Legal House because the journey from a law student to a top-tier practitioner shouldn&apos;t be a solo endeavor. This platform is designed to bridge the gap between theory and execution.&rdquo;
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '0.85rem' }}>— Achyuta R</p>
          </motion.div>
        </AnimatedSection>

        {/* ── CORE VALUES (5-across) ── */}
        <AnimatedSection variant="fadeUp">
          <StaggerGrid className="ylh-values-grid">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="ylh-value-card">
                <i className={`fas ${value.icon}`}></i>
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

        {/* ── CTA BAND ── */}
        <AnimatedSection variant="fadeUp">
          <div className="ylh-cta-bar">
            <div>
              <h3>Be Part of the Movement</h3>
              <p>Join law students across India building their careers through YLH.</p>
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/join" className="ylh-btn ylh-btn-primary">
                Join the Community →
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
