import references from "@/lib/referenzen";
import Videocontainer from "./videocontainer";
import Image from "next/image";
import Link from "next/link";

export default function Referencecard() {
  return (
    <div className="flex flex-row flex-nowrap gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory py-2 px-4 [-webkit-overflow-scrolling:touch]">
      {Object.values(references).map((ref) => (
        <div key={ref.id} className={`flex w-[280px] shrink-0 snap-start flex-col rounded border p-4`}>
          <h2 className="text-3xl">{ref.name}</h2>
          <p className="">{ref.shortDescription}</p>
          {ref.video ? <Videocontainer src={ref.video} /> : null}
          {ref.image ? (
            <Image
              src={ref.image}
              alt={ref.name}
              className="rounded mt-2"
              width={200}
              height={200}
            />
          ) : null}
          {ref.link ? (
            <Link href={ref.link} className="text-blue-500 hover:underline">
              More Info
            </Link>
          ) : null}

        </div>
      ))}
    </div>
  )
}
