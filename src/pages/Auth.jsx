import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Reveal } from "./Home";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Demo account shown under the login card (there is no real account system yet) */
const TEST_USER = { email: "test@example.com", password: "Elearna1234" };

const config = {
  login: {
    title: "Log in",
    text: "More than 50k students have joined Elearna already",
    submit: "Log In",
    fields: [
      { name: "email", label: "Email address", type: "email", autoComplete: "email" },
      { name: "password", label: "Password", type: "password", autoComplete: "current-password" },
    ],
    switchText: "Don't have an account?",
    switchLink: { to: "/register", label: "Sign Up" },
    done: "You’re logged in (demo)",
  },
  register: {
    title: "Sign up",
    text: "More then 50k students join with us!",
    submit: "Sign Up",
    fields: [
      { name: "email", label: "Email address", type: "email", autoComplete: "email" },
      { name: "name", label: "Name", autoComplete: "name" },
      { name: "password", label: "Password", type: "password", autoComplete: "new-password" },
    ],
    switchText: "Already have an account?",
    switchLink: { to: "/login", label: "Log In" },
    done: "Account created (demo)",
  },
};

function validate(mode, v) {
  const e = {};
  if (!v.email?.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (mode === "register" && !v.name?.trim()) e.name = "Please enter your name.";
  if (!v.password) e.password = "Please enter your password.";
  else if (mode === "register" && v.password.length < 8) e.password = "Password must be at least 8 characters.";
  if (mode === "register" && !v.terms) e.terms = "Please accept the privacy policy and terms of service.";
  return e;
}

/*
 * Login and Register (full-screen, without the site header/footer — routed outside Layout).
 * Front-end only: there is no account backend, so a valid form just shows a demo message.
 */
export default function Auth({ mode }) {
  const c = config[mode];
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  // Outside Layout, so set the tab title / scroll position here
  useEffect(() => {
    document.title = `${c.title} | Elearna`;
    window.scrollTo(0, 0);
  }, [c.title]);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(mode, values);
    setErrors(found);
    if (Object.keys(found).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setDone(true);
  };

  const input = (err) =>
    `mt-3 h-14 w-full rounded-sm bg-[#354d52] px-4 text-white outline-none ring-accent transition focus:ring-2 2xl:h-[62px] ${
      err ? "ring-2 ring-red-400" : ""
    }`;

  return (
    <div className="bg-doodle flex min-h-screen flex-col text-white">
      <header className="px-5 pt-8 sm:px-5 lg:absolute lg:left-0 lg:top-0 lg:pt-11">
        <Link to="/" aria-label="Elearna home">
          <img src={logo} alt="Elearna" className="h-8 w-auto lg:h-9" />
        </Link>
      </header>

      <main className="flex flex-1 flex-col items-center px-5 pb-16 pt-8 lg:pt-6">
        <Reveal as="h1" className="text-5xl font-semibold sm:text-6xl">
          {c.title}
        </Reveal>
        <Reveal as="p" className="mt-5 text-center text-lg font-medium lg:text-xl">
          {c.text}
        </Reveal>

        <Reveal className="mt-8 w-full max-w-[588px] bg-[#23393f] px-6 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] sm:px-[50px] sm:py-12">
          {done ? (
            <div role="status" className="py-6 text-center">
              <p className="font-heading text-2xl font-semibold">{c.done}</p>
              <p className="mt-3 text-white/70">This site has no account system yet, so nothing was saved.</p>
              <Link to="/courses" className="mt-6 inline-block rounded bg-accent px-8 py-3 text-ink hover:brightness-95">
                Browse Courses
              </Link>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="space-y-6">
                {c.fields.map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="text-lg font-medium lg:text-xl">
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type ?? "text"}
                      autoComplete={f.autoComplete}
                      value={values[f.name] ?? ""}
                      onChange={onChange}
                      aria-invalid={errors[f.name] ? "true" : undefined}
                      aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                      className={input(errors[f.name])}
                    />
                    {errors[f.name] && (
                      <p id={`${f.name}-error`} className="mt-1.5 text-sm text-red-300">
                        {errors[f.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {mode === "register" && (
                <div className="mt-7 space-y-3 text-lg text-white/60">
                  <label className="flex items-start gap-3">
                    <input type="checkbox" name="terms" checked={!!values.terms} onChange={onChange} className="mt-1.5 h-4 w-4 shrink-0 accent-accent" />
                    <span>
                      By creating an account, I agree to this website&apos;s <span className="font-medium text-white">privacy policy</span>{" "}
                      and <span className="font-medium text-white">terms of service</span>
                    </span>
                  </label>
                  {errors.terms && <p className="text-sm text-red-300">{errors.terms}</p>}
                  <label className="flex items-start gap-3">
                    <input type="checkbox" name="marketing" checked={!!values.marketing} onChange={onChange} className="mt-1.5 h-4 w-4 shrink-0 accent-accent" />
                    <span>I consent to receive marketing emails.</span>
                  </label>
                </div>
              )}

              <button type="submit" className="mt-8 h-14 w-full rounded-sm bg-accent text-lg text-ink transition hover:brightness-95 2xl:h-[62px]">
                {c.submit}
              </button>

              <p className="mt-8 flex items-center justify-between gap-4 text-lg lg:text-xl">
                <span className="text-white/60">{c.switchText}</span>
                <Link to={c.switchLink.to} className="font-medium hover:text-accent">
                  {c.switchLink.label}
                </Link>
              </p>
            </form>
          )}
        </Reveal>

        {mode === "login" && !done && (
          <div className="mt-12 text-center text-lg lg:text-xl">
            <p className="flex items-center justify-center gap-6 font-medium">
              <span className="h-px w-32 bg-white/30" />
              Test login
              <span className="h-px w-32 bg-white/30" />
            </p>
            <p className="mt-6">Test user: {TEST_USER.email}</p>
            <p className="mt-2">Password: {TEST_USER.password}</p>
          </div>
        )}
      </main>

      <footer className="border-t border-white/15 px-5 py-6 text-sm font-medium uppercase tracking-wide">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <nav className="flex gap-9" aria-label="Footer">
            <Link to="/404" className="hover:text-accent">
              404 Error
            </Link>
            <Link to="/faq" className="hover:text-accent">
              License
            </Link>
          </nav>
          <p>
            © {new Date().getFullYear()} Elearna · Built with React &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
