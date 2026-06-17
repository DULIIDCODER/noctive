"use client";

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const current =
        window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScroll((current / height) * 100);
    };

    window.addEventListener(
      "scroll",
      updateScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        updateScroll
      );
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${scroll}%`,
        background:
          "linear-gradient(to right,#7c3aed,#a855f7)",
        zIndex: 999999,
      }}
    />
  );
}