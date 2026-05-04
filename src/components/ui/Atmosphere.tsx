/**
 * Voller Canvas-Hintergrund: Vignette, schwebende Licht-Orbs, Aurora, langsamer Grid-Flow,
 * Film-Rauschen — alles pointer-events: none, für prefers-reduced-motion reduziert/abschaltbar.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden"
      aria-hidden
    >
      <div className="rs-bg-depth absolute inset-0" />
      <div className="rs-bg-orb rs-bg-orb--1" />
      <div className="rs-bg-orb rs-bg-orb--2" />
      <div className="rs-bg-orb rs-bg-orb--3" />
      <div className="rs-bg-orb rs-bg-orb--4" />
      <div className="rs-bg-sheen" />
      <div className="rs-ambient-aurora absolute inset-0" />
      <div className="rs-page-grid rs-page-grid--flow absolute inset-0" />
      <div className="rs-page-noise rs-page-noise--drift absolute inset-0" />
    </div>
  )
}
