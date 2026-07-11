'use client';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';

export default function AboutPage() {
  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="page-spacing">

        <AnimatedSection variant="fadeUp" as="section" className="container text-center-section">
          <WordReveal
            text="About The Intiative"
            as="h1"
            className="page-title"
            style={{ textAlign: 'center' }}
          />
          {/*
            NOTE: the original className here was "about the intiative-text" (with spaces),
            which does not match the ".about-text" rule defined in globals.css — so the
            paragraph style was never actually being applied in production. Preserved as-is
            below to avoid silently changing visual behavior; swap in "about-text" if you'd
            like the intended styling (color: var(--grey-text) etc.) to take effect.
          */}
          <motion.p
            className="about the intiative-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            Young Legal House is a pioneering initiative dedicated to empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development.
            Serving as a unified platform for aspiring legal professionals, we bridge the gap between academic pursuits and career advancement through access to internships, training programmes, competitions, events, mentorship, and diverse professional opportunities.
            Driven by a vision to cultivate an informed, connected, and progressive legal community, Young Legal House strives to nurture the next generation of legal minds by encouraging excellence, innovation, and meaningful engagement within the legal fraternity.
            Established in mid-2024, the initiative gained full operational momentum in December 2025 and has since continued to expand its presence and impact across the Indian legal landscape.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1} as="section" className="container">
          <StaggerGrid className="cards-grid" stagger={0.16} delay={0.05}>
            <motion.div
              className="glass-card message-card"
              whileHover={{ y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.28 }}
            >
              <h3 className="card-role">The Founder&apos;s Vision</h3>
              <p className="message-quote">
                &ldquo;We created Young Legal House because the journey from a law student to a
                top-tier practitioner shouldn&apos;t be a solo endeavor. This platform is designed
                to bridge the gap between theory and execution.&rdquo;
              </p>
              <span className="card-author">- Achyuta R</span>
            </motion.div>

            <motion.div
              className="glass-card message-card"
              whileHover={{ y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.28 }}
            >
              <h3 className="card-role">The Architect&apos;s Blueprint</h3>
              <p className="message-quote">
                &ldquo;Technology should elevate the legal profession, not complicate it.
                I built this ecosystem to be seamless, futuristic, and focused entirely on
                connecting our community without friction.&rdquo;
              </p>
              <span className="card-author">- Tej Talin</span>
            </motion.div>
          </StaggerGrid>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
