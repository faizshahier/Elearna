import Button from "../ui/Button";

/*
 * Yellow banner whose bottom half hangs over the footer's doodle background.
 * `top` is the background colour of the page above it. The negative bottom margin
 * pulls the footer up under the banner; Layout gives the footer extra top padding
 * whenever this banner (.cta-overlap) is on the page.
 */
export default function CtaBanner({ top = "bg-white" }) {
  return (
    <section className={`cta-overlap relative z-10 flow-root ${top}`}>
      <div className="mx-auto w-full max-w-[1376px] px-5 sm:px-8 lg:px-12">
        <div className="-mb-24 flex flex-col gap-6 rounded bg-accent px-8 py-12 sm:px-16 md:flex-row md:items-center md:justify-between lg:px-32 lg:py-16">
          <h2 className="max-w-md text-3xl font-medium leading-tight lg:text-[40px]">Are you ready to start your journey?</h2>
          <div className="flex flex-wrap gap-4 lg:gap-9">
            <Button to="/courses" className="lg:h-14 lg:px-14 lg:text-lg">
              Browse Courses
            </Button>
            <Button to="/team" variant="outline" className="lg:h-14 lg:px-14 lg:text-lg">
              Became A Teacher
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
