import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const projects = [
  {
    visual: "Healthcare",
    tag: "Live Client Project",
    title: "Sports Injury Center - Healthcare Web App",
    description:
      "A full-stack healthcare web application built with the MERN stack for a real sports injury and physiotherapy clinic.",
    features: [
      "Appointment requests with automated doctor email notifications",
      "WhatsApp chat, direct calling & Google Maps integration",
      "Responsive pages for medical services & rehab programs",
      "MongoDB-backed APIs for inquiries & appointments",
      "Optimized performance & mobile responsiveness",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "JavaScript"],
    liveUrl: "https://thesportsinjurycenter.com",
  },
  {
    visual: "File Tools",
    tag: "Full Stack Project",
    title: "Tools Convertor - All-in-One File Tools Platform",
    description:
      "An all-in-one web platform that helps users convert, compress, and edit files online with a fast, secure, and user-friendly interface.",
    features: [
      "PDF to JPG converter",
      "JPG to PDF converter",
      "Image compression with quality optimization",
      "AI background removal",
      "Support for multiple image formats",
    ],
    stack: ["MERN Stack", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
    liveUrl: "https://tools-convertor-z6lk.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured <span>Projects</span></h2>
      <p className="section-sub">
        Real-world and full-stack projects built with clean UI, practical features, and production-ready workflows.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <img src="/profile.jpg.png" alt={project.title} />
            </div>
            <div className="project-body">
              <span className="project-tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                    <span>Visit Live Site <FiExternalLink /></span>
                  </a>
                )}
                <a href="#contact" className="btn btn-ghost">Discuss a Project <FiArrowRight /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
