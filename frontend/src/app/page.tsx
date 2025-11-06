import Hero from "../../components/hero";


export default function Home() {
  return (
    <main className="mx-auto px-4 grid grid-cols-1 md:grid-cols-3 mt-10 mb-20 gap-y-12">
      <section className="md:col-start-2 col-span-2 w-3/4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <Hero className="lg:pr-4" />
          </div>

          <div>
            <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm bg-black">
              <video
                className="h-full w-full"
                controls
                preload="metadata"
                playsInline
                src="https://dach-selber-decken.de/wp-content/uploads/2025/04/Landingpage-1-2.mov#t=0.1"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
