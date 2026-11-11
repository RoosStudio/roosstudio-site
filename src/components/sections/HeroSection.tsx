import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE } from '../../lib/motionPresets'

const SLIDE_MS = 4200

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const slides = site.hero.slides
  const [index, setIndex] = useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 100]), {
    stiffness: 80,
    damping: 28,
  })
  const contentFade = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  useEffect(() => {
    if (reduce || slides.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [reduce, slides.length])

  const active = slides[index]

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end"
      aria-label="Einstieg"
    >
      <div className="absolute inset-0 overflow-hidden bg-[#050508]" aria-hidden>
        <AnimatePresence mode="sync">
          <motion.div
            key={active.src}
            className="absolute inset-0"
            initial={reduce ? false : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
            transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
            style={{ y }}
          >
            <img
              src={active.src}
              alt=""
              className="h-full w-full object-cover object-center"
              decoding="async"
              fetchPriority={index === 0 ? 'high' : 'low'}
            />
          </motion.div>
        </AnimatePresence>

        <div className="rs-hero-scrim absolute inset-0" />
        <div className="rs-grain absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_30%,rgba(79,140,255,0.18),transparent_60%)]" />
      </div>

      <motion.div
        className="rs-section-inner rs-section-inner--wide relative z-10 w-full pb-16 pt-28 sm:pb-20 sm:pt-32"
        style={reduce ? undefined : { opacity: contentFade }}
      >
        <motion.div
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-bold text-rs-text backdrop-blur-md"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="rs-live-dot" />
          <AnimatePresence mode="wait">
            <motion.span
              key={active.label}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
            >
              Hub · {active.label}
            </motion.span>
          </AnimatePresence>
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
          <a
            href={site.hero.secondaryCta.href}
            className="rs-cta rs-cta--ghost min-w-40 justify-center"
            onClick={(e) => scrollToKontaktEmail(e, reduce)}
          >
            {site.hero.secondaryCta.label}
          </a>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-2" role="tablist" aria-label="Hero-Bilder">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={slide.label}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-rs-lime' : 'w-3 bg-white/25 hover:bg-white/45'
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <span className="sr-only">{active.alt}</span>
      </motion.div>
    </section>
  )
}
