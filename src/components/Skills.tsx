const skills = [
  {
    icon: "JS",
    iconBg: "#f7df1e",
    iconColor: "#000",
    name: "JavaScript",
    desc: "Strong JS knowledge and advanced web development.",
  },
  {
    icon: "⚛",
    iconBg: "#61dafb22",
    iconColor: "#61dafb",
    name: "ReactJS",
    desc: "Building fast and efficient React apps and websites.",
  },
  {
    icon: "N",
    iconBg: "#ffffff11",
    iconColor: "#e5e7eb",
    name: "Next.js",
    desc: "Fast server-side rendering, dynamic routing & SSR/SSG.",
  },
  {
    icon: "TS",
    iconBg: "#3178c622",
    iconColor: "#3178c6",
    name: "TypeScript",
    desc: "Type-safe, scalable application development.",
  },
  {
    icon: "TW",
    iconBg: "#06b6d422",
    iconColor: "#06b6d4",
    name: "TailwindCSS",
    desc: "Utility-first, widely used frontend CSS framework.",
  },
  {
    icon: "RTK",
    iconBg: "#764abc22",
    iconColor: "#764abc",
    name: "Redux Toolkit",
    desc: "Scalable state management with Redux Toolkit & Saga.",
  },
  {
    icon: "TQ",
    iconBg: "#ef444422",
    iconColor: "#ef4444",
    name: "TanStack Query",
    desc: "Server-state caching, request deduplication and synchronization.",
  },
  {
    icon: "MUI",
    iconBg: "#1976d222",
    iconColor: "#1976d2",
    name: "MUI",
    desc: "Enterprise UI component library for React apps.",
  },
];

const otherTags = ["Git", "REST API", "Agile/Scrum", "SASS/SCSS", "Kendo UI", "Highcharts", "SheetJS (XLSX)", "Vite", "React Router", "Axios", "React Hook Form + Yup", "matrix-js-sdk", "RSA Encryption", "Design Systems", "SSR / SEO", "Code Splitting", "Lazy Loading", "JWT Auth"];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-(--bg-secondary)">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text) tracking-tight">
            My <span className="text-(--accent)">&#123;tech&#125;</span> stack
          </h2>
          <p className="mt-3 text-(--text-muted) text-base">
            Technologies I use for scalable frontend architecture and fast data-heavy products.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="bg-(--bg-card) border border-(--border) rounded-2xl p-5 flex flex-col gap-3 hover:border-(--accent) transition-colors group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold shrink-0"
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                {s.icon}
              </div>
              <div>
                <p className="font-semibold text-sm text-(--text) group-hover:text-(--accent) transition-colors">
                  {s.name}
                </p>
                <p className="text-xs text-(--text-muted) mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {otherTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full border border-(--border) text-(--text-muted) bg-(--bg)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
