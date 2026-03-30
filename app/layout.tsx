import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felix Portfolio",
  description:
    "Portfolio of Felix Nshimyumukiza, a full stack developer and founder building lightweight systems, strong UI/UX, and scalable backend solutions.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

