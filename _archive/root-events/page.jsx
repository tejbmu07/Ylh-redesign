'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import EventBrochureTile from '@/components/EventBrochureTile';
import AnimatedSection from '@/components/AnimatedSection';
import WordReveal from '@/components/WordReveal';

const INSTAGRAM_REEL_URL = 'https://www.instagram.com/younglegalhouse/';
const REEL_VIDEO_URL = '/lex-noctis-reel.mp4';

export default function EventsPage() {
  return (
    <>
      <AnimatedNetworkBackground />
      <main className="page-spacing container events-page" style={{ paddingTop: '24px' }}>

        <motion.p
          className="events-pretitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Young Legal House Presents
        </motion.p>

        <WordReveal text="Legal Trivia - Lex Noctis" as="h1" className="section-title" style={{ textAlign: 'center' }} />

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '10px' }}>Cinematic Criminal Law Trivia</h3>
            <p className="events-copy">
              Step into an immersive and intellectually engaging experience where law meets cinema. This unique event is designed as a
              cinematic storyline-based criminal law trivia competition, challenging participants to apply their legal knowledge,
              analytical reasoning, and presence of mind in a fast-paced virtual environment.
            </p>
            <p className="events-copy">
              Participants will observe a specially curated live-streamed storyline on YouTube, following which criminal law-based
              questions will appear during the stream. Each question requires participants to scan a QR code displayed on the screen
              and submit responses within the stipulated time limit.
            </p>
            <p className="events-copy">
              The event tests understanding of criminal law principles, interpretation skills, and accurate response under time-bound
              conditions through a powerful blend of storytelling and legal analysis.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="scaleUp" delay={0.1}>
          <section className="event-media-showcase" aria-label="Lex Noctis poster and reel">
            <motion.div
              className="glass-card event-media-poster"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/lex-noctis-launch-poster.jpeg"
                alt="Lex Noctis poster"
                className="event-media-poster-img"
              />
            </motion.div>

            <div className="glass-card event-media-reel">
              <div className="event-reel-frame">
                <video
                  src={REEL_VIDEO_URL}
                  poster="/lex-noctis-launch-poster.jpeg"
                  className="event-reel-video"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <motion.a
                href={INSTAGRAM_REEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-reel-pill"
                aria-label="View Lex Noctis reel on Instagram"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
                View on Instagram
              </motion.a>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.05}>
          <EventBrochureTile />
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '8px' }}>Who can Participate?</h3>
            <p className="events-copy">
              This event is exclusively open to law students pursuing LL.B. (in any year) or LL.M. programs from recognized institutions
              across India.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '8px' }}>Flow of Event</h3>
            <p className="events-copy">
              The event is conducted via YouTube live stream where participants observe the storyline, respond to criminal law questions
              appearing at intervals, scan the on-screen QR code for each question, and submit answers within the prescribed time, with
              each question active for approximately 1 to 1.5 minutes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '8px' }}>Participation Guidelines</h3>
            <p className="events-copy">
              Participants should arrange two devices (one for live stream viewing and one for QR response submission), ensure stable
              internet, submit within time, avoid misconduct, follow organizer instructions, and note that organizers are not responsible
              for participant-side technical issues while retaining rights to revise schedule, format, or rules if required.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            <div className="glass-card">
              <h3 style={{ marginBottom: '8px' }}>Evaluation Criteria</h3>
              <p className="events-copy">
                Evaluation is based on accuracy, legal relevance, and promptness of submission. Answers are assessed by the internal panel,
                including qualified legal professionals, and the panel decision remains final and binding.
              </p>
            </div>

            <div className="glass-card">
              <h3 style={{ marginBottom: '8px' }}>Why Should You Participate?</h3>
              <p className="events-copy" style={{ marginBottom: '10px' }}>
                Experience Criminal Law Beyond the Classroom
              </p>
              <p className="events-copy" style={{ marginBottom: '14px' }}>
                Engage with realistic legal situations and discover how principles of Indian Criminal Law are applied in practice.
                Develop the ability to think like a lawyer when faced with complex legal challenges.
              </p>
              <p className="events-copy" style={{ marginBottom: '10px' }}>
                Develop the Skills That Distinguish Exceptional Lawyers
              </p>
              <p className="events-copy" style={{ marginBottom: '14px' }}>
                Strengthen your legal reasoning, logical analysis, and critical thinking abilities core competencies that are indispensable
                for success in litigation, judiciary, corporate practice, and beyond.
              </p>
              <p className="events-copy" style={{ marginBottom: '10px' }}>
                Challenge Yourself with Practical, Situation-Based Questions
              </p>
              <p className="events-copy" style={{ marginBottom: '14px' }}>
                Move beyond memorization and learn to evaluate facts, identify legal issues, and formulate well-reasoned solutions under
                realistic circumstances.
              </p>
              <p className="events-copy" style={{ marginBottom: '10px' }}>
                Build Confidence for Your Legal Career and Everyday Decision-Making
              </p>
              <p className="events-copy">
                This unique event equips you with analytical and problem-solving skills that extend beyond law school, empowering you to
                approach professional and real-life situations with clarity, precision, and confidence.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '8px' }}>Prize & Recognition</h3>
            <p className="events-copy" style={{ marginBottom: '8px' }}>
              <strong>Winner(s):</strong> Cash Prize of Rs. 3,000/- and Certificate of Appreciation.
            </p>
            <p className="events-copy">
              <strong>Runner Up(s):</strong> Cash Prize of Rs. 2,000/- and Certificate of Appreciation.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginBottom: '8px' }}>Registration Fee & Deadline</h3>
            <p className="events-copy">
              The registration fee is Rs. 150/- INR per participant, and the last date for registration is 13 June 2026.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div className="glass-card" style={{ marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '8px' }}>Important Note</h3>
            <p className="events-copy">
              Participants are encouraged to read all event instructions carefully before the competition. This event promotes legal
              awareness, analytical thinking, and practical criminal law application through an innovative format. For queries, contact
              connect.ylh@gmail.com.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection variant="scaleUp" delay={0.1}>
          <div className="glass-card" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '8px' }}>Registration</h3>
            <p className="events-copy" style={{ textAlign: 'center', marginBottom: '14px' }}>
              Continue to the dedicated registration page to submit your details.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link href="/events/register" className="submit-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Register for Trivia
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            position: 'fixed',
            right: '0',
            top: '52%',
            transform: 'translateY(-50%)',
            zIndex: 4000,
          }}
        >
          <Link
            href="/events/register"
            aria-label="Register now for Lex Noctis"
            style={{
              display: 'block',
              borderRadius: '16px 0 0 16px',
              padding: '12px 16px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '0.9rem',
              color: '#fff',
              background: '#111319',
              border: '1px solid rgba(255, 255, 255, 0.24)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            }}
          >
            Register Now
          </Link>
        </motion.div>
      </main>

      <style jsx>{`
        .events-pretitle {
          text-align: center;
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--grey-text);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .event-media-showcase {
          display: grid;
          grid-template-columns: repeat(2, minmax(260px, 1fr));
          gap: 20px;
          align-items: stretch;
          margin-bottom: 20px;
        }

        .event-media-poster {
          padding: 0;
          overflow: hidden;
          line-height: 0;
        }

        .event-media-poster-img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          display: block;
          object-fit: cover;
          object-position: center top;
          border-radius: inherit;
        }

        .event-media-reel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 16px;
          padding: 18px;
        }

        .event-reel-frame {
          width: min(100%, 520px);
          aspect-ratio: 3 / 4;
          border-radius: 22px;
          overflow: hidden;
          background: #0f1012;
          border: 1px solid var(--glass-border);
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.16);
        }

        .event-reel-video {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          background: #0f1012;
        }

        .instagram-reel-pill {
          align-self: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 999px;
          border: 1px solid var(--glass-border);
          color: var(--text-color);
          background: var(--glass-bg);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
          font-weight: 800;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }

        .instagram-reel-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.16);
          background: rgba(255, 255, 255, 0.92);
        }

        @media (max-width: 768px) {
          .events-page {
            padding-left: 10px;
            padding-right: 10px;
          }

          .event-media-showcase {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .event-media-poster-img {
            min-height: 0;
            height: auto;
            aspect-ratio: 3 / 4;
          }

          .event-media-reel {
            padding: 12px;
          }

          .event-reel-frame {
            border-radius: 16px;
            width: 100%;
            max-width: 520px;
          }

          .instagram-reel-pill {
            width: 100%;
          }

        }

        .events-copy {
          color: var(--grey-text);
          line-height: 1.8;
          margin-bottom: 0;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }
      `}</style>
    </>
  );
}
