import { Link, useSearchParams } from "react-router-dom";
import PhotoCta from "../components/course/PhotoCta";
import { unsplash } from "../data/images";
import { posts } from "../data/posts";
import { formatDate } from "../utils/formatDate";
import { Reveal, Stagger, StaggerItem } from "./Home";

/* Blog card (also used by BlogPost): only the photo reacts to hover (slow zoom); the card and title stay still */
export function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group flex h-full flex-col border border-gray-200 bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="text-xs font-medium uppercase tracking-wider">{post.category}</p>
        <h3 className="mt-3 text-xl font-medium leading-snug">{post.title}</h3>
        <p className="mt-auto pt-6 text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </div>
    </Link>
  );
}

const PER_PAGE = 6;

export default function Blog() {
  const [params, setParams] = useSearchParams();
  const pageCount = Math.ceil(posts.length / PER_PAGE);
  const page = Math.min(Math.max(1, Number(params.get("page")) || 1), pageCount);
  const visible = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p) => {
    setParams(p > 1 ? { page: String(p) } : {});
    document.getElementById("posts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* photo hero */}
      <section className="relative overflow-hidden bg-brand-dark">
        <img src={unsplash("1522202176988-66273c2fd55f", 1800)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-brand-darker/70" />
        <Reveal className="container-x relative pb-28 pt-[calc(var(--header-h,0px)_+_7rem)] text-white lg:pb-40 lg:pt-[calc(var(--header-h,0px)_+_10rem)]">
          <p className="text-sm font-medium uppercase tracking-wider">News and journals</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">Planning to transition to a new career?</h1>
        </Reveal>
      </section>

      <section id="posts" className="scroll-mt-40 py-20 lg:py-28">
        <div className="container-x">
          {/* key: a new page of cards animates in again */}
          <Stagger key={page} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <StaggerItem key={post.slug} className="h-full">
                <PostCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>

          <nav className="mt-8 flex items-center justify-center gap-4 text-sm" aria-label="Pagination">
            {page > 1 && (
              <button onClick={() => goTo(page - 1)} className="flex items-center gap-1 text-gray-300">
                ← Previous
              </button>
            )}
            <span aria-current="page">
              {page} / {pageCount}
            </span>
            {page < pageCount && (
              <button onClick={() => goTo(page + 1)} className="flex items-center gap-1">
                Next →
              </button>
            )}
          </nav>
        </div>
      </section>

      <PhotoCta />
    </>
  );
}
