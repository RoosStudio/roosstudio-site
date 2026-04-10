import { BrandLogo } from './BrandLogo'
import { scrollToKontaktEmail } from '../lib/scrollToKontaktEmail'
import { motion, useReducedMotion } from 'framer-motion'

const links = [
  { href: '#spass-apps', label: 'Spass-Apps' },
  { href: '#wiretrack', label: 'WireTrack' },
  { href: '#haltung', label: 'Haltung' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
  const reduceMotion = useReducedMotion()
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto fixed inset-x-0 top-0 z-100 border-b border-rs-border/60 bg-rs-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 sm:gap-6 sm:px-8 sm:py-3">
        <a
          href="#top"
          className="relative z-1 flex shrink-0 items-center py-1 outline-none ring-rs-primary/40 focus-visible:ring-2"
          aria-label="Roos Studio Startseite"
        >
          <BrandLogo placement="header" />
        </a>
        <nav
          className="flex min-w-0 justify-end gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Hauptnavigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative z-1 shrink-0 whitespace-nowrap rounded-md px-2 py-1.5 text-xs font-medium text-rs-text-secondary transition-colors hover:bg-rs-card hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/50 sm:px-0 sm:py-0 sm:text-sm sm:hover:bg-transparent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt-email"
          className="rs-cta rs-cta--sm group relative z-2 shrink-0 cursor-pointer focus-visible:outline-none"
          aria-label="Zum Kontakt mit E-Mail-Adresse scrollen"
          onClick={(e) => scrollToKontaktEmail(e, reduceMotion)}
        >
          <span className="inline-grid grid-cols-1 grid-rows-1 place-items-center" aria-hidden>
            <span className="col-start-1 row-start-1 whitespace-nowrap transition-opacity duration-200 ease-out group-focus-visible:pointer-events-none group-focus-visible:opacity-0 group-hover:pointer-events-none group-hover:opacity-0">
              <span className="rs-cta-text-rest hidden sm:inline">Schreib mir</span>
              <span className="rs-cta-text-rest sm:hidden">Mail</span>
            </span>
            <span className="col-start-1 row-start-1 flex items-center justify-center gap-1.5 whitespace-nowrap opacity-0 transition-opacity duration-200 ease-out group-focus-visible:opacity-100 group-hover:opacity-100 sm:gap-2">
              <span
                className="inline-block text-[1.05rem] leading-none motion-reduce:group-hover:animate-none motion-safe:origin-[70%_100%] motion-safe:group-hover:animate-[rs-wave-hand_0.75s_ease-in-out_infinite] motion-safe:group-focus-visible:animate-[rs-wave-hand_0.75s_ease-in-out_infinite] sm:text-[1.1rem]"
                aria-hidden
              >
                👋
              </span>
              <span className="rs-cta-text-hover hidden sm:inline">Hi sagen</span>
              <span className="rs-cta-text-hover sm:hidden">Hi</span>
            </span>
          </span>
        </a>
      </div>
    </motion.header>
  )
}
