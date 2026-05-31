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
      className="rs-section-scroll-mt rs-section-border bg-[linear-gradient(180deg,var(--color-rs-bg),#080908)] py-20 sm:py-28"
      aria-labelledby="kontakt-heading"
    >
      <div className="rs-section-inner">
        <motion.div
          className="grid gap-8 border-y border-white/[0.08] py-10 sm:py-12 md:grid-cols-[1fr_auto] md:items-end md:gap-12"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          {...(reduce
            ? {}
            : {
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.32, margin: '0px 0px -8% 0px' },
                transition: { duration: 0.55, ease: EASE },
              })}
        >
          <div className="max-w-3xl">
            <p className="rs-eyebrow">Kontakt</p>
            <h2
              id="kontakt-heading"
              className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-normal text-rs-text sm:text-4xl md:text-5xl"
            >
              {site.contact.sectionTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-rs-text-secondary sm:text-lg">
              {site.contact.lede}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            <motion.a
              href={mailtoHref}
              className="rs-cta rs-cta--shine inline-flex w-full min-w-56 justify-center focus-visible:outline-none sm:w-auto"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={springTap}
            >
              <span className="rs-cta-text-rest">{site.contact.cta}</span>
            </motion.a>
            <a
              id="kontakt-email"
              href={mailtoHref}
              className="rs-link-ghost scroll-mt-32 rounded-sm font-mono text-sm text-rs-primary/95 transition-colors ring-offset-rs-bg hover:text-white sm:scroll-mt-40 sm:text-base"
            >
              {site.meta.email}
            </a>
          </div>
        </motion.div>

        <ul
          className="grid gap-3 border-b border-white/[0.06] py-5 text-sm text-rs-text-secondary sm:grid-cols-3"
          role="list"
        >
          {site.contact.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rs-primary" aria-hidden />
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
