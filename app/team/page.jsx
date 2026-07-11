'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { TEAM_MEMBERS } from '@/lib/site-data.js';

export default function TeamPage() {
  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="ylh-container">

        {/* ── PAGE HERO ── */}
        <AnimatedSection variant="fadeUp" className="ylh-page-hero">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="ylh-hero-label">Meet the Team</p>
            <WordReveal
              text="The People Behind YLH"
              as="h1"
              className="ylh-page-title"
            />
            <p className="ylh-page-sub">
              The dedicated individuals driving Young Legal House forward.
            </p>
          </div>
        </AnimatedSection>

        {/* ── TEAM GRID (3-across) ── */}
        <AnimatedSection variant="fadeUp">
          <StaggerGrid className="ylh-team-grid">
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                className="ylh-team-card"
                whileHover={{ y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
                transition={{ duration: 0.28 }}
              >
                <div style={{ position: 'relative', height: '320px' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={member.imageStyle || { objectFit: 'cover' }}
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
              </motion.div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

        {/* ── COMMUNITY CALLOUT ── */}
        <AnimatedSection variant="fadeUp" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <motion.div
            className="ylh-card"
            whileHover={{ y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
            transition={{ duration: 0.28 }}
          >
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '12px' }}>And a Growing Community...</h3>
            <p style={{ color: 'var(--grey-text)', lineHeight: 1.7 }}>
              Behind the scenes, we have an incredible team of 10+ dedicated members, interns,
              and contributors who are working tirelessly to build, manage, and better this
              community every single day.
            </p>
          </motion.div>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
