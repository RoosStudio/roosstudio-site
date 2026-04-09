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
      className="fixed inset-x-0 top-0 z-50 border-b border-rs-border/60 bg-rs-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[3.75rem] max-w-6xl items-center gap-3 px-4 sm:h-[4.25rem] sm:gap-6 sm:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center outline-none ring-rs-primary/40 focus-visible:ring-2"
        >
          <img
            src="/roos-studio-branding/logos/logo-primary-dark.png"
            alt="Roos Studio"
            className="h-7 w-auto sm:h-9"
            width={160}
            height={40}
          />
        </a>
        <nav
          className="flex min-w-0 flex-1 justify-end gap-1 overflow-x-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-6 md:gap-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Hauptnavigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium text-rs-text-secondary transition-colors hover:bg-rs-card hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/50 sm:px-0 sm:py-0 sm:text-sm sm:hover:bg-transparent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:hi@roosstudio.ch"
          className="shrink-0 rounded-full border border-rs-border bg-rs-card px-3 py-1.5 text-xs font-medium text-rs-text transition-colors hover:border-rs-primary/40 hover:text-rs-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/50 sm:px-4 sm:py-2 sm:text-sm"
        >
          <span className="hidden sm:inline">Hallo sagen</span>
          <span className="sm:hidden">Mail</span>
        </a>
      </div>
    </motion.header>
  )
}
