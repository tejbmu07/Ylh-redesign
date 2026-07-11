'use client';
import { useEffect, useRef } from 'react';

/**
 * SmoothScroll
 * Eases native scroll behavior with subtle inertia using RAF lerp interpolation.
 * Respects prefers-reduced-motion preference.
 * Drop once in RootLayout to apply site-wide.
 */
export default function SmoothScroll() {
  const rafRef = useRef(null);
  const scrollRef = useRef({ target: 0, current: 0 });

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const onWheel = (e) => {
      e.preventDefault();
      scrollRef.current.target += e.deltaY;
      scrollRef.current.target = Math.max(
        0,
        Math.min(
          scrollRef.current.target,
          document.documentElement.scrollHeight - window.innerHeight
        )
      );
    };

    const tick = () => {
      // 0.12 lerp gives a smooth, responsive feel without being sluggish
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.12;
      window.scrollTo(0, scrollRef.current.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    // Initialize target to current scroll position
    scrollRef.current.target = window.scrollY;
    scrollRef.current.current = window.scrollY;

    window.addEventListener('wheel', onWheel, { passive: false });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;
}
