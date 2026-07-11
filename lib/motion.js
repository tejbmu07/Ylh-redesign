// ─────────────────────────────────────────────────────────────
// YLH Motion Library  —  shared Framer Motion variants & hooks
// ─────────────────────────────────────────────────────────────

// ── Viewport config (used in whileInView) ────────────────────
export const VIEW = { once: true, amount: 0.15 };

// ── Fade up (default page entrance) ─────────────────────────
export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Fade in (pure opacity) ────────────────────────────────────
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Slide in from left ────────────────────────────────────────
export const slideLeft = {
  hidden:  { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Slide in from right ───────────────────────────────────────
export const slideRight = {
  hidden:  { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

// ── Scale up ─────────────────────────────────────────────────
export const scaleUp = {
  hidden:  { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Stagger container (wraps children with staggered delay) ──
export const staggerContainer = (stagger = 0.12, delayChildren = 0.1) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

// ── Stagger item (child of staggerContainer) ─────────────────
export const staggerItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ── Word-by-word text reveal ──────────────────────────────────
export const wordRevealContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

export const wordRevealItem = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// ── Page transition wrapper ───────────────────────────────────
export const pageTransition = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } },
};

// ── Card hover (use on motion.div wrapping cards) ─────────────
export const cardHover = {
  rest:  { scale: 1,    y: 0,  boxShadow: '0 16px 36px rgba(0,0,0,0.08)' },
  hover: { scale: 1.02, y: -4, boxShadow: '0 28px 56px rgba(0,0,0,0.18)',
           transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

// ── Button press ─────────────────────────────────────────────
export const buttonTap = { scale: 0.96 };

// ── Parallax helper (use with useScroll + useTransform) ──────
export const parallaxConfig = { outputRange: (strength = 60) => [`-${strength}px`, `${strength}px`] };
