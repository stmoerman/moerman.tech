import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/80">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Stephan Moerman. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React &amp; Next.js (App Router &amp; Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email &amp; Resend, Vercel hosting.
      </p>
    </footer>
  );
}
