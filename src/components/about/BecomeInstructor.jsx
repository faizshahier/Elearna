import { images, unsplash } from "../../data/images";
import Button from "../ui/Button";

export default function BecomeInstructor() {
  return (
    <section className="overflow-hidden py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1 lg:text-right">
          <h2 className="text-4xl font-semibold sm:text-5xl">Became an instructor</h2>
          <p className="mt-5 leading-relaxed text-muted lg:ml-auto lg:max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Sed ultricies fames scelerisque urna quis semper amet. Nisl tincidunt
            tortor nullam est nec commodo orci dictum in. Lorem consectetur donec purus sagittis.
          </p>
          <Button to="/contact" className="mt-8 px-10">
            Start Teaching Today
          </Button>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
          <div className="aspect-square overflow-hidden rounded-full border-[16px] border-accent bg-accent">
            <img
              src={unsplash("1531123897727-8f129e1688ce", 800) + "&crop=faces"}
              alt="Smiling instructor"
              className="h-full w-full object-cover"
            />
          </div>
          {/* dark arc hugging the right edge of the circle */}
          <svg className="pointer-events-none absolute -inset-[6%] h-[112%] w-[112%]" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M74 7.5 A47 47 0 0 1 74 92.5" fill="none" stroke="#0f2a2e" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div className="absolute -left-4 top-10 rounded-full bg-white px-5 py-3 shadow-xl sm:-left-10">
            <div className="flex -space-x-2">
              {images.avatars.map((src) => (
                <img key={src} src={src} alt="" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <p className="mt-1 text-sm text-muted">
              <span className="text-accent">★★★★★</span> 4.94 (625)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
