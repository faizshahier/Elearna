import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import ArrowButton from "../ui/ArrowButton";

export default function CenteredTestimonial({ bg = "bg-light" }) {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (step) => setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  return (
    <section className={`${bg} py-20 lg:py-28`}>
      <div className="container-x text-center">
        <svg className="mx-auto h-24 w-24 text-gray-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M10 7c-3.3 0-6 2.7-6 6 0 2.8 2 5 4.5 5 1.9 0 3.5-1.6 3.5-3.5S10.4 11 8.5 11c-.3 0-.6 0-.9.1C8.3 9.3 10 8 12 8V7h-2zm9 0c-3.3 0-6 2.7-6 6 0 2.8 2 5 4.5 5 1.9 0 3.5-1.6 3.5-3.5S19.4 11 17.5 11c-.3 0-.6 0-.9.1.7-1.8 2.4-3.1 4.4-3.1V7h-2z" />
        </svg>
        <blockquote className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed sm:text-2xl">“{t.quote}”</blockquote>
        <p className="mt-8 text-xl">{t.name}</p>
        <p className="mt-1 text-sm uppercase tracking-wider text-muted">{t.role}</p>
        <div className="mt-6 flex justify-center gap-3">
          <ArrowButton dir="prev" onClick={() => go(-1)} />
          <ArrowButton dir="next" onClick={() => go(1)} />
        </div>
      </div>
    </section>
  );
}
