/* Round prev/next arrow button. `light` = for dark backgrounds. */
export default function ArrowButton({ dir, onClick, light = false, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label ?? (dir === "prev" ? "Previous testimonial" : "Next testimonial")}
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition ${
        light
          ? "border-white/30 text-white hover:border-accent hover:text-accent"
          : "border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-white"
      }`}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" d={dir === "prev" ? "M19 12H5m6-6l-6 6 6 6" : "M5 12h14m-6-6l6 6-6 6"} />
      </svg>
    </button>
  );
}
