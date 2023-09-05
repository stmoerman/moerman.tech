"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { links } from "@/lib/data";

export default function HeaderNew() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="menu"
        className={`fixed z-[1000] w-screen h-screen flex justify-center items-center bg-gray-900 duration-700 ${
          isOpen ? "opacity-95" : "opacity-0 hidden"
        }`}
      >
        <button
          type="button"
          className="fixed top-6 right-8 text-white text-7xl font-semibold duration-300"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col text-white text-center text-xl font-light space-y-3">
          <div onClick={closeMenu}>
            <Link
              className={cn(
                "hover:text-amber-500 duration-300",
                pathname === "/" && "text-blue-500 font-semibold"
              )}
              href="/"
            >
              Home
            </Link>
          </div>
          <div onClick={closeMenu}>
            <Link
              className={cn(
                "hover:text-amber-500 duration-300",
                pathname === "/projects" && "text-blue-500 font-semibold"
              )}
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div onClick={closeMenu}>
            <Link
              className={cn(
                "hover:text-amber-500 duration-300",
                pathname === "/blog" && "text-blue-500 font-semibold"
              )}
              href="/blog"
            >
              Blog
            </Link>
          </div>
          <div onClick={closeMenu}>
            <Link
              className="hover:text-amber-500 duration-300"
              href="/#contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <motion.nav
        className="sm:px-2 lg:px-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className="flex flex-wrap items-center justify-between p-4">
          <Link href="/">
            <p className="text-lg sm:text-xl font-medium capitalize">
              Stephan Moerman
            </p>
          </Link>
          <div className="flex justify-center items-center">
            <button
              type="button"
              className="flex md:hidden w-full px-3 py-3 dark:text-white dark:hover:underline bg-gray-900 text-white rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all mr-2"
            >
              Hire me
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-12 h-12 justify-center text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded="false"
              onClick={openMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              {links.map((link) =>
                link.button ? (
                  <motion.li
                    className="h-3/4 flex items-center justify-center relative"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <Link
                      className="flex w-full items-center justify-center px-3 py-3 dark:text-white bg-gray-900 text-white rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
                      href={link.hash}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    className="h-3/4 items-center justify-center relative hidden md:flex"
                    key={link.hash}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <Link
                      className={cn(
                        "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:underline",
                        pathname === link.hash &&
                          "text-blue-600 dark:underline font-semibold"
                      )}
                      href={link.hash}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
