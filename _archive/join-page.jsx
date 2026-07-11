'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
      <PageWrapper className="page-spacing container">

        <AnimatedSection variant="fadeUp" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <WordReveal text="Shape the Future of Law" as="h1" className="section-title" style={{ textAlign: 'center' }} />
          <p style={{ color: 'var(--grey-text)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Whether you want to build your resume with hands-on experience by joining our core team,
            or you simply want a strategic edge by receiving curated legal updates, Young Legal House
            is the place for you.
          </p>
        </AnimatedSection>

        <div className="join-grid">
          <AnimatedSection variant="slideLeft" delay={0.1}>
            <div className="glass-card">
              <h2 style={{ marginBottom: '25px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                Careers &amp; Internships
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: 'var(--grey-text)', lineHeight: '1.8' }}
                  >
                    ✅ Application submitted! We will get back to you soon.
                  </motion.p>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input name="fullName" type="text" className="form-input" placeholder="e.g., Jane Doe" required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input name="email" type="email" className="form-input" placeholder="jane@example.com" required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input name="phone" type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">LinkedIn Profile URL</label>
                      <input name="linkedinUrl" type="url" className="form-input" placeholder="https://linkedin.com/in/..." required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Position Applying For</label>
                      <select name="position" className="form-select" required defaultValue="">
                        <option value="" disabled>Select a position...</option>
                        <option value="legal_research">Legal Research Intern</option>
                        <option value="graphic_designer">Graphic Designer</option>
                        <option value="editor">Editor / Proofreader</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Upload CV</label>
                      <input
                        name="cvFile"
                        type="file"
                        className="form-input"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                      <p className="word-count-indicator" style={{ marginTop: '8px' }}>
                        Accepted formats: PDF, DOC, DOCX (max 5MB)
                      </p>
                    </div>

                    {error ? (
                      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#d9534f', marginBottom: '12px' }}>
                        {error}
                      </motion.p>
                    ) : null}

                    <motion.button
                      type="submit"
                      className="submit-btn"
                      disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.97 }}
                    >
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.15}>
            <motion.div
              className="glass-card subscription-card"
              whileHover={{ boxShadow: '0 28px 60px rgba(0,0,0,0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <h2 style={{ fontSize: '1.8rem' }}>YLH Premium Updates</h2>
              <p style={{ color: 'var(--grey-text)', marginTop: '10px' }}>
                Stay ahead of the curve. Never miss a deadline again.
              </p>

              <div className="sub-price">
                <span className="sub-currency">₹</span>39<span className="sub-month">/mo</span>
              </div>

              <ul className="sub-perks">
                <li>Curated legal updates and event reminders.</li>
                <li>Priority access to workshops and community announcements.</li>
                <li>Monthly opportunities digest for internships, moots, and calls for papers.</li>
              </ul>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block', marginTop: '24px' }}>
                <Link
                  href="/contact"
                  className="glass-pill"
                  style={{ display: 'inline-block', background: 'var(--text-color)', color: 'var(--bg-color)', fontWeight: 800 }}
                >
                  Contact Us to Subscribe
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>

      </PageWrapper>
    </>
  );
}
