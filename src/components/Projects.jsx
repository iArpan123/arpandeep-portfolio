import React from "react";
import Section from "./Section";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Select builds that blend usability, performance, and AI-first thinking."
    >
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
        }}
      >
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3 className="project-title">{p.name}</h3>

            <div className="project-stack">
              {p.stack.map((tech, idx) => (
                <span key={idx} className="stack-pill">
                  {tech}
                </span>
              ))}
            </div>

            <p className="project-desc">{p.description}</p>

            <ul className="project-points">
              {p.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
