/**
 * Zentrale Inhalte — Roos Studio. Ton: Studio/Marke («Wir»), B2B-tauglich, ohne Buzzwords.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#angebot', label: 'Zwei Linien' },
      { href: '#proof', label: 'Projekte' },
      { href: '#arbeit', label: 'Arbeitsweise' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Kontakt', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    eyebrow: 'Schweiz · Software-Studio',
    h1Line1: 'Echte Software.',
    h1Line2: 'Von Event-Apps bis Operations.',
    lede:
      'Live-Apps, die wirklich laufen. WireTrack, wenn eure Organisation es braucht — nicht nur Präsentation, sondern Betrieb.',
    primaryCta: { label: 'Kontakt', href: '#kontakt-email' },
    secondaryCta: { label: 'Projekte ansehen', href: '#proof' },
  },

  split: {
    sectionEyebrow: 'Position',
    sectionTitle: 'Eine Werkstatt, zwei Schwerpunkte.',
    fun: {
      kicker: 'Experimente & Live-Apps',
      title: 'Foto, Rally, Kristall',
      lede:
        'Hochwertig umgesetzt, live im Einsatz: Galerien, Roadtrip, Scoreboards — sichtbar, nicht Deko.',
      products: [
        { name: 'Foto', note: 'Events & Gallerie' },
        { name: 'Rally', note: 'Roadtrip & Tasks' },
        { name: 'Kristall', note: 'Live-Score' },
      ] as const,
    },
    enterprise: {
      kicker: 'Produkt',
      title: 'WireTrack',
      tagline: 'Operations-Plattform',
      lede: 'Projekte, Rollen, Tickets, Anbindungen — ein System für Teams, die liefern müssen.',
      pillars: [
        { t: 'Operations', b: 'Projekte und Status ohne Tool-Sprawl.' },
        { t: 'Kontrolle', b: 'Rechte, Teams, nachvollziehbar.' },
        { t: 'Anschluss', b: 'Schnittstellen statt E-Mail-Grab.' },
      ] as const,
    },
  },

  proof: {
    sectionEyebrow: 'Produkte',
    sectionTitle: 'Gebaut. Genutzt. Messbar.',
    lede: 'Echte Oberflächen, echte Einsätze — kein konzipiertes Mockup.',
    items: [
      {
        id: 'foto',
        title: 'Foto',
        line: 'Ereignis-Alben, klar und mobil.',
        image: '/showcase/foto-lager-galerie.png',
        alt: 'Foto-App: Galerie mit Tagesalben',
        variant: 'playful' as const,
      },
      {
        id: 'rally',
        title: 'Rally',
        line: 'Karte und Tasks für die Fahrt, ohne Excel-Wahnsinn.',
        image: '/showcase/rally-roadtrip-lobby.png',
        alt: 'Rally: Karte und Lobby',
        variant: 'playful' as const,
      },
      {
        id: 'kristall',
        title: 'Kristall',
        line: 'Live-Standings, schnell gelesen.',
        image: '/showcase/kristall-arena.png',
        alt: 'Kristall Arena: Rangliste',
        variant: 'playful' as const,
      },
      {
        id: 'wiretrack',
        title: 'WireTrack',
        line: 'Dashboard und Widgets fürs tägliche Steuern.',
        image: '/showcase/wiretrack-dashboard.png',
        alt: 'WireTrack: Dashboard',
        variant: 'enterprise' as const,
      },
    ],
  },

  work: {
    sectionEyebrow: 'Arbeitsweise',
    title: 'Schnell, klar, betriebsfest.',
    intro: 'Kein Theorie-Werk. Wir arbeiten so, dass Software in eurer Organisation bestehen kann.',
    principles: [
      { title: 'Schnell bauen', line: 'Erste funktionierende Version vor der endlosen Abstimmungsschleife.' },
      { title: 'Klar testen', line: 'Use Cases, Randfälle, Echtgerät — bevor’s die Nutzer treffen.' },
      { title: 'Stabil betreiben', line: 'Wartung und Anbindung mitgedacht, nicht «mal live schalten».' },
    ] as const,
  },

  contact: {
    sectionTitle: 'Projekt im Kopf? Schreibt uns.',
    cta: 'E-Mail',
    mailtoSubject: 'Anfrage — Roos Studio',
  },

  footer: {
    tagline: 'Software-Studio. Schweiz. Kreativ gebaut, seriös betrieben.',
  },
} as const

export type ProofItem = (typeof site.proof.items)[number]
