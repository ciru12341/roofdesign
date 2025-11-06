import Videocontainer from "@/components/videocontainer";
import Hero from "../components/hero";
import Referencecard from "@/components/referencecard";


export default function Home() {
  return (
    <main className="mx-auto px-4 grid grid-cols-1 xl:grid-cols-[25%_50%_25%] mt-10 mb-20 gap-y-12 w-full">
      <section className="lg:col-start-2 lg:col-span-2 w-3/4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Hero className="lg:pr-4" />
          </div>

          <div>
            <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm bg-black">
              <Videocontainer src="https://dach-selber-decken.de/wp-content/uploads/2025/04/Landingpage-1-2.mov#t=0.1"></Videocontainer>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:col-start-2">
        <Referencecard></Referencecard>
      </section>
    </main >
  );
}
