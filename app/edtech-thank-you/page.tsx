import type { Metadata, Viewport } from "next";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { CalendarClock, Check, ShieldCheck } from "lucide-react";
import styles from "./page.module.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  title: "You're Booked | Acquirely",
  description: "Your call with Acquirely is confirmed. Here's what happens next.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://acquirely.in/edtech-thank-you",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0C29",
};

const nextSteps = [
  {
    title: "You’ll get the details",
    description: "Calendar invite with the Zoom link, plus a WhatsApp reminder before we speak.",
  },
  {
    title: "On the call: a real diagnosis",
    description:
      "We show you why the right decision-makers aren’t seeing you, and map the first campaign to get principals and directors booking meetings with you. A working session, not a pitch.",
  },
];

const founderStats = [
  { label: "Years inside education", value: "11+" },
  { label: "Schools reached", value: "2,000+" },
];

const stepColors = [styles.step1, styles.step2];

export default function EdTechThankYouPage() {
  return (
    <div className={`${styles.page} ${openSans.variable}`}>
      <main className={styles.main}>
        <section aria-labelledby="ty-heading" className={styles.hero}>
          <div aria-hidden="true" className={styles.glow} />
          <div className={`${styles.container} ${styles.logoRow}`}>
            <a href="https://acquirely.in/" aria-label="Acquirely home" className={styles.logo}>
              <Image src="/images/edtech/acquirely-logo-white.webp" alt="Acquirely" width={420} height={137} priority />
            </a>
          </div>

          <div className={`${styles.container} ${styles.heroBody}`}>
            <div className={`${styles.checkBadge} ${styles.fadeUp}`}>
              <Check aria-hidden="true" strokeWidth={3} />
            </div>
            <p className={`${styles.eyebrow} ${styles.eyebrowLight}`}>
              <span aria-hidden="true" />
              School Vendors Thank You
            </p>
            <h1 id="ty-heading" className={styles.fadeUp}>
              You’re <em className={styles.gradient}>booked.</em>
            </h1>
            <p className={`${styles.heroSub} ${styles.fadeUp}`}>
              Your call is confirmed. A calendar invite and a <strong>WhatsApp confirmation</strong> are on their way.
              Check your inbox and spam, just in case.
            </p>
          </div>
        </section>

        <section aria-labelledby="next-heading" className={`${styles.section} ${styles.surface}`}>
          <div className={`${styles.container} ${styles.narrow}`}>
            <div className={styles.sectionHead}>
              <h2 id="next-heading">
                What happens <em className={styles.gradientStrong}>next</em>
              </h2>
            </div>

            <ol className={styles.steps}>
              {nextSteps.map((step, index) => (
                <li key={step.title} className={styles.stepCard}>
                  <span className={`${styles.stepNumber} ${stepColors[index]}`}>{index + 1}</span>
                  <div>
                    <p className={styles.stepLabel}>Step {index + 1}</p>
                    <h3>{step.title}</h3>
                    <p className={styles.stepBody}>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <article className={styles.founderCard} aria-labelledby="founder-heading">
              <div className={styles.founderPhoto}>
                <Image
                  src="/images/edtech/founder-mausam-arora.webp"
                  alt="Mausam Arora, co-founder of Acquirely"
                  fill
                  sizes="(min-width: 640px) 280px, 100vw"
                />
              </div>
              <div className={styles.founderBody}>
                <p className={styles.founderRole}>Who you’ll meet</p>
                <p className={styles.founderLead}>You’ll speak directly with</p>
                <h3 id="founder-heading" className={styles.founderName}>
                  Mausam Arora<span>, co-founder</span>
                </h3>
                <dl className={styles.founderStats}>
                  {founderStats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.label}</dt>
                      <dd className={styles.gradientStrong}>{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className={styles.promise}>
                  <ShieldCheck aria-hidden="true" strokeWidth={2.25} />
                  No juniors, no hand-off.
                </p>
              </div>
              <p className={styles.reschedule}>
                <CalendarClock aria-hidden="true" />
                <span>
                  <strong>Need to reschedule?</strong> Just use the link in your calendar invite.
                </span>
              </p>
            </article>
          </div>
        </section>

        <section aria-labelledby="meet-heading" className={`${styles.section} ${styles.dark}`}>
          <div className={`${styles.container} ${styles.closing}`}>
            <h2 id="meet-heading">
              We’re looking forward to <em className={styles.gradient}>meeting you.</em>
            </h2>
            <p className={styles.closingBody}>
              And to understanding how we can help you become more visible and reach the decision-makers you’re after.
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerNote}>
            Need anything before the call? Write to <a href="mailto:team@acquirely.in">team@acquirely.in</a>.
          </p>
          <p className={styles.copyright}>© {new Date().getFullYear()} Acquirely. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
