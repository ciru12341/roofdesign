import Container from "@/components/container";
import Videocontainer from "@/components/videocontainer";
import references from "@/lib/referenzen";
import imageFront from "@/../public/masteryfront.png";
import Image from "next/image";
// For internal links use next/link; for external Calendly use <a>

const videoUrl = Object.values(references)[0].video;

export default function Erfahrungen() {
  return (
    <Container>
      <main>
        <section className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-8">Roof Design Erfahrungen</h1>
          <h2 className="text-2xl font-semibold">
            Schau dir hier die komplette Geschichte von Axel an und erfahre, wie auch du bis zu{" "}
            <span className="underline text-amber-400">50.000€</span> sparen kannst!
          </h2>
          <Videocontainer
            src={videoUrl}
            className="w-full max-w-[940px] aspect-video h-auto my-8 mx-auto"
          />
        </section>

        <section>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative md:basis-1/4 w-full md:w-auto max-w-[420px] mx-auto">
              <Image
                src={imageFront}
                alt="Dachdecker Mastery – Kursvorschau"
                className="rounded shadow-lg w-full h-auto"
                priority
                width={420}
                height={280}
              />
            </div>

            <div className="md:basis-2/3 flex flex-col md:pl-6 md:text-left">
              <h2 className="self-start inline-block text-3xl font-bold mb-4">
                &quot;Die einzige Projektbetreuung, die dir wirklich hilft&quot;
                <hr className="border border-dashed mb-4" />
                <div className="flex flex-col items-center">
                  <h3 className="text-2xl font-semibold mb-4">Das darfst du nicht verpassen!</h3>

                  <div className="border flex flex-col items-center p-4 rounded-xl shadow-md w-full sm:w-1/2 mx-auto md:mx-0 text-base font-semibold">
                    <p>Exklusive Videokurse + exzellenter Support</p>
                    <p>=</p>
                    <p>Das perfekte Dach in Eigenleistung</p>
                  </div>

                  <a
                    href="https://calendly.com/roof-design/beratung" // TODO: replace with your real link
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center text-white bg-amber-500 font-semibold w-full sm:w-1/2 mx-auto md:mx-0 mt-5 text-base rounded-xl hover:bg-amber-600 transition"
                  >
                    Jetzt kostenloses Angebot anfordern
                  </a>
                </div>
              </h2>



            </div>
          </div>
        </section>
      </main>
    </Container >
  );
}
