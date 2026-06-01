import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function ServicesSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="leistungen"
      className="rs-section-scroll-mt rs-section-border rs-section-y"
      aria-labelledby="leistungen-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.services.sectionEyebrow}</p>
          <h2 id="leistungen-heading" className="rs-section-title max-w-3xl">
            {site.services.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-2xl">{site.services.lede}</p>
        </SectionReveal>

        <ul className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3" role="list">
          {site.services.items.map((item, i) => (
            <motion.li
              key={item.title}
              className="rs-service-card"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.07 * i, duration: 0.45, ease: EASE }}
            >
              <span className="font-mono text-xs text-rs-primary" aria-hidden>
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-rs-text sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                {item.line}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
