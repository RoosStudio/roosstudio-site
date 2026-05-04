import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { springTap } from '../../lib/motionPresets'

const mailtoHref = `mailto:${site.meta.email}?subject=${encodeURIComponent(
  site.contact.mailtoSubject,
)}`

export function ContactSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="kontakt"
      className="rs-section-scroll-mt rs-section-border bg-rs-bg rs-section-y"
      aria-labelledby="kontakt-heading"
    >
      <div className="rs-section-inner">
        <motion.div
          className="mx-auto max-w-lg rounded-2xl border border-white/[0.08] bg-gradient-to-b from-rs-surface/50 to-rs-card/30 p-8 text-center shadow-[0_24px_64px_-40px_rgba(0,0,0,0.65)] sm:p-10"
          initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.99 }}
          {...(reduce
            ? {}
            : {
                whileInView: { opacity: 1, y: 0, scale: 1 },
                viewport: { once: true, amount: 0.35, margin: '0px 0px 0px 0px' },
                transition: { type: 'spring' as const, stiffness: 70, damping: 20, mass: 0.8 },
              })}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-2xl font-bold leading-[1.12] tracking-tight sm:text-3xl md:text-[2rem] md:leading-[1.18]"
          >
            {site.contact.sectionTitle}
          </h2>
          <motion.a
            href={mailtoHref}
            className="rs-cta rs-cta--shine mx-auto mt-8 inline-flex w-full max-w-sm justify-center focus-visible:outline-none"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springTap}
          >
            <span className="rs-cta-text-rest">{site.contact.cta}</span>
          </motion.a>
          <a
            id="kontakt-email"
            href={mailtoHref}
            className="rs-link-ghost mt-6 inline-block scroll-mt-32 rounded-sm font-mono text-sm text-rs-primary/95 transition-colors ring-offset-[color-mix(in_srgb,var(--color-rs-card)_30%,#0c0c10_70%)] hover:text-white sm:scroll-mt-40 sm:text-base"
          >
            {site.meta.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
