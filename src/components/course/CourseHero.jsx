import { courseDetails } from "../../data/courses";
import { Reveal } from "../../pages/Home";

const icon = (d) => (
  <svg className="h-9 w-9 shrink-0 2xl:h-11 2xl:w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

/* Course photo hero (the see-through site header sits on top of it, see Layout) + stats bar overlapping its bottom */
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
        <img src={course.image.replace("w=800", "w=1920")} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <Reveal className="container-x relative pb-32 pt-36 text-white md:pt-44 lg:pb-48 lg:pt-56 2xl:pb-[290px] 2xl:pt-[290px]">
          <p className="text-base font-medium uppercase tracking-wide 2xl:text-xl">{course.category}</p>
          <h1 className="mt-4 max-w-[960px] text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl 2xl:text-[76px]">
            {course.title}
          </h1>
          <p className="mt-8 flex items-center gap-3 text-lg 2xl:text-[22px]">
            <span className="text-2xl tracking-tight text-accent" aria-label={`Rated ${course.rating} out of 5`}>
              ★★★★★
            </span>
            {course.lessons} Lessons
          </p>
        </Reveal>
      </section>

      <div className="container-x relative">
        <Reveal className="-mt-20 grid grid-cols-2 gap-6 bg-white px-6 py-8 shadow-[0_30px_60px_-30px_rgba(15,42,46,0.3)] sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-gray-200 lg:px-4 lg:py-10 2xl:-mt-[88px] 2xl:py-[52px]">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 lg:justify-center lg:px-3">
              {icon(s.d)}
              <div>
                <p className="font-heading text-lg font-medium xl:text-xl 2xl:text-2xl">{s.label}</p>
                <p className="mt-1 text-muted 2xl:text-lg">{s.value}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </>
  );
}
