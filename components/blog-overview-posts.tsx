"use client";

import { Post } from "@/lib/interface";

import Link from "next/link";

interface BlogOverViewPostsProps {
  data: Post[];
}

export default function BlogOverviewPosts({ data }: BlogOverViewPostsProps) {
  return (
    <ul>
      {data.map((post, index) => (
        <li className="py-4" key={index}>
          <article className="space-y-2 xl:grid xl:grid-cols-4 xl:item-baseline xl:space-y-0">
            <div>
              <p className="text-base font-medium leading-6 text-blue-600 dark:text-blue-300">
                {new Date(post._createdAt).toISOString().split("T")[0]}
              </p>
            </div>
            <Link
              href={`/blog/${post.slug.current}`}
              prefetch
              className="space-y-3 xl:col-span-3"
            >
              <div>
                <h3 className="text-2xl font-medium leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
              </div>
              <p className="prose max-w-none  dark:text-gray-300 line-clamp-3">
                {post.overview}
              </p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
