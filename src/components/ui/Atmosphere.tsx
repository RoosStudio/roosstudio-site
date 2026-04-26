/**
 * Dünnes Rauschen + feines Gitter: „Film/Print“-Gefühl, kaum wahrnehmbar.
 * pointer-events: none, fest im Hintergrund.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="rs-page-noise absolute inset-0" />
      <div className="rs-page-grid absolute inset-0" />
    </div>
  )
}
