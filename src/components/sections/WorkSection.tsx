import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function WorkSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="arbeit"
      className="rs-section-scroll-mt rs-section-border bg-rs-bg rs-section-y"
      aria-labelledby="arbeit-heading"
    >
      <div className="rs-section-inner">
        <SectionReveal strength="bold" useSpring>
          <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
          <h2 id="arbeit-heading" className="rs-section-title">
            {site.work.title}
          </h2>
          <p className="rs-section-lede max-w-3xl">{site.work.intro}</p>
        </SectionReveal>
        <ul
          className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-3"
          role="list"
        >
          {site.work.principles.map((p, i) => (
            <motion.li
              key={p.title}
              className="flex min-h-56 flex-col rounded-lg border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_24px_70px_-52px_rgba(0,0,0,0.8)] sm:p-6"
              initial={reduce ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 12, x: -8 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.04 * i, duration: 0.48, ease: EASE }}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="font-mono text-xs tabular-nums text-rs-primary"
                  aria-hidden
                >
                  0{i + 1}
                </span>
                <span className="h-px flex-1 translate-y-2 bg-white/[0.08]" aria-hidden />
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-lg font-bold text-rs-text sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                  {p.line}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
