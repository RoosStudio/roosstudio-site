import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useId, useState, type ReactNode } from 'react'

type Ripple = { id: string; x: number; y: number }

type RippleCtaProps = {
  href: string
  children: ReactNode
}

function RippleCta({ href, children }: RippleCtaProps) {
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
    `${base} bg-rs-primary text-rs-bg shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_28px_-10px_rgba(79,140,255,0.38)] ` +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg'

  return (
    <motion.a
      href={href}
      onPointerDown={onPointerDown}
      className={primaryClass}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
    >
      {!reduceMotion &&
        ripples.map((rip) => (
          <motion.span
            key={rip.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-white/40"
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

const ease = [0.22, 1, 0.36, 1] as const
const inView = { once: true, margin: '-50px' } as const

export function ContactSection() {
  const reduceMotion = useReducedMotion()

  const blockMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: inView,
        transition: { duration: 0.5, ease },
      }

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-rs-border bg-rs-bg py-28 sm:py-36 md:py-40"
      aria-labelledby="kontakt-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-rs-surface/95 via-rs-card/40 to-rs-bg"
        aria-hidden
      />
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
      <div
        className="pointer-events-none absolute -left-1/4 top-0 h-[85%] w-[70%] rounded-full blur-[110px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(79,140,255,0.16) 0%, transparent 62%)',
          animation: reduceMotion ? undefined : 'rs-gradient-shift 16s ease-in-out infinite',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[75%] w-[65%] rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(157,77,255,0.14) 0%, transparent 60%)',
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
            'radial-gradient(circle, rgba(106,91,255,0.09) 0%, transparent 68%)',
          animation: reduceMotion ? undefined : 'rs-pulse-glow 8s ease-in-out infinite',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rs-primary/35 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          {...blockMotion}
        >
          <h2
            id="kontakt-heading"
            className="text-3xl font-bold tracking-tight text-rs-text sm:text-4xl md:text-[2.65rem] md:leading-tight"
          >
            Lass uns etwas bauen, das läuft.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-rs-text-secondary sm:text-lg">
            Ideen sind schnell da.
          </p>
          <p className="mt-2 text-base leading-relaxed text-rs-text-secondary sm:text-lg">
            Entscheidend ist, was daraus wird.
          </p>
          <div className="mt-10 flex justify-center sm:mt-11">
            <RippleCta href="mailto:hi@roosstudio.ch">Lass uns bauen</RippleCta>
          </div>
          <a
            id="kontakt-email"
            href="mailto:hi@roosstudio.ch"
            className="mt-8 inline-block scroll-mt-28 text-sm text-rs-text/65 underline-offset-4 transition-colors hover:text-rs-text-secondary hover:underline sm:scroll-mt-32"
          >
            hi@roosstudio.ch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
