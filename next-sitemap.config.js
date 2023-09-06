/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.moerman.tech",
  generateRobotsTxt: true, // (optional)
  outDir: "./public",
  exclude: ["./app/api/server-sitemap.xml/*"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`, // <==== Add here
    ],
  },
  // additionalPaths: "./app/blog/[slug]/**",
  // ...other options
};
