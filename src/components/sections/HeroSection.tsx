import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef, type MouseEvent } from 'react'
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

  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(40)
  const spotlight = useMotionTemplate`radial-gradient(540px circle at ${mouseX}% ${mouseY}%, rgba(79,140,255,0.28), transparent 55%)`

  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.58], [1, 0])
  const scrimOpacity = useTransform(scrollYProgress, [0, 0.7], [0.9, 1])
  const smoothY = useSpring(imgY, { stiffness: 70, damping: 26 })

  const brandWords = site.hero.brand.split(' ')
  let charIndex = 0

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100)
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] flex-col justify-end"
      aria-label="Einstieg"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <motion.img
          src={site.hero.image}
          alt=""
          className="h-[118%] w-full object-cover object-[center_28%] will-change-transform"
          style={{ y: smoothY, scale: imgScale }}
          initial={reduce ? false : { scale: 1.16, opacity: 0.45 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.7, ease: EASE }}
          decoding="async"
          fetchPriority="high"
        />
        <motion.div className="rs-hero-scrim absolute inset-0" style={{ opacity: scrimOpacity }} />
        {!reduce ? (
          <motion.div className="absolute inset-0 mix-blend-screen" style={{ background: spotlight }} />
        ) : null}
        <div className="rs-hero-beam absolute inset-0" />
        <div className="rs-hero-grain absolute inset-0" />
      </div>

      <motion.div
        className="rs-section-inner rs-section-inner--wide relative z-10 w-full pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-24"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 1.35 }}
          className="mb-5 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-rs-primary sm:mb-6 sm:text-xs"
        >
          Solo Software Studio · Schweiz
        </motion.p>

        <p className="overflow-hidden font-display text-[clamp(2.45rem,10vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.055em] text-rs-text">
          {reduce ? (
            <span className="[text-shadow:0_4px_48px_rgba(0,0,0,0.55)]">{site.hero.brand}</span>
          ) : (
            brandWords.map((word, wi) => (
              <span key={`w-${wi}`} className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0">
                {word.split('').map((ch) => {
                  const i = charIndex++
                  return (
                    <motion.span
                      key={`${ch}-${i}`}
                      className="inline-block [text-shadow:0_4px_48px_rgba(0,0,0,0.55)]"
                      initial={{ y: '115%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      transition={{ delay: 1.4 + i * 0.03, duration: 0.7, ease: EASE }}
                    >
                      {ch}
                    </motion.span>
                  )
                })}
              </span>
            ))
          )}
        </p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: reduce ? 0 : 1.75, duration: 0.75, ease: EASE }}
          className="mt-5 max-w-3xl font-display text-[1.4rem] font-semibold leading-[1.12] tracking-[-0.035em] text-rs-text sm:mt-6 sm:text-3xl md:text-4xl lg:text-[3rem]"
        >
          {site.hero.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.9, duration: 0.55, ease: EASE }}
          className="mt-4 max-w-xl text-base leading-relaxed text-rs-text-secondary sm:mt-5 sm:text-lg"
        >
          {site.hero.lede}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 2.05, duration: 0.5, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
        >
          <MagneticButton
            href={site.hero.primaryCta.href}
            className="rs-cta rs-cta--shine min-w-44 justify-center focus-visible:outline-none"
            onClick={(e) => scrollToKontaktEmail(e, reduce)}
          >
            <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
          </MagneticButton>
          <MagneticButton
            href={site.hero.secondaryCta.href}
            className="rs-cta rs-cta--ghost min-w-44 justify-center focus-visible:outline-none"
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
          transition={{ delay: 2.3, duration: 0.6 }}
        >
          <span className="rs-scroll-cue-line" />
        </motion.a>
      ) : null}
    </section>
  )
}
