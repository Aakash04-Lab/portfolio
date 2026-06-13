import { useState } from "react";
import axios from "axios";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiEye, FiDownload } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", msg: "" });

    try {
      await axios.post("/api/contact", form);
      setStatus({ type: "ok", msg: "Message sent successfully. I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "err", msg: "Something went wrong. Please try again or message me on WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="section-sub">Have a project in mind or just want to say hi? Let's talk.</p>

      <div className="contact-wrap">
        <div className="contact-info">
          <p>I'm currently open to internships and full-time MERN developer roles. Drop a message — I usually reply within a day.</p>
          <a href="mailto:akash4112004@gmail.com" className="contact-item">
            <div className="contact-icon"><FiMail /></div>
            <div><h4>Email</h4><p>akash4112004@gmail.com</p></div>
          </a>
          <a href="tel:+919560353204" className="contact-item">
            <div className="contact-icon"><FiPhone /></div>
            <div><h4>Phone</h4><p>+91 9560353204</p></div>
          </a>
          <a href="https://linkedin.com/in/aakash-kumar-534a97287" target="_blank" rel="noreferrer" className="contact-item">
            <div className="contact-icon"><FiLinkedin /></div>
            <div><h4>LinkedIn</h4><p>aakash-kumar-534a97287</p></div>
          </a>
          <a href="https://github.com/Aakash04-Lab" target="_blank" rel="noreferrer" className="contact-item">
            <div className="contact-icon"><FiGithub /></div>
            <div><h4>GitHub</h4><p>Aakash04-Lab</p></div>
          </a>
          <div className="contact-item">
            <div className="contact-icon"><FiMapPin /></div>
            <div><h4>Location</h4><p>South Delhi, New Delhi</p></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-group">
            <label>Your Name</label>
            <input name="name" value={form.name} onChange={onChange} required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={onChange} required placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            <span>{loading ? "Sending..." : "Send Message"} <FiSend /></span>
          </button>
          {status.msg && <p className={`form-status ${status.type}`}>{status.msg}</p>}
        </form>
      </div>

      <div className="resume-actions">
        <h3>Want to know more?</h3>
        <p>View or download my resume for a quick overview of my skills, projects and experience.</p>
        <div>
          <a href="/Aakash%20Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <FiEye /> View Resume
          </a>
          <a href="/Aakash%20Resume.pdf" download className="btn btn-primary">
            <span>Download Resume <FiDownload /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
