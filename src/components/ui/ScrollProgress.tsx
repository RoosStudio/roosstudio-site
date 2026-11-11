import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { useState } from 'react'

const GLYPHS = 'ROOS·STUDIO·0123456789' as const

function reelChar(seed: number, scroll: number, lag: number) {
  const t = Math.max(0, scroll * 16 - lag)
  const idx = Math.floor(t + seed * 5) % GLYPHS.length
  return GLYPHS[(idx + GLYPHS.length) % GLYPHS.length]
}

function Reel({ value, delay }: { value: string; delay: number }) {
  return (
    <span className="rs-scroll-reel">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          className="rs-scroll-reel-char"
          initial={{ y: '65%', opacity: 0, rotateX: -60 }}
          animate={{ y: '0%', opacity: 1, rotateX: 0 }}
          exit={{ y: '-65%', opacity: 0, rotateX: 60 }}
          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1], delay }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const [scroll, setScroll] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const q = Math.round(v * 40) / 40
    setScroll((prev) => (prev === q ? prev : q))
  })

  if (reduce) return null

  const chars = [0, 1, 2, 3].map((i) => reelChar(i + 2, scroll, i * 0.4))
  const pct = String(Math.min(99, Math.round(scroll * 100))).padStart(2, '0')

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] flex justify-end pr-5 pt-3 sm:pr-8 sm:pt-3.5"
      aria-hidden
    >
      <div className="rs-scroll-ticker">
        {chars.map((c, i) => (
          <Reel key={i} value={c} delay={i * 0.02} />
        ))}
        <span className="rs-scroll-ticker-sep" />
        <Reel value={pct[0]} delay={0.06} />
        <Reel value={pct[1]} delay={0.08} />
      </div>
    </div>
  )
}
