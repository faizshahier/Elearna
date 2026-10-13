import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import CategoryIcon from "../ui/CategoryIcon";
import SectionHeading from "../ui/SectionHeading";

export default function Categories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Top categories"
            title={
              <>
                Discover leading categories to <br className="hidden sm:block" /> elevate your journey
              </>
            }
          />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 xl:gap-9">
          {categories.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <Link
                to={`/courses?category=${c.filter}`}
                className="group flex h-full flex-col items-center border border-gray-200 bg-white px-4 py-7 text-center transition duration-300 hover:border-transparent hover:shadow-[0_25px_70px_-10px_rgba(15,42,46,0.22)]"
              >
                <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-light text-ink">
                  <CategoryIcon d={c.d} className="h-11 w-11" />
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug xl:text-xl">{c.title}</h3>
                <p className="mt-3 text-muted xl:text-lg">{c.count} Courses</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
