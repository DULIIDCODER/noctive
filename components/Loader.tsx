"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#050505",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99999,
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          letterSpacing: "8px",
        }}
      >
        NOCTIVE
      </h1>

      <p>Initializing Revenue Systems...</p>
    </div>
  );
}