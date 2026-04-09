import { motion, useReducedMotion } from 'framer-motion'
import { SectionReveal } from './SectionReveal'

const ease = [0.22, 1, 0.36, 1] as const

const inView = {
  once: true,
  margin: '-60px',
} as const

export function Philosophy() {
  const reduceMotion = useReducedMotion()

  const motionProps = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 10 } as const,
          whileInView: { opacity: 1, y: 0 } as const,
          viewport: inView,
          transition: { duration: 0.5, delay, ease },
        }

  return (
    <section
      id="philosophie"
      className="relative border-t border-rs-border bg-rs-bg py-32 sm:py-40 md:py-44"
      aria-labelledby="philosophie-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionReveal>
          <p
            id="philosophie-heading"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-rs-primary"
          >
            WARUM
          </p>
        </SectionReveal>

        <div className="mt-14 sm:mt-16 md:mt-20">
          <motion.p
            className="text-[clamp(1.65rem,4.2vw,2.9rem)] font-bold leading-[1.12] tracking-tight text-rs-text"
            {...motionProps(0)}
          >
            Aus Ideen entstehen Anwendungen.
          </motion.p>

          <motion.p
            className="mt-5 text-[clamp(1.65rem,4.2vw,2.9rem)] font-bold leading-[1.12] tracking-tight text-rs-text sm:mt-6"
            {...motionProps(0.07)}
          >
            Aus Anwendungen werden Systeme.
          </motion.p>

          <motion.p
            className="mt-14 max-w-2xl text-lg font-medium leading-snug text-rs-text-secondary sm:mt-16 sm:text-xl md:mt-20 md:text-2xl"
            {...motionProps(0.12)}
          >
            Genau das macht den Unterschied.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
