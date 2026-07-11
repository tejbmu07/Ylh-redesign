'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';

export default function ThankYouClient({ participantName }) {
  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="page-spacing container" style={{ maxWidth: '760px' }}>
        <motion.div
          className="glass-card"
          style={{ textAlign: 'center', padding: '42px 26px' }}
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.i
            className="fas fa-check-circle"
            style={{ fontSize: '3rem', color: '#6ddf9f', marginBottom: '14px', display: 'block' }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 280, damping: 16, delay: 0.15 }}
          ></motion.i>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '14px' }}>
            Registration Successful
          </h1>
          <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', marginBottom: '18px' }}>
            Thank you, <strong>{participantName}</strong>. Your registration for Lex Noctis has been received.
            Event details will be shared soon on your email and WhatsApp.
          </p>
          <p style={{ color: 'var(--muted-text)', marginBottom: '22px' }}>
            For support, contact: <strong>connect.ylh@gmail.com</strong>
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
            <Link href="/events" className="glass-pill" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Back to Events Page
            </Link>
          </motion.div>
        </motion.div>
      </PageWrapper>
    </>
  );
}
