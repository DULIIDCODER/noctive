export default function Particles() {
  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "rgba(168,85,247,.4)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            pointerEvents: "none",
            zIndex: -2,
          }}
          className="particle"
        />
      ))}
    </>
  );
}