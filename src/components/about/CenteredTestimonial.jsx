import { motion } from "framer-motion";
import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import { Reveal } from "../../pages/Home";

/* Round arrow: light grey outline, dark only on hover; stays faint when disabled (start / end) */
function ArrowButton({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-400 transition hover:border-ink hover:text-ink disabled:cursor-default disabled:border-gray-200 disabled:text-gray-300"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" d={dir === "prev" ? "M19 12H5m6-6l-6 6 6 6" : "M5 12h14m-6-6l6 6-6 6"} />
      </svg>
    </button>
  );
}

/* Centered quote slider. Stops at the first / last item; that arrow greys out. Each new quote fades in (keyed remount). */
export default function CenteredTestimonial({ bg = "bg-light", items = testimonials }) {
  const [index, setIndex] = useState(0);
  const t = items[index];

  return (
    <section className={`${bg} py-20 lg:py-28 2xl:py-36`}>
      <Reveal className="container-x text-center">
        <svg className="mx-auto h-24 w-24 text-gray-200 2xl:h-32 2xl:w-32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M10 7c-3.3 0-6 2.7-6 6 0 2.8 2 5 4.5 5 1.9 0 3.5-1.6 3.5-3.5S10.4 11 8.5 11c-.3 0-.6 0-.9.1C8.3 9.3 10 8 12 8V7h-2zm9 0c-3.3 0-6 2.7-6 6 0 2.8 2 5 4.5 5 1.9 0 3.5-1.6 3.5-3.5S19.4 11 17.5 11c-.3 0-.6 0-.9.1.7-1.8 2.4-3.1 4.4-3.1V7h-2z" />
        </svg>
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <blockquote className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed sm:text-2xl 2xl:max-w-5xl 2xl:text-[28px] 2xl:leading-[1.6]">
            “{t.quote}”
          </blockquote>
          <p className="mt-8 text-xl 2xl:mt-10 2xl:text-[26px]">{t.name}</p>
          <p className="mt-2 text-sm uppercase tracking-wider text-muted 2xl:text-lg">{t.role}</p>
        </motion.div>
        <div className="mt-6 flex justify-center gap-3 2xl:mt-8">
          <ArrowButton dir="prev" disabled={index === 0} onClick={() => setIndex((i) => Math.max(0, i - 1))} />
          <ArrowButton dir="next" disabled={index === items.length - 1} onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))} />
        </div>
      </Reveal>
    </section>
  );
}
