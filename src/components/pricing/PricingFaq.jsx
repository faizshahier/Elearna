import { Link } from "react-router-dom";
import { pricingFaqs } from "../../data/faqs";
import Accordion from "../ui/Accordion";

/* Simple line illustration: star badge with a question mark */
function QuestionArt() {
  return (
    <svg className="h-56 w-56 shrink-0" viewBox="0 0 200 200" aria-hidden="true">
      <path d="M100 8l22 42 46 6-33 32 8 46-43-22-43 22 8-46-33-32 46-6z" fill="#fff" />
      <circle cx="100" cy="105" r="52" fill="none" stroke="#0f1c1e" strokeWidth="3" />
      <path d="M80 88a20 20 0 1 1 30 17c-7 4-10 8-10 15v4" fill="none" stroke="#0f1c1e" strokeWidth="9" strokeLinecap="round" />
      <circle cx="100" cy="140" r="6" fill="#0f1c1e" />
      <circle cx="150" cy="60" r="10" fill="none" stroke="#0f1c1e" strokeWidth="3" />
      <path d="M144 70l-6 18 12-6 6 12 2-20" fill="none" stroke="#0f1c1e" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function FaqContent() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-16">
        <QuestionArt />
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-wider">Contact us</p>
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Frequently asked questions</h2>
          <Link to="/faq" className="mt-4 inline-block text-sm font-medium text-brand-blue hover:underline">
            See all questions →
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <Accordion items={pricingFaqs} variant="lined" />
      </div>
    </>
  );
}

/* boxed = inside a light panel on a white page (Contact page); default = full-width light section (Pricing page) */
export default function PricingFaq({ boxed = false }) {
  if (boxed) {
    return (
      <section className="container-x pb-20 lg:pb-28">
        <div className="rounded bg-gradient-to-b from-light to-white px-4 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <FaqContent />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light py-20 lg:py-28">
      <div className="container-x max-w-5xl">
        <FaqContent />
      </div>
    </section>
  );
}
