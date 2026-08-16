import { useMemo, useState } from "react";
import TrekCard from "../components/TrekCard.jsx";
import TrailBackdrop from "../components/TrailBackdrop.jsx";
import TripForm from "../components/TripForm.jsx";
import { treks, CATEGORIES } from "../data/treks.js";
import "./Treks.css";

export default function Treks() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(
    () => (active === "all" ? treks : treks.filter((t) => t.category === active)),
    [active]
  );

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Home / Treks &amp; Tours</p>
          <h1 className="h2">Treks &amp; Tours</h1>
          <p className="lede">Where every trail leads to something deeper.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filter-tabs" role="tablist" aria-label="Filter treks by category">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                className={`filter-tab ${active === c.id ? "is-active" : ""}`}
                onClick={() => setActive(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="trail-wrap">
            <TrailBackdrop />
            <div className="grid grid-4 treks-grid">
              {filtered.map((t, i) => (
                <TrekCard trek={t} index={i + 1} key={t.slug} />
              ))}
            </div>
          </div>

          {filtered.length === 0 && <p className="lede">No tours in this category yet \u2014 check back soon.</p>}
        </div>
      </section>

      <section className="section section--stone">
        <div className="wrap enquiry-band">
          <div>
            <p className="eyebrow">Booking Enquiry</p>
            <h2 className="h2">Let our team help plan your perfect holiday</h2>
            <p className="lede">
              Send a booking enquiry using the form, or message us directly on WhatsApp so we can start
              designing your next adventure. Choose from our tour packages above, or ask us to build a
              custom itinerary from scratch.
            </p>
            <a
              className="btn btn-rust"
              href="https://api.whatsapp.com/send/?phone=919458147907&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Chat
            </a>
          </div>
          <TripForm variant="full" theme="light" title="Send Message" />
        </div>
      </section>
    </>
  );
}
