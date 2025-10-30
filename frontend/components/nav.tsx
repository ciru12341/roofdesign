import Link from "next/link";
import CourseModal from "./coursemodal";

export default function Navbar() {
  return (
    <header>
      <nav className="flex space-x-6">
        <Link href="/erfahrungen">Roof Design Erfahrungen</Link>
        <CourseModal>Unsere Kurse</CourseModal>
        <Link href="/wer-ist-thorsten-haeupl">Wer ist Thorsten Häupl?</Link>
        <Link href="/kontaktformular">Noch Fragen?</Link>
      </nav>
    </header>
  );
}