"use client";

import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import styles from "./page.module.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-open-sans" });

const bookingUrl = "https://forms.acquirely.in/acquirely/form/GTMSCHOOLS/formperma/3Gb1GqAVHPSZCZFkDeMmj6xLyS7fA2CNX1xE2ksm-m4";
const heroCtaId = "hero-cta";
const vsl = { wistiaId: "sx41aytv0f", title: "How companies that sell to schools get decision-makers booking calls", durationLabel: "5 min" };

/* Lucide icon paths, inlined so the page doesn't depend on the installed lucide-react version. */
const icons = {
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  arrowUp: <><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  checkCircle: <><circle cx="12" cy="12" r="10" /><path d="m16 9-5.5 5.5L8 12" /></>,
  xCircle: <><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></>,
  play: <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />,
  lock: <><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  plus: <><path d="M5 12h14" /><path d="M12 5v14" /></>,
  minus: <path d="M5 12h14" />,
  crown: <><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" /><path d="M5 21h14" /></>,
  wallet: <><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /></>,
  graduationCap: <><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></>,
  clipboardList: <><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></>,
  headset: <><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></>,
  brickWall: <><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M12 9v6" /><path d="M16 15v6" /><path d="M16 3v6" /><path d="M3 15h18" /><path d="M3 9h18" /><path d="M8 15v6" /><path d="M8 3v6" /></>,
  userX: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="17" x2="22" y1="8" y2="13" /><line x1="22" x2="17" y1="8" y2="13" /></>,
  network: <><rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" /></>,
  hourglass: <><path d="M5 22h14" /><path d="M5 2h14" /><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" /><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" /></>,
  trendingUp: <><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></>,
};
type IconName = keyof typeof icons;

function Icon({ name, className, strokeWidth = 2, filled = false }: { name: IconName; className?: string; strokeWidth?: number; filled?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={filled ? 0 : strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

const decisionMakers: { icon: IconName; role: string; note: string }[] = [
  { icon: "crown", role: "Chairman / Trustee", note: "signs the cheque" },
  { icon: "wallet", role: "Director", note: "holds the budget" },
  { icon: "graduationCap", role: "Principal", note: "sets direction" },
];

const problems: { icon: IconName; title: string; body: string }[] = [
  { icon: "brickWall", title: "The front desk wall", body: "The receptionist takes a message. The principal’s inbox stays unopened. You never reach the gate, let alone get through it." },
  { icon: "userX", title: "Wrong person meetings", body: "You finally get in, and it’s a coordinator who can’t approve a rupee. The director, trustee or chairman never sees you." },
  { icon: "network", title: "Founder network dependency", body: "Your pipeline runs on whichever principals your founder happens to know. When the rolodex runs out, growth stalls." },
  { icon: "hourglass", title: "Days lost, nothing tracked", body: "Reps burn a full day in reception for one uncertain meeting, and you can’t tell which effort ever reached a decision-maker." },
];

const today = ["Reps waiting in reception", "Meetings with coordinators", "Pipeline = who you know", "Days lost, nothing tracked"];
const withAcquirely = ["Deciders book calls with you", "Meetings with budget-holders", "Pipeline = a repeatable system", "Every meeting booked & tracked"];

const flow = [
  { title: "Reach deciders", body: "By role, board & city", tone: styles.step1 },
  { title: "They book a call", body: "Inbound & warm", tone: styles.step2 },
  { title: "You demo", body: "To the actual decider", tone: styles.step3 },
  { title: "Someone says yes", body: "Real budget authority", tone: styles.step4 },
  { title: "Follow up", body: "Direct access, tracked", tone: styles.step5 },
];

const stats = [["8,000+", "Leads Generated"], ["1,000+", "Appointments Booked"], ["50,000+", "School Leaders Reached"]];

const monthlyFeatures = ["Full Meta + Google management", "All static creatives & video editing", "Lead capture", "Qualified appointments booked"];
const plusFeatures = [...monthlyFeatures, "Email & WhatsApp reminder system", "Email nurturing system"];
const fitYes = ["Edtech, smart-classroom, programs, labs or services", "You need to reach principals, directors or trustees", "Selling into schools across a region or nationally", "A team that can run demos & close"];
const fitNo = ["One school or one-city only", "No one to run the booked meetings", "A product schools don’t actually need", "Chasing the cheapest possible leads"];

const founders = [
  { name: "Mausam Arora", role: "Founder · Growth & Strategy", bio: "11+ years in education. Built products and reached 2,000+ schools. Knows the gatekeepers from the inside.", image: "/images/edtech/founder-mausam-arora.webp" },
  { name: "Kunal Mondal", role: "Founder · Performance", bio: "₹30Cr+ ad spend managed across 30+ brands in EdTech, e-com & real estate.", image: "/images/edtech/founder-kunal-mondal.webp" },
];

const faqs = [
  { question: "Will this replace my sales team?", answer: "No. It feeds them. Your reps walk into warm meetings with decision-makers who asked to see your product. The system books; your team closes." },
  { question: "Can you really reach principals and trustees on Meta & Google?", answer: "Yes. School leaders and owners are on these platforms daily. We target by role, board and geography, so budget only touches decision-makers, not the front desk." },
  { question: "I’ve tried cold email and calling. How is this different?", answer: "Cold outreach hits the gate. We get you invited in with a system that books qualified meetings, optimises for the right person rather than form-fills, and tracks every one." },
  { question: "Who runs the demo?", answer: "You do. You know your product best. We run the engine that books the meetings and tracks every rupee; your team runs the demo and the close." },
  { question: "How fast will I see meetings?", answer: "Early signals arrive in the first two weeks. A predictable pipeline of qualified meetings builds over 4-6 weeks as the system learns and we iterate." },
];

let revealObserver: IntersectionObserver | undefined;

/* Fades content in as it scrolls into view; anything already on screen (or with reduced motion) shows immediately. */
function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;
    el.dataset.reveal = "hidden";
    revealObserver ??= new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.reveal = "shown";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    revealObserver.observe(el);
    return () => revealObserver?.unobserve(el);
  }, []);
  return <div ref={ref} className={`${styles.reveal} ${className}`} style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}>{children}</div>;
}

function BookButton({ id, variant = "primary", size = "lg", className = "" }: { id?: string; variant?: "primary" | "light"; size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <a id={id} href={bookingUrl} target="_blank" rel="noopener" className={`${styles.button} ${styles[`button_${variant}`]} ${styles[`button_${size}`]} ${className}`}>
      <span>Book an Appointment</span>
      <Icon name="arrowRight" strokeWidth={2.5} className={styles.buttonArrow} />
      <span className={styles.srOnly}> (opens in a new tab)</span>
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`${styles.eyebrow} ${light ? styles.eyebrowLight : ""}`}><span aria-hidden="true" />{children}</p>;
}

function SectionHead({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) {
  return (
    <div className={styles.sectionHead}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  const warmUp = () => {
    for (const href of ["https://fast.wistia.net", "https://embed-ssl.wistia.com"]) {
      if (document.querySelector(`link[rel="preconnect"][href="${href}"]`)) continue;
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = href;
      document.head.appendChild(link);
    }
  };
  return (
    <div className={styles.video}>
      {playing ? (
        <iframe src={`https://fast.wistia.net/embed/iframe/${vsl.wistiaId}?autoPlay=true&playerColor=4F46E5&fitStrategy=cover`} title={vsl.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} onPointerEnter={warmUp} onFocus={warmUp} aria-label={`Watch · ${vsl.durationLabel} video: ${vsl.title}`}>
          <Image src="/images/edtech/vsl-poster.webp" alt="" fill priority sizes="(min-width: 1024px) 600px, 100vw" className={styles.videoPoster} />
          <span aria-hidden="true" className={styles.videoShade} />
          <span aria-hidden="true" className={styles.playButton}><span className={styles.pulseRing} /><Icon name="play" filled /></span>
          <span aria-hidden="true" className={styles.videoBadge}><Icon name="play" filled />Watch · {vsl.durationLabel}</span>
        </button>
      )}
    </div>
  );
}

function AuthorityLadder() {
  return (
    <figure aria-labelledby="ladder-caption" className={styles.ladder}>
      <div className={styles.ladderHead}>
        <figcaption id="ladder-caption">Who signs off at a school</figcaption>
        <span><Icon name="arrowUp" strokeWidth={2.5} />Authority</span>
      </div>
      <div className={styles.ladderGroupDecide}>
        <p>Decision-makers</p>
        <ul>
          {decisionMakers.map(({ icon, role, note }) => (
            <li key={role} className={styles.rung}>
              <span aria-hidden="true" className={styles.rungIcon}><Icon name={icon} strokeWidth={1.75} /></span>
              <div><p className={styles.rungRole}>{role}</p><p className={styles.rungNote}>{note}</p></div>
              <span className={styles.rungTag}><Icon name="lock" strokeWidth={2.5} /><span className={styles.hideTiny}>Out of reach</span></span>
            </li>
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className={styles.signOffLine}><span />Sign-off line<span /></div>
      <div className={styles.ladderGroupGate}>
        <p>Gatekeepers</p>
        <ul>
          <li className={styles.rung}>
            <span aria-hidden="true" className={`${styles.rungIcon} ${styles.rungIconMuted}`}><Icon name="clipboardList" strokeWidth={1.75} /></span>
            <div><p className={styles.rungRole}>Coordinator</p><p className={styles.rungNote}>no budget authority</p></div>
            <span className={styles.rungTag}>No budget</span>
          </li>
          <li className={`${styles.rung} ${styles.rungHere}`}>
            <span aria-hidden="true" className={`${styles.rungIcon} ${styles.rungIconHere}`}><Icon name="headset" strokeWidth={1.75} /></span>
            <div><p className={styles.rungRole}>Front desk</p><p className={styles.rungNote}>takes a message</p></div>
            <span className={`${styles.rungTag} ${styles.rungTagHere}`}><span aria-hidden="true" className={styles.ping}><span /><span /></span>You’re here</span>
          </li>
        </ul>
      </div>
      <p className={styles.ladderFoot}>
        <span aria-hidden="true"><Icon name="arrowUp" strokeWidth={2.5} /></span>
        Acquirely skips the front desk and gets the people who sign off booking calls with you.
      </p>
    </figure>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  const baseId = useId();
  return (
    <div className={styles.faqList}>
      {faqs.map(({ question, answer }, index) => {
        const isOpen = open === index;
        const qId = `${baseId}-q${index}`;
        const aId = `${baseId}-a${index}`;
        return (
          <div key={question}>
            <h3>
              <button id={qId} type="button" aria-expanded={isOpen} aria-controls={aId} onClick={() => setOpen(isOpen ? -1 : index)}>
                <span>{question}</span>
                <span aria-hidden="true" className={isOpen ? styles.faqIconOpen : styles.faqIcon}><Icon name={isOpen ? "minus" : "plus"} strokeWidth={2.25} /></span>
              </button>
            </h3>
            <div id={aId} role="region" aria-labelledby={qId} className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`} {...(isOpen ? {} : { inert: "" })}>
              <div><p>{answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Mobile-only booking bar: appears once the hero CTA scrolls away, hides again when the closing CTA section is in view. */
function StickyBookBar() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const heroCta = document.getElementById(heroCtaId);
    const book = document.getElementById("book");
    if (!heroCta || !book) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(heroCta.getBoundingClientRect().bottom < 0 && book.getBoundingClientRect().top >= window.innerHeight);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <div className={`${styles.stickyBar} ${visible ? styles.stickyBarVisible : ""}`} aria-hidden={!visible} {...(visible ? {} : { inert: "" })}>
      <div>
        <p><span aria-hidden="true" />Only 3 spots available this quarter</p>
        <BookButton size="md" className={styles.fullWidth} />
      </div>
    </div>
  );
}

export default function EdTechLanding() {
  return (
    <div className={`${styles.page} ${openSans.variable}`}>
      <a href="#main" className={styles.skipLink}>Skip to content</a>
      <div id="top" />

      <header className={styles.nav}>
        <nav aria-label="Primary" className={`${styles.container} ${styles.navInner}`}>
          <a href="#top" aria-label="Acquirely, back to top" className={styles.logo}>
            <Image src="/images/edtech/acquirely-logo-white.webp" alt="Acquirely" width={420} height={137} priority />
          </a>
          <ul className={styles.navLinks}>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#proof">Proof</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <BookButton size="sm" />
        </nav>
      </header>

      <main id="main" tabIndex={-1} className={styles.main}>
        <section aria-labelledby="hero-heading" className={styles.hero}>
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroTitle}>
              <Eyebrow light>For companies that sell to schools</Eyebrow>
              <h1 id="hero-heading"><span>You built something schools need.</span> <em className={styles.gradient}>You’re stuck talking to the front desk.</em></h1>
            </div>
            <div className={styles.heroMedia}><HeroVideo /></div>
            <div className={styles.heroBody}>
              <p className={`${styles.heroSub} ${styles.fadeUp}`} style={{ animationDelay: "160ms" }}>We get principals, directors and trustees, the people who actually sign off, booking calls with you.</p>
              <div className={`${styles.heroCta} ${styles.fadeUp}`} style={{ animationDelay: "240ms" }}>
                <BookButton id={heroCtaId} className={styles.heroButton} />
                <p className={styles.urgency}><span aria-hidden="true" /><span><strong>Only 3 spots available this quarter.</strong> We work each account personally.</span></p>
              </div>
              <ul className={`${styles.trust} ${styles.fadeUp}`} style={{ animationDelay: "320ms" }}>
                {[["11+", "Years inside education"], ["2,000+", "Schools reached"], ["₹30Cr+", "Ad spend managed"]].map(([value, label]) => (
                  <li key={label}><Icon name="check" strokeWidth={2.75} /><span><strong>{value}</strong> {label}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="problem" aria-labelledby="problem-heading" className={`${styles.section} ${styles.surface}`}>
          <div className={styles.container}>
            <SectionHead id="problem-heading" eyebrow="The real problem">Your toughest competitor isn’t another company. <em className={styles.gradientStrong}>It’s the front desk.</em></SectionHead>
            <div className={styles.problemGrid}>
              <Reveal className={styles.ladderWrap}><AuthorityLadder /></Reveal>
              <div className={styles.problemList}>
                {problems.map(({ icon, title, body }, index) => (
                  <Reveal key={title} delay={index * 70}>
                    <article className={styles.problemCard}>
                      <span className={styles.problemIcon}><Icon name={icon} strokeWidth={1.75} /></span>
                      <div><h3>{title}</h3><p>{body}</p></div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="shift" aria-labelledby="shift-heading" className={styles.section}>
          <div className={styles.container}>
            <SectionHead id="shift-heading" eyebrow="The shift">Stop knocking on the gate. <em className={styles.gradientStrong}>Get invited in.</em></SectionHead>
            <div className={styles.twoUp}>
              <Reveal>
                <article aria-labelledby="shift-today" className={`${styles.shiftCard} ${styles.shiftToday}`}>
                  <h3 id="shift-today"><Icon name="xCircle" />Today</h3>
                  <ul>{today.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </Reveal>
              <Reveal delay={90}>
                <article aria-labelledby="shift-after" className={`${styles.shiftCard} ${styles.shiftAfter}`}>
                  <h3 id="shift-after"><Icon name="checkCircle" />With Acquirely</h3>
                  <ul>{withAcquirely.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="how-it-works" aria-labelledby="how-heading" className={`${styles.section} ${styles.surface}`}>
          <div className={styles.container}>
            <SectionHead id="how-heading" eyebrow="How it works">From the front desk to the <em className={styles.gradientStrong}>decision-maker.</em></SectionHead>
            <ol className={styles.steps}>
              {flow.map(({ title, body, tone }, index) => (
                <li key={title}>
                  <Reveal className={styles.stepCard} delay={index * 80}>
                    <span aria-hidden="true" className={`${styles.stepNumber} ${tone}`}>{index + 1}</span>
                    <p className={styles.stepLabel}>Step {index + 1}</p>
                    <h3>{title}</h3>
                    <p className={styles.stepBody}>{body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal className={styles.stepNoteWrap}><p className={styles.stepNote}>This doesn’t replace your sales team. It fills their calendar with the right people.</p></Reveal>
          </div>
        </section>

        <section id="proof" aria-labelledby="proof-heading" className={styles.section}>
          <div className={styles.container}>
            <SectionHead id="proof-heading" eyebrow="Proof">It ends <em className={styles.gradientStrong}>in sales</em></SectionHead>
            <Reveal className={styles.proofWrap}>
              <article aria-labelledby="proof-card-title" className={styles.proofCard}>
                <p className={styles.proofFigure}><span>₹2Cr+</span><span>Books order</span></p>
                <div>
                  <h3 id="proof-card-title">City Montessori School, Lucknow, the world’s largest school</h3>
                  <p>We ran the same campaign for Propel Curriculum, Delhi. CMS converted into 15,000 PBL sets across Grades 3-5, and reordered the next year.</p>
                </div>
              </article>
            </Reveal>
            <dl className={styles.stats}>
              {stats.map(([value, label], index) => (
                <Reveal key={label} className={styles.stat} delay={index * 70}><dt>{label}</dt><dd>{value}</dd></Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-heading" className={`${styles.section} ${styles.surface}`}>
          <div className={styles.container}>
            <SectionHead id="pricing-heading" eyebrow="The offer">Simple, aligned, <em className={styles.gradientStrong}>no lock-in.</em></SectionHead>
            <div className={styles.priceGrid}>
              <Reveal>
                <article aria-labelledby="plan-standard" className={styles.priceCard}>
                  <h3 id="plan-standard" className={styles.price}><span>₹1,00,000</span><span>+ GST / month</span></h3>
                  <div className={styles.priceRule} />
                  <ul className={styles.checkList}>{monthlyFeatures.map((item) => <li key={item}><Icon name="checkCircle" />{item}</li>)}</ul>
                </article>
              </Reveal>
              <Reveal delay={90}>
                <article aria-labelledby="plan-plus" className={`${styles.priceCard} ${styles.priceFeatured}`}>
                  <span className={styles.popular}>Most pick this</span>
                  <h3 id="plan-plus" className={styles.price}><span>₹1,50,000</span><span>+ GST / month</span></h3>
                  <div className={styles.priceRule} />
                  <ul className={styles.checkList}>{plusFeatures.map((item) => <li key={item}><Icon name="checkCircle" />{item}</li>)}</ul>
                </article>
              </Reveal>
            </div>
            <Reveal className={styles.sixMonth}><p><strong>6-Month Engine: ₹6,00,000 + GST</strong> (≈ ₹1L/mo).</p></Reveal>
            <div className={styles.offerNote}>
              <Reveal>
                <article>
                  <span><Icon name="trendingUp" strokeWidth={1.75} /></span>
                  <div><h3>Booked meetings, scaled to spend</h3><p><strong>50-60/mo at ₹1L ad spend → 500 at ₹5L.</strong> Ad spend goes direct to Meta.</p></div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="fit" aria-labelledby="fit-heading" className={styles.section}>
          <div className={styles.container}>
            <SectionHead id="fit-heading" eyebrow="Honest fit">Built for companies that <em className={styles.gradientStrong}>sell to schools.</em></SectionHead>
            <div className={styles.twoUp}>
              <Reveal>
                <article aria-labelledby="fit-yes" className={`${styles.fitCard} ${styles.fitYes}`}>
                  <h3 id="fit-yes">This is for you</h3>
                  <ul>{fitYes.map((item) => <li key={item}><Icon name="checkCircle" />{item}</li>)}</ul>
                </article>
              </Reveal>
              <Reveal delay={90}>
                <article aria-labelledby="fit-no" className={`${styles.fitCard} ${styles.fitNo}`}>
                  <h3 id="fit-no">Not for you</h3>
                  <ul>{fitNo.map((item) => <li key={item}><Icon name="xCircle" />{item}</li>)}</ul>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="founders" aria-labelledby="founders-heading" className={`${styles.section} ${styles.surface}`}>
          <div className={styles.container}>
            <SectionHead id="founders-heading" eyebrow="Meet the founders">Operators, <em className={styles.gradientStrong}>not just agency owners.</em></SectionHead>
            <div className={styles.twoUp}>
              {founders.map(({ name, role, bio, image }, index) => (
                <Reveal key={name} delay={index * 90}>
                  <article className={styles.founderCard}>
                    <div className={styles.founderPhoto}>
                      <Image src={image} alt={`${name}, founder of Acquirely`} fill sizes="(min-width: 768px) 500px, 100vw" />
                      <div aria-hidden="true" />
                      <h3>{name}</h3>
                    </div>
                    <div className={styles.founderBody}><p>{role}</p><p>{bio}</p></div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className={styles.aboutLink}><a href="/about-us">About Acquirely and the founding team<Icon name="arrowRight" strokeWidth={2.25} /></a></p>
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-heading" className={styles.section}>
          <div className={styles.container}>
            <SectionHead id="faq-heading" eyebrow="Questions">Quick <em className={styles.gradientStrong}>answers.</em></SectionHead>
            <div className={styles.faqWrap}><Faq /></div>
          </div>
        </section>

        <section id="book" aria-labelledby="cta-heading" className={`${styles.section} ${styles.dark}`}>
          <Reveal className={`${styles.container} ${styles.closing}`}>
            <p className={styles.closingEyebrow}>Let’s talk</p>
            <h2 id="cta-heading">Get in front of the people <em className={styles.gradient}>who sign off.</em></h2>
            <p className={styles.closingBody}>A short call to see how you reach schools today and how to get decision-makers booking meetings with you.</p>
            <BookButton variant="light" className={styles.closingButton} />
            <ul className={styles.chips}>
              {["No lock-in", "Appointment-floor guarantee", "Full transparency"].map((item) => <li key={item}><span aria-hidden="true">✓ </span>{item}</li>)}
            </ul>
          </Reveal>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p><a href="mailto:team@acquirely.in">team@acquirely.in</a></p>
          <p className={styles.disclaimer}>This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.</p>
          <p className={styles.copyright}>© {new Date().getFullYear()} Acquirely. All rights reserved.</p>
        </div>
      </footer>

      <StickyBookBar />
    </div>
  );
}
