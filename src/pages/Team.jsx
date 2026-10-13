import PhotoCta from "../components/course/PhotoCta";
import PageHero from "../components/ui/PageHero";
import InstructorCard from "../components/ui/InstructorCard";
import SectionHeading from "../components/ui/SectionHeading";
import { unsplash } from "../data/images";
import { instructors } from "../data/instructors";

export default function Team() {
  return (
    <>
      <PageHero center image={unsplash("1522071820081-009f0129c71c", 1800)} title="Our experts" />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Contact us"
            title="Know our expert team agents, they solve your questions"
            text="Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id"
          />
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {instructors.map((p) => (
              <InstructorCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
