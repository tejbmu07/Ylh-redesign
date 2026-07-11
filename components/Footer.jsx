'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { FOOTER_LINKS } from '@/lib/site-data.js';

const SOCIALS = [
  { href: 'https://www.linkedin.com/company/young-legal-house/', icon: 'fa-linkedin',  type: 'fab' },
  { href: 'https://www.instagram.com/younglegalhouse/',          icon: 'fa-instagram', type: 'fab' },
  { href: 'https://linktr.ee/younglegalhouse',                   icon: 'fa-link',      type: 'fas' },
  { href: 'mailto:connect.ylh@gmail.com',                        icon: 'fa-envelope',  type: 'fas' },
];

export default function Footer() {
  return (
    <AnimatedSection variant="fadeUp" as="footer" className="ylh-footer">
      <div className="ylh-container">
        <div className="ylh-footer-grid">
          {/* Brand column */}
          <div className="ylh-footer-brand">
            <Image src="/logoylh.png" alt="YLH Logo" width={80} height={80} style={{ marginBottom: '16px' }} />
            <p>
              Young Legal House is a pioneering initiative dedicated to empowering law students across India by fostering a dynamic ecosystem of learning, collaboration, and professional development.
            </p>
            <div className="ylh-footer-socials">
              {SOCIALS.map(({ href, icon, type }) => (
                <motion.a
                  key={icon}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <i className={`${type} ${icon}`}></i>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="ylh-footer-col">
              <h4>{title}</h4>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="ylh-footer-bottom">
          <p>&copy; 2026 Young Legal House. All rights reserved.</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
