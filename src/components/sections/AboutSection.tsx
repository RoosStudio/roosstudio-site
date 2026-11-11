import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'
import { SectionReveal } from '../ui/SectionReveal'

export function AboutSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="studio"
      className="rs-section-scroll-mt rs-section-y border-t border-white/[0.06]"
      aria-labelledby="about-heading"
    >
      <div className="rs-section-inner rs-section-inner--wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <SectionReveal strength="bold">
            <p className="rs-eyebrow">{site.about.eyebrow}</p>
            <h2 id="about-heading" className="rs-title max-w-2xl">
              {site.about.title}
            </h2>
            <p className="rs-lede max-w-xl">{site.about.lede}</p>
          </SectionReveal>

          <ul className="space-y-0 self-end" role="list">
            {site.about.points.map((point, i) => (
              <motion.li
                key={point.label}
                className="border-t border-white/10 py-5 last:border-b"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-rs-primary">
                  {point.label}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-rs-text-secondary sm:text-base">
                  {point.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
