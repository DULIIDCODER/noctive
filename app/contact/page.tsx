export default function Contact() {
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
          Let's Talk Growth
        </h1>

        <p
          style={{
            color: "#999",
            fontSize: "1.3rem",
            marginBottom: "80px",
          }}
        >
          Whether you're looking to hire elite chatters or
          join our team, we'd love to hear from you.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
            marginBottom: "80px",
          }}
        >
          <div className="stat-card">
            <h3>Business Inquiries</h3>
            <p>For creators, agencies and partnerships.</p>
          </div>

          <div className="stat-card">
            <h3>Recruitment</h3>
            <p>Questions regarding chatter applications.</p>
          </div>

          <div className="stat-card">
            <h3>Support</h3>
            <p>Need help? We're here to assist.</p>
          </div>
        </div>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <input placeholder="Full Name" />
          <input placeholder="Email Address" />
          <input placeholder="Company / Agency Name" />

          <textarea
            placeholder="Tell us about your project"
            rows={6}
          />

          <button>
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}