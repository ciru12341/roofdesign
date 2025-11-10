import Hero from "@/components/hero";
import References from "@/components/reference";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 mt-10 mb-20 gap-y-12 w-full">
      <Hero className="border flex w-full flex-col sm:flex-row items-center gap-8 md:gap-12 lg:gap-16" />
      <References />
    </main >
  );
}
