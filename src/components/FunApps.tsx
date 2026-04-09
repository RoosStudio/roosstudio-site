import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SectionReveal } from './SectionReveal'

type AppDef = {
  id: string
  title: string
  eyebrow: string
  tag: string
  desc: string
  screenshot: string
  screenshotAlt: string
  /** visuelle Rahmen-Variante zum Screenshot */
  frame: 'light' | 'rally' | 'crystal'
  imageSide: 'left' | 'right'
}

const apps: AppDef[] = [
  {
    id: 'foto',
    title: 'Lager-Fotos & Galerie',
    eyebrow: 'Foto',
    tag: 'Playground · Events',
    desc: 'Alben, Lagerwoche, klarer Look: eine Galerie, die sich wie ein Produkt anfühlt — warm, ruhig, sofort verständlich.',
    screenshot: '/showcase/foto-lager-galerie.png',
    screenshotAlt:
      'Oberfläche der Lager-Fotos-Galerie mit Wochentags-Alben und Roos-Studio-Dock',
    frame: 'light',
    imageSide: 'right',
  },
  {
    id: 'rally',
    title: 'Rally · Roadtrip Journal',
    eyebrow: 'Rally',
    tag: 'Live Experience · Teams',
    desc: 'Event-Lobby, Team-Codes, Mission-Flow: Tempo und Klarheit — damit Gäste sofort drin sind, ohne Chaos.',
    screenshot: '/showcase/rally-roadtrip-lobby.png',
    screenshotAlt:
      'Roadtrip Journal Event-Lobby mit Team-Login und Roadtrip-Branding',
    frame: 'rally',
    imageSide: 'left',
  },
  {
    id: 'kristall',
    title: 'Kristall Arena',
    eyebrow: 'Kristall Arena',
    tag: 'Echtzeit · Ranking',
    desc: 'Podest, Scanner, Live-Feed: Arena-Feeling mit Struktur — für Events, die man spürt und steuern kann.',
    screenshot: '/showcase/kristall-arena.png',
    screenshotAlt:
      'Kristall Arena Steuerung mit Podest, Rangliste und Echtzeit-Status',
    frame: 'crystal',
    imageSide: 'right',
  },
]

function frameClasses(frame: AppDef['frame']) {
  switch (frame) {
    case 'light':
      return 'border-white/25 bg-gradient-to-b from-white/[0.12] to-white/[0.04] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.75)] ring-1 ring-white/10'
    case 'rally':
      return 'border-rs-primary/35 bg-rs-primary/[0.06] shadow-[0_0_0_1px_rgba(79,140,255,0.2),0_28px_90px_-24px_rgba(79,140,255,0.35)]'
    case 'crystal':
      return 'border-rs-primary/30 bg-gradient-to-br from-rs-primary/15 via-rs-card/80 to-rs-gradient-end/20 shadow-[0_0_60px_-12px_rgba(79,140,255,0.28)]'
    default:
      return 'border-rs-border'
  }
}

function ShowcaseMockup({
  src,
  alt,
  frame,
}: {
  src: string
  alt: string
  frame: AppDef['frame']
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-1 sm:rounded-3xl sm:p-1.5 ${frameClasses(frame)}`}
    >
      <div className="overflow-hidden rounded-[0.875rem] bg-rs-bg sm:rounded-2xl">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-auto w-full object-cover object-top"
          width={1600}
          height={1000}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        />
      </div>
    </div>
  )
}

function AppCard({ app, index }: { app: AppDef; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -14 : 14])

  const textBlock = (
    <div className="flex flex-col justify-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rs-primary">
        {app.eyebrow}
      </p>
      <p className="mt-2 inline-flex w-fit items-center rounded-full border border-rs-border/80 bg-rs-surface/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-rs-text-secondary">
        {app.tag}
      </p>
      <h3 className="mt-4 text-3xl font-bold tracking-tight text-rs-text sm:text-4xl">
        {app.title}
      </h3>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-rs-text-secondary sm:text-lg">
        {app.desc}
      </p>
    </div>
  )

  const imageBlock = (
    <motion.div
      className="relative"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl opacity-60 blur-3xl"
        style={{
          background:
            app.frame === 'light'
              ? 'radial-gradient(ellipse at center, rgba(255,200,160,0.12) 0%, transparent 65%)'
              : app.frame === 'crystal'
                ? 'radial-gradient(ellipse at center, rgba(157,77,255,0.18) 0%, transparent 65%)'
                : 'radial-gradient(ellipse at center, rgba(79,140,255,0.2) 0%, transparent 65%)',
        }}
        aria-hidden
      />
      <ShowcaseMockup src={app.screenshot} alt={app.screenshotAlt} frame={app.frame} />
    </motion.div>
  )

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-3xl border border-rs-border bg-rs-card/40 p-6 backdrop-blur-sm sm:p-8 md:p-10"
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70 ${
          app.frame === 'light'
            ? 'bg-gradient-to-br from-amber-100/5 via-transparent to-rs-primary/5'
            : app.frame === 'crystal'
              ? 'bg-gradient-to-bl from-rs-primary/8 via-transparent to-rs-gradient-end/12'
              : 'bg-gradient-to-tr from-rs-primary/10 via-transparent to-rs-gradient-mid/5'
        }`}
      />
      <div
        className={`relative grid items-center gap-10 lg:gap-14 ${
          app.imageSide === 'left'
            ? 'lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]'
            : 'lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'
        }`}
      >
        <div
          className={
            app.imageSide === 'left'
              ? 'order-2 lg:order-1'
              : 'order-2 lg:order-2'
          }
        >
          {imageBlock}
        </div>
        <div
          className={
            app.imageSide === 'left'
              ? 'order-1 lg:order-2'
              : 'order-1 lg:order-1'
          }
        >
          {textBlock}
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
            Echte Oberflächen — kein Placeholder-Theater.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-rs-text-secondary">
            So sehen die Playground-Projekte aus, wenn sie laufen: Galerie, Rally
            und Kristall Arena, jeweils mit eigenem Charakter.
          </p>
        </SectionReveal>

        <div className="mt-16 flex flex-col gap-12 md:gap-16">
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
