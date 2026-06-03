import Image from "next/image";
import { Mail } from "lucide-react";

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-(--border)">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/logo-mark.svg" alt="Mintum mark" width={28} height={28} />
          <span className="text-sm font-semibold text-(--text)">Pham Minh Tam</span>
        </div>

        <p className="text-xs text-(--text-muted)">
          © {new Date().getFullYear()} Pham Minh Tam. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/minhtam-mintum/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--accent) hover:border-(--accent) transition-colors"
          >
            <LinkedinIcon size={14} />
          </a>
          <a
            href="mailto:ph.minhtam.0611@gmail.com"
            className="w-8 h-8 rounded-lg border border-(--border) flex items-center justify-center text-(--text-muted) hover:text-(--accent) hover:border-(--accent) transition-colors"
          >
            <Mail size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
