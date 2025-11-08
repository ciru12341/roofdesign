import Hero from "@/components/hero";
import References from "@/components/reference";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 mt-10 mb-20 gap-y-12 w-full">
      <section className="border mx-auto">
        <Hero className="" />
      </section>
      <section className="mt-20 border">
        <References />
      </section>
    </main >
  );
}
