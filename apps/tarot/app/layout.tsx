import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarot — AI-Powered Readings",
  description:
    "Draw three cards and receive a poetic tarot reading powered by AI.",
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
