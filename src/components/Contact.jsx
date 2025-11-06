import React from "react";
import Section from "./Section";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Let’s build something great"
      subtitle="Best way to reach me is via email or LinkedIn. I’m open to software roles and collaborations."
    >
      <div className="card" style={{ padding: 18, display: "grid", gap: 10 }}>
        <div>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <div>
          <strong>LinkedIn:</strong>{" "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            {profile.linkedin}
          </a>
        </div>
        <div>
          <strong>Phone:</strong> {profile.phone}
        </div>
      </div>
    </Section>
  );
}
