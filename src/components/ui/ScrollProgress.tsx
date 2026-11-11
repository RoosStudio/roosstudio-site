import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion'
import { useState } from 'react'

function Digit({ value }: { value: string }) {
  return (
    <span className="rs-scroll-reel">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          className="rs-scroll-reel-char"
          initial={{ y: '60%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-60%', opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/** Minimaler Scroll-Indikator: nur Prozent, ruhig. */
export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const [pct, setPct] = useState('00')

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = String(Math.min(99, Math.round(v * 100))).padStart(2, '0')
    setPct((prev) => (prev === next ? prev : next))
  })

  if (reduce) return null

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] flex justify-end pr-5 pt-3.5 sm:pr-8"
      aria-hidden
    >
      <div className="rs-scroll-ticker">
        <Digit value={pct[0]} />
        <Digit value={pct[1]} />
      </div>
    </div>
  )
}
