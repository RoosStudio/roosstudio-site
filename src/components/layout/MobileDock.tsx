import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { EASE } from '../../lib/motionPresets'

/** Kompakte Bottom-Nav fürs Handy — greifbar, ohne Hamburger. */
export function MobileDock() {
  const reduce = useReducedMotion()

  return (
    <motion.nav
      className="rs-mobile-dock pointer-events-none fixed inset-x-0 bottom-0 z-[110] flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
      aria-label="Schnellnavigation"
      initial={reduce ? false : { y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.55, ease: EASE }}
    >
      <ul
        className="pointer-events-auto flex w-full max-w-sm items-center justify-between gap-1 rounded-2xl border border-white/10 bg-rs-bg/80 px-2 py-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl"
        role="list"
      >
        {site.header.nav.map((link) => (
          <li key={link.href} className="min-w-0 flex-1">
            <a
              href={link.href}
              className="flex items-center justify-center rounded-xl px-2 py-2.5 text-center text-[0.8125rem] font-semibold text-rs-text-secondary transition hover:bg-white/5 hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/45"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
