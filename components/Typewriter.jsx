'use client';
import { useState, useEffect, useRef } from 'react';

/**
 * Typewriter
 * Cycles through an array of strings with a typewriter effect.
 *
 * Props:
 *   words       — string[]  e.g. ['Corporate Law', 'ADR', 'Constitutional Law']
 *   typingSpeed — ms per char while typing (default: 68)
 *   deleteSpeed — ms per char while deleting (default: 38)
 *   pauseTime   — ms to pause after fully typed (default: 1800)
 *   className   — class for the <span> wrapper
 *   style       — style for the <span> wrapper
 *   cursor      — show blinking cursor (default: true)
 */
export default function Typewriter({
  words       = [],
  typingSpeed = 68,
  deleteSpeed = 38,
  pauseTime   = 1800,
  className   = '',
  style       = {},
  cursor      = true,
}) {
  const [display, setDisplay]   = useState('');
  const [phase,   setPhase]     = useState('typing');   // 'typing' | 'pausing' | 'deleting'
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const timerRef                = useRef(null);

  useEffect(() => {
    if (!words.length) return;
    const word = words[wordIdx % words.length];

    if (phase === 'typing') {
      if (charIdx < word.length) {
        timerRef.current = setTimeout(() => {
          setDisplay(word.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, typingSpeed);
      } else {
        timerRef.current = setTimeout(() => setPhase('pausing'), pauseTime);
      }
    } else if (phase === 'pausing') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (charIdx > 0) {
        timerRef.current = setTimeout(() => {
          setDisplay(word.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, deleteSpeed);
      } else {
        setWordIdx(w => w + 1);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [phase, charIdx, wordIdx, words, typingSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className} style={style} aria-label={words[wordIdx % words.length]}>
      {display}
      {cursor && (
        <span
          aria-hidden="true"
          style={{
            display:          'inline-block',
            width:            '2px',
            height:           '1em',
            background:       'currentColor',
            marginLeft:       '3px',
            verticalAlign:    'text-bottom',
            borderRadius:     '1px',
            animation:        'ylh-blink 1s step-end infinite',
          }}
        />
      )}
      <style>{`
        @keyframes ylh-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
