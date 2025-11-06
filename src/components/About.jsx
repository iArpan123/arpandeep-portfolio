import React from "react";
import Section from "./Section";
import { education, profile } from "../data/resume";

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Crafting human centered AI powered products that bridge ideas and execution."
    >
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.5rem",
          alignItems: "start",
        }}
      >
        <div
          className="card"
          style={{
            padding: "1.5rem",
            borderRadius: "16px",
            background: "var(--surface)",
            boxShadow: "0 0 0 1px var(--border)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Who I Am</h3>
          <p style={{ lineHeight: 1.7 }}>
            I’m <strong>{profile.name}</strong>, a Computer Science student at ASU. I’m passionate about designing intelligent and user focused systems that turn complex ideas into fast, intuitive, and reliable experiences.
          </p>
          <p style={{ lineHeight: 1.7 }}>
            My work blends <strong>AI engineering, full stack development</strong>, and thoughtful UI design.
          </p>
          <p style={{ lineHeight: 1.7 }}>
            Beyond code I lead student teams, organize startup events, and help peers bring bold ideas to life.
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: "1.5rem",
            borderRadius: "16px",
            background: "var(--surface)",
            boxShadow: "0 0 0 1px var(--border)",
          }}
        >
          <h3 style={{ marginTop: 0 }}>Education</h3>
          {education.map((e, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>{e.school}</div>
              <div style={{ color: "var(--muted)" }}>{e.location}</div>
              <div>{e.degree} · GPA {e.gpa}</div>
              <div style={{ color: "var(--muted)" }}>{e.date}</div>
            </div>
          ))}
          <div style={{ marginTop: "1rem" }}>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              style={{
                display: "inline-block",
                padding: "10px 18px",
                borderRadius: "8px",
                background: "linear-gradient(90deg, #7f5af0 0%, #2cb67d 100%)",
                color: "white",
                textDecoration: "none",
                fontWeight: 500,
                transition: "opacity 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
