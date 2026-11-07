import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { useState } from 'react'
import { site } from '../../content/site'
import { scrollToKontaktEmail } from '../../lib/scrollToKontaktEmail'
import { EASE } from '../../lib/motionPresets'
import { BrandLogo } from '../brand/BrandLogo'

export function Header() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 20))

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-100 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-rs-bg/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-rs-bg/80 to-transparent'
      }`}
      initial={reduce ? false : { y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8">
        <a href="#top" className="shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-rs-lime" aria-label="Startseite">
          <BrandLogo placement="header" />
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {site.header.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-rs-text-secondary transition hover:text-rs-text"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt-email"
          className="rs-cta rs-cta--sm rs-cta--shine"
          aria-label={site.header.cta.aria}
          onClick={(e) => scrollToKontaktEmail(e, reduce)}
        >
          <span className="md:hidden">{site.header.cta.short}</span>
          <span className="hidden md:inline">{site.header.cta.long}</span>
        </a>
      </div>
    </motion.header>
  )
}
