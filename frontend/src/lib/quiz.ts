type Option = { label: string };

const questions: { id: number; question: string; options: Option[]; multi?: boolean }[] = [
  {
    id: 1, question: "Wie alt bist du?", options: [
      { label: "18-30" },
      { label: "30-45" },
      { label: "46-60" },
    ]
  },
  {
    id: 2, question: "Welchen Beruf hast du erlernt?", options: [
      { label: "Zimmerer" },
      { label: "Dachdecker" },
      { label: "etwas anderes" },
    ]
  },
  {
    id: 3, question: "Machst du zu Hause handwerklich viel selbst?", options: [
      { label: "Ja" },
      { label: "Nein" },
      { label: "geht so, mittelmäßig" },
    ]
  },
  {
    id: 4, question: "Fühlst du dich körperlich fit, dein Dachprojekt selbst zu erschaffen?", options: [
      { label: "Ja" },
      { label: "Ich bin etwas eingeschränkt aber freunde helfen mir" },
    ]
  },
  {
    id: 5, question: "Nur noch 2 Fragen von deinem neuen Dach entfernt! Willst du weiter machen?", options: [
      { label: "Ja" },
      { label: "Nein Danke" },
    ]
  },
  {
    id: 6, question: "Bist du jemand der sich gerne sagen lässt: \"Das geht nicht?\" oder ein Machertyp? Was trifft eher auf dich zu?", options: [
      { label: "Geht nicht, gibts nicht!" },
      { label: "Ich lasse mich oft beinflussen" },
      { label: "Ich bin faul" },
    ]
  },
  {
    id: 7, question: "Was hat dich bisher davon abgehalten dein Dach selbst zu decken? (Es sind mehrere antworten möglich)", options: [
      { label: "Höhenangst" },
      { label: "Angst vorm Absturz" },
      { label: "Negativer Einfluss" },
      { label: "Angst, etwas falsch zu machen" },
      { label: "Nichts davon" },
    ], multi: true
  },
];

export { questions };