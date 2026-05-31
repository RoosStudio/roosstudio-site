/**
 * Zentrale Inhalte - Roos Studio. Ton: direkt, hochwertig, produktnah.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#tests', label: 'Tests' },
      { href: '#angebot', label: 'Angebot' },
      { href: '#ablauf', label: 'Ablauf' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Kontakt', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    eyebrow: 'Software Studio aus der Schweiz',
    h1Line1: 'Roos Studio',
    h1Line2: 'macht Ideen produktreif.',
    lede:
      'Wir bauen Web-Apps, Live-Erlebnisse und Operations-Systeme, die schnell testbar werden und im Alltag halten. Erst eine echte Testumgebung, dann sauber live.',
    primaryCta: { label: 'Projekt starten', href: '#kontakt-email' },
    secondaryCta: { label: 'Testumgebungen', href: '#tests' },
    signals: [
      { value: 'Tests', label: 'WireTrack und NexPlay getrennt vom Livebetrieb' },
      { value: 'Ops', label: 'Deployments, Rollen und Betrieb von Anfang an mitgedacht' },
      { value: 'CH', label: 'direkt, pragmatisch, produktorientiert' },
    ] as const,
  },

  testlab: {
    sectionEyebrow: 'Testumgebungen',
    sectionTitle: 'Besser erst anfassen, dann live schalten.',
    lede:
      'Ja, das macht Sinn: jede App bekommt eine eigene Test-URL. WireTrack kann dort geprüft werden, NexPlay bekommt denselben Weg, sobald die erste Version steht.',
    environments: [
      {
        id: 'wiretrack',
        name: 'WireTrack',
        kicker: 'Operations-App',
        status: 'Test bereit',
        urlLabel: 'test.roosstudio.ch/wiretrack',
        title: 'Ein sauberer Spielraum für echte Abläufe.',
        description:
          'Dashboard, Rollen, Projekte und Widgets werden auf einer getrennten URL geprüft, bevor etwas auf die Live-Umgebung geht.',
        image: '/showcase/wiretrack-dashboard.png',
        alt: 'WireTrack Test-Dashboard',
        bullets: ['eigene Testdaten', 'Rollen und Rechte prüfen', 'Deployment vor Livegang'],
      },
      {
        id: 'nexplay',
        name: 'NexPlay',
        kicker: 'Nächste App',
        status: 'Slot geplant',
        urlLabel: 'test.roosstudio.ch/nexplay',
        title: 'Der nächste Testlink ist schon im System gedacht.',
        description:
          'Sobald NexPlay als erste Version steht, läuft es ebenfalls als Preview: testen, Feedback sammeln, erst danach live ziehen.',
        image: null,
        alt: '',
        bullets: ['Preview-Link', 'Feedback-Runden', 'Live-Freigabe erst danach'],
      },
    ] as const,
    rules: [
      { label: 'Getrennte URLs', value: 'Tests bleiben weg von der Live-Seite' },
      { label: 'Ein Deploy', value: './deploy.sh baut und veröffentlicht' },
      { label: 'Klare Freigabe', value: 'Preview wird erst nach Check live' },
    ] as const,
  },

  split: {
    sectionEyebrow: 'Angebot',
    sectionTitle: 'Apps, die nicht nur gut aussehen, sondern in echten Situationen tragen.',
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
    sectionEyebrow: 'Screens',
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

  work: {
    sectionEyebrow: 'Ablauf',
    title: 'Von Testlink zu Livebetrieb, ohne Theater.',
    intro:
      'Der Ablauf wird greifbar: erst eine testbare Version auf dem Server, dann Feedback aus echten Flows, dann ein Deployment, das du wiederholen kannst.',
    principles: [
      {
        title: 'Testumgebung aufsetzen',
        line: 'WireTrack und später NexPlay laufen auf eigenen Test-URLs. So kann man klicken, prüfen und entscheiden, ohne die Live-Seite anzufassen.',
      },
      {
        title: 'Echt prüfen',
        line: 'Wir testen Rollen, Geräte, Inhalte, Randfälle und Belastung mit realistischen Daten statt mit hübschen Folien.',
      },
      {
        title: 'Live ziehen',
        line: 'Wenn alles passt, baut das Deploy-Skript die neue Version und legt sie dort ab, wo nginx sie wirklich ausliefert.',
      },
    ] as const,
    lanes: [
      { label: 'Stage', value: 'test.roosstudio.ch' },
      { label: 'Deploy', value: './deploy.sh' },
      { label: 'Live', value: 'roosstudio.ch' },
    ] as const,
  },

  contact: {
    sectionTitle: 'Lass uns den ersten Testlink sauber machen.',
    lede:
      'Schick die grobe Richtung. Wir sortieren, welche App zuerst auf eine Test-URL gehört und was für den Livebetrieb wirklich nötig ist.',
    cta: 'Testlink anfragen',
    mailtoSubject: 'Anfrage - Testumgebung / Roos Studio',
    facts: ['Antwort direkt per E-Mail', 'Schweiz / Remote', 'Test zuerst, live danach'] as const,
    panel: {
      eyebrow: 'Nächster Schritt',
      title: 'Kurzer Check, dann Test-URL.',
      rows: [
        { label: '1', value: 'Welche App?' },
        { label: '2', value: 'Welche URL?' },
        { label: '3', value: 'Was muss getestet werden?' },
      ] as const,
    },
  },

  footer: {
    tagline: 'Roos Studio - Schweiz - Software zum Anfassen',
  },
} as const

export type ProofItem = (typeof site.proof.items)[number]
export type TestEnvironment = (typeof site.testlab.environments)[number]
