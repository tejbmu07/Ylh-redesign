'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <PageWrapper className="page-spacing container">

        <AnimatedSection variant="fadeUp" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
          <WordReveal text="Get in Touch" as="h1" className="section-title" style={{ textAlign: 'center' }} />
          <p style={{ color: 'var(--grey-text)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            Have a question, feedback, or want to collaborate with Young Legal House? Fill out the
            form below or reach out to us directly through our official channels.
            We would love to hear from you.
          </p>
        </AnimatedSection>

        <div className="join-grid">
          <AnimatedSection variant="slideLeft" delay={0.1}>
            <div className="glass-card">
              <h2 style={{ marginBottom: '25px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>
                Send a Message
              </h2>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ color: 'var(--grey-text)', lineHeight: '1.8' }}
                  >
                    ✅ Message sent! We will respond to your email shortly.
                  </motion.p>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input name="fullName" type="text" className="form-input" placeholder="Enter your full name" required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input name="email" type="email" className="form-input" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <select name="subject" className="form-select" required defaultValue="">
                        <option value="" disabled>What is this regarding?</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnerships & Collaborations">Partnerships & Collaborations</option>
                        <option value="Events & Workshops">Events & Workshops</option>
                        <option value="Website Feedback">Website Feedback</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Your Message</label>
                      <textarea name="message" className="form-textarea" rows={5} placeholder="Type your message here..." required />
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
                      {submitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight" delay={0.15}>
            <div className="glass-card contact-info-card">
              <h2 style={{ marginBottom: '30px' }}>Contact Details</h2>

              <div className="contact-detail-item">
                <i className="fas fa-envelope" style={{ color: 'var(--grey-text)', marginTop: '2px' }}></i>
                <div>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--grey-text)' }}>Official Email</span>
                  <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)', textDecoration: 'none', fontWeight: 700 }}>
                    connect.ylh@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--grey-text)', marginTop: '2px' }}></i>
                <div>
                  <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--grey-text)' }}>Headquarters</span>
                  <span style={{ fontWeight: 700 }}>Chennai, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="contact-socials">
                {[
                  { href: 'https://www.linkedin.com/company/young-legal-house/', icon: 'fa-linkedin' },
                  { href: 'https://www.instagram.com/younglegalhouse/', icon: 'fa-instagram' },
                  { href: 'https://linktr.ee/younglegalhouse', icon: 'fa-link', type: 'fas' },
                ].map(({ href, icon, type }) => (
                  <motion.a
                    key={icon}
                    href={href}
                    className="contact-social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-color)' }}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${type || 'fab'} ${icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

      </PageWrapper>
    </>
  );
}
