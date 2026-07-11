'use client';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, VIEW } from '@/lib/motion';

/**
 * StaggerGrid
 * Wraps a grid of items so they stagger in one-by-one on scroll.
 *
 * Props:
 *   className   — class for the container (e.g. "cards-grid")
 *   style       — style for the container
 *   stagger     — seconds between each child (default 0.12)
 *   delay       — initial delay before stagger begins (default 0.1)
 *   itemClass   — class to apply to each motion.div item wrapper
 *   itemStyle   — style to apply to each motion.div item wrapper
 *   children    — each direct child becomes a staggered item
 */
export default function StaggerGrid({
  children,
  className   = 'cards-grid',
  style       = {},
  stagger     = 0.12,
  delay       = 0.1,
  itemClass   = '',
  itemStyle   = {},
}) {
  const items = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          className={itemClass}
          style={itemStyle}
          variants={staggerItem}
          whileHover={{
            y: -4,
            scale: 1.015,
            boxShadow: '0 28px 56px rgba(0,0,0,0.18)',
            transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
