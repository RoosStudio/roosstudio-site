import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'
import { HeroHeadline } from '../ui/HeroHeadline'
import { ProductCinemaFrame } from '../ui/ProductCinemaFrame'
import { ProductModal } from '../ui/ProductModal'

const flagship =
  site.examples.find((e) => e.id === site.hero.flagshipId) ?? site.examples[0]

export function HeroSection() {
  const reduce = useReducedMotion()
  const [modalOpen, setModalOpen] = useState(false)

  const openFlagship = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14"
        aria-label="Einstieg"
      >
        <div className="rs-hero-aurora pointer-events-none absolute inset-0 opacity-70" aria-hidden />

        <div className="rs-section-inner rs-section-inner--wide relative z-10 flex flex-1 flex-col">
          <div className="max-w-3xl">
            <motion.p
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
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
              transition={{ delay: 0.28, duration: 0.45, ease: EASE }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-rs-text-secondary sm:mt-8 sm:text-xl"
            >
              {site.hero.lede}
            </motion.p>

            <motion.div
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4, ease: EASE }}
              className="mt-8 flex flex-wrap gap-3 sm:mt-10"
            >
              <motion.a
                href={site.hero.primaryCta.href}
                className="rs-cta rs-cta--shine min-w-44 justify-center px-7 text-base focus-visible:outline-none"
                onClick={(e) => scrollToKontaktEmail(e, reduce)}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
              </motion.a>
              <motion.a
                href={site.hero.secondaryCta.href}
                className="rs-cta rs-cta--ghost min-w-44 justify-center px-7 text-base focus-visible:outline-none"
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                {site.hero.secondaryCta.label}
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 flex min-h-0 flex-1 flex-col sm:mt-12 lg:mt-14"
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65, ease: EASE }}
          >
            <ProductCinemaFrame
              src={flagship.image}
              alt={flagship.alt}
              onClick={openFlagship}
              loading="eager"
              className="rs-cinema-frame--hero flex-1"
            />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4 sm:mt-6">
              <div>
                <p className="font-display text-2xl font-bold tracking-[-0.03em] text-rs-text sm:text-3xl">
                  {flagship.name}
                </p>
                <p className="mt-1 max-w-2xl text-base text-rs-text-secondary sm:text-lg">
                  {flagship.pitch}
                </p>
              </div>
              <a
                href="#beispiele"
                className="rs-cinema-scroll-cue"
                aria-label="Zu den Produkten scrollen"
              >
                Scroll
                <span className="rs-cinema-scroll-cue-arrow" aria-hidden>
                  ↓
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ProductModal product={modalOpen ? flagship : null} onClose={closeModal} />
    </>
  )
}
