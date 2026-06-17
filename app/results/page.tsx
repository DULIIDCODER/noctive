import Counter from "../../components/Counter";

export default function Results() {
  return (
    <main>
      <section
        style={{
          maxWidth: "1200px",
          width: "100%",
          padding: "140px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "20px",
          }}
        >
          Results Over Promises
        </h1>

        <p
          style={{
            color: "#999",
            fontSize: "1.3rem",
            marginBottom: "80px",
          }}
        >
          Our systems are built to generate measurable
          growth, not empty promises.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginBottom: "100px",
          }}
        >
          <div className="stat-card">
            <h3>
              $<Counter end={2} />M+
            </h3>
            <p>Revenue Generated</p>
          </div>

          <div className="stat-card">
            <h3>
              <Counter end={100} />+
            </h3>
            <p>Chatters Trained</p>
          </div>

          <div className="stat-card">
            <h3>24/7</h3>
            <p>Coverage</p>
          </div>

          <div className="stat-card">
            <h3>
              <Counter end={95} />%
            </h3>
            <p>Retention Rate</p>
          </div>
        </div>

        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "50px",
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
            <p>$12k → $42k/month</p>
          </div>

          <div className="stat-card">
            <h3>Lifestyle Agency</h3>
            <p>$58k → $118k/month</p>
          </div>

          <div className="stat-card">
            <h3>Personal Brand Creator</h3>
            <p>$7k → $29k/month</p>
          </div>
        </div>
      </section>
    </main>
  );
}