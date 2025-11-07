import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { links, profile } from "../data/resume";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <div className="brand">Arpandeep · Portfolio</div>
        </div>

        {/* Desktop links */}
        <div className="nav-links desktop-only">
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

        {/* Modern Hamburger */}
        <div className={`hamburger ${open ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Animated Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={closeMenu}
                className="mobile-link"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mobile-link"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
