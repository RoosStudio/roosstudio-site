import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE, springTap } from '../../lib/motionPresets'

const mailtoHref = `mailto:${site.meta.email}?subject=${encodeURIComponent(
  site.contact.mailtoSubject,
)}`

export function ContactSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="kontakt"
      className="rs-section-scroll-mt rs-section-border relative overflow-hidden rs-section-y"
      aria-labelledby="kontakt-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(79,140,255,0.35),transparent)]"
        aria-hidden
      />

      <div className="rs-section-inner relative z-10">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:items-start lg:gap-16"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          {...(reduce
            ? {}
            : {
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.32 },
                transition: { duration: 0.5, ease: EASE },
              })}
        >
          <div className="max-w-2xl">
            <p className="rs-eyebrow">Kontakt</p>
            <h2
              id="kontakt-heading"
              className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-rs-text sm:text-4xl md:text-5xl"
            >
              {site.contact.sectionTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-rs-text-secondary sm:text-lg">
              {site.contact.lede}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                href={mailtoHref}
                className="rs-cta rs-cta--shine inline-flex min-w-48 justify-center focus-visible:outline-none"
                whileHover={reduce ? undefined : { y: -1 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                <span className="rs-cta-text-rest">{site.contact.cta}</span>
              </motion.a>
              <a
                id="kontakt-email"
                href={mailtoHref}
                className="rs-link-ghost scroll-mt-32 rounded-sm font-mono text-sm text-rs-primary transition-colors hover:text-rs-text sm:scroll-mt-40"
              >
                {site.meta.email}
              </a>
            </div>
          </div>

          <ContactPanel />
        </motion.div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3" role="list">
          {site.contact.facts.map((fact) => (
            <li
              key={fact}
              className="flex items-center gap-2.5 rounded-full border border-rs-border bg-rs-surface/50 px-4 py-3 text-sm text-rs-text-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-rs-primary" aria-hidden />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <aside className="rs-surface-card relative overflow-hidden border-rs-primary/25 p-6 sm:p-7">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(79,140,255,0.08),rgba(157,77,255,0.05))]"
        aria-hidden
      />
      <div className="relative z-10">
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-rs-primary">
        {site.contact.panel.eyebrow}
      </p>
      <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-rs-text sm:text-2xl">
        {site.contact.panel.title}
      </h3>

      <dl className="mt-6 space-y-3">
        {site.contact.panel.rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[2.25rem_1fr] items-center gap-3 rounded-lg border border-rs-border bg-rs-bg/40 p-3"
          >
            <dt className="flex h-8 w-8 items-center justify-center rounded-full bg-rs-primary/10 font-mono text-xs text-rs-primary">
              {row.label}
            </dt>
            <dd className="text-sm font-medium text-rs-text-secondary">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 rounded-lg border border-rs-border bg-rs-bg/40 p-4">
        <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-rs-muted">Status</p>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-rs-border">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-rs-primary to-rs-accent" />
        </div>
        <p className="mt-3 text-sm text-rs-text-secondary">
          Testumgebung zuerst. Livebetrieb danach.
        </p>
      </div>
      </div>
    </aside>
  )
}
