"use client";

import React from "react";

import { projectsData } from "@/lib/data";

import SectionHeading from "@/components/section-heading";
import Project from "@/components/project";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Recent projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
