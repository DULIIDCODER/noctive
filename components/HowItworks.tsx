import FadeIn from "./FadeIn";

export default function HowItWorks() {
  return (
    <FadeIn>
      <section
        style={{
        padding: "100px 20px",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        How It Works
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        <div className="stat-card">
          <h3>1</h3>
          <p>Discovery Call</p>
        </div>

        <div className="stat-card">
          <h3>2</h3>
          <p>Strategy & Audit</p>
        </div>

        <div className="stat-card">
          <h3>3</h3>
          <p>Team Deployment</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>Revenue Growth</p>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}