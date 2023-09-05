import "@/app/globals.css";
import "@/app/code-highlight.css";

export const metadata = {
  title: "Freelance Web Developer - Stephan Moerman",
  description:
    "Stephan Moerman is a freelance web developer from The Netherlands with over 10 years of experience, specialized in Next.js and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      {children}
    </main>
  );
}
