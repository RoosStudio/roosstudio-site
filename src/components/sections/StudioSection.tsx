import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function StudioSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const glowY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 60])

  return (
    <section
      id="studio"
      ref={ref}
      className="rs-section-scroll-mt rs-section-y relative overflow-hidden border-t border-rs-border/40"
      aria-labelledby="studio-heading"
    >
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-rs-primary/15 blur-[100px]"
        style={{ y: glowY }}
        aria-hidden
      />

      <div className="rs-section-inner rs-section-inner--wide relative pb-8">
        <SectionReveal strength="bold">
          <p className="rs-eyebrow">{site.studio.sectionEyebrow}</p>
          <h2 id="studio-heading" className="rs-section-title rs-section-title--xl max-w-4xl">
            {site.studio.sectionTitle}
          </h2>
          <p className="rs-section-lede rs-section-lede--lg max-w-2xl">{site.studio.lede}</p>
        </SectionReveal>

        <ul className="mt-14 grid gap-0 border-t border-rs-border/50 sm:mt-16 md:grid-cols-3" role="list">
          {site.studio.points.map((point, i) => (
            <motion.li
              key={point.title}
              className="border-b border-rs-border/50 px-0 py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.1 * i, duration: 0.55, ease: EASE }}
            >
              <p className="font-mono text-xs text-rs-primary">0{i + 1}</p>
              <p className="mt-4 font-display text-xl font-semibold tracking-[-0.03em] text-rs-text sm:text-2xl">
                {point.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-rs-text-secondary sm:text-base">
                {point.line}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
