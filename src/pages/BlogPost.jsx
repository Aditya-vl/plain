import { Link, useParams } from "react-router-dom";
import { getPostBySlug, posts } from "../data/blog.js";
import "./BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="section">
        <div className="wrap not-found">
          <p className="eyebrow">Blog</p>
          <h1 className="h2">Post not found</h1>
          <p className="lede">That article may have moved. Have a look at everything else on the blog.</p>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: 22 }}>
            Back To Blog
          </Link>
        </div>
      </section>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">
            <Link to="/blog">Blog</Link> / {post.categories.join(", ")}
          </p>
          <h1 className="h2 post-title">{post.title}</h1>
          <p className="post-byline">
            {new Date(post.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
            {" \u00b7 By "}
            {post.author}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap post-layout">
          <article className="post-body">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          <aside>
            <div className="card related-card">
              <p className="eyebrow">More From The Blog</p>
              <ul className="others__list">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`}>{p.title} &rarr;</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
