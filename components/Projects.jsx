import profile from "../data/profile";

function ProjectCard({ p }) {
  return (
    <article className="card p-5">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <div className="flex gap-2">
          {p.stack.map((s) => <span key={s} className="badge text-xs">{s}</span>)}
        </div>
      </div>
      <p className="mt-2 text-sm text-neutral-700">{p.description}</p>
      <ul className="mt-3 list-disc ml-5 text-sm text-neutral-700">
        {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.projects.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}