const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin", "C#", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Spring Boot", ".NET"],
  },
  {
    category: "Tools & Cloud",
    items: ["Git", "Docker", "AWS", "Firebase", "CI/CD"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Firestore"],
  },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
        GET TO KNOW ME
      </p>
      <h2 className="mt-2 text-3xl font-bold text-neutral-900">About & Skills</h2>

      <p className="mt-6 max-w-3xl leading-relaxed text-neutral-600">
        I'm a software developer who enjoys building practical, well-structured
        applications from front to back. I've worked across full-stack web
        development, mobile apps, and cloud services — always aiming for clean
        code and real-world impact. I pick up new tools quickly and care about
        getting the details right.
      </p>

      {/* Education & Certification */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <svg className="mt-0.5 h-6 w-6 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Education</h3>
            <p className="mt-1 text-sm text-neutral-600">B.Sc. Computing Science</p>
            <p className="text-sm text-neutral-500">Simon Fraser University, Burnaby, BC</p>
            <p className="text-xs text-neutral-400">Dec 2025</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <svg className="mt-0.5 h-6 w-6 shrink-0 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Certification</h3>
            <p className="mt-1 text-sm text-neutral-600">AWS Certified Cloud Practitioner</p>
            <p className="text-xs text-neutral-400">Jan 2026</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-sm font-semibold text-indigo-600">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
