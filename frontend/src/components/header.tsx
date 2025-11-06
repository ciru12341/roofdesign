import Navbar from "./nav";
import Image from "next/image";
import logoImg from "../../public/logo.png";
import Link from "next/link";


export default function Header() {
  return (
    <header className="w-full border-b border-gray-600">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 py-3">
          <div className="justify-self-start md:justify-self-start">
            <Link href="/">
              <Image
                src={logoImg} // TODO change logo to SVG later
                alt="Roof Design Logo"
                width={120}
                height={48}
                priority
                className="h-28 w-auto"
              ></Image>
            </Link>
          </div>

          <p className="justify-self-center text-center text-sm md:text-base">
            &quot;Dächer aus eigener Hand&quot;
          </p>

          <div className="justify-self-end" />
        </div>
        <div className="grid grid-col-3">
          <Navbar className="col-start-2" />
        </div>
      </div>
    </header>
  )
}
