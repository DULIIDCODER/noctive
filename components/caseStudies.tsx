import FadeIn from "./FadeIn";

export default function CaseStudies() {
  return (
    <FadeIn>
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          padding: "100px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Success Stories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          <div className="stat-card">
            <h3>Fitness Creator</h3>

            <p>
              Revenue increased from
              <br />
              <strong>$12,000 → $42,000/month</strong>
            </p>
          </div>

          <div className="stat-card">
            <h3>Lifestyle Agency</h3>

            <p>
              Revenue increased from
              <br />
              <strong>$58,000 → $118,000/month</strong>
            </p>
          </div>

          <div className="stat-card">
            <h3>Personal Brand Creator</h3>

            <p>
              Revenue increased from
              <br />
              <strong>$7,000 → $29,000/month</strong>
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}