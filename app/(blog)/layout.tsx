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
    <main className="max-w-[60rem] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
