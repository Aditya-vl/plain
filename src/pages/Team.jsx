import { team } from "../data/site.js";
import "./Team.css";

const initials = (name) =>
  name
    .replace(/[\u2018\u2019]/g, "")
    .split(" ")
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow"> Our Team</p>
          <h1 className="h2">The People Behind The Route</h1>
          <p className="lede">Locally born, mountain-raised, and trained on the very trails we run.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid grid-3 team-grid">
          {team.map((t) => (
            <div className="team-card card" key={t.name}>
              <div className="team-card__avatar" aria-hidden="true">
                {initials(t.name)}
              </div>
              <h3>{t.name}</h3>
              <p className="team-card__role">{t.role}</p>
              <p className="team-card__bio">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
