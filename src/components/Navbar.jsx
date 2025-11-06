import React from "react";
import { Link } from "react-scroll";
import { links, profile } from "../data/resume";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <div className="brand">Arpandeep · Portfolio</div>
        </div>
        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              {l.label}
            </Link>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
