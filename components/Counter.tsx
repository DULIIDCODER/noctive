"use client";

import CountUp from "react-countup";

export default function Counter({
  end,
}: {
  end: number;
}) {
  return <CountUp end={end} duration={3} />;
}