import { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../../data/courses";

/* Course ids shown under Finance / Design / Management / Development for each group */
const groups = [
  { key: "free", title: "Free courses", text: "Free learning resources for skill development.", ids: [8, 2, 1, 7] },
  { key: "paid", title: "Paid courses", text: "Courses are available upon purchase.(Requires login)", ids: [12, 11, 5, 4] },
];

/*
 * Big "Courses" dropdown from the course-details design. Hovering Free / Paid on the left
 * switches the four category columns. The parent <li> is the hover group; this panel is
 * positioned against the whole desktop menu so it can sit centred under it.
 */
export default function CoursesMegaMenu() {
  const [active, setActive] = useState("free");
  const group = groups.find((g) => g.key === active);
  const picks = group.ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean);

  return (
    <div className="invisible absolute left-1/2 top-full grid w-[min(1062px,calc(100vw-4rem))] -translate-x-1/2 translate-y-2 grid-cols-[minmax(200px,276px)_1fr] border-b-[6px] border-accent bg-white text-left opacity-0 shadow-[0_30px_70px_-20px_rgba(15,42,46,0.35)] transition-[opacity,translate] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      {/* Free / Paid switch */}
      <ul className="space-y-2 bg-light p-5">
        {groups.map((g) => (
          <li key={g.key}>
            <button
              onMouseEnter={() => setActive(g.key)}
              onFocus={() => setActive(g.key)}
              onClick={() => setActive(g.key)}
              aria-pressed={active === g.key}
              className={`block w-full p-5 text-left transition-colors ${active === g.key ? "bg-white" : "hover:bg-white/60"}`}
            >
              <span className="block text-base font-medium text-ink">{g.title}</span>
              <span className="mt-2 block text-sm leading-relaxed text-muted">{g.text}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="p-8 xl:px-14 xl:py-10">
        <ul className="grid grid-cols-2 gap-x-10 gap-y-9">
          {picks.map((course) => (
            <li key={course.id}>
              <p className="text-sm font-medium uppercase tracking-wide text-ink">{course.category}</p>
              <Link to={`/courses/${course.id}`} className="mt-3 block text-sm leading-relaxed text-muted hover:text-brand-blue">
                {course.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Promo box */}
        <div className="mt-10 flex items-center gap-5 bg-light px-6 py-6">
          <svg className="h-11 w-11 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M18 8h12l-3 6h-6z" fill="#e29a00" />
            <path d="M21 14h6c9 6 13 13 13 19 0 6-6 9-16 9S8 39 8 33c0-6 4-13 13-19z" fill="#ffb606" />
            <path d="M24 22v14M28 25c-1-1.5-2.5-2-4-2-2 0-3.5 1-3.5 2.5 0 3.5 7.5 2 7.5 5.5 0 1.5-1.6 2.5-4 2.5-1.7 0-3.2-.6-4-2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <div className="flex-1">
            <p className="font-medium text-ink">Increase your potential earnings</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet scelerisque integer adipiscing velit sem sed.</p>
          </div>
          <Link to="/pricing" aria-label="See pricing plans" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent text-ink hover:brightness-95">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
