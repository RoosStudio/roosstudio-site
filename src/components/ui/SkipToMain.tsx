import { useCallback, type MouseEvent } from 'react'

/**
 * Scrollt zu #main und setzt Tastatur-Fokus — ergänzt den reinen Hash-Sprung für Screenreader.
 */
export function SkipToMain() {
  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const main = document.getElementById('main')
    if (!main) return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    main.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    requestAnimationFrame(() => {
      main.focus({ preventScroll: true })
    })
    window.history.replaceState(null, '', '#main')
  }, [])

  return (
    <a href="#main" className="rs-skip" onClick={handleClick}>
      Zum Inhalt springen
    </a>
  )
}
