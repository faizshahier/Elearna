import { courseDetails } from "../../data/courses";
import Stars from "../ui/Stars";

const icon = (d) => (
  <svg className="h-8 w-8 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function CourseHero({ course }) {
  const stats = [
    { label: "Time span", value: courseDetails.timeSpan, d: "M12 8v5l3 2M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM5 4l2 2M19 4l-2 2" },
    { label: "Lectures", value: `${course.lessons} Lessons`, d: "M6 3h10l2 2v16H6zM9 3v18M12 8h3" },
    { label: "Skill level", value: courseDetails.level, d: "M12 3l8 8h-4v9H8v-9H4z" },
    { label: "Video lessons", value: courseDetails.videoHours, d: "M3 6h13v12H3zM16 10l5-3v10l-5-3M6 10h5" },
    { label: "Students", value: `${course.enrolled} Enrolled`, d: "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" },
  ];

  return (
    <>
      <section className="relative bg-brand-dark">
        <img src={course.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/75" />
        <div className="container-x relative pb-36 pt-20 text-white lg:pt-28">
          <p className="text-sm font-medium uppercase tracking-wider">{course.category}</p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">{course.title}</h1>
          <div className="mt-5 flex items-center gap-3 [&_span]:text-sm [&_span]:text-white/80">
            <Stars rating={course.rating} reviews={course.reviews} />
            <span>· {course.lessons} Lessons</span>
          </div>
        </div>
      </section>

      <div className="container-x relative">
        <div className="-mt-16 grid grid-cols-2 gap-6 bg-white p-6 shadow-xl sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-gray-200 lg:p-8">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 lg:justify-center lg:px-2">
              {icon(s.d)}
              <div>
                <p className="font-heading font-medium">{s.label}</p>
                <p className="text-sm text-muted">{s.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
