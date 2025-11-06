import React from "react";
import Section from "./Section";
import { skills } from "../data/resume";
import { motion } from "framer-motion";

const Category = ({ title, items }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="skill-category"
    style={{
      background: "var(--surface)",
      borderRadius: "16px",
      padding: "1.5rem",
      boxShadow: "0 0 0 1px var(--border)",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      transition: "all 0.25s ease",
    }}
  >
    <h3 style={{ margin: 0, fontSize: "1.1rem" }}>{title}</h3>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {items.map((s, i) => (
        <span
          key={i}
          style={{
            padding: "6px 12px",
            fontSize: "0.85rem",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
            color: "var(--text)",
            border: "1px solid rgba(255,255,255,0.08)",
            transition: "background 0.25s ease",
          }}
          className="skill-pill"
        >
          {s}
        </span>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="A toolkit spanning AI, full stack systems, and intelligent automation."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(320px, 1fr))",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        <Category title="Languages" items={skills.languages} />
        <Category title="Frameworks & Libraries" items={skills.frameworks} />
        <Category title="Cloud & Databases" items={skills.cloud} />
        <Category title="Developer Tools & AI" items={[...skills.tools, ...skills.ai]} />
      </div>
    </Section>
  );
}
