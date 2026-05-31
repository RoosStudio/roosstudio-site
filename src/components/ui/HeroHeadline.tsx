import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motionPresets'
import { SplitText } from './SplitText'

type HeroHeadlineProps = {
  line1: string
  line2: string
  className?: string
}

/**
 * H1: erste Zeile mit ruhigem Gradient pro Wort, zweite Zeile mit dezentem Verlauf + Reveal.
 */
export function HeroHeadline({ line1, line2, className = '' }: HeroHeadlineProps) {
  const reduce = useReducedMotion()

  return (
    <h1
      className={`font-display text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl md:text-7xl lg:text-8xl ${className}`}
    >
      {reduce ? (
        <>
          <span className="rs-hero-line1-wrap block">
            <span className="rs-hero-gradient-word">{line1}</span>
          </span>
          <span className="rs-h1-subline rs-h1-subline--static mt-1.5 block sm:mt-2">{line2}</span>
        </>
      ) : (
        <>
          <span className="rs-hero-line1-wrap block">
            <SplitText
              as="span"
              text={line1}
              wordClassName="rs-hero-gradient-word"
              delayStart={0.08}
              stagger={0.045}
              emphasis="dramatic"
            />
          </span>
          <motion.span
            className="rs-h1-subline rs-h1-subline--motion mt-1.5 block bg-[length:220%_220%] bg-clip-text font-medium text-transparent [text-wrap:balance] sm:mt-2"
            style={{ willChange: 'clip-path' }}
            initial={{ clipPath: 'inset(0 0 0 100%)' }}
            animate={{ clipPath: 'inset(0 0 0 0%)' }}
            transition={{ delay: 0.42, duration: 0.85, ease: EASE }}
          >
            {line2}
          </motion.span>
        </>
      )}
    </h1>
  )
}
