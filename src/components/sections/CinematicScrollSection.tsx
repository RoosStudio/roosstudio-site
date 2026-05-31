import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { site } from '../../content/site'

type Beat = {
  id: string
  title: string
  line: string
  image: string
  alt: string
}

function BeatLayer({
  beat,
  progress,
  index,
  total,
}: {
  beat: Beat
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const reduce = useReducedMotion()
  const n = total
  const seg = 1 / n
  const fade = Math.min(0.07, seg * 0.22)
  const iEnd = (index + 1) * seg

  const opacity = useTransform(
    progress,
    index === 0
      ? [0, fade, iEnd - fade, iEnd]
      : [index * seg, index * seg + fade, iEnd - fade, iEnd],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0],
  )

  const scale = useTransform(
    progress,
    index === 0
      ? [0, fade, iEnd - fade, iEnd]
      : [index * seg, index * seg + fade, iEnd - fade, iEnd],
    index === 0 ? [1.04, 1, 1, 1.03] : [1.08, 1, 1, 1.05],
  )

  return (
    <motion.div
      className="absolute inset-0 will-change-[opacity,transform]"
      style={{ opacity: reduce ? (index === 0 ? 1 : 0) : opacity, scale: reduce ? 1 : scale }}
    >
      <img
        src={beat.image}
        alt=""
        role="presentation"
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${beat.id === 'foto' ? 'scale-[1.18] object-[72%_center]' : 'object-center'}`}
        sizes="100vw"
        width={1920}
        height={1080}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-[calc(12vh+1.5rem)] sm:px-10 md:px-14 md:pb-[calc(11vh+2rem)]">
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-normal text-rs-primary sm:text-xs">
          {String(index + 1).padStart(2, '0')} · Screen
        </p>
        <h3 className="mt-2 font-display text-4xl font-bold tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {beat.title}
        </h3>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
          {beat.line}
        </p>
      </div>
    </motion.div>
  )
}

function VideoScrubLayer({
  src,
  progress,
}: {
  src: string
  progress: MotionValue<number>
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduce = useReducedMotion()
  const smoothProgress = useSpring(progress, {
    stiffness: reduce ? 500 : 120,
    damping: reduce ? 100 : 28,
    mass: 0.4,
  })

  const sync = useCallback(
    (p: number) => {
      const el = videoRef.current
      if (!el || !el.duration || Number.isNaN(el.duration)) return
      const t = Math.min(1, Math.max(0, p)) * el.duration
      if (Math.abs(el.currentTime - t) > 0.035) {
        el.currentTime = t
      }
    },
    [],
  )

  useMotionValueEvent(smoothProgress, 'change', sync)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    const onMeta = () => sync(smoothProgress.get())
    el.addEventListener('loadedmetadata', onMeta)
    return () => el.removeEventListener('loadedmetadata', onMeta)
  }, [smoothProgress, sync])

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover object-center"
        src={src}
        muted
        playsInline
        preload="auto"
        aria-hidden
        tabIndex={-1}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-[calc(12vh+1rem)] sm:px-10 md:px-14">
        <p className="font-mono text-[0.65rem] uppercase tracking-normal text-rs-primary sm:text-xs">
          Showreel
        </p>
        <p className="mt-2 max-w-lg font-display text-2xl font-semibold text-white sm:text-3xl">
          Scroll steuert die Timeline — wie beim Trailer.
        </p>
      </div>
    </div>
  )
}

export function CinematicScrollSection() {
  const containerRef = useRef<HTMLElement>(null)
  const cfg = site.cinematic
  const reduce = useReducedMotion()
  const beats: Beat[] = site.proof.items.map((p) => ({
    id: p.id,
    title: p.title,
    line: p.line,
    image: p.image,
    alt: p.alt,
  }))
  const n = beats.length
  const useVideo = Boolean(cfg.videoSrc)
  const vhScroll = useVideo ? cfg.videoScrollVh : cfg.vhPerBeat * n

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [active, setActive] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    if (useVideo || reduce) return
    const idx = Math.min(n - 1, Math.max(0, Math.floor(p * n)))
    setActive(idx)
  })

  if (reduce && useVideo && cfg.videoSrc) {
    return (
      <section
        id={cfg.sectionId}
        className="rs-section-scroll-mt rs-section-border scroll-mt-24 border-rs-border/80 bg-black sm:scroll-mt-28"
        aria-labelledby="reel-video-static"
      >
        <div className="rs-section-inner rs-section-y">
          <p className="rs-eyebrow">Showreel</p>
          <h2 id="reel-video-static" className="rs-section-title">
            Video — klassische Steuerung
          </h2>
          <p className="rs-section-lede max-w-2xl">
            Bei reduzierter Bewegung ohne Scroll-Timeline: Video mit Bedienelementen.
          </p>
          <video
            src={cfg.videoSrc}
            controls
            playsInline
            className="mt-10 w-full max-w-5xl rounded-2xl border border-white/10 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)]"
          />
        </div>
      </section>
    )
  }

  if (reduce && !useVideo) {
    return (
      <section
        id={cfg.sectionId}
        className="rs-section-scroll-mt rs-section-border scroll-mt-24 border-rs-border/80 bg-black sm:scroll-mt-28"
        aria-labelledby="reel-heading-static"
      >
        <div className="rs-section-inner rs-section-y max-w-6xl">
          <p className="rs-eyebrow">Showreel</p>
          <h2 id="reel-heading-static" className="rs-section-title">
            Screens — ein Beat nach dem anderen.
          </h2>
          <p className="rs-section-lede max-w-2xl">
            Kurzform ohne Scroll-Story: dieselben Oberflächen, kompakt untereinander.
          </p>
          <ul className="mt-12 space-y-10" role="list">
            {beats.map((b, i) => (
              <li
                key={b.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-rs-card/40 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                <div className="relative aspect-[16/9] w-full bg-black/50">
                  <img
                    src={b.image}
                    alt={b.alt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width:768px) 100vw, 72rem"
                    width={1600}
                    height={900}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="px-5 py-6 sm:px-8">
                  <p className="font-mono text-xs uppercase tracking-normal text-rs-primary">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400 sm:text-base">{b.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      id={cfg.sectionId}
      className="relative w-full scroll-mt-24 sm:scroll-mt-28"
      style={{ height: `${vhScroll}vh` }}
      aria-labelledby="reel-heading"
    >
      <h2 id="reel-heading" className="sr-only">
        Showreel — per Scroll durch vier Screens
      </h2>

      <div className="sticky top-0 h-dvh w-full overflow-hidden bg-black">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[min(7vh,3.5rem)] bg-gradient-to-b from-black via-black/90 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[min(11vh,5rem)] bg-gradient-to-t from-black via-black/80 to-transparent"
          aria-hidden
        />

        {useVideo && cfg.videoSrc ? (
          <VideoScrubLayer src={cfg.videoSrc} progress={scrollYProgress} />
        ) : (
          <>
            {beats.map((beat, i) => (
              <BeatLayer key={beat.id} beat={beat} progress={scrollYProgress} index={i} total={n} />
            ))}
          </>
        )}

        {!useVideo && (
          <div
            className="absolute right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 md:right-8"
            aria-hidden
          >
            {beats.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === active ? 'scale-125 bg-rs-primary shadow-[0_0_14px_rgba(79,140,255,0.9)]' : 'bg-white/25'
                }`}
              />
            ))}
          </div>
        )}

        {!reduce && (
          <div className="pointer-events-none absolute bottom-[min(10vh,4.5rem)] left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1 opacity-70">
            <span className="font-mono text-[0.6rem] uppercase tracking-normal text-zinc-500">
              Scroll
            </span>
            <span className="motion-safe:animate-bounce text-lg text-rs-primary">↓</span>
          </div>
        )}
      </div>
    </section>
  )
}
