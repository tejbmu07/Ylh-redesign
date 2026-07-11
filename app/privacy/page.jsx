import NetworkBackground from '@/components/NetworkBackground';

export const metadata = {
  title: 'Privacy Policy | Young Legal House',
};

export default function PrivacyPage() {
  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container">
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '12px' }}>
              Privacy Policy
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
            <p style={{ fontWeight: 700, marginBottom: '8px' }}>IMPORTANT NOTICE</p>
            <p style={{ color: 'var(--grey-text)', lineHeight: '1.8', fontSize: '0.95rem' }}>
              This Privacy Policy describes how Young Legal House collects and uses your data.
              Young Legal House does not provide legal advice. See our Terms of Service for full disclaimers.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>

            <Section number="1" title="Introduction and Scope">
              <p>Young Legal House ("we", "us", or "our") is committed to protecting your privacy and processing your personal data responsibly and lawfully. This Privacy Policy ("Policy") explains how we collect, use, disclose, retain, and safeguard your personal information when you visit or use www.younglegalhouse.com ("Platform").</p>
              <p style={{ marginTop: '12px' }}>This Policy applies to all users of the Platform, including visitors, registered members, contributors, and event registrants. It does not apply to third-party websites linked from the Platform.</p>
              <p style={{ marginTop: '12px' }}>This Policy is published and maintained in compliance with:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Information Technology Act, 2000 ("IT Act")',
                  'Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules") currently in full force and effect',
                  'Digital Personal Data Protection Act, 2023 ("DPDPA"), operationalised by the Digital Personal Data Protection Rules, 2025 ("DPDP Rules"), notified on 13 November 2025 and being implemented in three phases (see Section 2)',
                  'Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, as amended in 2025',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>By using the Platform, you consent to the collection, processing, and use of your personal information as described in this Policy. If you do not agree, please discontinue use of the Platform immediately.</p>
            </Section>

            <Section number="2" title="Legislative Framework Phase-wise Implementation of DPDPA">
              <p>The DPDPA, 2023 and DPDP Rules, 2025 are operative and being implemented as follows:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Phase 1 (effective 13 November 2025): The Data Protection Board of India ("DPBI") has been constituted. Administrative, structural, and governance provisions are now fully operative.',
                  'Phase 2 (effective 13 November 2026): Consent Manager registration and related provisions become mandatory.',
                  'Phase 3 (effective 13 May 2027): All substantive compliance obligations become mandatory including notice requirements, purpose limitation, data minimisation, security safeguards, Data Principal rights enforcement, and breach notification.',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>Until Phase 3, the SPDI Rules, 2011 remain the primary enforceable data protection standard for sensitive personal data. Young Legal House voluntarily endeavours to comply with DPDPA principles even in advance of mandatory applicability.</p>
            </Section>

            <Section number="3" title="Information We Collect">
              <Subsection title="3.1 Information You Voluntarily Provide">
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Full name and email address (upon account registration or newsletter subscription)',
                    'Professional details such as designation, law school, or bar council registration number (if included in your profile)',
                    'User Content such as blog posts, comments, and event-related queries',
                    'Communications sent directly to us by email or through the Platform',
                  ].map((item, i) => (
                    <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                  ))}
                </ul>
              </Subsection>
              <Subsection title="3.2 Information Collected Automatically">
                <p>When you access the Platform, the following information may be collected automatically:</p>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'IP address and approximate geographic location derived therefrom',
                    'Browser type, device type, operating system, and screen resolution',
                    'Pages visited, time and duration of visit, and navigation patterns within the Platform',
                    'Referring URLs, search engine queries, and other traffic source information',
                  ].map((item, i) => (
                    <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                  ))}
                </ul>
                <p style={{ marginTop: '12px' }}>This information is collected via cookies, web beacons, server logs, and similar technologies (see Section 7 below).</p>
              </Subsection>
              <Subsection title="3.3 Information We Do Not Collect">
                <p>Young Legal House does not intentionally collect sensitive personal data as defined under the SPDI Rules, 2011 (such as financial information, health data, or biometric data) unless expressly and voluntarily provided by you. If such data is incidentally provided, it will be handled with heightened care and promptly deleted unless retention is necessary.</p>
              </Subsection>
            </Section>

            <Section number="4" title="Purposes of Processing">
              <p>We process your personal data solely for the following specified, lawful, and legitimate purposes:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'To operate, maintain, improve, and personalise the Platform and its features',
                  'To deliver relevant legal news, blog content, event listings, and community updates',
                  'To send newsletters, legal updates, and event notifications only with your express consent, which may be withdrawn at any time',
                  'To respond to queries, grievances, and provide community support',
                  'To detect, investigate, and prevent fraud, abuse, and violations of our Terms of Service',
                  'To comply with applicable legal obligations, court orders, and regulatory requirements under Indian law',
                  'To enforce our Terms of Service and protect the rights, property, and safety of Young Legal House, our users, and the public',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>We will not process your personal data for any purpose incompatible with the above without your prior consent.</p>
            </Section>

            <Section number="5" title="Lawful Basis for Processing">
              <p>We process your personal data on the following lawful bases:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Consent: Where you have given clear, free, specific, informed, and unambiguous consent (e.g., for newsletters and marketing communications)',
                  'Contractual necessity: Where processing is necessary to provide you with the services you have requested (e.g., account registration and maintenance)',
                  'Legal obligation: Where processing is required to comply with applicable Indian law',
                  'Legitimate interests: Where processing is necessary for our legitimate interests in operating and improving the Platform, provided such interests are not overridden by your rights and interests',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section number="6" title="Sharing of Personal Data">
              <p>Young Legal House does not sell, rent, trade, or otherwise commercially exploit your personal data. We may disclose your personal data only in the following strictly limited circumstances:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Service Providers: To trusted third-party vendors (including cloud hosting providers, analytics platforms, and email service providers) who process data on our behalf solely for the purposes described in this Policy, under written confidentiality and data processing agreements',
                  'Legal Compliance: When required to do so by applicable Indian law, court order, judicial process, or direction of a competent governmental or regulatory authority (including the Data Protection Board of India)',
                  'Protection of Rights and Safety: To protect the rights, property, safety, or security of Young Legal House, our users, third parties, or the public, where disclosure is necessary and proportionate',
                  'Business Transfers: In connection with a merger, acquisition, corporate restructuring, or sale of assets, provided the recipient agrees in writing to honour the obligations of this Policy',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section number="7" title="Cookies and Tracking Technologies">
              <p>The Platform uses cookies and similar tracking technologies to enhance your experience and gather analytics data. We use the following categories of cookies:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Strictly Necessary Cookies: Essential to the operation of the Platform (e.g., session management, authentication). These cannot be disabled without affecting core functionality.',
                  'Analytics and Performance Cookies: To understand how users interact with the Platform, identify errors, and improve performance (e.g., Google Analytics or equivalent).',
                  'Functional/Preference Cookies: To remember your preferences and settings across sessions.',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>You may disable or delete cookies through your browser's settings at any time. By continuing to use the Platform without disabling cookies, you consent to our use of cookies as described above.</p>
            </Section>

            <Section number="8" title="Data Retention">
              <p>We retain your personal data only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law, whichever is longer. Our general retention periods are:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Account data: Retained for the duration of your account\'s existence and for a minimum of 3 years thereafter, or as required by applicable law',
                  'Communication records: Retained for a minimum of 1 year from the date of communication',
                  'Data breach records: Retained for a minimum of 1 year as required under the DPDP Rules, 2025',
                  'Analytics data: Retained in anonymised or aggregated form indefinitely for statistical purposes',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>Upon expiry of the applicable retention period, your personal data will be securely deleted or anonymised. You may also request deletion at any time (see Section 10 below).</p>
            </Section>

            <Section number="9" title="Security Measures">
              <p>We implement and maintain industry-standard technical and organisational security measures to protect your personal data against unauthorised access, accidental loss, disclosure, alteration, and destruction. These measures include:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Encryption of personal data in transit using SSL/TLS protocols',
                  'Access controls and role-based authorisation for staff accessing personal data',
                  'Regular security reviews and vulnerability assessments',
                  'Data minimisation we collect only the personal data that is strictly necessary',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>You acknowledge that no method of data transmission over the internet is completely secure. In the event of a personal data breach, we will notify the Data Protection Board of India and affected users in accordance with the DPDPA, 2023 and DPDP Rules, 2025.</p>
            </Section>

            <Section number="10" title="Your Rights as a Data Principal">
              <p>Subject to applicable law and the phased implementation of the DPDPA, 2023, you have the following rights in respect of your personal data:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Right of Access: To request confirmation of whether we hold personal data about you and to obtain a summary of such data and the manner of its processing',
                  'Right to Correction and Completion: To request correction of inaccurate personal data and completion of incomplete personal data',
                  'Right to Erasure: To request deletion of your personal data, subject to our lawful retention obligations',
                  'Right to Withdraw Consent: To withdraw consent previously given for any processing; withdrawal does not affect the lawfulness of processing prior to withdrawal',
                  'Right to Nominate: To nominate a trusted individual to exercise your data rights on your behalf in the event of death or incapacity, pursuant to Section 14 of the DPDPA, 2023',
                  'Right to Grievance Redressal: To raise a complaint with our Grievance Officer; and, if unresolved, to escalate to the Data Protection Board of India',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>To exercise any of these rights, please submit a written request to connect.ylh@gmail.com. We will acknowledge your request within 72 hours and respond within 30 days.</p>
            </Section>

            <Section number="11" title="Children's Privacy">
              <p>The Platform is not directed at, and is not intended for use by, children under the age of 18. In accordance with Section 9 of the DPDPA, 2023, Young Legal House:</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Does not knowingly collect personal data from children without verifiable parental or guardian consent',
                  'Does not engage in behavioural tracking, profiling, or targeted advertising directed at minors',
                  'Will promptly delete any personal data of a child collected without appropriate consent upon becoming aware of such collection',
                ].map((item, i) => (
                  <li key={i} style={{ color: 'var(--grey-text)', lineHeight: '1.7' }}>{item}</li>
                ))}
              </ul>
              <p style={{ marginTop: '16px' }}>If you are a parent or guardian and believe your child has provided personal data to the Platform without your consent, please contact us immediately at connect.ylh@gmail.com.</p>
            </Section>

            <Section number="12" title="Grievance Officer and Escalation to DPBI">
              <p>In accordance with the IT Act, 2000, SPDI Rules, 2011, IT Rules, 2021, and the DPDPA, 2023, we have designated a Grievance Officer to address all privacy-related concerns:</p>
              <div className="glass-card" style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Grievance Officer, Young Legal House</p>
                <p style={{ color: 'var(--grey-text)' }}>Email: <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)' }}>connect.ylh@gmail.com</a></p>
                <p style={{ color: 'var(--grey-text)' }}>Website: <a href="https://www.younglegalhouse.com" style={{ color: 'var(--text-color)' }}>www.younglegalhouse.com</a></p>
                <p style={{ color: 'var(--grey-text)', marginTop: '8px', fontSize: '0.9rem' }}>We will acknowledge all grievances within 24 hours and endeavour to resolve them within 30 days. If unresolved, you may escalate to the Data Protection Board of India (DPBI) through its official digital portal.</p>
              </div>
            </Section>

            <Section number="13" title="International Users">
              <p>The Platform is operated from India and is governed by Indian law. If you access the Platform from outside India, you do so on your own initiative and are responsible for compliance with any local laws applicable to you. By using the Platform, you consent to the transfer and processing of your personal data in India in accordance with this Policy and applicable Indian law.</p>
            </Section>

            <Section number="14" title="Third-Party Websites">
              <p>This Policy applies solely to the Platform. The Platform may contain links to third-party websites. Young Legal House has no control over and assumes no responsibility for the privacy practices, content, or data handling of any third-party website. We strongly encourage you to review the privacy policy of any third-party site you visit before providing any personal information.</p>
            </Section>

            <Section number="15" title="Changes to This Policy">
              <p>We may update this Privacy Policy from time to time to reflect changes in applicable law, our data processing practices, or the Platform's features. All changes will be effective upon posting to the Platform with an updated effective date. Your continued use of the Platform after the posting of a revised Policy constitutes your acceptance of the changes. Where changes are material, we will endeavour to provide prominent notice on the Platform.</p>
            </Section>

            <Section number="16" title="Contact Us">
              <p>For any privacy-related questions, requests to exercise your rights, or concerns about this Policy, please contact:</p>
              <div className="glass-card" style={{ marginTop: '16px' }}>
                <p style={{ fontWeight: 700, marginBottom: '8px' }}>Young Legal House</p>
                <p style={{ color: 'var(--grey-text)' }}>Website: <a href="https://www.younglegalhouse.com" style={{ color: 'var(--text-color)' }}>www.younglegalhouse.com</a></p>
                <p style={{ color: 'var(--grey-text)' }}>Email: <a href="mailto:connect.ylh@gmail.com" style={{ color: 'var(--text-color)' }}>connect.ylh@gmail.com</a></p>
              </div>
            </Section>

          </div>

          {/* Footer reminder */}
          <div className="glass-card" style={{ marginTop: '48px', textAlign: 'center', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontWeight: 700, marginBottom: '8px' }}>REMINDER: Young Legal House does not provide legal advice.</p>
            <p style={{ color: 'var(--grey-text)', fontSize: '0.9rem' }}>Nothing in this Privacy Policy or on the Platform constitutes legal advice. Consult a qualified legal professional for advice specific to your situation.</p>
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
