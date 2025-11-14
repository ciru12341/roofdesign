import { courses } from "@/lib/courses"
import Image from "next/image";

export default function CourseOverview({ course }: { course: typeof courses[keyof typeof courses] }) {

  return (
    <div className="gap-4 w-full h-auto  p-4 mb-4 shadow-lg bg-stone-100">
      <div className="grid grid-cols-[60%_40%] mb-2">
        <div>
          <h2 className="text-2xl font-bold mb-4 underline decoration-2 underline-offset-2">Übersicht der {course.title}:</h2>
          <ul id="features" className="list-disc list-inside space-y-2 text-lg pl-2">
            {course.features.map(item => (
              <li key={item}>{item}</li>
            )
            )}
          </ul>
        </div>
        {course.imageUrl ? <Image src={course.imageUrl} alt={course.title} width={400} height={200} className="mb-2 rounded-lg shadow-lg " /> : null}
      </div>
      <div className="w-fit mx-auto text-3xl font-bold mb-6 mt-6">
        {course.price_new ? (
          <>
            <h3 className="text-lg mb-2">Nur für kurze Zeit</h3>
            <span className="text-red-600 after:content-['€\00a0']">{course.price_new}</span>
            <span className="text-gray-500 line-through mr-2 after:content-['€']">{course.price}</span>
          </>
        ) : (
          <span>{course.price}€</span>
        )}
      </div>
    </div>
  )
}
