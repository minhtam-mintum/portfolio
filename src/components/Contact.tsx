"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.74c-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.29 9.29 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-(--bg-secondary)">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text) tracking-tight">
            Let&apos;s <span className="text-(--accent)">[work]</span> together
          </h2>
          <p className="mt-3 text-(--text-muted) text-base">
            Open to full-time, remote jobs or freelance projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-(--text)">Get in touch</h3>
            <p className="text-sm text-(--text-muted) leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want
              to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              <InfoRow icon={<Mail size={16} />} text="ph.minhtam.0611@gmail.com" />
              <InfoRow icon={<Phone size={16} />} text="0336 440 678" />
              <InfoRow icon={<MapPin size={16} />} text="Ho Chi Minh City, Vietnam" />
              <a
                href="https://github.com/minhtam-mintum"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--accent) transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-(--bg-card) border border-(--border) flex items-center justify-center text-(--accent)">
                  <GithubIcon size={16} />
                </span>
                github.com/minhtam-mintum
              </a>
              <a
                href="https://www.linkedin.com/in/minhtam-mintum/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-(--text-muted) hover:text-(--accent) transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-(--bg-card) border border-(--border) flex items-center justify-center text-(--accent)">
                  <LinkedinIcon size={16} />
                </span>
                linkedin.com/in/minhtam-mintum
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-(--border) bg-(--bg-card)">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-(--text-muted)">
                Available for new opportunities
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--bg-card) text-(--text) placeholder-(--text-muted) text-sm outline-none focus:border-(--accent) transition-colors"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--bg-card) text-(--text) placeholder-(--text-muted) text-sm outline-none focus:border-(--accent) transition-colors"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-xl border border-(--border) bg-(--bg-card) text-(--text) placeholder-(--text-muted) text-sm outline-none focus:border-(--accent) transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed bg-(--accent)"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message sent!"
              ) : status === "error" ? (
                "Failed to send. Try again."
              ) : (
                <>
                  Send Message <Send size={14} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-(--text-muted)">
      <span className="w-8 h-8 rounded-lg bg-(--bg-card) border border-(--border) flex items-center justify-center text-(--accent) shrink-0">
        {icon}
      </span>
      {text}
    </div>
  );
}
