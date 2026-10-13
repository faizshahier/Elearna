import ContactForm from "../components/contact/ContactForm";
import CtaBanner from "../components/home/CtaBanner";
import PricingFaq from "../components/pricing/PricingFaq";
import SectionHeading from "../components/ui/SectionHeading";
import { unsplash } from "../data/images";

const details = [
  {
    title: "Area location",
    lines: ["410 Sandtown, California", "94001, USA"],
    d: "M3 11l9-7 9 7M5 9.5V20h5v-6h4v6h5V9.5",
  },
  {
    title: "Contact details",
    lines: [
      { label: "888-123-4567", href: "tel:+18881234567" },
      { label: "info@example.com", href: "mailto:info@example.com" },
    ],
    d: "M6 3h10l2 2v16H6zM9 3v18M12 8h3M18 9h2M18 13h2",
  },
  {
    title: "Opening hours",
    lines: ["Monday-Friday", "10:30a.m-7:00p.m"],
    d: "M12 8v5l3 2M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM5 4l2 2M19 4l-2 2",
  },
];

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1531482615713-2afd69097998", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <div className="container-x relative pb-24 pt-28 lg:pb-60 lg:pt-36">
          <h1 className="text-5xl font-semibold text-white sm:text-6xl">Contact us</h1>
        </div>
      </section>

      {/* Intro + form card overlapping the hero */}
      <section className="pb-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 pt-4 lg:order-1 lg:pt-20">
            <SectionHeading
              eyebrow="Contact us"
              title="Are you interested in online learning? Contact us"
              text="Lorem ipsum dolor sit amet consectetur. Neque libero donec hendrerit nam id purus suspendisse. Imperdiet nam lorem tempus in. Tristique nullam risus semper habitant urna nisl nam elit at."
            />
            <p className="mt-10 text-4xl text-ink" style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }} aria-hidden="true">
              Brayden Backham
            </p>
            <p className="mt-3 font-heading text-lg font-medium">Brayden Backham</p>
            <p className="text-xs uppercase tracking-wider text-muted">Director</p>
          </div>

          <div className="relative z-10 order-1 -mt-12 bg-white p-8 shadow-2xl sm:p-10 lg:order-2 lg:-mt-24">
            <h2 className="text-3xl font-semibold">Fill out for contact</h2>
            <p className="mt-3 text-muted">Lorem ipsum dolor sit amet consectetur libero donec.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location details */}
      <section className="pb-20 lg:pb-24">
        <div className="container-x">
          <SectionHeading center eyebrow="Contact details" title="Find our location" />
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:divide-x md:divide-gray-200">
            {details.map((item) => (
              <div key={item.title} className="flex gap-4 md:justify-center md:px-6">
                <svg className="h-9 w-9 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.d} />
                </svg>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  {item.lines.map((line) =>
                    typeof line === "string" ? (
                      <p key={line} className="mt-1 text-sm text-muted">
                        {line}
                      </p>
                    ) : (
                      <a key={line.label} href={line.href} className="mt-1 block text-sm text-muted hover:text-brand-blue">
                        {line.label}
                      </a>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingFaq boxed />
      <CtaBanner />
    </>
  );
}
