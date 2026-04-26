import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motionPresets'
import { SplitText } from './SplitText'

type HeroHeadlineProps = {
  line1: string
  line2: string
  className?: string
}

/**
 * Zweigeteilte H1: erste Zeile Wort-Stagger, zweite Zeile Mask-Reveal — wirkt
 * wie Layout aus einem Magazin, nicht wie Template.
 */
export function HeroHeadline({ line1, line2, className = '' }: HeroHeadlineProps) {
  const reduce = useReducedMotion()

  return (
    <h1
      className={`font-display text-[clamp(2.1rem,5.6vw,3.55rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-white ${className}`}
    >
      {reduce ? (
        <>
          <span className="block text-white">{line1}</span>
          <span className="mt-1 block text-zinc-400/95 sm:mt-1.5">{line2}</span>
        </>
      ) : (
        <>
          <span className="block text-white">
            <SplitText
              as="span"
              text={line1}
              delayStart={0.1}
              stagger={0.04}
              emphasis="dramatic"
            />
          </span>
          <motion.span
            className="rs-h1-subline mt-1.5 block bg-gradient-to-br from-zinc-100/95 via-zinc-300/90 to-zinc-500/80 bg-clip-text font-medium text-transparent [text-wrap:balance] sm:mt-2"
            style={{ willChange: 'clip-path' }}
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            transition={{ delay: 0.42, duration: 0.8, ease: EASE }}
          >
            {line2}
          </motion.span>
        </>
      )}
    </h1>
  )
}
