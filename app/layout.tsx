import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        {children}
      </body>
    </html>
  );
}
