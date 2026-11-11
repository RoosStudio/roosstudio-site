import { site } from '../../content/site'

export function MobileDock() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-[110] flex justify-center px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] md:hidden"
      aria-label="Schnellnavigation"
    >
      <ul
        className="flex w-full max-w-md items-center justify-between gap-1 rounded-2xl border border-white/10 bg-rs-bg/85 px-1.5 py-1.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
        role="list"
      >
        {site.header.nav.map((link) => (
          <li key={link.href} className="min-w-0 flex-1">
            <a
              href={link.href}
              className="flex items-center justify-center rounded-xl px-1 py-2.5 text-center text-[0.72rem] font-semibold text-rs-text-secondary transition hover:bg-white/5 hover:text-rs-text"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
