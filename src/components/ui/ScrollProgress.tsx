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
      className="pointer-events-none fixed top-0 right-0 left-0 z-[200] h-px w-full"
      aria-hidden
    >
      <motion.div
        className="h-full w-full origin-left bg-rs-primary/80"
        style={{ scaleX, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
