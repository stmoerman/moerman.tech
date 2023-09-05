"use client";

import React from "react";
import Image from "next/image";

const navigation = {
  services: [
    { name: "Next.js Development", href: "/nextjs-development" },
    { name: "JavaScript Development", href: "/javascript-development" },
    { name: "React Development", href: "/react-development" },
    { name: "Node.js Development", href: "/nodejs-development" },
    { name: "SaaS Development", href: "/saas-development" },
  ],
  legal: [
    { name: "Open Source Projects", href: "https://github.com/stmoerman" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="mb-16 sm:mb-10">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              className="h-20 w-20 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              src="/stephan-moerman.png"
              alt="Stephan Moerman portrait"
              width="192"
              height="192"
              quality="95"
            />
            <div>
              <p className="leading-6 text-gray-600 dark:text-gray-200">
                Hey, my name is Stephan!
              </p>
              <p className="leading-6 text-gray-600 dark:text-gray-400">
                I'm a freelance web developer from The Netherlands, specialized
                in React and Node.js.
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  More
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* TODO: Integrate newsletter */}
        {/* <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-56 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div> */}
        <div className="mt-8 border-t border-gray-900/10 pt-8">
          <small className="mb-2 block text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Stephan Moerman. All rights
            reserved.
          </small>
          <p className="text-xs text-gray-500 mt-2">
            <span className="font-semibold">About this website:</span> built
            with React &amp; Next.js (App Router &amp; Server Actions),
            TypeScript, Tailwind CSS, Framer Motion, React Email &amp; Resend,
            Vercel hosting.
          </p>
        </div>
      </div>
    </footer>
  );
}
