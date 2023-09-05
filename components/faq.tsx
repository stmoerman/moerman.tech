"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { faqData } from "@/lib/data";

import SectionHeading from "@/components/section-heading";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    if (activeIndex === index) {
      // Clicking the same FAQ item again should close it
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <motion.section
      id="faq"
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="container px-6 py-10 mx-auto">
        <SectionHeading>Frequently asked questions</SectionHeading>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <motion.div>
          <AnimatePresence>
            {faqData.map((faq, index) => (
              <React.Fragment key={index}>
                <div key={index}>
                  <button
                    className="flex items-center focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <svg
                      className={`flex-shrink-0 w-6 h-6 text-blue-500 transition-all ${
                        activeIndex === index ? "rotate-90" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {activeIndex === index ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 12H4"
                        ></path>
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      )}
                    </svg>

                    <h1 className="mx-4 text-xl text-black dark:text-white text-left">
                      {faq.question}
                    </h1>
                  </button>

                  {activeIndex === index && (
                    <motion.div
                      className="mt-8"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: {
                          duration: 0.5,
                        },
                      }}
                      exit={{ opacity: 0 }}
                    >
                      <p
                        className="px-6 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </div>
                <hr className="my-8 border-gray-200 dark:border-gray-700 last:hidden" />
              </React.Fragment>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
