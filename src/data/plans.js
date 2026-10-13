/* Yearly price = 10 × monthly (2 months free) */
export const YEARLY_MONTHS = 10;

export const plans = [
  {
    name: "Basic",
    monthly: 199,
    text: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
    features: ["Access to 10+ top courses", "Certification prep", "Customizable content", "AI-powered coding exercises"],
  },
  {
    name: "Standard",
    monthly: 299,
    text: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
    features: ["Access to 30+ top courses", "Certification prep", "Customizable content", "AI-powered coding exercises"],
  },
  {
    name: "Premium",
    monthly: 699,
    featured: true,
    text: "Lorem ipsum dolor sit amet consectetur erat ipsum non.",
    features: [
      "Access to 50+ top courses",
      "Certification prep",
      "Customizable content",
      "AI-powered coding exercises",
      "Analytics and adoption reports",
    ],
  },
];

export const comparisonPlans = [
  { name: "Basic plan", monthly: 199 },
  { name: "Starter plan", monthly: 299, featured: true },
  { name: "Platinum plan", monthly: 399 },
];

/* [feature, basic, starter, platinum] */
export const comparisonRows = [
  ["Access to 30+ top courses", true, true, true],
  ["Certification prep", true, true, true],
  ["Customizable content", true, true, true],
  ["AI-powered coding exercises", true, true, true],
  ["Analytics and adoption reports", false, false, true],
  ["24/7 customer support", false, false, true],
  ["Instructor Q&A", true, true, true],
  ["Skills assessments", false, true, true],
];

export const priceFor = (monthly, yearly) => (yearly ? monthly * YEARLY_MONTHS : monthly);
