import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motionPresets'
import { SplitText } from './SplitText'

type HeroHeadlineProps = {
  line1: string
  line2: string
  className?: string
}

export function HeroHeadline({ line1, line2, className = '' }: HeroHeadlineProps) {
  const reduce = useReducedMotion()

  return (
    <h1
      className={`text-4xl font-semibold leading-[1.06] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.25rem] ${className}`}
    >
      {reduce ? (
        <>
          <span className="rs-hero-gradient-word">{line1}</span>
          <span className="rs-h1-subline mt-3 block text-[0.72em] sm:mt-4">{line2}</span>
        </>
      ) : (
        <>
          <SplitText
            as="span"
            text={line1}
            wordClassName="rs-hero-gradient-word"
            delayStart={0.06}
            stagger={0.04}
            emphasis="normal"
          />
          <motion.span
            className="rs-h1-subline mt-3 block text-[0.72em] [text-wrap:balance] sm:mt-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6, ease: EASE }}
          >
            {line2}
          </motion.span>
        </>
      )}
    </h1>
  )
}
