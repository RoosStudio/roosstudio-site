import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE } from '../../lib/motionPresets'
import { MagneticButton } from '../ui/MagneticButton'

export function HeroSection() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.7], [0.92, 1])
  const smoothY = useSpring(imgY, { stiffness: 80, damping: 28 })

  const brandWords = site.hero.brand.split(' ')
  let charIndex = 0

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end"
      aria-label="Einstieg"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.img
          src={site.hero.image}
          alt=""
          className="h-[115%] w-full object-cover object-[center_28%] will-change-transform"
          style={{ y: smoothY, scale: imgScale }}
          initial={reduce ? false : { scale: 1.14, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          decoding="async"
          fetchPriority="high"
        />
        <motion.div className="rs-hero-scrim absolute inset-0" style={{ opacity: scrimOpacity }} />
        <div className="rs-hero-grain absolute inset-0" />
      </div>

      <motion.div
        className="rs-section-inner rs-section-inner--wide relative z-10 w-full pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-24"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <p className="overflow-hidden font-display text-[clamp(2.35rem,9.5vw,7.75rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-rs-text">
          {reduce ? (
            <span className="[text-shadow:0_4px_48px_rgba(0,0,0,0.55)]">{site.hero.brand}</span>
          ) : (
            brandWords.map((word, wi) => {
              const chars = word.split('')
              const node = (
                <span key={`w-${wi}`} className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0">
                  {chars.map((ch) => {
                    const i = charIndex++
                    return (
                      <motion.span
                        key={`${ch}-${i}`}
                        className="inline-block [text-shadow:0_4px_48px_rgba(0,0,0,0.55)]"
                        initial={{ y: '110%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        transition={{ delay: 0.05 + i * 0.028, duration: 0.7, ease: EASE }}
                      >
                        {ch}
                      </motion.span>
                    )
                  })}
                </span>
              )
              return node
            })
          )}
        </p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.38, duration: 0.7, ease: EASE }}
          className="mt-5 max-w-2xl font-display text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.03em] text-rs-text sm:mt-6 sm:text-3xl md:text-4xl lg:text-[2.75rem]"
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.55, ease: EASE }}
          className="mt-4 max-w-xl text-base leading-relaxed text-rs-text-secondary sm:mt-5 sm:text-lg"
        >
          {site.hero.lede}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
        >
          <MagneticButton
            href={site.hero.primaryCta.href}
            className="rs-cta rs-cta--shine min-w-40 justify-center focus-visible:outline-none"
            onClick={(e) => scrollToKontaktEmail(e, reduce)}
          >
            <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
          </MagneticButton>
          <MagneticButton
            href={site.hero.secondaryCta.href}
            className="rs-cta rs-cta--ghost min-w-40 justify-center focus-visible:outline-none"
          >
            {site.hero.secondaryCta.label}
          </MagneticButton>
        </motion.div>

        <span className="sr-only">{site.hero.imageAlt}</span>
      </motion.div>

      {!reduce ? (
        <motion.a
          href="#arbeit"
          className="rs-scroll-cue absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 sm:flex"
          aria-label="Zur Arbeit scrollen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span className="rs-scroll-cue-line" />
        </motion.a>
      ) : null}
    </section>
  )
}
