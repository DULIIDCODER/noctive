export default function TrustBar() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1200px",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          color: "#888",
          fontSize: ".95rem",
          borderTop: "1px solid #222",
          borderBottom: "1px solid #222",
          padding: "25px 0",
        }}
      >
        <span>24/7 Coverage</span>

        <span>Revenue Focused</span>

        <span>Trained Chatters</span>

        <span>Performance Managed</span>

        <span>Worldwide Talent</span>
      </div>
    </section>
  );
}