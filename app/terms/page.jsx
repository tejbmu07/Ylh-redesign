import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Terms of Service | Young Legal House',
};

export default function TermsPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '12px' }}>
              Terms of Service
            </h1>
            <p style={{ color: 'var(--grey-text)', fontSize: '0.95rem' }}>
              www.younglegalhouse.com &nbsp;|&nbsp; connect.ylh@gmail.com
            </p>
            <p style={{ color: 'var(--grey-text)', fontSize: '0.95rem', marginTop: '4px' }}>
              Effective Date: 20 May 2026 &nbsp;|&nbsp; Version 3.0
            </p>
            <p style={{ color: 'var(--muted-text)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '12px' }}>
              Please read this document carefully before using the Platform.
            </p>
          </div>

          {/* Important Notice */}
          <div className="glass-card" style={{ marginBottom: '40px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontWeight: 700, marginBottom: '8px' }}>IMPORTANT NOTICE — NOT LEGAL ADVICE</p>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Nothing on this Platform constitutes legal advice or creates an attorney-client relationship.
              Young Legal House is an information and community platform only. Always consult a qualified
              legal professional before taking or refraining from any action based on content on this Platform.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            <Section number="1" title="Introduction and Binding Agreement">
              <p>Welcome to Young Legal House ("Platform", "we", "us", or "our"), accessible at www.younglegalhouse.com. Young Legal House is an online legal community platform providing legal news, blogs, event listings, live updates, discussions, and related informational content for legal professionals, students, and enthusiasts in India.</p>
              <p style={{ marginTop: '16px', fontWeight: 600 }}>BY ACCESSING, BROWSING, OR USING THE PLATFORM IN ANY MANNER, YOU UNCONDITIONALLY ACCEPT AND AGREE TO BE LEGALLY BOUND BY THESE TERMS OF SERVICE ("TERMS"), OUR PRIVACY POLICY, AND ALL APPLICABLE LAWS AND REGULATIONS.</p>
              <p style={{ marginTop: '12px' }}>If you do not agree with any part of these Terms, you must immediately and permanently cease all use of the Platform. Your continued use of the Platform at any time constitutes conclusive acceptance of the then-current Terms.</p>
              <p style={{ marginTop: '12px' }}>These Terms constitute a legally binding agreement enforceable under the Indian Contract Act, 1872, and the Information Technology Act, 2000.</p>
            </Section>

            <Section number="2" title="The Platform Is Not a Law Firm">
              <div className="glass-card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent)' }}>
                <p style={{ fontWeight: 700 }}>NOT LEGAL ADVICE — READ CAREFULLY</p>
                <p style={{ color: 'var(--grey-text)', marginTop: '8px', lineHeight: '1.8', fontSize: '0.95rem' }}>Young Legal House is NOT a law firm and does NOT provide legal advice, legal opinions, legal representation, or any professional legal services of any kind.</p>
              </div>
              <p>All content on the Platform including but not limited to articles, blogs, commentary, event information, live updates, newsletters, discussions, and any other materials is provided solely for general informational and educational purposes. Such content does not constitute and must not be construed as:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['Legal advice of any kind', 'A legal opinion on any matter', 'A recommendation to take or refrain from any legal action', 'The establishment of an attorney-client, solicitor-client, or any other professional relationship', 'A substitute for consultation with a qualified and licensed legal professional'].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>You expressly acknowledge and agree that you will not rely on any content on this Platform as a basis for any legal decision, and that Young Legal House bears no responsibility whatsoever for any action taken or omitted by you in reliance on any content published on the Platform.</p>
              <p style={{ marginTop: '12px' }}>Laws and legal interpretations vary significantly across jurisdictions and change frequently. Young Legal House does not guarantee that any content is current, accurate, complete, or applicable to your specific situation. You assume full and sole responsibility for verifying the accuracy and applicability of all content with a licensed legal professional before acting upon it.</p>
            </Section>

            <Section number="3" title="Eligibility and User Representations">
              <p>By using the Platform, you represent, warrant, and covenant that:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'You are at least 18 years of age, or are using the Platform under the lawful supervision of a parent or legal guardian who has agreed to these Terms',
                  'You have the legal capacity to enter into a binding contract under the Indian Contract Act, 1872',
                  'Your use of the Platform does not violate any applicable law or regulation',
                  'All information you provide to the Platform is accurate, current, and complete',
                  'You will not use the Platform for any unlawful, fraudulent, or harmful purpose',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>Young Legal House reserves the right to refuse access to the Platform to any person at any time, with or without cause, with or without notice.</p>
            </Section>

            <Section number="4" title="Platform as Intermediary Safe Harbour">
              <p>Young Legal House operates as an intermediary within the meaning of Section 2(1)(w) of the Information Technology Act, 2000. The Platform complies with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended by the IT Amendment Rules, 2025.</p>
              <p style={{ marginTop: '12px' }}>Pursuant to Section 79 of the IT Act, 2000, Young Legal House shall not be held liable for any third-party content, user-generated content, or information hosted on the Platform, provided that the Platform acts expeditiously upon receiving actual knowledge of any unlawful content. Users may report unlawful content to our Grievance Officer at connect.ylh@gmail.com. Complaints will be acknowledged within 24 hours and acted upon within the timelines prescribed under the IT Rules, 2021.</p>
            </Section>

            <Section number="5" title="User Accounts and Responsibilities">
              <Subsection title="5.1 Account Registration">
                <p>Certain features may require account registration. You agree to provide accurate, current, and complete information and to promptly update such information. You are solely and entirely responsible for all activity that occurs under your account, whether or not authorised by you. You must notify us immediately at connect.ylh@gmail.com upon becoming aware of any unauthorised use of your account.</p>
              </Subsection>
              <Subsection title="5.2 Prohibited Conduct">
                <p>You agree not to, and represent that you will not:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Post, upload, transmit, or share any content that is false, defamatory, obscene, harassing, threatening, abusive, hateful, discriminatory, or otherwise unlawful under applicable Indian law, including the Bharatiya Nyaya Sanhita, 2023 and the IT Act, 2000',
                    'Impersonate any person, entity, or organisation, or misrepresent your affiliation, credentials, or identity',
                    'Use the Platform for unsolicited commercial solicitation, spam, or advertising without prior written consent',
                    'Attempt to gain, or gain, unauthorised access to any part of the Platform, its servers, databases, or related systems',
                    'Deploy or use automated tools, bots, crawlers, scrapers, or data mining techniques without express written permission',
                    'Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code or underlying structure of the Platform',
                    'Upload or transmit any virus, malware, spyware, or other malicious or harmful code',
                    'Interfere with, disrupt, or impose an unreasonable or disproportionate burden on the Platform or its infrastructure',
                    'Collect or harvest personal data of other users without their express consent',
                    'Violate any applicable law, regulation, court order, or directive of any competent authority in India or any other jurisdiction',
                  ].map((item, i) => (
                    <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '16px' }}>Any breach of this Section may result in immediate termination of your access to the Platform and, where appropriate, referral to law enforcement authorities.</p>
              </Subsection>
            </Section>

            <Section number="6" title="User-Generated Content">
              <p>By submitting, posting, or uploading any content to the Platform (including blog posts, comments, event listings, or other materials) ("User Content"), you:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Grant Young Legal House a non-exclusive, royalty-free, sub-licensable, worldwide, perpetual, irrevocable licence to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for any purpose connected with the operation, promotion, and improvement of the Platform',
                  'Represent and warrant that you own all rights in the User Content or have obtained all necessary licences, consents, and permissions to grant the above licence',
                  'Represent and warrant that the User Content does not infringe any intellectual property right, privacy right, or any other right of any third party, and does not violate any applicable law',
                  'Accept sole and full responsibility for your User Content and any consequences of publishing it',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>Young Legal House reserves the right, but not the obligation, to review, monitor, edit, refuse, or remove any User Content at its sole discretion, at any time, without prior notice and without liability to you.</p>
            </Section>

            <Section number="7" title="Intellectual Property">
              <p>All content on the Platform that is created, compiled, or owned by Young Legal House including without limitation its name, logo, trade dress, platform design, original articles, curated databases, and editorial content is the exclusive intellectual property of Young Legal House and is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and all other applicable Indian and international intellectual property laws.</p>
              <p style={{ marginTop: '12px' }}>No content from the Platform may be reproduced, distributed, modified, adapted, publicly displayed, transmitted, sold, licensed, or otherwise exploited, in whole or in part, for any commercial purpose without the prior express written permission of Young Legal House.</p>
              <p style={{ marginTop: '12px' }}>The Platform name "Young Legal House" and its logo are trade marks of Young Legal House. Nothing in these Terms grants you any right or licence to use any trade mark, trade name, or service mark of Young Legal House.</p>
            </Section>

            <Section number="8" title="Events">
              <p>The Platform may list, advertise, or promote legal events, webinars, conferences, seminars, and workshops ("Events") organised by Young Legal House or by third parties. Young Legal House does not guarantee the accuracy, completeness, or reliability of any third-party event information. For Events organised by third parties, Young Legal House expressly excludes all liability for cancellations, postponements, changes in content or speakers, venue issues, or any loss, damage, or inconvenience arising from your registration for or participation in such Events.</p>
            </Section>

            <Section number="9" title="Third-Party Links and Content">
              <p>The Platform may contain hyperlinks to, or embed content from, third-party websites, platforms, or resources. These links are provided solely for your convenience. Young Legal House does not endorse, control, or assume any responsibility for the accuracy, legality, content, privacy practices, products, or services of any third-party site or resource. Access to any third-party site is entirely at your own risk.</p>
            </Section>

            <Section number="10" title="Comprehensive Disclaimer of Warranties">
              <p style={{ fontWeight: 600 }}>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE INDIAN LAW, THE PLATFORM, ALL CONTENT, AND ALL SERVICES ARE PROVIDED ON AN "AS IS", "AS AVAILABLE", AND "WITH ALL FAULTS" BASIS. YOUNG LEGAL HOUSE EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, INCLUDING WITHOUT LIMITATION:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Any implied warranty of merchantability, fitness for a particular purpose, or non-infringement',
                  'Any warranty that the Platform will be uninterrupted, error-free, secure, or free from viruses or other harmful components',
                  'Any warranty as to the accuracy, completeness, currency, reliability, or usefulness of any content on the Platform',
                  'Any warranty that defects will be corrected',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px', fontWeight: 600 }}>NO CONTENT ON THIS PLATFORM CONSTITUTES LEGAL ADVICE. YOUR USE OF THE PLATFORM IS ENTIRELY AT YOUR OWN RISK.</p>
            </Section>

            <Section number="11" title="Limitation of Liability">
              <p style={{ fontWeight: 600 }}>TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE INDIAN LAWS:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'YOUNG LEGAL HOUSE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES OF ANY KIND, HOWEVER CAUSED, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM',
                  "YOUNG LEGAL HOUSE'S TOTAL AGGREGATE LIABILITY TO YOU SHALL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO YOUNG LEGAL HOUSE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM; OR (B) INR 1,000 (RUPEES ONE THOUSAND ONLY)",
                  'YOUNG LEGAL HOUSE SHALL NOT BE LIABLE FOR ANY LOSS OR DAMAGE ARISING FROM YOUR RELIANCE ON ANY CONTENT ON THE PLATFORM AS LEGAL ADVICE',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section number="12" title="Assumption of Risk">
              <p>You expressly acknowledge and agree that:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Your use of the Platform and reliance on any content thereon is entirely at your own risk',
                  'The legal landscape in India is complex, constantly evolving, and jurisdiction-specific; content on the Platform may be outdated, incomplete, or inapplicable to your circumstances',
                  'You will independently verify all legal information with a qualified legal professional before acting upon it',
                  'Young Legal House bears no responsibility for any legal, financial, professional, or other consequence arising from your use of or reliance on the Platform',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section number="13" title="Indemnification">
              <p>You agree to fully indemnify, defend, and hold harmless Young Legal House, its founders, team members, contributors, licensors, and affiliates from and against any and all claims, actions, liabilities, damages, losses, fines, penalties, costs, and expenses (including reasonable advocates' fees) arising out of or relating to: (a) your access to or use of the Platform; (b) your User Content; (c) your violation of these Terms; (d) your violation of any applicable law or regulation; or (e) your violation of any rights of any third party.</p>
            </Section>

            <Section number="14" title="Pre-Dispute Notice Requirement">
              <p><strong>MANDATORY PRE-DISPUTE NOTICE:</strong> Before initiating any legal claim, arbitration, or court proceeding against Young Legal House, you must provide written notice to connect.ylh@gmail.com, clearly describing: (a) the nature and factual basis of your claim; (b) the specific relief sought; and (c) the amount claimed, if applicable. Young Legal House shall have thirty (30) days from receipt of such notice to attempt to resolve the dispute. Failure to comply with this requirement shall be a complete bar to any claim against Young Legal House.</p>
            </Section>

            <Section number="15" title="Dispute Resolution and Arbitration">
              <Subsection title="15.1 Mandatory Arbitration">
                <p>Subject to Section 14, any dispute arising out of or in connection with these Terms shall be referred to and finally resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration shall be Chennai, India. The arbitration shall be conducted in the English language by a sole arbitrator mutually appointed by the parties. The award shall be final and binding.</p>
              </Subsection>
              <Subsection title="15.2 Waiver of Class Action">
                <p style={{ fontWeight: 600 }}>YOU AND YOUNG LEGAL HOUSE EACH AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT AS A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. YOU IRREVOCABLY WAIVE ANY RIGHT TO PARTICIPATE IN ANY CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>
              </Subsection>
              <Subsection title="15.3 Governing Law">
                <p>These Terms and all disputes relating to them shall be governed by and construed in accordance with the laws of India. Subject to the arbitration agreement above, you submit to the exclusive jurisdiction of the courts of Chennai, India.</p>
              </Subsection>
            </Section>

            <Section number="16" title="Force Majeure">
              <p>Young Legal House shall not be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including without limitation: acts of God, natural disasters, pandemic or epidemic, war, terrorism, civil unrest, action of governmental authorities, internet or telecommunications failure, or power failure.</p>
            </Section>

            <Section number="17" title="Amendments to Terms">
              <p>Young Legal House reserves the right to modify, update, or replace these Terms at any time at its sole discretion. Changes will be effective upon being posted to the Platform with an updated effective date. Your continued use of the Platform after the posting of any revised Terms constitutes your conclusive and irrevocable acceptance of those changes.</p>
            </Section>

            <Section number="18" title="Termination">
              <p>Young Legal House may, in its sole and absolute discretion, suspend, restrict, or permanently terminate your access to all or any part of the Platform at any time, with or without notice, and with or without cause. Upon termination, all rights granted to you under these Terms cease immediately. Provisions that by their nature should survive termination shall continue in full force and effect, including Sections 2, 7, 10, 11, 12, 13, 14, 15, and 18.</p>
            </Section>

            <Section number="19" title="Severability">
              <p>If any provision of these Terms is held to be invalid, unlawful, or unenforceable, such provision shall be severed to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.</p>
            </Section>

            <Section number="20" title="Entire Agreement">
              <p>These Terms, together with the Privacy Policy and any other legal notices published by Young Legal House on the Platform, constitute the entire agreement between you and Young Legal House with respect to your use of the Platform, and supersede all prior communications, representations, and agreements relating to the same subject matter.</p>
            </Section>

            <Section number="21" title="Waiver">
              <p>No failure or delay by Young Legal House in exercising any right, power, or privilege under these Terms shall operate as a waiver thereof. No single or partial exercise of any right shall preclude any other or further exercise thereof.</p>
            </Section>

            <Section number="22" title="Contact and Grievance Officer">
              <p>For any questions, concerns, complaints, or reports of unlawful content, please contact:</p>
              <div className="glass-card" style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Grievance Officer, Young Legal House</p>
                <p style={{ color: 'var(--grey-text)' }}>Website: <a href="https://www.younglegalhouse.com" style={{ color: 'var(--text-color)' }}>www.younglegalhouse.com</a></p>
                <p style={{ color: 'var(--grey-text)' }}>Email: <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)' }}>connect.ylh@gmail.com</a></p>
                <p style={{ color: 'var(--grey-text)', marginTop: '8px', fontSize: '0.9rem' }}>We will acknowledge complaints within 24 hours and endeavour to resolve them within 15 days as required under the IT Rules, 2021.</p>
              </div>
            </Section>

          </div>

          {/* Footer reminder */}
          <div className="glass-card" style={{ marginTop: '48px', textAlign: 'center', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontWeight: 700, marginBottom: '8px' }}>REMINDER: NOTHING ON THIS PLATFORM IS LEGAL ADVICE.</p>
            <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem' }}>Always consult a qualified legal professional for advice specific to your situation.</p>
          </div>

        </div>
      </main>
    </>
  );
}

function Section({ number, title, children }) {
  return (
    <div>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.3rem, 3vw, 1.7rem)', fontWeight: 700, marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid var(--glass-border)' }}>
        {number}. {title}
      </h2>
      <div style={{ color: 'var(--grey-text)', lineHeight: '1.8', fontSize: '0.97rem' }}>
        {children}
      </div>
    </div>
  );
}

function Subsection({ title, children }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-color)' }}>
        {title}
      </h3>
      {children}
    </div>
  );
}
