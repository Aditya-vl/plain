import { useState } from "react";
import { galleryItems } from "../data/site.js";
import "./Gallery.css";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <div className="gallery">
      <div className="gallery__strip" role="list">
        {galleryItems.map((item, i) => (
          <button
            key={item.label}
            role="listitem"
            className="gallery__tile"
            onClick={() => setActive(i)}
            aria-label={`Open image: ${item.label}`}
          >
            {item.image ? (
              <img src={item.image} alt={item.label} loading="lazy" />
            ) : (
              <div className={`gallery__fallback tone-${item.tone}`} />
            )}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div className="gallery__lightbox" role="dialog" aria-modal="true" aria-label={galleryItems[active].label}>
          <div className="gallery__lightbox-inner">
            <button className="gallery__close" onClick={() => setActive(null)} aria-label="Close image">
              &times;
            </button>
            {galleryItems[active].image ? (
              <img className="gallery__lightbox-media" src={galleryItems[active].image} alt={galleryItems[active].label} />
            ) : (
              <div className={`gallery__lightbox-media tone-${galleryItems[active].tone}`} />
            )}
            <p>{galleryItems[active].label}</p>
            <div className="gallery__lightbox-nav">
              <button
                onClick={() => setActive((active - 1 + galleryItems.length) % galleryItems.length)}
                aria-label="Previous image"
              >
                &larr; Prev
              </button>
              <button onClick={() => setActive((active + 1) % galleryItems.length)} aria-label="Next image">
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}