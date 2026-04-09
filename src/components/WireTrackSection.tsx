import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { scrollToKontaktEmail } from '../lib/scrollToKontaktEmail'
import { SectionReveal } from './SectionReveal'

function TalkingMouthIcon({
  active,
  reduceMotion,
}: {
  active: boolean
  reduceMotion: boolean | null
}) {
  const talking = Boolean(active && !reduceMotion)
  const stroke = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 1.35,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      className="shrink-0 overflow-visible text-current"
      aria-hidden
    >
      {/* Oberlippe mit leichter Cupid’s-Bow-Mitte */}
      <path
        d="M 3.2 5.85 C 5.8 4.15, 8.2 4.55, 10 5.05 C 11.8 4.55, 14.2 4.15, 16.8 5.85"
        {...stroke}
      />
      <motion.g
        animate={
          talking ? { y: [0, 1.05, 0.35, 0.9, 0] } : { y: 0 }
        }
        transition={
          talking
            ? { duration: 0.52, repeat: Infinity, ease: 'easeInOut' }
            : { duration: 0.12 }
        }
      >
        <path
          d="M 3.2 7.35 C 5.8 9.35, 14.2 9.35, 16.8 7.35"
          {...stroke}
        />
      </motion.g>
    </svg>
  )
}

const features = [
  {
    title: 'Projekte',
    text: 'Von Planung bis Umsetzung – klar strukturiert und zuverlässig umgesetzt.',
  },
  {
    title: 'Kunden',
    text: 'Klare Kommunikation, saubere Abläufe und verlässliche Zusammenarbeit.',
  },
  {
    title: 'Service',
    text: 'Stabil im Betrieb, schnell erreichbar und jederzeit unter Kontrolle.',
  },
  {
    title: 'Systeme',
    text: 'Saubere Integrationen und stabile Strukturen als Grundlage für Wachstum.',
  },
]

export function WireTrackSection() {
  const reduceMotion = useReducedMotion()
  const [mouthHover, setMouthHover] = useState(false)

  return (
    <section
      id="wiretrack"
      className="relative border-t border-rs-border bg-rs-surface py-24 sm:py-32"
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
                  Enterprise
                </p>
                <h2
                  id="wiretrack-heading"
                  className="mt-1 text-3xl font-bold tracking-tight text-rs-text sm:text-4xl md:text-[2.75rem] md:leading-tight"
                >
                  WireTrack
                </h2>
              </div>
            </div>
            <p className="mt-6 text-2xl font-semibold leading-snug text-rs-text sm:text-3xl">
              Aus Projekten wird echte Software.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-rs-text-secondary">
              Klare Abläufe, saubere Prozesse und stabile Systeme. WireTrack
              sorgt dafür, dass Projekte nicht nur starten – sondern laufen.
            </p>
            <motion.a
              href="#kontakt-email"
              aria-label="Zur E-Mail-Adresse scrollen"
              onClick={(e) => scrollToKontaktEmail(e, reduceMotion)}
              onMouseEnter={() => setMouthHover(true)}
              onMouseLeave={() => setMouthHover(false)}
              onFocus={() => setMouthHover(true)}
              onBlur={() => setMouthHover(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-rs-border bg-rs-card px-7 py-3 text-sm font-semibold text-rs-text transition-colors hover:border-rs-primary/45 hover:text-rs-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
            >
              <TalkingMouthIcon active={mouthHover} reduceMotion={reduceMotion} />
              Projekt besprechen
            </motion.a>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-rs-border/90 bg-rs-bg/90 p-1.5 shadow-[0_0_0_1px_rgba(79,140,255,0.12),0_32px_100px_-28px_rgba(0,0,0,0.85)]"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-rs-primary/10 blur-3xl" />
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl ring-1 ring-white/5">
                <img
                  src="/showcase/wiretrack-dashboard.png"
                  alt="WireTrack Dashboard mit Schnellzugriff, Widgets und Begrüssung"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                  width={1600}
                  height={1000}
                />
              </div>
              <p className="relative mt-3 px-2 text-center text-xs font-medium text-rs-muted">
                Produktiv im Alltag — Dashboard, Widgets, Schnellzugriff.
              </p>
            </motion.div>
          </SectionReveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <SectionReveal key={f.title} delay={0.05 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="h-full rounded-2xl border border-rs-border bg-rs-bg/80 p-6 shadow-none transition-shadow hover:shadow-[0_0_0_1px_rgba(79,140,255,0.15)]"
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
