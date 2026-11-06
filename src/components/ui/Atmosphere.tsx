/**
 * Ruhiger Seitenhintergrund — Orbs und feines Grid, ohne Hero zu übertönen.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-rs-bg" />
      <div className="rs-orb rs-orb--a opacity-25" />
      <div className="rs-orb rs-orb--b opacity-20" />
      <div className="rs-page-grid absolute inset-0 opacity-[0.04]" />
    </div>
  )
}
