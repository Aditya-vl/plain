import { useState } from "react";
import { treks } from "../data/treks.js";
import { WEB3FORMS_ACCESS_KEY } from "../config.js";
import "./TripForm.css";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  destination: "",
  tourists: "",
  travellingFrom: "",
  dates: "",
  message: "",
  accept: false,
};

export default function TripForm({ variant = "compact", theme = "dark", title, subtitle }) {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const isFull = variant === "full";

  const update = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: val }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.phone.trim() || !values.accept) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email, phone number and accept the policy before sending.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New trip enquiry — ${values.destination || "Pithoragarh Backpackers"}`,
          from_name: " Adi kailash Tours ",
          name: values.name,
          email: values.email,
          phone: values.phone,
          destination: values.destination,
          number_of_tourists: values.tourists,
          travelling_from: values.travellingFrom,
          desired_dates: values.dates,
          message: values.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setValues(EMPTY);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong sending your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
    }
  };

  return (
    <div className={`trip-form trip-form--${theme}`}>
      {(title || subtitle) && (
        <div className="trip-form__head">
          {title && <h3 className="h3" style={{ color: "#fff" }}>{title}</h3>}
          {subtitle && <p className="lede" style={{ color: "#fff" }}>{subtitle}</p>}
        </div>
      )}

      <form className="on-dark" onSubmit={onSubmit} noValidate>
        <div className="field-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="field">
            <label htmlFor={`${variant}-name`}>Name</label>
            <input id={`${variant}-name`} type="text" required value={values.name} onChange={update("name")} placeholder="Your full name" />
          </div>
          <div className="field">
            <label htmlFor={`${variant}-email`}>Email</label>
            <input id={`${variant}-email`} type="email" required value={values.email} onChange={update("email")} placeholder="you@example.com" />
          </div>
        </div>

        <div className="field-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="field">
            <label htmlFor={`${variant}-phone`}>Phone Number</label>
            <input id={`${variant}-phone`} type="tel" required value={values.phone} onChange={update("phone")} placeholder="+91" />
          </div>
          <div className="field">
            <label htmlFor={`${variant}-tourists`}>Number of Tourists</label>
            <input id={`${variant}-tourists`} type="number" min="1" value={values.tourists} onChange={update("tourists")} placeholder="e.g. 4" />
          </div>
        </div>

        <div className="field">
          <label htmlFor={`${variant}-dest`}>Destination</label>
          <select id={`${variant}-dest`} value={values.destination} onChange={update("destination")}>
            <option value="">Choose a trek or tour</option>
            {treks.map((t) => (
              <option key={t.slug} value={t.name}>
                {t.name}
              </option>
            ))}
            <option value="Not sure yet">Help me Choose</option>
          </select>
        </div>

        {isFull && (
          <>
            <div className="field-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="field">
                <label htmlFor="full-dates">Desired Dates</label>
                <input id="full-dates" type="text" value={values.dates} onChange={update("dates")} placeholder="e.g. 12–18 Oct 2026" />
              </div>
              <div className="field">
                <label htmlFor="full-from">Travelling From</label>
                <input id="full-from" type="text" value={values.travellingFrom} onChange={update("travellingFrom")} placeholder="City" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="full-message">Additional Info</label>
              <textarea id="full-message" rows="3" value={values.message} onChange={update("message")} placeholder="Anything else we should know?" />
            </div>
          </>
        )}

        <label className="field-check">
          <input type="checkbox" checked={values.accept} onChange={update("accept")} required />
          <span>You accept the terms of service and the privacy policy</span>
        </label>

        <button className="btn btn-primary btn-block" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send"}
        </button>

        {status === "success" && (
          <p className="form-note form-note--ok" role="status">
            Congratulations — your message has been sent successfully.
          </p>
        )}
        {status === "error" && (
          <p className="form-note form-note--err" role="alert">
            {errorMsg}
          </p>
        )}
      </form>
    </div>
  );
}