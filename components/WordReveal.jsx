'use client';
import { motion } from 'framer-motion';
import { wordRevealItem, VIEW } from '@/lib/motion';

const TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  p:  motion.p,
};

export default function WordReveal({
  text,
  as        = 'h1',
  className = '',
  style     = {},
  stagger   = 0.07,
}) {
  const words = text.split(' ');
  const container = {
    hidden:  {},
    visible: { transition: { staggerChildren: stagger, delayChildren: 0.1 } },
  };

  const Tag = TAGS[as] ?? TAGS.h1;

  return (
    <Tag
      className={className}
      style={{ ...style, display: 'flex', flexWrap: 'wrap', gap: '0.25em', justifyContent: style.textAlign === 'center' ? 'center' : undefined }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordRevealItem}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
