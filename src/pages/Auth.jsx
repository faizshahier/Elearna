import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import FormField from "../components/ui/FormField";
import { unsplash } from "../data/images";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const config = {
  login: {
    title: "Welcome back",
    text: "Log in to continue your courses.",
    submit: "Log In",
    fields: [
      { name: "email", label: "Email*", type: "email", autoComplete: "email" },
      { name: "password", label: "Password*", type: "password", autoComplete: "current-password" },
    ],
    switchText: "New to Elearna?",
    switchLink: { to: "/register", label: "Create an account" },
  },
  register: {
    title: "Create your account",
    text: "Join 15,000+ students learning new skills online.",
    submit: "Create Account",
    fields: [
      { name: "name", label: "Full name*", autoComplete: "name" },
      { name: "email", label: "Email*", type: "email", autoComplete: "email" },
      { name: "password", label: "Password* (8+ characters)", type: "password", autoComplete: "new-password" },
      { name: "confirm", label: "Confirm password*", type: "password", autoComplete: "new-password" },
    ],
    switchText: "Already have an account?",
    switchLink: { to: "/login", label: "Log in" },
  },
};

function validate(mode, v) {
  const e = {};
  if (mode === "register" && !v.name?.trim()) e.name = "Please enter your name.";
  if (!v.email?.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (!v.password) e.password = "Please enter your password.";
  else if (mode === "register" && v.password.length < 8) e.password = "Password must be at least 8 characters.";
  if (mode === "register" && v.confirm !== v.password) e.confirm = "Passwords do not match.";
  return e;
}

/* Login and Register share one layout. Front-end only: there is no account backend yet. */
export default function Auth({ mode }) {
  const c = config[mode];
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: undefined }));
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

  return (
    <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img src={unsplash("1522202176988-66273c2fd55f", 1200)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/60" />
        <div className="absolute inset-x-0 bottom-0 p-14 text-white">
          <p className="font-heading text-4xl font-semibold leading-tight">More then 25000+ education courses online</p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-light px-4 py-16">
        <div className="w-full max-w-md bg-white p-8 shadow-xl sm:p-10">
          {done ? (
            <div role="status" className="text-center">
              <p className="font-heading text-2xl font-semibold">{mode === "login" ? "You’re logged in (demo)" : "Account created (demo)"}</p>
              <p className="mt-3 text-muted">
                This site has no account system yet, so nothing was saved. Connect a backend to make sign-in real.
              </p>
              <Button to="/courses" className="mt-6">
                Browse Courses
              </Button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-semibold">{c.title}</h1>
              <p className="mt-2 text-muted">{c.text}</p>
              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
                {c.fields.map((f) => (
                  <FormField key={f.name} {...f} value={values[f.name] ?? ""} onChange={onChange} error={errors[f.name]} />
                ))}
                {mode === "login" && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-muted">
                      <input type="checkbox" className="h-4 w-4 accent-brand-dark" /> Remember me
                    </label>
                    <Link to="/faq" className="hover:text-brand-blue">
                      Forgot password?
                    </Link>
                  </div>
                )}
                <Button type="submit" className="w-full">
                  {c.submit}
                </Button>
              </form>
              <p className="mt-6 text-center text-sm text-muted">
                {c.switchText}{" "}
                <Link to={c.switchLink.to} className="font-medium text-ink underline hover:text-brand-blue">
                  {c.switchLink.label}
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
