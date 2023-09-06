import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <FAQ />
      <Contact />
    </main>
  );
}
