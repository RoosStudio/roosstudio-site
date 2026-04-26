import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { SectionReveal } from '../ui/SectionReveal'

const ease = [0.22, 1, 0.36, 1] as const
const inView = { once: true, margin: '-50px' } as const

export function WorkSection() {
  const reduceMotion = useReducedMotion()

  const pMotion = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 6 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          viewport: inView,
          transition: { duration: 0.4, delay, ease },
        }

  return (
    <section
      id="arbeit"
      className="scroll-mt-24 border-t border-rs-border/80 bg-rs-bg py-20 sm:scroll-mt-28 sm:py-28 md:py-32"
      aria-labelledby="arbeit-heading"
    >
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <SectionReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-rs-primary/90 sm:text-sm">
            {site.work.sectionEyebrow}
          </p>
          <h2
            id="arbeit-heading"
            className="mt-2 font-display text-2xl font-bold leading-tight sm:text-4xl"
          >
            {site.work.title}
          </h2>
          <p className="mt-3 text-sm text-rs-text-secondary sm:mt-4 sm:text-base">
            {site.work.intro}
          </p>
        </SectionReveal>
        <ul
          className="mt-10 divide-y divide-white/[0.06] border-t border-b border-white/[0.06] sm:mt-12"
          role="list"
        >
          {site.work.principles.map((p, i) => (
            <li key={p.title} className="flex flex-col gap-0.5 py-5 sm:py-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-rs-text sm:text-xl">
                  {p.title}
                </h3>
                <span className="font-mono text-[0.7rem] tabular-nums text-rs-muted" aria-hidden>
                  0{i + 1}
                </span>
              </div>
              <motion.p
                className="text-sm leading-relaxed text-rs-text-secondary sm:text-base"
                {...pMotion(0.04 * i)}
              >
                {p.line}
              </motion.p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
