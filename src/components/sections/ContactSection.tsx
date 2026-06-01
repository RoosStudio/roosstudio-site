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
      className="rs-section-scroll-mt rs-section-border rs-section-y"
      aria-labelledby="kontakt-heading"
    >
      <div className="rs-section-inner rs-section-inner--wide">
        <motion.div
          className="rs-contact-block mx-auto max-w-3xl text-center"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-4xl font-bold tracking-[-0.04em] text-rs-text sm:text-5xl"
          >
            {site.contact.sectionTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-rs-text-secondary">
            {site.contact.lede}
          </p>

          <motion.a
            id="kontakt-email"
            href={mailtoHref}
            className="rs-contact-email-link mt-10 inline-block scroll-mt-28 font-mono text-xl text-rs-primary transition hover:text-rs-text sm:text-2xl"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
            transition={springTap}
          >
            {site.contact.cta}
          </motion.a>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-3" role="list">
            {site.contact.facts.map((fact) => (
              <li key={fact} className="rs-contact-fact">
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
