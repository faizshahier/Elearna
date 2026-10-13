/* Partner logos drawn with text + simple shapes (swap for real logo images later) */
function Carla() {
  return (
    <div className="relative px-12 pb-1 pt-1">
      <span className="absolute inset-y-3 left-0 w-3 border-y border-l border-current" />
      <span className="absolute inset-y-3 right-0 w-3 border-y border-r border-current" />
      <p className="font-sans text-4xl font-bold leading-none">
        <span className="mr-1 text-base">✦</span>Carla
      </p>
      <p className="mt-1 text-center font-serif text-[10px] tracking-[0.4em]">TEXTURAL</p>
    </div>
  );
}

function Shopia() {
  return (
    <div className="text-center">
      <p className="font-serif text-[44px] font-bold leading-none">Shopia</p>
      <p className="mt-1 flex items-center gap-3 text-[10px] tracking-[0.35em]">
        <span className="h-px w-8 bg-current" /> FASHION HUB <span className="h-px w-8 bg-current" />
      </p>
    </div>
  );
}

function Leafe() {
  return (
    <div className="relative">
      <p className="flex items-center text-4xl font-semibold leading-none tracking-[0.15em]">
        LE
        <svg className="mx-0.5 h-14 w-10" viewBox="0 0 40 56" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
          <path d="M36 4C14 6 4 22 8 40c18-2 28-18 28-36zM8 40L3 54M12 34L30 12" />
        </svg>
        FE
      </p>
      <p className="-mt-2 text-right text-xs font-semibold tracking-wider">FASHION</p>
    </div>
  );
}

function Concluas() {
  return <p className="border-2 border-current px-6 py-3.5 text-xl font-bold tracking-[0.25em]">CONCLUAS</p>;
}

function AH() {
  return (
    <div className="text-center">
      <p className="font-serif text-5xl font-light leading-none tracking-tight">A&amp;H</p>
      <p className="mx-auto mt-1 w-fit border border-current px-1 font-serif text-[8px] tracking-[0.2em]">FASHION STORE</p>
    </div>
  );
}

function BLogo() {
  return (
    <p className="flex items-center font-serif text-4xl font-bold">
      <span className="mr-1 inline-block h-7 w-7 rounded-full bg-current" />B.
    </p>
  );
}

const logos = [
  { name: "Carla Textural", Logo: Carla },
  { name: "Shopia Fashion Hub", Logo: Shopia },
  { name: "Leafe Fashion", Logo: Leafe },
  { name: "Concluas", Logo: Concluas },
  { name: "A&H Fashion Store", Logo: AH },
  { name: "B.", Logo: BLogo },
];

/*
 * Endless auto-scrolling logo strip, moving right → left.
 * The list is rendered twice inside one track; the track slides by -50% and loops.
 * Hover pauses it; people who prefer reduced motion get a still row.
 */
export default function Partners({ dark = false }) {
  const set = (copy) =>
    logos.map(({ name, Logo }) => (
      <li
        key={copy + name}
        aria-hidden={copy === "b" ? true : undefined}
        className={`flex shrink-0 items-center px-12 transition-colors ${dark ? "hover:text-white/70" : "hover:text-gray-600"}`}
      >
        <span className="sr-only">{name}</span>
        <span aria-hidden="true">
          <Logo />
        </span>
      </li>
    ));

  return (
    <section className={`py-12 ${dark ? "bg-brand-dark" : "bg-light"}`}>
      <p className={`container-x text-center text-lg ${dark ? "text-white/60" : "text-ink"}`}>
        Learn from 350+ leading universities and companies with us
      </p>
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
