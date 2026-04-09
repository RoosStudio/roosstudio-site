import { motion } from 'framer-motion'
import { SectionReveal } from './SectionReveal'

const lines = [
  'Wir bauen, weil wir es können.',
  'Wir testen Ideen — und machen daraus Systeme.',
  'Spass ist kein Gegensatz zu Qualität.',
]

export function Philosophy() {
  return (
    <section
      id="philosophie"
      className="relative border-t border-rs-border bg-rs-bg py-28 sm:py-36"
      aria-labelledby="philosophie-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionReveal>
          <p
            id="philosophie-heading"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-rs-primary"
          >
            Warum
          </p>
        </SectionReveal>
        <div className="mt-20 flex flex-col gap-16 sm:gap-20 md:gap-24">
          {lines.map((line, i) => (
            <SectionReveal key={line} delay={i * 0.08}>
              <motion.p
                className="text-[clamp(1.5rem,4vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-rs-text"
                whileHover={{ x: 6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              >
                {line}
              </motion.p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
