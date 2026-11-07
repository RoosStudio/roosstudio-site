/**
 * Roos Studio — Solo-Studio, klarer Ton, echte Arbeit.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#arbeit', label: 'Arbeit' },
      { href: '#studio', label: 'Studio' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Schreiben', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    brand: 'Roos Studio',
    headline: 'Ideen bauen. Live schalten. Alltag retten.',
    lede:
      'Solo-Studio aus der Schweiz: Web-Apps und Live-Tools für Vereine, Events und Ideen ohne Grossbudget — auf eigener Infrastruktur, unter klarer Domain.',
    primaryCta: { label: 'Projekt besprechen', href: '#kontakt-email' },
    secondaryCta: { label: 'In die Werkstatt', href: '#arbeit' },
    image: '/marketing/wiretrack.png',
    imageAlt: 'WireTrack Enterprise-Plattform — Dashboard auf Tablet und Smartphone',
  },

  work: {
    sectionEyebrow: 'Arbeit',
    sectionTitle: 'Werkstatt. Kein Moodboard.',
    lede: 'Echte Produkte und Aufträge — sticky, testbar, auf rosstudio.ch gehostet.',
    openLabel: 'Reinzoomen',
  },

  examples: [
    {
      id: 'wiretrack',
      name: 'WireTrack',
      category: 'Plattform',
      image: '/marketing/wiretrack.png',
      logo: '/marketing/wiretrack-logo.png',
      alt: 'WireTrack: Operations-Dashboard auf Tablet und Smartphone',
      pitch: 'Operations-Plattform für Teams — Projekte, Service, Zeit und Kunden an einem Ort.',
      description:
        'WireTrack bündelt Dashboard, Widgets, Rechte und Abläufe in einer klaren B2B-Oberfläche — gebaut für den Alltag, nicht für die Demo.',
      details: {
        was: 'Enterprise-Management: Projekte, Serviceaufträge, Zeiterfassung, Offerten, Monitoring.',
        wie: 'Modulares Widget-System, klare Rollen, eigener Deploy-Pfad.',
        wo: 'Produktiv intern · Preview auf test.roosstudio.ch',
      },
    },
    {
      id: 'nexplay',
      name: 'NexPlay',
      category: 'Verein',
      image: '/marketing/nexplay.png',
      logo: '/marketing/nexplay-logo.png',
      alt: 'NexPlay: Vereins-App auf Desktop und Smartphone',
      pitch: 'All-in-One für Vereine — Planung, Team und Kommunikation.',
      description:
        'NexPlay ist die Vereinsplattform aus dem Studio: Spiele, Training, Chat und Status — später unter next.rosstudio.ch erreichbar.',
      details: {
        was: 'Vereins-App — Team, Planung, Spiele, Kommunikation, Performance.',
        wie: 'Gleicher Stack und Preview-Slot wie andere Studio-Produkte.',
        wo: 'In Entwicklung · next.rosstudio.ch',
      },
    },
    {
      id: 'lagerfotos',
      name: 'Lagerfotos',
      category: 'Verein',
      image: '/marketing/lagerfotos.png',
      logo: null,
      alt: 'Lagerfotos: Galerie-Dashboard und mobile Ansichten',
      pitch: 'Event- und Lager-Galerie — Alben, Freigaben, Elternzugang.',
      description:
        'Für Lager und Events: tausende Fotos sortieren, freigeben und sicher teilen — mobil und unter Last stabil.',
      details: {
        was: 'Foto-Galerie mit Jahres-/Lager-Struktur, Review und Elternzugang.',
        wie: 'Mobile-first UI, performante Bildauslieferung, ZIP-Export.',
        wo: 'Lager und Events · Handy und Tablet',
      },
    },
    {
      id: 'rally',
      name: 'Rally Quest',
      category: 'Event',
      image: '/marketing/rally-quest.png',
      logo: '/marketing/rally-logo.png',
      alt: 'Rally Quest: Live-Karte und Missionen',
      pitch: 'Live-Rallye für Vereine und Teams — Karte, Missionen, Rangliste.',
      description:
        'Jede Location wird zur interaktiven Rallye: Missionen vor Ort, Live-Punkte und Duells — entwickelt von Roos Studio.',
      details: {
        was: 'Roadtrip- und Event-App — Lobby, Codes, Karte, Aufgaben.',
        wie: 'Echtzeit-Lobby, Missions-Flows, Kartenansicht.',
        wo: 'Gruppenfahrten und Vereins-Events',
      },
    },
    {
      id: 'punkte-arena',
      name: 'Punkte-Arena',
      category: 'Event',
      image: '/marketing/punkte-arena.png',
      logo: null,
      alt: 'Punkte-Arena: Live-Rangliste und Scan-UI',
      pitch: 'Live-Punkte für die Halle — scannen, verbuchen, belohnen.',
      description:
        'Show-ready Scoreboard und Abbuchungen in Echtzeit — lesbar von der Bühne bis zum Handy.',
      details: {
        was: 'Live-Scoreboard, QR-Scan, Punktevergabe und Abbuchungen.',
        wie: 'Grosse Typo, Bühnen-/Team-/Publikums-Ansichten.',
        wo: 'Events und Shows · Grossleinwand und Mobil',
      },
    },
    {
      id: 'halle-bestellung',
      name: 'Halle Bestellung',
      category: 'Verein',
      image: null,
      logo: null,
      alt: 'Bestellsystem für die Halle',
      pitch: 'Kleines Bestellsystem für die Halle — Pizza und Snacks ohne Stress.',
      description:
        'Ein schlankes Bestellsystem für den Event-Betrieb: schnell eingerichtet, auf eigener Domain, ohne Ballast.',
      details: {
        was: 'Bestell-Flow für Speisen und Snacks in der Halle.',
        wie: 'Einfache Oberfläche, eigene Subdomain unter rosstudio.ch.',
        wo: 'Vereins- und Event-Hallen',
      },
    },
  ] as const,

  studio: {
    sectionEyebrow: 'Studio',
    sectionTitle: 'Ein Mensch. Eigener Server. Klare Domains.',
    lede:
      'Ich bin Solo — mit Freude am Coden und am Schreiben. Zu Hause läuft Infrastruktur, auf der Vereine und kleine Teams ihre Tools bekommen: xy.rosstudio.ch, ohne Agentur-Overhead.',
    points: [
      {
        title: 'Für Vereine & Events',
        line: 'Bestellungen, Galerien, Rallyes, Live-Punkte — Dinge, die am Abend in der Halle wirklich gebraucht werden.',
      },
      {
        title: 'Ohne Grossbudget',
        line: 'Schlanke Lösungen statt Enterprise-Theater. Testbar früh, ausgeliefert wenn es sitzt.',
      },
      {
        title: 'Eigene Infrastruktur',
        line: 'Hosting und Domains aus dem Studio. Preview auf test.rosstudio.ch, Live wenn du bereit bist.',
      },
    ] as const,
  },

  contact: {
    sectionTitle: 'Bring die Idee.',
    lede: 'Kurze Mail reicht. Ich melde mich persönlich — mit einem klaren nächsten Schritt.',
    cta: 'hi@roosstudio.ch',
    mailtoSubject: 'Projekt — Roos Studio',
    facts: ['Schweiz', 'Solo-Studio', 'Antwort per Mail'] as const,
  },

  footer: {
    tagline: 'Roos Studio — Software aus Freude, für Vereine und Ideen.',
  },
} as const

export type Example = (typeof site.examples)[number]
