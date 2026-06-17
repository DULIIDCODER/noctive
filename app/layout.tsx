import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ProgressBar from "../components/ProgressBar";
import Particles from "../components/Particles";

export const metadata = {
  title: "Noctive",
  description: "Elite chatters. Proven systems. Predictable growth.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ProgressBar />
        <Navbar />
        <Loader />
        <Particles />

        {children}
      </body>
    </html>
  );
}
