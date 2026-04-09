export function Footer() {
  return (
    <footer className="border-t border-rs-border bg-rs-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src="/roos-studio-branding/logos/logo-primary-dark.png"
              alt="Roos Studio"
              className="h-8 w-auto opacity-90"
              width={140}
              height={36}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-rs-muted">
              Code, KI, klare Systeme — und der Wille, es immer wieder neu zu
              probieren.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-rs-text-secondary"
            aria-label="Rechtliches"
          >
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
          </nav>
        </div>

        <div
          id="impressum"
          className="mt-16 scroll-mt-28 border-t border-rs-border/80 pt-12"
        >
          <h2 className="text-lg font-semibold text-rs-text">Impressum</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-rs-text-secondary">
            <p>
              <strong className="font-medium text-rs-text">Roos Studio</strong>
            </p>
            <p>
              Kontakt:{' '}
              <a
                href="mailto:hi@roosstudio.ch"
                className="text-rs-primary hover:underline"
              >
                hi@roosstudio.ch
              </a>
            </p>
            <p className="text-rs-muted">
              Inhaltlich Verantwortlicher gemäss geltendem Recht: Roos Studio
              (Kontakt wie oben).
            </p>
          </div>
        </div>

        <div
          id="datenschutz"
          className="mt-12 scroll-mt-28 border-t border-rs-border/80 pt-12"
        >
          <h2 className="text-lg font-semibold text-rs-text">Datenschutz</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-rs-text-secondary">
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
            <p className="text-rs-muted">
              Stand: April 2026. Bei Fragen:{' '}
              <a
                href="mailto:hi@roosstudio.ch"
                className="text-rs-primary hover:underline"
              >
                hi@roosstudio.ch
              </a>
              .
            </p>
          </div>
        </div>

        <p className="mt-14 text-center text-xs text-rs-muted">
          © {new Date().getFullYear()} Roos Studio. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  )
}
