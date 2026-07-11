# YLH Redesign Spec — Home, About, Team, Join, Contact

## Scope
Only these files: app/page.jsx, app/HomeClient.jsx, app/about/page.jsx,
app/team/page.jsx, app/join/page.jsx, app/contact/page.jsx,
components/Navbar.jsx, components/Footer.jsx, lib/site-data.js.

## Do not touch
app/blogs/**, app/events/page.jsx, app/events/EventsClient.unused.jsx,
sanity/**, lib/sanity.js, app/careers/**, app/bare-acts/** (reference only),
/_archive/**, app/api/join/**, app/api/contact/**, app/api/register/**.

## Already built — reuse, don't duplicate
- redesign.css is imported in layout.jsx; use its .ylh-* classes throughout
  (see app/careers/CareersClient.jsx and app/bare-acts/BareActsClient.jsx as the
  reference pattern for how a page should be structured).
- Data lives in lib/site-data.js: HOME_STATS, HOME_FEATURES, MOCK_BLOGS,
  UPCOMING_EVENTS, CORE_VALUES, TEAM_MEMBERS, INSTAGRAM_INSIGHTS, FOOTER_LINKS.
- Page transitions: app/template.jsx (framer-motion, already wraps every route).
- Entrance animation: components/PageWrapper.jsx (via lib/motion.js pageTransition).
- Scroll reveals: components/AnimatedSection.jsx, components/StaggerGrid.jsx,
  components/WordReveal.jsx, components/Typewriter.jsx.
- Interactive cursor: components/CursorGlow.jsx, already mounted once in layout.jsx.
Use these five existing motion components on the 5 in-scope pages instead of writing
new transition/scroll/cursor logic. Only extend them if a mockup section genuinely
isn't covered by what exists.

## Theme rules
- Light mode (body.light-mode): unchanged, exactly as in globals.css.
- Dark mode (body.dark-mode): use redesign.css's monochrome black/white/gray tokens
  (--ylh-black, --ylh-white, --ylh-gray-*, --ylh-card, --ylh-border) — not the old
  grey theme. No gold/color accents anywhere.
- Toggle already works in Navbar.jsx (localStorage-persisted) — confirm it switches
  cleanly with no flash of unstyled content, and that the transition between themes
  is smooth (animate background/color via CSS transition, not an instant snap).

## Global nav (Navbar.jsx)
Home | Blogs | Events | About | Team | Join Us | Contact, no Sign In, single
"Join the Community" button. Content is already correct — restyle only if needed
to match mockup's dark pill nav.

## Global footer (Footer.jsx)
Rebuild using .ylh-footer* classes, sourced from FOOTER_LINKS in lib/site-data.js,
with these items removed first:
- Resources: remove Case Notes, Legal News (keep Insights, Articles, Blogs, Bare Acts Library)
- Community: remove Ambassadors, Mentorship, Careers (keep Members)
- Events / Company columns: unchanged

## Page 1 — Home (app/page.jsx + HomeClient.jsx)
Hero (eyebrow "India's Elite Law Network", H1 "Young Legal House", subhead
"Bridging legal education, competitions, research, and opportunity.", buttons
"Join the Community"→/join, "Explore Insights"→/blogs) → pull-quote banner
("Where law students evolve into legal professionals." — YLH, no stats bar above it)
→ Latest Legal Insights grid (INSTAGRAM_INSIGHTS) → Recent Blogs grid (first 4 of
MOCK_BLOGS, "View all blogs →"/blogs, add temp local thumbnail mapping in
HomeClient.jsx only) → Upcoming Events grid (UPCOMING_EVENTS, "See All Events →"/events)
→ About YLH teaser (HOME_FEATURES 2x2 grid, "Know More About Us →"/about).

Image: /public/design-assets/home-hero.jpg (hero, right side).
Images: /public/design-assets/home-insight-01.jpg through home-insight-04.jpg
(the 4 Latest Legal Insights tiles, in order).

## Page 2 — About (app/about/page.jsx)
Header (eyebrow "About the Initiative", H1 "About Young Legal House", existing
subhead) → existing body paragraphs (unchanged) → single centered "Founder's Vision"
quote card only (Achyuta R — no second "Architect's Blueprint" card, don't leave a
half-empty 2-column grid) → Core Values (CORE_VALUES, 5-across) → CTA band
"Be Part of the Movement" / "Join the Community →".

Image: /public/design-assets/about-hero.jpg (header, right side).
Image: /public/design-assets/about-panel-texture.jpg (body panel background/watermark).

## Page 3 — Team (app/team/page.jsx)
Header ("Meet the Team" / "The People Behind YLH" / existing subhead) → 3-across
team grid from TEAM_MEMBERS (images already at /Founder.jpeg, /Head.jpeg,
/Tej-Talin.png — no new photos needed) → "And a Growing Community..." callout,
existing copy.

## Page 4 — Join Us (app/join/page.jsx)
Keep the existing Careers/Internships form (/api/join, file upload) and Premium
card fully functional — restyle only. Left column: eyebrow, H1 "Shape the Future
of Law", intro, "For Aspiring Legal Professionals" / "For Knowledge Seekers" items.
Right column: existing form, restyled to .ylh-form-* classes.

Image: /public/design-assets/join-section-bg.jpg (left column background/texture).

## Page 5 — Contact (app/contact/page.jsx)
Keep existing form (/api/contact) and Contact Details card functional — restyle
only, using .ylh-* card classes to match mockup.

Image: /public/design-assets/contact-section-bg.jpg (page background/accent).

## Images — full mapping
Founder, co-founder, and Tej Talin photos, plus the site logo, already exist in
/public and do not need to be re-supplied:
- /Founder.jpeg (Achyuta Narayanan — Team page + About "Founder's Vision")
- /Head.jpeg (Amishee Gupta — Team page)
- /Tej-Talin.png (Tej Talin — Team page)
- existing logo file already referenced in Navbar.jsx/Footer.jsx

The 9 new images (see IMAGE_NAMING.md for the exact filenames) go in
/public/design-assets/ alongside the 9 files already used by Careers/Bare Acts
(hero-courthouse.jpg, emblem-scales.jpg, lady-justice.jpg, law-books.jpg,
law-library.jpg, bg-circles.jpg, bg-network-dots.jpg, bg-network-icons.jpg,
bg-waves.jpg — do not overwrite these). If any provided image's destination isn't
obvious, ask before placing it rather than guessing.

The "Latest Legal Insights" tiles and blog thumbnails on Home use this temporary
imagery intentionally — once Blogs/Events are migrated to Sanity, each post/insight
will carry its own image automatically. Don't over-invest in this temporary imagery.

## QA before done
- Dark mode fully monochrome, light mode unchanged.
- No Sign In / no Stats Bar / only one About quote / footer links match the list above.
- Blogs and Events pages render unchanged.
- Join/Contact forms still submit successfully.
- Nothing in /_archive was touched, restored, or imported.
- Theme switch, page transitions, scroll reveals, and cursor glow all work smoothly
  with no layout jump or flash across all 5 pages, and respect prefers-reduced-motion.
- Site is fully responsive (mobile / tablet / desktop).
