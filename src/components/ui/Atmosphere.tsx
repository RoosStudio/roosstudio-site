/**
 * Ruhiger Tiefen-Hintergrund — Orbs + feines Grain, ohne Hero zu übertönen.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-rs-bg" />
      <div className="rs-orb rs-orb--a opacity-[0.28]" />
      <div className="rs-orb rs-orb--b opacity-[0.22]" />
      <div className="rs-page-grid absolute inset-0 opacity-[0.045]" />
      <div className="rs-hero-grain absolute inset-0 opacity-50" />
    </div>
  )
}
