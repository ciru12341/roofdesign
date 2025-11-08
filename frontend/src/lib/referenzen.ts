//TODO change to sqlite in future
type Reference = {
  id: number
  name: string
  description: string
  shortDescription: string
  image?: string
  video?: string
  link?: string
}

const references: Record<string, Reference> = {
  project1: {
    id: 1,
    name: "Axel F.",
    description: '"Die finanzielle Belastung wollten wir uns in unserem Alter nicht mehr aufbürden. Allerdings war eine Sanierung alternativlos. Der angestrebte 1.1 Tausch der Pfannen erwies sich nach Rücksprache mit Roof Design als unzweckmäßig. Jetzt sanier ich mit meiner Frau gemeinsam unser Dach inklusive PV Anlage."',
    shortDescription: "Wir haben 50.000 Euro gespart, indem wir unser Dach selbst gedeckt haben.",
    video: "https://dach-selber-decken.de/wp-content/uploads/2025/08/Kundenstatement.mp4#t=0.1",
    link: ""
  },
  project2: {
    id: 2,
    name: "Matthias M.",
    description: '"Ich bin froh, dass ich auf Roof Design gestoßen bin. Durch den Fachkräftemangel hatte ich selbst nach einem halben Jahr keinen Dachdecker in Sicht."',
    shortDescription: "Trotz Fachkräftemangel konnte Roof Design das Projekt erfolgreich voranbringen.",
    image: "https://dach-selber-decken.de/wp-content/uploads/2024/01/IMG_20240107_1500062-768x576.jpg"

  },
  project3: {
    id: 3,
    name: "James K.",
    description: '"Ich habe nur meine Dachrinne mit der " Rinnen Masterclass" erneuert, da wir schon Gerüst zum verputzen stehen hatten. Es hat so gut funktioniert, dass ich die "Dachdecker Mastery" nach gebucht habe und mit Freunden mein Dach komplett erneuert habe."',
    shortDescription: "Vom kleinen Rinnenprojekt zum großen Dach - alles mit Unterstützung von Roof Design.",
    image: "https://dach-selber-decken.de/wp-content/uploads/2024/06/maxresdefault1-768x432.jpg"

  },
  project4: {
    id: 4,
    name: "Jürgen S.",
    description: '"Ohne die Hilfe von Roof Design, hätte mein Haus nach dem Abdecken der alten Pfannen ungeschützt gestanden, da mein Dachdecker nach den Vorarbeiten nicht mehr erschienen ist."',
    shortDescription: "Dank Roof Design blieb das Haus trotz ausgefallenem Dachdecker trocken.",
    image: "https://dach-selber-decken.de/wp-content/uploads/2023/12/IMG_20230708_094515-768x1024.jpg"
  },
};

export default references;