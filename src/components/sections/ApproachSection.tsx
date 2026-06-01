import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function ApproachSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="vorgehen"
      className="rs-section-scroll-mt rs-section-border bg-rs-surface/20 rs-section-y"
      aria-labelledby="vorgehen-heading"
    >
      <div className="rs-section-inner rs-section-inner--wide">
        <SectionReveal>
          <p className="rs-eyebrow">{site.approach.sectionEyebrow}</p>
          <h2 id="vorgehen-heading" className="rs-section-title max-w-2xl">
            {site.approach.sectionTitle}
          </h2>
          <p className="rs-section-lede max-w-xl">{site.approach.lede}</p>
        </SectionReveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-rs-border bg-rs-border sm:mt-14 sm:grid-cols-3">
          {site.approach.steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="rs-approach-step-card"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-rs-primary">
                {step.title}
              </p>
              <p className="mt-3 font-mono text-sm text-rs-text sm:text-base">{step.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary">{step.line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
