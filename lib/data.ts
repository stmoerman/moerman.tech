import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "/",
    button: false,
  },
  {
    name: "Projects",
    hash: "/projects",
    button: false,
  },
  {
    name: "Blog",
    hash: "/blog",
    button: false,
  },
  {
    name: "Hire me",
    hash: "/#contact",
    button: true,
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Framer Motion",
] as const;

export const faqData = [
  {
    question:
      "What is Next.js, and how does it differ from regular React development?",
    answer:
      "Next.js is a framework for React that simplifies server-side rendering and routing, making it ideal for building server-rendered React applications. Unlike traditional React, it offers features like automatic code splitting and server-side rendering for SEO optimization.",
  },
  {
    question: "What kind of clients do you work with?",
    answer:
      "I work with a diverse range of clients, including startups, small businesses, and larger enterprises. My goal is to provide tailored solutions to meet the unique needs of each client.",
  },
  {
    question:
      "Do you provide ongoing maintenance and support for projects after they are completed?",
    answer:
      "Yes, I offer ongoing maintenance and support services to ensure your project remains up-to-date, secure, and bug-free. This includes regular updates and troubleshooting, as well as addressing any new requirements or features.",
  },
  {
    question: "How much will my project cost?",
    answer:
      "You'll be disappointed to hear this, but: it depends on the scope of the project! The best way to find out, is to <a href='/#contact' class='faqLink dark:text-white'>contact me</a>, tell me more about your project and get a free proposal from me.",
  },
  {
    question: "Which CMS do you use?",
    answer:
      "I really enjoy using <a href='https://sanity.io' target='_blank' rel='noopener noreferrer' class='faqLink dark:text-white'>Sanity.io</a> for its great built-in components and data types. I love that it's headless, schema-based and super extensible. I also have experience with WordPress, Storyblok and Strapi",
  },
  {
    question: "What is your hourly rate?",
    answer:
      "I'm all about clarity and efficiency when it comes to pricing. Instead of hourly rates, I offer you the beauty of a fixed-price approach. This means you get a crystal-clear understanding of what you're investing in, the total cost, and the precise delivery timeline. ⏱️ <br /><br /> Why is this great for you? Well, not only does it give you peace of mind, but it also motivates me to be a speed demon – I'll race to complete your project as swiftly as humanly possible! With fixed pricing, we're both winners, and your project gets the royal treatment it deserves.",
  },
  {
    question: "Do you use TypeScript?",
    answer:
      "Absolutely! I love to sprinkle a touch of TypeScript magic on my projects—well, most of them, except for those super straightforward ones. 🪄✨ <br /> <br />But hey, don't fret if TypeScript isn't your jam. I'm also quite the maestro when it comes to plain old JavaScript. With the right dose of solid testing, top-notch development practices, and some nifty linting setups, we can take your project to incredible heights!",
  },
] as const;
