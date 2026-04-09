import { motion } from 'framer-motion'
import { SectionReveal } from './SectionReveal'

const features = [
  {
    title: 'Projekte',
    text: 'Von Scope bis Go-live — strukturiert, nachvollziehbar, lieferbar.',
  },
  {
    title: 'Kunden',
    text: 'Beziehungen statt Tickets: klar kommunizieren, Erwartungen halten.',
  },
  {
    title: 'Service',
    text: 'Laufender Betrieb, der nicht laut ist — aber immer greifbar.',
  },
  {
    title: 'Systeme',
    text: 'Integrationen, Datenflüsse, Stabilität: das Fundament für Wachstum.',
  },
]

export function WireTrackSection() {
  return (
    <section
      id="wiretrack"
      className="relative border-t border-rs-border bg-rs-surface py-24 sm:py-32"
      aria-labelledby="wiretrack-heading"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rs-primary/35 to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
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
              Das ist kein Spiel mehr.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-rs-text-secondary">
              Hinter den Apps steht dieselbe DNA: Architektur, saubere Prozesse
              und Lieferdisziplin. WireTrack ist der Rahmen, in dem echte
              Kundenprojekte laufen — ruhig, professionell, skalierbar.
            </p>
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center justify-center rounded-full border border-rs-border bg-rs-card px-7 py-3 text-sm font-semibold text-rs-text transition-colors hover:border-rs-primary/45 hover:text-rs-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
            >
              Gespräch anfragen
            </motion.a>
          </SectionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  )
}
