"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, BarChart3, CalendarCheck, Check, Clock3, FileCheck2, LockKeyhole, Network, PlaySquare, Target, UserRoundX } from "lucide-react";
import acquirelyLogo from "@/app/assests/logo.png";
import { FounderShowcase } from "@/components/FoundersSection";
import styles from "./page.module.css";

const bookingUrl = "https://forms.acquirely.in/acquirely/form/GTMSCHOOLS/formperma/3Gb1GqAVHPSZCZFkDeMmj6xLyS7fA2CNX1xE2ksm-m4";

const problems = [
  { icon: LockKeyhole, title: "The front-desk wall", body: "The receptionist takes a message. The principal's inbox stays unopened. You never reach the gate, let alone get through it." },
  { icon: UserRoundX, title: "Wrong-person meetings", body: "You finally get in, and it's a coordinator who can't approve a rupee. The director, trustee or chairman never sees you." },
  { icon: Network, title: "Founder-network dependency", body: "Your pipeline runs on whichever principals your founder happens to know. When the rolodex runs out, growth stalls." },
  { icon: Clock3, title: "Days lost, nothing tracked", body: "Reps burn a full day in reception for one uncertain meeting, and you can't tell which effort ever reached a decision-maker." },
];
const shifts = [
  ["Reps waiting in reception", "Deciders book calls with you"],
  ["Meetings with coordinators", "Meetings with budget-holders"],
  ["Pipeline = who you know", "Pipeline = a repeatable system"],
  ["Days lost, nothing tracked", "Every meeting booked & tracked"],
];

const flow = [
  { icon: Target, title: "Reach deciders", body: "By role, board & city" },
  { icon: CalendarCheck, title: "They book a call", body: "Inbound & warm" },
  { icon: PlaySquare, title: "You demo", body: "To the actual decider" },
  { icon: FileCheck2, title: "Someone says yes", body: "Real budget authority" },
  { icon: BarChart3, title: "Follow up", body: "Direct access, tracked" },
];

const monthlyFeatures = ["Full Meta + Google management", "All static creatives & video editing", "Lead capture", "Qualified appointments booked"];
const sprintFeatures = [...monthlyFeatures, "Email & WhatsApp reminder system", "Email nurturing system"];
const fitYes = ["Edtech, smart-classroom, programs, labs or services", "You need to reach principals, directors or trustees", "Selling into schools across a region or nationally", "A team that can run demos & close"];
const fitNo = ["One school or one-city only", "No one to run the booked meetings", "A product schools don't actually need", "Chasing the cheapest possible leads"];

const faqs = [
  { question: "Will this replace my sales team?", answer: "No. It feeds them. Your reps walk into warm meetings with decision-makers who asked to see your product. The system books; your team closes." },
  { question: "Can you really reach principals and trustees on Meta & Google?", answer: "Yes. School leaders and owners are on these platforms daily. We target by role, board and geography, so budget only touches decision-makers, not the front desk." },
  { question: "I've tried cold email and calling. How is this different?", answer: "Cold outreach hits the gate. We get you invited in with a system that books qualified meetings, optimises for the right person rather than form-fills, and tracks every one." },
  { question: "Who runs the demo?", answer: "You do. You know your product best. We run the engine that books the meetings and tracks every rupee; your team runs the demo and the close." },
  { question: "How fast will I see meetings?", answer: "Early signals arrive in the first two weeks. A predictable pipeline of qualified meetings builds over 4–6 weeks as the system learns and we iterate." },
];

function FeatureList({ items }: { items: string[] }) {
  return <ul className={styles.featureList}>{items.map((item) => <li key={item}><span><Check aria-hidden="true" /></span>{item}</li>)}</ul>;
}

function DecisionLadder({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.ladder} ${className}`} aria-label="School decision-maker access ladder">
      <p className={styles.ladderTop}>Decisions happen here</p>
      {[["Chairman / Trustee", "signs the cheque"], ["Director", "holds the budget"], ["Principal", "sets direction"]].map(([role, note]) => (
        <div className={styles.ladderLocked} key={role}><strong><LockKeyhole aria-hidden="true" />{role}</strong><span>{note}</span></div>
      ))}
      <div className={styles.ladderFaint}><strong>Coordinator</strong><span>no budget authority</span></div>
      <div className={styles.ladderYou}><strong>Front desk</strong><span>takes a message · you&apos;re here</span></div>
      <p className={styles.ladderBottom}>Your reps land here <ArrowDown aria-hidden="true" /></p>
    </div>
  );
}

export default function EdTechLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <a href="#top" className={styles.logo} aria-label="Acquirely home"><Image src={acquirelyLogo} alt="Acquirely" priority /></a>
          <a className={styles.navCta} href={bookingUrl}>Book an Appointment</a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>For companies that sell to schools</span>
            <h1>You built something schools need. <em>You&apos;re stuck talking to the front desk.</em></h1>
            <p className={styles.heroSub}>We get principals, directors and trustees, the people who actually sign off, booking calls with you.</p>
            <DecisionLadder className={styles.ladderMobile} />
            <div className={styles.ctaRow}><a className={styles.primaryButton} href={bookingUrl}>Book an Appointment <ArrowRight aria-hidden="true" /></a></div>
            <p className={styles.urgency}>Only 3 spots available this quarter. <strong>We work each account personally.</strong></p>
            <div className={styles.trustRow}>
              <div><strong>11+</strong><span>Years inside education</span></div>
              <div><strong>2,000+</strong><span>Schools reached</span></div>
              <div><strong>₹30Cr+</strong><span>Ad spend managed</span></div>
            </div>
          </div>
          <DecisionLadder className={styles.ladderDesktop} />
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>The real problem</span><h2>Your toughest competitor isn&apos;t another company. It&apos;s the front desk.</h2></div>
          <div className={styles.problemGrid}>{problems.map(({ icon: Icon, title, body }) => <article className={styles.problemCard} key={title}><span className={styles.cardIcon}><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.blueSection}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={`${styles.eyebrow} ${styles.eyebrowLight}`}>The shift</span><h2>Stop knocking on the gate. Get invited in.</h2></div>
          <div className={styles.shiftList}>{shifts.map(([oldWay, newWay]) => <div className={styles.shiftRow} key={oldWay}><span>{oldWay}</span><ArrowRight aria-hidden="true" /><strong>{newWay}</strong></div>)}</div>
        </div>
      </section>

      <section className={styles.section} id="how">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>How it works</span><h2>From the front desk to the decision-maker.</h2></div>
          <div className={styles.flowGrid}>{flow.map(({ icon: Icon, title, body }, index) => <article className={styles.flowCard} key={title}><span className={styles.flowIcon}><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{body}</p>{index < flow.length - 1 && <span className={styles.flowArrow}><ArrowRight aria-hidden="true" /></span>}</article>)}</div>
          <p className={styles.flowNote}>This doesn&apos;t replace your sales team. It fills their calendar with the right people.</p>
        </div>
      </section>

      <section className={styles.proofSection}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>Proof</span><h2>It ends in sales</h2></div>
          <div className={styles.proofHero}><div><strong>₹2Cr+</strong><span>Books order</span></div><div><h3>City Montessori School, Lucknow — the world&apos;s largest school</h3><p>We ran the same campaign for Propel Curriculum,&nbsp;Delhi.<br />CMS converted into 15,000 PBL sets across Grades 3–5 — and reordered the next year.</p></div></div>
          <div className={styles.statGrid}>{[["8,000+", "Leads Generated"], ["1,000+", "Appointments Booked"], ["50,000+", "School Leaders Reached"]].map(([number, label]) => <article key={label}><strong>{number}</strong><span>{label}</span></article>)}</div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>The offer</span><h2>Simple, aligned, no lock-in.</h2></div>
          <div className={styles.priceGrid}>
            <article className={styles.priceCard}><div className={styles.amount}>₹1,00,000 <small>+ GST / month</small></div><FeatureList items={monthlyFeatures} /></article>
            <article className={`${styles.priceCard} ${styles.priceFeatured}`}><span className={styles.popular}>Most pick this</span><div className={styles.amount}>₹1,50,000 <small>+ GST / month</small></div><FeatureList items={sprintFeatures} /></article>
          </div>
          <p className={styles.sixMonth}>Going all-in both seasons? <strong>6-Month Engine — ₹6,00,000 + GST</strong> (≈ ₹1L/mo).</p>
          <div className={styles.offerNotes}><article><h3>Booked meetings, scaled to spend</h3><p><strong>50–60/mo at ₹1L ad spend → 500 at ₹5L.</strong> Ad spend goes direct to Meta.</p></article><article><h3>One adoption is a minimum two-year account</h3><p>Orders run <strong>₹2L–₹20L per school</strong>. A single adoption can pay back the whole quarter.</p></article></div>
        </div>
      </section>

      <section className={styles.fitSection}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>Honest fit</span><h2>Built for companies that sell to schools.</h2></div>
          <div className={styles.fitGrid}><article className={styles.fitYes}><h3>This is for you</h3><FeatureList items={fitYes} /></article><article className={styles.fitNo}><h3>Not for you</h3><ul className={styles.featureList}>{fitNo.map((item) => <li key={item}><span className={styles.noMark}>×</span>{item}</li>)}</ul></article></div>
        </div>
      </section>

      <section className={styles.publisherFounders}>
        <FounderShowcase variant="school-vendors" />
      </section>

      <section className={styles.faqSection}>
        <div className={`${styles.wrap} ${styles.faqWrap}`}><div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>Questions</span><h2>Quick answers.</h2></div><div className={styles.faqList}>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div></div>
      </section>

      <section className={styles.applySection} id="book"><div className={`${styles.wrap} ${styles.applyPanel}`}><span className={styles.eyebrow}>Let&apos;s talk</span><h2>Get in front of the people who sign off.</h2><p>A short call to see how you reach schools today and how to get decision-makers booking meetings with you.</p><a className={styles.primaryButton} href={bookingUrl}>Book an Appointment <ArrowRight aria-hidden="true" /></a><div className={styles.chips}><span>✓ No lock-in</span><span>✓ Appointment-floor guarantee</span><span>✓ Full transparency</span></div></div></section>

      <footer className={styles.footer}><div className={`${styles.wrap} ${styles.footerInner}`}><a href="#top" className={styles.footerLogo}><Image src={acquirelyLogo} alt="Acquirely" /></a><a href="mailto:team@acquirely.in">team@acquirely.in</a></div><p className={`${styles.wrap} ${styles.disclaimer}`}>This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.</p></footer>
    </main>
  );
}
