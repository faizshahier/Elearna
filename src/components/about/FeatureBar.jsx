const features = [
  { title: "150+ online courses", d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" },
  { title: "Personalized learning", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 6l2 5h-4l2-5zM10 11v6h4v-6M12 13v2" },
  { title: "Lifetime update", d: "M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M6 21v-4h4M9 12l2 2 4-4" },
];

export default function FeatureBar() {
  return (
    <section className="pt-10">
      <div className="container-x">
        <div className="grid gap-8 bg-brand-dark px-8 py-10 text-white shadow-xl md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-center gap-4">
              <svg className="h-11 w-11 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={f.d} />
              </svg>
              <div>
                <p className="font-heading text-xl font-semibold">{f.title}</p>
                <p className="text-white/70">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
