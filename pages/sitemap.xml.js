import groq from "groq";
import { client } from "@/lib/sanity";

export default function SiteMap() {
  return <div>loading</div>;
}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://www.moerman.tech`;
  const query = groq`{
      "blogs": *[_type == "post"],
    }`;
  const urls = await client.fetch(query);
  const blogs = urls.blogs.map((page) => {
    const slug =
      page.slug.current === "/" ? "/blog/" : `/blog/${page.slug.current}`;
    return `
      <loc>${baseUrl}${slug}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    `;
  });

  const locations = [...blogs];
  const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.moerman.tech/</loc>
        <lastmod>2023-09-05T20:37:12+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.moerman.tech/projects</loc>
        <lastmod>2023-09-05T20:37:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.moerman.tech/blog</loc>
        <lastmod>2023-09-05T20:37:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.moerman.tech/CV-placeholder.pdf</loc>
        <lastmod>2023-09-05T20:37:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      ${locations
        .map((location) => {
          return `<url>
                    ${location}
                  </url>
                `;
        })
        .join("")}
    </urlset>
    `;
  res.setHeader("Content-Type", "text/xml");
  res.write(createSitemap());
  res.end();
  return {
    props: {},
  };
}
