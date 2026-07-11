'use client';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, scaleUp, VIEW } from '@/lib/motion';

const VARIANTS = { fadeUp, slideLeft, slideRight, scaleUp };

const TAGS = {
  div:     motion.div,
  section: motion.section,
  footer:  motion.footer,
  article: motion.article,
  header:  motion.header,
  span:    motion.span,
};

export default function AnimatedSection({
  children,
  variant   = 'fadeUp',
  delay     = 0,
  className = '',
  style     = {},
  as        = 'div',
}) {
  const base     = VARIANTS[variant] ?? fadeUp;
  const variants = {
    hidden:  base.hidden,
    visible: {
      ...base.visible,
      transition: {
        ...base.visible.transition,
        delay,
      },
    },
  };

  const Tag = TAGS[as] ?? TAGS.div;

  return (
    <Tag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEW}
    >
      {children}
    </Tag>
  );
}
