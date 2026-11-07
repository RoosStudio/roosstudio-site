import { site } from '../../content/site'
import { BrandLogo } from '../brand/BrandLogo'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-rs-bg pb-28 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <a href="#top" aria-label="Startseite">
              <BrandLogo placement="footer" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-rs-text-secondary">{site.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-rs-text-secondary" aria-label="Footer">
            {site.header.nav.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-rs-text">
                {l.label}
              </a>
            ))}
            <a href="#impressum" className="hover:text-rs-text">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:text-rs-text">
              Datenschutz
            </a>
          </nav>
        </div>

        <div id="impressum" className="mt-14 scroll-mt-24 border-t border-white/10 pt-10">
          <h2 className="text-sm font-bold text-rs-text">Impressum</h2>
          <div className="mt-3 max-w-2xl space-y-2 text-sm text-rs-text-secondary">
            <p>
              <strong className="text-rs-text">Roos Studio</strong>
            </p>
            <p>
              Kontakt:{' '}
              <a href={`mailto:${site.meta.email}`} className="text-rs-primary hover:underline">
                {site.meta.email}
              </a>
            </p>
          </div>
        </div>

        <div id="datenschutz" className="mt-10 scroll-mt-24 border-t border-white/10 pt-10">
          <h2 className="text-sm font-bold text-rs-text">Datenschutz</h2>
          <div className="mt-3 max-w-2xl space-y-2 text-sm text-rs-text-secondary">
            <p>
              Keine Formulare auf dieser Seite. Beim Aufruf können technisch nötige Server-Logs entstehen.
              Mail-Anfragen werden nur zur Bearbeitung genutzt.
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-rs-muted">© {new Date().getFullYear()} Roos Studio</p>
      </div>
    </footer>
  )
}
