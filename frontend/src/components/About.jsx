export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About <span>Me</span></h2>
      <p className="section-sub">A quick look at who I am and what drives me.</p>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a motivated and enthusiastic fresher with strong problem-solving skills
            and a passion for learning. Currently pursuing <strong>BCA in Data Science</strong>
            (3rd year) at Echelon Institute of Technology.
          </p>
          <p>
            I love working with the <strong>MERN stack</strong> and have already built and
            shipped a real-world healthcare web application for a sports injury and
            physiotherapy clinic. I handle everything end-to-end — design, code,
            deployment, and customization.
          </p>
          <p>
            I'm seeking an entry-level role where I can grow with the team and contribute
            to building products that make a real impact.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat"><h3>1+</h3><p>Live Client Project</p></div>
          <div className="stat"><h3>9+</h3><p>Certifications</p></div>
          <div className="stat"><h3>5+</h3><p>Languages Learned</p></div>
          <div className="stat"><h3>100%</h3><p>Dedication</p></div>
        </div>
      </div>
    </section>
  );
}
