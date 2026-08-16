import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap not-found">
        <p className="eyebrow">404</p>
        <h1 className="h2">This trail doesn't exist</h1>
        <p className="lede">The page you're looking for may have moved. Let's get you back on route.</p>
        <div className="not-found__cta">
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
          <Link to="/treks-tours" className="btn btn-outline-dark">
            Browse Treks &amp; Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
