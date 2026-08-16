import { useState } from "react";
import { Link } from "react-router-dom";
import { treks } from "../data/treks.js";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  };

  const topTreks = treks.filter((t) => t.featured);

  return (
    <footer className="site-footer">
      <div className="wrap footer-newsletter">
        <div>
          <p className="eyebrow">Stay In The Loop</p>
          {/* <h3 className="h3">Subscribe for trip dates &amp; trail notes</h3> */}
        </div>
        <form className="newsletter-form" onSubmit={onSubscribe} noValidate>
          {/* <input
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
          /> */}
          <button
  className="btn btn-primary"
  type="button"
  onClick={() => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfj41Z806KtEeFJHyLNZsXq28k4HGo0xc6U_3Xfo58W_Q0lVw/viewform",
      "_blank",
      "noopener,noreferrer"
    );
  }}
>
  TOUR INQUIRY  
</button>
        </form>
      </div>
      {status === "success" && (
        <div className="wrap">
          {/* <p className="form-note form-note--ok">You're subscribed \u2014 welcome aboard.</p> */}
        </div>
      )}
      {status === "error" && (
        <div className="wrap">
          <p className="form-note form-note--err">Enter a valid email address to subscribe.</p>
        </div>
      )}

      <div className="wrap footer-grid">
        <div>
          <p className="eyebrow">Our Treks &amp; Tours</p>
          <ul>
            {topTreks.map((t) => (
              <li key={t.slug}>
                <Link to={`/treks-tours/${t.slug}`}>{t.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/treks-tours">All Treks &amp; Tours</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Our Services</p>
          <ul>
            <li>Permit Assistance</li>
            <li>Accommodation Booking</li>
            <li>Taxi &amp; Transport Services</li>
            <li>Customised Itineraries</li>
            <li>Local Guides</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contacts</p>
          <ul>
            <li>Pithoragarh, Uttarakhand, India</li>
            <li>
              <a href="mailto:adikailashtours05@gmail.com">adikailashtours05@gmail.com</a>
            </li>
            <li>
              <a href="tel:+919458147907">+91 9458147907</a>
            </li>
            <li>
              <a href="tel:+919997653710">+91 9997653710</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <div className="footer-social" aria-label="Social media links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M14 9h3V6h-3c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v6h3v-6H16l.5-3h-3V9.7c0-.4.3-.7.5-.7Z"/></svg>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4 4l7 9-7 7h2l6-6 5 6h4l-8-9.5L21 4h-2l-5.5 5.5L9 4H4z"/></svg>
          </a>
          <a href="https://www.instagram.com/adikailashtours?igsh=MXF4NWg1eG5uM210Mg%3D%3D&igsi=MXF4NWg1eG5uM210Mg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.8" fill="currentColor"/></svg>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Adi Kailash Tours &middot; <Link to="/contact">Contact us</Link> &middot;{" "}
          <Link to="/privacy-policy">Privacy policy</Link> &middot; <Link to="/terms">Terms &amp; Conditions</Link>
        </p>
      </div>
    </footer>
  );
}
