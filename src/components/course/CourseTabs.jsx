import { useState } from "react";
import { courseDetails } from "../../data/courses";
import { unsplash } from "../../data/images";
import { instructors } from "../../data/instructors";
import Accordion from "../ui/Accordion";
import Button from "../ui/Button";
import InstructorCard from "../ui/InstructorCard";

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit. Feugiat consequat diam ipsum suspendisse vestibulum ipsum malesuada.";

function FeatureList({ small = false }) {
  return (
    <ul className={`list-disc space-y-1.5 pl-5 text-muted ${small ? "text-sm" : ""}`}>
      {courseDetails.features.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}

function Overview() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Course description</h2>
      <p className="mt-4 leading-relaxed text-muted">{lorem}</p>
      <h3 className="mt-10 text-xl font-medium">Main features</h3>
      <div className="mt-4">
        <FeatureList />
      </div>
      <h3 className="mt-10 text-xl font-medium">What is the target audience?</h3>
      <p className="mt-4 leading-relaxed text-muted">
        Lorem ipsum dolor sit amet consectetur. Nibh urna quis tempus elit ultrices amet. Convallis facilisis duis vivamus ut
        suspendisse imperdiet vel eleifend maecenas. Mi senectus eu nec mattis lacus dolor in diam cursus.
      </p>
    </div>
  );
}

function Curriculum({ course }) {
  const [lesson, setLesson] = useState(0);
  const [playing, setPlaying] = useState(false);
  const pick = (i) => {
    setLesson(i);
    setPlaying(false);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
      <ul className="flex gap-2 overflow-x-auto lg:flex-col">
        {courseDetails.lessons.map((_, i) => (
          <li key={i} className="shrink-0">
            <button
              onClick={() => pick(i)}
              aria-current={lesson === i}
              className={`w-full whitespace-nowrap px-6 py-2.5 text-left text-sm transition ${
                lesson === i ? "bg-brand-dark text-white" : "bg-light hover:bg-gray-200"
              }`}
            >
              Lesson {i + 1}
            </button>
          </li>
        ))}
      </ul>

      <div>
        <h2 className="text-2xl font-medium">
          {courseDetails.lessons[lesson]}: {course.title}
        </h2>
        <h3 className="mt-6 font-medium">{courseDetails.lessons[lesson]}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{lorem}</p>

        {/* Video placeholder */}
        <button
          onClick={() => setPlaying((p) => !p)}
          className="group relative mt-8 block aspect-video w-full overflow-hidden bg-brand-blue"
          aria-label={playing ? "Pause lesson video" : "Play lesson video"}
        >
          <img src={unsplash("1522881193457-37ae97c905bf", 1200)} alt="" className="h-full w-full object-cover opacity-60" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition group-hover:scale-110">
              {playing ? "❚❚" : "▶"}
            </span>
          </span>
          {playing && (
            <span className="absolute bottom-4 left-4 rounded bg-black/60 px-3 py-1 text-xs text-white">
              Demo video — add your own lesson video here
            </span>
          )}
        </button>

        <h3 className="mt-8 font-medium">Main features</h3>
        <div className="mt-3">
          <FeatureList small />
        </div>
        <img src={unsplash("1497366216548-37526070297c", 1200)} alt="Modern classroom office" className="mt-8 aspect-[12/5] w-full object-cover" />
        <h3 className="mt-8 font-medium">Lesson Summary</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{lorem}</p>
      </div>
    </div>
  );
}

function Instructor() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Course instructor</h2>
      <p className="mt-4 leading-relaxed text-muted">{lorem}</p>
      <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {instructors.slice(0, 4).map((p) => (
          <InstructorCard key={p.name} person={p} />
        ))}
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
      <p className="mt-4 leading-relaxed text-muted">{lorem}</p>
      <div className="mt-8">
        <Accordion items={courseDetails.faqs} />
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-brand-dark";

function Query({ course }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // No backend yet — just show a confirmation.
    setSent(true);
    e.target.reset();
  };

  return (
    <div>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-semibold">Have any questions about this course?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Send us your question and our team will reply by email within one working day.
        </p>
      </div>

      {sent ? (
        <div role="status" className="mt-10 bg-light p-8 text-center">
          <p className="font-heading text-xl font-medium">Thanks! Your query was sent.</p>
          <button onClick={() => setSent(false)} className="mt-4 text-sm underline">
            Send another query
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
          <input required name="firstName" placeholder="First name*" aria-label="First name" className={inputClass} />
          <input required name="lastName" placeholder="Last name*" aria-label="Last name" className={inputClass} />
          <input required type="email" name="email" placeholder="Your email*" aria-label="Your email" className={inputClass} />
          <input
            required
            name="category"
            defaultValue={course.category}
            placeholder="Course category*"
            aria-label="Course category"
            className={inputClass}
          />
          <textarea required name="query" rows={4} placeholder="Your query*" aria-label="Your query" className={`${inputClass} sm:col-span-2`} />
          <label className="flex items-center gap-2 text-sm text-muted sm:col-span-2">
            <input type="checkbox" name="save" className="h-4 w-4 accent-brand-dark" />
            Save information for next time.
          </label>
          <div>
            <Button type="submit">Send Your Query</Button>
          </div>
        </form>
      )}
    </div>
  );
}

const tabs = ["Overview", "Curriculum", "Instructor", "FAQ", "Query"];

export default function CourseTabs({ course }) {
  const [active, setActive] = useState("Overview");

  return (
    <section className="container-x py-20">
      <div className="mx-auto flex w-fit max-w-full overflow-x-auto bg-light" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            onClick={() => setActive(t)}
            className={`shrink-0 px-6 py-3 text-sm transition sm:px-9 ${
              active === t ? "rounded bg-brand-dark text-white" : "hover:text-brand-blue"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-14" role="tabpanel">
        {active === "Overview" && <Overview />}
        {active === "Curriculum" && <Curriculum course={course} />}
        {active === "Instructor" && <Instructor />}
        {active === "FAQ" && <Faq />}
        {active === "Query" && <Query course={course} />}
      </div>
    </section>
  );
}
