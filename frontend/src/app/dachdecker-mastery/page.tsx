import Videocontainer from "@/components/videocontainer";
import { courses } from '@/lib/courses';
import CourseOverview from "@/components/courseoverview";

const course = courses.dachdeckerMastery

export default function DachdeckerMasteryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 gap-y-12">
      <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
      <div className="flex mb-10 gap-4">
        <h2 className="text-lg font-semibold">{course.description}</h2>
        <Videocontainer className="aspect-video w-full" src={course.video} />
      </div>
      <CourseOverview />
    </main>
  );
}