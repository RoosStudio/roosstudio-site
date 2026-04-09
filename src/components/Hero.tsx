import { motion } from 'framer-motion'

export function Hero() {
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
        >
          <a
            href="#spass-apps"
            className="inline-flex items-center justify-center rounded-full bg-rs-primary px-8 py-3.5 text-base font-semibold text-rs-bg shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_28px_-10px_rgba(79,140,255,0.38)] transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg active:scale-[0.98]"
          >
            Projekte ansehen
          </a>
          <p
            className="mt-4 font-mono text-[0.65rem] tracking-wide text-rs-text/40"
            aria-hidden
          >
            // jetzt klicken
          </p>
        </motion.div>
      </div>
    </section>
  )
}
