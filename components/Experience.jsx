import profile from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 md:left-1/2" />
          <div className="space-y-8">
            {profile.experience.map((e, i) => (
              <div key={e.company} className="md:grid md:grid-cols-2 md:gap-8">
                <div className={`mb-4 md:mb-0 ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="card p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{e.role}</h3>
                      <span className="text-sm text-neutral-600">{e.period}</span>
                    </div>
                    <p className="text-neutral-700">{e.company}</p>
                    <p className="mt-2 text-sm">{e.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}