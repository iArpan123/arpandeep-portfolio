import React from "react";
import Section from "./Section";
import { leadership } from "../data/resume";

export default function Leadership() {
  return (
    <Section
      id="leadership"
      title="Leadership"
      subtitle="Community impact, mentorship, and entrepreneurial initiatives."
    >
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {leadership.map((l, i) => (
          <div key={i} className="leadership-card">
            <h4>
              {l.role} · {l.org}
            </h4>
            <p>{l.impact}</p>

            
            {l.org === "ACEL–ASU" && (
              <a
                href="https://www.aceleaders.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Website
              </a>
            )}
            {l.org === "Startup Village" && (
              <a
                href="https://www.startupvillage.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Website
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
