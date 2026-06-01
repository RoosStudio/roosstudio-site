/**
 * Zentrale Inhalte — Roos Studio. Ton: klar, einladend, produktnah.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#leistungen', label: 'Leistungen' },
      { href: '#beispiele', label: 'Beispiele' },
      { href: '#vorgehen', label: 'Vorgehen' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Kontakt', long: 'Idee melden', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    eyebrow: 'App-Entwicklung · Schweiz',
    h1Line1: 'Roos Studio',
    h1Line2: 'Deine Idee. Unsere App.',
    lede:
      'Du hast eine Idee für eine Web-App oder Plattform? Wir entwickeln sie mit dir — modern, mit KI im Werkzeugkasten und so, dass du sie früh testen kannst, bevor sie live geht.',
    primaryCta: { label: 'Idee besprechen', href: '#kontakt-email' },
    secondaryCta: { label: 'Beispiele ansehen', href: '#beispiele' },
    signals: [
      { value: 'KI', label: 'schnell bauen & iterieren' },
      { value: 'Test-first', label: 'Preview vor Live' },
      { value: 'CH', label: 'direkt & persönlich' },
    ] as const,
  },

  services: {
    sectionEyebrow: 'Leistungen',
    sectionTitle: 'Wir bauen Apps — für dich, nicht nur für uns.',
    lede:
      'Eigene Produkte betreiben wir parallel. Für Kunden und Partner übersetzen wir Ideen in Software: von der ersten Version bis zum stabilen Livebetrieb.',
    items: [
      {
        title: 'App aus deiner Idee',
        line: 'Du bringst das Problem und die Vision — wir strukturieren, designen und entwickeln die passende Lösung.',
      },
      {
        title: 'Mit KI effizient umsetzen',
        line: 'KI beschleunigt Entwicklung, Prototypen und Iteration. Du profitierst von Tempo, ohne auf Qualität und Klarheit zu verzichten.',
      },
      {
        title: 'Testbar bis Live',
        line: 'Eigene Test-URL, echte Flows, sauberer Deploy — damit du siehst, was kommt, bevor es öffentlich wird.',
      },
    ] as const,
  },

  /** Auszug aus eigener Werkstatt — als Referenz, nicht als festes Sortiment. */
  examples: [
    {
      id: 'wiretrack',
      name: 'WireTrack',
      category: 'Plattform',
      image: '/marketing/wiretrack.png',
      logo: '/marketing/wiretrack-logo.png',
      alt: 'WireTrack: Operations-Dashboard',
      tagline: 'Operations-Dashboard für Teams.',
      description: 'Tickets, Rollen, Projekte und Widgets — ein Beispiel für B2B-Software mit klarem Alltags-Fokus.',
    },
    {
      id: 'nexplay',
      name: 'NexPlay',
      category: 'Plattform',
      image: '/marketing/nexplay.png',
      logo: '/marketing/nexplay-logo.png',
      alt: 'NexPlay: Plattform-Übersicht',
      tagline: 'Nächste Plattform in Arbeit.',
      description: 'Zeigt, wie wir grössere Produkte Schritt für Schritt aufbauen — inklusive Preview und Deploy-Weg.',
    },
    {
      id: 'lagerfotos',
      name: 'Lagerfotos',
      category: 'Event',
      image: '/marketing/lagerfotos.png',
      logo: null,
      alt: 'Lagerfotos: Event-Galerie',
      tagline: 'Galerie für Events und Lager.',
      description: 'Mobile Oberfläche, Tagesalben, schnelle Suche — typisch für Erlebnis-Apps mit vielen Nutzenden.',
    },
    {
      id: 'rally',
      name: 'Rally Quest',
      category: 'Event',
      image: '/marketing/rally-quest.png',
      logo: '/marketing/rally-logo.png',
      alt: 'Rally Quest: Roadtrip-Lobby',
      tagline: 'Roadtrip mit Lobby und Tasks.',
      description: 'Lobby, Codes, Karte und Aufgaben — interaktiv und für Gruppen gebaut.',
    },
    {
      id: 'punkte-arena',
      name: 'Punkte-Arena',
      category: 'Event',
      image: '/marketing/punkte-arena.png',
      logo: null,
      alt: 'Punkte-Arena: Live-Rangliste',
      tagline: 'Live-Scores für Shows.',
      description: 'Ranglisten und Team-Ansichten für den Moment, wenn es auf der Bühne zählt.',
    },
  ] as const,

  work: {
    sectionEyebrow: 'Beispiele',
    sectionTitle: 'So sieht unsere Arbeit aus.',
    lede:
      'Ein Auszug aus Projekten, die wir selbst betreiben oder gebaut haben — als Referenz für Stil, Qualität und Umfang. Dein Projekt kann ganz anders aussehen.',
    footnote:
      'Du planst etwas Neues? Schreib uns kurz, was die App können soll — wir melden uns mit einem klaren nächsten Schritt.',
  },

  approach: {
    sectionEyebrow: 'Vorgehen',
    sectionTitle: 'Von der Idee zur App, die trägt.',
    lede:
      'Egal ob dein Projekt oder unseres: derselbe Weg — verstehen, bauen, testen, live schalten.',
    test: {
      title: 'Testen',
      line: 'Eigene Preview-URL — du klickst durch echte Flows, ohne die Live-Seite anzufassen.',
      url: 'test.roosstudio.ch',
    },
    deploy: {
      title: 'Deploy',
      line: 'Reproduzierbarer Build und klarer Live-Pfad.',
      command: './deploy.sh',
    },
    live: {
      title: 'Live',
      line: 'Freigabe, wenn es passt — dann stabil ausliefern.',
      url: 'roosstudio.ch',
    },
    principles: [
      {
        step: '01',
        title: 'Idee klären',
        line: 'Was soll die App können, für wen, und was ist Version eins?',
      },
      {
        step: '02',
        title: 'Bauen & testen',
        line: 'Schnelle Iteration mit KI und Handwerk — auf Stage mit realistischen Daten.',
      },
      {
        step: '03',
        title: 'Live gehen',
        line: 'Deploy, Check, Übergabe — wiederholbar und nachvollziehbar.',
      },
    ] as const,
  },

  contact: {
    sectionTitle: 'Du hast eine Idee?',
    lede:
      'Erzähl uns in ein paar Sätzen, was du vorhast. Wir antworten per E-Mail — ohne Formular, ohne Umwege.',
    cta: 'Idee per E-Mail senden',
    mailtoSubject: 'App-Idee — Roos Studio',
    facts: ['Antwort per E-Mail', 'Schweiz / Remote', 'Unverbindlich starten'] as const,
    panel: {
      eyebrow: 'Reicht schon',
      title: 'Kurz reicht für den ersten Schritt.',
      rows: [
        { label: 'Idee', value: 'Was soll die App können?' },
        { label: 'Für wen', value: 'Team, Kunden, Event, …?' },
        { label: 'Timing', value: 'Grob: wann soll etwas testbar sein?' },
      ] as const,
    },
  },

  footer: {
    tagline: 'Roos Studio — Apps bauen mit Idee, KI und Anspruch',
  },
} as const

export type Example = (typeof site.examples)[number]
