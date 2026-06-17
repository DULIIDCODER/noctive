import Link from "next/link";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <>

      <HeroBackground />

      <section
      style={{
        textAlign: "center",
        maxWidth: "1100px",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 5rem)",
          fontWeight: "bold",
          marginBottom: "20px",
          lineHeight: "1",
        }}
      >
        Turn Conversations 
        <br />
        Into Revenue
      </h1>

      <p
  style={{
    color: "#a1a1aa",
    fontSize: "1.5rem",
    marginBottom: "30px",
    lineHeight: "1.6",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto",
  }}
>
  Elite chatters. Proven systems.
  <br />
  Predictable growth.
</p>

      <p
        style={{
          color: "#999",
          fontSize: "1.3rem",
          marginBottom: "40px",
        }}
      >
        We recruit, train and manage elite chatters
        that turn conversations into predictable revenue.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
<Link
  href="/contact"
  style={{
    background: "#7c3aed",
    color: "white",
    textDecoration: "none",
    padding: "16px 32px",
    borderRadius: "50px",
  }}
>
  Book Discovery Call
</Link>

      <Link
  href="/results"
  style={{
    background: "transparent",
    color: "white",
    textDecoration: "none",
    border: "1px solid #444",
    padding: "16px 32px",
    borderRadius: "50px",
  }}
>
  View Results
</Link>
      </div>
      </section>
    </>
  );
}