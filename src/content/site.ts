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
    badge: 'Roos Studio · Schweiz',
    headline: 'Software für Vereine, Events und Teams.',
    lede:
      'Klar gebaut, eigener Server, direkter Draht — ohne Agentur-Overhead.',
    primaryCta: { label: 'Beispiele ansehen', href: '#arbeit' },
    secondaryCta: { label: 'Schreiben', href: '#kontakt-email' },
    atmosphere: {
      src: '/showcase/atmosphere-clean.jpg',
      alt: '',
    },
  },

  work: {
    eyebrow: 'Ausgewählte Arbeiten',
    title: 'Gebaut. Live. Im Einsatz.',
    lede: 'Fünf Produkte — gleiche Werkstatt, klare Oberflächen.',
    openLabel: 'Öffnen',
  },

  examples: [
    {
      id: 'nexplay',
      name: 'NexPlay',
      category: 'Verein',
      image: '/marketing/nexplay.png',
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
      image: '/marketing/wiretrack.png',
      logo: '/marketing/wiretrack-logo.png',
      alt: 'WireTrack Enterprise Platform',
      pitch: 'Operations für Projekte, Service und Zeit.',
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
      image: '/marketing/lagerfotos.png',
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
      image: '/marketing/rally-quest.png',
      logo: '/marketing/rally-logo.png',
      alt: 'Rally Quest',
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
      image: '/marketing/punkte-arena.png',
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
  ] as const,

  about: {
    eyebrow: 'Studio',
    title: 'Solo. Eigener Server. Klarer Code.',
    lede:
      'Ich heisse Silas. Zu Hause läuft die Infra, auf der Vereine und kleine Teams ihre Tools bekommen — ohne Agentur-Overhead.',
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
