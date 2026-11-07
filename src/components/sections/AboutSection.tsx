import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function AboutSection() {
  const reduce = useReducedMotion()

  return (
    <section id="studio" className="rs-section-scroll-mt rs-section-y border-t border-white/10" aria-labelledby="about-heading">
      <div className="rs-section-inner rs-section-inner--wide">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.about.eyebrow}</p>
          <h2 id="about-heading" className="rs-title max-w-4xl">
            {site.about.title}
          </h2>
          <p className="rs-lede max-w-2xl">{site.about.lede}</p>
        </SectionReveal>

        <ul className="mt-10 flex flex-wrap gap-2 sm:mt-12" role="list">
          {site.about.facts.map((fact, i) => (
            <motion.li
              key={fact}
              className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-rs-text-secondary"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.35, ease: EASE }}
            >
              {fact}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
