import Button from "../ui/Button";

const steps = [
  { title: "Flexibility and convenience", offset: "lg:mt-6" },
  { title: "Course accessibility", offset: "lg:-mt-4", featured: true },
  { title: "Cost-effectiveness", offset: "lg:mt-10" },
  { title: "Personalized learning", offset: "lg:mt-10" },
];

export default function WhySteps() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider">Why we are</p>
          <h2 className="text-2xl font-medium leading-snug sm:text-4xl">
            We believe in our good education and development system and we know how to work together to reach greater
            success
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white p-8 transition hover:z-10 hover:shadow-2xl lg:p-10 ${s.offset} ${
                s.featured ? "shadow-2xl lg:z-10" : "shadow-[0_20px_50px_-30px_rgba(0,0,0,0.25)]"
              }`}
            >
              <p className="font-heading text-4xl font-medium text-brand-blue">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">
                Lorem ipsum dolor sit amet consectetur. Lectus faucibus eu lectus malesuada morbi in quam donec a pellentesque
                risus.
              </p>
              {s.featured && (
                <Button to="/courses" className="mt-6">
                  Get Started
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
