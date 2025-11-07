import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/resume";

export default function Hero() {
  return (
    <header
      className="hero-fullscreen"
      style={{
        textAlign: "center",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div className="container">
        <motion.div
          className="badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            marginBottom: 20,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            fontSize: 14,
          }}
        >
          <span className="dot" />
          open to software roles
        </motion.div>

        
        <motion.h1
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-title"
          style={{
            fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            marginBottom: "0.5rem",
          }}
        >
          Hi, I'm <span className="hero-gradient">{profile.name}</span>
        </motion.h1>

        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "1.6rem",
            fontWeight: 600,
            color: "var(--text)",
            marginTop: "0.5rem",
          }}
        >
          Crafting <span className="hero-gradient">AI-driven</span> products that make technology feel effortless
        </motion.h2>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginTop: 40,
          }}
        >
          <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Download Resume
          </a>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </motion.div>
      </div>

      
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </header>
  );
}
