"use client";
import Link from "next/link";
import Videocontainer from "./videocontainer";

export default function Hero({ className }: { className: string }) {
  return (
    <section id="start" className={`${className}`}>
      <div>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight text-black">
          Dein Dach. Sauber geplant.
          <br className="hidden md:block" />
          Sicher umgesetzt.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-800">
          In nur <span className="font-semibold">7 Fragen</span> klären wir,
          ob DIY für dich sinnvoll ist - und wie du es richtig angehst.
          Mit Anleitungen, Materialplanung und <span className="underline decoration-yellow-400">
            verlässlichem Support</span>.
        </p>

        {/* CTA  */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/calendly" // TODO change to real calendly link later
            aria-label="Jetzt kostenloses Angebot anfragen"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium bg-black text-white hover:bg-gray-800"
          >
            Jetzt kostenloses Angebot anfragen
          </Link>

          <p className="self-center"> Oder </p>
          <Link
            href="/7-fragen"
            aria-label="Selbsttest starten"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-medium border border-black/10 hover:bg-black/5"
          >
            Zu unserem Selbsttest
          </Link>
        </div>

        {/* Trust row v1 */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <span>15+ Jahre Erfahrung</span>
          <span className="sm:inline">•</span>
          <span>Begleitung vor Ort oder remote</span>
          <span className="sm:inline">•</span>
          <span>Sichere, pragmatische Lösungen</span>
        </div>
      </div>
      <div >
        <Videocontainer src="https://dach-selber-decken.de/wp-content/uploads/2025/04/Landingpage-1-2.mov#t=0.1" />
      </div>
    </section>
  );
}
