import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function ApproachSection() {
  const reduce = useReducedMotion()
  const { approach } = site
  const lanes = [approach.test, approach.deploy, approach.live]

  return (
    <section
      id="vorgehen"
      className="rs-section-scroll-mt rs-section-border rs-section-y"
      aria-labelledby="vorgehen-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{approach.sectionEyebrow}</p>
          <h2 id="vorgehen-heading" className="rs-section-title max-w-3xl">
            {approach.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-2xl">{approach.lede}</p>
        </SectionReveal>

        <div className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-3">
          {lanes.map((lane, i) => (
            <motion.div
              key={lane.title}
              className="rs-approach-lane"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 * i, duration: 0.45, ease: EASE }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-rs-primary">
                {lane.title}
              </p>
              <p className="mt-2 font-mono text-sm text-rs-text sm:text-base">
                {'url' in lane ? lane.url : lane.command}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary">{lane.line}</p>
            </motion.div>
          ))}
        </div>

        <ol className="mt-10 grid gap-4 md:grid-cols-3" role="list">
          {approach.principles.map((p, i) => (
            <motion.li
              key={p.step}
              className="rs-approach-step"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.06 * i, duration: 0.45, ease: EASE }}
            >
              <span className="font-mono text-xs text-rs-muted">{p.step}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-rs-text">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-rs-text-secondary">{p.line}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
