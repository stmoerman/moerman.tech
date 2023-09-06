import groq from "groq";
import { client } from "@/lib/sanity";
import { getServerSideSitemap } from "next-sitemap";

export async function GET() {
  const query = groq`{
      "blogs": *[_type == "post"],
    }`;
  const urls = await client.fetch(query);

  const pageUrls = urls.blogs.map((i: { slug: { current: any } }) => {
    return {
      loc: `${process.env.SITE_URL}/blog/${i.slug.current}`, // <-- don't forget to define `url`
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    };
  });

  return getServerSideSitemap(urls); // <-- only pass in `urls`
}
