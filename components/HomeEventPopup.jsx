'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeEventPopup.module.css';

const POPUP_DISMISSED_KEY = 'ylh_lex_noctis_popup_dismissed_session';

export default function HomeEventPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const alreadyDismissed = window.sessionStorage.getItem(POPUP_DISMISSED_KEY) === 'true';
    if (alreadyDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleClose = () => {
    window.sessionStorage.setItem(POPUP_DISMISSED_KEY, 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Lex Noctis Event Popup">
      <div className={styles.panel}>
        <button
          type="button"
          className={styles.close}
          aria-label="Close popup"
          onClick={handleClose}
        >
          ×
        </button>

        <div className={styles.imageWrap}>
          <Image
            src="/lex-noctis-poster.jpeg"
            alt="Lex Noctis legal trivia event poster"
            width={1024}
            height={1536}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.actions}>
          <Link href="/events" className={styles.register} onClick={handleClose}>
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}
