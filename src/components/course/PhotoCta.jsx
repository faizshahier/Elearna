import { unsplash } from "../../data/images";
import { Link } from "react-router-dom";
import { Reveal } from "../../pages/Home";

/* CTA with a full-width photo background (course details page) */
export default function PhotoCta() {
  return (
    <section className="relative overflow-hidden">
      <img src={unsplash("1529390079861-591de354faf5", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <Reveal className="container-x relative">
        <div className="flex flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between lg:px-[8%] lg:py-24">
          <h2 className="max-w-md text-3xl font-medium leading-tight text-white sm:text-4xl 2xl:text-[44px]">
            Are you ready to start your journey?
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/courses" className="inline-flex items-center justify-center rounded py-3 text-sm font-medium transition border border-white px-7 text-white hover:bg-white hover:text-ink">
              Browse Courses
            </Link>
            <Link to="/team" className="inline-flex items-center justify-center rounded py-3 text-sm font-medium transition bg-accent px-7 text-ink hover:brightness-95">
              Became An Instructor
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
