import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function ApproachSection() {
  const reduce = useReducedMotion()
  const { approach } = site
  const lanes = [approach.test, approach.deploy, approach.launch]

  return (
    <section
      id="vorgehen"
      className="rs-section-scroll-mt rs-approach-section relative overflow-hidden rs-section-y"
      aria-labelledby="vorgehen-heading"
    >
      <div className="rs-approach-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="rs-section-inner rs-section-inner--wide relative z-10">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{approach.sectionEyebrow}</p>
          <h2 id="vorgehen-heading" className="rs-section-title rs-section-title--xl max-w-4xl">
            {approach.sectionTitle}
          </h2>
          <p className="rs-section-lede rs-section-lede--lg max-w-2xl">{approach.lede}</p>
          <p className="mt-4 inline-flex rounded-full border border-rs-primary/30 bg-rs-primary/8 px-4 py-2 text-sm font-medium text-rs-primary">
            {approach.vibe}
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {lanes.map((lane, i) => (
            <motion.div
              key={lane.title}
              className="rs-approach-card"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: EASE }}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <span className="rs-approach-card-num">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.03em] text-rs-text">
                {lane.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-rs-primary sm:text-base">
                {'url' in lane ? lane.url : lane.command}
              </p>
              <p className="mt-4 text-base leading-relaxed text-rs-text-secondary">{lane.line}</p>
            </motion.div>
          ))}
        </div>

        <ol className="mt-6 grid gap-4 lg:grid-cols-3" role="list">
          {approach.principles.map((p, i) => (
            <motion.li
              key={p.step}
              className="rs-approach-principle"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08 * i, duration: 0.45, ease: EASE }}
            >
              <span className="font-mono text-sm text-rs-muted">{p.step}</span>
              <h4 className="mt-3 font-display text-xl font-semibold text-rs-text">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                {p.line}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
