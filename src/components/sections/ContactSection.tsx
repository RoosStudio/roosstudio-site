import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'

const mailtoHref = `mailto:${site.meta.email}?subject=${encodeURIComponent(site.contact.mailtoSubject)}`

export function ContactSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="kontakt"
      className="rs-section-scroll-mt relative overflow-hidden border-t border-white/10 py-24 sm:py-32 md:py-40"
      aria-labelledby="kontakt-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rs-primary/12 blur-[110px]"
        aria-hidden
      />

      <div className="rs-section-inner relative mx-auto max-w-3xl pb-16 text-center md:pb-0">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-[clamp(2.2rem,8vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-rs-text"
          >
            {site.contact.sectionTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[0.95rem] text-rs-text-secondary sm:text-base">
            {site.contact.lede}
          </p>

          <div id="kontakt-email" className="mt-9 scroll-mt-28 sm:mt-11">
            <a
              href={mailtoHref}
              className="inline-block font-display text-[clamp(1.25rem,4vw,2.1rem)] font-semibold tracking-[-0.025em] text-rs-lime transition hover:text-rs-text"
            >
              {site.contact.cta}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2" role="list">
            {site.contact.facts.map((f) => (
              <li key={f} className="text-sm text-rs-muted">
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
