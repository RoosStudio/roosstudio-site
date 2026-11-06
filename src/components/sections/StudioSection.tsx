import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function StudioSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="studio"
      className="rs-section-scroll-mt rs-section-border rs-section-y relative overflow-hidden"
      aria-labelledby="studio-heading"
    >
      <div className="pointer-events-none absolute inset-0 rs-studio-glow" aria-hidden />

      <div className="rs-section-inner rs-section-inner--wide relative">
        <SectionReveal>
          <p className="rs-eyebrow">{site.studio.sectionEyebrow}</p>
          <h2 id="studio-heading" className="rs-section-title max-w-3xl">
            {site.studio.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-2xl">{site.studio.lede}</p>
        </SectionReveal>

        <ul className="mt-14 grid gap-10 sm:mt-16 md:grid-cols-3 md:gap-12" role="list">
          {site.studio.points.map((point, i) => (
            <motion.li
              key={point.title}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.08 * i, duration: 0.45, ease: EASE }}
            >
              <p className="font-display text-lg font-semibold tracking-[-0.02em] text-rs-text sm:text-xl">
                {point.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                {point.line}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
