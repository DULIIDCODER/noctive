import Link from "next/link";

interface ButtonProps {
  text: string;
  href: string;
  primary?: boolean;
}

export default function Button({
  text,
  href,
  primary = false,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={primary ? "btn-primary" : "btn-secondary"}
    >
      {text}
    </Link>
  );
}