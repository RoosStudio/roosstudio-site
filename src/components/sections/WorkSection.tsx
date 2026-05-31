import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function WorkSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="ablauf"
      className="rs-section-scroll-mt rs-section-border bg-rs-surface/30 rs-section-y"
      aria-labelledby="ablauf-heading"
    >
      <div className="rs-section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <SectionReveal strength="bold">
            <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
            <h2 id="ablauf-heading" className="rs-section-title">
              {site.work.title}
            </h2>
            <p className="rs-section-lede max-w-3xl">{site.work.intro}</p>
          </SectionReveal>
          <PipelinePanel />
        </div>

        <ol className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-3" role="list">
          {site.work.principles.map((p, i) => (
            <motion.li
              key={p.title}
              className="rs-surface-card flex min-h-56 flex-col p-6 sm:p-7"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs tabular-nums text-rs-primary" aria-hidden>
                  0{i + 1}
                </span>
                <span className="rounded-full border border-rs-border px-2.5 py-0.5 font-mono text-[0.65rem] uppercase text-rs-muted">
                  {i === 0 ? 'Stage' : i === 1 ? 'Check' : 'Live'}
                </span>
              </div>
              <div className="mt-auto pt-8">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-rs-text sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                  {p.line}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function PipelinePanel() {
  const reduce = useReducedMotion()

  return (
    <motion.aside
      className="rs-surface-card p-6 sm:p-7"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-rs-primary">
            Deployment-Pipeline
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-rs-text">
            Test, Deploy, Live
          </h3>
        </div>
        <span className="rounded-full bg-rs-primary/10 px-2.5 py-1 font-mono text-xs text-rs-primary">
          wiederholbar
        </span>
      </div>

      <dl className="mt-6 space-y-3">
        {site.work.lanes.map((lane, index) => (
          <div key={lane.label} className="grid grid-cols-[5rem_1fr] items-center gap-3">
            <dt className="font-mono text-xs uppercase text-rs-muted">{lane.label}</dt>
            <dd className="relative overflow-hidden rounded-lg border border-rs-border bg-rs-bg/50 px-3 py-2.5 text-sm text-rs-text-secondary">
              <span>{lane.value}</span>
              <motion.span
                className="absolute inset-y-0 left-0 w-full origin-left bg-rs-primary/6"
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{
                  scaleX: index === 0 ? 0.58 : index === 1 ? 0.76 : 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 * index, ease: EASE }}
                aria-hidden
              />
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {['Build', 'Sync', 'Reload'].map((step) => (
          <div
            key={step}
            className="rounded-lg border border-rs-border bg-rs-bg/40 px-3 py-3 text-center"
          >
            <p className="font-mono text-[0.65rem] uppercase text-rs-muted">{step}</p>
          </div>
        ))}
      </div>
    </motion.aside>
  )
}
