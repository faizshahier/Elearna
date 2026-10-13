export default function Stars({ rating, reviews }) {
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
