import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE, springTap } from '../../lib/motionPresets'
import { HeroHeadline } from '../ui/HeroHeadline'

const featured = site.examples[0]
const previewExamples = site.examples.slice(0, 4)

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 52, damping: 22, mass: 0.35 })
  const smoothY = useSpring(mouseY, { stiffness: 52, damping: 22, mass: 0.35 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 48])
  const contentY = useTransform(scrollYProgress, [0, 0.85], [0, 24])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.55])
  const deviceRotateY = useTransform(smoothX, (v) => v * 2.5)
  const deviceRotateX = useTransform(smoothY, (v) => v * -2)

  const handlePointer = (e: ReactMouseEvent<HTMLElement>) => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 2)
    mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 2)
  }

  const clearPointer = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16"
      aria-label="Einstieg"
      onMouseMove={handlePointer}
      onMouseLeave={clearPointer}
    >
      <div className="rs-hero-aurora pointer-events-none absolute inset-0 opacity-80" aria-hidden />

      <motion.div
        className="rs-section-inner relative z-10"
        style={{ y: reduce ? 0 : contentY, opacity: reduce ? 1 : contentOpacity }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
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
              className="mt-6 max-w-lg text-base leading-relaxed text-rs-text-secondary sm:text-lg"
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
                className="rs-cta rs-cta--shine min-w-40 justify-center focus-visible:outline-none"
                onClick={(e) => scrollToKontaktEmail(e, reduce)}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={springTap}
              >
                <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
              </motion.a>
              <motion.a
                href={site.hero.secondaryCta.href}
                className="rs-cta rs-cta--ghost min-w-40 justify-center focus-visible:outline-none"
                whileHover={reduce ? undefined : { y: -2 }}
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
              transition={{ delay: 0.48, duration: 0.4, ease: EASE }}
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
            style={{
              y: reduce ? 0 : imageY,
              rotateY: reduce ? 0 : deviceRotateY,
              rotateX: reduce ? 0 : deviceRotateX,
              perspective: 1200,
            }}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: EASE }}
          >
            <div className="rs-device-glow" aria-hidden />
            <div className="rs-device-frame relative z-[1]">
              <img
                src={featured.image}
                alt={featured.alt}
                width={1920}
                height={1080}
                className="aspect-[16/10] w-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
            <p className="relative z-[1] mt-3 text-center text-xs text-rs-muted lg:text-left">
              Beispiel aus unserer Werkstatt — {featured.name}
            </p>
          </motion.div>
        </div>

        <motion.nav
          className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-12"
          aria-label="Beispiel-Apps"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45, ease: EASE }}
        >
          {previewExamples.map((example) => (
            <a key={example.id} href="#beispiele" className="rs-hero-app-chip group">
              <img
                src={example.image}
                alt=""
                role="presentation"
                loading="lazy"
                decoding="async"
                width={400}
                height={250}
                className="aspect-[16/10] w-full object-cover object-top opacity-70 transition duration-500 group-hover:opacity-100"
              />
              <span className="rs-hero-app-chip-label">{example.name}</span>
            </a>
          ))}
        </motion.nav>
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-rs-bg to-transparent"
        aria-hidden
      />
    </section>
  )
}
