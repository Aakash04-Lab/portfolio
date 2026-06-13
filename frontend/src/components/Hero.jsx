import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <span className="hero-badge">👋 Available for opportunities</span>
        <h1>
          Hi, I'm <span className="grad">Aakash Kumar</span><br />
          Full Stack <span className="grad">MERN</span> Developer
        </h1>
        <p>
          Motivated BCA Data Science student passionate about building beautiful,
          fast and reliable web applications using MongoDB, Express, React and Node.js.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            <span>Hire Me <FiArrowRight /></span>
          </a>
          <a href="#projects" className="btn btn-ghost">View Projects</a>
        </div>
        <div className="hero-socials">
          <a href="https://linkedin.com/in/aakash-kumar-534a97287" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="mailto:akash4112004@gmail.com" aria-label="Email"><FiMail /></a>
          <a href="https://github.com/Aakash04-Lab" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="avatar">
          {!imageError ? (
            <img
              src="/profile.jpg.png"
              alt="Aakash Kumar"
              onError={() => setImageError(true)}
            />
          ) : (
            <span>AK</span>
          )}
        </div>
      </div>
    </section>
  );
}
