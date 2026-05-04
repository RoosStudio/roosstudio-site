import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motionPresets'

type SplitTextProps = {
  text: string
  as?: 'h1' | 'h2' | 'p' | 'span'
  className?: string
  /** Zusatz-Klassen pro Wort (z. B. Gradient) */
  wordClassName?: string
  /** Start-Verzögerung vor dem ersten Wort (s) */
  delayStart?: number
  /** Stagger pro Wort (s) */
  stagger?: number
  /** stärker: mehr y-Offset */
  emphasis?: 'normal' | 'dramatic'
}

/**
 * Wort-für-Wort-Entrance — wirkt hochwertig, skaliert besser als ein Block-Fade.
 * (Kein Blur: bessere Performance auf mobilen GPUs.)
 */
export function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  wordClassName = '',
  delayStart = 0.06,
  stagger = 0.04,
  emphasis = 'normal',
}: SplitTextProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ').filter(Boolean)

  if (reduce) {
    return (
      <Tag className={className}>
        <span className={wordClassName}>{text}</span>
      </Tag>
    )
  }

  const dy = emphasis === 'dramatic' ? 28 : 16

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={`${i}-${word}`} className="inline [contain:layout]">
          <motion.span
            className={['inline-block will-change-transform', wordClassName].filter(Boolean).join(' ')}
            style={{ backfaceVisibility: 'hidden' }}
            initial={{ opacity: 0, y: dy }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: delayStart + i * stagger,
              duration: 0.6,
              ease: EASE,
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : null}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
