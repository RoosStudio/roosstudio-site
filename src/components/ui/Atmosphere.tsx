/**
 * Animierter Seitenhintergrund: Orbs, Grid-Flow, Brand-Glows.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden"
      aria-hidden
    >
      <div className="rs-bg-depth absolute inset-0" />
      <div className="rs-ambient-field absolute inset-0" />
      <div className="rs-orb rs-orb--a" />
      <div className="rs-orb rs-orb--b" />
      <div className="rs-page-grid absolute inset-0 opacity-20" />
    </div>
  )
}
