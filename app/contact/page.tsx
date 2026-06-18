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
          action="https://formspree.io/f/mykaaqjl"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <input 
          name="Full Name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="Email Address"
            placeholder="Email Address"
            required
          />

            <input
            name="Phone Number"
            placeholder="Phone Number"
            required
          />

          <input
          name="telegram"
            placeholder="Telegram Username"
          />


          <input
            name="Company / Agency Name"
            placeholder="Company / Agency Name"
            required
          />

          <textarea
            name="Tell us about your project"
            placeholder="Tell us about your project"
            rows={6}
            required
          />

          <button>
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}