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
      className="pointer-events-none fixed top-0 right-0 left-0 z-[200] h-[3px] w-full sm:h-1"
      style={{ marginTop: '-1px' }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-rs-primary/60 via-fuchsia-400/35 to-cyan-300/50 blur-md opacity-90"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
      <motion.div
        className="relative h-full w-full origin-left rounded-full bg-gradient-to-r from-rs-primary via-[color-mix(in_srgb,var(--color-rs-gradient-mid)_88%,#fff_12%)] via-50% to-cyan-200 shadow-[0_0_22px_rgba(79,140,255,0.65),0_0_40px_rgba(157,77,255,0.35)]"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
