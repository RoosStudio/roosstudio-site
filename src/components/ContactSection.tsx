import { motion } from 'framer-motion'
import { SectionReveal } from './SectionReveal'

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-rs-border bg-rs-card py-24 sm:py-32"
      aria-labelledby="kontakt-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(79,140,255,0.2) 0%, transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full blur-[100px]"
        style={{
          background:
            'radial-gradient(circle, rgba(157,77,255,0.18) 0%, transparent 65%)',
        }}
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
          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <motion.a
              href="mailto:hi@roosstudio.ch?subject=Projekt%20starten"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-rs-primary px-10 py-4 text-base font-semibold text-rs-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-card"
            >
              Projekt starten
            </motion.a>
            <motion.a
              href="mailto:hi@roosstudio.ch?subject=Idee%20umsetzen"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-rs-border bg-rs-surface px-10 py-4 text-base font-semibold text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
            >
              Idee umsetzen
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
