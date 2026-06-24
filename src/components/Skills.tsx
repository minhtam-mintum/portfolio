type LogoName =
  | "javascript"
  | "react"
  | "next"
  | "typescript"
  | "tailwind"
  | "redux"
  | "tanstack"
  | "mui";

const skills = [
  {
    logo: "javascript" as LogoName,
    iconBg: "#f7df1e",
    name: "JavaScript",
    desc: "Strong JS knowledge and advanced web development.",
  },
  {
    logo: "react" as LogoName,
    iconBg: "#61dafb22",
    name: "ReactJS",
    desc: "Building fast and efficient React apps and websites.",
  },
  {
    logo: "next" as LogoName,
    iconBg: "#ffffff11",
    name: "Next.js",
    desc: "Fast server-side rendering, dynamic routing & SSR/SSG.",
  },
  {
    logo: "typescript" as LogoName,
    iconBg: "#3178c622",
    name: "TypeScript",
    desc: "Type-safe, scalable application development.",
  },
  {
    logo: "tailwind" as LogoName,
    iconBg: "#06b6d422",
    name: "TailwindCSS",
    desc: "Utility-first, widely used frontend CSS framework.",
  },
  {
    logo: "redux" as LogoName,
    iconBg: "#764abc22",
    name: "Redux Toolkit",
    desc: "Scalable state management with Redux Toolkit & Saga.",
  },
  {
    logo: "tanstack" as LogoName,
    iconBg: "#ef444422",
    name: "TanStack Query",
    desc: "Server-state caching, request deduplication and synchronization.",
  },
  {
    logo: "mui" as LogoName,
    iconBg: "#1976d222",
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
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: s.iconBg }}
              >
                <TechLogo logo={s.logo} />
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

function TechLogo({ logo }: { logo: LogoName }) {
  switch (logo) {
    case "javascript":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path
            d="M17.1 24.2c.6 1 1.4 1.8 2.9 1.8 1.2 0 2-.6 2-1.5 0-1-.8-1.4-2.2-2l-.8-.3c-2.2-.9-3.6-2-3.6-4.4 0-2.2 1.7-3.9 4.3-3.9 1.9 0 3.2.7 4.2 2.4l-2.3 1.5c-.5-.9-1-1.2-1.9-1.2s-1.4.5-1.4 1.2c0 .9.5 1.2 1.8 1.8l.8.3c2.6 1.1 4 2.2 4 4.7 0 2.7-2.1 4.1-4.9 4.1-2.7 0-4.5-1.3-5.4-3l2.5-1.5ZM6.8 24.5c.5.8.9 1.4 1.9 1.4 1 0 1.6-.4 1.6-1.9v-9.9h3v10c0 3.1-1.8 4.5-4.4 4.5-2.4 0-3.8-1.2-4.5-2.7l2.4-1.4Z"
            fill="#111111"
          />
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
          <circle cx="32" cy="32" r="5.4" fill="#61DAFB" />
          <g fill="none" stroke="#61DAFB" strokeWidth="3">
            <ellipse rx="24" ry="9.5" cx="32" cy="32" />
            <ellipse rx="24" ry="9.5" cx="32" cy="32" transform="rotate(60 32 32)" />
            <ellipse rx="24" ry="9.5" cx="32" cy="32" transform="rotate(120 32 32)" />
          </g>
        </svg>
      );
    case "next":
      return (
        <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
          <circle cx="16" cy="16" r="16" fill="var(--text)" />
          <path d="M9 9h4.1l8.8 14h-4.1L9 9Z" fill="var(--bg-card)" />
          <path d="M20.6 9H23v14h-2.4V9ZM9 23V12.8l2.4 3.8V23H9Z" fill="var(--bg-card)" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <rect width="32" height="32" rx="4" fill="#3178C6" />
          <path d="M5 16.2h10.4v2.6h-3.7v9H8.8v-9H5v-2.6Z" fill="#ffffff" />
          <path
            d="M16.3 26.4 17.9 24c1 .8 2.2 1.3 3.5 1.3 1 0 1.6-.4 1.6-1 0-.7-.5-1-2-1.6l-.9-.4c-2-.8-3.2-1.9-3.2-3.9 0-2.2 1.7-3.7 4.4-3.7 1.9 0 3.3.5 4.5 1.5l-1.5 2.3c-.9-.6-1.8-1-3-1-.9 0-1.4.4-1.4.9 0 .7.5.9 2.1 1.6l.9.4c2.3.9 3.3 2.1 3.3 4 0 2.4-1.9 3.8-4.8 3.8-2.2.1-4-.6-5.1-1.8Z"
            fill="#ffffff"
          />
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 48 32" className="h-7 w-9" aria-hidden="true">
          <path
            d="M24 6.4c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3 2.5 2.5 5.4 5.4 11.8 5.4 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3-2.5-2.5-5.4-5.4-11.8-5.4ZM12 20.6c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.5 3.1 1.8 4.6 3.3 2.5 2.5 5.4 5.4 11.8 5.4 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.5-3.1-1.8-4.6-3.3-2.5-2.5-5.4-5.4-11.8-5.4Z"
            fill="#06B6D4"
            transform="translate(0 -4.8)"
          />
        </svg>
      );
    case "redux":
      return (
        <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
          <g fill="none" stroke="#764ABC" strokeWidth="4" strokeLinecap="round">
            <path d="M20 40c-6-2-9-7-7-12 3-7 12-6 18 1" />
            <path d="M44 24c5 4 7 10 4 15-4 7-13 4-18-2" />
            <path d="M26 15c6-3 13-2 16 3 4 7-2 13-10 14" />
          </g>
          <circle cx="19" cy="42" r="5" fill="#764ABC" />
          <circle cx="45" cy="22" r="5" fill="#764ABC" />
          <circle cx="30" cy="14" r="5" fill="#764ABC" />
        </svg>
      );
    case "tanstack":
      return (
        <svg viewBox="0 0 256 230" className="h-8 w-9" aria-hidden="true">
          <path
            fill="#00435B"
            d="m157.98 142.487l-4.91 8.527a8.288 8.288 0 0 1-7.182 4.151H108.27a8.288 8.288 0 0 1-7.182-4.151l-4.911-8.527h61.802Zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034h89.296Zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506h72.616Zm-17.5-22.066a8.288 8.288 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.288 8.288 0 0 1 7.182-4.151h37.617Z"
          />
          <path
            fill="#002B3B"
            d="M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.737 11.737 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.732 11.732 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a11.81 11.81 0 0 1-.633-2.082Z"
          />
          <path
            fill="#FF4154"
            d="M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075c6.71 35.276 1.983 52.915-14.18 52.915c-15.813 0-35.944-15.051-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009c10.288.056 20.289-.303 30.004-1.076c11.467-.913 23.442-2.475 35.924-4.687ZM78.646 134.667l.062.105l.646 1.127c5.177 9 10.57 17.542 16.18 25.627c6.608 9.52 14.038 19.158 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715c-27.307 23.397-45.055 28.068-53.244 14.012c-8.017-13.757-5.11-38.773 8.719-75.047a3.683 3.683 0 0 1 6.579-.618Zm124.857-52.054l.112.037l1.028.354c33.705 11.725 46.51 24.61 38.416 38.655c-7.916 13.736-30.93 23.738-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501c5.458-9.286 10.375-18.524 14.749-27.717c4.96-10.425 9.615-21.616 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295l.112.033ZM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042c-5.46 9.285-10.376 18.524-14.75 27.717c-4.96 10.425-9.615 21.615-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355c-33.705-11.724-46.51-24.61-38.416-38.654c7.916-13.737 30.93-23.738 69.041-30.004c.85-.14 1.722.022 2.464.459Zm108.206-57.748c8.017 13.758 5.11 38.774-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127c-5.177-9-10.57-17.542-16.18-25.627c-6.608-9.52-14.038-19.158-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715c27.307-23.397 45.055-28.068 53.244-14.013ZM77.45 10.59c15.814 0 35.945 15.05 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008c-10.287-.056-20.289.303-30.003 1.076c-11.468.913-23.443 2.475-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074C56.56 28.228 61.286 10.59 77.45 10.59Z"
          />
          <path
            fill="#FFD94C"
            d="M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.892 12.892 0 0 1 0 12.834l-15.855 27.626a12.892 12.892 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.892 12.892 0 0 1 0-12.834l15.854-27.626a12.892 12.892 0 0 1 11.182-6.475Zm26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.892 12.892 0 0 1 0 12.822l-11.056 19.288a12.892 12.892 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.892 12.892 0 0 1 0-12.822l11.056-19.288a12.892 12.892 0 0 1 11.184-6.48h21.951Zm-5.187 9.12h-11.576a12.892 12.892 0 0 0-11.179 6.47l-5.842 10.167a12.892 12.892 0 0 0 0 12.846l5.842 10.168a12.892 12.892 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.892 12.892 0 0 0 0-12.846l-5.842-10.168a12.892 12.892 0 0 0-11.179-6.47Zm-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.892 12.892 0 0 1 0 12.862l-.829 1.44a12.892 12.892 0 0 1-11.173 6.46h-1.588a12.892 12.892 0 0 1-11.173-6.46l-.829-1.44a12.892 12.892 0 0 1 0-12.862l.829-1.44a12.892 12.892 0 0 1 11.173-6.46h1.588Zm-.792 8.599a5.738 5.738 0 0 0-4.97 2.866a5.729 5.729 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.729 5.729 0 0 0 0-5.732a5.736 5.736 0 0 0-4.967-2.866Zm-46.509 5.732h10.32"
          />
        </svg>
      );
    case "mui":
      return (
        <svg viewBox="0 0 36 36" className="h-8 w-8" fill="none" aria-hidden="true">
          <path
            fill="#0079f5"
            d="M12.35 9 .45 2.05a.3.3 0 0 0-.45.26v18.6q0 .16.15.25l4.6 2.7a.3.3 0 0 0 .44-.25V11.29c0-.1.1-.15.18-.1l6.99 4c.37.22.83.21 1.2 0l6.83-4c.08-.05.18 0 .18.1v6.16c0 .2-.1.4-.28.51l-6.78 4.17a.3.3 0 0 0-.14.25v6.07q0 .16.14.25l9.01 5.7c.38.25.87.25 1.26.02L35.4 27.5c.37-.22.59-.61.59-1.03V14.44a.3.3 0 0 0-.46-.26L31.4 16.7c-.36.22-.58.6-.58 1.03v6.2q0 .16-.15.26l-6.91 4.08a1.2 1.2 0 0 1-1.23 0l-4.32-2.6a.18.18 0 0 1 0-.3l7.02-4.64c.33-.22.54-.6.54-1V2.32a.3.3 0 0 0-.46-.25L13.57 8.99a1.2 1.2 0 0 1-1.22 0"
          />
          <path
            fill="#0079f5"
            d="M36 2.83v4.38c0 .4-.21.8-.56 1.01l-4.12 2.58a.3.3 0 0 1-.46-.26V5.97c0-.43.23-.83.6-1.05l4.1-2.35a.3.3 0 0 1 .44.26"
          />
        </svg>
      );
  }
}
