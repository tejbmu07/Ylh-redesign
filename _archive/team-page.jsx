'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import AnimatedSection from '@/components/AnimatedSection';
import WordReveal from '@/components/WordReveal';
import { VIEW } from '@/lib/motion';

const TEAM_MEMBERS = [
  {
    name: 'Achyuta Narayanan',
    role: 'Founder of the Community',
    image: '/Founder.jpeg',
    linkedIn: 'https://www.linkedin.com/in/achyuta-narayanan/',
  },
  {
    name: 'Amishee Gupta',
    role: 'Co Founder of the Community',
    image: '/Head.jpeg',
    linkedIn: 'https://www.linkedin.com/in/amishee-gupta-95b65b303/',
    imageStyle: { objectFit: 'cover', objectPosition: 'center 22%' },
  },
  {
    name: 'Tej Talin',
    role: 'Head of Technology',
    image: '/Tej-Talin.png',
    linkedIn: 'https://www.linkedin.com/in/tejtalind/',
    imageStyle: { objectFit: 'cover' },
  },
];

export default function TeamPage() {
  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="page-spacing container">

        <AnimatedSection variant="fadeUp" as="div">
          <WordReveal text="Meet Our Team" as="h1" className="section-title" style={{ textAlign: 'center' }} />
        </AnimatedSection>

        <div className="team-container">
          <motion.div
            className="team-row top-row"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={VIEW}
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                className="glass-card team-card"
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(0,0,0,0.22)' }}
                transition={{ duration: 0.28 }}
              >
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={360}
                    height={450}
                    className="team-img no-save-img"
                    draggable={false}
                    style={member.imageStyle}
                  />
                </motion.div>
                <h3>{member.name}</h3>
                <p className="card-detail">{member.role}</p>

                {member.linkedIn ? (
                  <motion.a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social"
                    style={{ color: 'var(--text-color)' }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </motion.a>
                ) : null}
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection variant="fadeUp" delay={0.1} className="team-row">
            <div className="glass-card community-card">
              <h3>And a Growing Community...</h3>
              <p style={{ color: 'var(--grey-text)', lineHeight: '1.6', marginTop: '10px' }}>
                Behind the scenes, we have an incredible team of 10+ dedicated members, interns,
                and contributors who are working tirelessly to build, manage, and better this
                community every single day.
              </p>
            </div>
          </AnimatedSection>
        </div>

      </PageWrapper>
    </>
  );
}
