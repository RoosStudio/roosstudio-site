import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end"
      aria-label="Einstieg"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.img
          src={site.hero.image}
          alt=""
          className="h-full w-full object-cover object-[center_30%]"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
          decoding="async"
          fetchPriority="high"
        />
        <div className="rs-hero-scrim absolute inset-0" />
      </div>

      <div className="rs-section-inner rs-section-inner--wide relative z-10 w-full pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="font-display text-[clamp(2.5rem,10vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-rs-text [text-shadow:0_2px_40px_rgba(0,0,0,0.55)]"
        >
          {site.hero.brand}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.55, ease: EASE }}
          className="mt-4 max-w-2xl font-display text-xl font-semibold leading-tight tracking-[-0.03em] text-rs-text sm:mt-5 sm:text-2xl md:text-3xl lg:text-4xl"
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.5, ease: EASE }}
          className="mt-3 max-w-xl text-base leading-relaxed text-rs-text-secondary sm:mt-4 sm:text-lg"
        >
          {site.hero.lede}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.45, ease: EASE }}
          className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8"
        >
          <motion.a
            href={site.hero.primaryCta.href}
            className="rs-cta rs-cta--shine min-w-40 justify-center focus-visible:outline-none"
            onClick={(e) => scrollToKontaktEmail(e, reduce)}
            whileHover={reduce ? undefined : { y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
            transition={springTap}
          >
            <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
          </motion.a>
          <motion.a
            href={site.hero.secondaryCta.href}
            className="rs-cta rs-cta--ghost min-w-40 justify-center focus-visible:outline-none"
            whileHover={reduce ? undefined : { y: -1 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
            transition={springTap}
          >
            {site.hero.secondaryCta.label}
          </motion.a>
        </motion.div>

        <span className="sr-only">{site.hero.imageAlt}</span>
      </div>
    </section>
  )
}
