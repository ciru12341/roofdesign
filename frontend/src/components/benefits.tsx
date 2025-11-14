function BenefitRow({
  title, subtitle, value
}: {
  title: string; subtitle?: string; value: string;
}) {
  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md border">

      <div className="max-w-[70%]">
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        {subtitle && (
          <p className="text-gray-600 text-sm">{subtitle}</p>
        )}
      </div>

      <p className="text-xl font-bold whitespace-nowrap text-right text-black">
        Wert: {value}
      </p>

    </div>
  );
}

const formatNumber = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});



export default function Benefits(
  { timesaveings, budgedSavings, tools }:
    { timesaveings: number, budgedSavings: number, tools?: number }
) {
  return (
    <section className="w-full px-6 py-16 my-20 rounded-xl bg-stone-100 shadow-inner">
      <h2 className="text-4xl font-bold mb-12 text-center underline decoration-2 underline-offset-4">
        Deine Vorteile auf einen Blick:
      </h2>

      <div className="flex flex-col gap-6">

        <BenefitRow
          title="Zeitersparnis"
          subtitle="keine 6 Monate Wartezeit auf einen Dachdeckertermin"
          value={`min. ${formatNumber.format(timesaveings)}`}
        />

        <BenefitRow
          title="Budget Ersparnis"
          subtitle="damit dein Geld für andere Dinge frei bleibt"
          value={`bis zu ${formatNumber.format(budgedSavings)}`}
        />

        <BenefitRow
          title="Die eine Fähigkeit"
          subtitle="damit du auch in Zukunft jedes Projekt selbstbewusst angehen kannst"
          value="unbezahlbar"
        />

        <BenefitRow
          title="4 kostenlose Live-Calls"
          subtitle="via Zoom mit mir oder einem anderen Profi - 2 Stunden für alle Fragen"
          value="420 €"
        />

        <BenefitRow
          title="E-Mail & WhatsApp Support"
          subtitle="damit du niemals im Regen stehst"
          value="350 €"
        />

        {tools !== undefined && (
          <BenefitRow
            title="Profi-Werkzeug für die Rinnenmontage"
            subtitle=""
            value={`${formatNumber.format(tools)}`}
          />
        )}

      </div>
    </section>
  );
}
