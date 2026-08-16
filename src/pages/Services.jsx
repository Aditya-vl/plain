import { Link } from "react-router-dom";
import { services } from "../data/site.js";
import TripForm from "../components/TripForm.jsx";
import "./Services.css";

const ICONS = {
  "Taxi & Transport Services": "\ud83d\ude99",
  "Accommodation Booking": "\ud83c\udfe1",
  "Permit Assistance": "\ud83d\udcc4",
  "Customised Itineraries": "\ud83d\uddfa\ufe0f",
  "Local Guides": "\ud83e\udded",
};

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Home / Services</p>
          <h1 className="h2">Pithoragarh Tourism Services</h1>
          <p className="lede">Everything around the trek, handled \u2014 so you can focus on the trail.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2 services-grid">
            {services.map((s) => (
              <div className="service-card card" key={s.title}>
                <span className="service-card__icon" aria-hidden="true">
                  {ICONS[s.title] || "\u26f0\ufe0f"}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--stone">
        <div className="wrap enquiry-band">
          <div>
            <p className="eyebrow">Need Something Specific?</p>
            <h2 className="h2">Tell us what your trip needs</h2>
            <p className="lede">
              Whether it's just a permit, a private taxi for a week, or a fully custom itinerary, send us
              the details and we'll put a plan together.
            </p>
            <Link to="/treks-tours" className="btn btn-outline-dark">
              Browse Treks &amp; Tours
            </Link>
          </div>
          <TripForm variant="full" theme="light" title="Send Message" />
        </div>
      </section>
    </>
  );
}
