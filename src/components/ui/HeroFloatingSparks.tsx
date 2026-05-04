import type { CSSProperties } from 'react'

/**
 * Leichte Partikel / Funken im Hero — rein CSS, kein Canvas.
 */
const SPARKS: { t: string; l: string; s: string; d: string }[] = [
  { t: '8%', l: '12%', s: '0.5s', d: '2.2s' },
  { t: '22%', l: '88%', s: '0.3s', d: '3.1s' },
  { t: '38%', l: '6%', s: '0.2s', d: '1.8s' },
  { t: '55%', l: '72%', s: '0.4s', d: '2.6s' },
  { t: '18%', l: '45%', s: '0.6s', d: '3.4s' },
  { t: '72%', l: '18%', s: '0.1s', d: '2.0s' },
  { t: '65%', l: '92%', s: '0.5s', d: '2.8s' },
  { t: '88%', l: '38%', s: '0.35s', d: '2.4s' },
  { t: '12%', l: '68%', s: '0.25s', d: '3.0s' },
  { t: '45%', l: '28%', s: '0.45s', d: '1.6s' },
  { t: '30%', l: '55%', s: '0.15s', d: '2.5s' },
  { t: '78%', l: '58%', s: '0.55s', d: '2.1s' },
  { t: '52%', l: '14%', s: '0.2s', d: '3.2s' },
  { t: '95%', l: '78%', s: '0.4s', d: '1.9s' },
  { t: '5%', l: '34%', s: '0.3s', d: '2.7s' },
  { t: '62%', l: '44%', s: '0.5s', d: '2.3s' },
]

export function HeroFloatingSparks() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      {SPARKS.map((p, i) => (
        <span
          key={i}
          className="rs-hero-spark"
          style={
            {
              top: p.t,
              left: p.l,
              animationDelay: p.s,
              '--rs-spark-dur': p.d,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
