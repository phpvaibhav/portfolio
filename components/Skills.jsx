import profile from "../data/profile";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiNestjs, SiKubernetes, SiLaravel, SiAngular } from "react-icons/si";

const icons = {
  frontend: <FaReact />,
  backend: <FaNodeJs />,
  databases: <FaDatabase />,
  devops: <FaDocker />,
  testing: <SiNestjs />,
};

const sections = [
  { key: "frontend", title: "Frontend", icon: <FaReact /> },
  { key: "backend", title: "Backend", icon: <FaNodeJs /> },
  { key: "databases", title: "Databases", icon: <FaDatabase /> },
  { key: "devops", title: "Cloud & DevOps", icon: <FaDocker /> },
  { key: "testing", title: "Testing", icon: <SiNestjs /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((sec) => (
            <div key={sec.key} className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{sec.icon}</span>
                <h3 className="text-lg font-semibold">{sec.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.skills[sec.key].map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}