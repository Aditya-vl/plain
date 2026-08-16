// A hand-built ridgeline silhouette used to seam two sections together,
// like a skyline cut into the page. `fill` should match the section
// BELOW the divider (the divider sits at the bottom edge of the section
// it's rendered inside).
export default function RidgeDivider({ fill = "var(--stone)", flip = false }) {
  return (
    <div
      aria-hidden="true"
      className="ridge-divider"
      style={{
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : "none",
        marginBottom: flip ? "-1px" : 0,
        marginTop: flip ? 0 : "-1px",
      }}
    >
      
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "clamp(48px, 9vw, 120px)", display: "block" }}
      >
        <path
          d="M0,120 L0,64 L120,30 L230,72 L340,12 L430,58 L560,20 L640,64 L760,8 L880,54 L980,26 L1100,66 L1220,18 L1320,50 L1440,24 L1440,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
