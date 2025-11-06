import React from "react";
import Section from "./Section";
import Timeline from "./Timeline";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Designing intelligent systems and scalable web platforms."
    >
      <Timeline items={experience} />
    </Section>
  );
}
