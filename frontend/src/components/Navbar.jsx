import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["home", "about", "skills", "projects", "certifications", "contact"];
  return (
    <nav className="navbar">
      <a href="#home" className="logo">Aakash<span>.</span></a>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
        <li>
          <a href="/Aakash%20Resume.pdf" download onClick={() => setOpen(false)}>
            Download
          </a>
        </li>
      </ul>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <FiX /> : <FiMenu />}
      </button>
    </nav>
  );
}
