import { Link } from "react-router-dom";

const variants = {
  dark: "bg-brand-dark text-white hover:bg-brand-darker",
  accent: "bg-accent text-ink hover:brightness-95",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight: "border border-white text-white hover:bg-white hover:text-ink",
  ghostLight: "border border-white/20 bg-brand-darker text-white hover:border-accent",
};

export default function Button({ to, variant = "dark", className = "", children, ...props }) {
  const classes = `inline-flex items-center justify-center rounded px-7 py-3 text-sm font-medium transition ${variants[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
