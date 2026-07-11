'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/',        label: 'Home'    },
  { href: '/blogs',   label: 'Blogs'   },
  { href: '/events',  label: 'Events'  },
  { href: '/about',   label: 'About'   },
  { href: '/team',    label: 'Team'    },
  { href: '/join',    label: 'Join Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isDark,    setIsDark]    = useState(true);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname                  = usePathname();

  // ── Theme init ───────────────────────────────────────────────
  useEffect(() => {
    const saved = localStorage.getItem('ylh_theme');
    const dark  = saved !== 'light';
    setIsDark(dark);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(dark ? 'dark-mode' : 'light-mode');
  }, []);

  // ── Scroll shrink ────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(next ? 'dark-mode' : 'light-mode');
    localStorage.setItem('ylh_theme', next ? 'dark' : 'light');
  };

  return (
    <motion.header
      className="ylh-header"
      id="mainNav"
      data-scrolled={scrolled ? 'true' : 'false'}
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="ylh-header-inner"
        style={{ transition: 'padding 0.35s ease' }}
      >
        {/* Logo */}
        <Link href="/" className="sticky-logo">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            <Image
              src="/logoylh.png"
              alt="Young Legal House"
              width={scrolled ? 64 : 80}
              height={scrolled ? 64 : 80}
              priority
              style={{ objectFit: 'contain', transition: 'width 0.35s ease, height 0.35s ease' }}
            />
          </motion.div>
        </Link>

        {/* Center pill */}
        <nav
          className="sticky-island"
          style={{
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.38)'
              : 'var(--shadow)',
            transition: 'box-shadow 0.35s ease',
          }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="nav-link"
                style={{ position: 'relative' }}
              >
                {label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      style={{
                        position:     'absolute',
                        inset:        0,
                        borderRadius: '999px',
                        background:   'var(--glass-bg)',
                        border:       '1px solid var(--glass-border)',
                        zIndex:       -1,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="ylh-nav-actions">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link href="/join" className="ylh-btn ylh-btn-primary">
              Join the Community
            </Link>
          </motion.div>

          {/* Theme toggle */}
          <motion.button
            className="sticky-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.18 }}
          >
            <AnimatePresence mode="wait">
              <motion.i
                key={isDark ? 'moon' : 'sun'}
                className={`fas ${isDark ? 'fa-moon' : 'fa-sun'}`}
                initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                exit={{    opacity: 0, rotate:  30,  scale: 0.7 }}
                transition={{ duration: 0.22 }}
              />
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
