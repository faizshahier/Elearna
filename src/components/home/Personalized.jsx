import { images } from "../../data/images";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

const points = ["Skill-based instruction", "Analytics and insights", "Global certification", "Customizable courses"];

export default function Personalized({ imgOne = images.offerOne, imgTwo = images.offerTwo, variant = "badge" }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* Overlapping images */}
        {variant === "circle" ? (
          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px]">
            <span className="absolute left-[14%] top-0 h-36 w-36 rounded-full bg-accent sm:h-44 sm:w-44" />
            <span className="absolute bottom-0 left-[2%] h-64 w-64 rounded-full border border-gray-200 sm:h-80 sm:w-80" />
            <img src={imgOne} alt="Teacher at a desk" className="absolute left-0 top-[18%] h-[45%] w-[38%] object-cover" />
            <img src={imgTwo} alt="Student learning on a laptop" className="absolute right-0 top-[7%] h-[80%] w-[58%] object-cover" />
          </div>
        ) : (
          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px]">
            <img
              src={imgOne}
              alt="Student studying"
              className="absolute right-0 top-0 h-3/4 w-3/5 object-cover shadow-2xl"
            />
            <img
              src={imgTwo}
              alt="Student on a laptop with headphones"
              className="absolute bottom-0 left-0 h-3/4 w-1/2 object-cover shadow-2xl"
            />
            <div className="absolute left-[12%] top-[8%] flex items-center gap-3 bg-brand-dark px-5 py-3 text-white shadow-lg">
              <span className="font-heading text-4xl font-semibold text-accent">50+</span>
              <span className="text-sm leading-tight">
                Free courses
                <br />
                listed online
              </span>
            </div>
          </div>
        )}

        {/* Text */}
        <div>
          <SectionHeading
            eyebrow="What we offer"
            title="Personalized learning for your ambitions"
            text="Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-5 bg-light p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-medium">Still have questions?</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
            </div>
            <Button to="/contact" className="shrink-0">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
