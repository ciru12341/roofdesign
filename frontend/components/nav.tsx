"use client";
import CourseModal from "./coursemodal";
import { NavLink } from "./nav-link";





export default function Navbar() {
  return (
    <nav className="flex justify-center">
      <ul className="flex flex-wrap gap-3 md:gap-5 justify-center">
        <li>
          <NavLink href="/">Startseite</NavLink>
        </li>
        <li>
          <NavLink href="/leistungen">Leistungen</NavLink>
        </li>
        <li >
          <CourseModal>Kurse</CourseModal>
        </li>
        <li >
          <NavLink href="/referenzen">Referenzen</NavLink>
        </li>
        <li >
          <NavLink href="/wer-ist-thorsten-haeupl">Wer ist Thorsten Häupl?</NavLink>
        </li>
        <li >
          <NavLink href="/kontaktformular">Noch Fragen?</NavLink>
        </li>
      </ul>
    </nav>
  );
}