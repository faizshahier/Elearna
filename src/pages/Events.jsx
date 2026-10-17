import { Link } from "react-router-dom";
import { events } from "../data/events";
import { unsplash } from "../data/images";
import { formatDate } from "../utils/formatDate";
import { CtaBanner, Reveal, Stagger, StaggerItem } from "./Home";

/*
 * Event card from the design: just the photo by default. On hover (or keyboard focus) the photo
 * shrinks to the top, a date box appears top-right, a yellow "See event details" strip scrolls
 * right → left, and the location • time + title show below. Touch screens always show the details.
 */
const strip = Array.from({ length: 6 }, () => "See event details");
const reveal = "group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100";

function EventCard({ event }) {
  const d = new Date(event.date + "T00:00:00");
  return (
    <Link
      to="/contact"
      aria-label={`${event.title}, ${formatDate(event.date)}. Register via contact page`}
      className="group relative flex aspect-[513/587] flex-col overflow-hidden rounded bg-white"
    >
      {/* photo: full card → top part on hover */}
      <div className="h-full shrink-0 overflow-hidden transition-[height] duration-500 ease-out group-hover:h-[68%] group-focus-visible:h-[68%] [@media(hover:none)]:h-[68%]">
        <img src={event.image} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>

      {/* date box */}
      <span
        className={`absolute right-0 top-0 flex items-center gap-2 rounded-bl bg-white px-5 py-3 opacity-0 transition-opacity duration-300 ${reveal}`}
      >
        <span className="font-heading text-4xl font-medium leading-none">{d.getDate()}</span>
        <span className="text-sm uppercase leading-tight text-muted">
          {d.toLocaleDateString("en-US", { month: "short" })}
          <br />
          {d.getFullYear()}
        </span>
      </span>

      {/* yellow scrolling strip */}
      <div className={`shrink-0 overflow-hidden bg-accent py-2.5 opacity-0 transition-opacity duration-300 ${reveal}`} aria-hidden="true">
        <div className="flex w-max animate-marquee [animation-duration:12s]">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex shrink-0">
              {strip.map((text, i) => (
                <span key={i} className="flex items-center whitespace-nowrap font-heading text-lg font-medium text-ink 2xl:text-xl">
                  {text}
                  <span className="mx-5 text-xs">●</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* location • time + title */}
      <div className={`flex flex-1 flex-col items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 ${reveal}`}>
        <p className="text-sm uppercase tracking-wide text-muted 2xl:text-base">
          {event.location} <span className="mx-2">•</span> {event.time}
        </p>
        <h3 className="mt-3 text-xl font-medium leading-snug 2xl:text-2xl">{event.title}</h3>
      </div>
    </Link>
  );
}

export default function Events() {
  return (
    <>
      {/* photo hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1540575467063-178a50c2df87", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <Reveal className="container-x relative pb-28 pt-[calc(var(--header-h,0px)_+_7rem)] text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_10rem)]">
          <p className="text-sm font-medium uppercase tracking-wider">Enjoy with</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Great upcoming events for our institute</h1>
        </Reveal>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl 2xl:max-w-4xl mx-auto text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider">Our event</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Professional online events</h2>
            <p className="mt-4 leading-relaxed text-muted">Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu scelerisque urna a porttitor. Massa nec ipsum sed etiam et facilisis bibendum.</p>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* min-w-0: stops the long scrolling strip from stretching the phone column */}
            {events.map((e) => (
              <StaggerItem key={e.id} className="min-w-0">
                <EventCard event={e} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Reveal>
        <CtaBanner />
      </Reveal>
    </>
  );
}
