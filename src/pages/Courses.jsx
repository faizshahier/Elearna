import { useSearchParams } from "react-router-dom";
import CtaBanner from "../components/home/CtaBanner";
import CategoryIcon from "../components/ui/CategoryIcon";
import CourseCard from "../components/ui/CourseCard";
import SectionHeading from "../components/ui/SectionHeading";
import { categories } from "../data/categories";
import { allCourseCategories, courses } from "../data/courses";

const PER_PAGE = 6;

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const active = allCourseCategories.includes(params.get("category")) ? params.get("category") : "All courses";

  const filtered = courses.filter((c) => active === "All courses" || c.category === active);
  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const page = Math.min(Math.max(1, Number(params.get("page")) || 1), pageCount);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const update = (next) => {
    const merged = { category: active, page, ...next };
    const clean = {};
    if (merged.category !== "All courses") clean.category = merged.category;
    if (merged.page > 1) clean.page = String(merged.page);
    setParams(clean);
  };

  const goToPage = (p) => {
    update({ page: p });
    document.getElementById("course-list")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pb-40 pt-20 text-center text-white lg:pt-28">
        <div className="container-x">
          <p className="text-sm font-medium uppercase tracking-wider">Start with</p>
          <h1 className="mx-auto mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-6xl">
            Professional online courses
          </h1>
        </div>
      </section>

      {/* Category strip overlapping the hero */}
      <section className="bg-light">
        <div className="container-x">
          <div className="-mt-28 grid grid-cols-2 gap-y-8 bg-white px-4 py-8 shadow-xl sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c) => {
              const selected = active === c.filter;
              return (
                <button
                  key={c.title}
                  onClick={() => update({ category: selected ? "All courses" : c.filter, page: 1 })}
                  aria-pressed={selected}
                  className="group flex flex-col items-center px-2 text-center"
                >
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full transition ${
                      selected ? "bg-brand-dark text-accent" : "bg-light text-ink group-hover:bg-brand-dark group-hover:text-accent"
                    }`}
                  >
                    <CategoryIcon d={c.d} />
                  </span>
                  <span className="mt-4 font-heading text-lg font-medium leading-snug">{c.title}</span>
                  <span className="mt-1 text-sm text-muted">{c.count} Courses</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Course list */}
        <div id="course-list" className="container-x scroll-mt-24 py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Online learning" title="Popular courses" />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {allCourseCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => update({ category: cat, page: 1 })}
                  className={`border-b pb-1 transition-colors ${
                    active === cat ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-center text-muted">No courses in this category yet.</p>
          )}

          {pageCount > 1 && (
            <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  aria-current={p === page ? "page" : undefined}
                  className={`h-9 w-9 rounded-full text-sm transition ${
                    p === page ? "bg-accent text-ink" : "bg-white text-ink hover:bg-brand-dark hover:text-white"
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>

      <CtaBanner top="bg-light" />
    </>
  );
}
