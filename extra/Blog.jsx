import { Link } from "react-router-dom";
import { posts } from "../data/blog.js";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Home / Blog</p>
          <h1 className="h2">Trail Notes</h1>
          <p className="lede">Planning guides, season notes and stories from the routes we run.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-2">
          {posts.map((p) => (
            <article className="blog-card card" key={p.slug}>
              <p className="blog-card__meta">
                {new Date(p.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                {" \u00b7 "}
                {p.categories.join(", ")}
              </p>
              <h3>
                <Link to={`/blog/${p.slug}`}>{p.title}</Link>
              </h3>
              <p>{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="blog-card__link">
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
