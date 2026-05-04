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
          className="mt-12 max-w-2xl divide-y divide-white/[0.06] border-t border-b border-white/[0.06] sm:mt-14"
          role="list"
        >
          {site.work.principles.map((p, i) => (
            <motion.li
              key={p.title}
              className="flex flex-col gap-0.5 py-5 sm:py-6"
              initial={reduce ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 12, x: -8 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
              transition={{ delay: 0.04 * i, duration: 0.48, ease: EASE }}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-rs-text sm:text-xl">
                  {p.title}
                </h3>
                <span
                  className="font-mono text-[0.7rem] tabular-nums text-rs-muted"
                  aria-hidden
                >
                  0{i + 1}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                {p.line}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
