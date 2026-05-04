import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * Dünne Leselinie am oberen Rand — klassisches Editorial-/App-Detail.
 */
export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scaleX = useSpring(x, { stiffness: 120, damping: 32, restDelta: 0.0001 })

  if (reduce) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed top-0 right-0 left-0 z-[200] h-[2px] w-full sm:h-0.5"
      style={{ marginTop: '-0.5px' }}
    >
      <motion.div
        className="h-full w-full origin-left rounded-full bg-gradient-to-r from-rs-primary via-[color-mix(in_srgb,var(--color-rs-gradient-mid)_88%,#fff_12%)] via-50% to-cyan-300 shadow-[0_0_16px_rgba(79,140,255,0.55),0_0_28px_rgba(157,77,255,0.25)]"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
