'use client';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ylh_cookie_consent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('ylh_cookie_consent', 'accepted');
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem('ylh_cookie_consent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 20, left: 20, right: 20, zIndex: 2000,
      background: '#111', color: '#fff', padding: '14px 16px', borderRadius: 12
    }}>
      <p style={{ marginBottom: 10 }}>
        We use cookies to improve your experience and analyze traffic.
      </p>
      <button onClick={accept} style={{ marginRight: 10 }}>Accept</button>
      <button onClick={reject}>Reject</button>
    </div>
  );
}
