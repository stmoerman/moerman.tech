"use client";

import { motion } from "framer-motion";

export default function BlogOverviewHeader() {
  return (
    <motion.div
      className="space-y-2 pt-8 sm:pt-36 pb-8 md:space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
    >
      <h1 className="text-2xl font-medium !leading-[1.5] sm:text-4xl">Blog</h1>
      <p className="text-gray-950 dark:text-gray-100">
        Here I share the knowledge I acquire and the solutions I uncover during
        my daily work as a fullstack developer.
      </p>
    </motion.div>
  );
}
