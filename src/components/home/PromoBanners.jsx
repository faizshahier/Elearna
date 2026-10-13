import { images } from "../../data/images";
import Button from "../ui/Button";

export default function PromoBanners() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-x grid gap-6 lg:grid-cols-2">
        <div className="relative flex min-h-64 items-center overflow-hidden bg-light">
          <img
            src={images.promoLaptop}
            alt="Student learning on a laptop"
            className="absolute inset-y-0 right-0 h-full w-1/2 object-cover"
          />
          <div className="relative z-10 max-w-[55%] p-8 sm:p-10">
            <h3 className="text-2xl font-medium leading-snug">Quick access to the popular courses</h3>
            <Button to="/courses" variant="accent" className="mt-6">
              View Courses
            </Button>
          </div>
        </div>

        <div className="flex min-h-64 items-center gap-6 bg-cream p-8 sm:p-10">
          <div className="flex-1">
            <h3 className="text-2xl font-medium leading-snug">Develop your skills online!</h3>
            <Button to="/contact" className="mt-6">
              Apply Now
            </Button>
          </div>
          <div className="relative hidden w-1/2 overflow-hidden rounded-xl sm:block">
            <img src={images.promoVideoCall} alt="Online video lesson" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
              <span className="h-6 w-6 rounded-full bg-green-500" />
              <span className="h-6 w-6 rounded-full bg-white" />
              <span className="h-6 w-6 rounded-full bg-white" />
              <span className="h-6 w-6 rounded-full bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
