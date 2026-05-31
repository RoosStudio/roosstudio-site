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

const heroImage = site.proof.items[0]
const previewItems = site.proof.items

export function HeroSection() {
  const ref = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 48, damping: 24, mass: 0.35 })
  const smoothY = useSpring(mouseY, { stiffness: 48, damping: 24, mass: 0.35 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentY = useTransform(scrollYProgress, [0, 0.85], [0, 44])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0.46])
  const previewX = useTransform(smoothX, (v) => v * 22)
  const previewY = useTransform(smoothY, (v) => v * 16)

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
      className="relative min-h-[92svh] overflow-hidden pt-24 pb-10 sm:pt-28"
      aria-label="Einstieg"
      onMouseMove={handlePointer}
      onMouseLeave={clearPointer}
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: reduce ? 0 : bgY, opacity: reduce ? 1 : sceneOpacity }}
        aria-hidden
      >
        <img
          src={heroImage.image}
          alt=""
          role="presentation"
          width={1920}
          height={1080}
          className="h-[112%] w-full scale-[1.03] object-cover object-center opacity-70 saturate-[0.9]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.76)_43%,rgba(5,5,5,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.76)_0%,rgba(5,5,5,0.18)_42%,#050505_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_62%_at_24%_24%,rgba(116,215,255,0.18),transparent_58%)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rs-bg to-transparent" />

      <motion.div
        className="rs-section-inner relative z-10 flex min-h-[calc(92svh-8.5rem)] flex-col justify-end"
        style={{ y: reduce ? 0 : contentY }}
      >
        <div className="max-w-4xl">
          <motion.p
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-semibold uppercase text-rs-primary sm:text-sm"
          >
            {site.hero.eyebrow}
          </motion.p>

          <div className="mt-5 max-w-[23rem] sm:max-w-[44rem] md:max-w-[58rem]">
            <HeroHeadline line1={site.hero.h1Line1} line2={site.hero.h1Line2} />
          </div>

          <motion.p
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5, ease: EASE }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:mt-7 sm:text-lg"
          >
            {site.hero.lede}
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.45, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            <motion.a
              href={site.hero.primaryCta.href}
              className="rs-cta rs-cta--shine min-w-44 justify-center focus-visible:outline-none"
              onClick={(e) => scrollToKontaktEmail(e, reduce)}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={springTap}
            >
              <span className="rs-cta-text-rest">{site.hero.primaryCta.label}</span>
            </motion.a>
            <motion.a
              href={site.hero.secondaryCta.href}
              className="rs-link-ghost inline-flex min-h-12 items-center rounded-lg border border-white/12 bg-white/[0.04] px-5 text-sm font-semibold text-white transition hover:border-rs-primary/45 hover:bg-white/[0.07] sm:text-base"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={springTap}
            >
              {site.hero.secondaryCta.label}
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-3xl"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.5, ease: EASE }}
        >
          {site.hero.signals.map((signal) => (
            <div
              key={signal.value}
              className="rounded-lg border border-white/[0.08] bg-black/20 px-4 py-3 backdrop-blur-md"
            >
              <p className="font-display text-xl font-semibold text-white">{signal.value}</p>
              <p className="mt-1 text-sm leading-snug text-zinc-400">{signal.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4"
          style={reduce ? undefined : { x: previewX, y: previewY }}
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.84, duration: 0.55, ease: EASE }}
          aria-label="Produktvorschau"
        >
          {previewItems.map((item) => (
            <a
              key={item.id}
              href={item.id === 'wiretrack' ? '#tests' : '#angebot'}
              className="group relative aspect-[16/10] overflow-hidden rounded-lg border border-white/[0.08] bg-black/30 outline-none transition focus-visible:ring-2 focus-visible:ring-rs-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg"
            >
              <img
                src={item.image}
                alt=""
                role="presentation"
                loading={item.id === heroImage.id ? 'eager' : 'lazy'}
                decoding="async"
                width={720}
                height={450}
                className="h-full w-full object-cover object-center opacity-70 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-95"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/86 to-transparent px-3 pb-2 pt-8 text-xs font-semibold text-white">
                {item.title}
              </span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
