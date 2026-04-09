import { motion, useReducedMotion } from 'framer-motion'

export function Hero() {
  const reduceMotion = useReducedMotion()

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

      <motion.a
        href="#spass-apps"
        aria-label="Zu den Apps scrollen"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 rounded-2xl px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg sm:bottom-10"
      >
        <span className="text-[0.625rem] font-bold uppercase tracking-[0.32em] text-rs-text-secondary">
          Mehr
        </span>
        <div className="relative">
          <div
            className="absolute -inset-3 rounded-full opacity-70 blur-xl"
            style={{
              background:
                'radial-gradient(circle, rgba(79,140,255,0.45) 0%, rgba(157,77,255,0.2) 55%, transparent 70%)',
            }}
          />
          <motion.div
            className="relative flex h-14 w-9 flex-col items-center rounded-full border border-white/12 bg-rs-card/55 pt-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
            animate={reduceMotion ? false : { y: [0, -5, 0] }}
            transition={{
              duration: 2.8,
              repeat: reduceMotion ? 0 : Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="h-8 w-1 rounded-full shadow-[0_0_14px_rgba(79,140,255,0.85)]"
              style={{
                background:
                  'linear-gradient(180deg, var(--color-rs-gradient-start) 0%, var(--color-rs-gradient-mid) 45%, var(--color-rs-gradient-end) 100%)',
              }}
              animate={
                reduceMotion ? false : { y: [0, 14, 0], opacity: [1, 0.45, 1] }
              }
              transition={{
                duration: 1.65,
                repeat: reduceMotion ? 0 : Infinity,
                ease: [0.45, 0, 0.55, 1],
              }}
            />
          </motion.div>
        </div>
        <motion.span
          className="flex flex-col items-center gap-0.5 text-rs-primary"
          aria-hidden
          animate={reduceMotion ? false : { y: [0, 3, 0] }}
          transition={{
            duration: 1.4,
            repeat: reduceMotion ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            className="opacity-90"
          >
            <path
              d="M12 5v14M7 14l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  )
}
