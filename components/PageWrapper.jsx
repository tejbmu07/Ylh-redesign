'use client';
import { motion } from 'framer-motion';
import { pageTransition } from '@/lib/motion';

/**
 * PageWrapper
 * Wraps each page's <main> to give a smooth fade+slide-up entrance.
 * Usage: replace <main ...> with <PageWrapper> ... </PageWrapper>
 * and keep all existing className/style props on the inner div.
 */
export default function PageWrapper({ children, className = '', style = {} }) {
  return (
    <motion.main
      className={className}
      style={style}
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}
