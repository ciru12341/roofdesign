import CoursePreview from "@/components/coursepreview";

export default function KursePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 gap-y-12">
      <h1 className="text-4xl font-bold mb-5">Unsere Kurse</h1>
      <div className="">
        <CoursePreview />
      </div>
    </main>
  );
}