import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taylor Frank | Staff Software Engineer",
  description:
    "Staff-scope software engineer focused on distributed systems, platform engineering, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
