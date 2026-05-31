import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE } from '../../lib/motionPresets'
import { BrandLogo } from '../brand/BrandLogo'

export function Header() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className="pointer-events-auto fixed inset-x-0 top-0 z-100 border-b border-rs-border/50 bg-rs-bg/80 backdrop-blur-xl backdrop-saturate-150"
      initial={reduceMotion ? { y: 0, opacity: 1 } : { y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg"
          aria-label="Roos Studio Startseite"
        >
          <BrandLogo placement="header" />
        </a>
        <nav
          className="hidden min-w-0 flex-1 justify-center gap-0.5 sm:flex"
          aria-label="Hauptnavigation"
        >
          {site.header.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-rs-text-secondary transition-colors duration-200 hover:bg-white/[0.04] hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt-email"
          className="rs-cta rs-cta--sm rs-cta--shine focus-visible:outline-none"
          aria-label={site.header.cta.aria}
          onClick={(e) => scrollToKontaktEmail(e, reduceMotion)}
        >
          <span className="rs-cta-text-rest">{site.header.cta.long}</span>
        </a>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-rs-border/40 px-3 pb-2.5 pt-1.5 sm:hidden"
        aria-label="Hauptnavigation mobil"
      >
        {site.header.nav.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="shrink-0 rounded-full px-3 py-2 text-xs font-medium text-rs-text-secondary transition-colors hover:bg-white/[0.04] hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/45"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
