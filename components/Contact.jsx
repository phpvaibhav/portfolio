import profile from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section bg-neutral-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 space-y-3">
            <p>Want to collaborate or hire me? Reach out:</p>
            <div className="flex flex-wrap gap-3">
              <a className="badge hover:bg-neutral-50" href={`mailto:${profile.contact.email}`}>Email</a>
              <a className="badge hover:bg-neutral-50" href={profile.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="badge hover:bg-neutral-50" href={`tel:${profile.contact.phone}`}>Phone</a>
              <a className="badge hover:bg-neutral-50" href={profile.contact.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          {/* <form
            className="card p-6 space-y-3"
            action="https://formspree.io/f/xoqgqwrj" method="POST"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <input className="border rounded-xl px-3 py-2" name="name" placeholder="Your Name" required />
              <input className="border rounded-xl px-3 py-2" name="email" type="email" placeholder="Your Email" required />
            </div>
            <input className="border rounded-xl px-3 py-2 w-full" name="subject" placeholder="Subject" />
            <textarea className="border rounded-xl px-3 py-2 w-full" rows="4" name="message" placeholder="Message" required />
            <button className="button border-neutral-900" type="submit">Send</button>
          </form> */}
        </div>
      </div>
    </section>
  );
}