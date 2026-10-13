import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    title: "Learn anything",
    d: "M4 4h4v16H4zM9 4h4v16H9zM14 5l3.5-1 3 15.5-3.5 1z",
  },
  { title: "Save money", d: "M4 8h14a2 2 0 0 1 2 2v8H4zM4 8l10-4 2 4M16 13h2" },
  {
    title: "Flexible courses",
    d: "M6 3h12v14H6zM9 7h6M9 10h6M9 17v4l3-2 3 2v-4",
  },
  {
    title: "Unlimited certificate",
    d: "M12 3l2.4 1.8 3-.2.9 2.8 2.4 1.8-1 2.8 1 2.8-2.4 1.8-.9 2.8-3-.2L12 21l-2.4-1.8-3 .2-.9-2.8-2.4-1.8 1-2.8-1-2.8 2.4-1.8.9-2.8 3 .2zM9 12l2 2 4-4",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Why we are"
            title="Elevate your professional journey"
            text="Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title} className="text-center">
              <svg
                className="mx-auto h-9 w-9 text-ink"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.1}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={f.d} />
              </svg>
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Lorem ipsum dolor sit amet conse non quis id viverra id proin.
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
