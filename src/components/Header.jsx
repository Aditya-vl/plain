import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/treks-tours", label: "Treks & Tours" },
  { to: "/services", label: "Services" },
  { to: "/our-team", label: "Our Team" },
  { to: "/contact", label: "Contacts" },
  // { to: "/blog", label: "Blog" },  
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header__row">
        <NavLink to="/" className="site-header__logo" aria-label="ADI KAILASH TOURS, home">
          {/* <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="12" fill="var(--gold)" />
            <path d="M6 46 L22 22 L30 34 L38 16 L58 46 Z" fill="var(--ink)" />
          </svg> */}
             <img
               src="/mountain_vector.svg"
               alt=""
               className="site-header__logo-icon"
               />

          <span>
            ADI KAILASH
            <em>TOURS</em>
          </span>
        </NavLink>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                  {l.label}
                </NavLink>
              </li>
            ))}


                 <li>
                    <a
                      href="https://wa.me/919458147907?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20tours."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-whatsapp-btn"
                    >
                      BOOK NOW
                    </a>
                  </li>

          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="tel:+919458147907" className="site-header__phone">
            +91 9458147907
          </a>
          <button
            className={`hamburger ${open ? "is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile">
        <ul>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="tel:+919458147907">+91 9458147907</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
