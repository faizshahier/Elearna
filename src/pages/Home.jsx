import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroArt from "../assets/hero-student.webp";
import { categories } from "../data/categories";
import { courseCategories, courses, formatPrice } from "../data/courses";
import { images } from "../data/images";
import { testimonials } from "../data/testimonials";

/*
 * Home page. Every Home section lives in this file.
 * A few pieces are also used by other pages and are exported from here:
 * CtaBanner, Partners, Personalized, CourseCard, CategoryIcon,
 * and the motion helpers Reveal, Stagger, StaggerItem (scroll animations on every page).
 */

/* ===================== small helpers ===================== */

/* Framer Motion: reveal once when ~20% of the element is on screen */
const ease = [0.22, 1, 0.36, 1];
const viewport = { once: true, amount: 0.2 };
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/* Fade + slide one block into view (from below, or from the left) */
export function Reveal({ children, from = "up", className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...(from === "left" ? { x: -60 } : { y: 40 }) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </Tag>
  );
}

/* Reveals its <StaggerItem> children one after another */
export function Stagger({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* Small eyebrow + section title (+ optional text) */
function Heading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={`max-w-2xl 2xl:max-w-4xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`mb-3 text-xs font-medium uppercase tracking-wider ${light ? "text-white" : "text-ink"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 leading-relaxed ${light ? "text-white/60" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

const btn = "inline-flex items-center justify-center rounded px-7 py-3 text-sm font-medium transition";
const btnDark = `${btn} bg-brand-dark text-white hover:bg-brand-darker`;
const btnAccent = `${btn} bg-accent text-ink hover:brightness-95`;
const btnOutline = `${btn} border border-ink text-ink hover:bg-ink hover:text-white`;

function Stars({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted">
      <div className="flex text-accent" aria-label={`Rated ${rating} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        ))}
      </div>
      <span>
        {rating.toFixed(2)} ({reviews})
      </span>
    </div>
  );
}

function PriceBadge({ price, className = "" }) {
  return (
    <span className={`flex items-center justify-center rounded-full bg-brand-blue font-medium text-white ${className}`}>{formatPrice(price)}</span>
  );
}

/* Outline icon for a course category (24x24 path from data/categories) */
export function CategoryIcon({ d, className = "h-7 w-7" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}

/* ===================== course cards ===================== */

const cardBtn = "flex h-12 flex-1 items-center justify-center rounded text-base transition";
const detailsBtn = `${cardBtn} bg-accent text-ink hover:brightness-95`;
const enrollBtn = `${cardBtn} bg-brand-dark text-white hover:bg-brand-darker`;

/*
 * Course grid card (Home + Courses pages). On hover the card lifts, the price badge grows and the
 * Lessons / Enrolled row swaps for "Course Details" (+ "Enroll" for paid courses).
 * Touch screens have no hover, so they keep the Lessons / Enrolled row.
 */
export function CourseCard({ course }) {
  const to = `/courses/${course.id}`;
  return (
    <div className="group flex h-full flex-col bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,42,46,0.35)] focus-within:shadow-[0_30px_60px_-25px_rgba(15,42,46,0.35)]">
      <div className="relative">
        <Link to={to} tabIndex={-1} className="block aspect-[16/10] overflow-hidden">
          <img src={course.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </Link>
        <PriceBadge
          price={course.price}
          className="absolute -bottom-9 right-7 h-[72px] w-[72px] text-lg transition-transform duration-300 group-hover:scale-[1.2]"
        />
      </div>

      <div className="flex flex-1 flex-col px-7 pt-10">
        <p className="text-xs font-medium uppercase tracking-wider">{course.category}</p>
        <h3 className="mt-4 text-xl font-medium leading-snug lg:text-2xl">
          <Link to={to} className="hover:text-brand-blue">
            {course.title}
          </Link>
        </h3>
        <div className="mt-5">
          <Stars rating={course.rating} reviews={course.reviews} />
        </div>
        <div className="flex-1" />

        <div className="relative mt-7 border-t border-gray-100">
          {/* default: lessons + enrolled */}
          <div className="grid grid-cols-2 py-5 text-base transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-0 [@media(hover:hover)]:group-focus-within:opacity-0">
            <span className="flex items-center justify-center gap-3 border-r border-gray-100">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M4 2h10a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V2zm2 12v2h8v-2H6z" />
              </svg>
              {course.lessons} Lessons
            </span>
            <span className="flex items-center justify-center gap-3">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 8a7 7 0 0 1 14 0H3z" />
              </svg>
              {course.enrolled} Enrolled
            </span>
          </div>

          {/* hover: action buttons */}
          <div className="invisible absolute inset-x-0 top-3 flex gap-8 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:visible [@media(hover:hover)]:group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <Link to={to} className={detailsBtn}>
              Course Details
            </Link>
            {course.price > 0 && (
              <Link to="/register" className={enrollBtn}>
                Enroll
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 * Compact card for "Explore our top programs". On hover the card darkens and a white details
 * panel pops out beside it (desktop only). popupSide="left" flips the panel for the last column.
 */
function CourseCardCompact({ course, popupSide = "right" }) {
  const to = `/courses/${course.id}`;
  return (
    <div className="group relative h-full hover:z-20 focus-within:z-20">
      <Link to={to} className="flex h-full flex-col overflow-hidden bg-white transition-colors duration-300 group-hover:bg-brand-darker">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={course.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105 lg:group-hover:brightness-50"
          />
          <PriceBadge price={course.price} className="absolute right-4 top-4 h-[72px] w-[72px] text-lg" />
        </div>
        <div className="flex flex-1 flex-col p-6 lg:p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-muted transition-colors lg:group-hover:text-white/80">{course.category}</p>
          <h3 className="mt-3 text-lg font-medium leading-snug transition-colors lg:text-xl lg:group-hover:text-white">{course.title}</h3>
          <div className="mt-auto pt-5">
            <Stars rating={course.rating} reviews={course.reviews} />
          </div>
        </div>
      </Link>

      {/* pop-out details panel */}
      <div
        className={`invisible absolute top-[2%] z-30 hidden w-[116%] translate-y-2 bg-white px-7 py-6 opacity-0 shadow-[0_30px_70px_-20px_rgba(15,42,46,0.35)] transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 lg:block xl:px-8 ${
          popupSide === "left" ? "right-[27%]" : "left-[27%]"
        }`}
      >
        <h4 className="text-lg font-medium leading-snug xl:text-xl">{course.title}</h4>
        <p className="mt-2 text-xs uppercase tracking-wider text-muted">
          • {course.lessons} Lessons • {course.enrolled} Enrolled
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse imperdiet.</p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          {["Lorem ipsum dolor sit amet consectetur", "Lorem ipsum dolor", "Lorem ipsum dolor sit"].map((t) => (
            <li key={t} className="flex items-start gap-2.5 leading-snug">
              <svg className="mt-0.5 h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12.5l5 5L20 6.5" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-3 [&>a]:h-10 [&>a]:text-sm">
          <Link to={to} tabIndex={-1} className={detailsBtn}>
            Course Details
          </Link>
          {course.price > 0 && (
            <Link to="/register" tabIndex={-1} className={enrollBtn}>
              Enroll
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ===================== shared sections (also used by other pages) ===================== */

/* Partner logos drawn with text + simple shapes (swap for real logo images later) */
const logos = [
  {
    name: "Carla Textural",
    logo: (
      <div className="relative px-12 py-1">
        <span className="absolute inset-y-3 left-0 w-3 border-y border-l border-current" />
        <span className="absolute inset-y-3 right-0 w-3 border-y border-r border-current" />
        <p className="font-sans text-4xl font-bold leading-none">
          <span className="mr-1 text-base">✦</span>Carla
        </p>
        <p className="mt-1 text-center font-serif text-[10px] tracking-[0.4em]">TEXTURAL</p>
      </div>
    ),
  },
  {
    name: "Shopia Fashion Hub",
    logo: (
      <div className="text-center">
        <p className="font-serif text-[44px] font-bold leading-none">Shopia</p>
        <p className="mt-1 flex items-center gap-3 text-[10px] tracking-[0.35em]">
          <span className="h-px w-8 bg-current" /> FASHION HUB <span className="h-px w-8 bg-current" />
        </p>
      </div>
    ),
  },
  {
    name: "Leafe Fashion",
    logo: (
      <div>
        <p className="flex items-center text-4xl font-semibold leading-none tracking-[0.15em]">
          LE
          <svg className="mx-0.5 h-14 w-10" viewBox="0 0 40 56" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M36 4C14 6 4 22 8 40c18-2 28-18 28-36zM8 40L3 54M12 34L30 12" />
          </svg>
          FE
        </p>
        <p className="-mt-2 text-right text-xs font-semibold tracking-wider">FASHION</p>
      </div>
    ),
  },
  { name: "Concluas", logo: <p className="border-2 border-current px-6 py-3.5 text-xl font-bold tracking-[0.25em]">CONCLUAS</p> },
  {
    name: "A&H Fashion Store",
    logo: (
      <div className="text-center">
        <p className="font-serif text-5xl font-light leading-none tracking-tight">A&amp;H</p>
        <p className="mx-auto mt-1 w-fit border border-current px-1 font-serif text-[8px] tracking-[0.2em]">FASHION STORE</p>
      </div>
    ),
  },
  {
    name: "B.",
    logo: (
      <p className="flex items-center font-serif text-4xl font-bold">
        <span className="mr-1 inline-block h-7 w-7 rounded-full bg-current" />B.
      </p>
    ),
  },
];

/*
 * Endless auto-scrolling logo strip, moving right → left (Home, About, Pricing).
 * The list is rendered twice inside one track; the track slides by -50% and loops.
 * Hover pauses it; people who prefer reduced motion get a still row.
 */
export function Partners({ dark = false }) {
  const set = (copy) =>
    logos.map(({ name, logo }) => (
      <li
        key={copy + name}
        aria-hidden={copy === "b" ? true : undefined}
        className={`flex shrink-0 items-center px-12 transition-colors ${dark ? "hover:text-white/70" : "hover:text-gray-600"}`}
      >
        <span className="sr-only">{name}</span>
        <span aria-hidden="true">{logo}</span>
      </li>
    ));

  return (
    <section className={`py-12 ${dark ? "bg-brand-dark" : "bg-light"}`}>
      <p className={`container-x text-center text-lg ${dark ? "text-white/60" : "text-ink"}`}>Learn from 350+ leading universities and companies with us</p>
      <div
        className={`group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${
          dark ? "text-white/35" : "text-gray-400"
        }`}
      >
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {set("a")}
          {set("b")}
        </ul>
      </div>
    </section>
  );
}

const offerPoints = ["Skill-based instruction", "Analytics and insights", "Global certification", "Customizable courses"];

/* "Personalized learning" (Home: photos + 50+ badge; About: variant="circle" with yellow circle) */
export function Personalized({ imgOne = images.offerOne, imgTwo = images.offerTwo, variant = "badge" }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {variant === "circle" ? (
          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px]">
            <span className="absolute left-[14%] top-0 h-36 w-36 rounded-full bg-accent sm:h-44 sm:w-44" />
            <span className="absolute bottom-0 left-[2%] h-64 w-64 rounded-full border border-gray-200 sm:h-80 sm:w-80" />
            <img src={imgOne} alt="Teacher at a desk" className="absolute left-0 top-[18%] h-[45%] w-[38%] object-cover" />
            <img src={imgTwo} alt="Student learning on a laptop" className="absolute right-0 top-[7%] h-[80%] w-[58%] object-cover" />
          </div>
        ) : (
          <div className="relative mx-auto h-[420px] w-full max-w-lg sm:h-[520px]">
            <img src={imgOne} alt="Student studying" className="absolute right-0 top-0 h-3/4 w-3/5 object-cover shadow-2xl" />
            <img src={imgTwo} alt="Student on a laptop with headphones" className="absolute bottom-0 left-0 h-3/4 w-1/2 object-cover shadow-2xl" />
            <div className="absolute left-[12%] top-[8%] flex items-center gap-3 bg-brand-dark px-5 py-3 text-white shadow-lg">
              <span className="font-heading text-4xl font-semibold text-accent">50+</span>
              <span className="text-sm leading-tight">
                Free courses
                <br />
                listed online
              </span>
            </div>
          </div>
        )}

        <div>
          <Heading
            eyebrow="What we offer"
            title="Personalized learning for your ambitions"
            text="Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
          />
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {offerPoints.map((p) => (
              <li key={p} className="flex items-center gap-3 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-5 bg-light p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-medium">Still have questions?</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.</p>
            </div>
            <Link to="/contact" className={`${btnDark} shrink-0`}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * Yellow banner whose bottom half hangs over the footer's doodle background (Home, Courses, Events, Contact).
 * `top` is the background colour of the page above it. Layout gives the footer extra top padding
 * whenever this banner (.cta-overlap) is on the page.
 */
export function CtaBanner({ top = "bg-white" }) {
  return (
    <section className={`cta-overlap relative z-10 flow-root ${top}`}>
      <div className="container-x">
        <div className="-mb-24 flex flex-col gap-6 rounded bg-accent px-8 py-12 sm:px-16 md:flex-row md:items-center md:justify-between lg:px-16 lg:py-16 2xl:px-32">
          <h2 className="max-w-md text-3xl font-medium leading-tight lg:text-[40px]">Are you ready to start your journey?</h2>
          <div className="flex shrink-0 flex-wrap gap-4 xl:gap-9">
            <Link to="/courses" className={`${btnDark} lg:h-14 lg:px-14 lg:text-lg`}>
              Browse Courses
            </Link>
            <Link to="/team" className={`${btnOutline} lg:h-14 lg:px-14 lg:text-lg`}>
              Became A Teacher
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== Home-only sections ===================== */

/* Gentle up-and-down bob for the floating hero cards */
const float = (delay) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
});

/*
 * Hero. The student artwork (assets/hero-student.webp) comes from the design; the two cards are real
 * HTML laid on top of it. Sizes / positions are % and cqw of the artwork, so they stay lined up.
 */
function Hero() {
  return (
    <section className="bg-doodle overflow-hidden">
      <div className="mx-auto grid max-w-[1920px] items-center gap-10 lg:grid-cols-[1060fr_860fr] lg:gap-0">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease }}
          className="@container relative aspect-[1060/1141] w-full"
        >
          <img src={heroArt} alt="Smiling student with glasses holding books" className="absolute inset-0 h-full w-full" fetchPriority="high" />
          {/* yellow dot sits inside the image's soft right edge, so it is drawn here at full strength */}
          <span className="absolute left-[93.21%] top-[54.78%] h-[1.98cqw] w-[1.98cqw] rounded-full bg-accent" aria-hidden="true" />

          {/* 125+ Achievement awards */}
          <motion.div
            {...float(0)}
            className="absolute left-[14.53%] top-[56.35%] flex min-h-[10.08%] w-[31.98%] min-w-[140px] items-center gap-[1.81cqw] rounded-[1.33cqw] bg-[#f2f8f2] px-[2.48cqw] py-[1cqw] text-ink"
          >
            <svg className="h-[5.53cqw] w-[5.53cqw] shrink-0" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
              <path strokeLinejoin="round" d="M4 6h36v24H26l-8 8v-8H4z" />
              <path strokeLinecap="round" d="M10 13h22M10 18h16M10 23h10" />
              <path strokeLinejoin="round" d="M37 27l2.6 5.2 5.7.8-4.1 4 1 5.7-5.2-2.7-5.1 2.7 1-5.7-4.2-4 5.8-.8z" fill="#f2f8f2" />
            </svg>
            <div className="leading-tight">
              <p className="font-heading text-[max(3.1cqw,13px)] font-medium leading-none">125+</p>
              <p className="mt-[0.9cqw] text-[max(2.05cqw,10px)]">Achievement awards</p>
            </div>
          </motion.div>

          {/* Trusted by 15000+ enrolled students */}
          <motion.div
            {...float(1.2)}
            className="absolute left-[59.25%] top-[65.56%] flex min-h-[19.81%] w-[31.98%] min-w-[140px] flex-col items-center rounded-[3.81cqw] bg-[#0e262a] pb-[2cqw] pt-[3.05cqw] text-center text-white"
          >
            <p className="text-[max(1.95cqw,9px)] leading-none text-white/60">Trusted By</p>
            <p className="mt-[1.33cqw] text-[max(2.5cqw,11px)] leading-none">15000+ enrolled students</p>
            <div className="mt-[1.62cqw] flex -space-x-[1.7cqw]">
              {images.avatars.map((src) => (
                <img key={src} src={src} alt="" className="h-[4.72cqw] w-[4.72cqw] rounded-full border-[0.33cqw] border-white object-cover" />
              ))}
            </div>
            <p className="mt-[2.48cqw] flex items-center gap-[1.33cqw] text-[max(1.95cqw,9px)] leading-none">
              <span className="text-[max(2.3cqw,10px)] tracking-[0.05em] text-accent" aria-label="Rated 4.94 out of 5">
                ★★★★★
              </span>
              4.94 (625)
            </p>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}
          className="px-4 pb-16 text-white sm:px-6 lg:pb-0 lg:pl-[5.2%] lg:pr-8"
        >
          <motion.p variants={itemVariants} className="text-sm font-medium uppercase tracking-wide xl:text-lg">
            Online learning
          </motion.p>
          <motion.h1 variants={itemVariants} className="mt-4 font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl xl:text-[64px] 2xl:text-[76px]">
            More then <span className="text-accent">25000+</span> education courses online
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base leading-relaxed text-white/90 xl:text-xl xl:leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur. Gravida enim risus sollicitudin mauris tincidunt commodo ornare.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/courses"
              className={`${btn} mt-10 h-12 border border-white/20 bg-brand-darker px-10 text-white hover:border-accent xl:h-16 xl:px-14 xl:text-lg`}
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <Heading
            center
            eyebrow="Top categories"
            title={
              <>
                Discover leading categories to <br className="hidden sm:block" /> elevate your journey
              </>
            }
          />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6 xl:gap-9">
          {categories.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <Link
                to={`/courses?category=${c.filter}`}
                className="group flex h-full flex-col items-center border border-gray-200 bg-white px-4 py-7 text-center transition duration-300 hover:border-transparent hover:shadow-[0_25px_70px_-10px_rgba(15,42,46,0.22)]"
              >
                <span className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-light text-ink">
                  <CategoryIcon d={c.d} className="h-11 w-11" />
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug xl:text-xl">{c.title}</h3>
                <p className="mt-3 text-muted xl:text-lg">{c.count} Courses</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function PromoBanners() {
  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-x grid gap-6 lg:grid-cols-2">
        <div className="relative flex min-h-64 items-center overflow-hidden bg-light">
          <img src={images.promoLaptop} alt="Student learning on a laptop" className="absolute inset-y-0 right-0 h-full w-1/2 object-cover" />
          <div className="relative z-10 max-w-[55%] p-8 sm:p-10">
            <h3 className="text-2xl font-medium leading-snug">Quick access to the popular courses</h3>
            <Link to="/courses" className={`${btnAccent} mt-6`}>
              View Courses
            </Link>
          </div>
        </div>

        <div className="flex min-h-64 items-center gap-6 bg-cream p-8 sm:p-10">
          <div className="flex-1">
            <h3 className="text-2xl font-medium leading-snug">Develop your skills online!</h3>
            <Link to="/contact" className={`${btnDark} mt-6`}>
              Apply Now
            </Link>
          </div>
          <div className="relative hidden w-1/2 overflow-hidden rounded-xl sm:block">
            <img src={images.promoVideoCall} alt="Online video lesson" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
              <span className="h-6 w-6 rounded-full bg-green-500" />
              <span className="h-6 w-6 rounded-full bg-white" />
              <span className="h-6 w-6 rounded-full bg-white" />
              <span className="h-6 w-6 rounded-full bg-red-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopCourses() {
  const [active, setActive] = useState("All courses");
  const list = courses.slice(0, 6).filter((c) => active === "All courses" || c.category === active);

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Heading eyebrow="Online learning" title="Top online courses" />
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {courseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`border-b pb-1 transition-colors ${active === cat ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                className="h-full [&>div]:h-full"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Stagger>
        {list.length === 0 && <p className="mt-10 text-center text-muted">No courses in this category yet.</p>}

        <Reveal as="p" className="mx-auto mt-14 w-fit rounded-full bg-brand-dark px-8 py-3 text-center text-sm text-white">
          We assist you in finding the ideal tutor at no cost.{" "}
          <Link to="/courses" className="underline hover:text-accent">
            Browse All Available Courses
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const stats = [
  { value: "70M", label: "Successful students" },
  { value: "25K", label: "Global job placements" },
];

/* Round arrow on a dark background: faint, white on hover, very faint when disabled (start / end) */
function ArrowButton({ dir, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous testimonial" : "Next testimonial"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/45 transition hover:border-white hover:text-white disabled:cursor-default disabled:border-white/15 disabled:text-white/20"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" d={dir === "prev" ? "M19 12H5m6-6l-6 6 6 6" : "M5 12h14m-6-6l6 6-6 6"} />
      </svg>
    </button>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  // stops at the first / last student; that arrow greys out
  const go = (step) => setIndex((i) => Math.min(testimonials.length - 1, Math.max(0, i + step)));

  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <div>
          <Heading light eyebrow="Our testimonials" title="Trusted by our successful students" />
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
            <ArrowButton dir="prev" disabled={index === 0} onClick={() => go(-1)} />
            <ArrowButton dir="next" disabled={index === testimonials.length - 1} onClick={() => go(1)} />
          </div>
        </div>
      </div>
    </section>
  );
}

const programIds = [7, 4, 5, 6];

function TopPrograms() {
  const programs = programIds.map((id) => courses.find((c) => c.id === id));
  return (
    <section className="bg-light pt-20 lg:pt-28">
      <div className="container-x">
        <Reveal>
          <Heading eyebrow="Trending courses" title="Explore our top programs" />
        </Reveal>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((course, i) => (
            // the wrapper carries the hover z-index so the pop-out panel stays above the neighbouring cards
            <StaggerItem key={course.id} className="relative h-full hover:z-20 focus-within:z-20">
              <CourseCardCompact course={course} popupSide={i === programs.length - 1 ? "left" : "right"} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const features = [
  { title: "Learn anything", d: "M4 4h4v16H4zM9 4h4v16H9zM14 5l3.5-1 3 15.5-3.5 1z" },
  { title: "Save money", d: "M4 8h14a2 2 0 0 1 2 2v8H4zM4 8l10-4 2 4M16 13h2" },
  { title: "Flexible courses", d: "M6 3h12v14H6zM9 7h6M9 10h6M9 17v4l3-2 3 2v-4" },
  {
    title: "Unlimited certificate",
    d: "M12 3l2.4 1.8 3-.2.9 2.8 2.4 1.8-1 2.8 1 2.8-2.4 1.8-.9 2.8-3-.2L12 21l-2.4-1.8-3 .2-.9-2.8-2.4-1.8 1-2.8-1-2.8 2.4-1.8.9-2.8 3 .2zM9 12l2 2 4-4",
  },
];

function WhyUs() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-x">
        <Reveal>
          <Heading
            center
            eyebrow="Why we are"
            title="Elevate your professional journey"
            text="Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris mus. Vitae diam dolor lacus amet integer ut."
          />
        </Reveal>
        <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <StaggerItem key={f.title} className="text-center">
              <svg className="mx-auto h-9 w-9 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.1} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={f.d} />
              </svg>
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">Lorem ipsum dolor sit amet conse non quis id viverra id proin.</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ===================== page ===================== */

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <Partners />
      </Reveal>
      <Categories />
      <Reveal>
        <PromoBanners />
      </Reveal>
      <TopCourses />
      <Reveal from="left">
        <Personalized />
      </Reveal>
      <Testimonials />
      <TopPrograms />
      <WhyUs />
      <Reveal>
        <CtaBanner top="bg-light" />
      </Reveal>
    </>
  );
}
