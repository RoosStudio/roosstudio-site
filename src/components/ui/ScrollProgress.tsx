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
        className="h-full w-full origin-left rounded-full bg-gradient-to-r from-rs-primary/90 via-[color-mix(in_srgb,var(--color-rs-gradient-mid)_75%,#fff_25%)] to-cyan-400/75 shadow-[0_0_12px_color-mix(in_srgb,var(--color-rs-primary)_40%,transparent)]"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
