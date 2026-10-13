import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

export default function PostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <p className="text-xs font-medium uppercase tracking-wider">{post.category}</p>
        <h3 className="mt-3 text-xl font-medium leading-snug transition-colors group-hover:text-brand-blue">{post.title}</h3>
        <p className="mt-auto pt-6 text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </div>
    </Link>
  );
}
