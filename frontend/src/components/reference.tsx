import Referencecard from "./referencecard";
import Link from "next/link";

export default function References() {
  return (
    <section className="flex flex-row flex-nowrap py-1 border mt-10 overflow-x-auto [-webkit-overflow-scrolling:touch] ">
      <div className="flex flex-col justify-between w-64 shrink-0 px-4 border-r-2">
        <h1 className="text-3xl">Das sagen erfolgreiche Kunden von Roof Design, die ihr Dach selbst gedeckt haben</h1>
        <div className="text-center mb-10">
          <Link href="/referenzen" className="text-blue-500 hover:underline border-2 rounded-2xl p-1"> Mehr erfahren</Link>
        </div>
      </div>
      <Referencecard />
    </section>
  )
}
