import type { MouseEvent } from 'react'

/** Zuverlässiger Scroll zur Mail-Zeile (u. a. Chrome) inkl. Fokus & History. */
export function scrollToKontaktEmail(
  e: MouseEvent<HTMLAnchorElement>,
  prefersReducedMotion: boolean | null | undefined,
): void {
  const el = document.getElementById('kontakt-email')
  if (!el) return

  e.preventDefault()

  el.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  })

  try {
    window.history.replaceState(null, '', '#kontakt-email')
  } catch {
    /* ignore */
  }

  window.requestAnimationFrame(() => {
    el.focus({ preventScroll: true })
  })
}
