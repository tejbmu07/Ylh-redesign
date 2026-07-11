'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import StaggerGrid from '@/components/StaggerGrid';
import WordReveal from '@/components/WordReveal';
import { VIEW } from '@/lib/motion';

const LAW_AREAS = [
  'Corporate Law', 'Tax', 'TMT', 'Litigation', 'M&A',
  'ADR', 'IPR', 'Constitutional', 'Criminal Law', 'International Law',
];

const OFFER_CARDS = [
  {
    icon: 'fa-newspaper',
    title: 'Curated Legal Insights',
    text: 'Peer-written articles covering Corporate Law, Tax, TMT, Litigation, ADR, IPR, and more written by students, for students.',
  },
  {
    icon: 'fa-gavel',
    title: 'Competitions & Events',
    text: 'National moot courts, trivia challenges, workshops, and flagship events designed to sharpen your legal skills.',
  },
  {
    icon: 'fa-users',
    title: 'Expert Community',
    text: 'Connect with peers, researchers, and practitioners across India. A serious network built for the next generation of lawyers.',
  },
];

export default function HomeClient() {
  return (
    <>
      <AnimatedNetworkBackground />

      <PageWrapper className="page-spacing container" style={{ paddingBottom: '100px' }}>

        {/* ── HERO — exact original copy, animated entrance ── */}
        <motion.section
          style={{ textAlign: 'center', maxWidth: '820px', margin: '24px auto 52px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } } }}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            style={{
              fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--grey-text)', marginBottom: '18px',
            }}
          >
            India&apos;s Legal Student Community
          </motion.p>

          <WordReveal
            text="Young Legal House"
            as="h1"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.04,
              marginBottom: '20px',
              color: 'var(--text-color)',
              textAlign: 'center',
            }}
          />

          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            style={{
              color: 'var(--grey-text)',
              fontSize: 'clamp(0.97rem, 2vw, 1.1rem)',
              lineHeight: 1.85,
              maxWidth: '680px',
              margin: '0 auto 32px',
            }}
          >
            A community bridging the gap between legal theory and execution.
            We connect aspiring legal professionals with knowledge, competitions,
            events, and a network that takes law seriously.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/join" style={{
                display: 'inline-block', padding: '12px 30px', borderRadius: '999px',
                background: 'var(--text-color)', color: 'var(--bg-color)',
                fontWeight: 700, fontSize: '0.93rem', textDecoration: 'none',
                border: '1px solid var(--text-color)',
              }}>
                Join the Community
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link href="/blogs" style={{
                display: 'inline-block', padding: '12px 30px', borderRadius: '999px',
                background: 'transparent', color: 'var(--text-color)',
                fontWeight: 700, fontSize: '0.93rem', textDecoration: 'none',
                border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)',
              }}>
                Read Legal Insights
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── EVENT TICKER ── */}
        <AnimatedSection variant="fadeUp" delay={0.1} style={{ maxWidth: '820px', margin: '0 auto 56px' }}>
          <Link href="/events" style={{ display: 'block', textDecoration: 'none' }}>
            <motion.div
              whileHover={{ scale: 1.015, boxShadow: '0 12px 36px rgba(0,0,0,0.22)' }}
              transition={{ duration: 0.25 }}
              style={{
                border: '1px solid var(--glass-border)', borderRadius: '999px',
                overflow: 'hidden', background: 'var(--glass-bg)',
                height: '44px', display: 'flex', alignItems: 'center',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div style={{
                whiteSpace: 'nowrap', display: 'inline-block',
                paddingLeft: '100%',
                animation: 'ylh-ticker 20s linear infinite',
                color: 'var(--text-color)', fontWeight: 600,
                fontSize: '0.83rem', letterSpacing: '0.04em',
              }}>
                🔴&nbsp; FLAGSHIP EVENT — LEX NOCTIS &nbsp;·&nbsp; CRIMINAL LAW TRIVIA &nbsp;·&nbsp; 15 JUNE 2026 &nbsp;·&nbsp; REGISTRATIONS NOW OPEN &nbsp;·&nbsp; CLICK TO REGISTER
              </div>
            </motion.div>
          </Link>
        </AnimatedSection>

        {/* ── WHAT WE OFFER ── */}
        <AnimatedSection variant="fadeUp" style={{ maxWidth: '960px', margin: '0 auto 56px' }}>
          <WordReveal
            text="What We Offer"
            as="h2"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700,
              textAlign: 'center', marginBottom: '8px', color: 'var(--text-color)',
            }}
          />
          <p style={{ textAlign: 'center', color: 'var(--grey-text)', fontSize: '0.9rem', marginBottom: '28px' }}>
            Everything a law student needs in one place
          </p>

          <StaggerGrid className="cards-grid">
            {OFFER_CARDS.map(item => (
              <div key={item.title} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <i className={`fas ${item.icon}`} style={{ fontSize: '1.4rem', color: 'var(--grey-text)' }}></i>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-color)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--grey-text)', fontSize: '0.91rem', lineHeight: 1.75 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </StaggerGrid>
        </AnimatedSection>

        {/* ── LEGAL INSIGHTS TAG CLOUD ── */}
        <AnimatedSection variant="fadeUp" style={{ maxWidth: '820px', margin: '0 auto 56px', textAlign: 'center' }}>
          <WordReveal
            text="Legal Insights"
            as="h2"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700,
              marginBottom: '8px', color: 'var(--text-color)', textAlign: 'center',
            }}
          />
          <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem', marginBottom: '22px' }}>
            Legal insights across every major domain (Coming Soon)
          </p>

          <motion.div
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW}
          >
            {LAW_AREAS.map(area => (
              <motion.div
                key={area}
                variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link href="/blogs" style={{
                  display: 'inline-block', padding: '7px 16px',
                  border: '1px solid var(--glass-border)', borderRadius: '999px',
                  fontSize: '0.83rem', fontWeight: 600, color: 'var(--grey-text)',
                  background: 'var(--glass-bg)', textDecoration: 'none',
                }}>
                  {area}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* ── CTA ── */}
        <AnimatedSection variant="scaleUp" style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            className="glass-card"
            style={{ padding: '48px 32px' }}
            whileHover={{ boxShadow: '0 32px 72px rgba(0,0,0,0.22)' }}
            transition={{ duration: 0.3 }}
          >
            <WordReveal
              text="Be Part of the Movement"
              as="h2"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700,
                marginBottom: '12px', color: 'var(--text-color)', textAlign: 'center',
              }}
            />
            <p style={{
              color: 'var(--grey-text)', lineHeight: 1.8, marginBottom: '28px',
              fontSize: '0.93rem', maxWidth: '540px', margin: '0 auto 28px',
            }}>
              Join law students across India building their careers through YLH.
              Stay informed, stay competitive, stay connected.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/join" style={{
                  display: 'inline-block', padding: '12px 30px', borderRadius: '999px',
                  background: 'var(--text-color)', color: 'var(--bg-color)',
                  fontWeight: 700, fontSize: '0.93rem', textDecoration: 'none',
                  border: '1px solid var(--text-color)',
                }}>
                  Join the Community
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact" style={{
                  display: 'inline-block', padding: '12px 30px', borderRadius: '999px',
                  background: 'transparent', color: 'var(--text-color)',
                  fontWeight: 700, fontSize: '0.93rem', textDecoration: 'none',
                  border: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)',
                }}>
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

      </PageWrapper>

      <style>{`
        @keyframes ylh-ticker {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </>
  );
}
