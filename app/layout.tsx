import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua | Software Engineer & Technical Lead",
  description:
    "Portfolio of Joshua Israel Muthu S — Senior Backend Engineer, Technical Lead, and aspiring Architect specializing in Java, cloud, distributed systems, and AI/ML.",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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