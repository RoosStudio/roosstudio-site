import { motion, useReducedMotion } from 'framer-motion'
import { useCallback, useId, useState, type ReactNode } from 'react'

type Ripple = { id: string; x: number; y: number }

function BuildCraneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="shrink-0 text-current"
      aria-hidden
    >
      <path
        d="M7 20h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 20V5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 5h17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 8.5L17.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity={0.88}
      />
      <g
        className="motion-reduce:group-focus-visible:animate-none motion-reduce:group-hover:animate-none motion-safe:group-focus-visible:animate-[rs-crane-build_1.75s_ease-in-out_infinite] motion-safe:group-hover:animate-[rs-crane-build_1.75s_ease-in-out_infinite]"
        style={{ transformBox: 'fill-box' }}
      >
        <path
          d="M18 5v7.85"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M15.15 12.85h5.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <path
          d="M15.6 12.85v1.65M20.4 12.85v1.65"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

type RippleCtaProps = {
  href: string
  children: ReactNode
  hoverContent?: ReactNode
  /** Bleibt bei Hover sichtbar (z. B. Kran-Icon). */
  leading?: ReactNode
  /** Wenn gesetzt, sind die Kinder rein visuell (z. B. bei Hover-Wechsel). */
  ariaLabel?: string
}

function RippleCta({ href, children, hoverContent, leading, ariaLabel }: RippleCtaProps) {
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

  const primaryClass =
    'rs-cta group relative overflow-hidden !px-10 !py-3.5 focus-visible:outline-none'

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      onPointerDown={onPointerDown}
      className={primaryClass}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      {!reduceMotion &&
        ripples.map((rip) => (
          <motion.span
            key={rip.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-white/35 group-hover:bg-rs-primary/30"
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
      <span
        className="relative z-10 flex items-center justify-center gap-2"
        aria-hidden={ariaLabel ? true : undefined}
      >
        {leading ? (
          <span className="shrink-0 text-white transition-colors duration-200 group-hover:text-rs-primary group-focus-visible:text-rs-primary">
            {leading}
          </span>
        ) : null}
        {hoverContent ? (
          <span className="inline-grid min-w-0 grid-cols-1 grid-rows-1 place-items-center">
            <span className="col-start-1 row-start-1 flex min-w-0 items-center justify-center gap-2 transition-opacity duration-200 ease-out group-focus-visible:pointer-events-none group-focus-visible:opacity-0 group-hover:pointer-events-none group-hover:opacity-0">
              <span className="rs-cta-text-rest">{children}</span>
            </span>
            <span className="col-start-1 row-start-1 flex min-w-0 items-center justify-center gap-2 opacity-0 transition-opacity duration-200 ease-out group-focus-visible:opacity-100 group-hover:opacity-100">
              <span className="flex min-w-0 items-center justify-center gap-2">{hoverContent}</span>
            </span>
          </span>
        ) : (
          <span className="rs-cta-text-rest">{children}</span>
        )}
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
      className="relative overflow-hidden border-t border-rs-border bg-rs-bg py-24 sm:py-32 md:py-36"
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
          className="mx-auto max-w-xl text-center"
          {...blockMotion}
        >
          <h2
            id="kontakt-heading"
            className="text-3xl font-bold tracking-tight text-rs-text sm:text-4xl md:text-[2.65rem] md:leading-tight"
          >
            Idee? Schreib mir.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-rs-text-secondary sm:text-lg">
            Kurz. Mail. Antwort von mir.
          </p>
          <div className="mt-10 flex justify-center sm:mt-11">
            <RippleCta
              href="mailto:hi@roosstudio.ch"
              ariaLabel="E-Mail an Roos Studio öffnen"
              hoverContent={
                <>
                  <span
                    className="inline-flex shrink-0 items-center text-rs-primary"
                    aria-hidden
                  >
                    <BuildCraneIcon />
                  </span>
                  <span className="rs-cta-text-hover uppercase tracking-[0.12em]">
                    Lass uns bauen
                  </span>
                </>
              }
            >
              <span className="uppercase tracking-[0.12em]">Lass uns bauen</span>
            </RippleCta>
          </div>
          <a
            id="kontakt-email"
            href="mailto:hi@roosstudio.ch"
            className="mt-8 inline-block scroll-mt-28 text-sm text-rs-text/45 underline-offset-4 transition-colors duration-200 ease-out hover:text-rs-text-secondary/90 hover:underline sm:scroll-mt-32"
          >
            hi@roosstudio.ch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
