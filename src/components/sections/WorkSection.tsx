import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function WorkSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="ablauf"
      className="rs-section-scroll-mt rs-section-border bg-[linear-gradient(180deg,#050505_0%,#070807_100%)] rs-section-y"
      aria-labelledby="ablauf-heading"
    >
      <div className="rs-section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <SectionReveal strength="bold" useSpring>
            <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
            <h2 id="ablauf-heading" className="rs-section-title">
              {site.work.title}
            </h2>
            <p className="rs-section-lede max-w-3xl">{site.work.intro}</p>
          </SectionReveal>
          <PipelinePanel />
        </div>

        <ol className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3" role="list">
          {site.work.principles.map((p, i) => (
            <motion.li
              key={p.title}
              className="group relative flex min-h-64 flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))] p-5 shadow-[0_24px_70px_-52px_rgba(0,0,0,0.8)] sm:p-6"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.06 * i, duration: 0.52, ease: EASE }}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(142,230,201,0.55),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs tabular-nums text-rs-primary" aria-hidden>
                  0{i + 1}
                </span>
                <span className="rounded-md border border-white/[0.08] bg-black/22 px-2 py-1 font-mono text-[0.65rem] uppercase text-zinc-500">
                  {i === 0 ? 'Stage' : i === 1 ? 'Check' : 'Live'}
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-xl font-bold text-rs-text sm:text-2xl">
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
      className="rounded-lg border border-white/[0.09] bg-black/32 p-5 shadow-[0_34px_90px_-58px_rgba(142,230,201,0.38)] sm:p-6"
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.54, ease: EASE }}
      whileHover={reduce ? undefined : { y: -4 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-rs-primary">Deployment-Pipeline</p>
          <h3 className="mt-2 font-display text-xl font-bold text-white">Test, Deploy, Live</h3>
        </div>
        <span className="rounded-md bg-rs-primary/10 px-2.5 py-1 font-mono text-xs text-rs-primary">
          wiederholbar
        </span>
      </div>

      <dl className="mt-6 space-y-3">
        {site.work.lanes.map((lane, index) => (
          <div key={lane.label} className="grid grid-cols-[5rem_1fr] items-center gap-3">
            <dt className="font-mono text-xs uppercase text-zinc-500">{lane.label}</dt>
            <dd className="relative overflow-hidden rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-sm text-zinc-200">
              <span>{lane.value}</span>
              <motion.span
                className="absolute inset-y-0 left-0 w-full origin-left bg-rs-primary/8"
                initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                whileInView={{ scaleX: [0, index === 0 ? 0.58 : index === 1 ? 0.76 : 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 * index, ease: EASE }}
                aria-hidden
              />
            </dd>
          </div>
        ))}
      </dl>

      <motion.div
        className="mt-6 grid grid-cols-3 gap-2"
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.24 }}
      >
        {['Build', 'Sync', 'Reload'].map((step) => (
          <div key={step} className="rounded-lg border border-white/[0.07] bg-black/24 px-3 py-3 text-center">
            <p className="font-mono text-[0.65rem] uppercase text-zinc-500">{step}</p>
          </div>
        ))}
      </motion.div>
    </motion.aside>
  )
}
