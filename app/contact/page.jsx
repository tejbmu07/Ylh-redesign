'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import WordReveal from '@/components/WordReveal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setSubmitting(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not send your message.');

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="ylh-container">

        {/* ── PAGE HERO ── */}
        <AnimatedSection variant="fadeUp" className="ylh-page-hero">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="ylh-hero-label">Contact</p>
            <WordReveal
              text="Get in Touch"
              as="h1"
              className="ylh-page-title"
            />
            <p className="ylh-page-sub">
              Have a question, feedback, or want to collaborate with Young Legal House? Fill out the
              form below or reach out to us directly through our official channels.
              We would love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        {/* ── FORM GRID ── */}
        <AnimatedSection variant="fadeUp" className="ylh-form-grid">
          {/* Form */}
          <div className="ylh-card">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
              Send a Message
            </h2>

            {submitted ? (
              <p style={{ color: 'var(--grey-text)', lineHeight: 1.8 }}>
                ✅ Message sent! We will respond to your email shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ylh-form-group">
                  <label>Full Name</label>
                  <input name="fullName" type="text" placeholder="Enter your full name" required />
                </div>

                <div className="ylh-form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="Enter your email" required />
                </div>

                <div className="ylh-form-group">
                  <label>Subject</label>
                  <select name="subject" required defaultValue="">
                    <option value="" disabled>What is this regarding?</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnerships & Collaborations">Partnerships & Collaborations</option>
                    <option value="Events & Workshops">Events & Workshops</option>
                    <option value="Website Feedback">Website Feedback</option>
                  </select>
                </div>

                <div className="ylh-form-group">
                  <label>Your Message</label>
                  <textarea name="message" rows={5} placeholder="Type your message here..." required />
                </div>

                {error ? (
                  <p style={{ color: '#d9534f', marginBottom: '12px' }}>{error}</p>
                ) : null}

                <motion.button
                  type="submit"
                  className="ylh-btn ylh-btn-primary"
                  disabled={submitting}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="ylh-card">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px' }}>Contact Details</h2>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <i className="fas fa-envelope" style={{ color: 'var(--muted-text)', marginTop: '2px' }}></i>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)', marginBottom: '4px' }}>Official Email</div>
                <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 600 }}>
                  connect.ylh@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--muted-text)', marginTop: '2px' }}></i>
              <div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted-text)', marginBottom: '4px' }}>Headquarters</div>
                <div style={{ fontWeight: 600 }}>Chennai, Tamil Nadu, India</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <motion.a
                href="https://www.linkedin.com/company/young-legal-house/"
                target="_blank"
                rel="noopener noreferrer"
                className="ylh-footer-socials"
                style={{ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--grey-text)' }}
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/younglegalhouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="ylh-footer-socials"
                style={{ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--grey-text)' }}
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://linktr.ee/younglegalhouse"
                target="_blank"
                rel="noopener noreferrer"
                className="ylh-footer-socials"
                style={{ display: 'grid', placeItems: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--grey-text)' }}
                whileHover={{ y: -2, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-link"></i>
              </motion.a>
            </div>
          </div>
        </AnimatedSection>

        {/* ── BACKGROUND IMAGE ── */}
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1, opacity: 0.08 }}>
          <Image
            src="/design-assets/contact-section-bg.jpg"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

      </PageWrapper>
    </>
  );
}
