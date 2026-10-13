import { useState } from "react";
import PhotoCta from "../components/course/PhotoCta";
import Accordion from "../components/ui/Accordion";
import PageHero from "../components/ui/PageHero";
import { faqCategories } from "../data/faqs";
import { unsplash } from "../data/images";

export default function Faq() {
  const [active, setActive] = useState(0);
  const category = faqCategories[active];

  return (
    <>
      <PageHero
        center
        image={unsplash("1488190211105-8b0e65b80b4e", 1800)}
        title="Frequently asked questions"
        text="Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id"
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-24">
          <nav aria-label="FAQ categories">
            <ul className="bg-light">
              {faqCategories.map((c, i) => (
                <li key={c.name}>
                  <button
                    onClick={() => setActive(i)}
                    aria-current={active === i ? "true" : undefined}
                    className={`flex w-full items-center justify-between gap-4 px-7 py-5 text-left font-heading text-lg font-medium transition ${
                      active === i ? "bg-brand-dark text-white" : "text-ink/60 hover:text-ink"
                    }`}
                  >
                    {c.name}
                    <span aria-hidden="true">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="sr-only">{category.name}</h2>
            {/* key resets the open question when switching category */}
            <Accordion key={category.name} items={category.items} variant="lined" />
          </div>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
