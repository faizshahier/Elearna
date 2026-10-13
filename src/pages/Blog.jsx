import { useSearchParams } from "react-router-dom";
import PhotoCta from "../components/course/PhotoCta";
import PageHero from "../components/ui/PageHero";
import PostCard from "../components/ui/PostCard";
import { unsplash } from "../data/images";
import { posts } from "../data/posts";

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
      <PageHero image={unsplash("1522202176988-66273c2fd55f", 1800)} eyebrow="News and journals" title="Planning to transition to a new career?" />

      <section id="posts" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          <nav className="mt-8 flex items-center justify-center gap-4 text-sm" aria-label="Pagination">
            {page > 1 && (
              <button onClick={() => goTo(page - 1)} className="flex items-center gap-1 hover:text-brand-blue">
                ← Previous
              </button>
            )}
            <span aria-current="page">
              {page} / {pageCount}
            </span>
            {page < pageCount && (
              <button onClick={() => goTo(page + 1)} className="flex items-center gap-1 hover:text-brand-blue">
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
