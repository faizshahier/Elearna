import { useState } from "react";
import CenteredTestimonial from "../components/about/CenteredTestimonial";
import Partners from "../components/home/Partners";
import ComparisonTable from "../components/pricing/ComparisonTable";
import PlanCards, { BillingToggle } from "../components/pricing/PlanCards";
import PricingFaq from "../components/pricing/PricingFaq";
import PageHero from "../components/ui/PageHero";
import { unsplash } from "../data/images";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <PageHero center image={unsplash("1521737604893-d14cc237f11d", 1800)} eyebrow="Pricing" title="Flexible pricing plan for every one" />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <BillingToggle yearly={yearly} onChange={setYearly} />
          <PlanCards yearly={yearly} />
        </div>
      </section>

      <Partners />
      <ComparisonTable yearly={yearly} />
      <PricingFaq />
      <CenteredTestimonial bg="bg-white" />
    </>
  );
}
