import { Link } from "react-router-dom";
import { Reveal } from "./Home";

export default function NotFound() {
  return (
    <section className="py-32">
      <Reveal className="container-x text-center">
        <p className="text-7xl font-extrabold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
        <Link
          to="/"
          className="mt-8 inline-block rounded-md bg-brand-dark px-6 py-3 text-sm font-semibold text-white"
        >
          Back to home
        </Link>
      </Reveal>
    </section>
  );
}
