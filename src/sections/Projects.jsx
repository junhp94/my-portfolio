import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
        WHAT I'VE BUILT
      </p>
      <h2 className="mt-2 text-3xl font-bold text-neutral-900">Projects</h2>
      <p className="mt-2 text-neutral-600">
        Selected projects focusing on real integrations and clean architecture.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
