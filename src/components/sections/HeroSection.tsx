import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'
import { HeroHeadline } from '../ui/HeroHeadline'

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 0.45], [0, 120])
  const y2 = useTransform(scrollYProgress, [0, 0.45], [0, -90])
  const yContent = useTransform(scrollYProgress, [0, 0.4], [0, 40])
  const opBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.5])

  const blob1Y = reduce ? 0 : y1
  const blob2Y = reduce ? 0 : y2
  const contentY = reduce ? 0 : yContent
  const bgOp = reduce ? 1 : opBg

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-22 sm:pt-24"
      aria-label="Einstieg"
    >
      <div className="rs-hero-mesh pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="rs-hero-aurora-burst pointer-events-none absolute -left-1/4 top-1/4 h-[120%] w-[150%] blur-3xl"
        aria-hidden
      />
      <div
        className="rs-hero-film-streak pointer-events-none absolute inset-0 mix-blend-overlay"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_85%_at_30%_18%,rgba(79,140,255,0.22),transparent_52%)]"
        style={{ opacity: bgOp }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -left-1/3 top-0 h-full w-2/3 opacity-100 blur-3xl will-change-transform"
        style={{ y: blob1Y }}
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, var(--color-rs-gradient-start) 0%, transparent 60%)',
            animation: reduce ? undefined : 'rs-gradient-shift 20s ease-in-out infinite',
          }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-4/5 w-1/2 opacity-95 blur-3xl will-change-transform"
        style={{ y: blob2Y }}
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            background:
              'radial-gradient(ellipse at center, var(--color-rs-gradient-end) 0%, transparent 58%)',
            animation: reduce ? undefined : 'rs-gradient-shift 24s ease-in-out infinite reverse',
          }}
        />
      </motion.div>
      <div
        className="rs-hero-vignette pointer-events-none absolute inset-0"
        aria-hidden
      />

      <motion.div className="rs-section-inner relative" style={{ y: contentY }}>
        <div className="mt-0 flex items-center gap-3 sm:gap-4">
          <span className="rs-eyebrow-tick hidden sm:block" aria-hidden />
          <motion.div
            initial={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 shadow-[0_0_36px_-8px_rgba(79,140,255,0.45)] backdrop-blur-xl sm:px-4"
          >
            <span
              className="motion-safe:animate-pulse h-1.5 w-1.5 shrink-0 rounded-full bg-rs-primary shadow-[0_0_12px_rgba(79,140,255,0.9)] sm:hidden"
              aria-hidden
            />
            <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-300 sm:text-xs sm:tracking-[0.22em]">
              {site.hero.eyebrow}
            </p>
          </motion.div>
        </div>

        <div className="mt-5 max-w-[20rem] sm:mt-6 sm:max-w-none">
          <HeroHeadline line1={site.hero.h1Line1} line2={site.hero.h1Line2} />
        </div>

        <motion.p
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg sm:text-zinc-400/95"
        >
          {site.hero.lede}
        </motion.p>
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.45, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12"
        >
          <motion.a
            href={site.hero.primaryCta.href}
            className="rs-cta rs-cta--shine min-w-40 justify-center focus-visible:outline-none"
            onClick={(e) => scrollToKontaktEmail(e, reduce)}
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springTap}
          >
            <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
          </motion.a>
          <motion.a
            href={site.hero.secondaryCta.href}
            className="rs-link-ghost group inline-flex items-center rounded-sm border-b border-transparent pb-0.5 text-sm font-medium text-white/90 ring-offset-rs-bg transition-colors hover:border-rs-primary/50 sm:text-base"
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.4, ease: EASE }}
            whileHover={reduce ? undefined : { x: 2 }}
          >
            {site.hero.secondaryCta.label}
            <span
              className="ml-1.5 text-rs-primary transition-transform group-hover:translate-y-0.5"
              aria-hidden
            >
              ↓
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
