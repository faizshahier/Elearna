import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PhotoCta from "../components/course/PhotoCta";
import { unsplash } from "../data/images";
import { jobs } from "../data/jobs";
import { Reveal, Stagger, StaggerItem } from "./Home";

const points = ["Full network visibility worldwide", "Supported the use of fiber optic cable"];

function JobCard({ job }) {
  return (
    <div className="h-full bg-white px-8 py-10 transition-shadow duration-300 hover:shadow-[0_25px_50px_-20px_rgba(15,42,46,0.25)] sm:px-10 2xl:px-[76px] 2xl:py-[62px]">
      <h3 className="text-xl font-medium 2xl:text-[26px]">{job.title}</h3>
      <p className="mt-3 text-xs uppercase leading-relaxed tracking-wide text-muted 2xl:text-sm">
        {job.posts} posts available
        <br />
        {job.address}
      </p>
      <div className="mt-6 flex flex-wrap gap-4 2xl:mt-9">
        <span className="flex h-12 min-w-[180px] items-center justify-center rounded bg-accent px-6 text-sm font-medium 2xl:h-[62px] 2xl:min-w-[222px] 2xl:text-base">
          {job.salary}
        </span>
        <Link
          to="/contact"
          className="flex h-12 min-w-[180px] items-center justify-center rounded bg-brand-dark px-6 text-sm font-medium text-white transition hover:bg-brand-darker 2xl:h-[62px] 2xl:min-w-[208px] 2xl:text-base"
        >
          Apply Now
        </Link>
      </div>
      <ul className="mt-6 space-y-1.5 text-sm text-muted 2xl:mt-9 2xl:space-y-2 2xl:text-base">
        <li>• Job Description : {job.description}</li>
        <li>• Job Type : {job.type}</li>
        <li>• Experience : {job.experience}</li>
      </ul>
    </div>
  );
}

export default function Career() {
  return (
    <>
      {/* photo hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1513258496099-48168024aec0", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <Reveal className="container-x relative pb-28 pt-[calc(var(--header-h,0px)_+_7rem)] text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_10rem)]">
          <p className="text-sm font-medium uppercase tracking-wider">We are hiring</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Begin your journey as an instructor</h1>
        </Reveal>
      </section>

      {/* Why we are */}
      <section className="py-20 lg:py-28 2xl:py-[150px]">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal from="left" className="flex items-start gap-5 sm:gap-9">
            <img
              src={unsplash("1531482615713-2afd69097998", 900)}
              alt="Student learning on a laptop"
              className="aspect-[512/458] w-[64%] object-cover"
            />
            <img
              src={unsplash("1499750310107-5fef28a66643", 600)}
              alt="Hands typing on a laptop"
              className="mt-[22%] aspect-[276/430] w-[34%] object-cover"
            />
          </Reveal>

          <Reveal>
            <div className="max-w-2xl 2xl:max-w-4xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider">Why we are</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">We help connectivity across the world</h2>
              <p className="mt-4 leading-relaxed text-muted">Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusm tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <ul className="mt-8 space-y-7">
              {points.map((point) => (
                <li key={point} className="flex gap-4">
                  <IoCheckmarkCircleOutline className="mt-0.5 h-6 w-6 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-medium 2xl:text-xl">{point}</h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      Amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Job opening */}
      <section className="bg-light py-20 lg:py-28 2xl:py-[150px]">
        <div className="container-x">
          <Reveal className="max-w-2xl 2xl:max-w-4xl mx-auto text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider">Job opening</p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl 2xl:text-[56px]">Be a part of our faculty</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-2 2xl:mt-16 2xl:gap-9">
            {jobs.map((job) => (
              <StaggerItem key={job.title} className="h-full">
                <JobCard job={job} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
