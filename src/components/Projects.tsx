"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Enterprise" | "E-commerce" | "Fintech" | "Personal";

const projects = [
  {
    category: "Fintech" as Category,
    title: "IVBank Management System",
    role: "Sole Frontend Developer",
    period: "10/2025 – 03/2026",
    desc: "Internal financial management platform supporting account management, billing, top-up operations, and reporting dashboards. Owned end-to-end frontend architecture from project setup to production.",
    tags: ["ReactJS", "TypeScript", "TailwindCSS", "Tanstack Query", "React Hook Form"],
    highlights: [
      "End-to-end frontend ownership",
      "Modular & scalable component architecture",
      "Data-intensive reporting dashboards",
      "Efficient data fetching with Tanstack Query",
    ],
  },
  {
    category: "E-commerce" as Category,
    title: "Locstoc E-commerce Platform",
    role: "Frontend Developer",
    period: "05/2024 – 10/2025",
    desc: "O2O (Online-to-Offline) retail platform enabling users to discover products online and complete purchases at physical stores, enhancing omnichannel customer experience.",
    tags: ["NextJS", "ReactJS", "TypeScript", "Redux Toolkit", "Tanstack Query"],
    highlights: [
      "Retailer portal, brand management & storefront",
      "SSR for improved SEO and performance",
      "Optimized image-heavy product pages",
      "Internal operational dashboards",
    ],
  },
  {
    category: "Enterprise" as Category,
    title: "Enterprise Systems",
    role: "Frontend Developer",
    period: "05/2022 – 05/2024",
    desc: "Enterprise platforms for EVN electricity billing, Affina Insurance policy management, and Giọt Máu Vàng healthcare campaigns.",
    tags: ["ReactJS", "Redux", "Redux Saga", "MUI", "REST API"],
    highlights: [
      "Billing, policy & donor system UI modules",
      "Complex business logic via RESTful APIs",
      "Internal admin & operational dashboards",
      "Maintained and scaled enterprise-grade apps",
    ],
  },
  {
    category: "Personal" as Category,
    title: "Calendar Task Planner",
    role: "Solo Developer",
    period: "2025",
    desc: "A personal productivity app for planning and tracking tasks on a calendar view, built as a side project to explore intuitive scheduling UX.",
    tags: ["ReactJS", "TypeScript", "TailwindCSS"],
    highlights: [
      "Interactive calendar-based task management",
      "Clean, minimal scheduling interface",
      "Side project driven by personal productivity needs",
    ],
    link: "https://caplander.netlify.app/",
    github: "https://github.com/minhtam-mintum/calendar-task-planner",
  },
  {
    category: "Personal" as Category,
    title: "Portfolio",
    role: "Solo Developer",
    period: "2026",
    desc: "Personal portfolio site showcasing projects and skills, built with Next.js and TailwindCSS. The site you're looking at right now.",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    highlights: [
      "Dark/light theme with custom design tokens",
      "Fully responsive across all screen sizes",
      "Deployed on Netlify with CI/CD",
    ],
    link: "https://mintum-portfolio.netlify.app/",
    github: "https://github.com/minhtam-mintum/portfolio",
  },
];

const categories: Category[] = ["All", "Fintech", "E-commerce", "Enterprise", "Personal"];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text) tracking-tight">
            My <span className="text-(--accent)">{"{"}dev{"}"}</span> projects
          </h2>
          <p className="mt-3 text-(--text-muted) text-base">
            From Web Apps to Enterprise Systems
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === c
                  ? "text-white bg-(--accent)"
                  : "bg-(--bg-secondary) text-(--text-muted) hover:text-(--text) border border-(--border)"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="bg-(--bg-card) border border-(--border) rounded-2xl p-6 flex flex-col gap-4 hover:border-(--accent) transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-(--accent) bg-(--accent)/10 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-bold text-(--text) leading-snug group-hover:text-(--accent) transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-(--text-muted) mt-0.5">
                    {p.role} · {p.period}
                  </p>
                </div>
                {"link" in p && p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visit ${p.title}`}
                  >
                    <ExternalLink
                      size={16}
                      className="shrink-0 text-(--text-muted) group-hover:text-(--accent) transition-colors mt-1"
                    />
                  </a>
                )}
              </div>

              <p className="text-sm text-(--text-muted) leading-relaxed">{p.desc}</p>

              <ul className="space-y-1">
                {p.highlights.map((h) => (
                  <li key={h} className="text-xs text-(--text-muted) flex gap-2 items-start">
                    <span className="text-(--accent) mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-(--border)">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-(--bg-secondary) text-(--text-muted) border border-(--border)"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
