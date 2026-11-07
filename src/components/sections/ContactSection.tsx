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
  const titleY = useTransform(scrollYProgress, [0.05, 0.5], reduce ? [0, 0] : [90, 0])
  const titleScale = useTransform(scrollYProgress, [0.05, 0.55], reduce ? [1, 1] : [0.92, 1])
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.4], [0.15, 1])
  const glow = useTransform(scrollYProgress, [0.2, 0.6], [0.25, 0.7])

  return (
    <section
      id="kontakt"
      ref={ref}
      className="rs-section-scroll-mt relative min-h-[80svh] overflow-hidden border-t border-rs-border/40 py-28 sm:min-h-[88svh] sm:py-36 md:py-44"
      aria-labelledby="kontakt-heading"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rs-primary/20 blur-[110px]"
        style={{ opacity: glow }}
        aria-hidden
      />
      <div className="rs-hero-grain pointer-events-none absolute inset-0 opacity-40" aria-hidden />

      <div className="rs-section-inner rs-section-inner--wide relative flex min-h-[55svh] items-center justify-center pb-24 md:pb-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        >
          <h2
            id="kontakt-heading"
            className="font-display text-[clamp(2.75rem,11vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-rs-text"
          >
            {site.contact.sectionTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-rs-text-secondary sm:mt-7 sm:text-lg">
            {site.contact.lede}
          </p>

          <div id="kontakt-email" className="mt-10 scroll-mt-28 sm:mt-14">
            <MagneticButton
              href={mailtoHref}
              className="rs-contact-email-link inline-block font-display text-[clamp(1.35rem,4.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-rs-primary transition hover:text-rs-text"
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
