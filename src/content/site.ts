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
      { href: '#beispiele', label: 'Produkte' },
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
    secondaryCta: { label: 'Produkte entdecken', href: '#beispiele' },
    flagshipId: 'wiretrack',
    flagshipHint: 'Klicken zum Vergrössern',
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
      pitch: 'Alles Steuern — Dashboard, Tickets, Rollen und Projekte in einer Oberfläche.',
      description:
        'WireTrack zeigt, wie wir komplexe B2B-Software klar halten: Widgets, Rechte und Abläufe, die im Alltag funktionieren.',
    },
    {
      id: 'nexplay',
      name: 'NexPlay',
      category: 'Plattform',
      image: '/marketing/nexplay.png',
      logo: '/marketing/nexplay-logo.png',
      alt: 'NexPlay: Plattform-Übersicht',
      tagline: 'Die nächste Plattform.',
      pitch: 'Skalierbare Plattform-Architektur — gebaut für Wachstum und klare Releases.',
      description:
        'NexPlay steht für unseren Anspruch an grössere Produkte: strukturiert entwickeln, früh testen, sauber ausrollen.',
    },
    {
      id: 'lagerfotos',
      name: 'Lagerfotos',
      category: 'Event',
      image: '/marketing/lagerfotos.png',
      logo: null,
      alt: 'Lagerfotos: Event-Galerie',
      tagline: 'Event-Galerie.',
      pitch: 'Tausende Fotos, sofort gefunden — mobil und klar strukturiert.',
      description:
        'Lagerfotos ist unsere Referenz für Erlebnis-Apps: schnell, visuell stark und unter Last stabil.',
    },
    {
      id: 'rally',
      name: 'Rally Quest',
      category: 'Event',
      image: '/marketing/rally-quest.png',
      logo: '/marketing/rally-logo.png',
      alt: 'Rally Quest: Roadtrip-Lobby',
      tagline: 'Roadtrip-App.',
      pitch: 'Lobby, Karte und Aufgaben — Gruppenfahrten mit echtem Spielgefühl.',
      description:
        'Rally Quest verbindet Karte, Team-Logik und Aufgaben zu einer App, die bei Events sofort verstanden wird.',
    },
    {
      id: 'punkte-arena',
      name: 'Punkte-Arena',
      category: 'Event',
      image: '/marketing/punkte-arena.png',
      logo: null,
      alt: 'Punkte-Arena: Live-Rangliste',
      tagline: 'Show-Scores.',
      pitch: 'Ranglisten und Team-Stände — lesbar aus zehn Metern Entfernung.',
      description:
        'Punkte-Arena ist für den Bühnenmoment gebaut: klare Typo, starke Kontraste, null Ablenkung.',
    },
  ] as const,

  work: {
    sectionEyebrow: 'Produkte',
    sectionTitle: 'Apps, die für sich sprechen.',
    lede: 'Scroll — jedes Produkt bekommt seinen Moment. Bilder vollständig, Zoom beim Scrollen.',
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
    launch: {
      title: 'Launch',
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
        title: 'Launch',
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
