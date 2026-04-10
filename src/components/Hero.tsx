import { motion } from 'framer-motion'

const eyeShell =
  'rs-hero-cta-eye rs-hero-cta-eye--blink relative flex h-[0.9375rem] w-[0.9375rem] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-white/45 transition-[box-shadow] duration-200 group-hover:ring-rs-primary/50 group-focus-visible:ring-rs-primary/50 sm:h-4 sm:w-4'

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
          <span className="block">Ich baue Apps.</span>
          <span className="block">Die laufen.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-rs-text/80 sm:mt-9 sm:text-xl"
        >
          <span className="block">Ein Teil aus Spass.</span>
          <span className="block">Ein Teil läuft im Alltag.</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.5 }}
          className="mt-12 sm:mt-14"
        >
          <a
            href="#spass-apps"
            className="rs-cta rs-cta--compact group focus-visible:outline-none"
          >
            <div className="flex shrink-0 items-center gap-[0.2rem] sm:gap-1" aria-hidden>
              <div className={eyeShell}>
                <span className="block h-[3px] w-[3px] rounded-full bg-rs-bg sm:h-1 sm:w-1" />
              </div>
              <div className={eyeShell}>
                <span className="block h-[3px] w-[3px] rounded-full bg-rs-bg sm:h-1 sm:w-1" />
              </div>
            </div>
            <span className="rs-cta-text-rest font-semibold tracking-tight">Apps</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
