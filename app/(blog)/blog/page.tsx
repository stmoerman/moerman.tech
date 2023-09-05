import { client } from "@/lib/sanity";
import { Post } from "@/lib/interface";

import BlogOverviewHeader from "@/components/blog-overview-header";
import BlogOverviewPosts from "@/components/blog-overview-posts";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = (await getData()) as Post[];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-300">
      <BlogOverviewHeader />
      <BlogOverviewPosts data={data} />
    </div>
  );
}
