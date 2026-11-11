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
    badge: 'Studio · Schweiz',
    headline: 'Apps für Vereine & Ideen — klar gebaut.',
    lede:
      'Schlanke Web-Tools, die am Eventabend funktionieren. Eigene Domain, eigener Server, direkter Draht.',
    primaryCta: { label: 'Beispiele ansehen', href: '#arbeit' },
    secondaryCta: { label: 'Schreiben', href: '#kontakt-email' },
    atmosphere: {
      src: '/showcase/nex-ecosystem-hero.jpg',
      alt: 'Nex Ökosystem Atmosphäre',
    },
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
      image: '/showcase/wiretrack-lifestyle.jpg',
      logo: '/marketing/wiretrack-logo.png',
      alt: 'WireTrack Feld & Werkstatt',
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
      id: 'nex-ecosystem',
      name: 'Nex Ökosystem',
      category: 'Hub',
      image: '/showcase/nex-ecosystem-tile.jpg',
      logo: '/marketing/nexplay-logo.png',
      alt: 'Nex Ökosystem Hub',
      pitch: 'Ein Hub für Vereine — Apps, die zusammenwachsen.',
      description:
        'NexPlay und die Event-Tools als gemeinsames Ökosystem: ein Einstieg, viele Module, eigene Domain.',
      details: {
        was: 'Vereins-Apps, Events, Live-Tools unter einem Dach.',
        wie: 'Modular, eigener Server, iterativ ausbaubar.',
        wo: 'next.rosstudio.ch',
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
