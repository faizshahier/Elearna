import { Link, useParams } from "react-router-dom";
import PhotoCta from "../components/course/PhotoCta";
import PostCard from "../components/ui/PostCard";
import SectionHeading from "../components/ui/SectionHeading";
import { getPost, posts } from "../data/posts";
import { formatDate } from "../utils/formatDate";
import NotFound from "./NotFound";

const lorem =
  "Lorem ipsum dolor sit amet consectetur. Et facilisis nunc quam quam etiam donec pellentesque ut. Nisl pellentesque at aliquam scelerisque non consequat amet curabitur. Imperdiet habitant purus pulvinar diam. Molestie pharetra morbi eu odio volutpat. Cursus velit elit senectus auctor vitae tristique velit.";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-brand-dark pb-40 pt-20 text-white lg:pt-28">
          <div className="container-x max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">{post.category}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-white/70">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · 5 min read
            </p>
          </div>
        </header>

        <div className="container-x max-w-4xl">
          <img src={post.image.replace("w=800", "w=1400")} alt="" className="-mt-28 aspect-video w-full object-cover shadow-2xl" />
          <div className="space-y-6 py-14 text-lg leading-relaxed text-muted">
            <p>{lorem}</p>
            <h2 className="pt-4 text-2xl font-semibold text-ink">Why it matters</h2>
            <p>{lorem}</p>
            <blockquote className="border-l-4 border-accent bg-light px-6 py-5 font-heading text-xl text-ink">
              “Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.”
              <footer className="mt-2 font-sans text-sm text-muted">— Abigail Adams</footer>
            </blockquote>
            <h2 className="pt-4 text-2xl font-semibold text-ink">Putting it into practice</h2>
            <p>{lorem}</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Set one small, clear goal for every study session.</li>
              <li>Review what you learned within 24 hours.</li>
              <li>Teach the idea to someone else in your own words.</li>
            </ul>
          </div>
          <Link to="/blog" className="inline-block pb-16 text-sm font-medium hover:text-brand-blue">
            ← Back to all articles
          </Link>
        </div>
      </article>

      <section className="bg-light py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Keep reading" title="More articles" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
