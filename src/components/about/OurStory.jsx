import { images, unsplash } from "../../data/images";
import { Reveal, Stagger, StaggerItem } from "../../pages/Home";

const stats = [
  { value: "1.5K", label: "Finish seasons" },
  { value: "7.8K", label: "Enrolled" },
  { value: "100%", label: "Job placement" },
];

/* Dark title hero + story section; the photo overlaps both */
export default function OurStory() {
  return (
    <>
      <section className="bg-doodle pb-28 pt-[calc(var(--header-h,0px)_+_5rem)] text-center text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_7rem)]">
        <Reveal className="container-x">
          <p className="text-sm font-medium uppercase tracking-wider 2xl:text-base">About us</p>
          <h1 className="mx-auto mt-4 max-w-2xl text-4xl font-semibold leading-[1.15] sm:text-6xl 2xl:mt-6 2xl:text-[64px]">
            You’re sincerely determined to grow
          </h1>
        </Reveal>
      </section>

      <section className="pb-20">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal from="left" className="relative -mt-16 lg:-mt-24">
            <img
              src={unsplash("1543269865-cbf427effbad", 1000)}
              alt="Two students studying together"
              className="aspect-[4/4.2] w-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-10 right-4 rounded-3xl bg-white px-6 py-4 text-center shadow-xl sm:right-10">
              <p className="text-sm text-muted">Trusted By</p>
              <p className="mt-1 font-medium">15000+ enrolled students</p>
              <div className="mt-2 flex justify-center -space-x-2">
                {images.avatars.map((src) => (
                  <img key={src} src={src} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <p className="mt-2 text-sm text-muted">
                <span className="text-accent">★★★★★</span> 4.94 (625)
              </p>
            </div>
          </Reveal>

          <Reveal className="pt-8 lg:pt-24">
            <div className="max-w-2xl 2xl:max-w-4xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider">Our story</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Limitless learning and get more possibilities</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Lorem ipsum dolor sit amet consectetur. Sed ac non suspendisse in maecenas scelerisque imperdiet nec. Pellentesque mauris amet
                ligula eget malesuada ullamcorper nibh. Etiam suspendisse pretium est elementum elementum rhoncus.
              </p>
            </div>
            <Stagger className="mt-10 flex flex-wrap gap-y-6 divide-gray-300 sm:divide-x">
              {stats.map((s) => (
                <StaggerItem key={s.label} className="pr-8 first:pl-0 sm:px-8">
                  <p className="font-heading text-4xl font-semibold sm:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider">{s.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </Reveal>
        </div>
      </section>
    </>
  );
}
