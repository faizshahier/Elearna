import { AnimatePresence, motion } from "framer-motion";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { useState } from "react";
import { testimonials } from "../../data/testimonials";
import ArrowButton from "../ui/ArrowButton";
import SectionHeading from "../ui/SectionHeading";

const stats = [
  { value: "70M", label: "Successful students" },
  { value: "25K", label: "Global job placements" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const go = (step) => setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading light eyebrow="Our testimonials" title="Trusted by our successful students" />
          <div className="mt-10 aspect-[3/2] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={t.image}
                src={t.image}
                alt={t.name}
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Stagger className="flex flex-wrap gap-12">
            {stats.map((s) => (
              <StaggerItem key={s.value} className="flex items-center gap-4">
                <span className="font-heading text-5xl font-semibold text-white">{s.value}</span>
                <span className="h-10 w-px bg-white/40" />
                <span className="max-w-24 text-xs uppercase tracking-wider text-white/50">{s.label}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <AnimatePresence mode="wait">
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="mt-10 text-xl leading-relaxed text-white/60">“{t.quote}”</blockquote>
              <p className="mt-8 text-lg font-medium text-white">{t.name}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/50">{t.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex gap-3">
            <ArrowButton light dir="prev" onClick={() => go(-1)} />
            <ArrowButton light dir="next" onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}
