import profile from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <ul className="space-y-4">
          {profile.education.map((ed) => (
            <li key={ed.institution} className="card p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">{ed.degree}</h3>
                <span className="text-sm text-neutral-600">{ed.year}</span>
              </div>
              <p className="text-neutral-700">{ed.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}