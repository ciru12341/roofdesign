
import Hero from "@/components/hero";
import References from "@/components/reference";
import faq from "@/lib/faq";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 gap-y-12">
      <Hero className="border flex w-full flex-col sm:flex-row items-center gap-8 md:gap-12 lg:gap-16" />
      <References />
      <div className="mt-10 border-4">
        <h1 className="text-4xl font-bold mb-5">Häufig gestellte Fragen</h1>
        {faq.map((item, index) => (
          <div key={index} className="mb-6 border">
            <h2 className="text-2xl font-semibold mb-2 border">{item[0]}</h2>
            <p className="text-base">{item[1]}</p>
          </div>
        ))}
      </div>
    </main >
  );
}
