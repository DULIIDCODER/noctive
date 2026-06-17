import Link from "next/link";

export default function CTA() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "150px 20px",
      }}
    >
      <h2
        style={{
          fontSize: "4rem",
          marginBottom: "20px",
        }}
      >
        Ready To Scale?
      </h2>

      <p
        style={{
          color: "#999",
          marginBottom: "40px",
        }}
      >
        Your subscribers are already messaging.
        The question is who's converting them?
      </p>

      <Link
        href="/contact"
        className="btn-primary"
      >
        Schedule Discovery Call
      </Link>
    </section>
  );
}