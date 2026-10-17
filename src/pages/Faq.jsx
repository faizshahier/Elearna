import { useState } from "react";
import PhotoCta from "../components/course/PhotoCta";
import { faqCategories } from "../data/faqs";
import { unsplash } from "../data/images";
import { Reveal } from "./Home";

const accordionStyles = {
  boxed: { list: "space-y-3", item: "bg-light", button: "px-5 py-4", answer: "px-5 text-sm" },
  lined: { list: "border-t border-gray-200", item: "border-b border-gray-200", button: "px-2 py-4 sm:px-7", answer: "px-2 sm:px-7" },
};

/*
 * Question list: one answer open at a time, click "+" to open / close. No hover colour.
 * Also used by the course FAQ tab (variant "boxed") and the Pricing / Contact FAQ (variant "lined").
 * large = roomier rows (this page).
 */
export function Accordion({ items, variant = "boxed", large = false }) {
  const [open, setOpen] = useState(null);
  const s = accordionStyles[variant];

  return (
    <div className={s.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={s.item}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 text-left font-heading text-lg font-medium ${s.button} ${
                large ? "sm:px-8 2xl:py-[18px]" : ""
              }`}
            >
              {item.q}
              <span className={`text-2xl font-light leading-none transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className={`pb-5 leading-relaxed text-muted ${s.answer} ${large ? "sm:px-8" : ""}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Faq() {
  const [active, setActive] = useState(0);
  const category = faqCategories[active];

  return (
    <>
      {/* photo hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1488190211105-8b0e65b80b4e", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <Reveal className="container-x relative pb-28 pt-[calc(var(--header-h,0px)_+_7rem)] text-center text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_10rem)]">
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Frequently asked questions</h1>
          <p className="mx-auto mt-5 max-w-xl text-white/80">Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id</p>
        </Reveal>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14 2xl:grid-cols-[minmax(0,400px)_1fr] 2xl:gap-20">
          <Reveal from="left">
            <nav aria-label="FAQ categories">
              <ul className="self-start divide-y divide-[#dfe7e9] bg-light">
                {faqCategories.map((c, i) => (
                  <li key={c.name}>
                    <button
                      onClick={() => setActive(i)}
                      aria-current={active === i ? "true" : undefined}
                      className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-heading text-base font-medium transition-colors lg:text-lg 2xl:px-8 2xl:py-[18px] 2xl:text-xl ${
                        active === i ? "bg-[#23393f] text-white" : "text-[#71859a]"
                      }`}
                    >
                      {c.name}
                      <span className="text-sm" aria-hidden="true">
                        →
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal>
            <h2 className="sr-only">{category.name}</h2>
            {/* key resets the open question when switching category */}
            <Accordion key={category.name} items={category.items} variant="lined" large />
          </Reveal>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
