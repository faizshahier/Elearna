export default function SectionHeading({ eyebrow, title, text, center = false, light = false, className = "" }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-medium uppercase tracking-wider ${light ? "text-white" : "text-ink"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-semibold leading-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 leading-relaxed ${light ? "text-white/60" : "text-muted"}`}>{text}</p>}
    </div>
  );
}
