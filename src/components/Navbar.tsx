"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/app/providers";
import { Menu, X, Moon, Sun } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-(--bg)/90 backdrop-blur-md border-b border-(--border)"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Image src="/logo-mark.svg" alt="Mintum mark" width={32} height={32} />
          <div className="leading-tight">
            <span className="font-bold text-sm text-(--text) block">Mintum</span>
            <span className="text-xs text-(--text-muted)">Frontend Developer</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-(--text-muted) hover:text-(--text) transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:block text-sm px-5 py-2 rounded-full border border-(--border) text-(--text) hover:border-(--accent) hover:text-(--accent) transition-colors"
          >
            Contact me
          </a>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-14 h-7 rounded-full border border-(--border) bg-(--bg-secondary) flex items-center px-1 transition-colors relative"
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 bg-(--accent) ${
                theme === "dark" ? "translate-x-0" : "translate-x-7"
              }`}
            >
              {theme === "dark" ? (
                <Moon size={11} className="text-white" />
              ) : (
                <Sun size={11} className="text-white" />
              )}
            </span>
          </button>

          <button
            className="md:hidden text-(--text)"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-(--bg-card) border-t border-(--border) px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-(--text-muted) hover:text-(--accent) transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm text-(--accent) font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
}
