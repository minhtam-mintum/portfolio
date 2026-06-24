"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Enterprise" | "E-commerce" | "Fintech" | "Personal";

const projects = [
  {
    category: "Fintech" as Category,
    title: "IVBank Backoffice Management System",
    role: "Sole Frontend Developer",
    period: "07/2025 – 03/2026",
    desc: "Comprehensive backoffice web application for a banking platform, enabling internal staff to manage customers, transactions, system configuration, and reporting. Owned end-to-end frontend architecture from React 18 + Vite + TypeScript setup to production.",
    tags: ["React 18", "TypeScript", "Vite", "TailwindCSS", "TanStack Query", "Highcharts", "React Hook Form"],
    highlights: [
      "Role-based access control with end-to-end SPA architecture",
      "Reusable UI component library — inputs, forms, data tables, modals, date pickers, charts",
      "Core banking modules: KYC, customer management, transaction management, SMS, vouchers, templates, and reporting",
      "TanStack Query caching — request deduplication, background refetching, cache invalidation",
      "Highcharts reporting dashboards + Excel export via SheetJS (XLSX)",
      "RSA encryption (JSEncrypt) for sensitive data handling",
    ],
  },
  {
    category: "E-commerce" as Category,
    title: "LocStoc O2O E-commerce Storefront",
    role: "Frontend Developer",
    period: "01/2023 – 10/2025",
    desc: "Consumer-facing O2O e-commerce marketplace within the LocStoc system, connecting online shopping with in-store retail. Built with NextJS SSR for SEO and load performance.",
    tags: ["NextJS", "TypeScript", "React Query", "React Hook Form", "Axios", "SASS/CSS"],
    highlights: [
      "NextJS SSR with optimized image-heavy product listing & detail pages for SEO",
      "Checkout & payment flow with payment gateway integration and form validation",
      "Post-purchase experience: order tracking, status updates, return/refund flow",
      "Customer support ticket interface for buyer–store issue resolution",
      "Server-rendered metadata optimization for marketing and informational pages",
    ],
  },
  {
    category: "Enterprise" as Category,
    title: "LocStoc Retailer Management Platform",
    role: "Frontend Developer",
    period: "01/2023 – 10/2025",
    desc: "B2B SaaS platform used by retailers, brands, and distributors to manage supply-chain operations within the LocStoc system. Owned features end to end from UI implementation to API integration.",
    tags: ["React 17", "TypeScript", "Vite", "React Query", "React Hook Form", "matrix-js-sdk", "React Router v6"],
    highlights: [
      "Analytics & reporting dashboards for sales, inventory, and business KPIs",
      "Inventory & warehouse management — stock tracking, adjustment, rack/shelf space allocation",
      "Full order lifecycle (creation, tracking, returns) and checkout/payment flow",
      "Real-time shipment tracking UI and product management (listing, detail pages, CRUD)",
      "Real-time messaging with unread tracking, room history, and file/image/video delivery",
      "Marketing Center campaigns, promotions, support workflows, and ticketing",
    ],
  },
  {
    category: "Enterprise" as Category,
    title: "Enterprise Systems — EVN, Affina, Giọt Máu Vàng",
    role: "Frontend Developer",
    period: "05/2022 – 05/2024",
    desc: "Enterprise platforms for EVN electricity billing, Affina Insurance policy management, and Giọt Máu Vàng healthcare campaigns.",
    tags: ["ReactJS", "Redux", "Redux Saga", "MUI", "REST API"],
    highlights: [
      "UI modules for billing, policy & donor systems",
      "RESTful API integration for complex business logic",
      "Frontend features & internal dashboards",
      "Maintained enterprise-scale applications",
    ],
  },
  {
    category: "Personal" as Category,
    title: "Calendar Event Management App",
    role: "Solo Developer",
    period: "2025",
    desc: "Full-featured calendar app built with atomic-design architecture (atoms → molecules → organisms) in React 19 + TypeScript, with strict conventions for state colocation and import aliasing.",
    tags: ["React 19", "TypeScript", "TailwindCSS", "Redux Toolkit", "React Hook Form"],
    highlights: [
      "Atomic-design component architecture (atoms → molecules → organisms)",
      "Route-level code splitting with lazy-loaded Year/Month/Week/Day calendar views",
      "Full event management: creation, editing, labels, rich-text notes (Lexical)",
      "Scheduled browser push notifications with Redux Toolkit and React Hook Form + Yup",
    ],
    link: "https://caplander.netlify.app/",
    github: "https://github.com/minhtam-mintum/caplandar",
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
