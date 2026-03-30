import SectionTitle from "../components/section-title";
import ThemeToggle from "../components/theme-toggle";
import {
  certifications,
  personal,
  projects,
  skills,
  socialLinks,
} from "../lib/site-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="hero-glow hero-glow-left" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between gap-4 rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-3 backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">
              Vision-ready portfolio
            </p>
            <h1 className="text-lg font-semibold text-white">Felix Nshimyumukiza</h1>
          </div>
          <ThemeToggle />
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-[0_30px_80px_rgba(4,10,22,0.24)] sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-300">
              Founder-driven builder
            </div>
            <h2 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              {personal.name}
            </h2>
            <p className="mt-4 text-xl font-medium text-slate-200">
              {personal.title}
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {personal.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${personal.email}`} className="primary-button">
                Contact me
              </a>
              <a href="#projects" className="secondary-button">
                View projects
              </a>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="stat-card">
                <dt>Age</dt>
                <dd>{personal.age}</dd>
              </div>
              <div className="stat-card">
                <dt>Role</dt>
                <dd>{personal.companyRole}</dd>
              </div>
              <div className="stat-card">
                <dt>Location</dt>
                <dd>{personal.location}</dd>
              </div>
            </dl>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-400">
                Contact
              </p>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="text-slate-400">Email</p>
                  <a className="mt-1 block text-base text-white" href={`mailto:${personal.email}`}>
                    {personal.email}
                  </a>
                </div>
                <div>
                  <p className="text-slate-400">Phone</p>
                  <a className="mt-1 block text-base text-white" href={`tel:${personal.phone}`}>
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-amber-400">
                Social media
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.label} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                    <p className="text-slate-400">{link.label}</p>
                    <span className="mt-1 block text-base text-white">{link.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="About me"
          title="Backend thinking, frontend clarity, and real product focus."
          description={personal.about}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="content-card">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">How I work</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              I like lightweight systems, maintainable code, and interfaces that make people feel confident. I build with a product mindset, not just a code mindset.
            </p>
          </article>
          <article className="content-card">
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">What I aim for</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Fast loading apps, strong SEO foundations, accessible layouts, and backend structures that can grow without becoming confusing.
            </p>
          </article>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Skills"
          title="Core tools I use to deliver strong web systems."
          description="The portfolio uses simple arrays and reusable components so the content stays easy to maintain while the UI remains polished and fast."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {skills.map((skill) => (
            <article key={skill.name} className="content-card">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300">
                  {skill.level}%
                </span>
              </div>
              <div
                className="mt-4 h-3 rounded-full bg-slate-200/80 dark:bg-slate-800"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} skill level`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-sky-500 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Projects"
          title="Work that shows product ownership, engineering effort, and growth."
          description="These projects represent both proof of execution and a direction for where my work is going next."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="content-card flex h-full flex-col">
              <span className="inline-flex w-fit rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                {project.evidence}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-slate-950 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-sky-600 dark:text-sky-300">
                {project.role}
              </p>
              <p className="mt-4 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                {project.impact}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <SectionTitle
          eyebrow="Certifications"
          title="Learning backed by proof."
          description="I value practical work, but I also document growth through formal learning where it strengthens delivery."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {certifications.map((item) => (
            <article key={item} className="content-card">
              <p className="text-lg font-semibold text-slate-950 dark:text-white">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 sm:p-10">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build something clear, useful, and strong."
            description="If you want a builder who cares about both system quality and user experience, I’m ready to collaborate."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a href={`mailto:${personal.email}`} className="contact-tile">
              <span className="text-sm text-slate-500 dark:text-slate-300">Email</span>
              <strong className="mt-2 text-lg text-slate-950 dark:text-white">
                {personal.email}
              </strong>
            </a>
            <a href={`tel:${personal.phone}`} className="contact-tile">
              <span className="text-sm text-slate-500 dark:text-slate-300">Phone</span>
              <strong className="mt-2 text-lg text-slate-950 dark:text-white">
                {personal.phone}
              </strong>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line-soft)] px-6 py-10 text-center text-sm text-slate-500 dark:text-slate-400">
        <p>{personal.name} • {personal.title} • Founder &amp; CEO of Vision Market</p>
      </footer>
    </main>
  );
}

