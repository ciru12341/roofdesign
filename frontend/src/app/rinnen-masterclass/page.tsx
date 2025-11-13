
import { courses, rinnenMasterclassModules } from '@/lib/courses';
import CourseOverview from "@/components/courseoverview";
import Modules from "@/components/modules";

import { } from "@/lib/courses";

export default function RinnenMasterclassPage() {
  const course = courses.rinnenMasterclass;
  const modules = rinnenMasterclassModules;

  return (
    <main className="mx-auto max-w-7xl px-4 gap-y-12">
      <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
      <div className="flex mb-10 gap-4">
        <h2 className="text-lg font-semibold">{course.description}</h2>
      </div>
      <CourseOverview course={course} />
      <Modules modules={modules}></Modules>
    </main>
  );
}