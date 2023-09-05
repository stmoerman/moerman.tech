import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity";

import BlogHeader from "@/components/blog-header";
import BlogContent from "@/components/blog-content";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  return (
    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
      <BlogHeader data={data} />
      <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <BlogContent data={data} />
        </div>
      </div>
    </div>
  );
}
