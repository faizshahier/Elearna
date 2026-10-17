import PhotoCta from "../components/course/PhotoCta";
import { unsplash } from "../data/images";
import { instructors } from "../data/instructors";
import { Reveal, Stagger, StaggerItem } from "./Home";

/* Instructor photo card (also used by the course Instructor tab) */
export function InstructorCard({ person }) {
  return (
    <div className="group text-center">
      <div className="overflow-hidden rounded bg-gradient-to-b from-gray-200 to-light">
        <img src={person.image} alt={person.name} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <p className="mt-3 font-heading text-lg font-medium">{person.name}</p>
      <p className="text-xs uppercase tracking-wider text-muted">{person.role}</p>
    </div>
  );
}

export default function Team() {
  return (
    <>
      {/* photo hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1522071820081-009f0129c71c", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <Reveal className="container-x relative pb-28 pt-[calc(var(--header-h,0px)_+_7rem)] text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_10rem)] text-center">
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Our experts</h1>
        </Reveal>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl 2xl:max-w-4xl mx-auto text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider">Contact us</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Know our expert team agents, they solve your questions</h2>
            <p className="mt-4 leading-relaxed text-muted">Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id</p>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {instructors.map((p) => (
              <StaggerItem key={p.name}>
                <InstructorCard person={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
