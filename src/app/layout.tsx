import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Pham Minh Tam — Frontend Developer",
  description:
    "Frontend Developer with 4 years of experience building scalable web applications using ReactJS, NextJS, and TypeScript.",
};

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
