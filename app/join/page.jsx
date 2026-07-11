'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import WordReveal from '@/components/WordReveal';

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const cvFile = formData.get('cvFile');

    if (!cvFile || cvFile.size === 0) {
      setError('Please upload your CV before submitting.');
      return;
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      setError('CV file is too large. Please upload a file up to 5MB.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch('/api/join', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Could not submit your application.');
      }

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
            <p className="ylh-hero-label">Join Us</p>
            <WordReveal
              text="Shape the Future of Law"
              as="h1"
              className="ylh-page-title"
            />
            <p className="ylh-page-sub">
              Whether you want to build your resume with hands-on experience by joining our core team,
              or you simply want a strategic edge by receiving curated legal updates, Young Legal House
              is the place for you.
            </p>
          </div>
        </AnimatedSection>

        {/* ── FORM GRID ── */}
        <AnimatedSection variant="fadeUp" className="ylh-form-grid">
          {/* Left column */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.15 }}>
              <Image
                src="/design-assets/join-section-bg.jpg"
                alt="Background"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="ylh-join-features">
              <div className="ylh-join-feature">
                <i className="fas fa-briefcase"></i>
                <div>
                  <h4>For Aspiring Legal Professionals</h4>
                  <p>Join our core team and gain hands-on experience in legal research, content creation, event management, and community building.</p>
                </div>
              </div>
              <div className="ylh-join-feature">
                <i className="fas fa-lightbulb"></i>
                <div>
                  <h4>For Knowledge Seekers</h4>
                  <p>Stay ahead with curated legal updates, event reminders, and exclusive opportunities delivered directly to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="ylh-card">
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>
              Careers &amp; Internships
            </h2>

            {submitted ? (
              <p style={{ color: 'var(--grey-text)', lineHeight: 1.8 }}>
                ✅ Application submitted! We will get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="ylh-form-group">
                  <label>Full Name</label>
                  <input name="fullName" type="text" placeholder="e.g., Jane Doe" required />
                </div>

                <div className="ylh-form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="jane@example.com" required />
                </div>

                <div className="ylh-form-group">
                  <label>Phone Number</label>
                  <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>

                <div className="ylh-form-group">
                  <label>LinkedIn Profile URL</label>
                  <input name="linkedinUrl" type="url" placeholder="https://linkedin.com/in/..." required />
                </div>

                <div className="ylh-form-group">
                  <label>Position Applying For</label>
                  <select name="position" required defaultValue="">
                    <option value="" disabled>Select a position...</option>
                    <option value="legal_research">Legal Research Intern</option>
                    <option value="graphic_designer">Graphic Designer</option>
                    <option value="editor">Editor / Proofreader</option>
                  </select>
                </div>

                <div className="ylh-form-group">
                  <label>Upload CV</label>
                  <input
                    name="cvFile"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <p style={{ marginTop: '8px', fontSize: '0.8rem', color: 'var(--muted-text)' }}>
                    Accepted formats: PDF, DOC, DOCX (max 5MB)
                  </p>
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
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </form>
            )}
          </div>
        </AnimatedSection>

        {/* ── PREMIUM CARD ── */}
        <AnimatedSection variant="fadeUp" style={{ maxWidth: '480px', margin: '48px auto 0' }}>
          <motion.div
            className="ylh-card"
            whileHover={{ y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
            transition={{ duration: 0.28 }}
          >
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '8px' }}>YLH Premium Updates</h2>
            <p style={{ color: 'var(--muted-text)', marginBottom: '16px' }}>
              Stay ahead of the curve. Never miss a deadline again.
            </p>

            <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '4px' }}>
              <span style={{ fontSize: '1.5rem' }}>₹</span>39<span style={{ fontSize: '1rem', color: 'var(--muted-text)' }}>/mo</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
              <li style={{ marginBottom: '12px', color: 'var(--grey-text)', fontSize: '0.9rem' }}>
                ✓ Curated legal updates and event reminders.
              </li>
              <li style={{ marginBottom: '12px', color: 'var(--grey-text)', fontSize: '0.9rem' }}>
                ✓ Priority access to workshops and community announcements.
              </li>
              <li style={{ marginBottom: '12px', color: 'var(--grey-text)', fontSize: '0.9rem' }}>
                ✓ Monthly opportunities digest for internships, moots, and calls for papers.
              </li>
            </ul>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="ylh-btn ylh-btn-primary"
                style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}
              >
                Contact Us to Subscribe
              </Link>
            </motion.div>
          </motion.div>
        </AnimatedSection>

      </PageWrapper>
    </>
  );
}
