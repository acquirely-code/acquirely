"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowRight, BarChart3, CalendarCheck, Check, Clock3, FileCheck2, LockKeyhole, Network, PlaySquare, ShieldCheck, Target, UserRoundX, X } from "lucide-react";
import acquirelyLogo from "@/app/assests/logo.png";
import { FounderShowcase } from "@/components/FoundersSection";
import styles from "./page.module.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta" });

const wistiaMediaId ="sx41aytv0f";
const bookingUrl ="https://forms.acquirely.in/acquirely/form/GTMSCHOOLS/formperma/3Gb1GqAVHPSZCZFkDeMmj6xLyS7fA2CNX1xE2ksm-m4";

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

const coldWay = ["Most visits die at the front desk", "~10–12 decider meetings a month per rep — then it caps", "Half are the wrong person, with no budget authority", "Days on the road, nothing tracked", "To book more, you hire more"];
const inboundWay = ["Deciders raise their hand — warm, not cold", "50–60 booked meetings a month at ₹1L ad spend", "Pre-filtered for role & budget authority", "Every meeting booked & tracked end-to-end", "Double the spend, double the meetings — no new hires"];
const inboundBenefits = [
  { title: "Warm, not cold", body: "They came looking for you, so the demo opens from interest — not resistance." },
  { title: "Scales with budget", body: "Grow by raising spend, not by hiring and training more reps." },
  { title: "Fully tracked", body: "Every rupee traces to a booked meeting. You always know your cost per decider." },
  { title: "It compounds", body: "The data makes each month cheaper and sharper. Cold calling never does." },
];

type PlanFeature = { name: string; benefit: string; tag?: string };
const leadAcquisition: PlanFeature[] = [
  { name: "Full Facebook & Instagram Ads — launch, management & daily optimization", benefit: "Puts you in front of principals, directors and trustees while they scroll — not their front desk." },
  { name: "Continuous GTM + conversion tracking", benefit: "Every meeting is traced to the exact ad, board and city that booked it — so budget moves to what actually reaches deciders." },
  { name: "All static creatives + video editing", benefit: "Unlimited angle testing, built for a school-leader audience. Done in-house, never billed per asset." },
  { name: "Conversion-built landing pages + lead capture", benefit: "Fast, mobile-first pages built to turn a principal's click into a booked call." },
];
const leadQualification: PlanFeature[] = [
  { name: "Lead scoring + intent filtering", benefit: "Coordinators and non-decision-makers filtered out — so you're not demoing to someone who can't sign off." },
  { name: "Phone / OTP validation on every form", tag: "Often skipped", benefit: "Fake numbers killed at the source — one less dead meeting slot." },
  { name: "Qualified decision-maker meetings booked", benefit: "Warm, inbound meetings with budget-holders — booked and on your calendar." },
];
const growthBase: PlanFeature[] = [
  { name: "The full Meta base system, included", benefit: "FB & Instagram ads, GTM tracking, creatives, landing pages, lead scoring, OTP validation and decision-maker meetings." },
];
const growthExtras: PlanFeature[] = [
  { name: "Full Google Ads — Search, Performance Max & YouTube", tag: "Converts better", benefit: "Meta creates the demand; Google captures it the moment a decider searches your category. Two platforms as one funnel convert far better than either alone." },
  { name: "WhatsApp + email reminder system", benefit: "Cuts no-shows hard. The principal who booked actually turns up to the demo." },
  { name: "Automated nurture sequences (WhatsApp + email)", benefit: "School leaders who aren't ready this term stay warm until budgets open — not lost to a competitor." },
  { name: "Conversion API + offline conversion upload", tag: "The big lever", benefit: "Real booked meetings and closed orders fed back to Meta & Google, so the algorithm hunts deciders — not cheap clicks." },
  { name: "Weekly reporting + strategy call", benefit: "You see meetings booked and cost-per-meeting every week — not a vague monthly PDF." },
];

const hinges = [
  { title: "We optimize for booked meetings — not form-fills", body: <>Most agencies tell Meta to find the <strong>cheapest lead</strong>. We tell it to find principals who <strong>book</strong>. Same budget, completely different meetings.</> },
  { title: "Creative written for the buyer, not the user", body: <>The same product sells completely differently to a principal than to a teacher. Our ads speak to a decider&apos;s real stakes — <strong>enrolment growth, board optics, safety, budget ROI</strong> — not your feature list.</> },
  { title: "The offer does the heavy lifting", body: <>&quot;Book a demo&quot; gets ignored. We lead with something a school leader actually wants — a board-ready deck, a benchmark report, a no-risk pilot — so the right people raise their hand. <strong>The offer moves response rate more than any targeting trick.</strong></> },
  { title: "We warm the whole buying committee", body: <>A school purchase is rarely one signature — principal, director, trustee, academic head. We keep the <strong>whole committee</strong> seeing you until it clears internally, so your deal doesn&apos;t die waiting on one inbox.</> },
  { title: "Server-side tracking (Conversion API)", body: <>Browsers now block a large share of pixel data. Server-side tracking <strong>recovers it</strong>, so the algorithm keeps learning instead of slowly going blind.</> },
  { title: "Weekly negative-keyword mining", body: <>We strip out job-seekers and parents searching for admissions every week, so your Google budget <strong>only chases school buyers.</strong></> },
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function monthEndLabel(now: Date) {
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const d = end.getDate();
  const suffix = d >= 11 && d <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[d % 10] ?? "th";
  return `${d}${suffix} ${months[end.getMonth()]}`;
}
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

function PlanFeatures({ items }: { items: PlanFeature[] }) {
  return (
    <ul className={styles.planFeatures}>
      {items.map(({ name, benefit, tag }) => (
        <li key={name}>
          <span className={styles.tick}><Check aria-hidden="true" /></span>
          <div><strong>{name}{tag && <em className={styles.featureTag}>{tag}</em>}</strong><p>{benefit}</p></div>
        </li>
      ))}
    </ul>
  );
}

function HeroVideo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`${styles.heroVideo} ${className}`}
      aria-label="Acquirely growth system video"
      style={{ ["--wistia-swatch" as string]: `url('https://fast.wistia.com/embed/medias/${wistiaMediaId}/swatch')` }}
      dangerouslySetInnerHTML={{ __html: `<wistia-player media-id="${wistiaMediaId}" aspect="1.7777777777777777"></wistia-player>` }}
    />
  );
}

export default function EdTechLanding() {
  const [deadline, setDeadline] = useState("this month ends");
  useEffect(() => setDeadline(monthEndLabel(new Date())), []);

  return (
    <main className={`${styles.page} ${jakarta.variable}`}>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src={`https://fast.wistia.com/embed/${wistiaMediaId}.js`} strategy="afterInteractive" type="module" />
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
            <h1><span>You built something</span> <span>schools need.</span> <em><span>You&apos;re stuck talking</span> <span>to the front desk.</span></em></h1>
            <p className={styles.heroSub}>We get principals, directors and trustees, the people who actually sign off, booking calls with you.</p>
            <HeroVideo className={styles.heroVideoMobile} />
            <div className={styles.ctaRow}><a className={styles.primaryButton} href={bookingUrl}>Book an Appointment <ArrowRight aria-hidden="true" /></a></div>
            <p className={styles.urgency}>Only 3 spots available this quarter. <strong>We work each account personally.</strong></p>
            <div className={styles.trustRow}>
              <div><strong>11+</strong><span>Years inside education</span></div>
              <div><strong>2,000+</strong><span>Schools reached</span></div>
              <div><strong>₹30Cr+</strong><span>Ad spend managed</span></div>
            </div>
          </div>
          <HeroVideo className={styles.heroVideoDesktop} />
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
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>The offer</span>
            <h2>A full growth team — for less than one senior hire.</h2>
            <p>Not ad management. A system that turns ad spend into booked meetings with principals, directors and trustees — the people who actually sign off — and makes sure they show up.</p>
          </div>
          <div className={styles.compareHead}>
            <span className={styles.compareKicker}>Cold calls vs inbound</span>
            <h3>What does one meeting with a real decider actually cost?</h3>
            <p>Your reps can keep knocking on doors — or the deciders can come to you, already warm. Here&apos;s the maths.</p>
          </div>
          <div className={styles.compareGrid}>
            <article className={styles.compareOld}>
              <span className={styles.compareLabel}>The cold way</span>
              <h4>Reps on the road</h4>
              <div className={styles.compareCost}><strong>₹5,000</strong><span>per decision-maker meeting</span></div>
              <ul>{coldWay.map((item) => <li key={item}><X aria-hidden="true" />{item}</li>)}</ul>
            </article>
            <article className={styles.compareNew}>
              <span className={styles.compareLabel}>The inbound way</span>
              <h4>Acquirely brings them to you</h4>
              <div className={styles.compareCost}><strong>~₹2,000</strong><span>per decision-maker meeting</span></div>
              <ul>{inboundWay.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
            </article>
          </div>
          <p className={styles.compareNote}>Illustrative. The cold figure is a loaded field-rep cost (salary + travel) divided by the decider meetings actually landed; the inbound figure is ad spend per booked meeting at our scaled rate. Even fully loaded with our fee, inbound stays at or below the cold-call cost — and every meeting is warm and tracked.</p>
          <div className={styles.benefitGrid}>{inboundBenefits.map(({ title, body }) => <article key={title}><h5>{title}</h5><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.section} id="pricing">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}><span className={styles.eyebrow}>Pick your engine</span><h2>Two ways to fill your calendar.</h2></div>
          <div className={styles.priceGrid}>
            <article className={styles.priceCard}>
              <span className={styles.plan}>Lead Engine</span>
              <div className={styles.amount}>₹75,000 <small>+ GST / month</small></div>
              <p className={styles.wasPrice}>Founding rate · <del>₹1,00,000</del> <strong>→ ₹75,000</strong></p>
              <span className={styles.groupLabel}>Acquisition</span>
              <PlanFeatures items={leadAcquisition} />
              <span className={styles.groupLabel}>Qualification</span>
              <PlanFeatures items={leadQualification} />
              <p className={styles.bestFor}><strong>Best for:</strong> teams with the demo &amp; closing muscle who just need warm meetings with the right people on the calendar.</p>
              <a className={styles.secondaryButton} href={bookingUrl}>Start with Lead Engine</a>
            </article>
            <article className={`${styles.priceCard} ${styles.priceFeatured}`}>
              <span className={styles.popular}>Most clients pick this</span>
              <span className={styles.plan}>Growth Engine</span>
              <div className={styles.amount}>₹1,00,000 <small>+ GST / month</small></div>
              <p className={styles.wasPrice}>Founding rate · <del>₹1,50,000</del> <strong>→ ₹1,00,000</strong></p>
              <div className={styles.ecosystem}><span>Why this one converts better</span>Running both means the decider who spots you on Instagram also finds you when they search. <strong>That loop is what turns interest into signed orders.</strong></div>
              <span className={styles.groupLabel}>Everything in Lead Engine</span>
              <PlanFeatures items={growthBase} />
              <span className={`${styles.groupLabel} ${styles.groupLabelAccent}`}>Plus — the Meta + Google engine</span>
              <PlanFeatures items={growthExtras} />
              <p className={styles.bestFor}><strong>Best for:</strong> teams who want the meetings <strong>and</strong> the follow-up system that turns a demo into a signed order.</p>
              <a className={styles.primaryButton} href={bookingUrl}>Book an Appointment <ArrowRight aria-hidden="true" /></a>
            </article>
          </div>

          <div className={styles.sixMonth}>
            <div><span className={styles.plan}>Go all-in</span><h3>6-Month Growth Engine</h3><p>School buying moves on term and budget cycles. Six months spans a full one: months 1–2 we fix the leaks and find winning angles, months 3–6 the pipeline compounds. Locks your founding rate for the full run.</p></div>
            <div className={styles.sixMonthPrice}><strong>₹6,00,000 <small>+ GST</small></strong><span>Rate-locked · priority onboarding</span></div>
          </div>

          <div className={styles.guarantee}>
            <span className={styles.seal}><ShieldCheck aria-hidden="true" /></span>
            <div><h3>The Qualified-Meeting Floor</h3><p>We agree a monthly number of qualified decision-maker meetings with you upfront, in writing. If the first 90 days don&apos;t clear it, <strong>we work free until they do.</strong> You carry the ad spend — we carry the risk on our fee. No lock-in after.</p></div>
          </div>

          <div className={styles.foundingRate}><span aria-hidden="true" /><p><strong>Founding rate.</strong> Lock ₹75K / ₹1L for 6 months if you start before <strong>{deadline}</strong>. Rates step up as we add clients — what you lock today is what you pay.</p></div>
          <p className={styles.lossLine}>Every month you wait is another month of reps stuck at the front desk — while a competitor gets the principal&apos;s meeting. The gate doesn&apos;t open itself.</p>
          <div className={styles.offerCta}><a className={styles.primaryButton} href={bookingUrl}>Book an Appointment <ArrowRight aria-hidden="true" /></a><p>15-minute fit call. If we&apos;re not right for you, we&apos;ll say so — and point you to who is.</p></div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>Why the results differ</span>
            <h2>The small hinges that swing big results.</h2>
            <p>Most agencies run the same ads. These are the quiet details that decide whether your spend reaches the right person — the stuff that rarely makes it onto a proposal.</p>
          </div>
          <div className={styles.hingeGrid}>{hinges.map(({ title, body }, index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
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

      <section className={styles.applySection} id="book"><div className={`${styles.wrap} ${styles.applyPanel}`}><span className={styles.eyebrow}>Let&apos;s talk</span><h2>Get in front of the people who sign off.</h2><p>A short call to see how you reach schools today and how to get decision-makers booking meetings with you.</p><a className={styles.primaryButton} href={bookingUrl}>Book an Appointment <ArrowRight aria-hidden="true" /></a><div className={styles.chips}><span>✓ No lock-in</span><span>✓ Qualified-meeting floor guarantee</span><span>✓ Full transparency</span></div></div></section>

      <footer className={styles.footer}><div className={`${styles.wrap} ${styles.footerInner}`}><a href="#top" className={styles.footerLogo}><Image src={acquirelyLogo} alt="Acquirely" /></a><a href="mailto:team@acquirely.in">team@acquirely.in</a></div><p className={`${styles.wrap} ${styles.disclaimer}`}>This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.</p></footer>
    </main>
  );
}
