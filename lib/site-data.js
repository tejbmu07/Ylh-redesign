export const FOOTER_LINKS = {
  Resources: [
    { href: '/blogs', label: 'Insights' },
    { href: '/blogs', label: 'Articles' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/bare-acts', label: 'Bare Acts Library' },
  ],
  Community: [
    { href: '/join', label: 'Members' },
  ],
  Events: [
    { href: '/events', label: 'Upcoming Events' },
    { href: '/events', label: 'Past Events' },
    { href: '/events', label: 'Competitions' },
    { href: '/events', label: 'Workshops' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
  ],
};

export const HOME_STATS = [
  { icon: 'fa-users', value: '8,000+', label: 'Community Members' },
  { icon: 'fa-newspaper', value: '150+', label: 'Articles Published' },
  { icon: 'fa-trophy', value: '40+', label: 'Competitions' },
  { icon: 'fa-scale-balanced', value: '12+', label: 'Legal Domains' },
  { icon: 'fa-user-graduate', value: '25+', label: 'Campus Ambassadors' },
];

export const HOME_FEATURES = [
  { icon: 'fa-book-open', title: 'Knowledge', text: 'Curated insights across multiple legal domains.' },
  { icon: 'fa-briefcase', title: 'Opportunities', text: 'Competitions, events, internships & more.' },
  { icon: 'fa-users', title: 'Community', text: 'A network of driven law students & mentors.' },
  { icon: 'fa-chart-line', title: 'Growth', text: 'Learning today, leading tomorrow.' },
];

export const MOCK_BLOGS = [
  { slug: 'fundamental-rights-india', title: 'The Evolving Landscape of Fundamental Rights in India', category: 'Constitutional Law', readTime: '8 min read', author: 'Arjun Bansal', date: '2026-06-12', featured: true, excerpt: 'An analysis of recent judicial developments shaping fundamental rights jurisprudence in India.', contentType: 'Article', body: ['Fundamental rights continue to form the moral centre of Indian constitutional law. Courts, students, and practitioners are constantly reinterpreting these guarantees in light of technology, speech, privacy, and institutional accountability.', 'For young lawyers, the key lesson is that constitutional protections are not static rules. They are living commitments that must be understood through precedent, public policy, and the lived experience of citizens.', 'This article highlights how recent judicial conversations invite law students to think beyond textbook doctrine and examine the practical consequences of rights-based litigation.'] },
  { slug: 'data-privacy-laws', title: 'The Evolving Landscape of Data Privacy Laws in India', category: 'Corporate Law', readTime: '6 min read', author: 'Priya Sharma', date: '2026-06-08', excerpt: 'How the DPDP Act is reshaping compliance for businesses and legal professionals.', contentType: 'Research Note', body: ['India’s data protection framework is changing how companies collect, process, and store personal information. Compliance is no longer only a technical function; it is now a legal and governance responsibility.', 'Legal teams must understand consent, data fiduciary obligations, user rights, and cross-border data transfer concerns. For students, privacy law is becoming a high-growth practice area with strong interdisciplinary relevance.', 'The most successful lawyers in this space will be those who can translate legal duties into practical systems for businesses and users.'] },
  { slug: 'corporate-governance', title: 'Corporate Governance in the Digital Age', category: 'Corporate Law', readTime: '5 min read', author: 'Rahul Mehta', date: '2026-06-05', excerpt: 'Board accountability and transparency in an era of rapid technological change.', contentType: 'Blog', body: ['Corporate governance today requires boards to understand digital risk, data ethics, cybersecurity, and stakeholder trust. Traditional compliance checklists are no longer enough.', 'Companies that treat governance as a culture rather than a formality are better positioned to manage reputational and regulatory risk.', 'For young legal professionals, this creates opportunities to advise businesses on risk, policy, reporting, and responsible innovation.'] },
  { slug: 'criminal-law-reform', title: 'Criminal Law Reform: A Student\'s Perspective', category: 'Criminal Law', readTime: '7 min read', author: 'Sneha Patel', date: '2026-06-01', excerpt: 'Examining the Bharatiya Nyaya Sanhita and its implications for legal education.', contentType: 'Article', body: ['Criminal law reform invites students to revisit core ideas of punishment, procedure, victim protection, and state power. Reform is meaningful only when it improves both justice delivery and legal certainty.', 'The transition to new criminal statutes also requires careful academic engagement. Students must compare old and new provisions, understand judicial interpretation, and question practical implementation challenges.', 'A strong criminal lawyer must combine statutory clarity with empathy, analytical discipline, and procedural awareness.'] },
  { slug: 'ipr-startups', title: 'IPR Protection for Startups in India', category: 'IPR', readTime: '4 min read', author: 'Vikram Singh', date: '2026-05-28', excerpt: 'Essential intellectual property strategies every startup founder should know.', contentType: 'Guide', body: ['Startups often underestimate intellectual property until a dispute arises. Early protection of brand names, software, creative assets, and inventions can prevent expensive conflicts later.', 'A practical IPR strategy begins with identifying valuable intangible assets, documenting ownership, and choosing the correct protection route.', 'For law students, startup advisory work is a useful way to understand how legal strategy directly supports business growth.'] },
  { slug: 'tax-litigation', title: 'Recent Trends in Tax Litigation', category: 'Tax Law', readTime: '6 min read', author: 'Ananya Reddy', date: '2026-05-22', excerpt: 'Key Supreme Court rulings affecting direct and indirect tax disputes.', contentType: 'Case Note', body: ['Tax litigation demands precision, statutory interpretation, and awareness of commercial realities. Recent disputes show how courts balance revenue interests with taxpayer rights.', 'Students entering this area should develop comfort with finance, accounting basics, and procedural timelines.', 'The best tax arguments are built from clean facts, disciplined interpretation, and an ability to explain complexity with clarity.'] },
];

export const BLOG_CATEGORIES = ['All Blogs', 'Corporate Law', 'Constitutional Law', 'Criminal Law', 'International Law', 'IPR', 'Tax Law', 'ADR'];

export const UPCOMING_EVENTS = [
  { id: 'constitutional-conclave', date: '22 AUG', title: 'Constitutional Conclave', category: 'Workshop', location: 'Online', desc: 'A deep dive into constitutional interpretation with leading jurists and academics.', image: '/design-assets/emblem-scales.jpg' },
  { id: 'legal-research', date: '05 SEP', title: 'Legal Research Workshop', category: 'Workshop', location: 'Online', desc: 'Master legal research methodologies and citation standards used by top firms.', image: '/design-assets/law-library.jpg' },
  { id: 'criminal-trivia', date: '18 OCT', title: 'Criminal Law Trivia Challenge', category: 'Competition', location: 'Online', desc: 'Test your criminal law knowledge in a fast-paced virtual competition format.', image: '/design-assets/lady-justice.jpg' },
];

export const PAST_EVENTS = [
  { title: 'Lex Noctis - Legal Trivia', date: '15 June 2026', image: '/lex-noctis-poster.jpeg' },
  { title: 'National Moot Court Competition 2025', date: 'Dec 2025', image: '/design-assets/hero-courthouse.jpg' },
  { title: 'Legal Research Workshop', date: 'Nov 2025', image: '/design-assets/law-library.jpg' },
  { title: 'Corporate Law Summit', date: 'Oct 2025', image: '/design-assets/law-books.jpg' },
  { title: 'ADR Masterclass', date: 'Sep 2025', image: '/design-assets/emblem-scales.jpg' },
  { title: 'IPR Innovation Forum', date: 'Aug 2025', image: '/design-assets/bg-network-icons.jpg' },
];

export const EVENT_STATS = [
  { icon: 'fa-calendar', value: '25+', label: 'Events Hosted' },
  { icon: 'fa-users', value: '8K+', label: 'Active Participants' },
  { icon: 'fa-building-columns', value: '50+', label: 'Partner Institutions' },
  { icon: 'fa-trophy', value: '10+', label: 'Flagship Events' },
];

export const CORE_VALUES = [
  { icon: 'fa-graduation-cap', title: 'Learning', text: 'Continuous legal education and skill development.' },
  { icon: 'fa-people-group', title: 'Collaboration', text: 'Building together through shared knowledge.' },
  { icon: 'fa-arrow-trend-up', title: 'Growth', text: 'Personal and professional advancement for all members.' },
  { icon: 'fa-scale-balanced', title: 'Integrity', text: 'Upholding the highest ethical standards in law.' },
  { icon: 'fa-lightbulb', title: 'Innovation', text: 'Embracing new approaches to legal practice.' },
];

export const TEAM_MEMBERS = [
  { name: 'Achyuta Narayanan', role: 'Founder of the Community', image: '/Founder.jpeg', linkedIn: 'https://www.linkedin.com/in/achyuta-narayanan/' },
  { name: 'Amishee Gupta', role: 'Co Founder of the Community', image: '/Head.jpeg', linkedIn: 'https://www.linkedin.com/in/amishee-gupta-95b65b303/', imageStyle: { objectPosition: 'center 22%' } },
  { name: 'Tej Talin', role: 'Head of Technology', image: '/Tej-Talin.png', linkedIn: 'https://www.linkedin.com/in/tejtalind/' },
];

export const EMPLOYERS = [
  { slug: 'azb-partners', name: 'AZB & Partners', tier: 'Tier I', type: 'Law Firm', location: 'Mumbai, Maharashtra', desc: 'One of India\'s leading full-service law firms with expertise across corporate, banking, and dispute resolution.', founded: '2004', website: 'https://www.azbpartners.com' },
  { slug: 'shardul-amarchand', name: 'Shardul Amarchand Mangaldas & Co.', tier: 'Tier I', type: 'Law Firm', location: 'New Delhi', desc: 'A premier Indian law firm offering comprehensive legal services across all major practice areas.', founded: '2015', website: 'https://www.amsshardul.com' },
  { slug: 'khaitan-co', name: 'Khaitan & Co', tier: 'Tier I', type: 'Law Firm', location: 'Mumbai, Maharashtra', desc: 'Full-service law firm with a legacy spanning over a century in Indian legal practice.', founded: '1911', website: 'https://www.khaitanco.com' },
  { slug: 'cyril-amarchand', name: 'Cyril Amarchand Mangaldas', tier: 'Tier I', type: 'Law Firm', location: 'Bengaluru, Karnataka', desc: 'India\'s largest full-service law firm, known for M&A, banking, and capital markets work.', founded: '2015', website: 'https://www.cyrilshroff.com' },
];

export const BARE_ACT_CATEGORIES = [
  { name: 'Constitutional Law', count: 12, icon: 'fa-landmark' },
  { name: 'Criminal Law', count: 28, icon: 'fa-gavel' },
  { name: 'Civil Law', count: 15, icon: 'fa-file-lines' },
  { name: 'Corporate Law', count: 18, icon: 'fa-building' },
  { name: 'Labour & Employment', count: 16, icon: 'fa-briefcase' },
  { name: 'Taxation', count: 14, icon: 'fa-coins' },
  { name: 'Intellectual Property', count: 10, icon: 'fa-lightbulb' },
  { name: 'Environmental Law', count: 9, icon: 'fa-leaf' },
  { name: 'Other Laws', count: 13, icon: 'fa-book' },
];

export const BARE_ACTS = [
  { id: 'constitution', title: 'The Constitution of India', year: 1950, category: 'Constitutional Law', preamble: 'WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC...', about: 'The supreme law of India that establishes the framework for governance and defines the fundamental rights and duties of citizens.', features: ['Supreme law of the land', 'Defines structure of government', 'Guarantees fundamental rights', 'Establishes directive principles'] },
  { id: 'ipc', title: 'Indian Penal Code, 1860', year: 1860, category: 'Criminal Law', preamble: 'It is expedient to provide a general Penal Code for India...', about: 'The primary criminal code of India defining offences and prescribing punishments.', features: ['Defines criminal offences', 'Prescribes punishments', 'Covers general exceptions', 'Foundation of criminal jurisprudence'] },
  { id: 'cpc', title: 'Code of Civil Procedure, 1908', year: 1908, category: 'Civil Law', preamble: 'An Act to consolidate and amend the laws relating to the procedure of the Courts of Civil Judicature...', about: 'Governs the procedure followed by civil courts in India for adjudication of civil disputes.', features: ['Civil court procedure', 'Jurisdiction rules', 'Execution of decrees', 'Appeals and revisions'] },
  { id: 'companies-act', title: 'Companies Act, 2013', year: 2013, category: 'Corporate Law', preamble: 'An Act to consolidate and amend the law relating to companies...', about: 'Primary legislation governing incorporation, regulation, and winding up of companies in India.', features: ['Company incorporation', 'Corporate governance', 'Directors\' duties', 'Mergers and acquisitions'] },
  { id: 'dpdp', title: 'Digital Personal Data Protection Act, 2023', year: 2023, category: 'Other Laws', preamble: 'An Act to provide for the processing of digital personal data...', about: 'India\'s comprehensive data protection legislation governing personal data processing.', features: ['Data fiduciary obligations', 'Consent requirements', 'Data subject rights', 'Cross-border transfer rules'] },
];

export const INSTAGRAM_INSIGHTS = [
  { title: 'The Future of Artificial Intelligence in Legal Practice', image: '/design-assets/bg-network-icons.jpg' },
  { title: 'Justice delayed is justice denied', image: '/design-assets/emblem-scales.jpg' },
  { title: 'Know your fundamental rights', image: '/design-assets/law-books.jpg' },
  { title: 'Legal research tips for students', image: '/design-assets/law-library.jpg' },
];
