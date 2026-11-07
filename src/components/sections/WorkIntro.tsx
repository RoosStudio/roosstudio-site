import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'

/** Sticky kinetic Titel — Zoom-out in die Werkstatt. */
export function WorkIntro() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.72])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80])
  const line = useTransform(scrollYProgress, [0, 0.6], [0, 1])

  return (
    <div ref={ref} className="relative h-[120svh] sm:h-[130svh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div
          className="rs-section-inner rs-section-inner--wide relative w-full"
          style={{ scale, opacity, y }}
        >
          <p className="rs-eyebrow">{site.work.sectionEyebrow}</p>
          <h2
            id="arbeit-heading"
            className="mt-4 max-w-5xl font-display text-[clamp(2.6rem,9vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.05em] text-rs-text"
          >
            {site.work.sectionTitle}
          </h2>
          <p className="rs-section-lede rs-section-lede--lg mt-5 max-w-2xl">{site.work.lede}</p>
          <motion.div
            className="mt-10 h-px origin-left bg-gradient-to-r from-rs-primary via-rs-primary/40 to-transparent"
            style={{ scaleX: line }}
            aria-hidden
          />
        </motion.div>
      </div>
    </div>
  )
}
