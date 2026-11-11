import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE } from '../../lib/motionPresets'

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 26, restDelta: 0.001 })

  const imgY = useTransform(smooth, [0, 1], [0, reduce ? 0 : 140])
  const imgX = useTransform(smooth, [0, 1], [0, reduce ? 0 : -60])
  const imgScale = useTransform(smooth, [0, 1], [1.08, reduce ? 1.08 : 1.22])
  const contentFade = useTransform(smooth, [0, 0.55], [1, 0])
  const contentY = useTransform(smooth, [0, 0.7], [0, reduce ? 0 : -28])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      aria-label="Einstieg"
    >
      <div className="absolute inset-0 bg-[#050508]" aria-hidden>
        <motion.div
          className="absolute inset-[-10%] will-change-transform"
          style={{ x: imgX, y: imgY, scale: imgScale }}
        >
          <img
            src={site.hero.atmosphere.src}
            alt=""
            className="h-full w-full object-cover"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        <div className="rs-hero-scrim absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_25%,rgba(79,140,255,0.16),transparent_60%)]" />
        <div className="pointer-events-none absolute -left-10 top-1/3 h-72 w-72 rounded-full bg-rs-lime/10 blur-[100px]" />
        {!reduce && <div className="rs-hero-sheen" />}
      </div>

      <motion.div
        className="rs-section-inner rs-section-inner--wide relative z-10 w-full pb-16 pt-28 sm:pb-24 sm:pt-36"
        style={reduce ? undefined : { opacity: contentFade, y: contentY }}
      >
        <motion.p
          className="rs-eyebrow"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {site.hero.badge}
        </motion.p>

        <motion.p
          className="mt-5 font-display text-[clamp(2.9rem,10vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-rs-text"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
        >
          {site.hero.brand}
        </motion.p>

        <motion.h1
          className="mt-6 max-w-2xl text-[1.25rem] font-medium leading-snug tracking-[-0.02em] text-rs-text sm:mt-7 sm:text-2xl md:text-[1.85rem]"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-rs-text-secondary sm:mt-5 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
        >
          {site.hero.lede}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.28 }}
        >
          <a href={site.hero.primaryCta.href} className="rs-cta rs-cta--shine min-w-36 justify-center">
            {site.hero.primaryCta.label}
          </a>
          <a
            href={site.hero.secondaryCta.href}
            className="rs-cta rs-cta--ghost min-w-36 justify-center"
            onClick={(e) => scrollToKontaktEmail(e, reduce)}
          >
            {site.hero.secondaryCta.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
