import Videocontainer from "@/components/videocontainer";
import { courses, dachdeckerMasteryModules } from '@/lib/courses';
import CourseOverview from "@/components/courseoverview";
import Modules from "@/components/modules";

import { } from "@/lib/courses";
import Benefits from "@/components/benefits";

export default function DachdeckerMasteryPage() {
  const course = courses.dachdeckerMastery;
  const modules = dachdeckerMasteryModules;

  return (
    <main className="mx-auto max-w-7xl px-4 gap-y-12">
      <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
      <div className="flex mb-10 gap-4">
        <h2 className="text-lg font-semibold">{course.description}</h2>
        <Videocontainer className="aspect-video w-full" src={course.video} />
      </div>
      <CourseOverview course={course} />
      <Modules modules={modules}></Modules>
      <Benefits timesaveings={2300} budgedSavings={12000} tools={550} />
    </main>
  );
}