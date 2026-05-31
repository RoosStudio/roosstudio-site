/**
 * Voller Canvas-Hintergrund: Vignette, ruhige Lichtfläche, langsamer Grid-Flow,
 * Film-Rauschen — alles pointer-events: none, für prefers-reduced-motion reduziert/abschaltbar.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden"
      aria-hidden
    >
      <div className="rs-bg-depth absolute inset-0" />
      <div className="rs-ambient-field absolute inset-0" />
      <div className="rs-page-grid rs-page-grid--flow absolute inset-0" />
      <div className="rs-page-noise rs-page-noise--drift absolute inset-0" />
    </div>
  )
}
