import { motion } from 'framer-motion'

const links = [
  { href: '#spass-apps', label: 'Apps' },
  { href: '#wiretrack', label: 'WireTrack' },
  { href: '#philosophie', label: 'Philosophie' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Header() {
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
        >
          <img
            src="/roos-studio-branding/logos/logo-primary-dark.png"
            alt="Roos Studio"
            className="h-11 w-auto sm:h-[3.25rem] md:h-[3.85rem]"
            width={240}
            height={60}
          />
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
          href="mailto:hi@roosstudio.ch"
          className="relative z-2 inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-rs-border bg-rs-card px-3 py-2 text-xs font-semibold text-rs-text no-underline transition-colors hover:border-rs-primary/40 hover:text-rs-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/50 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="hidden sm:inline">Hallo sagen</span>
          <span className="sm:hidden">Mail</span>
        </a>
      </div>
    </motion.header>
  )
}
