/**
 * Ruhiger Seitenhintergrund — dezente Brand-Glows, kein Grid/Noise.
 */
export function Atmosphere() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden"
      aria-hidden
    >
      <div className="rs-bg-depth absolute inset-0" />
      <div className="rs-ambient-field absolute inset-0" />
    </div>
  )
}
