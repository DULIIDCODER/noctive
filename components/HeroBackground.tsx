export default function HeroBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: "-300px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80vw",
        height: "80vw",
        maxWidth: "1000px",
        maxHeight: "1000px",
        background:
          "radial-gradient(circle, rgba(124,58,237,.15), transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}