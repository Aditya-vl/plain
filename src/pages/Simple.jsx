export default function Simple({ title, text }) {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Home / {title}</p>
          <h1 className="h2">{title}</h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="lede" style={{ maxWidth: "70ch" }}>
            {text}
          </p>
        </div>
      </section>
    </>
  );
}
