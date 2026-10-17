import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const columns = [
  {
    title: "Quick links",
    links: [
      { label: "Home", to: "/" },
      { label: "Events", to: "/events" },
      { label: "Career", to: "/career" },
      { label: "Instructor", to: "/team" },
    ],
  },
  {
    title: "Popular courses",
    links: [
      { label: "Finance", to: "/courses?category=Finance" },
      { label: "Management", to: "/courses?category=Management" },
      { label: "Design", to: "/courses?category=Design" },
      { label: "Web development", to: "/courses?category=Development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Courses", to: "/courses" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
      { label: "License", to: "/faq" },
      { label: "Pricing", to: "/pricing" },
      { label: "404", to: "/*" },
    ],
  },
  {
    title: "CMS",
    links: [
      { label: "Course details", to: "/courses/1" },
      { label: "Instructor details", to: "/team" },
      { label: "Blog details", to: "/blog/improve-knowledge-retention-with-visual-learning" },
    ],
  },
];

/* "help" footer (course, about, pricing, blog, team, FAQ designs): no Quick links, no 404, plus a Need help? column */
const helpColumns = columns
  .filter((col) => col.title !== "Quick links")
  .map((col) => ({ ...col, links: col.links.filter((l) => l.label !== "404") }));

function NeedHelp() {
  return (
    // full width on phones: the email is too long for a half-width column
    <div className="col-span-2 sm:col-span-1">
      <h2 className="font-heading text-xl font-semibold text-white lg:text-2xl">Need help?</h2>
      <p className="mt-6 text-lg tracking-wide lg:mt-8 lg:text-xl">Call us</p>
      <a href="tel:+18881234567" className="mt-1 block font-heading text-xl font-semibold text-white hover:text-accent lg:text-2xl">
        (888) 123 4567
      </a>
      <p className="mt-7 text-lg tracking-wide lg:text-xl">Need support?</p>
      <a href="mailto:info@example.com" className="mt-1 block font-heading text-xl font-semibold text-white hover:text-accent lg:text-2xl">
        info@example.com
      </a>
    </div>
  );
}

/* Top padding comes from --footer-pt, which Layout raises when the yellow
   CtaBanner hangs over the top of the footer. Layout picks the variant per page. */
export default function Footer({ variant = "default" }) {
  const shown = variant === "help" ? helpColumns : columns;
  return (
    <footer className="bg-doodle text-[#7b7c7d] p-8">
      <div className="mx-auto grid w-full max-w-[1632px] grid-cols-2 gap-x-6 gap-y-12 px-4 pb-16 pt-[var(--footer-pt,5rem)] sm:gap-x-8 sm:px-6 lg:grid-cols-[1.75fr_1fr_1.25fr_1fr_auto] lg:px-8 lg:pb-24">
        <div className="col-span-2 lg:col-span-1">
          <img src={logo} alt="Elearna" className="h-8 w-auto" />
          <p className="mt-7 max-w-[330px] text-lg leading-[1.85] lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis eget amet ut tristique cras.
          </p>
        </div>

        {shown.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-heading text-xl font-semibold text-white lg:text-2xl">{col.title}</h2>
            <ul className="mt-6 space-y-4 text-lg lg:mt-8 lg:space-y-5 lg:text-xl">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="tracking-wide transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        {variant === "help" && <NeedHelp />}
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1632px] flex-col gap-2 px-4 py-7 text-sm uppercase tracking-wider sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} <span className="text-white">Elearna</span>. All rights reserved
          </p>
          <p>
            Built with <span className="text-white">React &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
