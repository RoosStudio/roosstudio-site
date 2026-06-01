import { site } from '../../content/site'
import { BrandLogo } from '../brand/BrandLogo'

export function Footer() {
  return (
    <footer className="border-t border-rs-border/60 bg-rs-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="max-w-md">
            <a
              href="#top"
              className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg"
              aria-label="Roos Studio Startseite"
            >
              <BrandLogo placement="footer" />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-rs-text-secondary sm:mt-6 sm:text-base">
              {site.footer.tagline}
            </p>
          </div>
          <nav
            className="flex flex-col gap-6 sm:items-end"
            aria-label="Footer Navigation"
          >
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-rs-text-secondary">
              <a
                href="#leistungen"
                className="transition-colors hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
              >
                Leistungen
              </a>
              <a
                href="#beispiele"
                className="transition-colors hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
              >
                Produkte
              </a>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-rs-text-secondary">
            <a
              href="#impressum"
              className="transition-colors hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="transition-colors hover:text-rs-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/40"
            >
              Datenschutz
            </a>
            </div>
          </nav>
        </div>

        <div
          id="impressum"
          className="mt-16 scroll-mt-28 border-t border-rs-border/50 pt-12 sm:mt-20 sm:pt-16"
        >
          <h2 className="text-sm font-semibold text-rs-text sm:text-base">Impressum</h2>
          <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-rs-text-secondary">
            <p>
              <strong className="font-medium text-rs-text">Roos Studio</strong>
            </p>
            <p>
              Kontakt:{' '}
              <a
                href={`mailto:${site.meta.email}`}
                className="text-rs-primary underline-offset-2 transition-colors hover:underline"
              >
                {site.meta.email}
              </a>
            </p>
            <p className="text-rs-muted">
              Inhaltlich Verantwortlicher gemäss geltendem Recht: Roos Studio (Kontakt wie oben).
            </p>
          </div>
        </div>

        <div
          id="datenschutz"
          className="mt-12 scroll-mt-28 border-t border-rs-border/50 pt-12 sm:mt-16 sm:pt-16"
        >
          <h2 className="text-sm font-semibold text-rs-text sm:text-base">Datenschutz</h2>
          <div className="mt-4 max-w-2xl space-y-3 text-sm leading-relaxed text-rs-text-secondary">
            <p>
              Diese Website erhebt keine personenbezogenen Daten über Formulare. Beim Aufruf können
              technisch notwendige Server- und Kommunikationsdaten (z. B. IP-Adresse in Logs) beim
              Hosting entstehen — Umfang und Zweck richten sich nach dem jeweiligen Hosting-Anbieter.
            </p>
            <p>
              Bei E-Mail-Kontakt werden die von dir übermittelten Angaben nur zur Bearbeitung der
              Anfrage verwendet.
            </p>
            <p className="text-rs-muted">
              Stand: Mai 2026. Bei Fragen:{' '}
              <a
                href={`mailto:${site.meta.email}`}
                className="text-rs-primary underline-offset-2 transition-colors hover:underline"
              >
                {site.meta.email}
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-rs-muted sm:mt-16">
          © {new Date().getFullYear()} Roos Studio
        </p>
      </div>
    </footer>
  )
}
