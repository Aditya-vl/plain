import { Link } from "react-router-dom";
import "./TrekCard.css";

export default function TrekCard({ trek, index }) {
  const ctaLabel = trek.hasDetail ? (trek.featured ? "View Packages" : "Read More") : "Ask For Details";
  const to = trek.hasDetail ? `/treks-tours/${trek.slug}` : "/contact";

  return (
    <article className="trek-card">
      <Link to={to} className={`trek-card__media tone-${trek.tone}`} aria-hidden="true" tabIndex={-1}>
       <img
         src={trek.image}
           alt=""
           className="trek-card__image"
       />
        <span className="trek-card__waypoint">{String(index).padStart(2, "0")}</span>
        {trek.badge && <span className="chip chip--gold trek-card__badge">{trek.badge}</span>}
      </Link>

      <div className="trek-card__body">
        <h3 className="trek-card__title">
          <Link to={to}>{trek.name}</Link>
        </h3>

        <div className="stat-row">
          <span>
            Days
            <b>{trek.days}</b>
          </span>
          <span>
            Group size
            <b>{trek.groupSize}</b>
          </span>
          <span>
            Difficulty
            <b>{trek.difficulty}</b>
          </span>
        </div>

        <p className="trek-card__summary">{trek.summary}</p>

        {trek.startPoint && <p className="trek-card__start">Starting from {trek.startPoint}</p>}

        <Link to={to} className="btn btn-outline-dark trek-card__cta">
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
