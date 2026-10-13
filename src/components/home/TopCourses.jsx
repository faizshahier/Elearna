import { AnimatePresence, motion } from "framer-motion";
import { itemVariants } from "../../utils/motion";
import { Reveal, Stagger } from "../ui/Reveal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { courseCategories, courses } from "../../data/courses";
import CourseCard from "../ui/CourseCard";
import SectionHeading from "../ui/SectionHeading";

export default function TopCourses() {
  const [active, setActive] = useState("All courses");

  const list = courses
    .slice(0, 6)
    .filter((c) => active === "All courses" || c.category === active);

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Online learning"
            title="Top online courses"
          />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`border-b pb-1 transition-colors ${
                  active === cat
                    ? "border-ink text-ink"
                    : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={itemVariants}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                  transition: { duration: 0.25 },
                }}
                className="h-full [&>div]:h-full"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Stagger>
        {list.length === 0 && (
          <p className="mt-10 text-center text-muted">
            No courses in this category yet.
          </p>
        )}

        <Reveal
          as="p"
          className="mx-auto mt-14 w-fit rounded-full bg-brand-dark px-8 py-3 text-center text-sm text-white"
        >
          We assist you in finding the ideal tutor at no cost.{" "}
          <Link to="/courses" className="underline hover:text-accent">
            Browse All Available Courses
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
