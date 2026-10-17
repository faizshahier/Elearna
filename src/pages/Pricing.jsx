import { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbRosetteFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import CenteredTestimonial from "../components/about/CenteredTestimonial";
import { pricingFaqs } from "../data/faqs";
import { unsplash } from "../data/images";
import { comparisonPlans, comparisonRows, plans, priceFor } from "../data/plans";
import { Accordion } from "./Faq";
import { Partners, Reveal, Stagger, StaggerItem } from "./Home";

/* Pricing page. All pricing sections live in this file; FaqBlock is also used by the Contact page. */

function BillingToggle({ yearly, onChange }) {
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
    </div>
  );
}

/* Plan cards; only the "Subscribe This Plan" button reacts to hover (zooms out) */
function PlanCards({ yearly }) {
  return (
    <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => {
        const dark = plan.featured;
        return (
          <StaggerItem key={plan.name} className="h-full">
            <div
              className={`flex h-full flex-col p-10 shadow-[0_20px_50px_-35px_rgba(15,42,46,0.35)] lg:p-14 ${
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
                    <IoCheckmarkCircleOutline className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link
                to={`/contact?plan=${plan.name}`}
                className={`mt-10 inline-flex w-full items-center justify-center rounded px-7 py-3 text-sm font-medium transition duration-300 hover:scale-95 ${
                  dark ? "bg-accent text-ink" : "bg-brand-dark text-white"
                }`}
              >
                Subscribe This Plan
              </Link>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

/* Rosette badge with a check / cross. Featured column: yellow badge, dark mark. */
function Mark({ yes, featured }) {
  const Inner = yes ? FaCheck : FaXmark;
  return (
    <span className="relative inline-flex h-6 w-6 items-center justify-center" aria-label={yes ? "Included" : "Not included"} role="img">
      <TbRosetteFilled className={`absolute inset-0 h-full w-full ${featured ? "text-accent" : "text-ink"}`} aria-hidden="true" />
      <Inner className={`relative h-2.5 w-2.5 ${featured ? "text-brand-dark" : "text-white"}`} aria-hidden="true" />
    </span>
  );
}

function ComparisonTable({ yearly }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center 2xl:max-w-4xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Pricing comparison</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Distracted by the readable content of a page when looking at its point of using that it has a more many desktop.
          </p>
        </Reveal>

        <Reveal className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">Features included in each plan</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[38%]">
                  <span className="sr-only">Feature</span>
                </th>
                {comparisonPlans.map((p) => (
                  <th key={p.name} scope="col" className={`px-4 pb-6 pt-10 text-center font-normal ${p.featured ? "rounded-t bg-brand-dark text-white" : ""}`}>
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
        </Reveal>
      </div>
    </section>
  );
}

/* FAQ illustration (linked from the design's image host) */
const FAQ_ART = "https://cdn.prod.website-files.com/668cb7adec02e140422345de/66de9b24cdbecf88f8d1b2da_FAQ%20Icons.svg";

function FaqContent() {
  return (
    <>
      <Reveal className="flex flex-col items-center gap-8 sm:flex-row sm:gap-14 lg:gap-16 xl:gap-[150px]">
        <img src={FAQ_ART} alt="" loading="lazy" className="aspect-[263/247] h-auto w-60 shrink-0 sm:w-64 lg:w-[330px]" />
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-wider lg:text-base">Contact us</p>
          <h2 className="max-w-[9em] text-4xl font-semibold leading-tight sm:text-5xl lg:leading-[1.15] xl:text-[56px] 2xl:text-[64px]">
            Frequently asked questions
          </h2>
        </div>
      </Reveal>
      <Reveal className="mt-10">
        <Accordion items={pricingFaqs} variant="lined" />
      </Reveal>
    </>
  );
}

/* FAQ block. boxed = inside a light panel on a white page (Contact); default = full-width light section (Pricing) */
export function FaqBlock({ boxed = false }) {
  if (boxed) {
    return (
      <section className="container-x pb-20 lg:pb-28">
        <div className="rounded bg-gradient-to-b from-light to-white px-4 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <FaqContent />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-narrow max-w-5xl">
        <FaqContent />
      </div>
    </section>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* photo hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1521737604893-d14cc237f11d", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <Reveal className="container-x relative pb-28 pt-[calc(var(--header-h,0px)_+_7rem)] text-center text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_10rem)]">
          <p className="text-sm font-medium uppercase tracking-wider">Pricing</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Flexible pricing plan for every one</h1>
        </Reveal>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <BillingToggle yearly={yearly} onChange={setYearly} />
          </Reveal>
          <PlanCards yearly={yearly} />
        </div>
      </section>

      <Reveal>
        <Partners />
      </Reveal>
      <ComparisonTable yearly={yearly} />
      <FaqBlock />
      <CenteredTestimonial bg="bg-white" />
    </>
  );
}
