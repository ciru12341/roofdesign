type Course = {
  title: string;
  description: string;
  imageUrl: string;
  link: string
  video?: string;
};

const courses: Record<string, Course> = {
  dachdeckerMastery: {
    title: "Dachdecker Mastery",
    description:
      "Meistere die Kunst des Dachdeckens mit unserem umfassenden Kurs, der von den Grundlagen bis zu fortgeschrittenen Techniken alles abdeckt.",
    imageUrl: "/images/dmastery.png",
    link: "/kurse/dachdecker-mastery",
    video: "https://dach-selber-decken.de/wp-content/uploads/2024/07/Video-verkaufsseite-1.mov#t=0.1"
  },
  rinnenMasterclass: {
    title: "Rinnen Masterclass",
    description:
      "Lerne alles über die Installation und Wartung von Dachrinnen, um dein Dach optimal zu schützen und zu pflegen.",
    imageUrl: "",
    link: "/kurse/rinnen-masterclass",
  },
  dacheinteilung: {
    title: "Dacheinteilung leicht gemacht",
    description:
      "Verstehe die Prinzipien der Dacheinteilung und lerne, wie du dein Dach effizient und sicher planen kannst.",
    imageUrl: "",
    link: "/kurse/dacheinteilung",
  }
};

export default courses;