import profile from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-lg leading-relaxed max-w-3xl">{profile.summary}</p>
      </div>
    </section>
  );
}