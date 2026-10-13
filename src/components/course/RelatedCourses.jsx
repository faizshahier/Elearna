import { Link } from "react-router-dom";
import { courses } from "../../data/courses";
import { PriceBadge } from "../ui/CourseCard";
import SectionHeading from "../ui/SectionHeading";
import Stars from "../ui/Stars";

/* Photo card with dark overlay; buttons appear on hover */
function OverlayCard({ course }) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden bg-brand-dark sm:aspect-[3/4] lg:aspect-[4/5]">
      <img src={course.image} alt={course.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <PriceBadge price={course.price} className="absolute right-8 top-8 h-16 w-16 text-lg" />

      <div className="absolute inset-x-0 bottom-0 p-8 text-white transition-transform duration-300 group-hover:-translate-y-2">
        <p className="text-xs font-medium uppercase tracking-wider text-white/70">{course.category}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-snug">{course.title}</h3>
        <div className="mt-3 [&_span]:text-white/70">
          <Stars rating={course.rating} reviews={course.reviews} />
        </div>
        <div className="grid grid-rows-[0fr] transition-all duration-300 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="flex flex-wrap gap-3 pt-5">
              <Link to={`/courses/${course.id}`} className="rounded bg-accent px-5 py-2.5 text-sm font-medium text-ink hover:brightness-95">
                Course Details
              </Link>
              <Link to="/pricing" className="rounded bg-brand-dark px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-darker">
                Buy Course
              </Link>
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
    <section className="bg-light py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Online learning" title="Related courses" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((c) => (
            <OverlayCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
