import { Link } from "react-router-dom";
import { formatPrice } from "../../data/courses";
import Stars from "./Stars";

export function PriceBadge({ price, className = "" }) {
  return (
    <span
      className={`flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-base font-medium text-white ${className}`}
    >
      {formatPrice(price)}
    </span>
  );
}

const btn = "flex h-12 flex-1 items-center justify-center rounded text-base transition";
const detailsBtn = `${btn} bg-accent text-ink hover:brightness-95`;
const enrollBtn = `${btn} bg-brand-dark text-white hover:bg-brand-darker`;

/*
 * Course grid card. On hover (or keyboard focus) the card lifts, the price badge grows
 * and the Lessons / Enrolled row swaps for "Course Details" + "Enroll" buttons.
 * Touch screens have no hover, so they keep the Lessons / Enrolled row.
 */
export default function CourseCard({ course }) {
  const to = `/courses/${course.id}`;
  return (
    <div className="group flex flex-col bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,42,46,0.35)] focus-within:shadow-[0_30px_60px_-25px_rgba(15,42,46,0.35)]">
      <div className="relative">
        <Link to={to} tabIndex={-1} className="block aspect-[16/10] overflow-hidden">
          <img src={course.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </Link>
        <PriceBadge
          price={course.price}
          className="absolute -bottom-9 right-7 h-[72px] w-[72px] text-lg transition-transform duration-300 group-hover:scale-[1.2]"
        />
      </div>

      <div className="flex flex-1 flex-col px-7 pt-10">
        <p className="text-xs font-medium uppercase tracking-wider">{course.category}</p>
        <h3 className="mt-4 text-xl font-medium leading-snug lg:text-2xl">
          <Link to={to} className="hover:text-brand-blue">
            {course.title}
          </Link>
        </h3>
        <div className="mt-5">
          <Stars rating={course.rating} reviews={course.reviews} />
        </div>
        <div className="flex-1" />

        <div className="relative mt-7 border-t border-gray-100">
          {/* default: lessons + enrolled */}
          <div className="grid grid-cols-2 py-5 text-base transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-0 [@media(hover:hover)]:group-focus-within:opacity-0">
            <span className="flex items-center justify-center gap-3 border-r border-gray-100">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M4 2h10a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V2zm2 12v2h8v-2H6z" />
              </svg>
              {course.lessons} Lessons
            </span>
            <span className="flex items-center justify-center gap-3">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0H3z" />
              </svg>
              {course.enrolled} Enrolled
            </span>
          </div>

          {/* hover: action buttons */}
          <div className="invisible absolute inset-x-0 top-3 flex gap-8 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:visible [@media(hover:hover)]:group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <Link to={to} className={detailsBtn}>
              Course Details
            </Link>
            <Link to="/register" className={enrollBtn}>
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 * Compact card for the "Explore our top programs" row. On hover the card darkens and
 * a white details panel pops out beside it (desktop only). `popupSide="left"` flips
 * the panel for the last column so it stays on screen.
 */
export function CourseCardCompact({ course, popupSide = "right" }) {
  const to = `/courses/${course.id}`;
  return (
    <div className="group relative h-full hover:z-20 focus-within:z-20">
      <Link to={to} className="flex h-full flex-col overflow-hidden bg-white transition-colors duration-300 group-hover:bg-brand-darker">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 lg:group-hover:brightness-50"
          />
          <PriceBadge price={course.price} className="absolute right-4 top-4 h-[72px] w-[72px] text-lg" />
        </div>
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-muted transition-colors lg:group-hover:text-white/80">
            {course.category}
          </p>
          <h3 className="mt-3 text-lg font-medium leading-snug transition-colors lg:text-xl lg:group-hover:text-white">{course.title}</h3>
          <div className="mt-auto pt-5">
            <Stars rating={course.rating} reviews={course.reviews} />
          </div>
        </div>
      </Link>

      {/* pop-out details panel */}
      <div
        className={`invisible absolute top-[2%] z-30 hidden w-[116%] translate-y-2 bg-white px-7 py-6 opacity-0 xl:px-8 shadow-[0_30px_70px_-20px_rgba(15,42,46,0.35)] transition duration-300 lg:block group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
          popupSide === "left" ? "right-[27%]" : "left-[27%]"
        }`}
      >
        <h4 className="text-lg font-medium leading-snug xl:text-xl">{course.title}</h4>
        <p className="mt-2 text-xs uppercase tracking-wider text-muted">
          • {course.lessons} Lessons • {course.enrolled} Enrolled
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.</p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          {["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor", "Lorem ipsum dolor sit"].map((t) => (
            <li key={t} className="flex items-start gap-2.5 leading-snug">
              <svg className="mt-0.5 h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12.5l5 5L20 6.5" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-3 [&>a]:h-10 [&>a]:text-sm">
          <Link to={to} tabIndex={-1} className={detailsBtn}>
            Course Details
          </Link>
          {course.price > 0 && (
            <Link to="/register" tabIndex={-1} className={enrollBtn}>
              Enroll
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
