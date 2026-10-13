import { Link } from "react-router-dom";
import CtaBanner from "../components/home/CtaBanner";
import PageHero from "../components/ui/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import { events } from "../data/events";
import { unsplash } from "../data/images";
import { formatDate } from "../utils/formatDate";

/* Photo tile; event details slide up on hover / keyboard focus (always shown on touch screens) */
function EventCard({ event }) {
  const d = new Date(event.date + "T00:00:00");
  return (
    <Link
      to="/contact"
      aria-label={`${event.title}, ${formatDate(event.date)}. Register via contact page`}
      className="group relative block aspect-[4/5] overflow-hidden bg-brand-dark"
    >
      <img src={event.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />

      <span className="absolute left-5 top-5 rounded bg-white px-3 py-2 text-center leading-none shadow">
        <span className="block font-heading text-2xl font-semibold">{d.getDate()}</span>
        <span className="mt-1 block text-[11px] uppercase tracking-wider text-muted">
          {d.toLocaleDateString("en-US", { month: "short" })}
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-16 text-white transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0 [@media(hover:none)]:translate-y-0">
        <p className="text-xs uppercase tracking-wider text-accent">{event.location}</p>
        <h3 className="mt-2 text-xl font-semibold leading-snug">{event.title}</h3>
        <p className="mt-2 text-sm text-white/70">
          {formatDate(event.date)} · {event.time}
        </p>
        <span className="mt-4 inline-block rounded bg-accent px-4 py-2 text-sm font-medium text-ink">Register now</span>
      </div>
    </Link>
  );
}

export default function Events() {
  return (
    <>
      <PageHero image={unsplash("1540575467063-178a50c2df87", 1800)} eyebrow="Enjoy with" title="Great upcoming events for our institute" />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Our event"
            title="Professional online events"
            text="Lorem ipsum dolor sit amet consectetur. Congue sit pellentesque eu scelerisque urna a porttitor. Massa nec ipsum sed etiam et facilisis bibendum."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
