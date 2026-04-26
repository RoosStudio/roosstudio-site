import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-[5.5rem] sm:pt-24"
      aria-label="Einstieg"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_30%_20%,rgba(79,140,255,0.1),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-1/3 top-0 h-full w-2/3 opacity-90 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, var(--color-rs-gradient-start) 0%, transparent 60%)',
          animation: reduceMotion ? undefined : 'rs-gradient-shift 20s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-4/5 w-1/2 opacity-80 blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-rs-gradient-end) 0%, transparent 58%)',
          animation: reduceMotion ? undefined : 'rs-gradient-shift 24s ease-in-out infinite reverse',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-rs-primary/95 sm:text-sm"
        >
          {site.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-[20ch] font-display text-[clamp(2rem,5.2vw,3.35rem)] font-bold leading-[1.08] tracking-tight text-rs-text sm:max-w-3xl"
        >
          {site.hero.h1}
        </motion.h1>
        <motion.p
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.4 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-rs-text-secondary sm:mt-8 sm:text-lg"
        >
          {site.hero.lede}
        </motion.p>
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:mt-12"
        >
          <a
            href={site.hero.primaryCta.href}
            className="rs-cta min-w-[10rem] justify-center focus-visible:outline-none"
            onClick={(e) => scrollToKontaktEmail(e, reduceMotion)}
          >
            <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
          </a>
          <a
            href={site.hero.secondaryCta.href}
            className="group inline-flex items-center border-b border-white/0 pb-0.5 text-sm font-medium text-rs-text/85 transition-[border-color,color] hover:border-rs-primary/40 hover:text-rs-text sm:text-base"
          >
            {site.hero.secondaryCta.label}
            <span className="ml-1.5 text-rs-primary/80 transition-transform group-hover:translate-x-0.5" aria-hidden>
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
