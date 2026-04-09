import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-[4.25rem]"
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

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
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
          className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-rs-text sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl"
        >
          Von Spielerei zu System.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-rs-text-secondary sm:text-xl"
        >
          Was als Experiment startet, wird bei uns zu Software, die hält: Apps
          mit Charakter, Produkte mit Struktur — und der gleiche Anspruch an
          Code, egal ob Rally, Kristall oder Enterprise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#spass-apps"
            className="inline-flex items-center justify-center rounded-full bg-rs-primary px-8 py-3.5 text-base font-semibold text-rs-bg transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg active:scale-[0.98]"
          >
            Projekte entdecken
          </a>
          <a
            href="#wiretrack"
            className="inline-flex items-center justify-center rounded-full border border-rs-border bg-rs-card/80 px-8 py-3.5 text-base font-semibold text-rs-text backdrop-blur-sm transition-colors hover:border-rs-primary/50 hover:text-rs-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
          >
            WireTrack ansehen
          </a>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border border-rs-border/80"
        style={{ animation: 'rs-float 3s ease-in-out infinite' }}
      >
        <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-rs-primary/80" />
      </motion.div>
    </section>
  )
}
