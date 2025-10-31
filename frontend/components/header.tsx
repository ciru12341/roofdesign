import Navbar from "./nav";
import Image from "next/image";
import logoImg from "../public/logo.png";


export default function Header() {
  return (
    <header className="flex flex-col">
      <div className="flex items-center w-full px-3 mb-5">
        <Image
          src={logoImg}
          alt="Roof Design Logo"
          className="mt-2 h-25 w-auto"
        />
        <p className="mx-auto text-center">&quot;Dächer aus eigener Hand&quot;</p>
      </div>
      <Navbar />
    </header>


  )
}
