import Navbar from "./nav";
import Image from "next/image";
import logoImg from "@/../public/images/logo2.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-600 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="flex mx-auto max-w-7xl px-4 justify-between">
        <div className="flex items-center gap-2 py-3">
          <div className="justify-self-start md:justify-self-start">
            <Link href="/">
              <Image
                src={logoImg} // TODO change logo to SVG later
                alt="Roof Design Logo"
                priority
                className="h-28 w-auto"
              ></Image>
            </Link>
          </div>
          <div />
        </div>
        <div className="flex flex-1 items-end">
          <Navbar />
        </div>
      </div>
    </header>
  )
}
