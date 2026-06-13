import { FiExternalLink, FiArrowRight } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Featured <span>Project</span></h2>
      <p className="section-sub">Real-world work I've built for an actual paying client.</p>

      <div className="project-card">
        <div className="project-image">
          <div>
            🏥<br />
            Sports Injury Center
          </div>
        </div>
        <div className="project-body">
          <span className="project-tag">Live Client Project</span>
          <h3>Sports Injury Center — Healthcare Web App</h3>
          <p>
            A full-stack healthcare web application built with the MERN stack for a
            real sports injury and physiotherapy clinic.
          </p>
          <ul className="project-list">
            <li>Appointment requests with automated doctor email notifications</li>
            <li>WhatsApp chat, direct calling & Google Maps integration</li>
            <li>Responsive pages for medical services & rehab programs</li>
            <li>MongoDB-backed APIs for inquiries & appointments</li>
            <li>Optimized performance & mobile responsiveness</li>
          </ul>
          <div className="project-stack">
            <span>MongoDB</span><span>Express</span><span>React</span><span>Node.js</span><span>JavaScript</span>
          </div>
          <div className="project-actions">
            <a href="https://thesportsinjurycenter.com" target="_blank" rel="noreferrer" className="btn btn-primary">
              <span>Visit Live Site <FiExternalLink /></span>
            </a>
            <a href="#contact" className="btn btn-ghost">Discuss a Project <FiArrowRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
