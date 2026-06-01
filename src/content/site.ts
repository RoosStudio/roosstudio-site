/**
 * Roos Studio — ein Kanal, klarer Ton.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#produkte', label: 'Produkte' },
      { href: '#vorgehen', label: 'Vorgehen' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Projekt starten', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    eyebrow: 'Software Studio · Schweiz',
    h1Line1: 'Roos Studio',
    h1Line2: 'Apps, die Ideen tragen.',
    lede:
      'Wir entwickeln Web-Apps und Plattformen — für Kunden und in der eigenen Werkstatt. Mit KI, Handwerk und dem Anspruch, dass Software früh testbar wird.',
    primaryCta: { label: 'Projekt besprechen', href: '#kontakt-email' },
    secondaryCta: { label: 'Produkte ansehen', href: '#produkte' },
  },

  products: {
    sectionEyebrow: 'Produkte',
    sectionTitle: 'Aus unserer Werkstatt.',
    lede: 'Referenzprojekte aus unserer Werkstatt — ein Klick für den vollen Überblick.',
    openLabel: 'Vergrössern',
  },

  examples: [
    {
      id: 'wiretrack',
      name: 'WireTrack',
      category: 'Plattform',
      image: '/marketing/wiretrack.png',
      logo: '/marketing/wiretrack-logo.png',
      alt: 'WireTrack: Operations-Dashboard',
      pitch: 'Operations-Dashboard für Teams — Tickets, Projekte und Rollen in einer Oberfläche.',
      description:
        'WireTrack bündelt Dashboard, Widgets, Rechte und Abläufe in einer klaren B2B-Oberfläche.',
      details: {
        was: 'Operations-Plattform für Teams — Tickets, Projekte, Rollen und Widgets.',
        wie: 'Modulares Widget-System, klare Rechte, eigener Test-Deploy.',
        wo: 'Produktiv intern · Preview auf test.roosstudio.ch/wiretrack',
      },
    },
    {
      id: 'nexplay',
      name: 'NexPlay',
      category: 'Plattform',
      image: '/marketing/nexplay.png',
      logo: '/marketing/nexplay-logo.png',
      alt: 'NexPlay: Plattform-Übersicht',
      pitch: 'Skalierbare Plattform-Architektur — für Wachstum und klare Releases.',
      description:
        'NexPlay ist unsere nächste Plattform: strukturiert entwickelt, früh testbar, sauber ausrollbar.',
      details: {
        was: 'Enterprise-Plattform — Content, Lobby, Scores und Live-Momente.',
        wie: 'Gleicher Stack wie WireTrack: Preview-Slot, Module, iteratives Release.',
        wo: 'In Entwicklung · Preview-Slot test.roosstudio.ch/nexplay',
      },
    },
    {
      id: 'lagerfotos',
      name: 'Lagerfotos',
      category: 'Experience',
      image: '/marketing/lagerfotos.png',
      logo: null,
      alt: 'Lagerfotos: Event-Galerie',
      pitch: 'Event-Galerie mit Tagesalben — mobil, schnell, unter Last stabil.',
      description: 'Referenz für Erlebnis-Apps: tausende Fotos, sofort auffindbar.',
      details: {
        was: 'Event-Galerie — Upload, Sortierung, Suche nach Tag und Album.',
        wie: 'Mobile-first UI, performante Bildauslieferung.',
        wo: 'Events und Lager · Handy und Tablet',
      },
    },
    {
      id: 'rally',
      name: 'Rally Quest',
      category: 'Experience',
      image: '/marketing/rally-quest.png',
      logo: '/marketing/rally-logo.png',
      alt: 'Rally Quest: Roadtrip-Lobby',
      pitch: 'Roadtrip-App mit Lobby, Karte und Aufgaben für Gruppen.',
      description: 'Interaktiv, skalierbar — für Events mit vielen Teilnehmenden.',
      details: {
        was: 'Roadtrip- und Event-App — Lobby, Codes, Karte, Aufgaben.',
        wie: 'Echtzeit-Lobby, Aufgaben-Flows, Kartenansicht.',
        wo: 'Gruppenfahrten und Events',
      },
    },
    {
      id: 'punkte-arena',
      name: 'Punkte-Arena',
      category: 'Experience',
      image: '/marketing/punkte-arena.png',
      logo: null,
      alt: 'Punkte-Arena: Live-Rangliste',
      pitch: 'Live-Scores für Bühne und Publikum — lesbar aus der Distanz.',
      description: 'Show-ready UI: klare Typografie, starke Kontraste, null Rauschen.',
      details: {
        was: 'Live-Scoreboard — Teams, Punkte, Rankings in Echtzeit.',
        wie: 'Grosse Typo, Bühne-/Team-/Publikums-Ansichten.',
        wo: 'Events und Shows · Grossleinwand und Mobil',
      },
    },
  ] as const,

  approach: {
    sectionEyebrow: 'Vorgehen',
    sectionTitle: 'Klarer Weg von der Idee zum Launch.',
    lede: 'Derselbe Prozess für unsere Apps und dein Projekt — ohne Umwege.',
    steps: [
      {
        title: 'Stage',
        value: 'test.roosstudio.ch',
        line: 'Eigene Preview-URL. Echte Flows testen, bevor etwas live geht.',
      },
      {
        title: 'Build',
        value: './deploy.sh',
        line: 'Reproduzierbarer Build — jeder Release nachvollziehbar.',
      },
      {
        title: 'Launch',
        value: 'roosstudio.ch',
        line: 'Freigabe wenn es passt. Dann stabil ausliefern.',
      },
    ] as const,
  },

  contact: {
    sectionTitle: 'Projekt besprechen.',
    lede: 'Kurze Mail reicht — wir melden uns persönlich mit einem klaren nächsten Schritt.',
    cta: 'hi@roosstudio.ch',
    mailtoSubject: 'Projekt — Roos Studio',
    facts: ['Schweiz', 'Remote', 'Antwort per Mail'] as const,
  },

  footer: {
    tagline: 'Roos Studio — Software aus der Schweiz',
  },
} as const

export type Example = (typeof site.examples)[number]
