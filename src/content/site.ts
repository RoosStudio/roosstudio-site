/**
 * Zentrale Inhalte — Roos Studio. Ton: Studio/Marke («Wir»), B2B-tauglich, klar und präzise.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#reel', label: 'Reel' },
      { href: '#angebot', label: 'Angebot' },
      { href: '#proof', label: 'Arbeiten' },
      { href: '#arbeit', label: 'Prozess' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Kontakt', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    eyebrow: 'Software Studio aus der Schweiz',
    h1Line1: 'Roos Studio',
    h1Line2: 'macht Ideen produktreif.',
    lede:
      'Wir bauen Web-Apps, Live-Erlebnisse und Operations-Systeme, die schnell echt werden und im Alltag halten. Klar im Interface, sauber im Betrieb, greifbar ab dem ersten Klick.',
    primaryCta: { label: 'Projekt starten', href: '#kontakt-email' },
    secondaryCta: { label: 'Arbeiten ansehen', href: '#proof' },
    signals: [
      { value: 'Live', label: 'Event-Tools für Publikum und Teams' },
      { value: 'Ops', label: 'WireTrack für steuerbare Abläufe' },
      { value: 'CH', label: 'nah, direkt, produktorientiert' },
    ] as const,
  },

  split: {
    sectionEyebrow: 'Angebot',
    sectionTitle: 'Eine Werkstatt für schnelle Live-Produkte und belastbare Operations-Software.',
    fun: {
      kicker: 'Live Apps',
      title: 'Event-Software, die sofort verstanden wird.',
      lede:
        'Foto-Galerien, Rally-Lobbies, Ranglisten und Show-Momente: visuell stark, mobil klar und technisch robust genug für echte Einsätze.',
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
        'Tickets, Rollen, Projekte, Widgets und Anbindungen in einem System für Teams, die Arbeit steuern statt nur nachtragen.',
      pillars: [
        { t: 'Operations', b: 'Status, Aufgaben und Projekte bleiben sichtbar.' },
        { t: 'Kontrolle', b: 'Rollen, Rechte und Abläufe sind nachvollziehbar.' },
        { t: 'Anschluss', b: 'APIs und Integrationen sind von Anfang an mitgedacht.' },
      ] as const,
    },
  },

  proof: {
    sectionEyebrow: 'Arbeiten',
    sectionTitle: 'Echte Oberflächen statt Präsentationsnebel.',
    lede: 'Die Screens zeigen, was tatsächlich benutzt wird: klare Zustände, starke Momente und Interfaces, die unter Druck lesbar bleiben.',
    items: [
      {
        id: 'wiretrack',
        title: 'WireTrack',
        line: 'Dashboard und Widgets fürs tägliche Steuern.',
        image: '/showcase/wiretrack-dashboard.png',
        alt: 'WireTrack: Dashboard',
        variant: 'enterprise' as const,
      },
      {
        id: 'foto',
        title: 'Foto',
        line: 'Ereignis-Alben, mobil und schnell auffindbar.',
        image: '/showcase/foto-lager-galerie.png',
        alt: 'Foto-App: Galerie mit Tagesalben',
        variant: 'playful' as const,
      },
      {
        id: 'rally',
        title: 'Rally',
        line: 'Lobby, Codes und Aufgaben für Gruppenfahrten.',
        image: '/showcase/rally-roadtrip-lobby.png',
        alt: 'Rally: Karte und Lobby',
        variant: 'playful' as const,
      },
      {
        id: 'kristall',
        title: 'Kristall',
        line: 'Live-Standings für Bühne, Teams und Publikum.',
        image: '/showcase/kristall-arena.png',
        alt: 'Kristall Arena: Rangliste',
        variant: 'playful' as const,
      },
    ],
  },

  /** Scroll-Showreel (Trailer-Feeling): Bildbeats aus proof — oder optional MP4 per Scroll scrubben. */
  cinematic: {
    sectionId: 'reel',
    /** z.B. "/showreel.mp4" ins `public/`-Verzeichnis legen — dann Scroll steuert die Timeline. */
    videoSrc: null as string | null,
    /** Bildmodus: Scroll-Höhe pro Beat (vh) × Anzahl Screens */
    vhPerBeat: 115,
    /** Video-Modus: Gesamt-Scroll-Höhe (vh) zum Durchscrubben */
    videoScrollVh: 340,
  },

  work: {
    sectionEyebrow: 'Prozess',
    title: 'Schnell zur echten Version, sauber bis in den Betrieb.',
    intro:
      'Wir halten den Weg kurz: erst ein greifbarer Kern, dann die harten Details, dann ein Deployment, das nicht am Launch-Tag endet.',
    principles: [
      {
        title: 'Kern finden',
        line: 'Wir schneiden die Idee auf den Moment zu, in dem Nutzer sofort verstehen, warum es das Produkt gibt.',
      },
      {
        title: 'Echt testen',
        line: 'Wir prüfen Flows, Randfälle, Geräte und Belastung, bevor Publikum oder Teams darauf angewiesen sind.',
      },
      {
        title: 'Sauber betreiben',
        line: 'Hosting, Deployments, Wartung und Schnittstellen sind Teil der Lösung, nicht ein Nachsatz.',
      },
    ] as const,
  },

  contact: {
    sectionTitle: 'Aus einer Idee wird nur dann ein Produkt, wenn man sie anfassen kann.',
    lede: 'Schick die grobe Richtung. Wir sortieren gemeinsam, was zuerst gebaut werden muss und was warten kann.',
    cta: 'Projekt anfragen',
    mailtoSubject: 'Anfrage — Roos Studio',
    facts: ['Antwort direkt per E-Mail', 'Schweiz / Remote', 'Erste Richtung statt langer Briefings'] as const,
  },

  footer: {
    tagline: 'Roos Studio · Schweiz · Software zum Anfassen',
  },
} as const

export type ProofItem = (typeof site.proof.items)[number]
