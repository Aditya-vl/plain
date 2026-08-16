import Gallery from "../components/Gallery.jsx";

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Home / Gallery</p>
          <h1 className="h2">Photo Gallery</h1>
          <p className="lede">Images from our treks and tours across Kumaon.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Gallery />
        </div>
      </section>
    </>
  );
}