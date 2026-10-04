import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joshua | Applied AI – Cloud Full-Stack Developer",
  description:
    "Portfolio of Joshua Israel Muthu S — Applied AI – Cloud Full-Stack Developer with 7+ years of experience in Java, cloud engineering, distributed systems, enterprise modernization, and AI/ML.",
  
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