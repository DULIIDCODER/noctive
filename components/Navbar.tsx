 import Link from "next/link";
import MobileMenu from "./MobileMenu";


 export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(5,5,5,0.6)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #222",
        boxShadow:"0 10px 40px rgba(0,0,0,.2)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", letterSpacing: "4px" }}>
        NOCTIVE
      </Link>

     <>
  <div className="desktop-nav">
    <Link href="/agencies">Agencies</Link>
    <Link href="/chatters">Chatters</Link>
    <Link href="/results">Results</Link>
    <Link href="/contact">Contact</Link>
  </div>

  <div className="mobile-nav">
    <MobileMenu />
  </div>
</>
    </nav>
  );
}