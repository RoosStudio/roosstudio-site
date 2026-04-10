import { motion } from 'framer-motion'

const eyeShell =
  'relative flex h-8 w-8 origin-center items-center justify-center overflow-hidden rounded-full bg-white/88 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] ring-1 ring-white/50 transition-[box-shadow] duration-200 group-hover:ring-rs-primary/45 group-focus-visible:ring-rs-primary/45 sm:h-9 sm:w-9 motion-reduce:group-focus-visible:animate-none motion-reduce:group-hover:animate-none motion-safe:group-focus-visible:animate-[rs-eye-blink_2.8s_ease-in-out_infinite] motion-safe:group-hover:animate-[rs-eye-blink_2.8s_ease-in-out_infinite]'

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
            className="rs-cta group !min-h-[3.25rem] !gap-3 !py-3.5 !pl-6 !pr-10 focus-visible:outline-none sm:!gap-3.5 sm:!pl-7 sm:!pr-12"
          >
            <div
              className="flex shrink-0 gap-2 sm:gap-2.5"
              aria-hidden
            >
              <div className={eyeShell}>
                <span className="block h-2 w-2 rounded-full bg-rs-bg sm:h-2.5 sm:w-2.5" />
              </div>
              <div className={eyeShell}>
                <span className="block h-2 w-2 rounded-full bg-rs-bg sm:h-2.5 sm:w-2.5" />
              </div>
            </div>
            <span className="rs-cta-text-rest">Apps</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
