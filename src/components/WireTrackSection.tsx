import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { scrollToKontaktEmail } from '../lib/scrollToKontaktEmail'
import { SectionReveal } from './SectionReveal'

/** Sprechblase + drei Punkte — passt zu „Reden wir!“ */
function SpeechBubbleIcon({
  active,
  reduceMotion,
}: {
  active: boolean
  reduceMotion: boolean | null
}) {
  const pulse = Boolean(active && !reduceMotion)
  const stroke = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.35,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  const dotTransition = pulse
    ? { duration: 0.45, repeat: Infinity, ease: 'easeInOut' as const }
    : { duration: 0.12 }

  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      className="shrink-0 overflow-visible text-current"
      aria-hidden
    >
      <path
        d="M5 2.75h11.5a2.25 2.25 0 012.25 2.25v6.25a2.25 2.25 0 01-2.25 2.25h-4.9l-2.35 3.35c-.35.5-1.1.15-.95-.45l.65-2.9H5A2.25 2.25 0 012.75 11.25V5A2.25 2.25 0 015 2.75z"
        {...stroke}
      />
      <motion.circle
        cx="8.25"
        cy="8.25"
        r="0.9"
        fill="currentColor"
        animate={pulse ? { y: [0, -1.15, 0] } : { y: 0 }}
        transition={{ ...dotTransition, delay: 0 }}
      />
      <motion.circle
        cx="11"
        cy="8.25"
        r="0.9"
        fill="currentColor"
        animate={pulse ? { y: [0, -1.15, 0] } : { y: 0 }}
        transition={{ ...dotTransition, delay: 0.12 }}
      />
      <motion.circle
        cx="13.75"
        cy="8.25"
        r="0.9"
        fill="currentColor"
        animate={pulse ? { y: [0, -1.15, 0] } : { y: 0 }}
        transition={{ ...dotTransition, delay: 0.24 }}
      />
    </svg>
  )
}

const features = [
  {
    title: 'Projekte',
    text: 'Offen, wer dran, was als Nächstes – ein Ort.',
  },
  {
    title: 'Leute & Zugriff',
    text: 'Rollen fest. Zugriff klar. Punkt.',
  },
  {
    title: 'Vorgänge',
    text: 'Tickets hier. Nicht im Chat versenkt.',
  },
  {
    title: 'Anbindungen',
    text: 'Daten rein, raus, ohne Update-Panik.',
  },
]

export function WireTrackSection() {
  const reduceMotion = useReducedMotion()
  const [ctaIconHover, setCtaIconHover] = useState(false)

  return (
    <section
      id="wiretrack"
      className="relative border-t border-rs-border bg-rs-surface py-24 sm:py-32 md:py-36"
      aria-labelledby="wiretrack-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rs-primary/35 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
          <SectionReveal>
            <div className="flex items-center gap-4">
              <img
                src="/roos-studio-branding/logos/logo-icon-blue.png"
                alt=""
                className="h-14 w-14 shrink-0 object-contain"
                width={56}
                height={56}
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rs-muted">
                  Alltag
                </p>
                <h2
                  id="wiretrack-heading"
                  className="mt-1 text-3xl font-bold tracking-tight text-rs-text sm:text-4xl md:text-[2.75rem] md:leading-tight"
                >
                  WireTrack
                </h2>
              </div>
            </div>
            <p className="mt-6 text-2xl font-bold leading-[1.15] tracking-tight text-rs-text sm:text-3xl md:text-[2.15rem] md:leading-[1.12]">
              Wenn’s laufen muss.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-rs-text-secondary">
              Planung, Leute, Tickets, Daten. Mitgedacht. Mitgebaut.
            </p>
            <motion.a
              href="#kontakt-email"
              aria-label="Zur E-Mail-Adresse weiter unten springen"
              onClick={(e) => scrollToKontaktEmail(e, reduceMotion)}
              onMouseEnter={() => setCtaIconHover(true)}
              onMouseLeave={() => setCtaIconHover(false)}
              onFocus={() => setCtaIconHover(true)}
              onBlur={() => setCtaIconHover(false)}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="rs-cta rs-cta--sm group mt-10 focus-visible:outline-none"
            >
              <span className="relative z-10 inline-grid min-w-0 grid-cols-1 grid-rows-1 place-items-center">
                <span className="col-start-1 row-start-1 flex min-w-0 items-center justify-center transition-opacity duration-200 ease-out group-focus-visible:pointer-events-none group-focus-visible:opacity-0 group-hover:pointer-events-none group-hover:opacity-0">
                  <span className="rs-cta-text-rest">Reden wir!</span>
                </span>
                <span className="col-start-1 row-start-1 flex min-w-0 items-center justify-center gap-2 opacity-0 transition-opacity duration-200 ease-out group-focus-visible:opacity-100 group-hover:opacity-100">
                  <span className="inline-flex shrink-0 items-center text-rs-primary">
                    <SpeechBubbleIcon active={ctaIconHover} reduceMotion={reduceMotion} />
                  </span>
                  <span className="rs-cta-text-hover">Reden wir!</span>
                </span>
              </span>
            </motion.a>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-rs-border bg-rs-bg/90 p-1.5 shadow-[0_0_0_1px_rgba(79,140,255,0.1),0_28px_80px_-32px_rgba(0,0,0,0.72)] transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(79,140,255,0.16),0_32px_72px_-28px_rgba(0,0,0,0.65)]"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            >
              <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-rs-primary/10 blur-3xl" />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/5">
                <img
                  src="/showcase/wiretrack-dashboard.png"
                  alt="WireTrack: Dashboard mit Schnellzugriff und Übersicht"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  width={1600}
                  height={1000}
                />
              </div>
              <p className="relative mt-3 px-2 text-center text-xs font-medium text-rs-muted">
                Dashboard. Widgets. Kurz.
              </p>
            </motion.div>
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="h-full rounded-2xl border border-rs-border bg-rs-bg/80 p-6 shadow-none transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(79,140,255,0.14),0_12px_40px_-24px_rgba(0,0,0,0.35)]"
              >
                <h3 className="text-lg font-semibold text-rs-text">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-rs-text-secondary">
                  {f.text}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
