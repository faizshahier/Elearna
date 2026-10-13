import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { courses } from "../../data/courses";
import { CourseCardCompact } from "../ui/CourseCard";
import SectionHeading from "../ui/SectionHeading";

const programIds = [7, 4, 5, 6];

export default function TopPrograms() {
  const programs = programIds.map((id) => courses.find((c) => c.id === id));

  return (
    <section className="bg-light pt-20 lg:pt-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading eyebrow="Trending courses" title="Explore our top programs" />
        </Reveal>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((course, i) => (
            // the wrapper carries the hover z-index so the pop-out panel stays above the neighbouring cards
            <StaggerItem key={course.id} className="relative h-full hover:z-20 focus-within:z-20">
              <CourseCardCompact course={course} popupSide={i === programs.length - 1 ? "left" : "right"} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
