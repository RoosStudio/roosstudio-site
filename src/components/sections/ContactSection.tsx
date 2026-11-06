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
      className="rs-section-scroll-mt rs-section-border rs-section-y relative overflow-hidden"
      aria-labelledby="kontakt-heading"
    >
      <div className="pointer-events-none absolute inset-0 rs-contact-glow" aria-hidden />

      <div className="rs-section-inner rs-section-inner--wide relative">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-4xl font-bold tracking-[-0.04em] text-rs-text sm:text-5xl md:text-6xl"
          >
            {site.contact.sectionTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-rs-text-secondary">
            {site.contact.lede}
          </p>

          <motion.a
            id="kontakt-email"
            href={mailtoHref}
            className="rs-contact-email-link mt-10 inline-block scroll-mt-28 font-display text-2xl font-semibold tracking-[-0.02em] text-rs-primary transition hover:text-rs-text sm:text-3xl"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
            transition={springTap}
          >
            {site.contact.cta}
          </motion.a>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2" role="list">
            {site.contact.facts.map((fact) => (
              <li key={fact} className="text-sm text-rs-muted">
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
