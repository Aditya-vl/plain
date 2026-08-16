import { useState } from "react";
import { treks } from "../data/treks.js";
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
  const isFull = variant === "full";

  const update = (key) => (e) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: val }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!values.name.trim() || !values.email.trim() || !values.phone.trim() || !values.accept) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setValues(EMPTY);
    }, 900);
  };

  return (
    <div className={`trip-form trip-form--${theme}`}>
      {(title || subtitle) && (
        <div className="trip-form__head">
          {title && <h3 className="h3">{title}</h3>}
          {subtitle && <p className="lede">{subtitle}</p>}
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
                <input id="full-dates" type="text" value={values.dates} onChange={update("dates")} placeholder="e.g. 12\u201318 Oct 2026" />
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
          {status === "loading" ? "Sending\u2026" : "Send"}
        </button>

        {status === "success" && (
          <p className="form-note form-note--ok" role="status">
            Congratulations \u2014 your message has been sent successfully.
          </p>
        )}
        {status === "error" && (
          <p className="form-note form-note--err" role="alert">
            Please fill in your name, email, phone number and accept the policy before sending.
          </p>
        )}
      </form>
    </div>
  );
}
