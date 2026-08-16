import { Link } from "react-router-dom";
import TripForm from "../components/TripForm.jsx";
import TrekCard from "../components/TrekCard.jsx";
import RidgeDivider from "../components/RidgeDivider.jsx";
import TrailBackdrop from "../components/TrailBackdrop.jsx";
import Gallery from "../components/Gallery.jsx";
import { treks } from "../data/treks.js";
import { whyChooseUs, coreValues } from "../data/site.js";
import { posts } from "../data/blog.js";
import "./Home.css";

export default function Home() {
  const topPicks = treks.filter((t) => t.featured);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="hero__peaks" aria-hidden="true">
          {/* <svg viewBox="0 0 1440 500" preserveAspectRatio="none">
            <path d="M0,500 L0,300 L160,180 L280,260 L420,90 L560,230 L720,120 L860,240 L1000,70 L1160,220 L1300,140 L1440,240 L1440,500 Z" fill="#1f3244" />
            <path d="M0,500 L0,380 L120,300 L260,360 L400,240 L540,340 L700,250 L880,360 L1040,230 L1200,330 L1440,270 L1440,500 Z" fill="#14212c" />
          </svg> */}
           <img
           src="images/hero.jpg"
            alt=""
             className="hero-mountain"
          />
           </div>

        <div className="wrap hero__row">
          <div className="hero__copy">
            <p className="eyebrow">Pithoragarh, Uttarakhand &middot; Est. local guides</p>
            <h1 className="h1">
              Explore &amp; Trek
              <br />
              The Cold Desert
              <br />
              Of Himalayas
            </h1>
            <p className="lede">
              Let us craft your unforgettable journey from vast valley to border area designed by us.
            </p>
            <div className="hero__cta">
              <Link to="/treks-tours" className="btn btn-primary">
                 Tours
              </Link>
              <Link to="/services" className="btn btn-outline">
                Other Services
              </Link>
            </div>

            <dl className="hero__stats">
              <div>
                <dt>Peaks &amp; passes</dt>
                <dd>12+ routes</dd>
              </div>
              <div>
                <dt>Rating on JustDial</dt>
                <dd>5.0 &#9733;</dd>
              </div>
              <div>
                <dt>Base</dt>
                <dd>Pithoragarh</dd>
              </div>
            </dl>
          </div>

          <div className="hero__form">
            <TripForm variant="compact" theme="dark" title="Planning A Trip?" subtitle="Our team can help you." />
          </div>
        </div>
      </section>
      <RidgeDivider fill="var(--ice)" />

      {/* ---------------- FULL ENQUIRY BAND ---------------- */}
      <section className="section section--stone planning-band">
        <div className="wrap planning-band__row">
          <div>
            <p className="eyebrow">Booking Enquiry</p>
            <h2 className="h2">Let us help create your perfect itinerary</h2>
            <p className="lede">
              Tell us where you'd like to go and roughly when  we'll come back with a route, a price and
              the permits sorted, or help you shape a custom trip from scratch.
            </p>
            <ul className="planning-band__points">
              <li>Inner Line Permits &amp; registrations handled for you</li>
              <li>Vehicles matched to group size and terrain</li>
              <li>Local guides on every route we run</li>
            </ul>
          </div>
          {/* <TripForm
            variant="full"
            theme="light"
            title="Send Enquiry for Booking "
            subtitle="We will reply within a day."
          /> */}
          <img
       src="/images/om-parvat.jpg"
       alt="Adi Kailash Tours"
       className="planning-band__image"
        />  

        </div>
      </section>

      {/* ---------------- TOP PICKS ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our Top Picks</p>
            <h1 className="h2">As recommended by our customers and guides</h1>
          </div>

          <div className="trail-wrap">
            <TrailBackdrop />
            <div className="grid grid-4">
              {topPicks.map((t, i) => (
                <TrekCard trek={t} index={i + 1} key={t.slug} />
              ))}
            </div>
          </div>

          <p className="lede top-picks__note">
            We provide services like  spiritual pilgrimages , scenic tours  trekking expeditions, expeditions,in  Uttarakhand
            \u2014 whichever kind of Himalayan trip you're after, this is where it starts.
          </p>
          <Link to="/treks-tours" className="btn btn-rust">
            View All Packages
          </Link>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="section section--dark">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our  Adventures</p>
            <h2 className="h2">Images from our expeditions</h2>
          </div>
          <Gallery />
        </div>
      </section>
      <RidgeDivider fill="var(--paper)" flip />

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="h2">Each journey starts with a plan</h2>
            <p className="lede">
              We're locals from Uttarakhand who understand its mountains, culture and traditions deeply \u2014
              that's what lets us design trips that feel authentic, well-paced and genuinely well planned.
            </p>
          </div>
          <div className="grid grid-4 why-grid">
            {whyChooseUs.map((w) => (
              <div className="why-card" key={w.title}>
                <span className="chip chip--outline">{w.tag}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- RATING CALLOUT ---------------- */}
      <section className="section--tight rating-band">
        <div className="wrap rating-band__row">
          <div>
            <p className="eyebrow">Why Do Our Customers Love Us?</p>
            <h2 className="h3">Read our ratings</h2>
          </div>
          <a
            className="btn btn-outline-dark"
            href="https://www.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            Read Our Google  Reviews
          </a>
        </div>
      </section>

      {/* ---------------- CORE VALUES ---------------- */}
      <section className="section section--stone">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our Core Values</p>
            <h2 className="h2">Travel that means something</h2>
            <p className="lede">
              We believe travel should be meaningful and inspiring, so we build experiences that go beyond
              ordinary trips and help you connect with nature and culture.
            </p>
          </div>
          <div className="grid grid-3">
            {coreValues.map((v) => (
              <div className="value-card card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---------------- BLOG PREVIEW ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">From The Blog</p>
            <h2 className="h2">Trail notes &amp; trip planning</h2>
          </div>
          <div className="grid grid-2">
            {posts.slice(0, 2).map((p) => (
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
        </div>
      </section>
    </>
  );
}
