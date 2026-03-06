import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: "Staff-scope software engineer portfolio focused on platform architecture, distributed systems, and cloud infrastructure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
