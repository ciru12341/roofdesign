import Referencecard from "./referencecard";

export default function References() {
  return (
    <section className="flex w-screen -mx-4">
      <div className="max-w-2xs px-4">
        <h1 className="text-4xl">Was unsere Kunden sagen</h1>
      </div>
      <div className="overflow-x-auto">
        <Referencecard />
      </div>
    </section>
  )
}
