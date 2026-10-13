import { unsplash } from "../../data/images";
import Button from "../ui/Button";

/* CTA with a full-width photo background (course details page) */
export default function PhotoCta() {
  return (
    <section className="relative overflow-hidden">
      <img src={unsplash("1529390079861-591de354faf5", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="container-x relative flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between lg:px-24">
        <h2 className="max-w-sm text-3xl font-medium leading-tight text-white sm:text-4xl">Are you ready to start your journey?</h2>
        <div className="flex flex-wrap gap-4">
          <Button to="/courses" variant="outlineLight">
            Browse Courses
          </Button>
          <Button to="/team" variant="accent">
            Became An Instructor
          </Button>
        </div>
      </div>
    </section>
  );
}
