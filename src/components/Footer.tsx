import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="border-t border-rs-border bg-rs-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
          <div className="max-w-md">
            <a
              href="#top"
              className="inline-block outline-none ring-rs-primary/40 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-rs-bg"
              aria-label="Roos Studio Startseite"
            >
              <BrandLogo placement="footer" />
            </a>
            <p className="mt-6 text-base font-medium leading-snug text-rs-text sm:text-[1.05rem]">
              Apps aus Spass, Systeme fürs Tagesgeschäft.
            </p>
            <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-rs-text-secondary">
              Gebaut, getestet, nachgezogen – nicht nur verkauft. Wenn du
              WireTrack oder was Eigenes brauchst: einfach melden.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-10 gap-y-2 text-xs font-normal tracking-wide text-rs-text-secondary sm:text-sm"
            aria-label="Rechtliches"
          >
            <a
              href="#impressum"
              className="transition-colors hover:text-rs-text/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/35"
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="transition-colors hover:text-rs-text/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rs-primary/35"
            >
              Datenschutz
            </a>
          </nav>
        </div>

        <div
          id="impressum"
          className="mt-20 scroll-mt-28 border-t border-rs-border/60 pt-14 sm:mt-24 sm:pt-16"
        >
          <h2 className="text-base font-semibold text-rs-text sm:text-lg">
            Impressum
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[0.8125rem] leading-relaxed text-rs-text/70 sm:text-sm">
            <p>
              <strong className="font-medium text-rs-text">Roos Studio</strong>
            </p>
            <p>
              Kontakt:{' '}
              <a
                href="mailto:hi@roosstudio.ch"
                className="text-rs-primary/90 underline-offset-2 transition-colors hover:text-rs-primary hover:underline"
              >
                hi@roosstudio.ch
              </a>
            </p>
            <p className="text-rs-text/65">
              Inhaltlich Verantwortlicher gemäss geltendem Recht: Roos Studio
              (Kontakt wie oben).
            </p>
          </div>
        </div>

        <div
          id="datenschutz"
          className="mt-16 scroll-mt-28 border-t border-rs-border/60 pt-14 sm:mt-20 sm:pt-16"
        >
          <h2 className="text-base font-semibold text-rs-text sm:text-lg">
            Datenschutz
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-[0.8125rem] leading-relaxed text-rs-text/70 sm:text-sm">
            <p>
              Diese Website erhebt keine personenbezogenen Daten über Formulare.
              Beim Aufruf können technisch notwendige Server- und
              Kommunikationsdaten (z. B. IP-Adresse in Logs) beim Hosting
              entstehen — Umfang und Zweck richten sich nach dem jeweiligen
              Hosting-Anbieter.
            </p>
            <p>
              Bei E-Mail-Kontakt werden die von dir übermittelten Angaben nur zur
              Bearbeitung der Anfrage verwendet.
            </p>
            <p className="text-rs-text/65">
              Stand: April 2026. Bei Fragen:{' '}
              <a
                href="mailto:hi@roosstudio.ch"
                className="text-rs-primary/90 underline-offset-2 transition-colors hover:text-rs-primary hover:underline"
              >
                hi@roosstudio.ch
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-16 text-center text-[0.6875rem] tracking-wide text-rs-muted sm:mt-20 sm:text-xs">
          © {new Date().getFullYear()} Roos Studio
        </p>
      </div>
    </footer>
  )
}
