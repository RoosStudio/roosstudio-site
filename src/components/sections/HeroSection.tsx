import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { site } from '../../content/site'
import { useProductTeaser } from '../../context/ProductTeaserContext'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'
import { HeroAppBackdrop } from '../layout/HeaderAppTeasers'
import { HeroHeadline } from '../ui/HeroHeadline'
import { ProductCinemaFrame } from '../ui/ProductCinemaFrame'
import { ProductModal } from '../ui/ProductModal'

export function HeroSection() {
  const reduce = useReducedMotion()
  const { active } = useProductTeaser()
  const [modalOpen, setModalOpen] = useState(false)

  const openProduct = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[7.5rem] pb-10 sm:pt-[8.5rem] sm:pb-14"
        aria-label="Einstieg"
      >
        <HeroAppBackdrop />
        <div className="rs-hero-aurora pointer-events-none absolute inset-0 opacity-40" aria-hidden />

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
            key={active.id}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <ProductCinemaFrame
              src={active.image}
              alt={active.alt}
              onClick={openProduct}
              loading="eager"
              className="rs-cinema-frame--hero flex-1"
            />
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4 sm:mt-6">
              <div className="max-w-2xl">
                <p className="font-display text-2xl font-bold tracking-[-0.03em] text-rs-text sm:text-3xl md:text-4xl">
                  {active.name}
                </p>
                <p className="mt-2 text-base text-rs-text-secondary sm:text-lg">{active.pitch}</p>
                <p className="mt-3 hidden text-sm text-rs-muted sm:block">{active.details.was}</p>
              </div>
              <button
                type="button"
                onClick={openProduct}
                className="rs-cinema-detail-link rs-cinema-detail-link--lg"
              >
                {site.hero.flagshipHint}
                <span aria-hidden>⊕</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <ProductModal product={modalOpen ? active : null} onClose={closeModal} />
    </>
  )
}
