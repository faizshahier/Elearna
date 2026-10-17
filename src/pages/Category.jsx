import { useParams } from "react-router-dom";
import PhotoCta from "../components/course/PhotoCta";
import { OverlayCourseCard } from "../components/course/RelatedCourses";
import { courses, getCategory } from "../data/courses";
import { Reveal, Stagger, StaggerItem } from "./Home";
import NotFound from "./NotFound";

/* One course category (/category/design …): doodle hero with the name, that category's courses, photo CTA */
export default function Category() {
  const { slug } = useParams();
  const category = getCategory(slug);
  if (!category) return <NotFound />;

  const list = courses.filter((c) => c.category === category);

  return (
    <>
      <section className="bg-doodle pb-24 pt-[calc(var(--header-h,0px)_+_6rem)] text-center text-white lg:pb-32 lg:pt-[calc(var(--header-h,0px)_+_8rem)] 2xl:pb-[140px]">
        <Reveal className="container-x">
          <h1 className="text-5xl font-semibold sm:text-6xl 2xl:text-[76px]">{category}</h1>
        </Reveal>
      </section>

      <section className="bg-light py-20 lg:py-28 2xl:py-[120px]">
        <div className="container-x">
          {list.length > 0 ? (
            <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
              {list.map((course) => (
                <StaggerItem key={course.id}>
                  <OverlayCourseCard course={course} actions="single" />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <p className="text-center text-muted">No courses in this category yet.</p>
          )}
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
