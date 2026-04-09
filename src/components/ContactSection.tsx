import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useId, useState, type ReactNode } from 'react'
import { SectionReveal } from './SectionReveal'

type Ripple = { id: string; x: number; y: number }

type RippleCtaProps = {
  href: string
  variant: 'primary' | 'secondary'
  children: ReactNode
}

function RippleCta({ href, variant, children }: RippleCtaProps) {
  const reduceMotion = useReducedMotion()
  const [ripples, setRipples] = useState<Ripple[]>([])
  const uid = useId()

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLAnchorElement>) => {
      if (reduceMotion) return
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const id = `${uid}-${Date.now()}`
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - r.left, y: e.clientY - r.top },
      ])
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((x) => x.id !== id))
      }, 700)
    },
    [reduceMotion, uid],
  )

  const base =
    'relative inline-flex min-h-[3.25rem] items-center justify-center overflow-hidden rounded-full px-10 py-4 text-base font-semibold no-underline select-none'

  const primaryClass =
    `${base} bg-rs-primary text-rs-bg shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_12px_40px_-12px_rgba(79,140,255,0.65)] ` +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg'

  const secondaryClass =
    `${base} border border-rs-border/90 bg-rs-surface/70 text-rs-text backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] ` +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg'

  const rippleClass =
    variant === 'primary' ? 'bg-white/45' : 'bg-rs-primary/40'

  return (
    <motion.a
      href={href}
      onPointerDown={onPointerDown}
      className={variant === 'primary' ? primaryClass : secondaryClass}
      whileHover={reduceMotion ? undefined : { scale: 1.03, y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 420, damping: 22 }}
    >
      {!reduceMotion &&
        ripples.map((rip) => (
          <motion.span
            key={rip.id}
            aria-hidden
            className={`pointer-events-none absolute rounded-full ${rippleClass}`}
            style={{
              left: rip.x,
              top: rip.y,
              width: 14,
              height: 14,
              marginLeft: -7,
              marginTop: -7,
            }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 14, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.a>
  )
}

export function ContactSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-rs-border bg-rs-bg py-24 sm:py-32"
      aria-labelledby="kontakt-heading"
    >
      {/* Basis-Verlauf */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rs-surface/95 via-rs-card/40 to-rs-bg"
        aria-hidden
      />
      {/* feines Raster */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)',
        }}
        aria-hidden
      />
      {/* animierte Brand-Orbs */}
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[85%] w-[70%] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(79,140,255,0.22) 0%, transparent 62%)',
          animation: reduceMotion ? undefined : 'rs-gradient-shift 16s ease-in-out infinite',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[75%] w-[65%] rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(157,77,255,0.2) 0%, transparent 60%)',
          animation: reduceMotion
            ? undefined
            : 'rs-gradient-shift 20s ease-in-out infinite reverse',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,42rem)] w-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        style={{
          background:
            'radial-gradient(circle, rgba(106,91,255,0.12) 0%, transparent 68%)',
          animation: reduceMotion ? undefined : 'rs-pulse-glow 8s ease-in-out infinite',
        }}
        aria-hidden
      />
      {/* obere Lichtkante */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rs-primary/35 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2
            id="kontakt-heading"
            className="text-3xl font-bold tracking-tight text-rs-text sm:text-4xl md:text-5xl"
          >
            Lass uns bauen.
          </h2>
          <p className="mt-5 text-lg text-rs-text-secondary">
            Ob klare Spezifikation oder rohe Idee — wir übersetzen beides in
            Software, die sich anfühlt wie Zukunft und sich verhält wie
            Produktion.
          </p>
          <a
            href="mailto:hi@roosstudio.ch"
            className="mt-8 inline-block text-lg font-medium text-rs-primary underline-offset-4 transition-colors hover:text-rs-text hover:underline"
          >
            hi@roosstudio.ch
          </a>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center">
            <RippleCta
              href="mailto:hi@roosstudio.ch?subject=Projekt%20starten"
              variant="primary"
            >
              Projekt starten
            </RippleCta>
            <RippleCta
              href="mailto:hi@roosstudio.ch?subject=Idee%20umsetzen"
              variant="secondary"
            >
              Idee umsetzen
            </RippleCta>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
