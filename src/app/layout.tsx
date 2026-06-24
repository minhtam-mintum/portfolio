import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Mintum — Frontend Developer",
  description:
    "Mintum (Pham Minh Tam) — Frontend Developer with 4 years of experience building ReactJS, NextJS, and TypeScript applications for banking, e-commerce, healthcare, and energy teams.",
  keywords: [
    "Pham Minh Tam",
    "Mintum",
    "Frontend Developer",
    "ReactJS",
    "NextJS",
    "TypeScript",
    "TanStack Query",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#0B1220" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen font-[var(--font-geist),sans-serif] antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
