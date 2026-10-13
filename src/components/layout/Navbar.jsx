import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const navItems = [
  {
    label: "Home",
    children: [
      { label: "Home", to: "/" },
    ],
  },
  {
    label: "Courses",
    children: [
      { label: "All Courses", to: "/courses" },
      { label: "Course Details", to: "/courses/1" },
    ],
  },
  {
    label: "Pages",
    children: [
      { label: "About ", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Events", to: "/events" },
      { label: "Pricing", to: "/pricing" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    label: "Blog",
    children: [
      { label: "All Posts", to: "/blog" },
      { label: "Blog Details", to: "/blog/improve-knowledge-retention-with-visual-learning" },
    ],
  },
  {
    label: "Contact",
    children: [
      { label: "Contact Us", to: "/contact" },
      { label: "Login", to: "/login" },
      { label: "Register", to: "/register" },
    ],
  },
];

const linkClass = ({ isActive }) =>
  `transition-colors hover:text-accent ${isActive ? "text-accent" : "text-white"}`;

function Chevron() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  );
}

/* A dropdown parent is "active" when the current page is one of its children */
const isGroupActive = (item, pathname) =>
  item.children.some((c) => pathname === c.to || (c.to !== "/" && pathname.startsWith(c.to + "/")));

const childClass = ({ isActive }) =>
  `block rounded-md px-3 py-2 hover:bg-light hover:text-brand-dark ${isActive ? "bg-light font-semibold text-brand-dark" : "text-ink"}`;

/* Cart icon with item count (no cart yet, so it always shows 0) */
function CartLink({ onClick }) {
  return (
    <Link to="/courses" onClick={onClick} aria-label="Cart, 0 items" className="relative text-white hover:text-accent">
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3} aria-hidden="true">
        <path strokeLinejoin="round" d="M5 8h14l-1.2 13H6.2L5 8z" />
        <path strokeLinecap="round" d="M9 10V6.5a3 3 0 0 1 6 0V10" />
      </svg>
      <span className="absolute -right-3.5 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm text-ink">
        0
      </span>
    </Link>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const close = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-dark">
      <nav className="flex h-20 items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-3">
        <Link to="/" onClick={close} className="shrink-0">
          <img src={logo} alt="Elearna" className="h-8 w-auto" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-7 text-lg font-medium lg:flex xl:gap-12 xl:text-xl 2xl:gap-14">
          {navItems.map((item) => (
            <li key={item.label} className="group relative">
              <button
                aria-haspopup="true"
                className={`flex items-center gap-2 py-7 transition-colors hover:text-accent ${
                  isGroupActive(item, pathname) ? "text-accent" : "text-white"
                }`}
              >
                {item.label} <Chevron />
              </button>
              <ul className="invisible absolute left-0 top-full w-52 translate-y-2 rounded-lg bg-white p-2 text-sm opacity-0 shadow-xl transition-[opacity,translate] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {item.children.map((child) => (
                  <li key={child.to}>
                    <NavLink to={child.to} end className={childClass}>
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="hidden items-center justify-end gap-8 text-lg font-medium text-white lg:flex xl:gap-14 xl:text-xl">
          <CartLink />
          <div className="flex items-center">
            <Link to="/login" className="pr-3 hover:text-accent">
              Login
            </Link>
            <span className="h-7 w-px bg-white/80" aria-hidden="true" />
            <Link to="/register" className="pl-3 hover:text-accent">
              Register
            </Link>
          </div>
        </div>

        {/* Mobile cart + toggle */}
        <div className="flex items-center gap-6 lg:hidden">
          <CartLink onClick={close} />
          <button
            className="text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-dark lg:hidden">
          <ul className="container-x flex flex-col py-4 text-white">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  className={`flex w-full items-center justify-between py-3 ${isGroupActive(item, pathname) ? "text-accent" : ""}`}
                  aria-expanded={openGroup === item.label}
                  onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                >
                  {item.label} <Chevron />
                </button>
                {openGroup === item.label && (
                  <ul className="mb-2 border-l border-white/20 pl-4">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} end onClick={close} className={linkClass}>
                          <span className="block py-2 text-sm">{child.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mt-3 flex gap-3">
              <Link to="/login" onClick={close} className="flex-1 rounded-md border border-white/30 py-2 text-center">
                Login
              </Link>
              <Link to="/register" onClick={close} className="flex-1 rounded-md bg-accent py-2 text-center text-ink">
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
