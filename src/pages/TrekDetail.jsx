import { Link, useParams } from "react-router-dom";
import { getTrekBySlug, treks } from "../data/treks.js";
import TripForm from "../components/TripForm.jsx";
import RidgeDivider from "../components/RidgeDivider.jsx";
import "./TrekDetail.css";

export default function TrekDetail() {
  const { slug } = useParams();
  const trek = getTrekBySlug(slug);

  if (!trek || !trek.hasDetail) {
    return (
      <section className="section">
        <div className="wrap not-found">
          <p className="eyebrow">Treks &amp; Tours</p>
          <h1 className="h2">Ask us for the full details</h1>
          <p className="lede">
            {trek ? `${trek.name} runs as a custom-planned trip \u2014 send an enquiry and we'll come back with dates, pricing and a route.` : "We couldn't find that trek, but our team can still help you plan one."}
          </p>
          <div className="not-found__cta">
            <Link to="/contact" className="btn btn-primary">
              Ask For Details
            </Link>
            <Link to="/treks-tours" className="btn btn-outline-dark">
              Back To All Treks
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const others = treks.filter((t) => t.hasDetail && t.slug !== trek.slug).slice(0, 3);

  return (
    <>
      <section className={`trek-hero tone-${trek.tone}`}>
        <div className="wrap trek-hero__inner">
          <p className="eyebrow">
            <Link to="/treks-tours">Treks &amp; Tours</Link> / {trek.name}
          </p>
          <h1 className="h1 trek-hero__title">{trek.name}</h1>
          {trek.badge && <span className="chip chip--gold">{trek.badge}</span>}
        </div>
      </section>
      <RidgeDivider fill="var(--paper)" />

      <section className="section">
        <div className="wrap trek-detail__grid">
          <div>
            <dl className="trek-stats">
              <div>
                <dt>Days</dt>
                <dd>{trek.days}</dd>
              </div>
              <div>
                <dt>Group size</dt>
                <dd>{trek.groupSize}</dd>
              </div>
              <div>
                <dt>Difficulty</dt>
                <dd>{trek.difficulty}</dd>
              </div>
              <div>
                <dt>Starting from</dt>
                <dd>{trek.startPoint}</dd>
              </div>
            </dl>

            <h2 className="h3 trek-detail__heading">Overview</h2>
            <p className="lede trek-detail__desc">{trek.description}</p>

            {trek.highlights.length > 0 && (
              <>
                <h2 className="h3 trek-detail__heading">Trip Highlights</h2>
                <ul className="highlight-list">
                  {trek.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="h3 trek-detail__heading">What's Included</h2>
            <ul className="highlight-list">
              <li>Inner Line Permits &amp; local registrations, where required</li>
              <li>Ground transport in Tempo Traveller, Bolero or Innova</li>
              <li>Village homestay or trekker-hut accommodation</li>
              <li>Local, licensed trek leader for the full route</li>
              <li>Oxygen &amp; basic medical kit on high-altitude sections</li>
            </ul>

            <div className="others">
              <h2 className="h3 trek-detail__heading">You Might Also Like</h2>
              <ul className="others__list">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/treks-tours/${o.slug}`}>{o.name} &rarr;</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="trek-detail__aside">
            <TripForm
              variant="full"
              theme="dark"
              title="Enquire About This Trip"
              subtitle={`Ask us about dates and pricing for ${trek.name}.`}
            />
          </aside>
        </div>
      </section>
    </>
  );
}
