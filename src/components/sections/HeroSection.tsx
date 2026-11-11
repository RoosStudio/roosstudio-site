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

const HUB_LINES = ['NexPlay', 'WireTrack', 'Lagerfotos', 'Rally Quest', 'Punkte-Arena'] as const

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]), {
    stiffness: 80,
    damping: 28,
  })
  const contentFade = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      aria-label="Einstieg"
    >
      <div className="absolute inset-0 bg-[#050508]" aria-hidden>
        <motion.div className="absolute inset-0" style={{ y }}>
          <motion.img
            src={site.hero.atmosphere.src}
            alt=""
            className="h-[112%] w-full object-cover object-center"
            decoding="async"
            fetchPriority="high"
            initial={reduce ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduce ? 0 : 10, ease: EASE }}
          />
        </motion.div>

        <div className="rs-hero-scrim absolute inset-0" />
        <div className="rs-grain absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_75%_35%,rgba(200,245,66,0.1),transparent_60%)]" />
        {!reduce && <div className="rs-hero-sheen" />}
      </div>

      <motion.div
        className="rs-section-inner rs-section-inner--wide relative z-10 grid w-full items-end gap-12 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.7fr)] lg:gap-16"
        style={reduce ? undefined : { opacity: contentFade }}
      >
        <div>
          <motion.p
            className="rs-eyebrow"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {site.hero.badge}
          </motion.p>

          <motion.p
            className="mt-4 font-display text-[clamp(2.75rem,9.5vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-rs-text"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
          >
            {site.hero.brand}
          </motion.p>

          <motion.h1
            className="mt-5 max-w-2xl text-[1.2rem] font-medium leading-snug tracking-[-0.02em] text-rs-text sm:mt-6 sm:text-2xl md:text-[1.75rem]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
          >
            {site.hero.headline}
          </motion.h1>

          <motion.p
            className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-rs-text-secondary sm:mt-5 sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
          >
            {site.hero.lede}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3 sm:mt-9"
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
        </div>

        <motion.aside
          className="rs-hub-panel relative hidden w-full max-w-sm justify-self-end lg:block"
          initial={reduce ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.22 }}
          aria-hidden
        >
          <div className="rs-hub-panel-glow" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rs-lime/90">
            Nex Hub
          </p>
          <p className="mt-2 text-sm leading-relaxed text-rs-text-secondary">
            Ein Einstieg. Mehrere Tools. Eigenes Ökosystem.
          </p>
          <ul className="mt-6 space-y-0">
            {HUB_LINES.map((label, i) => (
              <motion.li
                key={label}
                className="flex items-center gap-3 border-t border-white/10 py-3 last:border-b"
                initial={reduce ? false : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.3 + i * 0.06 }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rs-lime" />
                <span className="text-sm font-medium tracking-[-0.01em] text-rs-text">{label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.aside>
      </motion.div>
    </section>
  )
}
