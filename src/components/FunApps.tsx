import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionReveal } from './SectionReveal'

const apps = [
  {
    id: 'foto',
    title: 'Foto',
    tag: 'Bild & Stimmung',
    desc: 'Visuelle Experimente mit Fokus auf Look & Feel — schnell, intuitiv, mit Liebe zum Detail.',
    logo: '/roos-studio-branding/logos/logo-transparent.png',
    accent: 'from-rs-gradient-start/25 via-rs-gradient-mid/15 to-transparent',
    layout: 'photo' as const,
  },
  {
    id: 'rally',
    title: 'Rally',
    tag: 'Tempo & Flow',
    desc: 'Dynamik und Reaktion: Spielerische Interaktion, die trotzdem sauber unter der Haube bleibt.',
    logo: '/roos-studio-branding/logos/logo-icon-gradient.png',
    accent: 'from-rs-gradient-mid/30 via-rs-gradient-end/20 to-rs-gradient-start/10',
    layout: 'rally' as const,
  },
  {
    id: 'kristall',
    title: 'Kristall Arena',
    tag: 'Struktur & Licht',
    desc: 'Klare Kanten, klare Regeln — ein Arena-Erlebnis, das Präzision mit Atmosphäre verbindet.',
    logo: '/roos-studio-branding/logos/logo-icon-round.png',
    accent: 'from-rs-gradient-end/25 via-rs-gradient-mid/20 to-rs-gradient-start/10',
    layout: 'crystal' as const,
  },
]

function AppCard({
  app,
  index,
}: {
  app: (typeof apps)[number]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -18 : 18])

  if (app.layout === 'photo') {
    return (
      <motion.article
        ref={ref}
        style={{ y }}
        className="group relative overflow-hidden rounded-3xl border border-rs-border bg-rs-card"
      >
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${app.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-110"
          style={{
            background:
              'radial-gradient(circle, var(--color-rs-gradient-start) 0%, transparent 70%)',
          }}
        />
        <div className="relative grid gap-8 p-8 md:grid-cols-[1fr_1.1fr] md:items-center md:p-10">
          <div className="relative flex min-h-[200px] items-center justify-center rounded-2xl border border-rs-border/60 bg-rs-surface/50 p-8 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={app.logo}
              alt=""
              className="max-h-28 w-auto object-contain opacity-95 drop-shadow-[0_0_40px_rgba(79,140,255,0.25)] transition-transform duration-500 group-hover:scale-105"
              width={200}
              height={120}
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rs-primary">
              {app.tag}
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-rs-text md:text-4xl">
              {app.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-rs-text-secondary">
              {app.desc}
            </p>
          </div>
        </div>
      </motion.article>
    )
  }

  if (app.layout === 'rally') {
    return (
      <motion.article
        ref={ref}
        style={{ y }}
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rs-primary/45 via-rs-gradient-mid/35 to-rs-gradient-end/40 p-px"
      >
        <div className="relative h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-rs-surface">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage: `repeating-linear-gradient(
              -18deg,
              transparent,
              transparent 10px,
              rgba(79, 140, 255, 0.09) 10px,
              rgba(79, 140, 255, 0.09) 11px
            )`,
              animation: 'rs-drift 22s linear infinite',
            }}
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr ${app.accent}`}
          />
          <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6A5BFF]">
                {app.tag}
              </p>
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-rs-text md:text-4xl">
                {app.title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-rs-text-secondary">
                {app.desc}
              </p>
            </div>
            <div className="flex shrink-0 justify-center md:justify-end">
              <div className="rounded-2xl border border-rs-border/80 bg-rs-card/80 p-6 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(106,91,255,0.2)]">
                <img
                  src={app.logo}
                  alt=""
                  className="h-24 w-24 object-contain"
                  width={96}
                  height={96}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-3xl border border-rs-border bg-rs-card"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%, 12% 0)',
          background:
            'linear-gradient(145deg, var(--color-rs-gradient-end), var(--color-rs-gradient-start))',
        }}
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-bl ${app.accent}`}
      />
      <div className="relative grid gap-6 p-8 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-10">
        <div className="relative mx-auto flex h-36 w-36 items-center justify-center md:mx-0">
          <div
            className="absolute inset-0 rotate-45 rounded-xl border border-rs-primary/35 bg-rs-surface/60 transition-transform duration-500 group-hover:rotate-[48deg] group-hover:scale-105"
            aria-hidden
          />
          <div
            className="absolute inset-2 rotate-12 rounded-lg border border-rs-border/80 transition-transform duration-500 group-hover:rotate-[18deg]"
            aria-hidden
          />
          <img
            src={app.logo}
            alt=""
            className="relative z-10 h-20 w-20 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
            width={80}
            height={80}
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-rs-gradient-end">
            {app.tag}
          </p>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-rs-text md:text-4xl">
            {app.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-rs-text-secondary">
            {app.desc}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function FunApps() {
  return (
    <section
      id="spass-apps"
      className="relative border-t border-rs-border bg-rs-bg py-24 sm:py-32"
      aria-labelledby="spass-apps-heading"
    >
      <div className="pointer-events-none absolute left-0 top-1/4 h-72 w-72 rounded-full bg-rs-gradient-mid/10 blur-[100px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rs-primary">
            Spass-Apps
          </p>
          <h2
            id="spass-apps-heading"
            className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-rs-text sm:text-4xl md:text-5xl"
          >
            Spielplatz für Ideen — mit echter Substanz.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-rs-text-secondary">
            Drei Welten, ein roter Faden: Neugier, Handwerk und ein bisschen
            Show — ohne die technische Basis zu vergessen.
          </p>
        </SectionReveal>

        <div className="mt-16 flex flex-col gap-8">
          {apps.map((app, i) => (
            <SectionReveal key={app.id} delay={i * 0.06}>
              <AppCard app={app} index={i} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
