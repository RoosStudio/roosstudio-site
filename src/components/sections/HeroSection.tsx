import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]), {
    stiffness: 80,
    damping: 28,
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.1])
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] flex-col justify-end" aria-label="Einstieg">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.img
          src={site.hero.image}
          alt=""
          className="h-[115%] w-full object-cover object-[center_25%]"
          style={{ y, scale }}
          initial={reduce ? false : { scale: 1.12, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          decoding="async"
          fetchPriority="high"
        />
        <div className="rs-hero-scrim absolute inset-0" />
        <div className="rs-grain absolute inset-0" />
      </div>

      <motion.div
        className="rs-section-inner rs-section-inner--wide relative z-10 w-full pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={reduce ? undefined : { opacity: fade }}
      >
        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-bold text-rs-text backdrop-blur-md"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="rs-live-dot" />
          Live-Tools · Schweiz
        </motion.div>

        <motion.p
          className="font-display text-[clamp(2.6rem,11vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.055em] text-rs-text"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
        >
          {site.hero.brand}
        </motion.p>

        <motion.h1
          className="mt-5 max-w-3xl font-display text-[1.45rem] font-bold leading-[1.12] tracking-[-0.03em] text-rs-text sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.75rem]"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-base leading-relaxed text-rs-text-secondary sm:mt-5 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
        >
          {site.hero.lede}
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3 sm:mt-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.35 }}
        >
          <a href={site.hero.primaryCta.href} className="rs-cta rs-cta--shine min-w-40 justify-center">
            {site.hero.primaryCta.label}
          </a>
          <a href={site.hero.secondaryCta.href} className="rs-cta rs-cta--ghost min-w-40 justify-center">
            {site.hero.secondaryCta.label}
          </a>
        </motion.div>

        <span className="sr-only">{site.hero.imageAlt}</span>
      </motion.div>
    </section>
  )
}
