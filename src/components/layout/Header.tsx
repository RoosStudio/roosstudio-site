import { motion, useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE } from '../../lib/motionPresets'
import { BrandLogo } from '../brand/BrandLogo'

export function Header() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 24)
  })

  return (
    <motion.header
      className={`pointer-events-auto fixed inset-x-0 top-0 z-100 transition-[background,border-color,backdrop-filter] duration-400 ${
        scrolled
          ? 'border-b border-rs-border/50 bg-rs-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-rs-bg/85 via-rs-bg/40 to-transparent backdrop-blur-md'
      }`}
      initial={reduceMotion ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:gap-4 sm:px-8 sm:py-4">
        <a
          href="#top"
          className="flex shrink-0 items-center outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg"
          aria-label="Roos Studio Startseite"
        >
          <BrandLogo placement="header" />
        </a>
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Hauptnavigation">
          {site.header.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-rs-text-secondary transition-colors hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
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
          <span className="rs-cta-text-rest md:hidden">{site.header.cta.short}</span>
          <span className="rs-cta-text-rest hidden md:inline">{site.header.cta.long}</span>
        </a>
      </div>
    </motion.header>
  )
}
