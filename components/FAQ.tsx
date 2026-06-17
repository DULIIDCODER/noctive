export default function FAQ() {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1000px",
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
        Frequently Asked Questions
      </h2>

      <div className="stat-card">
        <h3>How quickly can we start?</h3>

        <p>
          Most clients are onboarded within 7 days.
        </p>
      </div>

      <br />

      <div className="stat-card">
        <h3>Do you train chatters?</h3>

        <p>
          Yes. Every chatter goes through our internal training.
        </p>
      </div>

      <br />

      <div className="stat-card">
        <h3>Do you provide management?</h3>

        <p>
          Yes. Recruitment, management and performance tracking.
        </p>
      </div>
    </section>
  );
}