import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useState } from 'react'

/** Wegpunkte — visuell als Hub-Knoten, inhaltlich die Seitenstationen. */
const STOPS = [0, 0.28, 0.62, 0.92] as const

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 95, damping: 28, restDelta: 0.001 })
  const fillWidth = useTransform(progress, [0, 1], ['0%', '100%'])
  const nodeLeft = useTransform(progress, [0, 1], ['0%', '100%'])
  const [lit, setLit] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    let next = 0
    for (let i = 0; i < STOPS.length; i++) {
      if (v >= STOPS[i] - 0.03) next = i
    }
    setLit(next)
  })

  if (reduce) return null

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-3"
      aria-hidden
      title="Scroll-Pfad"
    >
      {/* soft track */}
      <div className="absolute inset-x-0 top-[5px] h-px bg-white/10" />
      <motion.div
        className="absolute top-[5px] h-px origin-left bg-gradient-to-r from-rs-lime via-[#9be36a] to-rs-primary"
        style={{ width: fillWidth }}
      />

      {/* hub stops */}
      <div className="absolute inset-x-[12%] top-[2px] flex justify-between sm:inset-x-[18%]">
        {STOPS.map((at, i) => (
          <span
            key={at}
            className={`block h-2 w-2 rounded-full transition-[background,box-shadow,transform] duration-300 ${
              i <= lit
                ? 'scale-110 bg-rs-lime shadow-[0_0_10px_rgba(200,245,66,0.65)]'
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* traveling hub node */}
      <motion.span
        className="absolute top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-white/30 bg-rs-bg"
        style={{ left: nodeLeft }}
      >
        <span className="absolute inset-[2px] rounded-full bg-rs-lime shadow-[0_0_14px_rgba(200,245,66,0.7)]" />
      </motion.span>
    </div>
  )
}
