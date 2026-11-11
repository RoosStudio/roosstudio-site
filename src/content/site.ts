/**
 * Roos Studio — jung, direkt, ohne Preisschild.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#arbeit', label: 'Beispiele' },
      { href: '#studio', label: 'Studio' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Mail', long: 'Schreiben', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    brand: 'Roos Studio',
    headline: 'Apps für Vereine & Ideen — ohne Agentur-Theater.',
    lede:
      'Ich baue schlanke Web-Tools, die am Eventabend funktionieren. Eigene Domain, eigener Server, direkter Draht.',
    primaryCta: { label: 'Beispiele ansehen', href: '#arbeit' },
    secondaryCta: { label: 'Schreiben', href: '#kontakt-email' },
    slides: [
      {
        src: '/showcase/wiretrack-dashboard.png',
        alt: 'WireTrack Dashboard',
        label: 'WireTrack',
      },
      {
        src: '/showcase/foto-lager-galerie.png',
        alt: 'Lagerfotos Galerie',
        label: 'Lagerfotos',
      },
      {
        src: '/showcase/rally-roadtrip-lobby.png',
        alt: 'Rally Quest Lobby',
        label: 'Rally Quest',
      },
      {
        src: '/showcase/kristall-arena.png',
        alt: 'Punkte-Arena / Kristall',
        label: 'Punkte-Arena',
      },
      {
        src: '/marketing/nexplay-overview.png',
        alt: 'NexPlay Übersicht',
        label: 'NexPlay',
      },
    ] as const,
  },

  work: {
    eyebrow: 'Beispiele',
    title: 'Schon gebaut. Schon gelaufen.',
    lede: 'Echte Oberflächen aus der Werkstatt — tippen zum Vergrössern.',
    openLabel: 'Öffnen',
  },

  examples: [
    {
      id: 'nexplay',
      name: 'NexPlay',
      category: 'Verein',
      image: '/marketing/nexplay-overview.png',
      logo: '/marketing/nexplay-logo.png',
      alt: 'NexPlay Vereinsplattform',
      pitch: 'All-in-One für Teams: Planung, Chat, Spiele.',
      description:
        'Vereins-App mit Team, Kalender und Live-Momenten — später unter next.rosstudio.ch.',
      details: {
        was: 'Organisation, Kommunikation, Performance für Vereine.',
        wie: 'Mobile + Desktop, Preview-Slot, iterativ.',
        wo: 'next.rosstudio.ch',
      },
    },
    {
      id: 'wiretrack',
      name: 'WireTrack',
      category: 'Plattform',
      image: '/showcase/wiretrack-dashboard.png',
      logo: '/marketing/wiretrack-logo.png',
      alt: 'WireTrack Dashboard',
      pitch: 'Operations-Dashboard für Projekte, Service und Zeit.',
      description: 'B2B-Plattform mit Widgets, Rechten und klarem Alltag.',
      details: {
        was: 'Projekte, Service, Zeiterfassung, Offerten.',
        wie: 'Modulares System, eigener Deploy.',
        wo: 'Produktiv / Preview',
      },
    },
    {
      id: 'lagerfotos',
      name: 'Lagerfotos',
      category: 'Verein',
      image: '/showcase/foto-lager-galerie.png',
      logo: null,
      alt: 'Lagerfotos Galerie',
      pitch: 'Foto-Galerie für Lager — Alben, Freigaben, Elternzugang.',
      description: 'Tausende Fotos sortieren und sicher teilen.',
      details: {
        was: 'Alben, Review, Zugänge.',
        wie: 'Mobile-first, schnell.',
        wo: 'Lager & Events',
      },
    },
    {
      id: 'rally',
      name: 'Rally Quest',
      category: 'Event',
      image: '/showcase/rally-roadtrip-lobby.png',
      logo: '/marketing/rally-logo.png',
      alt: 'Rally Quest Lobby',
      pitch: 'Live-Rallye mit Karte, Missionen und Rangliste.',
      description: 'Jede Location wird zur interaktiven Rallye.',
      details: {
        was: 'Missionen, Karte, Teams.',
        wie: 'Echtzeit, mobil.',
        wo: 'Vereins-Events',
      },
    },
    {
      id: 'punkte-arena',
      name: 'Punkte-Arena',
      category: 'Event',
      image: '/showcase/kristall-arena.png',
      logo: null,
      alt: 'Punkte-Arena Live',
      pitch: 'Punkte scannen, verbuchen, live zeigen.',
      description: 'Scoreboard und Abbuchungen für die Halle.',
      details: {
        was: 'Scan, Punkte, Rangliste.',
        wie: 'Bühne + Handy.',
        wo: 'Shows & Events',
      },
    },
    {
      id: 'halle',
      name: 'Halle Bestellung',
      category: 'Verein',
      image: null,
      logo: null,
      alt: 'Bestellsystem Halle',
      pitch: 'Pizza & Snacks bestellen — ohne Zettelchaos.',
      description: 'Schlankes Bestellsystem für den Event-Betrieb.',
      details: {
        was: 'Bestell-Flow für die Halle.',
        wie: 'Einfach, schnell live.',
        wo: 'Vereins-Hallen',
      },
    },
  ] as const,

  about: {
    eyebrow: 'Studio',
    title: 'Ein Typ. Eigener Server. Gute Laune am Code.',
    lede:
      'Ich heisse Silas — Freude am Coden und Schreiben. Zu Hause läuft die Infra, auf der Vereine und kleine Teams ihre Tools bekommen.',
    facts: ['Solo', 'Schweiz', 'Eigene Server', 'xy.rosstudio.ch'] as const,
  },

  contact: {
    sectionTitle: 'Schreib mir kurz.',
    lede: 'Idee und grober Rahmen reichen. Ich antworte persönlich.',
    cta: 'hi@roosstudio.ch',
    mailtoSubject: 'Anfrage — Roos Studio',
    facts: ['Antwort per Mail', 'Remote / CH', 'Direkter Draht'] as const,
  },

  footer: {
    tagline: 'Roos Studio — Software für Vereine, Events und Ideen.',
  },
} as const

export type Example = (typeof site.examples)[number]
export type HeroSlide = (typeof site.hero.slides)[number]
