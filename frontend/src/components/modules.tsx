export default function Modules({ modules }: { modules: Record<string, string[]> }) {

  return (
    <>
      <section className="w-full px-4 gap-y-12  border py-16 my-20 rounded-lg">
        <h2 className="text-4xl font-bold mb-10 text-center underline decoration-3 underline-offset-2">Diese Schritte erwarten dich:</h2>
        {Object.entries(modules).map(([module, lessons]) => (

          <div key={module} className="bg-white border bg-opacity-90 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">{module}</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
              {lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>

          </div>

        ))}
      </section>
    </>
  );
}