type Option = { label: string, value: string };

const questions: { id: number; question: string; options: Option[]; multi?: boolean }[] = [
  {
    id: 1, question: "Wie alt bist du?", options: [
      { label: "18-30", value: "18-30" },
      { label: "30-45", value: "30-45" },
      { label: "46-60", value: "46-60" },
    ]
  },
  {
    id: 2, question: "Welchen Beruf hast du erlernt?", options: [
      { label: "Zimmerer", value: "zimmerer" },
      { label: "Dachdecker", value: "dachdecker" },
      { label: "etwas anderes", value: "other" },
    ]
  },
  {
    id: 3, question: "Machst du zu Hause handwerklich viel selbst?", options: [
      { label: "Ja", value: "ja" },
      { label: "Nein", value: "nein" },
      { label: "geht so, mittelmäßig", value: "mittel" },
    ]
  },
  {
    id: 4, question: "Fühlst du dich körperlich fit, dein Dachprojekt selbst zu erschaffen?", options: [
      { label: "Ja", value: "ja" },
      { label: "Ich bin etwas eingeschränkt aber freunde helfen mir", value: "eingeschraenkt" },
    ]
  },
  {
    id: 5, question: "Nur noch 2 Fragen von deinem neuen Dach entfernt! Willst du weiter machen?", options: [
      { label: "Ja", value: "ja" },
      { label: "Nein Danke", value: "nein" },
    ]
  },
  {
    id: 6, question: "Bist du jemand der sich gerne sagen lässt: \"Das geht nicht?\" oder ein Machertyp? Was trifft eher auf dich zu?", options: [
      { label: "Geht nicht, gibts nicht!", value: "macher" },
      { label: "Ich lasse mich oft beinflussen", value: "beeinflusst" },
      { label: "Ich bin faul", value: "faul" },
    ]
  },
  {
    id: 7, question: "Was hat dich bisher davon abgehalten dein Dach selbst zu decken? (Es sind mehrere antworten möglich)", options: [
      { label: "Höhenangst", value: "hoehenangst" },
      { label: "Angst vorm Absturz", value: "absturz" },
      { label: "Negativer Einfluss", value: "negativ" },
      { label: "Angst etwas falsch zu machen", value: "fehler" },
      { label: "Nichts davon", value: "nichts" },
    ], multi: true
  },
];

export { questions };