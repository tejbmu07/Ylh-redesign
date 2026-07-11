'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', 'LLM', 'Other'];

export default function EventRegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const file = formData.get('paymentScreenshot');

    if (!file || file.size === 0) {
      setError('Please attach your payment screenshot.');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        const extra =
          data?.details?.airtableErr || data?.details?.googleErr
            ? ` (${data?.details?.airtableErr || ''}${data?.details?.airtableErr && data?.details?.googleErr ? ' | ' : ''}${data?.details?.googleErr || ''})`
            : '';
        throw new Error((data.error || 'Could not complete registration.') + extra);
      }

      const name = encodeURIComponent(formData.get('fullName') || 'Participant');
      router.push(`/events/thank-you?name=${name}`);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="glass-card" style={{ maxWidth: '760px', margin: '0 auto', width: '100%' }}>
        <h1 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.4rem)', marginBottom: '8px' }}>
          Register for Lex Noctis
        </h1>
        <p style={{ color: 'var(--grey-text)', marginBottom: '20px', textAlign: 'center' }}>
          Fill all required fields. You will receive an email confirmation after successful registration.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input name="fullName" type="text" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Age</label>
            <input name="age" type="number" min="15" max="80" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Personal Email ID</label>
            <input name="personalEmail" type="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Name of Institution</label>
            <input name="institution" type="text" className="form-input" required />
          </div>

          <div className="form-group">
            <label className="form-label">Year of Law / Study</label>
            <select name="yearOfStudy" className="form-select" required defaultValue="">
              <option value="" disabled>Select year</option>
              {YEAR_OPTIONS.map((year) => (
                <option value={year} key={year}>{year}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Institutional Email ID (optional)</label>
            <input name="institutionEmail" type="email" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">WhatsApp Mobile Number</label>
            <input name="phone" type="tel" className="form-input" required />
          </div>

          <div className="glass-card" style={{ marginBottom: '14px', padding: '14px' }}>
            <p style={{ marginBottom: '8px', fontWeight: 700 }}>Registration Fee: Rs. 150</p>
            <p style={{ marginBottom: '12px', color: 'var(--grey-text)' }}>
              Pay using UPI ID: <strong>achyutanarayan03-1@okicici</strong>
            </p>
            <button
              type="button"
              className="glass-pill"
              style={{ border: 0, cursor: 'pointer' }}
              onClick={() => setShowPaymentPopup(true)}
            >
              View Payment QR Code
            </button>
          </div>

          <div className="form-group">
            <label className="form-label">Payment QR Screenshot</label>
            <input name="paymentScreenshot" type="file" accept="image/*,.pdf" className="form-input" required />
            <p className="word-count-indicator" style={{ marginTop: '8px' }}>Accepted: image/PDF up to 8MB</p>
          </div>

          {error ? <p style={{ color: '#ff6b6b', marginBottom: '12px' }}>{error}</p> : null}

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </div>

      {showPaymentPopup ? (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.72)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2500,
            padding: '16px',
          }}
          onClick={() => setShowPaymentPopup(false)}
        >
          <div
            className="glass-card"
            style={{ width: 'min(94vw, 420px)', textAlign: 'center', position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPaymentPopup(false)}
              style={{
                position: 'absolute',
                right: '10px',
                top: '8px',
                border: 0,
                background: 'transparent',
                color: 'var(--text-color)',
                fontSize: '1.3rem',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <h3 style={{ marginBottom: '10px' }}>Payment QR & UPI</h3>
            <img src="/ylh-payment-qr.jpeg" alt="YLH UPI QR code" style={{ borderRadius: '10px', width: '100%', maxWidth: '300px', margin: '0 auto 12px' }} />
            <p style={{ color: 'var(--grey-text)', marginBottom: '6px' }}><strong>Amount:</strong> Rs. 150</p>
            <p style={{ color: 'var(--grey-text)', marginBottom: 0 }}><strong>UPI ID:</strong> achyutanarayan03-1@okicici</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
