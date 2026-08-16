import TripForm from "../components/TripForm.jsx";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Home / Contacts</p>
          <h1 className="h2">Get In Touch</h1>
          <p className="lede">Questions regarding price , route and date reach us directly or send an enquiry below.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <div className="contact-info__item">
              <span className="eyebrow">Address</span>
              <p>Pithoragarh, Uttarakhand, India</p>
            </div>
            <div className="contact-info__item">
              <span className="eyebrow">Email</span>
              <a href="mailto:adikailashtours05@gmail.com">adikailashtours05@gmail.com</a>
            </div>
            <div className="contact-info__item">
              <span className="eyebrow">Phone</span>
              <a href="tel:+919458147907">+91 9458147907</a>
            </div>
            <div className="contact-info__item">
              <span className="eyebrow">Phone</span>
              <a href="tel:+919997653710">+91 9997653710</a>
            </div>
            <div className="contact-info__item">
              <span className="eyebrow">WhatsApp</span>
              <a
                href="https://api.whatsapp.com/send/?phone=919458147907&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                Chat with us
              </a>
            </div>

           

          </div>

          <TripForm variant="full" theme="light" title="Send A Message" subtitle="We usually reply within a day." />
        </div>
      </section>
    </>
  );
}
