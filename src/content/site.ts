/**
 * Zentrale Inhalte — Roos Studio. Ton: Studio/Marke («Wir»), B2B-tauglich, klar & mit Biss.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#angebot', label: 'Live & Ops' },
      { href: '#proof', label: 'Screens' },
      { href: '#arbeit', label: 'Arbeitsweise' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Kontakt', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    eyebrow: 'Idee → Deploy · Schweiz',
    h1Line1: 'Von der Idee',
    h1Line2: 'zu Software zum Anfassen.',
    lede:
      'Klar, modern, hochwertig: Live-Apps, die vor Publikum bestehen — und WireTrack, wenn bei euch Operations zählt. Nicht nur schön im Deck, sondern klickbar im Alltag.',
    primaryCta: { label: 'Kontakt', href: '#kontakt-email' },
    secondaryCta: { label: 'Screens ansehen', href: '#proof' },
  },

  split: {
    sectionEyebrow: 'Zwei Geschwindigkeiten',
    sectionTitle: 'Eine Werkstatt — Spielraum für Events, Tiefgang für Operations.',
    fun: {
      kicker: 'Live & Experimente',
      title: 'Foto, Rally, Kristall',
      lede:
        'Verspielt im Auftritt, seriös im Code: Galerien, Roadtrip, Scoreboards — live, messbar, ohne Deko-UI.',
      products: [
        { name: 'Foto', note: 'Events & Galerie' },
        { name: 'Rally', note: 'Roadtrip & Tasks' },
        { name: 'Kristall', note: 'Live-Score' },
      ] as const,
    },
    enterprise: {
      kicker: 'Produkt',
      title: 'WireTrack',
      tagline: 'Operations-Plattform',
      lede:
        'Tickets, Rollen, Projekte, Anbindungen — ein System für Teams, die liefern müssen, nicht nur reporten.',
      pillars: [
        { t: 'Operations', b: 'Status und Arbeit ohne Tool-Sprawl.' },
        { t: 'Kontrolle', b: 'Rechte, Teams, nachvollziehbar.' },
        { t: 'Anschluss', b: 'APIs & Integration statt E-Mail-Grab.' },
      ] as const,
    },
  },

  proof: {
    sectionEyebrow: 'Nachweis',
    sectionTitle: 'Screens — nicht Storyboards.',
    lede: 'Echte Oberflächen in echten Einsätzen. Kein Mockup-Fake, kein Moodboard-Hochglanz.',
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
    title: 'Schnell bauen. Hart testen. Sauber betreiben.',
    intro:
      'Kein Theorie-Werk: Wir liefern so, dass eure Software in der Organisation übersteht — nicht nur am Launch-Tag glänzt.',
    principles: [
      {
        title: 'Schnell bauen',
        line: 'Erste Version, die sich anfühlt — bevor die Abstimmungsschleife ewig wird.',
      },
      {
        title: 'Klar testen',
        line: 'Use Cases, Randfälle, echtes Gerät — bevor’s die Gäste oder Teams treffen.',
      },
      {
        title: 'Stabil betreiben',
        line: 'Deploy, Wartung, Anbindung mitgedacht — nicht «mal live» und dann Funkstille.',
      },
    ] as const,
  },

  contact: {
    sectionTitle: 'Projekt im Kopf? Machen wir’s greifbar.',
    cta: 'E-Mail',
    mailtoSubject: 'Anfrage — Roos Studio',
  },

  footer: {
    tagline: 'Roos Studio · Schweiz · Idee wird Produkt',
  },
} as const

export type ProofItem = (typeof site.proof.items)[number]
