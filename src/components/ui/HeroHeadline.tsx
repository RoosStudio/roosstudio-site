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
      className={`font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.5rem] ${className}`}
    >
      {reduce ? (
        <>
          <span className="rs-hero-line1-wrap block">
            <span className="rs-hero-gradient-word">{line1}</span>
          </span>
          <span className="rs-h1-subline rs-h1-subline--static mt-3 block text-[0.58em] sm:mt-4">
            {line2}
          </span>
        </>
      ) : (
        <>
          <span className="rs-hero-line1-wrap block">
            <SplitText
              as="span"
              text={line1}
              wordClassName="rs-hero-gradient-word"
              delayStart={0.06}
              stagger={0.045}
              emphasis="normal"
            />
          </span>
          <motion.span
            className="rs-h1-subline rs-h1-subline--motion mt-3 block bg-[length:220%_220%] text-[0.58em] [text-wrap:balance] sm:mt-4"
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            transition={{ delay: 0.4, duration: 0.85, ease: EASE }}
          >
            {line2}
          </motion.span>
        </>
      )}
    </h1>
  )
}
