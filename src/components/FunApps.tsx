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
  /** Bildausschnitt im Mockup (16:10-Rahmen) */
  imageFocus?: 'top' | 'center'
}

const apps: AppDef[] = [
  {
    id: 'foto',
    title: 'Lager-Fotos & Galerie',
    eyebrow: 'Foto',
    tag: 'Lager · getestet im Feld',
    desc: 'Fotos vom Lager, sortiert nach Tag – weil’s am Event einfach Spass gemacht hat und danach trotzdem noch nutzbar sein sollte. Läuft, wird benutzt.',
    screenshot: '/showcase/foto-lager-galerie.png',
    screenshotAlt:
      'Foto Galerie: Lager-Kulisse mit Smartphone-Mockup und Wochentags-Alben',
    frame: 'light',
    imageSide: 'right',
    imageFocus: 'center',
  },
  {
    id: 'rally',
    title: 'Rally · Roadtrip Journal',
    eyebrow: 'Rally',
    tag: 'Vereinsfahrt · ohne Admin-Stress',
    desc: 'Team-Code, Karte, Aufgaben – damit niemand auf dem Trip Excel oder WhatsApp-Chaos spielen muss. Einstieg schnell, auch wenn die Leute müde sind.',
    screenshot: '/showcase/rally-roadtrip-lobby.png',
    screenshotAlt:
      'Vereinsreise 2026: Roadtrip Journal Lobby mit Event-Karte und Team-Code',
    frame: 'rally',
    imageSide: 'left',
    imageFocus: 'center',
  },
  {
    id: 'kristall',
    title: 'Kristall Arena',
    eyebrow: 'Kristall Arena',
    tag: 'Live-Score · sichtbar für alle',
    desc: 'Punkte und Rangliste in Echtzeit – damit keiner fragen muss, wer gerade vorne liegt. Optik übertrieben, Logik simpel.',
    screenshot: '/showcase/kristall-arena.png',
    screenshotAlt:
      'Kristall-Rangliste: Podest Plätze 1–3 und Liste ab Platz 4 im Weltraum-Look',
    frame: 'crystal',
    imageSide: 'right',
    imageFocus: 'top',
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
  imageFocus = 'top',
}: {
  src: string
  alt: string
  frame: AppDef['frame']
  imageFocus?: AppDef['imageFocus']
}) {
  const focusClass = imageFocus === 'center' ? 'object-center' : 'object-top'
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-1 sm:rounded-3xl sm:p-1.5 ${frameClasses(frame)}`}
    >
      <div className="aspect-[16/10] w-full overflow-hidden rounded-[0.875rem] bg-rs-bg sm:rounded-2xl">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover ${focusClass}`}
          width={1600}
          height={1000}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
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
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 340, damping: 26 }}
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
      <ShowcaseMockup
        src={app.screenshot}
        alt={app.screenshotAlt}
        frame={app.frame}
        imageFocus={app.imageFocus}
      />
    </motion.div>
  )

  return (
    <motion.article
      ref={ref}
      style={{ y }}
      className="group relative overflow-hidden rounded-3xl border border-rs-border bg-rs-card/40 p-6 backdrop-blur-sm transition-shadow duration-300 ease-out hover:shadow-[0_0_0_1px_rgba(79,140,255,0.14),0_24px_56px_-28px_rgba(0,0,0,0.55)] sm:p-8 md:p-10"
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
      className="relative border-t border-rs-border bg-rs-bg py-24 sm:py-32 md:py-36"
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
            Aus Spass entstanden. Trotzdem echt.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-rs-text-secondary">
            Kein Moodboard: Galerie fürs Lager, Rally fürs Vereins-Event,
            Kristall Arena fürs Mitfiebern – alles gebaut, ausprobiert und
            irgendwo schon mal live gehabt.
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
