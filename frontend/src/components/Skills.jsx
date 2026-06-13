import { FiCode, FiDatabase, FiLayers, FiCpu, FiUsers, FiAward } from "react-icons/fi";

const skills = [
  { icon: <FiCode />, title: "Frontend", desc: "Building responsive, accessible UIs.", tags: ["HTML", "CSS", "JavaScript", "React.js"] },
  { icon: <FiLayers />, title: "Backend", desc: "REST APIs and server-side logic.", tags: ["Node.js", "Express.js"] },
  { icon: <FiDatabase />, title: "Database", desc: "Schema design & data modelling.", tags: ["MongoDB", "Mongoose"] },
  { icon: <FiCpu />, title: "Languages", desc: "Strong programming foundations.", tags: ["C", "C++", "Python", "Java"] },
  { icon: <FiUsers />, title: "Soft Skills", desc: "Working well with humans.", tags: ["Teamwork", "Communication", "Work Ethic"] },
  { icon: <FiAward />, title: "Other", desc: "Always learning new things.", tags: ["Problem Solving", "Cybersecurity Basics", "Data Analytics"] },
];

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">My <span>Skills</span></h2>
      <p className="section-sub">A toolbox I keep sharpening every single day.</p>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.title} className="skill-card">
            <div className="skill-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="skill-tags">
              {s.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
