import Link from "next/link";
import CourseModal from "./coursemodal";

export default function Navbar() {
  return (
    <nav className="flex space-x-6 mx-auto justify-center">
      <Link href="/erfahrungen">Roof Design Erfahrungen</Link>
      <CourseModal>Unsere Kurse</CourseModal>
      <Link href="/wer-ist-thorsten-haeupl">Wer ist Thorsten Häupl?</Link>
      <Link href="/kontaktformular">Noch Fragen?</Link>
    </nav>
  );
}
