// Winding dashed "route line" that sits behind a grid of trek cards,
// echoing the dotted paths on a trekking map. Purely decorative.
export default function TrailBackdrop() {
  return (
    <svg
      aria-hidden="true"
      className="trail-backdrop"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
    >
      <path
        d="M-20,340 C 180,300 220,120 420,150 C 620,180 640,20 860,60 C 1040,95 1080,260 1240,220"
        fill="none"
        stroke="var(--stone-3)"
        strokeWidth="3"
        strokeDasharray="2 16"
        strokeLinecap="round"
      />
      <circle cx="20" cy="332" r="6" fill="var(--rust)" />
      <circle cx="420" cy="150" r="6" fill="var(--gold)" />
      <circle cx="860" cy="60" r="6" fill="var(--juniper)" />
      <circle cx="1190" cy="224" r="6" fill="var(--rust)" />
    </svg>
  );
}
