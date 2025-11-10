import references from "@/lib/referenzen";
import Videocontainer from "./videocontainer";
import Image from "next/image";

export default function Referencecard() {
  return (

    <div className="flex flex-row flex-nowrap gap-5 px-4" role="list" aria-label="Kundenreferenzen">
      {Object.values(references).map((ref) => (
        <article key={ref.id} data-id={ref.id} className={`flex w-[280px] shrink-0 flex-col rounded snap-start shadow-sm border p-4 justify-between`} role="listitem">
          <div>
            <h3 className="text-3xl font-semibold line-clamp-1">{ref.name}</h3>
            <p className="mt-1 text-sm text-gray-700 line-clamp-3">{ref.shortDescription}</p>
          </div>
          {ref.video ? <Videocontainer src={ref.video} className="w-auto h-48 aspect-video" /> : null}
          {ref.image ? (
            <Image
              src={ref.image}
              alt={ref.name}
              className="w-auto h-48 rounded mt-2 object-cover"
              width={400}
              height={300}
            />
          ) : null}
        </article>
      ))}
    </div>
  )
}
