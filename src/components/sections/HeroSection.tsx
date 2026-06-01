import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'
import { HeroHeadline } from '../ui/HeroHeadline'

export function HeroSection() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-24 sm:pt-28"
      aria-label="Einstieg"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(79,140,255,0.08),transparent_65%)]"
        aria-hidden
      />

      <div className="rs-section-inner rs-section-inner--wide relative z-10 w-full">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rs-eyebrow"
          >
            {site.hero.eyebrow}
          </motion.p>

          <div className="mt-8">
            <HeroHeadline
              line1={site.hero.h1Line1}
              line2={site.hero.h1Line2}
              className="text-center"
            />
          </div>

          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45, ease: EASE }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-rs-text-secondary sm:text-xl"
          >
            {site.hero.lede}
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: EASE }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              href={site.hero.primaryCta.href}
              className="rs-cta rs-cta--shine min-w-44 justify-center px-8 focus-visible:outline-none"
              onClick={(e) => scrollToKontaktEmail(e, reduce)}
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.99 }}
              transition={springTap}
            >
              <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
            </motion.a>
            <motion.a
              href={site.hero.secondaryCta.href}
              className="rs-cta rs-cta--ghost min-w-44 justify-center px-8 focus-visible:outline-none"
              whileHover={reduce ? undefined : { y: -1 }}
              whileTap={reduce ? undefined : { scale: 0.99 }}
              transition={springTap}
            >
              {site.hero.secondaryCta.label}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
