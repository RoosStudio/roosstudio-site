import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useRef, useState } from 'react'

function pupilTowardPointer(
  e: React.MouseEvent,
  eyeRef: React.RefObject<HTMLDivElement | null>,
  maxPx: number,
) {
  const el = eyeRef.current
  if (!el) return { x: 0, y: 0 }
  const r = el.getBoundingClientRect()
  const ecx = r.left + r.width / 2
  const ecy = r.top + r.height / 2
  const dx = e.clientX - ecx
  const dy = e.clientY - ecy
  const dist = Math.hypot(dx, dy)
  if (!dist) return { x: 0, y: 0 }
  const pull = Math.min(maxPx, dist * 0.14)
  return {
    x: (dx / dist) * pull,
    y: (dy / dist) * pull,
  }
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const leftEyeRef = useRef<HTMLDivElement>(null)
  const rightEyeRef = useRef<HTMLDivElement>(null)
  const [pupilL, setPupilL] = useState({ x: 0, y: 0 })
  const [pupilR, setPupilR] = useState({ x: 0, y: 0 })

  const onEyeZoneMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion) return
      setPupilL(pupilTowardPointer(e, leftEyeRef, 5.5))
      setPupilR(pupilTowardPointer(e, rightEyeRef, 5.5))
    },
    [reduceMotion],
  )

  const onEyeZoneLeave = useCallback(() => {
    setPupilL({ x: 0, y: 0 })
    setPupilR({ x: 0, y: 0 })
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-[5rem] sm:pt-[5.25rem]"
      aria-label="Einstieg"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.22]"
        style={{
          backgroundImage:
            'url(/roos-studio-branding/website/hero-bg.png)',
        }}
      />
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[120%] w-[80%] rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-rs-gradient-start) 0%, transparent 65%)',
          animation: 'rs-gradient-shift 14s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[100%] w-[70%] rounded-full blur-[90px]"
        style={{
          background:
            'radial-gradient(ellipse at center, var(--color-rs-gradient-end) 0%, transparent 60%)',
          animation: 'rs-gradient-shift 18s ease-in-out infinite reverse',
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[50vmin] w-[50vmin] -translate-x-1/2 rounded-full blur-[80px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-rs-gradient-mid) 0%, transparent 70%)',
          animation: 'rs-pulse-glow 6s ease-in-out infinite',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-rs-primary"
        >
          Roos Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-rs-text sm:text-5xl sm:leading-[1.14] md:text-6xl md:leading-[1.12] lg:text-[3.5rem] lg:leading-[1.1] xl:text-7xl xl:leading-[1.08]"
        >
          Von „was wäre wenn“ bis zum ersten Klick.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-rs-text/80 sm:mt-9 sm:text-xl"
        >
          Aus Ideen werden Anwendungen – und aus Anwendungen Systeme, die im
          Alltag funktionieren.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.5 }}
          className="mt-12 flex flex-col items-start sm:mt-14"
          onMouseMove={onEyeZoneMove}
          onMouseLeave={onEyeZoneLeave}
        >
          <div
            className="mb-3 flex gap-3 sm:mb-3.5 sm:gap-3.5"
            aria-hidden
          >
            <div
              ref={leftEyeRef}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/88 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] ring-1 ring-white/50 sm:h-10 sm:w-10"
            >
              <motion.span
                className="block h-2.5 w-2.5 rounded-full bg-rs-bg sm:h-3 sm:w-3"
                animate={{ x: pupilL.x, y: pupilL.y }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 380, damping: 28 }
                }
              />
            </div>
            <div
              ref={rightEyeRef}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white/88 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] ring-1 ring-white/50 sm:h-10 sm:w-10"
            >
              <motion.span
                className="block h-2.5 w-2.5 rounded-full bg-rs-bg sm:h-3 sm:w-3"
                animate={{ x: pupilR.x, y: pupilR.y }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 380, damping: 28 }
                }
              />
            </div>
          </div>
          <a
            href="#spass-apps"
            className="inline-flex items-center justify-center rounded-full bg-rs-primary px-8 py-3.5 text-base font-semibold text-rs-bg shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_28px_-10px_rgba(79,140,255,0.38)] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg active:scale-[0.98]"
          >
            Projekte ansehen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
