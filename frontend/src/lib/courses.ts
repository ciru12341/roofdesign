type Course = {
  title: string;
  description: string;
  imageUrl: string;
  link: string
  video?: string;
  features: string[];
  price: number;
  price_new?: number;
};

export type CourseModules = Record<string, string[]>;

const sellingPoints = [
  "<span className=\"text-red-500 \">Deinen persönlichen Ansprechpartner</span> - wir lassen keinen im Regen stehen!",
  "Exzellenter Support für bessere Ergebnisse",
  "Eine individuelle Schritt-für-Schritt-Anleitung für deinen Erfolg",
  "Deinen Fahrplan, damit du immer den nächsten Schritt kennst",
  "Eine für Laien umsetzbare Dacheinteilung",
  "Die maßgeschneiderte Materialliste, sodass alles am Start ist",
  "Auf dein Projekt abgestimmte Werkzeugliste, damit alles leichter geht",
  "4 Live-Calls mit mir oder einem anderen Profi - 4 Stunden für alle Fragen",
  "Profiwerkzeug, um deine Dachrinne optimal zu montieren (kostenlos per Post)",
  "Nur für kurze Zeit: Dein Plan, um dein Dach windsogsicher zu verklammern",
  "Keine versteckten Extrakosten (auch nicht für den Werkzeug-Rückversand)"
]

const courses = {
  dachdeckerMastery: {
    title: "Dachdecker Mastery",
    description:
      "Meistere die Kunst des Dachdeckens mit unserem umfassenden Kurs, der von den Grundlagen bis zu fortgeschrittenen Techniken alles abdeckt.",
    imageUrl: "/images/dmastery.png",
    link: "/dachdecker-mastery",
    video: "https://dach-selber-decken.de/wp-content/uploads/2024/07/Video-verkaufsseite-1.mov#t=0.1",
    features: [
      "Dein persönlicher Ansprechpartner und Bauleiter",
      "Support über WhatsApp, Anruf, Video-Call",
      "Ca. 8h Material",
      "9 Module",
      "62 einfach verständliche Lektionen",
      "Uneingeschränkter lebenslanger Zugriff",
      "Exklusive Urkunde",
      "Zugriff auf Handy/Tablet oder TV",
      "Passwortgeschützte Software",
      "Als Werbungskosten steuerlich absetzbar!"
    ],
    price: 1199,
    price_new: 997
  },

  rinnenMasterclass: {
    title: "Rinnen Masterclass",
    description:
      "Lerne alles über die Installation und Wartung von Dachrinnen, um dein Dach optimal zu schützen und zu pflegen.",
    imageUrl: "/images/rinnenfront.png",
    link: "/rinnen-masterclass",
    features: [
      "Zugriff zu den Videokursen",
      "Ca. 2h Material",
      "5 Module",
      "18 einfach verständliche Lektionen",
      "Uneingeschränkter lebenslanger Zugriff",
      "Abrufbar auf Handy, Tablet oder TV",
      "Passwortgeschützte Software",
      "Profiwerkzeug kostenlos zu dir nach Hause",
      "Zuteilung deines Bauleiters",
      "Support über WhatsApp, Anruf, Video-Call",
      "Als Werbungskosten steuerlich absetzbar!"
    ],
    price: 465,
    price_new: 310
  },
  dacheinteilung: {
    title: "Dacheinteilung leicht gemacht",
    description:
      "Verstehe die Prinzipien der Dacheinteilung und lerne, wie du dein Dach effizient und sicher planen kannst.",
    imageUrl: "",
    link: "/dacheinteilung",
    features:
      [
        "Dein persönlicher Ansprechpartner und Bauleiter",
        "Zugriff auf den Videokurs",
        "Support über WhatsApp, Anruf, Video-Call",
        "Ca. 1h Material",
        "5 einfach verständliche Lektionen",
        "Uneingeschränkter lebenslanger Zugriff",
        "Zugriff auf Handy, Tablet oder TV",
        "Passwortgeschützte Software",
        "Als Werbungskosten steuerlich absetzbar!"
      ],
    price: 470,
    price_new: 310

  }

} satisfies Record<string, Course>;

const dachdeckerMasteryModules: CourseModules = {
  "Einarbeitung": [
    "Zugriff zum Mitgliederbereich",
    "Erstgespräch mit deinem Projektleiter",
    "Besprechung der Materialliste",
    "Einweisung in den Ablaufplan"
  ],

  "Modul 1 - Erste Schritte": [
    "Der Schlagtacker",
    "Unterspannbahn abrollen",
    "Unterschiede Unterspannbahn",
    "Latten anstellen",
    "Traufbohle richtig herum?",
    "Materialkontrolle",
    "Mythos Lattendichtband",
    "Empfehlung Stichsäge",
    "Wie kommt der Nagel ins Holz?"
  ],

  "Modul 2 - Folie und Konterlatten": [
    "erste Reihe Unterspannbahn",
    "Traufbohle montieren",
    "Zweite Reihe Unterspannbahn",
    "letzte Reihe Unterspannbahn",
    "Folie an Ortgang abschneiden",
    "Konterlatten aus nageln"
  ],

  "Modul 3 - Dacheinteilung": [
    "Einteilung messen",
    "Einteilung übertragen",
    "Traglattung schnüren",
    "Pfanneneinteilung übertragen",
    "Pfanneneinteilung schnüren"
  ],

  "Modul 4 - Traglattung": [
    "Traglatten schnüren",
    "Traglatten montieren",
    "Traglattung ergänzen",
    "Lattung kürzen",
    "Überstände kürzen"
  ],

  "Modul 5 - Traufbohle": [
    "Wie richtig herum?",
    "Traufbohle montieren",
    "Traufe Lüftungsband",
    "Traufbohle verschrauben"
  ],

  "Modul 6 - Rinnen Masterclass": [
    "Erste Schritte",
    "Werkzeuge",
    "Ist der Kolben heiß genug?",
    "Lötzinn verbinden",
    "Kopfstücke löten",
    "Lötnahtkontrolle",
    "0 und Gefälleeisen anzeichnen",
    "0 und Gefälleeisen setzen",
    "0 und Gefälleeisen ausrichten",
    "Rinnenhalter anzeichnen",
    "Rinnenhalter abbiegen",
    "Rinnenhalter montieren",
    "Pfanneneinteilung übertragen",
    "Rinne einlegen",
    "Rinne löten",
    "Einhang und Traufblech montieren",
    "Ablauf in Rinne brennen"
  ],

  "Modul 7 - Firststeine": [
    "erste Firstlatte",
    "Firstlatten höhe ermitteln",
    "Firstlatte auf doppeln",
    "Firstband montieren",
    "Firstpfannen legen"
  ],

  "Modul 8 - Eindeckung": [
    "Wie öffne ich die Pakete richtig",
    "die letzte Pfanne im Paket",
    "Pfannen auf dem Dach lagern",
    "Ortgang-Links",
    "Ortgang recht",
    "Dachfläche zu legen",
    "Der schmale Gang runter",
    "Letzter Tipp vor dem Abstieg"
  ],

  "Modul 9 - Fallrohr": [
    "Erste Schritte",
    "Das Stück zwischen den Bögen",
    "Fallrohr montieren",
    "Das letzte Stück",
    "Fertig montiert"
  ]
}

const rinnenMasterclassModules: CourseModules = {
  "Onboarding": [
    "Zugriff zum Mitgliederbereich",
    "Erstgespräch mit deinem Projektleiter",
    "Besprechung der Materialliste",
    "Einweisung in den Ablaufplan"
  ],

  "Modul 1 - Werkzeug": [
    "Erklärung Werkzeuge",
    "Erste Schritte",
    "Ist der Kolben heiß genug?",
    "Lötzinn verbinden"
  ],

  "Modul 2 - Kopfstücke": [
    "Kopfstücke löten",
    "Lötnahtkontrolle"
  ],

  "Modul 3 - Rinnenhalter montieren": [
    "0 und Gefälleeisen anzeichnen",
    "0 und Gefälleeisen montieren",
    "Rinnenhalter ausrichten",
    "Rinnenhalter anzeichnen",
    "Rinnenhalter abbiegen",
    "Rinnenhalter montieren"
  ],

  "Modul 4 - Einteilung übertragen": [
    "Pfanneneinteilung übertragen",
    "Rinne einlegen",
    "Rinne löten",
    "Dachlatten anstellen"
  ],

  "Modul 5 - Traufbohle": [
    "Einhang, Traufblech montieren",
    "Ablauf in rinne brennen"
  ]
}




export { courses, sellingPoints, dachdeckerMasteryModules, rinnenMasterclassModules };