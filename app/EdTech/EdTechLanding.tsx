"use client";

import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  Filter,
  GraduationCap,
  MessageCircle,
  Target,
} from "lucide-react";
import acquirelyLogo from "@/app/assests/logo.png";
import WistiaPlayer from "@/components/WistiaPlayer";
import styles from "./page.module.css";

const problems = [
  {
    number: "01",
    title: "Junk leads & no-shows",
    body: "Low-intent enquiries and fake numbers clog your pipeline. Ad spend goes up; enrolments don't.",
  },
  {
    number: "02",
    title: "Counsellors chasing ghosts",
    body: "Your best closers waste hours on people who were never going to enrol instead of the ones who will.",
  },
  {
    number: "03",
    title: "CAC climbs, batches don't fill",
    body: "Without qualification and a fixed funnel, scaling budget just amplifies the leak. You feel busy, not profitable.",
  },
];

const engine = [
  {
    step: "E1 · Attract",
    icon: Target,
    title: "Qualified traffic",
    body: "Our A3 Flywheel runs here: creative testing to winners to scale across Meta & Google, tuned to how your students actually research a big decision.",
    note: "Demand, not vanity clicks",
  },
  {
    step: "E2 · Qualify",
    icon: Filter,
    title: "Kill junk before counsellors do",
    body: "Intent filters, lead scoring, disqualification logic and instant speed-to-lead, so your counsellors only ever call students who can commit.",
    note: "This is where we're different",
  },
  {
    step: "E3 · Enrol",
    icon: GraduationCap,
    title: "Close the counsellor gap",
    body: "Nurture sequences, WhatsApp follow-up and counsellor enablement, tracked all the way to enrolment. We report on seats filled, not clicks.",
    note: "Outcomes you can see",
  },
];

const verticals = [
  {
    tag: "Study abroad",
    title: "Overseas education consultancies",
    body: "Fill your counselling calendar with students who can actually afford and are serious about going abroad. Fewer tyre-kickers, more confirmed applications.",
  },
  {
    tag: "Test & exam prep",
    title: "IELTS · GRE · GMAT · SAT · pro certs",
    body: "Turn always-on demand into enrolled batches without burning budget on window-shoppers. Consistent, year-round intake, not a seasonal scramble.",
  },
  {
    tag: "Aviation & career",
    title: "Pilot, aviation & career academies",
    body: "A ₹40L+ decision needs high-intent leads. We filter for students genuinely ready to commit to a career program, the model we've already proven in aviation.",
  },
];

const reasons = [
  {
    title: "Built by educators",
    body: "12+ years in education, publishing, curriculum and EdTech. We speak admissions, not just ad accounts.",
  },
  {
    title: "We own the funnel to the handoff",
    body: "Lead quality is our job, not yours. We fix tracking and qualification before we scale a single rupee.",
  },
  {
    title: "Transparent, scale-friendly pricing",
    body: "A flat retainer up to ₹10L/mo of ad spend, then just 10% beyond it. Simple, predictable, no lock-ins.",
  },
  {
    title: "A repeatable, transparent system",
    body: "The A3 Flywheel and E3 Engine mean predictable scale you can see in the numbers, month over month.",
  },
];

const steps = [
  {
    title: "Free lead-gen audit",
    body: "We tear down your current funnel, tracking and cost-per-lead and show you exactly where budget leaks.",
  },
  {
    title: "Fix the leaks",
    body: "Tracking, landing pages and lead qualification, sorted before we scale so spend compounds instead of burns.",
  },
  {
    title: "Launch the A3 Flywheel",
    body: "Creative testing → winning hooks → aggressive scale, only on what's proven to convert.",
  },
  {
    title: "Scale on cost-per-qualified-lead",
    body: "We report on qualified leads and admissions, and grow budget only where the maths works.",
  },
];

const faqs = [
  {
    question: "Do you guarantee enrolments?",
    answer:
      "No honest agency can guarantee enrolments it doesn't close; that final step is your counsellors. What we guarantee is qualified leads to a standard we define with you, and full ownership of everything up to the counsellor handoff.",
  },
  {
    question: 'What counts as a "qualified lead"?',
    answer:
      "We define it with you in writing: the right profile, budget-fit and real intent, such as a booked counselling call or completed qualification form. You only pay for leads that clear that bar.",
  },
  {
    question: "Which platforms do you run?",
    answer:
      "Primarily Meta and Google, plus YouTube and dedicated landing funnels, wherever your students actually research a high-ticket education decision.",
  },
  {
    question: "How does pricing work?",
    answer:
      "A flat monthly retainer covers you up to ₹10 lakh a month in ad spend. Beyond ₹10 lakh, we take 10% of the ad spend above that threshold. No long lock-ins and no hidden fees.",
  },
  {
    question: "How fast can we launch?",
    answer:
      "Audit in the first week. Once tracking and the funnel are fixed, campaigns are typically live within 2–3 weeks.",
  },
  {
    question: "What kind of budget do we need?",
    answer:
      "We work best with institutes ready to invest meaningfully in growth. We'll tell you honestly in the audit whether your economics support scaling and what to fix first if they don't.",
  },
];

export default function EdTechLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <div className={`${styles.wrap} ${styles.navInner}`}>
          <a href="#top" className={styles.logo} aria-label="Acquirely home">
            <Image src={acquirelyLogo} alt="Acquirely" priority />
          </a>
          <a className={styles.navCta} href="#apply">
            Get a free audit
          </a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={`${styles.wrap} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              For study-abroad · test-prep · aviation & career academies
            </span>
            <h1>
              Turn ad spend into <em>admissions.</em>
            </h1>
            <p className={styles.heroSub}>
              Acquirely is the qualified-lead engine for high-ticket education. We filter out the
              window-shoppers before they ever reach your counsellors, so your team spends its time
              on students who actually enrol.
            </p>
            <div className={styles.heroVisual} aria-label="Acquirely growth system video">
              <WistiaPlayer mediaId="tdxebzm5am" />
            </div>
            <div className={styles.ctaRow}>
              <a className={styles.primaryButton} href="#apply">
                Get a free lead-gen audit <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className={styles.trustRow}>
              <div><strong>₹1 Cr+</strong><span>Monthly ad spend managed</span></div>
              <div><strong>A3 Flywheel</strong><span>Proprietary methodology</span></div>
              <div><strong>Educator-built</strong><span>Performance-shop execution</span></div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>The real problem</span>
            <h2>It&apos;s not lead volume. It&apos;s lead quality.</h2>
            <p>
              Most agencies flood your CRM and call it a day. For high-ticket education, cheap leads
              are the disease, not the cure.
            </p>
          </div>
          <div className={styles.threeGrid}>
            {problems.map((problem) => (
              <article className={styles.problemCard} key={problem.number}>
                <span className={styles.cardNumber}>{problem.number}</span>
                <h3>{problem.title}</h3>
                <p>{problem.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="how">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>The system</span>
            <h2>The E3 Enrolment Engine</h2>
            <p>
              Not ad management. A system that carries a student from first click to a counsellor call
              worth taking.
            </p>
          </div>
          <div className={styles.engineGrid}>
            {engine.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={styles.engineCard} key={item.step}>
                  <div className={styles.engineTop}>
                    <span className={styles.engineIcon}><Icon aria-hidden="true" /></span>
                    <span className={styles.stepBadge}>{item.step}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <small>{item.note}</small>
                  {index < engine.length - 1 && (
                    <span className={styles.engineArrow}><ArrowRight aria-hidden="true" /></span>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.audienceSection} id="who">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>Who it&apos;s for</span>
            <h2>Built for high-ticket education.</h2>
            <p>
              When one enrolment is worth lakhs, lead quality is everything. These are the businesses
              we scale.
            </p>
          </div>
          <div className={styles.threeGrid}>
            {verticals.map((vertical) => (
              <article className={styles.verticalCard} key={vertical.tag}>
                <span>{vertical.tag}</span>
                <h3>{vertical.title}</h3>
                <p>{vertical.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.proofSection} id="proof">
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>Track record</span>
            <h2>Performance that holds at scale.</h2>
            <p>A decade in education meets a performance shop that manages serious spend every month.</p>
          </div>
          <div className={styles.kpiGrid}>
            <article><strong>5×</strong><p>More sales-qualified leads at the same spend for Right Source Aviation.</p></article>
            <article><strong>10%→50%</strong><p>Sales-qualified lead rate while cost per lead held flat at about ₹150.</p></article>
            <article><strong>+40%</strong><p>Qualified enrolment leads across 9+ countries for International Schooling.</p></article>
          </div>
          <div className={styles.metricsStrip}>
            <span>Cost per qualified lead <b>₹1,500 → ₹300</b></span>
            <span>Consultation show-rate <b>+25%</b></span>
            <span><b>₹1 Cr+</b> monthly ad spend managed</span>
          </div>
          <p className={styles.proofNote}>
            Real figures, pulled live from client Meta Ads accounts. Full case studies available on request.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.wrap} ${styles.whyGrid}`}>
          <div className={styles.whyIntro}>
            <span className={styles.eyebrow}>Why Acquirely</span>
            <h2>The agency that gets admissions.</h2>
            <p>
              Most performance agencies have never sat on the education side of the table. We have.
              That&apos;s why we optimise for enrolments, not impressions, and why institute founders trust
              us with the decision that funds their whole year.
            </p>
            <a className={styles.primaryButton} href="#apply">
              Book your free audit <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className={styles.reasonList}>
            {reasons.map((reason) => (
              <article key={reason.title}>
                <span><Check aria-hidden="true" /></span>
                <div><h3>{reason.title}</h3><p>{reason.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>How we start</span>
            <h2>From audit to admissions in weeks.</h2>
          </div>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
          <div className={styles.pricingCard}>
            <div>
              <span className={styles.eyebrow}>Simple pricing</span>
              <h3>Scale-friendly, with no long lock-ins.</h3>
              <p>
                One clear number while you find your footing, and a model that only grows when your
                spend does. No hidden fees.
              </p>
            </div>
            <strong>Flat monthly retainer up to ₹10L/mo ad spend<br /><b>then 10% of spend beyond ₹10L</b></strong>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={`${styles.wrap} ${styles.faqWrap}`}>
          <div className={`${styles.sectionHead} ${styles.center}`}>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Straight answers.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.applySection} id="apply">
        <div className={styles.wrap}>
          <div className={styles.applyPanel}>
            <span className={styles.eyebrow}>Free audit</span>
            <h2>See where your ad spend is leaking.</h2>
            <p>
              Tell us about your institute. We&apos;ll audit your funnel and show you exactly how to turn
              spend into admissions, with no obligation.
            </p>
            <div className={styles.applyPoints}>
              <span><BarChart3 aria-hidden="true" /> Funnel and tracking diagnosis</span>
              <span><Filter aria-hidden="true" /> Lead-quality assessment</span>
              <span><MessageCircle aria-hidden="true" /> A practical plan for your next campaign</span>
            </div>
            <a
              className={styles.primaryButton}
              href="mailto:team@acquirely.in?subject=Free%20lead-gen%20audit%20for%20my%20institute"
            >
              Get my free audit <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <a href="#top" className={styles.footerLogo}>
            <Image src={acquirelyLogo} alt="Acquirely" />
          </a>
          <p>Performance marketing for education</p>
          <div><a href="#top">Back to top</a><a href="#apply">Get a free audit</a></div>
        </div>
      </footer>
    </main>
  );
}
