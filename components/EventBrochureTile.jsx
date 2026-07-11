'use client';

import { useMemo, useState } from 'react';

const BROCHURE_URL = '/lex-noctis-brochure.pdf';

export default function EventBrochureTile() {
  const [shareMessage, setShareMessage] = useState('');
  const eventUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/events`;
  }, []);

  const handleShare = async () => {
    try {
      if (navigator.share && eventUrl) {
        await navigator.share({
          title: 'Lex Noctis - Legal Trivia',
          text: 'Join the Lex Noctis legal trivia event.',
          url: eventUrl,
        });
        setShareMessage('');
        return;
      }

      if (eventUrl) {
        await navigator.clipboard.writeText(eventUrl);
        setShareMessage('Event page link copied.');
      }
    } catch {
      setShareMessage('Could not share right now.');
    }
  };

  return (
    <section className="glass-card brochure-tile">
      <h2>Event Brochure</h2>
      <p className="brochure-subtitle">Scroll through the official Lex Noctis brochure below.</p>

      <div className="brochure-frame">
        <iframe
          src={BROCHURE_URL}
          title="Lex Noctis Brochure"
          className="brochure-iframe"
        />
      </div>
      <p className="brochure-mobile-help">If brochure preview is limited on your phone browser, tap Open Brochure.</p>

      <div className="brochure-actions">
        <a href={BROCHURE_URL} target="_blank" rel="noreferrer" className="brochure-btn">
          Open Brochure
        </a>
        <a href={BROCHURE_URL} download className="brochure-btn">
          Download Brochure
        </a>
        <button type="button" onClick={handleShare} className="brochure-btn">
          Share Brochure
        </button>
      </div>
      {shareMessage ? <p className="brochure-share-msg">{shareMessage}</p> : null}

      <style jsx>{`
        .brochure-tile {
          margin-bottom: 22px;
          padding: 20px;
          animation: fadeIn 0.45s ease;
        }

        h2 {
          margin-bottom: 6px;
        }

        .brochure-subtitle {
          color: var(--grey-text);
          margin-bottom: 14px;
        }

        .brochure-frame {
          border: 1px solid var(--glass-border);
          border-radius: 18px;
          background: rgba(8, 12, 20, 0.18);
          padding: 10px;
          overflow: auto;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
        }

        .brochure-iframe {
          width: 100%;
          border: 0;
          border-radius: 12px;
          background: #0f1115;
          min-height: clamp(560px, 78vh, 1100px);
          display: block;
        }

        .brochure-mobile-help {
          margin-top: 8px;
          color: var(--muted-text);
          font-size: 0.84rem;
        }

        .brochure-actions {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .brochure-btn {
          border: 1px solid var(--glass-border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-color);
          border-radius: 999px;
          padding: 10px 16px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
        }

        .brochure-btn:hover {
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
        }

        .brochure-share-msg {
          margin-top: 8px;
          color: var(--grey-text);
          font-size: 0.88rem;
        }

        @media (max-width: 768px) {
          .brochure-tile {
            padding: 14px;
            margin-bottom: 16px;
          }

          .brochure-frame {
            padding: 8px;
            border-radius: 14px;
          }

          .brochure-iframe {
            min-height: 78vh;
          }

          .brochure-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .brochure-btn {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
