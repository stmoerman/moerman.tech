"use client";

import React from "react";

import { motion } from "framer-motion";

import SectionHeading from "@/components/section-heading";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a self-taught{" "}
        <span className="font-medium">Freelance Web Developer</span> with over a
        decade of hands-on experience, I've had the opportunity to work on a
        diverse range of projects, including{" "}
        <span className="font-medium">
          full-stack applications, marketplaces, SaaS solutions, and social
          media platforms
        </span>
        . Prior to embracing the world of freelancing, I served as the Chief
        Technology Officer (CTO) for a social blogging platform and a space
        rental platform.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>

      <p className="mb-3">
        I am currently available for a{" "}
        <span className="font-medium">new opportunity</span> as a remote
        software developer. If you're working on something cool, I'd love to{" "}
        <span className="font-medium">connect</span> to see if we can{" "}
        <span className="font-medium">collaborate</span>.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and spending time with my family.
        I also enjoy <span className="font-medium">learning new things</span>. I
        am currently learning about{" "}
        <span className="font-medium">electrical engineering and IoT</span>. My
        favorite passtime for the weekends is to watch Formula 1 races.
      </p>
    </motion.section>
  );
}
