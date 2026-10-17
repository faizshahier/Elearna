import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal, Stagger, StaggerItem } from "../../pages/Home";

const steps = ["Flexibility and convenience", "Course accessibility", "Cost-effectiveness", "Personalized learning"];

/*
 * Four numbered cards in a row. The active card (02 by default, then whichever the mouse
 * is over / is tapped / gets keyboard focus) rises above the others and reveals "Get Started".
 */
export default function WhySteps() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center 2xl:max-w-4xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider 2xl:text-base">Why we are</p>
          <h2 className="text-2xl font-medium leading-snug sm:text-4xl 2xl:text-[44px]">
            We believe in our good education and development system and we know how to work together to reach greater
            success
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid items-start sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {steps.map((title, i) => {
            const on = active === i;
            return (
              <StaggerItem key={title}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative bg-white px-8 py-10 transition-[translate,box-shadow] duration-300 lg:px-8 lg:py-14 ${
                    on
                      ? "z-10 shadow-[0_30px_70px_-20px_rgba(15,42,46,0.25)] lg:-translate-y-11"
                      : "shadow-[0_25px_50px_-35px_rgba(15,42,46,0.3)]"
                  }`}
                >
                  <p className="font-heading text-4xl font-medium text-brand-blue 2xl:text-[40px]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-medium 2xl:mt-5 2xl:text-[23px]">{title}</h3>
                  <p className="mt-4 leading-relaxed text-muted 2xl:mt-6 2xl:text-lg 2xl:leading-[1.8]">
                    Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque
                    risus.
                  </p>
                  {/* "Get Started" slides open on the active card */}
                  <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <Link
                        to="/courses"
                        tabIndex={on ? 0 : -1}
                        className="mt-8 inline-flex items-center justify-center rounded py-3 text-sm font-medium transition bg-brand-dark px-7 text-white hover:bg-brand-darker lg:h-14 lg:px-12 lg:text-base 2xl:mt-11"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
