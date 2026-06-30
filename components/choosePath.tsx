import Link from "next/link";
import FadeIn from "./FadeIn";

export default function ChoosePath() {
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
            fontSize: "clamp(2rem, 5vw, 3rem)",
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          Choose Your Path
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          <Link
            href="/chatters"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              className="stat-card"
              style={{
                cursor: "pointer",
                padding: "20px",
              }}
            >
              <h3>Join Noctive</h3>

              <p>
                Work remotely, receive professional training,
                and become part of an elite
                performance-driven team.
              </p>

              <span
                style={{
                  color: "#a855f7",
                }}
              >
                Apply Now →
              </span>
            </div>
          </Link>

          <Link
            href="/agencies"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              className="stat-card"
              style={{
                cursor: "pointer",
                padding: "20px",
              }}
            >
              <h3>Partner With Noctive</h3>

              <p>
                Scale your creator business with trained
                chatters, management systems, and
                24/7 coverage.
              </p>

              <span
                style={{
                  color: "#a855f7",
                }}
              >
                Book A Call →
              </span>
            </div>
          </Link>
        </div>
      </section>
    </FadeIn>
  );
}