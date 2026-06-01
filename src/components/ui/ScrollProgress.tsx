import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

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
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-rs-primary/50 via-rs-accent/40 to-rs-gradient-end/50 blur-md opacity-90"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
      <motion.div
        className="relative h-full w-full origin-left rounded-full bg-gradient-to-r from-rs-primary via-rs-accent to-rs-gradient-end shadow-[0_0_20px_rgba(79,140,255,0.55),0_0_40px_rgba(157,77,255,0.25)]"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
