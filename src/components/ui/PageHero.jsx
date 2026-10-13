/* Full-width photo hero with a dark overlay, used at the top of inner pages */
export default function PageHero({ image, eyebrow, title, text, center = false }) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-brand-darker/70" />
      <div className={`container-x relative py-28 text-white lg:py-40 ${center ? "text-center" : ""}`}>
        {eyebrow && <p className="text-sm font-medium uppercase tracking-wider">{eyebrow}</p>}
        <h1 className={`mt-4 text-4xl font-semibold leading-tight sm:text-6xl ${center ? "mx-auto" : ""} max-w-3xl`}>{title}</h1>
        {text && <p className={`mt-5 max-w-xl text-white/80 ${center ? "mx-auto" : ""}`}>{text}</p>}
      </div>
    </section>
  );
}
