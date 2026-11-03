---
layout: default
title: Curriculum Vitae | Dr. Elina Takola
permalink: /resume/
---

<!--
  Academic CV / publications page, adapted from ETakola_CV_Publications.pdf.
  Single-page academic CV for GitHub Pages. The self-contained version below
  includes the forest picture and CSS inside resume.md. The /resume/ address
  and existing Jekyll layout are preserved.
-->

<style>
/*
  AUTUMN FIELD JOURNAL · E. E. TAKOLA
  All rules are scoped to .atn-cv so this page does not change the rest of
  the Jekyll site. No external images, CSS files or fonts are needed.
*/
.atn-cv {
  --atn-ink: #352f2d;
  --atn-muted: #70665f;
  --atn-wine: #593f43;
  --atn-rust: #9d543c;
  --atn-rust-dark: #753e34;
  --atn-ochre: #b27b40;
  --atn-olive: #61704d;
  --atn-paper: #fffefa;
  --atn-cream: #faf4eb;
  --atn-stroke: #e7d9c8;
  box-sizing: border-box;
  width: min(100% - 34px, 1040px);
  margin: 32px auto 70px;
  padding: 0 0 26px;
  color: var(--atn-ink);
  background: var(--atn-paper);
  font: 400 15.5px/1.72 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.atn-cv *, .atn-cv *::before, .atn-cv *::after { box-sizing: border-box; }
.atn-cv h1, .atn-cv h2, .atn-cv h3, .atn-cv p, .atn-cv ul { margin-top: 0; }
.atn-cv h2, .atn-cv h3 { border: 0; }
.atn-cv p { margin-bottom: 12px; }
.atn-cv a { color: var(--atn-rust-dark); text-decoration: none; border-bottom: 1px solid #cba88d; transition: color .18s ease, border-color .18s ease; }
.atn-cv a:hover, .atn-cv a:focus { color: var(--atn-rust); border-bottom-color: currentColor; }
.atn-cv a:focus-visible { outline: 2px solid var(--atn-ochre); outline-offset: 3px; }

/* The cover: autumn typography + aerial forest artwork. */
.atn-cv .atn-hero {
  overflow: hidden;
  border-radius: 23px;
  border: 1px solid #ddcbb5;
  border-top: 5px solid var(--atn-rust);
  background: linear-gradient(112deg, #faf4eb 0%, #f5eadc 100%);
  box-shadow: 0 14px 36px rgba(62,45,32,.095);
}
.atn-cv .atn-hero-main {
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(260px, .84fr);
  align-items: center;
  gap: 27px;
  padding: 35px 35px 34px 44px;
}
.atn-cv .atn-eyebrow { display: flex; align-items: center; gap: 9px; color: var(--atn-olive); font-size: 10.5px; font-weight: 750; letter-spacing: .16em; text-transform: uppercase; }
.atn-cv .atn-hero h1 {
  color: var(--atn-wine);
  font: 400 clamp(37px, 4.7vw, 53px)/1.1 Georgia, "Times New Roman", serif;
  letter-spacing: -.035em;
  margin: 24px 0 17px;
}
.atn-cv .atn-hero h1 span { color: var(--atn-rust); }
.atn-cv .atn-name-rule { display: block; width: 72px; height: 3px; background: var(--atn-ochre); border-radius: 3px; margin: 0 0 18px; }
.atn-cv .atn-subtitle { max-width: 490px; margin-bottom: 12px; color: #4e493f; font-size: 16px; font-weight: 600; letter-spacing: -.01em; }
.atn-cv .atn-affiliation { font-size: 13px; color: var(--atn-muted); margin-bottom: 0; }
.atn-cv .atn-art {
  min-width: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 5;
  border-radius: 17px;
  border: 1px solid rgba(108, 76, 56, .2);
  background: #344336;
  box-shadow: 0 15px 34px rgba(48,43,34,.18);
}
.atn-cv .atn-art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.atn-cv .atn-art::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 55%, rgba(22,35,25,.12) 100%);
}
.atn-cv .atn-social {
  display: flex; align-items: center; flex-wrap: wrap;
  gap: 8px 9px; padding: 15px 37px 18px 44px;
  background: #fffaf2; border-top: 1px solid #e5d7c4;
}
.atn-cv .atn-social a { color: var(--atn-rust-dark); font-size: 12px; font-weight: 650; line-height: 1.5; background: #fffefa; border: 1px solid #dcc5ad; padding: 6px 12px; border-radius: 40px; }
.atn-cv .atn-social a:hover { background: #f1e5d2; border-color: var(--atn-rust); }
.atn-cv .atn-nav { display: flex; gap: 3px; flex-wrap: wrap; padding: 19px 2px 11px; margin: 0 0 16px; border-bottom: 1px solid var(--atn-stroke); }
.atn-cv .atn-nav a { display: inline-block; padding: 5px 12px; border: 0; border-radius: 40px; color: var(--atn-muted); font-size: 12px; font-weight: 700; }
.atn-cv .atn-nav a:hover { background: #f2e8da; color: var(--atn-rust-dark); }
.atn-cv .atn-content { padding: 0 17px; }
.atn-cv .atn-profile { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(210px, .75fr); gap: 26px; align-items: stretch; padding: 12px 0 23px; }
.atn-cv .atn-profile-text { border-left: 3px solid var(--atn-ochre); padding: 8px 15px 7px 22px; }
.atn-cv .atn-kicker { font-size: 10.5px; color: var(--atn-rust); font-weight: 800; text-transform: uppercase; letter-spacing: .15em; margin: 0 0 8px; }
.atn-cv .atn-profile-text p:last-child { margin-bottom: 0; }
.atn-cv .atn-quickfacts { background: var(--atn-cream); border: 1px solid var(--atn-stroke); border-radius: 13px; padding: 16px 19px; }
.atn-cv .atn-fact + .atn-fact { border-top: 1px solid #e8daca; padding-top: 10px; margin-top: 10px; }
.atn-cv .atn-fact strong { color: var(--atn-wine); font-size: 13.8px; display: block; line-height: 1.45; }
.atn-cv .atn-fact span { color: var(--atn-muted); font-size: 12px; display: block; line-height: 1.5; }
.atn-cv section.atn-section { margin: 20px 0 40px; scroll-margin-top: 24px; }
.atn-cv .atn-heading { display: flex; gap: 15px; align-items: baseline; border-bottom: 1px solid var(--atn-stroke); padding-bottom: 11px; margin-bottom: 23px; }
.atn-cv .atn-heading .atn-n { flex: 0 0 auto; color: var(--atn-ochre); font: 400 15px Georgia, serif; }
.atn-cv .atn-heading h2 { font: 400 29px/1.22 Georgia, "Times New Roman", serif; letter-spacing: -.02em; color: var(--atn-wine); margin: 0; }
.atn-cv .atn-card { border-left: 2px solid #d6b18b; padding: 1px 0 1px 22px; margin: 0 0 26px 5px; position: relative; }
.atn-cv .atn-card::before { content: ""; position: absolute; width: 9px; height: 9px; background: var(--atn-rust); border: 3px solid var(--atn-paper); border-radius: 50%; left: -5px; top: 7px; }
.atn-cv .atn-card:last-child { margin-bottom: 0; }
.atn-cv .atn-card-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px 16px; }
.atn-cv .atn-card h3 { color: var(--atn-ink); font-size: 16.4px; line-height: 1.4; margin: 0 0 4px; font-weight: 750; }
.atn-cv .atn-date { white-space: normal; color: var(--atn-rust); font-size: 12px; font-weight: 750; letter-spacing: .02em; }
.atn-cv .atn-org { color: var(--atn-olive); font-weight: 650; margin-bottom: 2px; }
.atn-cv .atn-note { color: var(--atn-muted); font-size: 13.5px; margin-bottom: 5px; }
.atn-cv .atn-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.atn-cv .atn-minicard { background: var(--atn-cream); border: 1px solid var(--atn-stroke); border-radius: 12px; padding: 18px 21px; }
.atn-cv .atn-minicard h3 { color: var(--atn-rust-dark); font: 400 20px Georgia, serif; margin: 0 0 8px; }
.atn-cv .atn-minicard p { margin: 0; font-size: 13.5px; }
.atn-cv .atn-honour { display: grid; grid-template-columns: 60px minmax(0,1fr); gap: 16px; margin: 0 0 18px; align-items: baseline; }
.atn-cv .atn-honour .atn-year { color: var(--atn-ochre); font: 400 18px Georgia, serif; }
.atn-cv .atn-honour strong { display: block; line-height: 1.45; }
.atn-cv .atn-honour p { font-size: 13.5px; color: var(--atn-muted); margin: 2px 0 0; }
.atn-cv .atn-list { list-style: none; margin: 0; padding: 0; }
.atn-cv .atn-list li { position: relative; padding-left: 19px; margin: 0 0 11px; }
.atn-cv .atn-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; position: absolute; left: 1px; top: .7em; background: var(--atn-ochre); }
.atn-cv .atn-course { padding: 0 0 18px; margin-bottom: 17px; border-bottom: 1px dashed var(--atn-stroke); }
.atn-cv .atn-course:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
.atn-cv .atn-course h3 { font-size: 15.5px; color: var(--atn-ink); margin: 0 0 4px; line-height: 1.5; }
.atn-cv .atn-course p { margin: 0 0 3px; font-size: 13.5px; color: var(--atn-muted); }
.atn-cv .atn-course .atn-course-title { color: var(--atn-olive); font-weight: 700; font-size: 14px; }
.atn-cv .atn-subhead { color: var(--atn-rust-dark); font: 400 23px/1.3 Georgia, serif; margin: 28px 0 14px; }
.atn-cv .atn-introline { color: var(--atn-muted); font-size: 13.5px; margin: -7px 0 18px; }
.atn-cv .atn-pubs { padding: 0; margin: 0; list-style: none; }
.atn-cv .atn-pub { display: grid; grid-template-columns: 56px minmax(0,1fr); gap: 14px; border-top: 1px solid #eee4d8; padding: 17px 0; }
.atn-cv .atn-pub:first-child { border-top: 0; padding-top: 4px; }
.atn-cv .atn-pub-year { color: var(--atn-ochre); font: 400 18px Georgia, serif; padding-top: 2px; }
.atn-cv .atn-pub-title { display: inline; font-size: 15.1px; font-weight: 740; line-height: 1.45; }
.atn-cv .atn-pub p { margin: 5px 0 0; color: var(--atn-muted); font-size: 13.5px; line-height: 1.65; overflow-wrap: anywhere; }
.atn-cv .atn-pub em { color: #55433b; }
.atn-cv .atn-status { display: inline-block; background: #f1e5d4; border: 1px solid #e7d0b7; color: #76503c; padding: 2px 7px; border-radius: 5px; font-size: 11px; line-height: 1.4; font-weight: 700; }
.atn-cv .atn-footer { margin: 35px 17px 0; padding: 16px 0 0; border-top: 2px solid #b78355; color: var(--atn-muted); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 20px; }
@media (max-width: 720px) {
  .atn-cv { font-size: 14.7px; width: min(100% - 20px, 1040px); margin: 14px auto 35px; }
  .atn-cv .atn-hero { border-radius: 16px; }
  .atn-cv .atn-hero-main { grid-template-columns: 1fr; gap: 18px; padding: 27px 23px 22px; }
  .atn-cv .atn-hero h1 { font-size: clamp(35px, 8.8vw, 49px); margin: 19px 0 15px; }
  .atn-cv .atn-subtitle { font-size: 14.5px; }
  .atn-cv .atn-art { width: min(100%, 340px); margin: 1px auto 0; }
  .atn-cv .atn-social { padding: 14px 21px 18px; }
  .atn-cv .atn-content { padding: 0 9px; }
  .atn-cv .atn-profile, .atn-cv .atn-columns { grid-template-columns: 1fr; gap: 17px; }
  .atn-cv .atn-heading h2 { font-size: 25px; }
  .atn-cv .atn-nav { gap: 2px; }
  .atn-cv .atn-nav a { padding: 5px 9px; }
  .atn-cv .atn-pub { grid-template-columns: 42px minmax(0,1fr); gap: 10px; }
  .atn-cv .atn-pub-year { font-size: 16px; }
  .atn-cv .atn-card { padding-left: 16px; }
}
@media (prefers-reduced-motion: reduce) {
  .atn-cv a { transition: none; }
}
@media print {
  .atn-cv { max-width: none; width: 100%; padding: 0; margin: 0; color: #222; background: white; font-size: 11pt; }
  .atn-cv .atn-hero { box-shadow: none; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .atn-cv .atn-nav { display: none; }
  .atn-cv a { color: #683c2c; }
  .atn-cv section, .atn-cv .atn-card, .atn-cv .atn-pub { break-inside: avoid; }
}
</style>

<div class="atn-cv" id="resume-page">

<header class="atn-hero">
    <div class="atn-hero-main">
      <div class="atn-hero-copy">
        <div class="atn-eyebrow" data-resume-i18n="resume.eyebrow">Academic CV &amp; publications</div>
        <h1>Eleni-Elda<br><span>(Elina) Takola</span></h1>
        <span class="atn-name-rule" aria-hidden="true"></span>
        <p class="atn-subtitle">Ecologist &nbsp;&middot;&nbsp; Meta-analyst &nbsp;&middot;&nbsp; Research Group Leader</p>
        <p class="atn-affiliation">BIOECOS Group · Helmholtz Centre for Environmental Research – UFZ<br>Leipzig, Germany</p>
      </div>

      <div class="atn-art">
        <img src="{{ site.author.avatar | prepend: site.baseurl }}" width="820" height="1025" loading="eager" decoding="async" alt="Profile image">
      </div>
    </div>
    <div class="atn-social" aria-label="Academic and professional profiles">
      <a href="mailto:elina.takola@gmail.com">Email</a>
      <a href="https://orcid.org/0000-0003-1268-5513">ORCID</a>
      <a href="https://www.ufz.de/index.php?en=50117">UFZ profile</a>
      <a href="https://scholar.google.com/citations?user=kmt3hFoAAAAJ&amp;hl=en">Google Scholar</a>
      <a href="https://de.linkedin.com/in/dr-elina-takola">LinkedIn</a>
      <a href="https://github.com/ETakola">GitHub</a>
      <a href="https://www.researchgate.net/profile/Elina-Takola">ResearchGate</a>
    </div>
  </header>

  <nav class="atn-nav" aria-label="On this page">
    <a href="#profile" data-resume-i18n="resume.nav.profile">Profile</a>
    <a href="#career" data-resume-i18n="resume.nav.career">Career</a>
    <a href="#education" data-resume-i18n="resume.nav.education">Education</a>
    <a href="#honours" data-resume-i18n="resume.nav.honours">Honours</a>
    <a href="#teaching" data-resume-i18n="resume.nav.teaching">Teaching</a>
    <a href="#supervision" data-resume-i18n="resume.nav.supervision">Supervision</a>
    <a href="#service" data-resume-i18n="resume.nav.service">Service</a>
    <a href="#publications" data-resume-i18n="resume.nav.publications">Publications</a>
  </nav>

  <div class="atn-content">
    <div class="atn-profile" id="profile">
      <div class="atn-profile-text">
        <p class="atn-kicker" data-resume-i18n="resume.profile.kicker">Research profile</p>
        <p>Greek ecologist and meta-analyst leading the <a href="https://www.ufz.de/index.php?en=37501">BIOECOS Group</a> at the Helmholtz Centre for Environmental Research – UFZ in Leipzig, Germany.</p>
      </div>
      <aside class="atn-quickfacts" aria-label="At a glance">
        <p class="atn-kicker" data-resume-i18n="resume.profile.glance">At a glance</p>
        <div class="atn-fact"><strong>BIOECOS Group Leader</strong><span>UFZ · Since September 2024</span></div>
        <div class="atn-fact"><strong>Individualised niches &amp; evidence synthesis</strong><span>Research interests</span></div>
        <div class="atn-fact"><strong>540 Google Scholar citations</strong><span>As of 29 August 2026</span></div>
      </aside>
    </div>

    <section class="atn-section" id="career">
      <div class="atn-heading"><span class="atn-n">01</span><h2 data-resume-i18n="resume.sections.academicAppointments">Academic appointments</h2></div>
      <div class="atn-card">
        <div class="atn-card-head"><h3>Research Group Leader · BIOECOS</h3><span class="atn-date">Sep 2024 – present</span></div>
        <p class="atn-org">Helmholtz Centre for Environmental Research – UFZ</p>
        <p class="atn-note"><a href="https://www.ufz.de/index.php?en=34212">Department of Computational Landscape Ecology</a> · <a href="https://www.ufz.de/index.php?en=37501">BIOECOS Group</a>.</p>
      </div>
      <div class="atn-card">
        <div class="atn-card-head"><h3>Postdoctoral Researcher</h3><span class="atn-date">Nov 2022 – Sep 2024</span></div>
        <p class="atn-org">Helmholtz Centre for Environmental Research – UFZ</p>
        <p class="atn-note">Department of Computational Landscape Ecology · Advisor: Dr Michael Beckmann</p>
      </div>
    </section>

    <section class="atn-section" id="education">
      <div class="atn-heading"><span class="atn-n">02</span><h2 data-resume-i18n="resume.sections.education">Education</h2></div>
      <div class="atn-card">
        <div class="atn-card-head"><h3>PhD · Ecology</h3><span class="atn-date">2018 – 2022</span></div>
        <p class="atn-org">Friedrich Schiller University Jena · Germany</p>
        <p><em>“The behavioural ecology of individualized niches in the light of meta-analysis”</em> · Supervisor: Prof. Holger Schielzeth.</p>
      </div>
      <div class="atn-card">
        <div class="atn-card-head"><h3>MSc · Forestry and Natural Environment</h3><span class="atn-date">2016 – 2018</span></div>
        <p class="atn-org">Aristotle University of Thessaloniki · Greece</p>
        <p><em>“Herpetofauna-habitat relationships in the suburban forest of Thessaloniki”</em> · Supervisor: Prof. Dimitrios Bakaloudis.</p>
      </div>
      <div class="atn-card">
        <div class="atn-card-head"><h3>BSc · Forestry and Natural Environment</h3><span class="atn-date">2010 – 2016</span></div>
        <p class="atn-org">Aristotle University of Thessaloniki · Greece</p>
      </div>
    </section>

    <section class="atn-section" id="honours">
      <div class="atn-heading"><span class="atn-n">03</span><h2 data-resume-i18n="resume.sections.honours">Honours &amp; awards</h2></div>
      <div class="atn-honour"><span class="atn-year">2026</span><div><strong>Shortlisted for the Ecography E4 Award</strong><p>Ecography journal.</p></div></div>
      <div class="atn-honour"><span class="atn-year">2021</span><div><strong>Poster Prize</strong><p>Annual Meeting of the German Ecological Society (GfÖ).</p></div></div>
      <div class="atn-honour"><span class="atn-year">2019</span><div><strong>Poster Prize</strong><p>Meeting of the German Zoological Society (DZG), Behavioural Biology Section.</p></div></div>
      <div class="atn-honour"><span class="atn-year">2017</span><div><strong>Travel Grant</strong><p>Technical University of Denmark and Aristotle University of Thessaloniki, for participation in a research exchange.</p></div></div>
      <div class="atn-honour"><span class="atn-year">2016</span><div><strong>Commendation of Excellence</strong><p>Aristotle University of Thessaloniki, for excellence in undergraduate studies.</p></div></div>
      <div class="atn-honour"><span class="atn-year">2010</span><div><strong>Award and Commendation of Excellence</strong><p>Aristotle University of Thessaloniki, for the highest grade in the entrance exam.</p></div></div>
    </section>

    <section class="atn-section" id="teaching">
      <div class="atn-heading"><span class="atn-n">05</span><h2 data-resume-i18n="resume.sections.teaching">Teaching experience</h2></div>
      <div class="atn-course">
        <div class="atn-card-head"><h3>Martin Luther University Halle-Wittenberg</h3><span class="atn-date">16–19 Jun 2025</span></div>
        <p>Teaching · PI: Prof. Claudia Fricke</p>
        <p class="atn-course-title">Grundlagen der Tierökologie (BIO.07707.01)</p>
      </div>
    </section>

    <section class="atn-section" id="supervision">
      <div class="atn-heading"><span class="atn-n">06</span><h2 data-resume-i18n="resume.sections.supervision">Supervision &amp; mentoring</h2></div>
      <p>As leader of the BIOECOS Group, I coordinate student supervision, recruitment, budgets, reporting and regular research meetings.</p>
    </section>

    <section class="atn-section" id="service">
      <div class="atn-heading"><span class="atn-n">08</span><h2 data-resume-i18n="resume.sections.service">Scientific service &amp; community</h2></div>
      <div class="atn-columns">
        <div>
          <h3 class="atn-subhead">Committees &amp; review</h3>
          <ul class="atn-list">
            <li>Member, IP1 Board / Steering Committee, Helmholtz Centre for Environmental Research – UFZ.</li>
          </ul>
        </div>
        <div>
          <h3 class="atn-subhead">Organisation &amp; affiliations</h3>
          <ul class="atn-list">
            <li>Member of BES, SORTEE, GfÖ, ESA and HELECOS.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="atn-section" id="publications">
      <div class="atn-heading"><span class="atn-n">10</span><h2 data-resume-i18n="resume.sections.publications">Publications &amp; research outputs</h2></div>
      <p class="atn-introline">Peer-reviewed articles, manuscripts, preprints, software and science communication.</p>
    </section>
  </div>

  <footer class="atn-footer"><span>© Eleni-Elda (Elina) Takola · Leipzig, Germany</span><span><a href="https://orcid.org/0000-0003-1268-5513">ORCID: 0000-0003-1268-5513</a></span></footer>
</div>

<script>
window.resumeTranslations = {
  en: {
    'resume.eyebrow': 'Academic CV & publications',
    'resume.nav.profile': 'Profile',
    'resume.nav.career': 'Career',
    'resume.nav.education': 'Education',
    'resume.nav.honours': 'Honours',
    'resume.nav.teaching': 'Teaching',
    'resume.nav.supervision': 'Supervision',
    'resume.nav.service': 'Service',
    'resume.nav.publications': 'Publications',
    'resume.profile.kicker': 'Research profile',
    'resume.profile.glance': 'At a glance',
    'resume.sections.academicAppointments': 'Academic appointments',
    'resume.sections.education': 'Education',
    'resume.sections.honours': 'Honours & awards',
    'resume.sections.teaching': 'Teaching experience',
    'resume.sections.supervision': 'Supervision & mentoring',
    'resume.sections.service': 'Scientific service & community',
    'resume.sections.publications': 'Publications & research outputs'
  },
  es: {
    'resume.eyebrow': 'CV académico y publicaciones',
    'resume.nav.profile': 'Perfil',
    'resume.nav.career': 'Carrera',
    'resume.nav.education': 'Educación',
    'resume.nav.honours': 'Honores',
    'resume.nav.teaching': 'Docencia',
    'resume.nav.supervision': 'Supervisión',
    'resume.nav.service': 'Servicio',
    'resume.nav.publications': 'Publicaciones',
    'resume.profile.kicker': 'Perfil de investigación',
    'resume.profile.glance': 'Resumen',
    'resume.sections.academicAppointments': 'Nombramientos académicos',
    'resume.sections.education': 'Educación',
    'resume.sections.honours': 'Honores y premios',
    'resume.sections.teaching': 'Experiencia docente',
    'resume.sections.supervision': 'Supervisión y tutoría',
    'resume.sections.service': 'Servicio científico y comunidad',
    'resume.sections.publications': 'Publicaciones y producción de investigación'
  },
  zh: {
    'resume.eyebrow': '学术简历与论文',
    'resume.nav.profile': '简介',
    'resume.nav.career': '职业经历',
    'resume.nav.education': '教育',
    'resume.nav.honours': '荣誉',
    'resume.nav.teaching': '教学',
    'resume.nav.supervision': '指导',
    'resume.nav.service': '服务',
    'resume.nav.publications': '论文',
    'resume.profile.kicker': '研究概况',
    'resume.profile.glance': '概览',
    'resume.sections.academicAppointments': '学术任职',
    'resume.sections.education': '教育背景',
    'resume.sections.honours': '荣誉与奖项',
    'resume.sections.teaching': '教学经验',
    'resume.sections.supervision': '指导与 mentoring',
    'resume.sections.service': '科学服务与社区参与',
    'resume.sections.publications': '出版物与研究成果'
  }
};

window.translateResumePage = function() {
  var locale = 'en';
  try {
    locale = localStorage.getItem('siteLocale') || 'el';
  } catch (e) {}

  var map = window.resumeTranslations[locale] || window.resumeTranslations.en;
  document.querySelectorAll('[data-resume-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-resume-i18n');
    if (map[key]) {
      el.textContent = map[key];
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.translateResumePage);
} else {
  window.translateResumePage();
}
</script>
