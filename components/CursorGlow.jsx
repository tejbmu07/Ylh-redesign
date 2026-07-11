'use client';
import { useEffect, useRef } from 'react';

/**
 * CursorGlow
 * Renders a soft radial spotlight that follows the mouse cursor.
 * Pure CSS + requestAnimationFrame — no Framer Motion needed here.
 * Drop this once in RootLayout, inside <body>.
 */
export default function CursorGlow() {
  const glowRef = useRef(null);
  const pos     = useRef({ x: -400, y: -400, tx: -400, ty: -400 });
  const rafRef  = useRef(null);
  const sparksRef = useRef(null);

  useEffect(() => {
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = glowRef.current;
    if (!el) return;

    const onMove = (e) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };

    const tick = () => {
      pos.current.x += (pos.current.tx - pos.current.x) * 0.16;
      pos.current.y += (pos.current.ty - pos.current.y) * 0.16;
      el.style.transform = `translate3d(${pos.current.x - 170}px, ${pos.current.y - 170}px, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onDown = (event) => {
      const holder = sparksRef.current;
      if (!holder) return;
      const spark = document.createElement('span');
      spark.className = 'ylh-click-spark';
      spark.style.left = `${event.clientX}px`;
      spark.style.top = `${event.clientY}px`;
      holder.appendChild(spark);
      window.setTimeout(() => spark.remove(), 560);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="ylh-cursor-glow" aria-hidden="true" />
      <div ref={sparksRef} className="ylh-click-sparks" aria-hidden="true" />
      <style>{`
        .ylh-cursor-glow {
          position: fixed;
          top: 0;
          left: 0;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          will-change: transform;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.05) 42%,
            transparent 70%
          );
          mix-blend-mode: screen;
          transition: opacity 0.4s ease;
        }

        body.light-mode .ylh-cursor-glow {
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.10) 0%,
            rgba(0, 0, 0, 0.03) 40%,
            transparent 70%
          );
          mix-blend-mode: multiply;
        }

        .ylh-click-sparks {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }

        .ylh-click-spark {
          position: fixed;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          border: 1px solid currentColor;
          color: var(--text-color);
          transform: translate(-50%, -50%);
          opacity: 0.45;
          animation: ylhClickSpark 0.56s ease-out forwards;
        }

        @keyframes ylhClickSpark {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.45); }
          70% { opacity: 0.18; }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(5.2); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ylh-cursor-glow, .ylh-click-sparks { display: none; }
        }

        @media (pointer: coarse) {
          /* Hide on touch devices — no cursor */
          .ylh-cursor-glow, .ylh-click-sparks { display: none; }
        }
      `}</style>
    </>
  );
}
