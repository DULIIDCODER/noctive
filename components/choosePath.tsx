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
            fontSize: "3rem",
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
              "repeat(auto-fit, minmax(400px, 1fr))",
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
                height: "100%",
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
                height: "100%",
              }}
            >
              <h3>Hire Noctive Chatters</h3>

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