import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../data/categories";
import { allCourseCategories, categorySlug, courses } from "../data/courses";
import { CategoryIcon, CourseCard, CtaBanner, Reveal, Stagger, StaggerItem } from "./Home";

const PER_PAGE = 6;
// "Popular courses" lists the first 12 courses → 2 pages, like the design (newer courses still show on their category page)
const POPULAR_COUNT = 12;

/*
 * Shared by two pages (same doodle hero + category strip; each strip item links to /category/…):
 *   variant="default" → /courses (All Courses): adds the category filter tabs above the grid.
 *   variant="pages"   → /pages/courses (Pages → Courses, design "Couers in pages"): no tabs.
 */
export default function Courses({ variant = "default" }) {
  const isPages = variant === "pages";
  const [params, setParams] = useSearchParams();
  const active = allCourseCategories.includes(params.get("category")) ? params.get("category") : "All courses";

  const filtered = courses.slice(0, POPULAR_COUNT).filter((c) => active === "All courses" || c.category === active);
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
      <section className="bg-doodle pb-40 pt-[calc(var(--header-h,0px)_+_5rem)] text-center text-white lg:pt-[calc(var(--header-h,0px)_+_7rem)] 2xl:pb-[200px]">
        <Reveal className="container-x">
          <p className="text-sm font-medium uppercase tracking-wider 2xl:text-lg">Start with</p>
          <h1 className="mx-auto mt-4 max-w-xl text-4xl font-semibold leading-tight sm:text-6xl 2xl:mt-6 2xl:max-w-3xl 2xl:text-[76px] 2xl:leading-[1.1]">
            Professional online courses
          </h1>
        </Reveal>
      </section>

      {/* Category strip overlapping the hero */}
      <section className="bg-light">
        <div className="container-x">
          <Reveal className="-mt-28 grid grid-cols-2 gap-y-8 bg-white px-4 py-8 shadow-xl sm:grid-cols-3 lg:grid-cols-6 2xl:-mt-[100px] 2xl:py-10">
            {categories.map((c) => (
              // links to the category page; hover draws a thin outline box
              <Link
                key={c.title}
                to={`/category/${categorySlug(c.filter)}`}
                className="mx-1 flex flex-col items-center rounded-md border border-transparent px-2 py-4 text-center transition-colors hover:border-ink focus-visible:border-ink 2xl:mx-3"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-light text-ink 2xl:h-[88px] 2xl:w-[88px]">
                  <CategoryIcon d={c.pagesD ?? c.d} className="h-8 w-8 2xl:h-11 2xl:w-11" />
                </span>
                <span className="mt-4 max-w-[6.6em] font-heading text-lg font-medium leading-snug 2xl:mt-5 2xl:text-[22px]">
                  {c.pagesTitle ?? c.title}
                </span>
                <span className="mt-1 text-sm text-muted 2xl:mt-2 2xl:text-xl">{c.count} Courses</span>
              </Link>
            ))}
          </Reveal>
        </div>

        {/* Course list */}
        <div id="course-list" className="container-x scroll-mt-40 py-20">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl 2xl:max-w-4xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider">Online learning</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Popular courses</h2>
            </div>
            {!isPages && (
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
            )}
          </Reveal>

          {visible.length > 0 ? (
            // key: a new filter / page of cards animates in again
            <Stagger key={`${active}-${page}`} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((course) => (
                <StaggerItem key={course.id} className="h-full">
                  <CourseCard course={course} />
                </StaggerItem>
              ))}
            </Stagger>
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

      <Reveal>
        <CtaBanner top="bg-light" />
      </Reveal>
    </>
  );
}
