import { useState } from "react";

const styles = {
  boxed: { list: "space-y-3", item: "bg-light", button: "px-5 py-4" },
  lined: { list: "border-t border-gray-200", item: "border-b border-gray-200", button: "px-2 py-4 sm:px-7" },
};

/* items: [{ q, a }] — one item open at a time. variant: "boxed" | "lined" */
export default function Accordion({ items, defaultOpen = null, variant = "boxed" }) {
  const [open, setOpen] = useState(defaultOpen);
  const s = styles[variant];

  return (
    <div className={s.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={s.item}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-4 text-left font-heading text-lg font-medium transition-colors hover:text-brand-blue ${s.button}`}
            >
              {item.q}
              <span className={`text-2xl font-light leading-none transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                +
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className={`pb-5 leading-relaxed text-muted ${variant === "lined" ? "px-2 sm:px-7" : "px-5 text-sm"}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
