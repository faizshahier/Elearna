import { Link } from "react-router-dom";
import { courses, formatPrice } from "../../data/courses";
import { Reveal, Stagger, StaggerItem } from "../../pages/Home";

const line = "absolute bg-white/80 transition-transform duration-500 ease-out";
const show = "group-hover:scale-100 group-focus-within:scale-100";

/*
 * Dark photo course card (Related courses + category pages). On hover (or keyboard focus):
 * thin corner frame draws in, price badge grows, text slides up to reveal the buttons.
 *   actions="both"   (Related courses): Course Details, + Buy Course for paid courses
 *   actions="single" (category pages):  one wide button — Buy Course for paid, Course Details for free
 * Touch screens can't hover, so they always show the buttons.
 */
export function OverlayCourseCard({ course, actions = "both" }) {
  const single = actions === "single";
  const to = `/courses/${course.id}`;
  const btn = "flex h-12 flex-1 items-center justify-center rounded text-base transition 2xl:h-[62px] 2xl:text-lg";

  return (
    <div className="group relative aspect-[4/5] overflow-hidden bg-brand-dark sm:aspect-[3/4] lg:aspect-[7/8]">
      <img src={course.image} alt={course.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      {/* corner frame: top-left + bottom-right */}
      <span aria-hidden="true" className={`${line} ${show} left-[4.8%] top-[3.9%] h-0.5 w-[41%] origin-left scale-x-0`} />
      <span aria-hidden="true" className={`${line} ${show} left-[4.8%] top-[3.9%] h-[31%] w-0.5 origin-top scale-y-0`} />
      <span aria-hidden="true" className={`${line} ${show} bottom-[3.9%] right-[4.8%] h-[31%] w-0.5 origin-bottom scale-y-0`} />
      <span aria-hidden="true" className={`${line} ${show} bottom-[3.9%] right-[4.8%] h-0.5 w-[41%] origin-right scale-x-0`} />

      {/* price badge */}
      <span className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-lg font-medium text-white transition-transform duration-300 group-hover:scale-[1.2] 2xl:right-[60px] 2xl:top-[60px] 2xl:h-[92px] 2xl:w-[92px] 2xl:text-2xl">
        {formatPrice(course.price)}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-8 text-white 2xl:px-12 2xl:pb-14">
        <p className="text-xs font-medium uppercase tracking-wider text-white/80 2xl:text-base">{course.category}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-snug 2xl:mt-5 2xl:text-[30px]">
          <Link to={to}>{course.title}</Link>
        </h3>
        {/* stars */}
        <p className="mt-3 flex items-center gap-1.5 text-xs text-white/70 2xl:mt-5 2xl:text-base">
          <span className="text-sm tracking-tight text-accent 2xl:text-lg" aria-label={`Rated ${course.rating} out of 5`}>
            ★★★★★
          </span>
          {course.rating.toFixed(2)} ({course.reviews})
        </p>
        <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex gap-3 pt-6 2xl:pt-[50px]">
              {single && course.price > 0 ? (
                <Link to="/pricing" className={`${btn} bg-accent text-ink hover:brightness-95`}>
                  Buy Course
                </Link>
              ) : (
                <Link to={to} className={`${btn} bg-accent text-ink hover:brightness-95`}>
                  Course Details
                </Link>
              )}
              {!single && course.price > 0 && (
                <Link to="/pricing" className={`${btn} border border-white/10 bg-brand-darker text-white hover:bg-brand-dark`}>
                  Buy Course
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RelatedCourses({ course }) {
  // Same category first, then fill up with others
  const related = [
    ...courses.filter((c) => c.id !== course.id && c.category === course.category),
    ...courses.filter((c) => c.id !== course.id && c.category !== course.category),
  ].slice(0, 3);

  return (
    <section className="bg-light py-20 lg:py-28 2xl:py-40">
      <div className="container-x">
        <Reveal>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider">Online learning</p>
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Related courses</h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:mt-16 2xl:gap-10">
          {related.map((c) => (
            <StaggerItem key={c.id}>
              <OverlayCourseCard course={c} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
