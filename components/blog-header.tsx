"use client";

import { Post } from "@/lib/interface";
import React from "react";

import { motion } from "framer-motion";

interface BlogHeaderProps {
  data: Post;
}

export default function BlogHeader({ data }: BlogHeaderProps) {
  return (
    <motion.header
      className="pt-6 xl:pb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div className="space-y-1">
        <div className="space-y-10">
          <div>
            <p className="text-base font-medium leading-6 text-blue-600 dark:text-blue-300">
              {new Date(data._createdAt).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-900 dark:text-gray-100">
            {data.title}
          </h1>
        </div>
      </div>
    </motion.header>
  );
}
