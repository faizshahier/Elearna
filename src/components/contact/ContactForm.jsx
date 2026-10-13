import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { loadSavedContact, saveContact } from "../../utils/savedContact";
import Button from "../ui/Button";
import FormField from "../ui/FormField";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [params] = useSearchParams();
  const plan = params.get("plan");

  // Initial values: saved name/email + subject from ?plan= (Pricing "Subscribe" buttons)
  const [values, setValues] = useState(() => {
    const saved = loadSavedContact();
    return {
      name: saved.name ?? "",
      email: saved.email ?? "",
      subject: plan ? `Subscribe to the ${plan} plan` : "",
      message: "",
      save: Boolean(saved.name || saved.email),
    };
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    saveContact(values.save ? { name: values.name.trim(), email: values.email.trim() } : null);
    // No backend yet — show a confirmation instead of sending.
    setSent(true);
    setValues((v) => ({ ...v, subject: "", message: "" }));
  };

  if (sent) {
    return (
      <div role="status" className="py-10 text-center">
        <p className="font-heading text-2xl font-semibold">Thank you, {values.name.split(" ")[0]}!</p>
        <p className="mt-3 text-muted">We received your message and will reply to {values.email} within one working day.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-medium underline hover:text-brand-blue">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
      <FormField label="Your name*" name="name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} />
      <FormField
        label="Your email*"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        onChange={onChange}
        error={errors.email}
      />
      <FormField label="Subject" name="subject" value={values.subject} onChange={onChange} />
      <FormField
        as="textarea"
        rows={5}
        label="Your message*"
        name="message"
        value={values.message}
        onChange={onChange}
        error={errors.message}
      />
      <label className="flex items-center gap-3 text-muted">
        <input type="checkbox" name="save" checked={values.save} onChange={onChange} className="h-4 w-4 accent-brand-dark" />
        Save information for the next time comment.
      </label>
      <Button type="submit" className="px-10">
        Send Message
      </Button>
    </form>
  );
}
