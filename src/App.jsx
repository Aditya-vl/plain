import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Home from "./pages/Home.jsx";
import Treks from "./pages/Treks.jsx";
import TrekDetail from "./pages/TrekDetail.jsx";
import Services from "./pages/Services.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import GalleryPage from "./pages/Gallery.jsx";

import Simple from "./pages/Simple.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treks-tours" element={<Treks />} />
          <Route path="/treks-tours/:slug" element={<TrekDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryPage />} />
        <Route
            path="/privacy-policy"
            element={<Simple title="Privacy Policy" text="We collect  the details like name, contact information and trip preferences in order to plan and follow up on your trip. We do not sell or share your information with third parties beyond the guides, drivers and homestay partners needed to run your trip." />}
          />
          <Route
            path="/terms"
            element={<Simple title="Terms & Conditions" text="
               Itineraries may change for reasons of weather, road conditions or traveller safety at the guide's discretion. Cancellation terms are shared at the time of booking confirmation." />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
