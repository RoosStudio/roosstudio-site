import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/** Weiches Studi-Licht — keine verzerrten SVG-Sterne. */
export function AmbientGlow() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 40, damping: 28 })
  const yA = useTransform(smooth, [0, 1], [0, reduce ? 0 : -80])
  const yB = useTransform(smooth, [0, 1], [0, reduce ? 0 : 60])

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -right-[12%] -top-[8%] h-[48vmax] w-[48vmax] rounded-full bg-[radial-gradient(circle,rgba(79,140,255,0.16)_0%,transparent_68%)]"
        style={{ y: yA }}
      />
      <motion.div
        className="absolute -bottom-[18%] -left-[10%] h-[42vmax] w-[42vmax] rounded-full bg-[radial-gradient(circle,rgba(200,245,66,0.06)_0%,transparent_70%)]"
        style={{ y: yB }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,transparent_40%,rgba(7,7,12,0.55)_100%)]" />
    </div>
  )
}
