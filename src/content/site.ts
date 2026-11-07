/**
 * Roos Studio — jung, direkt, bezahlbar.
 */
export const site = {
  meta: {
    siteName: 'Roos Studio',
    email: 'hi@roosstudio.ch',
  },

  header: {
    nav: [
      { href: '#preise', label: 'Preise' },
      { href: '#features', label: 'Features' },
      { href: '#arbeit', label: 'Beispiele' },
      { href: '#kontakt', label: 'Kontakt' },
    ] as const,
    cta: { short: 'Los', long: 'Loslegen', aria: 'Zum Kontakt scrollen' },
  },

  hero: {
    brand: 'Roos Studio',
    headline: 'Apps für Vereine & Ideen — ohne Agentur-Rechnung.',
    lede:
      'Ich baue dir schlanke Web-Tools, die am Eventabend funktionieren. Eigene Domain, eigener Server, Preis den man zahlen kann.',
    primaryCta: { label: 'Preise ansehen', href: '#preise' },
    secondaryCta: { label: 'Beispiele', href: '#arbeit' },
    image: '/marketing/nexplay.png',
    imageAlt: 'NexPlay Vereins-App auf Desktop und Smartphone',
  },

  pricing: {
    eyebrow: 'Preise',
    title: 'Klar. Fair. Kein Theater.',
    lede: 'Einmal bauen, optional hosten unter xy.rosstudio.ch. Du zahlst für Ergebnis — nicht für Folien.',
    note: 'Alle Preise in CHF, zzgl. MwSt. wo nötig. Fixpreis nach kurzem Kickoff.',
    plans: [
      {
        id: 'spark',
        name: 'Spark',
        price: '290',
        period: 'ab',
        tag: 'Klein & schnell',
        pitch: 'Landing, Bestellformular, einfache Event-Seite.',
        points: ['1–2 Screens', 'Handy-first', 'Live in wenigen Tagen', 'Subdomain möglich'],
        cta: 'Spark anfragen',
        featured: false,
      },
      {
        id: 'build',
        name: 'Build',
        price: '890',
        period: 'ab',
        tag: 'Am meisten gebucht',
        pitch: 'Vereins- oder Event-Tool mit Login, Listen, Live-Daten.',
        points: [
          'Mehrere Views',
          'Admin + Nutzer',
          'Preview-URL zum Testen',
          'Hosting-Option',
        ],
        cta: 'Build anfragen',
        featured: true,
      },
      {
        id: 'own',
        name: 'Own',
        price: '1’890',
        period: 'ab',
        tag: 'Custom',
        pitch: 'Eigene Plattform — Dashboard, Rollen, Module.',
        points: ['Massgeschneidert', 'Eigene Domain', 'Deploy-Pipeline', 'Weiterentwicklung'],
        cta: 'Own anfragen',
        featured: false,
      },
    ] as const,
    hosting: {
      title: 'Hosting dazu?',
      line: 'xy.rosstudio.ch auf meiner Infra — ab CHF 19 / Monat inkl. HTTPS & Backups-Basics.',
    },
  },

  features: {
    eyebrow: 'Features',
    title: 'Was du wirklich brauchst.',
    lede: 'Kein Feature-Friedhof. Nur Dinge, die Vereine und Events nachts um elf retten.',
    items: [
      {
        title: 'Live in der Halle',
        line: 'Bestellungen, Punkte, Galerien, Rallyes — gebaut für Stress, nicht für Demos.',
        image: '/marketing/punkte-arena.png',
      },
      {
        title: 'Deine Domain',
        line: 'pizza.rosstudio.ch oder eigene .ch — klar, teilbar, ohne WordPress-Chaos.',
        image: '/marketing/lagerfotos.png',
      },
      {
        title: 'Früh testbar',
        line: 'Preview auf test.rosstudio.ch, bevor irgendwas live geht. Du klickst, du entscheidest.',
        image: '/marketing/rally-quest.png',
      },
      {
        title: 'Solo = direkt',
        line: 'Du schreibst mir. Ich baue. Keine Account-Manager, keine 12-Personen-Calls.',
        image: '/marketing/wiretrack.png',
      },
    ] as const,
  },

  work: {
    eyebrow: 'Beispiele',
    title: 'Schon gebaut. Schon gelaufen.',
    lede: 'Screens aus der Werkstatt — klick rein.',
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
      alt: 'Rally Quest Live',
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
    eyebrow: 'Über mich',
    title: 'Ein Typ. Eigener Server. Gute Laune am Code.',
    lede:
      'Ich heisse Silas — Freude am Coden und Schreiben. Zu Hause läuft die Infra, auf der Vereine und kleine Teams ihre Tools bekommen. Kein Grossbudget nötig.',
    facts: ['Solo', 'Schweiz', 'Eigene Server', 'xy.rosstudio.ch'] as const,
  },

  contact: {
    sectionTitle: 'Schreib mir kurz.',
    lede: 'Idee, Budget-Rahmen, Termin — reicht. Ich antworte persönlich.',
    cta: 'hi@roosstudio.ch',
    mailtoSubject: 'Anfrage — Roos Studio',
    facts: ['Antwort per Mail', 'Fixpreis nach Kickoff', 'Remote / CH'] as const,
  },

  footer: {
    tagline: 'Roos Studio — junge Software, bezahlbare Preise, echte Events.',
  },
} as const

export type Example = (typeof site.examples)[number]
export type Plan = (typeof site.pricing.plans)[number]
