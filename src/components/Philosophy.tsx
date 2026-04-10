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
      id="haltung"
      className="relative border-t border-rs-border bg-rs-bg py-24 sm:py-32 md:py-36"
      aria-labelledby="haltung-heading"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionReveal>
          <p
            id="haltung-heading"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-rs-primary"
          >
            Haltung
          </p>
        </SectionReveal>

        <div className="mt-14 sm:mt-16 md:mt-20">
          <motion.p
            className="text-[clamp(1.65rem,4.2vw,2.9rem)] font-bold leading-[1.12] tracking-tight text-rs-text"
            {...motionProps(0)}
          >
            Lieber bauen als drumherumreden.
          </motion.p>

          <motion.p
            className="mt-5 max-w-3xl text-[clamp(1.15rem,2.8vw,1.65rem)] font-medium leading-snug text-rs-text-secondary sm:mt-6"
            {...motionProps(0.07)}
          >
            Spass-Apps halten mich wach; WireTrack ist für den Teil, wo’s im
            Alltag zählt. Wenn’s knallt, wird gefixt – nicht wegpräsentiert.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
