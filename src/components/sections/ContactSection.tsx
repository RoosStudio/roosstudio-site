import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'

const mailtoHref = `mailto:${site.meta.email}?subject=${encodeURIComponent(
  site.contact.mailtoSubject,
)}`

export function ContactSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border-t border-rs-border/80 bg-rs-bg py-20 sm:scroll-mt-28 sm:py-24 md:py-32"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-lg px-5 sm:px-8">
        <motion.div
          className="rounded-2xl border border-white/[0.07] bg-rs-surface/60 p-8 text-center sm:p-10"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          {...(reduceMotion
            ? {}
            : {
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: '-40px' },
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
              })}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            {site.contact.sectionTitle}
          </h2>
          <a
            href={mailtoHref}
            className="rs-cta mx-auto mt-8 inline-flex w-full max-w-sm justify-center focus-visible:outline-none"
          >
            <span className="rs-cta-text-rest">{site.contact.cta}</span>
          </a>
          <a
            id="kontakt-email"
            href={mailtoHref}
            className="mt-6 block scroll-mt-32 font-mono text-sm text-rs-primary/95 hover:text-rs-primary sm:scroll-mt-40 sm:text-base"
          >
            {site.meta.email}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
