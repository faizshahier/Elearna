import { plans, priceFor } from "../../data/plans";
import Button from "../ui/Button";

function Check() {
  return (
    <svg className="h-5 w-5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function BillingToggle({ yearly, onChange }) {
  return (
    <div className="flex items-center justify-center gap-4 text-sm font-medium uppercase tracking-wider">
      <span className={yearly ? "text-muted" : "text-ink"}>Monthly</span>
      <button
        role="switch"
        aria-checked={yearly}
        aria-label="Bill yearly"
        onClick={() => onChange(!yearly)}
        className="relative h-8 w-16 rounded-full bg-gray-200 transition-colors"
      >
        <span className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-accent shadow transition-transform ${yearly ? "translate-x-8" : ""}`} />
      </button>
      <span className={yearly ? "text-ink" : "text-muted"}>Yearly</span>
      <span className="rounded-full bg-light px-3 py-1 text-[11px] normal-case tracking-normal text-brand-blue">2 months free</span>
    </div>
  );
}

export default function PlanCards({ yearly }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => {
        const dark = plan.featured;
        return (
          <div
            key={plan.name}
            className={`flex flex-col p-10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)] lg:p-14 ${
              dark ? "rounded-t-xl border-t-[12px] border-accent bg-brand-dark text-white" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-medium">{plan.name}</h3>
            <p className={`mt-5 leading-relaxed ${dark ? "text-white/80" : "text-muted"}`}>{plan.text}</p>
            <p className="mt-8">
              <span className="font-heading text-4xl font-semibold">${priceFor(plan.monthly, yearly).toLocaleString()}</span>
              <span className={dark ? "text-white/80" : "text-muted"}>/{yearly ? "year" : "month"}</span>
            </p>
            <ul className="mt-8 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className={`flex items-center gap-4 ${dark ? "text-white/90" : "text-muted"}`}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex-1" />
            <Button
              to={`/contact?plan=${plan.name}`}
              variant={dark ? "accent" : "dark"}
              className="mt-10 w-full"
            >
              Subscribe This Plan
            </Button>
          </div>
        );
      })}
    </div>
  );
}
