"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "2rem",
          cursor: "pointer",
        }}
      >
        ☰
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            background: "#111",
            border: "1px solid #333",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 9999,
          }}
        >
          <Link href="/agencies">Agencies</Link>
          <Link href="/chatters">Chatters</Link>
          <Link href="/results">Results</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </>
  );
}