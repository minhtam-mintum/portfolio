const highlights = [
  "Delivered scalable frontend applications for enterprise clients across Banking, E-commerce, Healthcare, and Energy sectors",
  "Improved application performance by ~30% through React rendering optimization, code splitting, and lazy loading",
  "Implemented secure JWT authentication with a refresh-token flow across multiple client projects",
  "Independently bootstrapped frontend projects from setup to production",
  "Collaborated with backend, QA, and PM teams in Agile/Scrum environment",
  "Built reusable component libraries and design systems standardized across multiple projects",
];

export default function Experience() {
  return (
    <section className="py-28 px-6 bg-(--bg-secondary)">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-(--text) tracking-tight">
            Work <span className="text-(--accent)">[experience]</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-(--border)">
            <span className="absolute -left-2 top-1 w-4 h-4 rounded-full border-2 border-(--accent) bg-(--bg)" />

            <div className="bg-(--bg-card) border border-(--border) rounded-2xl p-8 hover:border-(--accent) transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-bold text-lg text-(--text)">Frontend Developer</h3>
                  <p className="text-(--accent) font-semibold text-sm">South Telecom</p>
                </div>
                <span className="text-xs px-3 py-1.5 rounded-full border border-(--border) text-(--text-muted) bg-(--bg-secondary) whitespace-nowrap">
                  05/2022 – 03/2026
                </span>
              </div>

              <p className="text-sm text-(--text-muted) mb-5 leading-relaxed">
                Designed and developed scalable frontend applications for enterprise
                clients across Banking, E-commerce, Healthcare, and Energy sectors.
              </p>

              <ul className="space-y-2">
                {highlights.map((h) => (
                  <li key={h} className="text-sm text-(--text-muted) flex gap-2 items-start">
                    <span className="text-(--accent) mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
