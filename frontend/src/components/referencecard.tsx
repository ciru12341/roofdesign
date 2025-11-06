import references from "@/lib/referenzen";
import Videocontainer from "./videocontainer";
import Image from "next/image";
import Link from "next/link";

export default function Referencecard() {
  return (
    <div className="flex flex-col rounded border p-4 mb-2">
      {Object.values(references).map((ref) => (
        <div key={ref.id} className={`flex flex-col rounded border p-4 mb-2 w-3/4 ${ref.id % 2 === 0 ? "self-end" : "self-start"}`}>
          <h2 className="text-3xl">{ref.name}</h2>
          <p>{ref.description}</p>
          {ref.video ? <Videocontainer src={ref.video} /> : null}
          {ref.image ? (
            <Image
              src={ref.image}
              alt={ref.name}
              className="rounded border mt-2"
              width={500}
              height={300}
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
