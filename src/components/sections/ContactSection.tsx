import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { MagneticButton } from '../ui/MagneticButton'

const mailtoHref = `mailto:${site.meta.email}?subject=${encodeURIComponent(
  site.contact.mailtoSubject,
)}`

export function ContactSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const titleY = useTransform(scrollYProgress, [0.1, 0.55], reduce ? [0, 0] : [60, 0])
  const titleOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0.2, 1])

  return (
    <section
      id="kontakt"
      ref={ref}
      className="rs-section-scroll-mt relative min-h-[70svh] overflow-hidden border-t border-rs-border/40 py-24 sm:min-h-[80svh] sm:py-32 md:py-40"
      aria-labelledby="kontakt-heading"
    >
      <div className="pointer-events-none absolute inset-0 rs-contact-glow" aria-hidden />
      <div className="rs-hero-grain pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="rs-section-inner rs-section-inner--wide relative flex min-h-[50svh] items-center justify-center pb-20 md:pb-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.05em] text-rs-text"
          >
            {site.contact.sectionTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-rs-text-secondary sm:mt-6 sm:text-lg">
            {site.contact.lede}
          </p>

          <div id="kontakt-email" className="mt-10 scroll-mt-28 sm:mt-12">
            <MagneticButton
              href={mailtoHref}
              className="rs-contact-email-link inline-block font-display text-2xl font-semibold tracking-[-0.02em] text-rs-primary transition hover:text-rs-text sm:text-4xl"
            >
              {site.contact.cta}
            </MagneticButton>
          </div>

          <ul
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:mt-12"
            role="list"
          >
            {site.contact.facts.map((fact, i) => (
              <motion.li
                key={fact}
                className="text-sm text-rs-muted"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.4, ease: EASE }}
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
