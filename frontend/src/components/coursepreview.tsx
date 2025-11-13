import courses from "@/lib/courses"
import Image from "next/image";
import Link from "next/link";

export default function CoursePreview() {
  return (
    <div className="flex gap-4 flex-wrap">
      {Object.keys(courses).map((key) => {
        const course = courses[key];
        return (
          <div key={key} className={course.title === "Dachdecker Mastery" ? "w-full h-auto border p-4 mb-4 " : "border p-4 mb-4"}>
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            <p className="mb-2">{course.description}</p>
            {course.imageUrl ?
              <Image src={course.imageUrl} alt={course.title} width={400} height={200} className="mb-2 rounded-lg" /> : null}
            <Link href={course.link} className="text-black border rounded-2xl p-1 hover:bg-blue-100 ">
              Zum Kurs
            </Link>
          </div>
        );
      })}
    </div>
  )
}
