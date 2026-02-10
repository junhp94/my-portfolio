import heroImg from "../assets/hero.jpg"

function IconButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5 hover:shadow-md"
    >
      {children}
    </a>
  )
}

function SkillPill({ children }) {
  return (
    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-neutral-500">
            WELCOME TO MY WORLD
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Hi, I'm <span className="text-indigo-600">Jun Hyeok Park</span>
            <br />
            <span className="font-extrabold">a Software Developer.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-600">
            I build full-stack web apps and mobile apps with clean architecture, APIs, and
            real integrations. I like simple UI, solid backend logic, and shipping projects.
          </p>

          {/* Find with me + Best skill on */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                FIND WITH ME
              </p>
              <div className="mt-4 flex gap-3">
                <IconButton href="https://github.com/junhp94" label="GitHub">
                  <svg className="h-5 w-5 text-neutral-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/junhp94" label="LinkedIn">
                  <svg className="h-5 w-5 text-neutral-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </IconButton>
                <IconButton href="mailto:junhp94@gmail.com" label="Email">
                  <svg className="h-5 w-5 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </IconButton>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-neutral-500">
                BEST SKILL ON
              </p>
              <div className="mt-4 flex gap-3">
                <SkillPill>
                  <span className="text-xs font-bold text-neutral-700">JS</span>
                </SkillPill>
                <SkillPill>
                  <span className="text-xs font-bold text-neutral-700">React</span>
                </SkillPill>
                <SkillPill>
                  <span className="text-xs font-bold text-neutral-700">AWS</span>
                </SkillPill>
              </div>
            </div>
          </div>
        </div>

        {/* Right portrait card */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-b from-white/70 to-white/10 blur-2xl" />
          <div className="relative rounded-[2rem] bg-white shadow-xl ring-1 ring-black/5">
            <div className="p-6">
              <div className="overflow-hidden rounded-[1.5rem] bg-neutral-100">
                <img
                  src={heroImg}
                  alt="Portrait of Jun Hyeok Park"
                  className="h-[420px] w-full object-cover object-top"
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Jun Hyeok Park</p>
                  <p className="text-xs text-neutral-500">Full-stack · Backend · Mobile</p>
                </div>

                <a
                  href="#projects"
                  className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                >
                  Projects →
                </a>
              </div>
            </div>
          </div>

          {/* Floating tag */}
          <div className="absolute right-3 top-24 hidden md:block">
            <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm ring-1 ring-black/5">
              DEMOS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
