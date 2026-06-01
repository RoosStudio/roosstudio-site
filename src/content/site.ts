/**
 * Zentrale Inhalte — Roos Studio. Ton: klar, jung, motiviert.
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
    eyebrow: 'App-Studio · Schweiz',
    h1Line1: 'Roos Studio',
    h1Line2: 'Deine Idee. Unsere App.',
    lede:
      'Wir sind ein junges Team, das Apps baut — mit KI, Handwerk und dem Anspruch, dass du dein Produkt früh anfassen kannst.',
    primaryCta: { label: 'Idee besprechen', href: '#kontakt-email' },
    secondaryCta: { label: 'Produkte scrollen', href: '#beispiele' },
    flagshipId: 'wiretrack',
    flagshipHint: 'Vollbild öffnen',
  },

  services: {
    sectionEyebrow: 'Leistungen',
    sectionTitle: 'Wir bauen Apps — für dich, nicht nur für uns.',
    lede:
      'Eigene Produkte betreiben wir parallel. Für Kunden und Partner übersetzen wir Ideen in Software: von der ersten Version bis zum stabilen Launch.',
    items: [
      {
        title: 'App aus deiner Idee',
        line: 'Du bringst das Problem und die Vision — wir strukturieren, designen und entwickeln die passende Lösung.',
      },
      {
        title: 'Mit KI effizient umsetzen',
        line: 'KI beschleunigt Entwicklung, Prototypen und Iteration. Du profitierst von Tempo, ohne auf Qualität zu verzichten.',
      },
      {
        title: 'Testbar bis Launch',
        line: 'Eigene Test-URL, echte Flows, sauberer Deploy — damit du siehst, was kommt, bevor es öffentlich wird.',
      },
    ] as const,
  },

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
      details: {
        was: 'Operations-Plattform für Teams — Tickets, Projekte, Rollen und Widgets in einem Dashboard.',
        wie: 'Web-App mit modularem Widget-System, klaren Rechten und eigenem Test-Deploy.',
        wo: 'Intern produktiv & auf test.roosstudio.ch/wiretrack zum Anfassen.',
      },
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
      details: {
        was: 'Nächste Enterprise-Plattform — Content, Lobby, Scores und Live-Momente in einem System.',
        wie: 'Gleicher Qualitäts-Stack wie WireTrack: Preview-Slot, klare Module, iteratives Release.',
        wo: 'In Entwicklung — Preview-Slot auf test.roosstudio.ch/nexplay vorgesehen.',
      },
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
      details: {
        was: 'Event-Galerie mit Tagesalben — Fotos hochladen, sortieren und mobil durchsuchen.',
        wie: 'Mobile-first UI, schnelle Suche, klare Album-Struktur für Events mit vielen Bildern.',
        wo: 'Im Einsatz bei Events und Lagern — optimiert für Handy und Tablet.',
      },
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
      details: {
        was: 'Roadtrip- und Event-App mit Lobby, Team-Codes, Karte und Aufgaben.',
        wie: 'Echtzeit-Lobby, Aufgaben-Flows und Kartenansicht — gebaut für viele gleichzeitige Spieler.',
        wo: 'Für Gruppenfahrten und Events — mobil first, sofort verständlich.',
      },
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
      details: {
        was: 'Live-Scoreboard für Shows — Teams, Punkte und Rankings in Echtzeit.',
        wie: 'Grosse Typografie, klare Zustände, Ansichten für Bühne, Backstage und Publikum.',
        wo: 'Für Events und Bühnen — show-ready auf Grossleinwand und Handy.',
      },
    },
  ] as const,

  work: {
    sectionEyebrow: 'Produkte',
    sectionTitle: 'Apps, die für sich sprechen.',
    lede: 'Scroll durch unsere Werkstatt — jedes Produkt bekommt seinen Moment.',
  },

  approach: {
    sectionEyebrow: 'Vorgehen',
    sectionTitle: 'Schnell bauen. Sauber liefern.',
    lede:
      'Kein Konzern-Overhead — ein klares Setup, das wir für unsere Apps und dein Projekt gleichermassen fahren.',
    vibe: 'Junges Team · motiviert · direkt aus der Schweiz',
    test: {
      title: 'Stage',
      line: 'Eigene Preview-URL. Klicken, testen, Feedback — ohne die Live-Seite anzufassen.',
      url: 'test.roosstudio.ch',
    },
    deploy: {
      title: 'Build',
      line: 'Ein Skript, ein reproduzierbarer Weg — kein Deploy-Rätselraten.',
      command: './deploy.sh',
    },
    launch: {
      title: 'Launch',
      line: 'Freigabe wenn es passt. Dann stabil raus — nicht „hoffentlich geht’s“.',
      url: 'roosstudio.ch',
    },
    principles: [
      {
        step: '01',
        title: 'Verstehen',
        line: 'Was soll die App? Für wen? Was ist Version 1 — und was bewusst nicht?',
      },
      {
        step: '02',
        title: 'Bauen',
        line: 'KI + Handwerk: schnell iterieren, auf Stage testen, ehrliches Feedback einbauen.',
      },
      {
        step: '03',
        title: 'Ship it',
        line: 'Deploy, Check, Übergabe. Wiederholbar — damit Launch kein Einmal-Event ist.',
      },
    ] as const,
  },

  contact: {
    sectionEyebrow: 'Kontakt',
    sectionTitle: 'Lass uns deine App bauen.',
    lede:
      'Du hast eine Idee im Kopf? Schreib uns — wir sind ein kleines, motiviertes Team und melden uns persönlich zurück.',
    cta: 'Mail schreiben',
    mailtoSubject: 'App-Idee — Roos Studio',
    facts: ['Persönliche Antwort', 'Schweiz & Remote', 'Unverbindlich starten'] as const,
    highlight: 'Kein Formular. Kein Sales-Funnel. Einfach eine Mail — wir finden den Rest.',
    panel: {
      eyebrow: 'Startup-Modus',
      title: 'Drei Sätze reichen.',
      rows: [
        { label: 'Was', value: 'Was soll die App können?' },
        { label: 'Wer', value: 'Für wen ist sie gedacht?' },
        { label: 'Wann', value: 'Grob: ab wann soll etwas testbar sein?' },
      ] as const,
    },
  },

  footer: {
    tagline: 'Roos Studio — junges Team, klare Apps, Schweiz',
  },
} as const

export type Example = (typeof site.examples)[number]
