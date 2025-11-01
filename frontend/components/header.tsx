import Navbar from "./nav";
import Image from "next/image";
import logoImg from "../public/logo.png";


export default function Header() {
  return (
    <header className="w-full border-b border-gray-600">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-3 items-center gap-2 py-3">
          <div className="justify-self-start">
            <Image
              src={logoImg}
              alt="Roof Design Logo"
              width={120}
              height={48}
              priority
              className="h-28 w-auto"
            />
          </div>

          <p className="justify-self-center text-center text-sm md:text-base">
            &quot;Dächer aus eigener Hand&quot;
          </p>

          <div className="justify-self-end" />
        </div>

        <Navbar />
      </div>
    </header>
  )
}
