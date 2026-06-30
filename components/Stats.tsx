import FadeIn from "./FadeIn";
import Counter from "./Counter";

export default function Stats() {
  return (
    <FadeIn>
    <section
      style={{
        padding: "160px 20px 100px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          marginBottom: "50px",
        }}
      >
        Results That Matter
      </h2>

      <div className="stats-grid">
      
        <div className="stat-card">
          <h3>
           $
            <Counter end={2} />
             M+
           </h3>
          <p>Revenue Generated</p>
        </div>

        <div className="stat-card">
          <h3>
            <Counter end={100} />
            +
            </h3>
            <p>Chatters Trained</p>
        </div>

        <div className="stat-card">
          <h3>24/7</h3>
          <p>Coverage</p>
        </div>

        <div className="stat-card">
          <h3>
            <Counter end={95} />
            %
          </h3>
          <p>Client Retention</p>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}