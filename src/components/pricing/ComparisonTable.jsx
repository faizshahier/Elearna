import { comparisonPlans, comparisonRows, priceFor } from "../../data/plans";
import SectionHeading from "../ui/SectionHeading";

function Mark({ yes, featured }) {
  const color = featured ? "text-accent" : "text-ink";
  return (
    <span className={`inline-flex ${color}`} aria-label={yes ? "Included" : "Not included"} role="img">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.4 1.7 2.9-.2 1 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-1 2.8-2.9-.2L12 22l-2.4-1.7-2.9.2-1-2.8L3.3 16l.9-2.8-.9-2.8 2.4-1.7 1-2.8 2.9.2z" />
        {yes ? (
          <path d="M8 12.5l2.5 2.5L16 9.5" fill="none" stroke={featured ? "#0f2a2e" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 9l6 6M15 9l-6 6" fill="none" stroke={featured ? "#0f2a2e" : "#fff"} strokeWidth="2" strokeLinecap="round" />
        )}
      </svg>
    </span>
  );
}

export default function ComparisonTable({ yearly }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          center
          title="Pricing comparison"
          text="Distracted by the readable content of a page when looking at its point of using that it has a more many desktop."
        />

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Features included in each plan</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[38%]">
                  <span className="sr-only">Feature</span>
                </th>
                {comparisonPlans.map((p) => (
                  <th
                    key={p.name}
                    scope="col"
                    className={`px-4 pb-6 pt-10 text-center font-normal ${p.featured ? "rounded-t bg-brand-dark text-white" : ""}`}
                  >
                    <span className="block font-heading text-xl font-medium">{p.name}</span>
                    <span className="mt-1 block">
                      <sup className="text-sm">$</sup>
                      <span className="font-heading text-4xl font-semibold">{priceFor(p.monthly, yearly).toLocaleString()}</span>
                      <span className="text-lg">/ {yearly ? "year" : "month"}</span>
                    </span>
                    <span className={`mt-2 block ${p.featured ? "text-white/80" : "text-muted"}`}>No credit card required.</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map(([feature, ...values], i) => (
                <tr key={feature} className={i % 2 === 0 ? "bg-light" : ""}>
                  <th scope="row" className="px-5 py-4 font-heading text-lg font-medium">
                    {feature}
                  </th>
                  {values.map((yes, j) => {
                    const featured = comparisonPlans[j].featured;
                    return (
                      <td key={j} className={`px-4 py-4 text-center ${featured ? "bg-brand-dark" : ""}`}>
                        <Mark yes={yes} featured={featured} />
                      </td>
                    );
                  })}
                </tr>
              ))}
              <tr>
                <td />
                <td />
                <td className="h-10 rounded-b bg-brand-dark" />
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
