import { FiAward } from "react-icons/fi";

const certs = [
  { title: "Full Stack Programming Course", issuer: "Udemy (HTML, CSS, Java, JS)" },
  { title: "Python", issuer: "HCL GUVI" },
  { title: "Gen AI Exchange Program", issuer: "Google Cloud × Hack2skill" },
  { title: "Web Technologies & Design", issuer: "Training Program" },
  { title: "Cybersecurity Analyst Simulation", issuer: "Tata Group (Virtual Internship)" },
  { title: "Data Visualisation", issuer: "Tata Group (Virtual Internship)" },
  { title: "Data Analytics Simulation", issuer: "Deloitte (Virtual Internship)" },
  { title: "Cyber Job Simulation", issuer: "Deloitte (Virtual Internship)" },
  { title: "Technology Job Simulation", issuer: "Deloitte (Virtual Internship)" },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <h2 className="section-title">Achievements & <span>Certifications</span></h2>
      <p className="section-sub">Continuous learning is non-negotiable.</p>
      <div className="cert-grid">
        {certs.map((c) => (
          <div key={c.title} className="cert-card">
            <div className="cert-badge"><FiAward /></div>
            <div>
              <h4>{c.title}</h4>
              <p>{c.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
