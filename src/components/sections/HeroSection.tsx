import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'
import { HeroHeadline } from '../ui/HeroHeadline'

const heroImage = site.proof.items[0]

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.5])

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
      aria-label="Einstieg"
    >
      <div className="rs-section-inner relative z-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 xl:gap-20"
          style={{ opacity: reduce ? 1 : contentOpacity }}
        >
          <div className="max-w-xl lg:max-w-none">
            <motion.p
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="rs-eyebrow"
            >
              {site.hero.eyebrow}
            </motion.p>

            <div className="mt-6 sm:mt-8">
              <HeroHeadline line1={site.hero.h1Line1} line2={site.hero.h1Line2} />
            </div>

            <motion.p
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5, ease: EASE }}
              className="mt-6 max-w-lg text-base leading-relaxed text-rs-text-secondary sm:mt-8 sm:text-lg"
            >
              {site.hero.lede}
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44, duration: 0.45, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
            >
              <motion.a
                href={site.hero.primaryCta.href}
                className="rs-cta rs-cta--shine min-w-40 justify-center focus-visible:outline-none"
                onClick={(e) => scrollToKontaktEmail(e, reduce)}
                whileHover={reduce ? undefined : { y: -1 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
              </motion.a>
              <motion.a
                href={site.hero.secondaryCta.href}
                className="rs-cta rs-cta--ghost min-w-40 justify-center focus-visible:outline-none"
                whileHover={reduce ? undefined : { y: -1 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                {site.hero.secondaryCta.label}
              </motion.a>
            </motion.div>

            <motion.ul
              className="mt-10 flex flex-wrap gap-2 sm:mt-12"
              role="list"
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.56, duration: 0.45, ease: EASE }}
            >
              {site.hero.signals.map((signal) => (
                <li key={signal.value} className="rs-stat-pill">
                  <strong>{signal.value}</strong>
                  <span className="mx-1.5 text-rs-muted">·</span>
                  {signal.label}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            className="relative lg:justify-self-end"
            style={{ y: reduce ? 0 : imageY }}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE }}
          >
            <div className="rs-device-frame">
              <img
                src={heroImage.image}
                alt={heroImage.alt}
                width={1920}
                height={1080}
                className="aspect-[16/10] w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
            <p className="mt-4 text-center text-sm text-rs-muted lg:text-left">
              {heroImage.title} — {heroImage.line}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-rs-bg to-transparent"
        aria-hidden
      />
    </section>
  )
}
