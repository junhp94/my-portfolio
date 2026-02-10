export default function ProjectCard({ project }) {
  const { title, date, tech, highlights, links } = project

  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
          <p className="mt-1 text-sm text-neutral-500">{date}</p>
        </div>

        <div className="flex gap-2">
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-neutral-200 px-3 py-1.5 text-sm hover:bg-neutral-50"
            >
              GitHub
            </a>
          )}

          {links?.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white hover:bg-indigo-700"
            >
              Demo
            </a>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm text-neutral-700">
        {highlights.map((h) => (
          <li key={h}>
            <span className="mr-2 text-indigo-400">•</span>
            {h}
          </li>
        ))}
      </ul>
    </article>
  )
}
