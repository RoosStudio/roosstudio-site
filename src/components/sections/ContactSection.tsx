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
      className="rs-section-scroll-mt rs-contact-section relative overflow-hidden rs-section-y"
      aria-labelledby="kontakt-heading"
    >
      <div className="rs-contact-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="rs-section-inner rs-section-inner--wide relative z-10">
        <motion.div
          className="rs-contact-hero-card"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <p className="rs-eyebrow">{site.contact.sectionEyebrow}</p>
              <h2
                id="kontakt-heading"
                className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-rs-text sm:text-5xl md:text-6xl"
              >
                {site.contact.sectionTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-rs-text-secondary">
                {site.contact.lede}
              </p>
              <p className="mt-4 text-base font-medium text-rs-primary">{site.contact.highlight}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.a
                  href={mailtoHref}
                  className="rs-cta rs-cta--shine inline-flex min-w-48 justify-center px-8 py-4 text-base focus-visible:outline-none"
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={springTap}
                >
                  <span className="rs-cta-text-rest">{site.contact.cta}</span>
                </motion.a>
                <a
                  id="kontakt-email"
                  href={mailtoHref}
                  className="rs-contact-email scroll-mt-40 font-mono text-base text-rs-text transition hover:text-rs-primary sm:text-lg"
                >
                  {site.meta.email}
                </a>
              </div>
            </div>

            <ContactPanel />
          </div>

          <ul className="mt-10 flex flex-wrap gap-3" role="list">
            {site.contact.facts.map((fact, i) => (
              <motion.li
                key={fact}
                className="rs-contact-fact"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
              >
                {fact}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function ContactPanel() {
  return (
    <aside className="rs-contact-panel">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rs-primary">
        {site.contact.panel.eyebrow}
      </p>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-rs-text">
        {site.contact.panel.title}
      </h3>

      <dl className="mt-6 space-y-3">
        {site.contact.panel.rows.map((row) => (
          <div key={row.label} className="rs-contact-panel-row">
            <dt className="font-display text-lg font-bold text-rs-primary">{row.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}
