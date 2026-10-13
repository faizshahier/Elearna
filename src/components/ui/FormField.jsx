/* Input or textarea with an accessible label and an inline error message */
export default function FormField({ label, name, error, as = "input", className = "", ...props }) {
  const Tag = as;
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        placeholder={label}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`w-full border px-5 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-brand-dark ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
